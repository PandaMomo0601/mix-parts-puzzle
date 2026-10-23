export const COLORS={R:'coral',Y:'gold',G:'mint',B:'blue'};
export const NAMES={R:'草莓',Y:'柠檬',G:'薄荷',B:'蓝莓'};
const copy=x=>structuredClone(x);
const colorCounts=()=>({R:0,Y:0,G:0,B:0});
const cellsOf=l=>l.cells||l.grid.flatMap((row,y)=>[...row].map((color,x)=>({x,y,color})));
export function validateLevel(l){
 const e=[],cells=cellsOf(l),counts=colorCounts(),supply=colorCounts();
 if(!['bridge','trays','loop'].includes(l.mode))e.push('未知模式');
 if(!Number.isInteger(l.width)||!Number.isInteger(l.height)||cells.length!==l.width*l.height)e.push('画布尺寸无效');
 cells.forEach((c,i)=>{if(!(c.color in counts)||c.x!==i%l.width||c.y!==Math.floor(i/l.width))e.push('糖画格无效');else counts[c.color]++;});
 if(l.mode==='bridge'){
  if(![2,3].includes(l.slots))e.push('灌装位无效');
  const ids=new Set();for(const p of l.packets||[]){if(ids.has(p.id)||!(p.color in supply)||!Number.isInteger(p.count)||p.count<1)e.push('料筒无效');ids.add(p.id);supply[p.color]+=p.count;}
 }else if(l.mode==='trays'){
  if(![2,3].includes(l.slots))e.push('纸托位无效');
  const seen=new Set(),ids=new Set();for(const t of l.trays||[]){if(ids.has(t.id)||!t.cells.length)e.push('纸托无效');ids.add(t.id);for(const i of t.cells){if(!Number.isInteger(i)||!cells[i]||seen.has(i))e.push('纸托格重复或越界');seen.add(i);}}
  if(seen.size!==cells.length)e.push('纸托未覆盖糖画');
  for(const c of l.stream||[])if(c in supply)supply[c]++;else e.push('来糖颜色无效');
 }else if(l.mode==='loop'){
  if(!Number.isInteger(l.capacity)||l.capacity<1)e.push('环道容量无效');
  const ids=new Set();for(const lane of l.lanes||[])for(const p of lane){if(ids.has(p.id)||!(p.color in supply)||!Number.isInteger(p.count)||p.count<1)e.push('来料批无效');ids.add(p.id);supply[p.color]+=p.count;}
  const seen=new Set();for(const t of l.targets||[]){if(!(t.color in counts)||!t.cells.length)e.push('条托无效');for(const i of t.cells){if(!Number.isInteger(i)||!cells[i]||seen.has(i)||cells[i]?.color!==t.color)e.push('条托格无效');seen.add(i);}}
  if(seen.size!==cells.length)e.push('条托未覆盖糖画');
 }
 for(const c of Object.keys(counts))if(counts[c]!==supply[c])e.push(`${c}供需不等 ${counts[c]}/${supply[c]}`);
 return e;
}
export function createState(l){
 const e=validateLevel(l);if(e.length)throw Error(`${l.id}: ${e.join(';')}`);
 return {levelId:l.id,mode:l.mode,filled:[],filledFlags:Array(cellsOf(l).length).fill(false),actions:[],moves:0,status:'playing',row:0,active:[],
 packets:(l.mode==='loop'?l.lanes.flat():l.packets||[]).map(p=>({...p,remaining:p.count,status:'stock'})),
 trays:(l.trays||[]).map(t=>({id:t.id,remaining:t.cells.length,status:'stock'})),streamCursor:0,buffer:[],lanePos:(l.lanes||[]).map(()=>0),pending:null,targetIndex:0};
}
export function ledger(l,s){
 const total=cellsOf(l).length,filled=s.filled.length;
 let stock=0,working=0,stockBoxes=0,activeBoxes=0;
 if(l.mode==='bridge'){
  for(const p of s.packets){if(p.status==='stock'){stock+=p.remaining;stockBoxes++;}else if(p.status==='active'){working+=p.remaining;activeBoxes++;}}
 }else if(l.mode==='trays'){
  stock=l.stream.length-s.streamCursor;stockBoxes=s.trays.filter(t=>t.status==='stock').length;activeBoxes=s.active.length;
 }else{
  stock=s.packets.reduce((n,p)=>n+p.remaining,0);working=s.buffer.length;
  stockBoxes=s.packets.filter(p=>p.remaining>0).length;activeBoxes=s.pending?1:0;
 }
 const need=colorCounts(),remaining=colorCounts();const filledSet=new Set(s.filled);
 cellsOf(l).forEach((c,i)=>{if(!filledSet.has(i))need[c.color]++;});
 if(l.mode==='trays')for(const c of l.stream.slice(s.streamCursor))remaining[c]++;
 else for(const p of s.packets)remaining[p.color]+=p.remaining;
 if(l.mode==='loop')for(const c of s.buffer)remaining[c.color]++;
 return {total,filled,empty:total-filled,stock,working,stockBoxes,activeBoxes,byColor:{need,remaining},buffer:s.buffer.length,pending:s.pending? s.packets.find(p=>p.id===s.pending.id).remaining:0,undockedTrays:l.mode==='trays'?s.trays.filter(t=>t.status!=='done').length:l.mode==='loop'?l.targets.length-s.targetIndex:0};
}
export function won(l,s){const q=ledger(l,s);return q.empty===0&&q.stock===0&&q.working===0&&q.stockBoxes===0&&q.activeBoxes===0&&q.undockedTrays===0;}
function nextDescriptor(l,s){
 const cells=cellsOf(l),isFilled=i=>s.filledFlags?s.filledFlags[i]:s.filled.includes(i);
 if(l.mode==='bridge'){
  const empty=[];for(let i=s.row*l.width;i<(s.row+1)*l.width&&i<cells.length;i++)if(!isFilled(i))empty.push({c:cells[i],i});
  if(s.row<l.height&&!empty.length)return {type:'advance',row:s.row+1};
  for(const id of s.active){const p=s.packets.find(p=>p.id===id);if(p.remaining===0)return {type:'release',source:id};const hit=empty.find(v=>v.c.color===p.color);if(hit)return {type:'land',color:p.color,cell:hit.i,source:id};}
 }else if(l.mode==='trays'){
  for(const id of s.active){const t=s.trays.find(t=>t.id===id);if(t.remaining===0)return {type:'dock',source:id};}
  const color=l.stream[s.streamCursor];if(!color)return null;
  for(const id of s.active){const t=l.trays.find(t=>t.id===id);const i=t.cells.find(i=>!isFilled(i)&&cells[i].color===color);if(i!==undefined)return {type:'land',color,cell:i,source:id,stream:s.streamCursor};}
 }else{
  const target=l.targets[s.targetIndex];
  if(target){const index=target.cells.find(i=>!isFilled(i));if(index===undefined)return {type:'dock',source:target.id,target:s.targetIndex};
   const b=s.buffer.findIndex(c=>c.color===target.color);if(b>=0)return {type:'land',color:target.color,cell:index,source:s.buffer[b].source,bufferIndex:b,target:s.targetIndex};}
  if(s.pending){const p=s.packets.find(p=>p.id===s.pending.id);if(p.remaining===0)return {type:'release',source:p.id,lane:s.pending.lane};
   if(s.buffer.length<l.capacity)return {type:'feed',color:p.color,source:p.id,lane:s.pending.lane};}
 }
 return null;
}
// Each event describes one physical operation. No sugar is removed on a click.
// A loop packet that cannot finish releasing remains pending at the inlet.
function mutateEvent(l,s,e){
 if(e.type==='launch'){
  s.actions.push(e.source);s.moves++;
  if(l.mode==='bridge'){s.packets.find(p=>p.id===e.source).status='active';s.active.push(e.source);}
  else if(l.mode==='trays'){s.trays.find(t=>t.id===e.source).status='active';s.active.push(e.source);}
  else{s.pending={id:e.source,lane:e.lane};s.packets.find(p=>p.id===e.source).status='active';}
 }else if(e.type==='land'){
  s.filled.push(e.cell);s.filledFlags[e.cell]=true;
  if(l.mode==='bridge')s.packets.find(p=>p.id===e.source).remaining--;
  else if(l.mode==='trays'){s.streamCursor++;s.trays.find(t=>t.id===e.source).remaining--;}
  else s.buffer.splice(e.bufferIndex,1);
 }else if(e.type==='advance')s.row=e.row;
 else if(e.type==='feed'){s.packets.find(p=>p.id===e.source).remaining--;s.buffer.push({color:e.color,source:e.source});}
 else if(e.type==='release'){
  s.packets.find(p=>p.id===e.source).status='done';
  if(l.mode==='bridge')s.active=s.active.filter(id=>id!==e.source);
  else{s.lanePos[e.lane]++;s.pending=null;}
 }else if(e.type==='dock'){
  if(l.mode==='trays'){s.trays.find(t=>t.id===e.source).status='done';s.active=s.active.filter(id=>id!==e.source);}
  else s.targetIndex++;
 }
 return s;
}
function rawLegal(l,s){
 if(l.mode==='bridge')return s.active.length<l.slots?s.packets.filter(p=>p.status==='stock').map(p=>p.id):[];
 if(l.mode==='trays')return s.active.length<l.slots?s.trays.filter(t=>t.status==='stock').map(t=>t.id):[];
 if(s.pending||s.buffer.length>=l.capacity)return [];
 return l.lanes.flatMap((lane,i)=>lane[s.lanePos[i]]?[lane[s.lanePos[i]].id]:[]);
}
function finishStatus(l,s){s.status=won(l,s)?'won':!nextDescriptor(l,s)&&!rawLegal(l,s).length?'stuck':'playing';return s;}
export function legalActions(l,s){return s.status==='won'||s.status==='stuck'?[]:rawLegal(l,s);}
export function nextEvent(l,s){return nextDescriptor(l,s);}
export function applyEvent(l,state,event){
 if(!event||typeof event!=='object')throw Error('事件无效');
 if(event.type==='launch'){
  if(!legalActions(l,state).includes(event.source))throw Error('放行无效');
  const lane=l.mode==='loop'?l.lanes.findIndex(a=>a[state.lanePos[l.lanes.indexOf(a)]]?.id===event.source):undefined;
  if(l.mode==='loop'&&event.lane!==lane)throw Error('来料带无效');
 }else{
  const expected=nextDescriptor(l,state);
  if(!expected||Object.keys(expected).some(k=>expected[k]!==event[k]))throw Error('事件顺序无效');
 }
 return finishStatus(l,mutateEvent(l,copy(state),event));
}
export function settle(l,state,{events=true,snapshots=true}={}){
 const s=copy(state),out=[];let e,count=0;
 while((e=nextDescriptor(l,s))){
  mutateEvent(l,s,e);if(events)out.push(snapshots?{...e,after:copy(s)}:e);
  if(++count>cellsOf(l).length*5+s.packets.length+s.trays.length+20)throw Error('自动过程未终止');
 }
 finishStatus(l,s);if(out.length&&snapshots)out[out.length-1].after=copy(s);
 return {state:s,events:out};
}
export function perform(l,state,id,{events=true,snapshots=true}={}){
 if(!legalActions(l,state).includes(id))return {accepted:false,reason:state.pending?'入口仍在放糖':state.status==='won'?'已经完成':'当前没有空位或来料不可达',state,events:[]};
 const e={type:'launch',source:id};if(l.mode==='loop')e.lane=l.lanes.findIndex((lane,i)=>lane[state.lanePos[i]]?.id===id);
 const s=mutateEvent(l,copy(state),e),launchEvent=snapshots?{...e,after:copy(s)}:e;
 const rest=settle(l,s,{events,snapshots});if(snapshots&&!rest.events.length)launchEvent.after=copy(rest.state);return {accepted:true,state:rest.state,events:events?[launchEvent,...rest.events]:[]};
}
export function replay(l,actions){
 if(!Array.isArray(actions)||actions.length>100)throw Error('存档动作无效');let s=createState(l);
 for(const id of actions){const r=perform(l,s,id,{events:false});if(!r.accepted)throw Error('存档动作不可达');s=r.state;}return s;
}
export function stateKey(s){return [[...s.filled].sort((a,b)=>a-b).join(','),s.active.join(','),s.packets.map(p=>p.remaining+':'+p.status).join(','),s.trays.map(t=>t.remaining+':'+t.status).join(','),s.streamCursor,s.buffer.map(c=>c.color).sort().join(','),s.lanePos.join(','),s.pending?.id||'',s.targetIndex,s.row].join('|');}
export function solve(l,initial=createState(l),{limit=80000}={}){
 const seen=new Set();let nodes=0,hitLimit=false;
 function visit(s){
  if(won(l,s))return [];
  if(s.status==='stuck')return null;
  if(++nodes>limit){hitLimit=true;return null;}
  const k=stateKey(s);if(seen.has(k))return null;seen.add(k);
  const options=legalActions(l,s).map(id=>{const n=perform(l,s,id,{events:false}).state;return {id,s:n,score:n.filled.length-s.filled.length+(s.active.length-n.active.length)*5-(n.buffer.length-s.buffer.length)};});
  options.sort((a,b)=>b.score-a.score);
  for(const o of options){const rest=visit(o.s);if(rest)return [o.id,...rest];if(hitLimit)return null;}
  return null;
 }
 const actions=visit(initial);return {status:actions?'solved':hitLimit?'limit':'unsolvable',actions:actions||[],path:actions,nodes};
}
