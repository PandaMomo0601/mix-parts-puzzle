(function(){
'use strict';
const PAPER='#f4f1e9',INK='#24332d',CORAL='#d87561',MINT='#79ab97';
const SEARCH_STATE_LIMIT=4096,SEARCH_MS_LIMIT=12;
const SIDE=5,CELL=62,LEFT=40,TOP=117,BLOCK=58,DIRS=[[1,0],[0,1],[-1,0],[0,-1]],ARROWS=['right','down','left','up'];
const piece=(id,x,y,v,d)=>({id,x,y,v,d});
const LEVELS = [
 {name:'01 · 碰一下，相加',target:5,hint:'点左边的 2，让它碰到 3。',pieces:[piece('a',0,2,2,0),piece('b',3,2,3,2)]},
 {name:'02 · 一次只加一个',target:9,hint:'点左边的 2，停住后再点一次。',pieces:[piece('a',0,2,2,0),piece('b',2,2,3,0),piece('c',4,2,4,2)]},
 {name:'03 · 拐角处接力',target:12,hint:'先点左上方的 2，给下面的数字接力。',pieces:[piece('a',0,1,2,0),piece('b',3,1,3,1),piece('c',3,3,1,3),piece('d',3,4,6,3)]},
 {name:'04 · 不必全都用上',target:10,hint:'有些数字只需要让路。',pieces:[piece('a',1,4,1,2),piece('b',1,0,7,1),piece('c',2,4,2,2),piece('d',1,3,6,2)]},
 {name:'05 · 先空出这条路',target:12,hint:'先看路线，再选要碰到谁。',pieces:[piece('a',0,3,3,2),piece('b',3,3,1,1),piece('c',4,3,7,2),piece('d',3,0,1,1),piece('e',3,2,8,2)]},
 {name:'06 · 借一下边缘',target:15,hint:'空路会滑到边缘，试着用它换个位置。',pieces:[piece('a',0,3,1,0),piece('b',3,3,5,2),piece('c',0,0,7,1),piece('d',1,3,2,2),piece('e',3,0,9,2),piece('f',0,1,2,1)]},
 {name:'07 · 腾出交叉口',target:18,hint:'每次只碰一个，合好后再决定下一步。',pieces:[piece('a',3,0,11,3),piece('b',3,2,2,2),piece('c',3,4,1,3),piece('d',1,0,3,0),piece('e',0,2,1,0),piece('f',1,2,11,2),piece('g',2,0,2,0)]},
 {name:'08 · 留下刚好的数',target:24,hint:'不用清空棋盘，只要有一块刚好等于目标。',pieces:[piece('a',0,1,1,1),piece('b',3,1,10,3),piece('c',0,4,1,3),piece('d',0,3,1,3),piece('e',4,1,11,2),piece('f',0,2,7,3),piece('g',3,3,2,2)]}
];
const clone=s=>s.map(p=>({...p}));
const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
const stamp=s=>s.map(p=>`${p.x},${p.y},${p.v},${p.d}`).sort().join(';');
function motionFor(state,id){
 const p=state.find(q=>q.id===id),[dx,dy]=DIRS[p.d];let x=p.x,y=p.y,target=null;
 for(let distance=0;distance<SIDE;distance++){const nx=x+dx,ny=y+dy;if(nx<0||nx>=SIDE||ny<0||ny>=SIDE)break;x=nx;y=ny;target=state.find(q=>q.id!==id&&q.x===x&&q.y===y)||null;if(target)break;}
 if(x===p.x&&y===p.y)return null;
 return {kind:target?'add':'slide',x,y,targetId:target?.id||null,added:target?.v||0,value:p.v+(target?.v||0)};
}
function apply(state,id,action){return state.filter(p=>p.id!==action.targetId).map(p=>p.id===id?{...p,x:action.x,y:action.y,v:action.value}:{...p});}
function subsetPossible(state,target){let reachable=1n;for(const p of state)if(p.v<=target)reachable|=reachable<<BigInt(p.v);return !!(reachable&(1n<<BigInt(target)));}
function reachable(start,target){
 const began=now();let visited=0,generated=1;const finish=(result,reason)=>({result,reason,visited,generated,elapsedMs:+(now()-began).toFixed(3),stateLimit:SEARCH_STATE_LIMIT,timeLimitMs:SEARCH_MS_LIMIT});
 if(start.some(p=>p.v===target))return finish('reachable','exact-target');
 if(!subsetPossible(start,target))return finish('unreachable','positive-subset');
 const queue=[start],seen=new Set([stamp(start)]);
 for(let index=0;index<queue.length;index++){
  if(visited>=SEARCH_STATE_LIMIT||generated>=SEARCH_STATE_LIMIT||(visited%16===0&&now()-began>=SEARCH_MS_LIMIT))return finish('unknown','budget');
  const state=queue[index];visited++;
  for(const p of state){const action=motionFor(state,p.id);if(!action)continue;if(action.value===target)return finish('reachable','exact-route');
   const next=apply(state,p.id,action);if(!subsetPossible(next,target))continue;const k=stamp(next);if(seen.has(k))continue;seen.add(k);queue.push(next);generated++;
   if(generated>=SEARCH_STATE_LIMIT)return finish('unknown','budget');
  }
 }
 return finish('unreachable','space-exhausted');
}
function create(env){
 const level=Math.max(0,Math.min(LEVELS.length-1,Math.floor(env.level||0))),cfg=LEVELS[level];let pieces=clone(cfg.pieces),status='playing',motion=null,history=[],moves=0,feedback=cfg.hint,alive=true,pulse=0,search=reachable(pieces,cfg.target),searchRuns=1;
 const sound=(kind,v=.5,pitch=1)=>env.sound?.(kind,v,pitch);
 const center=p=>({x:LEFT+(p.x+.5)*CELL,y:TOP+(p.y+.5)*CELL});
 function endAction(){
  const active=motion,p=pieces.find(p=>p.id===active.id);motion=null;pieces=apply(pieces,p.id,active.to);moves++;
  if(active.to.kind==='add'){pulse=.24;sound('pop',.6,1+Math.min(active.to.value,24)/48);feedback=`${p.v} + ${active.to.added} = ${active.to.value}`;if(active.to.value>cfg.target)feedback+='，再看看其他数字。';}
  else{sound('tap',.35,.85);feedback='滑到边缘了，接着选一个数字。';}
  // A large block does not cause failure by itself: inspect every remaining route.
  if(pieces.some(q=>q.v===cfg.target)){status='won';search={result:'reachable',reason:'exact-target',visited:0,generated:0,elapsedMs:0,stateLimit:SEARCH_STATE_LIMIT,timeLimitMs:SEARCH_MS_LIMIT};feedback=`刚好 ${cfg.target}，过关！`;sound('win',.8,1);env.onComplete?.({message:feedback,moves,remaining:pieces.length,target:cfg.target});return;}
  search=reachable(pieces,cfg.target);searchRuns++;
  if(search.result==='unreachable'){status='failed';feedback='现在凑不出目标了，悔棋换个顺序。';sound('fail',.5,.8);env.onFail?.({reason:feedback,moves,target:cfg.target,proof:search.reason});}
 }
 function input(type,point){
  if(!alive||type!=='down'||status!=='playing'||motion||!point)return false;
  const p=pieces.find(q=>{const c=center(q);return Math.abs(point.x-c.x)<=BLOCK/2&&Math.abs(point.y-c.y)<=BLOCK/2;});if(!p)return false;
  const to=motionFor(pieces,p.id);if(!to){motion={id:p.id,bump:true,from:{...p},elapsed:0,duration:.18};feedback='已经到边缘了，点另一个数字。';sound('hit',.2,.8);return false;}
  history.push({pieces:clone(pieces),moves,search:{...search}});motion={id:p.id,bump:false,from:{...p},to,elapsed:0,duration:.22+(Math.abs(to.x-p.x)+Math.abs(to.y-p.y))*.07};feedback=to.kind==='add'?'碰到第一个数字，相加后停住。':'没有撞到数字，就滑到边缘。';sound('whoosh',.3,.9);return true;
 }
 function update(dt){if(!alive)return;const delta=Math.min(.08,Math.max(0,Number(dt)||0));pulse=Math.max(0,pulse-delta);if(!motion)return;motion.elapsed+=delta;if(motion.elapsed>=motion.duration){if(motion.bump)motion=null;else endAction();}}
 function canUndo(){return alive&&!motion&&status!=='won'&&history.length>0;}
 function undo(){if(!canUndo())return false;const previous=history.pop();pieces=previous.pieces;moves=previous.moves;search=previous.search;status='playing';pulse=0;feedback='已退回一步，换个顺序试试。';sound('tap',.3,.8);return true;}
 function pose(p){const c=center(p);if(motion?.id!==p.id)return c;const t=Math.min(1,motion.elapsed/motion.duration);if(motion.bump){const[dx,dy]=DIRS[p.d];return{x:c.x+dx*Math.sin(t*Math.PI)*2,y:c.y+dy*Math.sin(t*Math.PI)*2};}const end=center(motion.to),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;return{x:c.x+(end.x-c.x)*e,y:c.y+(end.y-c.y)*e};}
 function getState(){return {game:'arithmetic',level,status,moving:!!motion,moves,target:cfg.target,won:status==='won',failed:status==='failed',feedback,undoDepth:history.length,canUndo:canUndo(),search:{...search},searchRuns,animation:motion?JSON.parse(JSON.stringify(motion)):null,
  pieces:pieces.map(p=>({id:p.id,...pose(p),col:p.x,row:p.y,w:BLOCK,h:BLOCK,value:p.v,direction:ARROWS[p.d],directionIndex:p.d,canMove:!!motionFor(pieces,p.id)})),remaining:pieces.length};}
 function box(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.2;ctx.stroke();}}
 function arrow(ctx,x,y,d){const[dx,dy]=DIRS[d],len=16;ctx.strokeStyle='#fff8ed';ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x-dx*len/2,y-dy*len/2);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.moveTo(x+dx*len/2-dx*5+dy*4,y+dy*len/2-dy*5-dx*4);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.lineTo(x+dx*len/2-dx*5-dy*4,y+dy*len/2-dy*5+dx*4);ctx.stroke();}
 function render(ctx){
  ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='800 29px sans-serif';ctx.fillText(`目标 ${cfg.target}`,22,30);ctx.fillStyle=MINT;ctx.font='600 13px sans-serif';ctx.textAlign='right';ctx.fillText(`${moves} 步`,368,31);ctx.fillStyle='#566b5f';ctx.textAlign='left';ctx.font='600 14px sans-serif';ctx.fillText('凑出目标就过关，不必用完',22,61);ctx.fillStyle='#7c897d';ctx.font='12px sans-serif';ctx.fillText('点箭头滑动，碰到数字就相加一次',22,85);
  box(ctx,LEFT-7,TOP-7,SIDE*CELL+14,SIDE*CELL+14,20,'#e4e6dc');for(let y=0;y<SIDE;y++)for(let x=0;x<SIDE;x++)box(ctx,LEFT+x*CELL+2,TOP+y*CELL+2,58,58,12,'#f9f7f0');
  const order=pieces.slice().sort((a,b)=>(a.id===motion?.id?1:0)-(b.id===motion?.id?1:0));for(const p of order){let alpha=1;if(motion&&!motion.bump&&motion.to.targetId===p.id){const t=motion.elapsed/motion.duration;alpha=1-Math.max(0,(t-.65)/.35);}ctx.save();ctx.globalAlpha=alpha;const c=pose(p);box(ctx,c.x-29,c.y-27,58,58,12,'#24332d16');box(ctx,c.x-29,c.y-29,58,58,12,CORAL,'#ad604e');ctx.fillStyle='#fff8ed';ctx.font='750 27px sans-serif';ctx.textAlign='center';ctx.fillText(p.v,c.x,c.y-9);arrow(ctx,c.x,c.y+16,p.d);ctx.restore();}
  ctx.textAlign='center';ctx.fillStyle='#7c897d';ctx.font='12px sans-serif';ctx.fillText('箭头保持不变 · 空路滑到边缘',195,455);
  box(ctx,18,486,354,58,13,status==='failed'?'#f1ddd5':status==='won'?'#dce8db':'#e8eadf');ctx.fillStyle=status==='failed'?'#a44c39':INK;ctx.font='600 13px sans-serif';const text=Array.from(feedback);if(text.length>25){ctx.fillText(text.slice(0,25).join(''),195,507);ctx.fillText(text.slice(25).join(''),195,528);}else ctx.fillText(feedback,195,515);ctx.restore();
 }
 return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;history=[];}};
}
window.MixGames=window.MixGames||{};window.MixGames.arithmetic={title:'碰出目标数',shortTitle:'碰出目标数',operation:'点数字沿箭头滑动，碰撞相加，凑出目标就过关。',combination:'定向移动 × 碰撞加法',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
