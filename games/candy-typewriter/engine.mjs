// Pure, deterministic factory clock. Rendering never owns sugar or target reservations.
export const COLORS = {R:'coral', Y:'gold', G:'mint', B:'blue'};
export const NAMES = {R:'草莓', Y:'柠檬', G:'薄荷', B:'蓝莓'};
export const CLOCK = Object.freeze({tickMs:45, flightTicks:2, shotIntervalTicks:4, rowMoveTicks:6});
export const LIMITS = Object.freeze({commands:4096, ticks:20000, launches:128, cells:1024});
const clone = value => structuredClone(value);
const counts = () => ({R:0,Y:0,G:0,B:0});
export const cellsOf = level => level.cells || level.grid.flatMap((row,y) => [...row].map((color,x) => ({x,y,color})));
export const clockOf = level => ({...CLOCK,...level.clock});

export function validateLevel(level) {
  const errors = [], need = counts(), supply = counts();
  if (!level || typeof level !== 'object') return ['关卡无效'];
  let cells; try { cells = cellsOf(level); } catch { return ['图案无效']; }
  if (!Number.isInteger(level.width) || !Number.isInteger(level.height) || level.width < 1 || level.height < 1 || cells.length !== level.width*level.height || cells.length > LIMITS.cells) errors.push('画布尺寸无效');
  cells.forEach((cell,i) => { if (!(cell.color in need) || cell.x !== i%level.width || cell.y !== Math.floor(i/level.width)) errors.push('图案格无效'); else need[cell.color]++; });
  if (![2,3,4].includes(level.slotCount)) errors.push('槽位数量无效');
  if (!Array.isArray(level.lanes) || level.lanes.length !== 4) errors.push('必须是四条固定队列');
  const ids = new Set();
  for (const lane of level.lanes || []) {
    if (!Array.isArray(lane)) { errors.push('队列无效'); continue; }
    for (const block of lane) {
      if (typeof block.id !== 'string' || !block.id || ids.has(block.id) || !(block.color in supply) || !Number.isInteger(block.count) || block.count < 1) errors.push('糖块无效');
      ids.add(block.id); if (block.color in supply) supply[block.color] += block.count;
    }
  }
  if (ids.size > LIMITS.launches) errors.push('糖块过多');
  for (const color of Object.keys(need)) if (need[color] !== supply[color]) errors.push(`${color}供需不等 ${need[color]}/${supply[color]}`);
  for (const [key,value] of Object.entries(clockOf(level))) if (!Number.isInteger(value) || value < 1 || value > 1000) errors.push(`时钟${key}无效`);
  return errors;
}

export function createState(level) {
  const errors = validateLevel(level); if (errors.length) throw Error(`${level.id}: ${errors.join('; ')}`);
  const clock = clockOf(level);
  return {levelId:level.id,revision:level.revision || 1,tick:0,seq:0,row:0,phase:'filling',status:'playing',moveUntil:null,
    lanePos:[0,0,0,0], slots:Array.from({length:level.slotCount},(_,slot) => ({nozzleId:`N${slot+1}`,blockId:null,x:-1,lastShotTick:-clock.shotIntervalTicks,loadUntilTick:0})),
    blocks:Object.fromEntries(level.lanes.flat().map(block => [block.id,{...block,remaining:block.count,status:'stock'}])),
    filled:[],filledFlags:Array(cellsOf(level).length).fill(false),flights:[],nextFlightId:1,moves:0};
}

export function visibleHeads(level,state) {
  return level.lanes.flatMap((lane,i) => { const block = lane[state.lanePos[i]]; return block ? [{...block,lane:i,remaining:state.blocks[block.id].remaining}] : []; });
}
export function legalActions(level,state) {
  if (state.status === 'won' || state.status === 'stuck' || !state.slots.some(slot => slot.blockId === null)) return [];
  return visibleHeads(level,state).map(head => head.id);
}
const reservations = state => new Set(state.flights.map(flight => flight.cell));
const blockFlights = (state,id) => state.flights.filter(flight => flight.blockId === id).length;
function targetFor(level,state,block,reserved) {
  if (state.phase !== 'filling' || state.row >= level.height || block.remaining <= blockFlights(state,block.id)) return -1;
  const cells = cellsOf(level);
  for (let i=state.row*level.width; i<(state.row+1)*level.width; i++) if (!state.filledFlags[i] && !reserved.has(i) && cells[i].color === block.color) return i;
  return -1;
}
export function canStep(level,state) {
  if (state.status === 'won' || state.status === 'stuck') return false;
  if (state.phase === 'advancing' || state.flights.length || state.slots.some(slot=>slot.blockId!==null && slot.loadUntilTick>state.tick)) return true;
  if (state.row < level.height && state.filledFlags.slice(state.row*level.width,(state.row+1)*level.width).every(Boolean)) return true;
  const reserved = reservations(state);
  return state.slots.some(slot => slot.blockId !== null && targetFor(level,state,state.blocks[slot.blockId],reserved) >= 0);
}

