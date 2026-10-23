const SAMPLE_NAMES = ['tap', 'move', 'land', 'pack', 'undo', 'blocked', 'win'];
const CROSSFADE = 0.8;
const MAX_VOICES = 6;
const clamp = (value, min, max, fallback) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;

// Original recordings and licenses are registered as RES-PACK-V2-AUDIO-01/02.
// Music bytes are unchanged. The overlap envelopes below are playback edits.
export class FactoryAudio {
  constructor(settings = {}) {
    this.settings = { music: settings.music !== false, sfx: settings.sfx !== false };
    this.context = null;
    this.buffers = new Map();
    this.loading = new Map();
    this.attempts = new Map();
    this.controllers = new Set();
    this.voices = new Set();
    this.musicVoices = new Set();
    this.paused = false;
    this.unlocked = false;
    this.destroyed = false;
    this.musicOffset = 0;
    this.nextMusicAt = null;
    this.scheduler = null;
    this.unlocking = null;
    this.visibilityHandler = () => { void this._sync(); };
    globalThis.document?.addEventListener('visibilitychange', this.visibilityHandler);
  }

  get hidden() { return globalThis.document?.hidden === true; }
  get active() { return this.unlocked && !this.paused && !this.hidden && !this.destroyed; }
  get status() {
    return { unlocked: this.unlocked, paused: this.paused, hidden: this.hidden,
      context: this.context?.state ?? 'unavailable', loaded: [...this.buffers.keys()],
      voices: this.voices.size, musicVoices: this.musicVoices.size, destroyed: this.destroyed };
  }

  async unlock() {
    if (this.destroyed) return false;
    if (this.unlocking) return this.unlocking;
    this.unlocking = (async () => {
      try {
        if (!this.context) {
          const Context = globalThis.AudioContext || globalThis.webkitAudioContext;
          if (!Context) return false;
          this.context = new Context();
          this.master = this.context.createGain();
          this.musicBus = this.context.createGain();
          this.effectsBus = this.context.createGain();
          this.master.gain.value = 0;
          this.musicBus.gain.value = 0.35;
          this.effectsBus.gain.value = 0.14;
          this.musicBus.connect(this.master);
          this.effectsBus.connect(this.master);
          this.master.connect(this.context.destination);
        }
        if (this.context.state === 'closed') return false;
        // Call resume while still in the user gesture, before starting network IO.
        await this.context.resume();
        if (this.destroyed) return false;
        this.unlocked = this.context.state === 'running';
        for (const name of ['music', ...SAMPLE_NAMES]) {
          void this._load(name).then(() => this._sync()).catch(() => {});
        }
        await this._sync();
        return this.unlocked;
      } catch { return false; }
    })();
    try { return await this.unlocking; } finally { this.unlocking = null; }
  }

  setSettings(settings = {}) {
    for (const name of ['music', 'sfx']) {
      if (typeof settings[name] === 'boolean') this.settings[name] = settings[name];
    }
    void this._sync();
  }

  setPaused(paused) {
    this.paused = Boolean(paused);
    void this._sync();
  }

