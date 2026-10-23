export const COLORS = ['coral', 'gold', 'mint', 'blue'];
export const DIRECTIONS = {up:[0,-1], right:[1,0], down:[0,1], left:[-1,0]};
const clone = value => structuredClone(value);
const key = (x,y) => `${x},${y}`;
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);

export function createState(level) {
  const state = {type:level.type,moves:0,history:[],actions:[],status:'playing',filled:[]};
  if(level.type==='queue') state.heads=level.queues.map(()=>0);
  if(level.type==='tile') state.remaining=level.tiles.map(t=>t.id);
  if(level.type==='tilt') state.pieces=clone(level.pieces);
  return state;
}
export function snapshot(state) {const {history,...rest}=state;return clone(rest);}
export function undo(state) {
  if(!state.history.length)return false;
  const prior=state.history.pop(),history=state.history;
  for(const k of Object.keys(state))delete state[k];
  Object.assign(state,prior,{history});return true;
}
function inside(level,x,y){return x>=0&&y>=0&&x<level.width&&y<level.height;}

export function tilePlacements(level,state,id) {
  const tile=level.tiles.find(t=>t.id===id);
  if(!tile||!state.remaining.includes(id))return [];
  const targets=new Map(level.cells.map(c=>[key(c.x,c.y),c.color]));
  const filled=new Set(state.filled.map(c=>key(c.x,c.y))),out=[];
  for(let y=0;y<level.height;y++)for(let x=0;x<level.width;x++){
    if(tile.cells.every(c=>targets.get(key(x+c.x,y+c.y))===c.color&&!filled.has(key(x+c.x,y+c.y))))out.push({piece:id,x,y});
  }
  return out;
}
export function legalActions(level,state) {
  if(state.status==='won')return [];
  if(level.type==='queue')return level.queues.flatMap((q,i)=>q[state.heads[i]]===level.cells[state.filled.length]?.color?[{lane:i}]:[]);
  if(level.type==='tile')return state.remaining.flatMap(id=>tilePlacements(level,state,id));
  return Object.keys(DIRECTIONS).map(direction=>({direction})).filter(a=>tilt(level,state,a.direction).changed);
}

export function tilt(level,state,direction) {
  if(!DIRECTIONS[direction])return {changed:false};
  const [dx,dy]=DIRECTIONS[direction],pieces=clone(state.pieces),filled=clone(state.filled);
  const walls=new Set((level.walls||[]).map(p=>key(p.x,p.y)));
  const holes=new Map(level.cells.map(h=>[key(h.x,h.y),h]));
  const used=new Set(filled.map(h=>key(h.x,h.y)));
  const paths=Object.fromEntries(pieces.map(p=>[p.id,[{x:p.x,y:p.y}]]));
  const removed=[];let changed=false,ticks=0;
  // Leading candies move first in every discrete tick, allowing followers to
  // enter vacated cells without overlap. This is deterministic for each tilt.
  while(ticks++ < level.width+level.height+1){
    let moved=false;
    pieces.sort((a,b)=>(b.x*dx+b.y*dy)-(a.x*dx+a.y*dy)||a.id.localeCompare(b.id));
    const occupied=new Set(pieces.map(p=>key(p.x,p.y)));
    for(const p of [...pieces]){
      const x=p.x+dx,y=p.y+dy,k=key(x,y);
      if(!inside(level,x,y)||walls.has(k)||occupied.has(k))continue;
      occupied.delete(key(p.x,p.y));p.x=x;p.y=y;paths[p.id].push({x,y});moved=true;changed=true;
      const hole=holes.get(k);
      if(hole&&hole.color===p.color&&!used.has(k)){
        used.add(k);filled.push({...hole,piece:p.id});removed.push({...p});pieces.splice(pieces.indexOf(p),1);
      }else occupied.add(k);
    }
    if(!moved)break;
  }
  return {changed,pieces,filled,paths,removed};
}

