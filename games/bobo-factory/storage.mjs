export const STORAGE_KEY = 'bobo-factory-v2';
export const PROGRESS_VERSION = 2;
const LEVEL_COUNT = 105;
const MAX_SAVE_LENGTH = 250000;
const MAX_ASSISTS = 1000000;
const SESSION_KEYS = ['version', 'levelId', 'sourceLevelId', 'sourceSha256', 'fingerprint', 'moves'];
const CHAPTERS = Object.freeze([
  Object.freeze({ name: '教学', index: 0, start: 0, end: 4 }),
  Object.freeze({ name: '让路', index: 1, start: 5, end: 24 }),
  Object.freeze({ name: '借位', index: 2, start: 25, end: 54 }),
  Object.freeze({ name: '精准装盒', index: 3, start: 55, end: 79 }),
  Object.freeze({ name: '大师工坊', index: 4, start: 80, end: 104 })
]);

const validLevel = value => Number.isInteger(value) && value >= 0 && value < LEVEL_COUNT;
const validCount = value => Number.isSafeInteger(value) && value >= 0 && value <= MAX_ASSISTS;
const plainObject = value => value !== null && typeof value === 'object' && !Array.isArray(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
const shortString = (value, limit) => typeof value === 'string' && value.length > 0 && value.length <= limit;

export function createProgress() {
  return { version: PROGRESS_VERSION, current: 0, completed: [], records: {}, session: null, activeStats: { hintsUsed: 0, undosUsed: 0 }, settings: { music: true, sfx: true, reducedMotion: false }, tutorialSeen: false };
}

function cleanRecord(value) {
  if (!plainObject(value) || !validCount(value.hintsUsed) || !validCount(value.undosUsed) || !shortString(value.completedAt, 40)) return null;
  // Only a real canonical ISO timestamp is accepted; no Date.parse normalization
  // of impossible dates such as February 31, or arbitrary locale-dependent dates.
  const time = Date.parse(value.completedAt);
  if (!Number.isFinite(time) || new Date(time).toISOString() !== value.completedAt) return null;
  return { hintsUsed: value.hintsUsed, undosUsed: value.undosUsed, completedAt: value.completedAt };
}

function cleanSession(value) {
  if (!plainObject(value) || Object.keys(value).length !== SESSION_KEYS.length || !SESSION_KEYS.every(key => Object.hasOwn(value, key))) return null;
  if (!Number.isInteger(value.version) || value.version < 1 || value.version > 100 || !shortString(value.levelId, 80) || !validLevel(value.sourceLevelId) || !shortString(value.sourceSha256, 128) || !shortString(value.fingerprint, 64) || !Array.isArray(value.moves) || value.moves.length > 30) return null;
  const moves = [];
  for (const move of value.moves) {
    if (!plainObject(move) || Object.keys(move).length !== 2 || !Object.hasOwn(move, 'pieceId') || !Object.hasOwn(move, 'holeId') || !shortString(move.pieceId, 80) || !shortString(move.holeId, 80)) return null;
    moves.push({ pieceId: move.pieceId, holeId: move.holeId });
  }
  // This only validates shape. engine.restore remains the authority for source
  // identity, coordinates, nearest target, legality, failure and undo reconstruction.
  return { version: value.version, levelId: value.levelId, sourceLevelId: value.sourceLevelId, sourceSha256: value.sourceSha256, fingerprint: value.fingerprint, moves };
}

function cleanProgress(value) {
  const result = createProgress();
  if (!plainObject(value) || value.version !== PROGRESS_VERSION) return result;
  if (validLevel(value.current)) result.current = value.current;
  if (Array.isArray(value.completed)) result.completed = [...new Set(value.completed.filter(validLevel))].sort((a, b) => a - b);
  if (plainObject(value.records)) {
    for (const index of result.completed) {
      if (!Object.hasOwn(value.records, String(index))) continue;
      const record = cleanRecord(value.records[index]);
      if (record) result.records[index] = record;
    }
  }
  result.session = cleanSession(value.session);
  if (plainObject(value.activeStats)) {
    for (const key of ['hintsUsed', 'undosUsed']) if (Object.hasOwn(value.activeStats, key) && validCount(value.activeStats[key])) result.activeStats[key] = value.activeStats[key];
  }
  if (plainObject(value.settings)) {
    for (const key of ['music', 'sfx', 'reducedMotion']) if (typeof value.settings[key] === 'boolean') result.settings[key] = value.settings[key];
  }
  if (typeof value.tutorialSeen === 'boolean') result.tutorialSeen = value.tutorialSeen;
  return result;
}

function resolveStorage(storage) {
  // Accessing the localStorage property can itself throw in a restricted origin.
  try { return storage === undefined ? globalThis.localStorage : storage; } catch { return null; }
}

function failureReason(error) {
  if (error?.name === 'QuotaExceededError' || error?.name === 'NS_ERROR_DOM_QUOTA_REACHED' || error?.code === 22 || error?.code === 1014) return 'quota-exceeded';
  if (error?.name === 'SecurityError' || error?.name === 'NotAllowedError') return 'unavailable';
  return 'write-failed';
}

export function loadProgress(storage) {
  try {
    const target = resolveStorage(storage);
    if (!target || typeof target.getItem !== 'function') return createProgress();
    const raw = target.getItem(STORAGE_KEY);
    if (typeof raw !== 'string' || !raw || raw.length > MAX_SAVE_LENGTH) return createProgress();
    return cleanProgress(JSON.parse(raw));
  } catch {
    return createProgress();
  }
}

export function saveProgress(progress, storage) {
  let serialized;
  try {
    if (!plainObject(progress) || progress.version !== PROGRESS_VERSION) return { ok: false, reason: 'invalid-progress' };
    serialized = JSON.stringify(cleanProgress(progress));
  } catch {
    return { ok: false, reason: 'invalid-progress' };
  }
  try {
    const target = resolveStorage(storage);
    if (!target || typeof target.setItem !== 'function') return { ok: false, reason: 'unavailable' };
    target.setItem(STORAGE_KEY, serialized);
    return { ok: true, reason: null };
  } catch (error) {
    return { ok: false, reason: failureReason(error) };
  }
}

export function recordWin(progress, levelIndex, { hintsUsed = 0, undosUsed = 0 } = {}) {
  if (!plainObject(progress) || progress.version !== PROGRESS_VERSION) throw new TypeError('Expected version 2 progress');
  if (!validLevel(levelIndex)) throw new RangeError('Level index must be between 0 and 104');
  if (!validCount(hintsUsed) || !validCount(undosUsed)) throw new TypeError('Assist counts must be non-negative integers');
  const clean = cleanProgress(progress);
  if (!clean.completed.includes(levelIndex)) clean.completed.push(levelIndex);
  clean.completed.sort((a, b) => a - b);
  const previous = clean.records[levelIndex];
  const unassisted = hintsUsed === 0 && undosUsed === 0;
  const previouslyAssisted = previous && (previous.hintsUsed > 0 || previous.undosUsed > 0);
  // Keep the first completion within each assistance class. Only an unassisted
  // win replaces an assisted one; move counts are deliberately not a score.
  if (!previous || (unassisted && previouslyAssisted)) clean.records[levelIndex] = { hintsUsed, undosUsed, completedAt: new Date().toISOString() };
  Object.assign(progress, clean);
  return progress;
}

export function resetProgress(storage) {
  try {
    const target = resolveStorage(storage);
    if (!target || typeof target.removeItem !== 'function') return { ok: false, reason: 'unavailable' };
    target.removeItem(STORAGE_KEY);
    return { ok: true, reason: null };
  } catch (error) {
    return { ok: false, reason: failureReason(error) };
  }
}

export function chapterFor(index) {
  return validLevel(index) ? CHAPTERS.find(chapter => index >= chapter.start && index <= chapter.end) : null;
}