export function ledger(level,state) {
  const byColor = {stock:counts(),loaded:counts(),inFlight:counts(),landed:counts(),need:counts(),remaining:counts()};
  let stockBoxes=0,activeBoxes=0;
  for (const block of Object.values(state.blocks)) {
    if (block.status === 'stock') { byColor.stock[block.color] += block.remaining; stockBoxes++; }
    else if (block.status === 'loaded') { byColor.loaded[block.color] += block.remaining - blockFlights(state,block.id); activeBoxes++; }
  }
  for (const flight of state.flights) byColor.inFlight[flight.color]++;
  cellsOf(level).forEach((cell,i) => { if (state.filledFlags[i]) byColor.landed[cell.color]++; else byColor.need[cell.color]++; });
  for (const color of Object.keys(COLORS)) byColor.remaining[color] = byColor.stock[color]+byColor.loaded[color]+byColor.inFlight[color];
  const sum = record => Object.values(record).reduce((a,b)=>a+b,0), stock=sum(byColor.stock),loaded=sum(byColor.loaded),inFlight=sum(byColor.inFlight),filled=sum(byColor.landed);
  return {total:cellsOf(level).length,filled,landed:filled,empty:cellsOf(level).length-filled,stock,loaded,inFlight,working:loaded+inFlight,remaining:stock+loaded+inFlight,stockBoxes,activeBoxes,byColor};
}
export function won(level,state) {
  const q=ledger(level,state);
  return q.empty===0 && q.remaining===0 && q.stockBoxes===0 && q.activeBoxes===0 && !state.flights.length && state.row===level.height && state.phase==='complete';
}
function updateStatus(level,state) {
  // canStep reads status; clear the previous diagnostic before recomputing it.
  state.status='playing';
  if (won(level,state)) state.status='won';
  else if (!canStep(level,state) && !legalActions(level,state).length) state.status='stuck';
  return state;
}
export function launch(level,state,headId) {
  if (!legalActions(level,state).includes(headId)) return {accepted:false,reason:'需要可见队头和空槽位',state,events:[],command:null};
  const next=clone(state), head=visibleHeads(level,next).find(item=>item.id===headId), slot=next.slots.findIndex(item=>item.blockId===null);
  next.slots[slot].blockId=headId; next.slots[slot].loadUntilTick=next.tick+3; next.blocks[headId].status='loaded'; next.lanePos[head.lane]++; next.moves++; next.seq++;
  updateStatus(level,next);
  return {accepted:true,state:next,events:[{type:'launch',tick:next.tick,source:headId,blockId:headId,slot,lane:head.lane,color:head.color,count:head.count}],command:{type:'launch',headId}};
}

export function step(level,state) {
  if (!canStep(level,state)) return {advanced:false,state,events:[],command:null};
  if (state.tick >= LIMITS.ticks) throw Error('逻辑时钟超出限制');
  const next=clone(state), events=[], clock=clockOf(level); next.tick++; next.seq++;
  const emit=event=>events.push({tick:next.tick,...event});
  for (const flight of next.flights.filter(f=>f.dueTick<=next.tick)) {
    if (next.filledFlags[flight.cell]) throw Error('落糖目标已占用');
    const block=next.blocks[flight.blockId]; if (block.remaining<1) throw Error('糖块余量不足');
    next.filled.push(flight.cell); next.filledFlags[flight.cell]=true; block.remaining--;
    emit({type:'land',...flight,source:flight.blockId,remaining:block.remaining,filled:next.filled.length});
  }
  next.flights=next.flights.filter(f=>f.dueTick>next.tick);
  next.slots.forEach((slot,i)=>{
    if (slot.blockId && next.blocks[slot.blockId].remaining===0) {
      const id=slot.blockId; next.blocks[id].status='done';slot.blockId=null;emit({type:'release',slot:i,source:id,blockId:id});
    }
  });
  if (next.phase==='advancing' && next.tick>=next.moveUntil) {
    const fromRow=next.row;next.row++;next.moveUntil=null;next.phase=next.row===level.height?'complete':'filling';
    for (const slot of next.slots) slot.x=-1;
    emit({type:'advanceEnd',fromRow,row:next.row});
  }
  if (next.phase==='filling' && !next.flights.length && next.filledFlags.slice(next.row*level.width,(next.row+1)*level.width).every(Boolean)) {
    next.phase='advancing';next.moveUntil=next.tick+clock.rowMoveTicks;emit({type:'advanceStart',row:next.row,toRow:next.row+1,untilTick:next.moveUntil});
  }
  if (next.phase==='filling') {
    const reserved=reservations(next);
    next.slots.forEach((slot,i)=>{
      if (slot.blockId===null || next.tick<slot.loadUntilTick || next.tick%clock.shotIntervalTicks!==i%clock.shotIntervalTicks || next.tick-slot.lastShotTick<clock.shotIntervalTicks) return;
      const block=next.blocks[slot.blockId],cell=targetFor(level,next,block,reserved); if (cell<0) return;
      const flight={id:`F${next.nextFlightId++}`,slot:i,blockId:block.id,color:block.color,cell,x:cell%level.width,startTick:next.tick,dueTick:next.tick+clock.flightTicks};
      next.flights.push(flight);reserved.add(cell);slot.lastShotTick=next.tick;slot.x=cell%level.width;
      emit({type:'depart',...flight,source:block.id});
    });
  }
  updateStatus(level,next);if (next.status==='won') emit({type:'win',filled:next.filled.length});
  return {advanced:true,state:next,events,command:{type:'step',count:1}};
}

