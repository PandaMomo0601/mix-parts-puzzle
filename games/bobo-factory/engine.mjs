// Deterministic rules only. The caller owns animation, input locking and presentation.
// Session objects are mutable; piece/hole definitions and returned events are immutable.
export const ENGINE_VERSION = 1;
export const VECTORS = Object.freeze({ right: Object.freeze([1, 0]), left: Object.freeze([-1, 0]), down: Object.freeze([0, 1]), up: Object.freeze([0, -1]) });
const EPSILON = 0.01;
const COLOR_KEYS = new Set(['coral', 'mint', 'blue', 'gold']);
const contexts = new WeakMap();

const freeze = value => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
};
const clone = value => JSON.parse(JSON.stringify(value));
const rect = item => ({ x: item.x - item.w / 2, y: item.y - item.h / 2, w: item.w, h: item.h });
const overlaps = (a, b) => a.x < b.x + b.w - EPSILON && a.x + a.w > b.x + EPSILON && a.y < b.y + b.h - EPSILON && a.y + a.h > b.y + EPSILON;

export function nearestTarget(piece, holes) {
  const [dx, dy] = VECTORS[piece.direction];
  let nearest = null;
  let distance = Infinity;
  for (const hole of holes) {
    if (hole.color !== piece.color) continue;
    const aligned = Math.abs(dx ? hole.y - piece.y : hole.x - piece.x) < EPSILON;
    const forward = (hole.x - piece.x) * dx + (hole.y - piece.y) * dy;
    const separation = Math.hypot(hole.x - piece.x, hole.y - piece.y);
    if (aligned && forward > EPSILON && separation < distance) {
      nearest = hole;
      distance = separation;
    }
  }
  return nearest;
}

export function sweepRect(piece, target) {
  return { x: Math.min(piece.x, target.x) - piece.w / 2, y: Math.min(piece.y, target.y) - piece.h / 2, w: Math.abs(piece.x - target.x) + piece.w, h: Math.abs(piece.y - target.y) + piece.h };
}

export function blockersFor(piece, target, pieces) {
  if (!target) return [];
  const swept = sweepRect(piece, target);
  return pieces.filter(other => other.id !== piece.id && overlaps(swept, rect(other)));
}

function normalizeLevel(level) {
  if (!level || typeof level !== 'object' || !Array.isArray(level.pieces) || !Array.isArray(level.holes)) throw new TypeError('Invalid level definition');
  if (level.pieces.length > 30 || level.holes.length > 30) throw new RangeError('A level supports at most 30 pieces and 30 holes');
  const ids = new Set();
  const readItem = (item, isPiece) => {
    if (!item || typeof item.id !== 'string' || !item.id || item.id.length > 80 || ids.has(item.id)) throw new TypeError('Invalid or duplicate item id');
    ids.add(item.id);
    for (const key of ['x', 'y', 'w', 'h']) if (!Number.isFinite(item[key])) throw new TypeError(`Invalid ${key} for ${item.id}`);
    if (item.w <= 0 || item.h <= 0 || item.x - item.w / 2 < 53 - EPSILON || item.x + item.w / 2 > 337 + EPSILON || item.y - item.h / 2 < 90 - EPSILON || item.y + item.h / 2 > 470 + EPSILON) throw new RangeError(`Item outside authored board: ${item.id}`);
    if (!COLOR_KEYS.has(item.color) || (isPiece && !Object.hasOwn(VECTORS, item.direction))) throw new TypeError(`Invalid color or direction for ${item.id}`);
    return { id: item.id, x: item.x, y: item.y, w: item.w, h: item.h, color: item.color, ...(isPiece ? { direction: item.direction } : {}) };
  };
  const pieces = level.pieces.map(item => readItem(item, true));
  const holes = level.holes.map(item => readItem(item, false));
  const all = [...pieces, ...holes];
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
    if (overlaps(rect(all[i]), rect(all[j]))) throw new TypeError(`Overlapping initial cells: ${all[i].id}, ${all[j].id}`);
  }
  return freeze({
    id: typeof level.id === 'string' ? level.id : 'custom',
    sourceLevelId: level.sourceLevelId ?? null,
    sourceSha256: typeof level.sourceSha256 === 'string' ? level.sourceSha256 : 'custom',
    noSpareHoles: Boolean(level.noSpareHoles), pieces, holes
  });
}