export function applyAction(level,state,action,{record=true}={}) {
  if(state.status!=='playing')return {accepted:false,reason:'finished'};
  let event;
  if(level.type==='queue'){
    const lane=action.lane;
    if(!Number.isInteger(lane)||!level.queues[lane])return {accepted:false,reason:'invalid'};
    const color=level.queues[lane][state.heads[lane]],target=level.cells[state.filled.length];
    if(!color||color!==target?.color)return {accepted:false,reason:'color'};
    event={color,target:clone(target),lane};
  }else if(level.type==='tile'){
    if(!tilePlacements(level,state,action.piece).some(p=>p.x===action.x&&p.y===action.y))return {accepted:false,reason:'fit'};
    const tile=level.tiles.find(t=>t.id===action.piece);
    event={piece:tile.id,cells:tile.cells.map(c=>({...c,x:c.x+action.x,y:c.y+action.y}))};
  }else{
    event=tilt(level,state,action.direction);
    if(!event.changed)return {accepted:false,reason:'still'};
  }
  if(record)state.history.push(snapshot(state));
  state.actions.push(clone(action));state.moves++;
  if(level.type==='queue'){state.heads[action.lane]++;state.filled.push(event.target);}
  else if(level.type==='tile'){state.remaining=state.remaining.filter(id=>id!==action.piece);state.filled.push(...event.cells);}
  else {state.pieces=event.pieces;state.filled=event.filled;}
  if(state.filled.length===level.cells.length && remainingCount(level,state)===0)state.status='won';
  else if(level.type!=='tilt'&&legalActions(level,state).length===0)state.status='stuck';
  return {accepted:true,event};
}
export function remainingCount(level,state){
  if(level.type==='queue')return level.queues.reduce((n,q,i)=>n+q.length-state.heads[i],0);
  if(level.type==='tile')return level.tiles.filter(t=>state.remaining.includes(t.id)).reduce((n,t)=>n+t.cells.length,0);
  return state.pieces.length;
}
export function stateKey(state){
  if(state.type==='queue')return state.heads.join(',');
  if(state.type==='tile')return `${state.remaining.join(',')}|${state.filled.map(c=>key(c.x,c.y)).sort().join(';')}`;
  return state.pieces.map(p=>`${p.id}:${p.x},${p.y}`).sort().join(';')+'|'+state.filled.map(c=>key(c.x,c.y)).sort().join(';');
}
export function solve(level,initial=createState(level),{limit=60000}={}) {
  if(initial.status==='won')return {status:'solved',actions:[],nodes:0};
  const seen=new Set();let nodes=0,hitLimit=false;
  if(level.type==='tilt'){
    const start=snapshot(initial);start.status='playing';start.history=[];
    const queue=[{state:start,parent:-1,action:null}];seen.add(stateKey(start));
    for(let n=0;n<queue.length;n++){
      if(++nodes>limit)return {status:'limit',actions:[],nodes};
      for(const action of legalActions(level,queue[n].state)){
        const next={...snapshot(queue[n].state),history:[]};applyAction(level,next,action,{record:false});
        const k=stateKey(next);if(seen.has(k))continue;seen.add(k);
        const item={state:next,parent:n,action};queue.push(item);
        if(next.status==='won'){
          const actions=[];let cursor=queue.length-1;
          while(queue[cursor].parent!==-1){actions.unshift(queue[cursor].action);cursor=queue[cursor].parent;}
          return {status:'solved',actions,nodes};
        }
      }
    }
    return {status:'unsolvable',actions:[],nodes};
  }
  function visit(state){
    if(state.status==='won')return [];
    const k=stateKey(state);if(seen.has(k))return null;seen.add(k);
    if(++nodes>limit){hitLimit=true;return null;}
    for(const action of legalActions(level,state)){
      const next={...snapshot(state),history:[]};next.status='playing';applyAction(level,next,action,{record:false});
      const rest=visit(next);if(rest)return [action,...rest];
    }
    return null;
  }
  const actions=visit(initial);return {status:actions?'solved':hitLimit?'limit':'unsolvable',actions:actions||[],nodes};
}
export function serialize(level,state){return {levelId:level.id,actions:clone(state.actions)};}
export function restore(level,data){
  if(data?.levelId!==level.id||!Array.isArray(data.actions)||data.actions.length>500)throw Error('Invalid save');
  const state=createState(level);
  for(const action of data.actions)if(!applyAction(level,state,action).accepted)throw Error('Invalid action');
  return state;
}
export function validateLevel(level){
  const seen=new Set(),targetCounts=Object.fromEntries(COLORS.map(c=>[c,0]));
  for(const c of level.cells){if(!inside(level,c.x,c.y)||seen.has(key(c.x,c.y))||!COLORS.includes(c.color))throw Error(`Bad target ${level.id}`);seen.add(key(c.x,c.y));targetCounts[c.color]++;}
  const source=level.type==='queue'?level.queues.flat():level.type==='tile'?level.tiles.flatMap(t=>t.cells.map(c=>c.color)):level.pieces.map(p=>p.color);
  const counts=Object.fromEntries(COLORS.map(c=>[c,source.filter(x=>x===c).length]));
  if(!same(counts,targetCounts))throw Error(`Resource mismatch ${level.id}`);
  if(level.type==='tilt'){
    const occupied=new Set();for(const p of [...level.pieces,...(level.walls||[])]){const k=key(p.x,p.y);if(!inside(level,p.x,p.y)||occupied.has(k))throw Error('Overlap');occupied.add(k);}
    for(const p of level.pieces)if(seen.has(key(p.x,p.y)))throw Error('Starts over hole');
    for(const p of level.walls||[])if(seen.has(key(p.x,p.y)))throw Error('Blocked hole');
  }
  return true;
}
