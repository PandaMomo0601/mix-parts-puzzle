// Playback layers use only registered Kenney samples and unchanged BGM bytes.
// No oscillators, noise generators, or new audio assets are introduced here.
const SAMPLES = ['tap', 'move', 'land', 'pack', 'box', 'undo', 'blocked', 'win'];
const COLORS = ['R', 'Y', 'G', 'B'];
export const AUDIO_MIX = Object.freeze({ voices: 16, master: 0.8, effects: 0.30, effectWeight: 2.0, music: 0.26,
  duckDb: -3, duckAttack: 0.03, duckHold: 0.20, duckRelease: 0.35, voiceFade: 0.004, crossfade: 0.8 });
const clamp = (n, lo, hi, fallback) => Number.isFinite(n) ? Math.max(lo, Math.min(hi, n)) : fallback;

export class FactoryAudio {
  constructor(settings = {}) {
    this.settings = { music: settings.music !== false, sfx: settings.sfx !== false };
    this.context = null; this.buffers = new Map(); this.loading = new Map(); this.attempts = new Map();
    this.controllers = new Set(); this.voices = new Set(); this.musicVoices = new Set();
    this.paused = false; this.unlocked = false; this.destroyed = false;
    this.musicOffset = 0; this.nextMusicAt = null; this.scheduler = null; this.unlocking = null;
    this.duckEnvelope = null; this.recentEvents = [];
    this.stats = { landRequested: 0, landPlayed: 0, landSuppressed: 0, landUnavailable: 0,
      rowRequested: 0, rowPlayed: 0, rowSuppressed: 0, rowUnavailable: 0,
      otherRequested: 0, otherPlayed: 0, otherSuppressed: 0, otherUnavailable: 0,
      voicesStarted: 0, voicesStolen: 0, peakVoices: 0, duckTriggers: 0, loadFailures: 0, playbackErrors: 0 };
    this.visibilityHandler = () => { void this._sync(); };
    globalThis.document?.addEventListener('visibilitychange', this.visibilityHandler);
  }
  get hidden() { return globalThis.document?.hidden === true; }
  get active() { return this.unlocked && !this.paused && !this.hidden && !this.destroyed; }
  get ready() { return SAMPLES.every(name => this.buffers.has(name)); }
  get canSchedule() { return this.context && this.context.state !== 'closed' &&
    (this.context.state === 'running' || typeof this.context.startRendering === 'function'); }
  get status() { return { unlocked: this.unlocked, paused: this.paused, hidden: this.hidden,
    context: this.context?.state ?? 'unavailable', ready: this.ready, loaded: [...this.buffers.keys()],
    failedSamples: SAMPLES.filter(name => !this.buffers.has(name) && !this.loading.has(name)),
    voices: this.voices.size, musicVoices: this.musicVoices.size, destroyed: this.destroyed,
    stats: { ...this.stats }, recentEvents: this.recentEvents.map(event => ({ ...event })) }; }
  _ensureContext() {
    if (this.context) return this.context;
    const Context = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!Context || this.destroyed) return null;
    this._connect(new Context()); return this.context;
  }
  // The same graph can attach to OfflineAudioContext for sample-based QA.
  _connect(context) {
    this.context = context;
    this.master = context.createGain(); this.musicBus = context.createGain(); this.effectsBus = context.createGain();
    this.master.gain.value = 0; this.musicBus.gain.value = AUDIO_MIX.music; this.effectsBus.gain.value = AUDIO_MIX.effects;
    this.musicBus.connect(this.master); this.effectsBus.connect(this.master); this.master.connect(context.destination);
  }
  async prepare({ retry = false } = {}) {
    try {
      if (!this._ensureContext() || this.destroyed || this.context.state === 'closed') return false;
      // A slow MP3 must not delay short action sample readiness.
      void this._load('music', retry).then(() => { if (this.unlocked) return this._sync(); }).catch(() => {});
      await Promise.all(SAMPLES.map(name => this._load(name, retry))); return this.ready;
    } catch { return false; }
  }
  async unlock() {
    if (this.destroyed) return false;
    if (this.unlocking) return this.unlocking;
    this.unlocking = (async () => {
      try {
        const context = this._ensureContext(); if (!context || context.state === 'closed') return false;
        const resumed = context.resume(); // Start in the input gesture, before network work.
        const prepared = this.prepare({ retry: true }); await resumed;
        if (this.destroyed) return false;
        this.unlocked = context.state === 'running'; await this._sync(); await prepared;
        return this.unlocked && this.ready;
      } catch { return false; }
    })();
    try { return await this.unlocking; } finally { this.unlocking = null; }
  }
  setSettings(settings = {}) {
    for (const name of ['music', 'sfx']) if (typeof settings[name] === 'boolean') this.settings[name] = settings[name];
    return this._sync();
  }
  setPaused(paused) { this.paused = Boolean(paused); return this._sync(); }
  async _load(name, force = false) {
    if (this.destroyed || !this.context || this.context.state === 'closed') return null;
    if (this.buffers.has(name)) return this.buffers.get(name);
    if (this.loading.has(name)) return this.loading.get(name);
    if (!force && Date.now() - (this.attempts.get(name) ?? -Infinity) < 1000) return null;
    this.attempts.set(name, Date.now());
    const context = this.context, controller = new AbortController(); this.controllers.add(controller);
    const timeout = setTimeout(() => controller.abort(), 12000);
    const task = (async () => {
      try {
        await Promise.resolve();
        const url = new URL(`./assets/audio/${name === 'music' ? 'music.mp3' : name + '.wav'}`, import.meta.url);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error('Audio response ' + response.status);
        const buffer = await context.decodeAudioData(await response.arrayBuffer());
        if (this.destroyed || !(buffer.duration > 0) || (name === 'music' && buffer.duration < 2)) return null;
        this.buffers.set(name, buffer); return buffer;
      } catch { this.stats.loadFailures++; return null; }
      finally { clearTimeout(timeout); this.controllers.delete(controller); this.loading.delete(name); }
    })();
    this.loading.set(name, task); return task;
  }
  async _sync() {
    const context = this.context; if (!context || !this.unlocked || this.destroyed || context.state === 'closed') return;
    try {
      if (!this.active) {
        this.master.gain.cancelScheduledValues(context.currentTime); this.master.gain.setValueAtTime(0, context.currentTime);
        this._stopMusic(true); this._stopEffects(); this.duckEnvelope = null; await context.suspend(); return;
      }
      if (context.state !== 'running') await context.resume();
      if (!this.active) { await this._sync(); return; }
      this.master.gain.cancelScheduledValues(context.currentTime);
      this.master.gain.setTargetAtTime(AUDIO_MIX.master, context.currentTime, 0.015);
      if (!this.settings.sfx) this._stopEffects();
      if (this.settings.music && this.buffers.has('music')) this._startMusic(); else this._stopMusic(true);
    } catch { /* Audio availability never changes game rules. */ }
  }
  land({ color = 'R', x = 0.5, at, volume = 1, eventId = null } = {}) {
    const index = typeof color === 'number' ? Math.floor(clamp(color, 0, 3, 0)) : Math.max(0, COLORS.indexOf(color));
    const pitch = [0.97, 0.99, 1.01, 1.03][index];
    const v = clamp(volume, 0, 1, 1), pan = (clamp(x, 0, 1, 0.5) - 0.5) * 0.5;
    return this._event('land', [{ name: 'tap', volume: 0.50 * v, pitch, pan },
      { name: 'land', volume: 0.18 * v, pitch, pan }], at, { color: COLORS[index], x, eventId });
  }
  rowReturn({ at, eventId = null } = {}) {
    return this._event('row', [{ name: 'pack', volume: 0.48, pitch: 0.98, pan: 0 },
      { name: 'box', volume: 0.18, pitch: 1, pan: 0 }], at, { eventId });
  }
  play(name, options = {}) {
    if (name === 'land') return this.land(options);
    if (!SAMPLES.includes(name)) return false;
    return this._event('other', [{ name, volume: 0.65 * clamp(options.volume, 0, 1, 1),
      pitch: clamp(options.pitch, 0.94, 1.06, 1), pan: 0 }], options.at, { name });
  }
  _event(kind, layers, requestedAt, details = {}) {
    this.stats[kind + 'Requested']++;
    if (!this.active || !this.settings.sfx || !this.canSchedule) { this.stats[kind + 'Suppressed']++; return false; }
    if (layers.some(layer => !this.buffers.has(layer.name))) {
      this.stats[kind + 'Unavailable']++;
      for (const layer of layers) if (!this.buffers.has(layer.name)) void this._load(layer.name);
      return false; // Never replay stale gameplay sounds after a delayed download.
    }
    const at = Math.max(this.context.currentTime, Number.isFinite(requestedAt) ? requestedAt : this.context.currentTime);
    this._reserve(layers.length, at); const created = [];
    try {
      for (const layer of layers) created.push(this._voice(layer, at + AUDIO_MIX.voiceFade));
      this._normalizeEffects(at); if (kind === 'land' || kind === 'row') this._duck(at);
      this.stats[kind + 'Played']++;
      this.recentEvents.push({ type: kind, at, ...details, layers: created.length });
      if (this.recentEvents.length > 128) this.recentEvents.shift(); return true;
    } catch {
      for (const voice of created) this._stopVoice(voice, at);
      this.stats.playbackErrors++; return false;
    }
  }
  _reserve(count, at) {
    for (const voice of this.voices) if (voice.end <= at) this.voices.delete(voice);
    while (this.voices.size + count > AUDIO_MIX.voices) {
      const oldest = [...this.voices].sort((a, b) => a.start - b.start || a.weight - b.weight)[0];
      this._stopVoice(oldest, at, AUDIO_MIX.voiceFade); this.stats.voicesStolen++;
    }
  }
  _voice({ name, volume, pitch, pan }, start) {
    const context = this.context, buffer = this.buffers.get(name);
    const source = context.createBufferSource(), gain = context.createGain(), panner = context.createStereoPanner?.();
    source.buffer = buffer; source.playbackRate.value = pitch; gain.gain.value = volume; source.connect(gain);
    if (panner) { panner.pan.value = pan; gain.connect(panner); panner.connect(this.effectsBus); } else gain.connect(this.effectsBus);
    const voice = { source, gain, panner, start, end: start + buffer.duration / pitch, weight: volume };
    this.voices.add(voice); source.onended = () => this._release(voice, this.voices); source.start(start);
    this.stats.voicesStarted++; this.stats.peakVoices = Math.max(this.stats.peakVoices, this.voices.size); return voice;
  }
  _normalizeEffects(at) {
    const weight = [...this.voices].reduce((sum, voice) => sum + voice.weight, 0);
    const target = AUDIO_MIX.effects * Math.min(1, AUDIO_MIX.effectWeight / Math.max(weight, 0.001));
    const gain = this.effectsBus.gain;
    if (gain.cancelAndHoldAtTime) gain.cancelAndHoldAtTime(at); else { gain.cancelScheduledValues(at); gain.setValueAtTime(gain.value, at); }
    gain.linearRampToValueAtTime(target, at + AUDIO_MIX.voiceFade);
  }
  _musicLevelAt(at) {
    const e = this.duckEnvelope, base = AUDIO_MIX.music; if (!e || at >= e.releaseEnd) return base;
    if (at < e.attackEnd) return e.from + (e.target - e.from) * Math.max(0, (at - e.start) / (e.attackEnd - e.start));
    if (at <= e.holdEnd) return e.target;
    return e.target + (base - e.target) * (at - e.holdEnd) / (e.releaseEnd - e.holdEnd);
  }
  _duck(at) {
    const gain = this.musicBus.gain, target = AUDIO_MIX.music * 10 ** (AUDIO_MIX.duckDb / 20);
    const from = this._musicLevelAt(at), attackEnd = at + AUDIO_MIX.duckAttack;
    const holdEnd = at + AUDIO_MIX.duckHold, releaseEnd = holdEnd + AUDIO_MIX.duckRelease;
    gain.cancelScheduledValues(at); gain.setValueAtTime(from, at); gain.linearRampToValueAtTime(target, attackEnd);
    gain.setValueAtTime(target, holdEnd); gain.linearRampToValueAtTime(AUDIO_MIX.music, releaseEnd);
    this.duckEnvelope = { start: at, from, target, attackEnd, holdEnd, releaseEnd }; this.stats.duckTriggers++;
  }
  _stopVoice(voice, at, fade = 0) {
    if (!voice) return;
    try { voice.gain.gain.cancelScheduledValues(at); voice.gain.gain.setValueAtTime(voice.weight, at);
      voice.gain.gain.linearRampToValueAtTime(0, at + fade); voice.source.stop(at + fade); } catch {}
    this.voices.delete(voice);
    // onended owns disconnection: future offline sources must remain connected.
  }
  _release(voice, collection) {
    collection.delete(voice); try { voice.source.disconnect(); voice.gain.disconnect(); voice.panner?.disconnect(); } catch {}
  }
  _stopEffects() {
    const now = this.context?.currentTime ?? 0;
    for (const voice of [...this.voices]) this._stopVoice(voice, now);
    if (this.effectsBus) { this.effectsBus.gain.cancelScheduledValues(now); this.effectsBus.gain.setValueAtTime(AUDIO_MIX.effects, now); }
  }
  _startMusic() {
    if (this.scheduler !== null || !this.active || !this.settings.music) return;
    this.nextMusicAt = this.context.currentTime + 0.025;
    this.musicBus.gain.setValueAtTime(this._musicLevelAt(this.context.currentTime), this.context.currentTime);
    this._scheduleMusic(); this.scheduler = setInterval(() => this._scheduleMusic(), 200);
  }
  _scheduleMusic() {
    if (!this.active || !this.settings.music || !this.canSchedule) return;
    const buffer = this.buffers.get('music'); if (!buffer) return;
    try {
      const now = this.context.currentTime; if (this.nextMusicAt < now - 0.05) this.nextMusicAt = now + 0.025;
      while (this.nextMusicAt < now + 2) {
        const offset = clamp(this.musicOffset, 0, Math.max(0, buffer.duration - 0.05), 0);
        const duration = buffer.duration - offset, overlap = Math.min(AUDIO_MIX.crossfade, duration / 2), at = this.nextMusicAt;
        const source = this.context.createBufferSource(), gain = this.context.createGain();
        source.buffer = buffer; source.connect(gain); gain.connect(this.musicBus);
        gain.gain.setValueAtTime(0, at); gain.gain.linearRampToValueAtTime(1, at + overlap);
        gain.gain.setValueAtTime(1, at + duration - overlap); gain.gain.linearRampToValueAtTime(0, at + duration);
        const voice = { source, gain, at, offset, duration }; this.musicVoices.add(voice);
        source.onended = () => this._release(voice, this.musicVoices); source.start(at, offset, duration);
        this.musicOffset = 0; this.nextMusicAt = at + duration - overlap;
      }
    } catch { this._stopMusic(false); }
  }
  _stopMusic(preservePosition) {
    if (this.scheduler !== null) clearInterval(this.scheduler); this.scheduler = null;
    if (preservePosition && this.context) {
      const now = this.context.currentTime, current = [...this.musicVoices].filter(v => v.at <= now).sort((a, b) => b.at - a.at)[0];
      if (current) this.musicOffset = Math.min(current.offset + now - current.at, current.offset + current.duration - 0.05);
    }
    for (const voice of [...this.musicVoices]) { try { voice.source.stop(); } catch {} this._release(voice, this.musicVoices); }
    this.nextMusicAt = null;
  }
  destroy() {
    if (this.destroyed) return; this.destroyed = true;
    globalThis.document?.removeEventListener('visibilitychange', this.visibilityHandler);
    this._stopMusic(false); this._stopEffects();
    for (const controller of this.controllers) controller.abort(); this.controllers.clear(); this.buffers.clear();
    try { this.master?.disconnect(); this.musicBus?.disconnect(); this.effectsBus?.disconnect(); } catch {}
    try { void this.context?.close?.().catch(() => {}); } catch {}
  }
}