// A deterministic content fingerprint supplements the source SHA and level ID.
function fingerprint(level) {
  const text = JSON.stringify(level);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function contextFor(state) {
  const context = contexts.get(state);
  if (!context) throw new TypeError('Expected a session created by createSession or restore');
  return context;
}

export function inspectState(state) {
  if (state.pieces.length === 0) return { status: 'won', proof: null, failureReason: null };
  const stranded = state.pieces.find(piece => !nearestTarget(piece, state.holes));
  if (stranded) return { status: 'failed', proof: { kind: 'no-forward-color-hole', pieceId: stranded.id, color: stranded.color }, failureReason: '有颗糖的前方已经没有同色空位，撤回换个顺序。' };
  if (state.pieces.every(piece => blockersFor(piece, nearestTarget(piece, state.holes), state.pieces).length > 0)) return { status: 'failed', proof: { kind: 'no-executable-move', pieceIds: state.pieces.map(piece => piece.id) }, failureReason: '剩下的糖互相挡路，撤回换个顺序。' };
  return { status: 'playing', proof: null, failureReason: null };
}

function refresh(state) {
  Object.assign(state, inspectState(state));
  state.moves = state.matches.length;
  state.undoDepth = contextFor(state).frames.length;
  state.canUndo = state.undoDepth > 0;
}

export function createSession(levelDef) {
  const definition = normalizeLevel(levelDef);
  const state = { levelId: definition.id, sourceLevelId: definition.sourceLevelId, sourceSha256: definition.sourceSha256, pieces: [...definition.pieces], holes: [...definition.holes], matches: [], moves: 0, total: definition.pieces.length, status: 'playing', proof: null, failureReason: null, undoDepth: 0, canUndo: false };
  contexts.set(state, { definition, fingerprint: fingerprint(definition), frames: [], commands: [] });
  refresh(state);
  return state;
}

export function inspectMove(state, pieceId) {
  const piece = state.pieces.find(item => item.id === pieceId) ?? null;
  if (!piece) return { legal: false, reason: 'missing-piece', piece: null, target: null, blockers: [] };
  const target = nearestTarget(piece, state.holes);
  const blockers = blockersFor(piece, target, state.pieces);
  if (state.status !== 'playing') return { legal: false, reason: `session-${state.status}`, piece, target, blockers };
  return { legal: Boolean(target) && blockers.length === 0, reason: !target ? 'no-target' : blockers.length ? 'blocked' : null, piece, target, blockers };
}

export function legalMoves(state) {
  return state.pieces.map(piece => inspectMove(state, piece.id)).filter(move => move.legal);
}

export function commitMove(state, pieceId) {
  const context = contextFor(state);
  const move = inspectMove(state, pieceId);
  if (!move.legal) return { accepted: false, event: null, status: state.status, ...move };
  const { piece, target } = move;
  const event = freeze({ type: 'match', pieceId: piece.id, holeId: target.id, color: piece.color, from: { x: piece.x, y: piece.y }, to: { x: target.x, y: target.y }, piece, target, distance: Math.hypot(target.x - piece.x, target.y - piece.y), moveNumber: state.moves + 1 });
  context.frames.push({ pieces: state.pieces, holes: state.holes, matches: state.matches });
  context.commands.push({ pieceId: piece.id, holeId: target.id });
  state.pieces = state.pieces.filter(item => item.id !== piece.id);
  state.holes = state.holes.filter(item => item.id !== target.id);
  state.matches = [...state.matches, event];
  refresh(state);
  return { accepted: true, event, status: state.status, proof: state.proof };
}

export function undo(state) {
  const context = contextFor(state);
  const frame = context.frames.pop();
  if (!frame) return false;
  context.commands.pop();
  Object.assign(state, frame);
  refresh(state);
  return true;
}

export function restart(state) {
  const context = contextFor(state);
  context.frames.length = 0;
  context.commands.length = 0;
  state.pieces = [...context.definition.pieces];
  state.holes = [...context.definition.holes];
  state.matches = [];
  refresh(state);
  return state;
}

export function serialize(state) {
  const context = contextFor(state);
  // Never save coordinates, remaining holes, claimed status or arbitrary snapshots.
  return { version: ENGINE_VERSION, levelId: context.definition.id, sourceLevelId: context.definition.sourceLevelId, sourceSha256: context.definition.sourceSha256, fingerprint: context.fingerprint, moves: clone(context.commands) };
}

export function restore(levelDef, payload) {
  if (typeof payload === 'string') {
    if (payload.length > 20000) throw new TypeError('Save payload is too large');
    try { payload = JSON.parse(payload); } catch { throw new TypeError('Save payload is not valid JSON'); }
  }
  const keys = ['version', 'levelId', 'sourceLevelId', 'sourceSha256', 'fingerprint', 'moves'];
  if (!payload || typeof payload !== 'object' || Array.isArray(payload) || Object.keys(payload).length !== keys.length || !keys.every(key => Object.hasOwn(payload, key))) throw new TypeError('Invalid save schema');
  const state = createSession(levelDef);
  const context = contextFor(state);
  if (payload.version !== ENGINE_VERSION || payload.levelId !== state.levelId || payload.sourceLevelId !== state.sourceLevelId || payload.sourceSha256 !== state.sourceSha256 || payload.fingerprint !== context.fingerprint) throw new TypeError('Save does not match this level version');
  if (!Array.isArray(payload.moves) || payload.moves.length > state.total) throw new TypeError('Invalid saved move count');
  for (const command of payload.moves) {
    if (!command || typeof command !== 'object' || Array.isArray(command) || Object.keys(command).length !== 2 || typeof command.pieceId !== 'string' || typeof command.holeId !== 'string') throw new TypeError('Invalid saved command');
    const move = inspectMove(state, command.pieceId);
    if (!move.legal || move.target.id !== command.holeId) throw new TypeError('Save contains an impossible move');
    commitMove(state, command.pieceId);
  }
  return state;
}

// Search the actual remaining geometry and all legal allocation orders. A node limit
// is reported as unknown, never as failure. Witness arrays are not inputs to search.
export function solve(state, { maxNodes = 60000 } = {}) {
  if (!Number.isSafeInteger(maxNodes) || maxNodes < 1) throw new RangeError('maxNodes must be a positive integer');
  const pieces = state.pieces;
  const holes = state.holes;
  if (pieces.length > 30 || holes.length > 30) throw new RangeError('Solver supports at most 30 pieces and 30 holes');
  if (!pieces.length) return { status: 'solved', moves: [], path: [], nodes: 0 };
  const candidates = pieces.map((piece, pieceIndex) => {
    const [dx, dy] = VECTORS[piece.direction];
    return holes.map((hole, holeIndex) => ({ hole, holeIndex, forward: (hole.x - piece.x) * dx + (hole.y - piece.y) * dy, distance: Math.hypot(hole.x - piece.x, hole.y - piece.y) }))
      .filter(({ hole, forward }) => hole.color === piece.color && Math.abs(dx ? hole.y - piece.y : hole.x - piece.x) < EPSILON && forward > EPSILON)
      .sort((a, b) => a.distance - b.distance)
      .map(({ hole, holeIndex }) => {
        const swept = sweepRect(piece, hole);
        let blockers = 0;
        pieces.forEach((other, index) => { if (index !== pieceIndex && overlaps(swept, rect(other))) blockers |= 1 << index; });
        return { holeIndex, blockers };
      });
  });
  const dead = new Set();
  let nodes = 0;
  let limited = false;
  function search(pieceMask, holeMask) {
    if (!pieceMask) return [];
    const key = `${pieceMask}:${holeMask}`;
    if (dead.has(key)) return null;
    if (nodes >= maxNodes) { limited = true; return null; }
    nodes++;
    const legal = [];
    for (let index = 0; index < pieces.length; index++) {
      if (!(pieceMask & (1 << index))) continue;
      const target = candidates[index].find(candidate => holeMask & (1 << candidate.holeIndex));
      if (!target) { dead.add(key); return null; }
      if (!(target.blockers & pieceMask)) legal.push({ index, holeIndex: target.holeIndex });
    }
    for (const move of legal) {
      const rest = search(pieceMask & ~(1 << move.index), holeMask & ~(1 << move.holeIndex));
      if (rest !== null) return [{ pieceId: pieces[move.index].id, holeId: holes[move.holeIndex].id }, ...rest];
      if (limited) return null;
    }
    dead.add(key);
    return null;
  }
  const path = search((2 ** pieces.length - 1) >>> 0, (2 ** holes.length - 1) >>> 0);
  return { status: path !== null ? 'solved' : limited ? 'limit' : 'unsolvable', moves: path?.map(move => move.pieceId) ?? [], path: path ?? [], nodes };
}