  async _load(name) {
    if (this.destroyed || !this.context || this.context.state === 'closed') return null;
    if (this.buffers.has(name)) return this.buffers.get(name);
    if (this.loading.has(name)) return this.loading.get(name);
    if (Date.now() - (this.attempts.get(name) ?? -Infinity) < 1000) return null;
    this.attempts.set(name, Date.now());
    const context = this.context;
    const controller = new AbortController();
    this.controllers.add(controller);
    const timeout = setTimeout(() => controller.abort(), 12000);
    const task = (async () => {
      try {
        // Register the pending task before even a synchronous fetch failure.
        await Promise.resolve();
        const url = new URL(`./assets/audio/${name === 'music' ? 'music.mp3' : `${name}.wav`}`, import.meta.url);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) return null;
        const data = await response.arrayBuffer();
        if (this.destroyed) return null;
        const buffer = await context.decodeAudioData(data);
        if (this.destroyed || !(buffer.duration > 0) || (name === 'music' && buffer.duration < 2)) return null;
        this.buffers.set(name, buffer);
        return buffer;
      } catch { return null; }
      finally {
        clearTimeout(timeout);
        this.controllers.delete(controller);
        this.loading.delete(name);
      }
    })();
    this.loading.set(name, task);
    return task;
  }

  async _sync() {
    const context = this.context;
    if (!context || this.destroyed || context.state === 'closed') return;
    try {
      if (!this.active) {
        this.master.gain.cancelScheduledValues(context.currentTime);
        this.master.gain.setValueAtTime(0, context.currentTime);
        this._stopMusic(true);
        this._stopEffects();
        await context.suspend();
        return;
      }
      if (context.state !== 'running') await context.resume();
      // A visibility or pause change may have happened during resume().
      if (!this.active) { await this._sync(); return; }
      this.master.gain.cancelScheduledValues(context.currentTime);
      this.master.gain.setTargetAtTime(0.8, context.currentTime, 0.015);
      if (!this.settings.sfx) this._stopEffects();
      if (this.settings.music && this.buffers.has('music')) this._startMusic();
      else this._stopMusic(true);
    } catch { /* Browser audio policy must never interrupt the game. */ }
  }

  play(name, { pitch = 1, volume = 1 } = {}) {
    if (!SAMPLE_NAMES.includes(name) || !this.active || !this.settings.sfx || this.context?.state !== 'running') return false;
    const buffer = this.buffers.get(name);
    if (!buffer) { void this._load(name); return false; }
    // Keep the strict six-voice bound, including very rapid repeat input.
    if (this.voices.size >= MAX_VOICES) return false;
    let voice;
    try {
      const source = this.context.createBufferSource();
      const gain = this.context.createGain();
      source.buffer = buffer;
      source.playbackRate.value = clamp(pitch, 0.5, 2.5, 1);
      gain.gain.value = clamp(volume, 0, 1, 1);
      source.connect(gain);
      gain.connect(this.effectsBus);
      voice = { source, gain };
      this.voices.add(voice);
      source.onended = () => this._release(voice, this.voices);
      source.start();
      return true;
    } catch {
      if (voice) this._release(voice, this.voices);
      return false;
    }
  }

  _release(voice, collection) {
    collection.delete(voice);
    try { voice.source.disconnect(); voice.gain.disconnect(); } catch {}
  }

  _stopEffects() {
    for (const voice of [...this.voices]) {
      try { voice.source.stop(); } catch {}
      this._release(voice, this.voices);
    }
  }

  _startMusic() {
    if (this.scheduler !== null || !this.active || !this.settings.music) return;
    this.nextMusicAt = this.context.currentTime + 0.025;
    this._scheduleMusic();
    this.scheduler = setInterval(() => this._scheduleMusic(), 200);
  }

  _scheduleMusic() {
    if (!this.active || !this.settings.music || this.context?.state !== 'running') return;
    const buffer = this.buffers.get('music');
    if (!buffer) return;
    try {
      const now = this.context.currentTime;
      if (this.nextMusicAt < now - 0.05) this.nextMusicAt = now + 0.025;
      while (this.nextMusicAt < now + 2) {
        const offset = clamp(this.musicOffset, 0, Math.max(0, buffer.duration - 0.05), 0);
        const duration = buffer.duration - offset;
        const overlap = Math.min(CROSSFADE, duration / 2);
        const at = this.nextMusicAt;
        const source = this.context.createBufferSource();
        const gain = this.context.createGain();
        source.buffer = buffer;
        source.connect(gain);
        gain.connect(this.musicBus);
        gain.gain.setValueAtTime(0, at);
        gain.gain.linearRampToValueAtTime(1, at + overlap);
        gain.gain.setValueAtTime(1, at + duration - overlap);
        gain.gain.linearRampToValueAtTime(0, at + duration);
        const voice = { source, gain, at, offset, duration };
        this.musicVoices.add(voice);
        source.onended = () => this._release(voice, this.musicVoices);
        source.start(at, offset, duration);
        this.musicOffset = 0;
        this.nextMusicAt = at + duration - overlap;
      }
    } catch { this._stopMusic(false); }
  }

  _stopMusic(preservePosition) {
    if (this.scheduler !== null) clearInterval(this.scheduler);
    this.scheduler = null;
    if (preservePosition && this.context) {
      const now = this.context.currentTime;
      const current = [...this.musicVoices].filter(v => v.at <= now).sort((a, b) => b.at - a.at)[0];
      if (current) this.musicOffset = Math.min(current.offset + now - current.at, current.offset + current.duration - 0.05);
    }
    for (const voice of [...this.musicVoices]) {
      try { voice.source.stop(); } catch {}
      this._release(voice, this.musicVoices);
    }
    this.nextMusicAt = null;
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    globalThis.document?.removeEventListener('visibilitychange', this.visibilityHandler);
    this._stopMusic(false);
    this._stopEffects();
    for (const controller of this.controllers) controller.abort();
    this.controllers.clear();
    this.buffers.clear();
    try { this.master?.disconnect(); this.musicBus?.disconnect(); this.effectsBus?.disconnect(); } catch {}
    try { void this.context?.close().catch(() => {}); } catch {}
  }
}
