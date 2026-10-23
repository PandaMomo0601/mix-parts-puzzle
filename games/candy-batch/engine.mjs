export const COLORS = { R:'coral', Y:'gold', G:'mint', B:'blue' };
export const NAMES = { R:'草莓', Y:'柠檬', G:'薄荷', B:'蓝莓' };

export function validateLevel(level) {
  const errors = [], counts = { R:0, Y:0, G:0, B:0 }, supply = { ...counts };
  if (!Array.isArray(level.grid) || !level.grid.length) return ['没有糖画'];
  const width = level.grid[0].length;
  for (const row of level.grid) {
    if (row.length !== width) errors.push('行宽不同');
    for (const color of row) { if (!(color in counts)) errors.push('未知颜色'); else counts[color]++; }
  }
  const ids = new Set();
  for (const p of level.packets || []) {
    if (ids.has(p.id)) errors.push('重复料盒');
    ids.add(p.id);
    if (!(p.color in supply) || !Number.isInteger(p.count) || p.count < 1) errors.push('料盒不合法');
    else supply[p.color] += p.count;
  }
  for (const c of Object.keys(counts)) if (supply[c] !== counts[c]) errors.push(`${c}供需不等`);
  if (![2,3].includes(level.slots)) errors.push('工作位数不合法');
  return errors;
}

export function createState(level) {
  const errors = validateLevel(level);
  if (errors.length) throw Error(`${level.id}: ${errors.join(',')}`);
  return { levelId:level.id, fill:Array(level.grid[0].length).fill(0),
    boxes:level.packets.map(p=>({ ...p, remaining:p.count, status:'stock' })), active:[], actions:[] };
}
const clone = s=>({ ...s, fill:[...s.fill], boxes:s.boxes.map(p=>({ ...p })), active:[...s.active], actions:[...s.actions] });
export function front(level, state, col) {
  const row = level.grid.length - 1 - state.fill[col];
  return row < 0 ? null : { col, row, color:level.grid[row][col] };
}
export function ledger(level, state) {
  const total = level.grid.length * level.grid[0].length;
  const filled = state.fill.reduce((a,b)=>a+b,0);
  const stock = state.boxes.filter(p=>p.status==='stock').reduce((a,p)=>a+p.remaining,0);
  const working = state.boxes.filter(p=>p.status==='active').reduce((a,p)=>a+p.remaining,0);
  return { total, filled, empty:total-filled, stock, working,
    stockBoxes:state.boxes.filter(p=>p.status==='stock').length,
    activeBoxes:state.active.length, doneBoxes:state.boxes.filter(p=>p.status==='done').length };
}
export function won(level, state) {
  const q = ledger(level,state);
  return q.empty===0 && q.stock===0 && q.working===0 && q.stockBoxes===0 && q.activeBoxes===0;
}

// A scheduled particle reserves a column and one unit, but doesn't consume it
// until land(). Thus neither a vacancy nor a win can precede the last landing.
export function chooseDrop(level, state, flights=[]) {
  // Include already scheduled landings when choosing the NEXT target. Otherwise
  // frame timing changes which limited packet gets which column, so the same
  // choices can become solvable or unsolvable at different frame rates.
  let projected=state;
  for (const flight of flights) projected=land(level,projected,flight);
  const blocked = new Set(flights.map(f=>f.col));
  for (const id of projected.active) {
    const box = projected.boxes.find(p=>p.id===id);
    const targets=projected.fill.map((_,col)=>front(level,projected,col)).filter(p=>p?.color===box.color);
    targets.sort((a,b)=>b.row-a.row||a.col-b.col);
    if(targets.length){
      const next=targets[0];
      // Wait for this column instead of rerouting to a different destination.
      return blocked.has(next.col)?null:{...next,boxId:id};
    }
  }
  return null;
}
export function launch(level, state, id) {
  const p = state.boxes.find(p=>p.id===id);
  if (!p || p.status!=='stock' || state.active.length>=level.slots || won(level,state)) return null;
  const next = clone(state);
  next.boxes.find(p=>p.id===id).status='active';
  next.active.push(id); next.actions.push(id);
  return next;
}
export function land(level, state, drop) {
  const p = state.boxes.find(p=>p.id===drop.boxId), target = front(level,state,drop.col);
  if (!p || p.status!=='active' || p.remaining<1 || !target || target.row!==drop.row || target.color!==p.color || drop.color!==p.color) throw Error('无效落糖');
  const next = clone(state), box=next.boxes.find(p=>p.id===drop.boxId);
  box.remaining--; next.fill[drop.col]++;
  if (box.remaining===0) { box.status='done'; next.active=next.active.filter(id=>id!==box.id); }
  return next;
}
export function settle(level, state, withEvents=false) {
  let next=state, drop, count=0; const events=[];
  while ((drop=chooseDrop(level,next))) {
    next=land(level,next,drop); count++;
    if (withEvents) events.push(drop);
    if (count>level.grid.length*level.grid[0].length) throw Error('落糖超出总量');
  }
  return { state:next, count, events };
}
export function deadlocked(level, state) {
  return !won(level,state) && state.active.length>=level.slots && chooseDrop(level,state)===null;
}
export function replay(level, actions) {
  if (!Array.isArray(actions) || actions.length>level.packets.length) throw Error('存档动作不合法');
  let s=createState(level);
  for (const id of actions) {
    if (typeof id!=='string') throw Error('存档动作不合法');
    const n=launch(level,s,id); if (!n) throw Error('存档顺序不合法');
    s=settle(level,n).state;
  }
  return s;
}
export function solve(level, initial=createState(level), maxNodes=60000) {
  const memo=new Set(); let nodes=0;
  function dfs(raw) {
    const s=settle(level,raw).state;
    if (won(level,s)) return [];
    if (++nodes>maxNodes || deadlocked(level,s)) return null;
    const key=s.fill.join(',')+'|'+s.boxes.map(p=>p.status+':'+p.remaining).join(',')+'|'+s.active.join(',');
    if (memo.has(key)) return null; memo.add(key);
    const seen=new Set(), options=[];
    for (const p of s.boxes.filter(p=>p.status==='stock')) {
      const pair=p.color+':'+p.count;if(seen.has(pair))continue;seen.add(pair);
      const n=settle(level,launch(level,s,p.id));
      options.push({id:p.id,state:n.state,score:n.count+(s.active.length+1-n.state.active.length)*10});
    }
    options.sort((a,b)=>b.score-a.score);
    for (const o of options) { const rest=dfs(o.state); if(rest)return [o.id,...rest]; }
    return null;
  }
  const path=dfs(initial);
  return { path, nodes, exhausted:nodes>maxNodes };
}