export function normalizeCommands(commands) {
  if (!Array.isArray(commands) || commands.length>LIMITS.commands) throw Error('日志数量无效');
  const result=[];let ticks=0,launches=0;
  for (const command of commands) {
    if (!command || typeof command!=='object') throw Error('日志命令无效');
    if (command.type==='launch' && typeof command.headId==='string' && command.headId.length<=80) { launches++; result.push({type:'launch',headId:command.headId}); }
    else if (command.type==='step' && Number.isInteger(command.count) && command.count>=1) {
      ticks+=command.count;const last=result.at(-1);if (last?.type==='step') last.count+=command.count;else result.push({type:'step',count:command.count});
    } else throw Error('日志命令无效');
    if (ticks>LIMITS.ticks || launches>LIMITS.launches) throw Error('日志超出限制');
  }
  return result;
}
export function replay(level,commands,options={}) {
  let state=createState(level);const normalized=normalizeCommands(commands),onStep=options.onStep;
  for (const command of normalized) {
    if (command.type==='launch') { const result=launch(level,state,command.headId); if (!result.accepted) throw Error('日志投料不可达');state=result.state;onStep?.(state,result.events,command); }
    else for (let i=0;i<command.count;i++) {const result=step(level,state);if (!result.advanced) throw Error('日志包含空转时钟');state=result.state;onStep?.(state,result.events,{type:'step',count:1});}
  }
  return state;
}
export function drain(level,state,{limit=LIMITS.ticks}={}) {
  let current=state,ticks=0;while(canStep(level,current)) {if(ticks++>=limit)throw Error('自动过程超限');current=step(level,current).state;}
  return {state:current,ticks,commands:ticks?[{type:'step',count:ticks}]:[]};
}
export function stateKey(state) {
  // Solver only compares drained states, where clock phase no longer changes reachability.
  return [state.row,state.phase,state.lanePos.join(','),state.slots.map(s=>s.blockId||'').join(','),Object.values(state.blocks).map(b=>b.remaining).join(','),state.filledFlags.map(x=>x?'1':'0').join('')].join('|');
}
export function solve(level,initial=createState(level),{limit=12000}={}) {
  const seen=new Set();let nodes=0,limited=false;
  function visit(input) {
    const automatic=drain(level,input),state=automatic.state;
    if (won(level,state)) return automatic.commands;
    if (state.status==='stuck') return null;
    if (++nodes>limit) {limited=true;return null;}
    const key=stateKey(state);if(seen.has(key))return null;seen.add(key);
    const candidates=legalActions(level,state).map(headId=>{const next=launch(level,state,headId).state;return {headId,next,score:cellsOf(level).slice(state.row*level.width,(state.row+1)*level.width).filter(c=>c.color===state.blocks[headId].color).length};}).sort((a,b)=>b.score-a.score);
    for (const candidate of candidates) {const tail=visit(candidate.next);if(tail)return [...automatic.commands,{type:'launch',headId:candidate.headId},...tail];if(limited)return null;}
    return null;
  }
  const commands=visit(initial);return {status:commands?'solved':limited?'limit':'unsolvable',commands:commands?normalizeCommands(commands):[],actions:commands?.filter(c=>c.type==='launch').map(c=>c.headId)||[],nodes};
}
