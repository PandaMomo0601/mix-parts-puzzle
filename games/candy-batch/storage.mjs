import { createState, launch, land, won } from './engine.mjs';
import { LEVELS } from './levels.mjs';

export const SAVE_KEY = 'mix-candy-batch-v1';

// Landings are recorded, not inferred from clicks. Rapid launches can overlap;
// replaying only the click list would lose the actual allocation between boxes.
export function readJournal(level, journal) {
  if (!Array.isArray(journal) || journal.length > level.grid.length * level.grid[0].length + level.packets.length) throw Error('存档过长');
  let state = createState(level);
  for (const event of journal) {
    if (!Array.isArray(event)) throw Error('存档格式不正确');
    if (event[0] === 'L' && event.length === 2) {
      state = launch(level, state, event[1]);
      if (!state) throw Error('无效投料');
    } else if (event[0] === 'D' && event.length === 5 && Number.isInteger(event[2]) && Number.isInteger(event[3])) {
      state = land(level, state, { boxId:event[1], col:event[2], row:event[3], color:event[4] });
    } else throw Error('无效动作');
  }
  return state;
}
export function undoJournal(journal) {
  let i = journal.length - 1;
  while (i >= 0 && journal[i][0] !== 'L') i--;
  return journal.slice(0, Math.max(0, i));
}
export function cleanSave(raw) {
  const clean = { version:1, settings:{ music:true, sfx:true }, current:null, collection:{} };
  if (!raw || raw.version !== 1) return clean;
  for (const k of ['music','sfx']) if (typeof raw.settings?.[k] === 'boolean') clean.settings[k] = raw.settings[k];
  const check = (record, completed) => {
    const level = LEVELS.find(l => l.id === record?.levelId);
    if (!level) return null;
    try {
      const state = readJournal(level, record.journal);
      if (completed && !won(level, state)) return null;
      return { levelId:level.id, journal:record.journal.map(e => [...e]), date:typeof record.date === 'string' ? record.date.slice(0,32) : '' };
    } catch { return null; }
  };
  clean.current = check(raw.current, false);
  for (const level of LEVELS) {
    const entry = check(raw.collection?.[level.id], true);
    if (entry && entry.levelId === level.id) clean.collection[level.id] = entry;
  }
  return clean;
}
export function loadSave(storage) {
  try { return cleanSave(JSON.parse(storage.getItem(SAVE_KEY))); }
  catch { return cleanSave(null); }
}
export function writeSave(storage, data) {
  try { storage.setItem(SAVE_KEY, JSON.stringify(data)); return true; }
  catch { return false; }
}
