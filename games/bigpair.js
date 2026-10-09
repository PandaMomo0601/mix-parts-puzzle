(function(){
'use strict';
const PAPER='#f4f1e9',INK='#24332d',CELL=54,LEFT=60,TOP=112,COLS=5,ROWS=6;
const DIRS=[[1,0],[0,1],[-1,0],[0,-1]],NAMES=['right','down','left','up'];
const COLORS=[{id:'coral',fill:'#d87561',ink:'#fff7ec',symbol:'triangle'},{id:'mint',fill:'#79ab97',ink:'#fff7ec',symbol:'circle'},{id:'blue',fill:'#718fb2',ink:'#fff7ec',symbol:'diamond'}];
const SEARCH_STATE_LIMIT=8192,SEARCH_MS_LIMIT=12,EPS=.00001;
const part=(id,col,row,cw,ch,color,d)=>({id,col,row,cw,ch,color,d,x:LEFT+(col+cw/2)*CELL,y:TOP+(row+ch/2)*CELL,w:cw*CELL-4,h:ch*CELL-4});
const LEVELS=[
 {name:'01 · 长条先让路',hint:'点绿色长条，先给红块让路。',pieces:[part(0,2,0,1,1,0,1),part(1,2,5,1,1,0,3),part(2,1,2,3,1,1,1),part(3,1,4,3,1,1,3)]},
 {name:'02 · 一条打开两路',hint:'消掉长条，红蓝两条路一起打开。',pieces:[part(0,1,0,1,1,0,1),part(1,1,5,1,1,0,3),part(2,3,0,1,1,2,1),part(3,3,5,1,1,2,3),part(4,1,2,3,1,1,1),part(5,1,4,3,1,1,3)]},
 {name:'03 · 大小也要成对',hint:'同色还要同形，方块不能和长条配对。',pieces:[part(0,1,0,1,1,0,1),part(1,1,5,1,1,0,3),part(2,3,0,1,1,2,1),part(3,3,5,1,1,2,3),part(4,1,2,3,1,1,1),part(5,1,4,3,1,1,3),part(6,0,2,1,1,1,0),part(7,4,2,1,1,1,2)]},
 {name:'04 · 留好下一对',hint:'红色有四块，先看清剩下的两块能否相遇。',pieces:[part(0,3,4,1,1,0,2),part(1,2,4,1,1,0,1),part(2,0,1,1,1,0,0),part(3,3,1,1,1,0,1),part(4,1,0,1,1,1,1),part(5,1,4,1,1,1,3),part(6,1,1,2,1,2,1),part(7,1,3,2,1,2,3)]},
 {name:'05 · 一起打开整盘',hint:'长条和方块共用路线，别把另一对留在死路上。',pieces:[part(0,4,4,1,1,0,2),part(1,3,4,1,1,0,2),part(2,3,0,2,1,1,1),part(3,3,3,2,1,1,3),part(4,3,1,1,1,2,2),part(5,0,1,1,1,2,1),part(6,2,0,1,1,0,1),part(7,2,4,1,1,0,2),part(8,2,1,1,1,1,2),part(9,1,1,1,1,1,3),part(10,0,2,1,1,2,1),part(11,0,4,1,1,2,1)]}
];
const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
// Full AABB sweep: every overlap across the moving rectangle's width matters.
function contacts(all,state,i){
 const p=all[i],[dx,dy]=DIRS[p.d];let distance=Infinity,ids=[];
 for(let j=0;j<all.length;j++){if(j===i||!(state&(1<<j)))continue;const q=all[j];
  const across=dx?Math.abs(q.y-p.y)<(q.h+p.h)/2-EPS:Math.abs(q.x-p.x)<(q.w+p.w)/2-EPS;
  if(!across)continue;const t=dx?(q.x-p.x)*dx-(q.w+p.w)/2:(q.y-p.y)*dy-(q.h+p.h)/2;
  if(t < -EPS)continue;if(t<distance-EPS){distance=Math.max(0,t);ids=[j];}else if(Math.abs(t-distance)<EPS)ids.push(j);
 }
 return{distance,ids};
}
function action(all,state,i){
 if(!(state&(1<<i)))return null;const hit=contacts(all,state,i);if(hit.ids.length!==1)return null;const j=hit.ids[0],p=all[i],q=all[j],[dx]=DIRS[p.d];
 if(p.color!==q.color||Math.abs(p.w-q.w)>EPS||Math.abs(p.h-q.h)>EPS||(dx?Math.abs(p.y-q.y)>EPS:Math.abs(p.x-q.x)>EPS))return null;
 return{id:i,target:j,next:state&~(1<<i)&~(1<<j),distance:hit.distance};
}
function inspect(all,state,memo=new Map([[0,true]]),limits={stateLimit:SEARCH_STATE_LIMIT,timeLimitMs:SEARCH_MS_LIMIT}){
 const started=now();let visited=0,memoHits=0;
 function solve(s){if(memo.has(s)){memoHits++;return memo.get(s);}if(visited>=limits.stateLimit||now()-started>=limits.timeLimitMs)return null;visited++;let uncertain=false;
  for(let i=0;i<all.length;i++){const a=action(all,s,i);if(!a)continue;const r=solve(a.next);if(r===true){memo.set(s,true);return true;}if(r===null)uncertain=true;}
  if(uncertain)return null;memo.set(s,false);return false;
 }
 const r=solve(state);return{result:r===true?'reachable':r===false?'unreachable':'unknown',visited,memoHits,elapsedMs:+(now()-started).toFixed(3),stateLimit:limits.stateLimit,timeLimitMs:limits.timeLimitMs};
}
function create(env){
 const level=Math.min(LEVELS.length-1,Math.max(0,Math.floor(env.level||0))),cfg=LEVELS[level],all=cfg.pieces.map(p=>({...p})),memo=new Map([[0,true]]);
 let mask=(1<<all.length)-1,status='playing',motion=null,history=[],moves=0,feedback=cfg.hint,alive=true,flashes=[],searchRuns=1,search=inspect(all,mask,memo);
 const sound=(kind,v=.5,p=1)=>env.sound?.(kind,v,p);
 function input(type,p){
  if(!alive||type!=='down'||status!=='playing'||motion||!p)return false;const i=all.findIndex((q,j)=>(mask&(1<<j))&&Math.abs(q.x-p.x)<=q.w/2&&Math.abs(q.y-p.y)<=q.h/2);if(i<0)return false;
  const q=all[i],[dx,dy]=DIRS[q.d],a=action(all,mask,i),from={x:q.x,y:q.y};
  if(a){history.push({mask,moves,status,feedback,search:{...search}});const to={x:q.x+dx*a.distance,y:q.y+dy*a.distance};motion={id:i,target:a.target,kind:'clear',from,to,next:a.next,elapsed:0,duration:.25+a.distance/650};feedback='同色同形，碰到一起就消掉。';sound('whoosh',.4,1);return true;}
  const hit=contacts(all,mask,i);let distance=hit.distance;
  if(!hit.ids.length){distance=dx>0?LEFT+COLS*CELL-q.w/2-q.x:dx<0?q.x-q.w/2-LEFT:dy>0?TOP+ROWS*CELL-q.h/2-q.y:q.y-q.h/2-TOP;feedback='这个方向没有合适的伙伴。';}
  else{const other=all[hit.ids[0]];feedback=hit.ids.length===1&&other.color===q.color?'同色也要同形、对齐，先给这条路让开。':'被别的块挡住了，先给整条路让开。';}
  motion={id:i,target:hit.ids[0]??null,contacts:hit.ids,kind:'bounce',from,to:{x:q.x+dx*distance,y:q.y+dy*distance},elapsed:0,duration:.3+distance/700};sound('hit',.25,.8);return false;
 }
 function update(dt){
  if(!alive)return;dt=Math.max(0,Math.min(.08,Number(dt)||0));flashes=flashes.filter(p=>p.time>0);for(const p of flashes)p.time-=dt;if(!motion)return;motion.elapsed+=dt;if(motion.elapsed<motion.duration)return;const done=motion;motion=null;if(done.kind==='bounce')return;
  mask=done.next;moves++;flashes=[{...done.to,w:all[done.id].w,h:all[done.id].h,color:all[done.id].color,time:.24}];sound('collect',.65,1.05);feedback='一对消掉了，看看新打开的路。';
  if(mask===0){search={...search,result:'reachable',visited:0,memoHits:1,elapsedMs:0};status='won';feedback='全部成对，整盘清空！';sound('win',.8,1);env.onComplete?.({message:feedback,moves,pairs:all.length/2});return;}
  search=inspect(all,mask,memo);searchRuns++;if(search.result==='unreachable'){status='failed';feedback='剩下的块无法成对了，悔棋换个搭配。';sound('fail',.5,.85);env.onFail?.({reason:feedback,moves,proof:'complete-rectangle-pair-reachability'});}
 }
 const canUndo=()=>alive&&!motion&&status!=='won'&&history.length>0;
 function undo(){if(!canUndo())return false;const old=history.pop();mask=old.mask;moves=old.moves;status=old.status;feedback=old.feedback;search={...old.search};flashes=[];sound('tap',.3,.8);return true;}
 function pose(i){const p=all[i];if(motion?.id!==i)return{x:p.x,y:p.y};const t=Math.min(1,motion.elapsed/motion.duration),u=Math.min(1,t/.78),travel=motion.kind==='bounce'?Math.sin(t*Math.PI):(u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2);return{x:p.x+(motion.to.x-p.x)*travel,y:p.y+(motion.to.y-p.y)*travel};}
 function getState(){return{game:'bigpair',level,status,moving:!!motion,moves,pairs:moves,totalPairs:all.length/2,remaining:all.filter((p,i)=>mask&(1<<i)).length,undoDepth:history.length,canUndo:canUndo(),feedback,search:{...search},searchRuns,animation:motion?JSON.parse(JSON.stringify(motion)):null,pieces:all.flatMap((p,i)=>(mask&(1<<i))?[{id:p.id,...pose(i),col:p.col,row:p.row,cw:p.cw,ch:p.ch,w:p.w,h:p.h,color:COLORS[p.color].id,colorIndex:p.color,symbol:COLORS[p.color].symbol,direction:NAMES[p.d],directionIndex:p.d,canMove:!!action(all,mask,i)}]:[])};}
 function rr(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.1;ctx.stroke();}}
 function symbol(ctx,color,x,y){ctx.beginPath();if(color===1)ctx.arc(x,y,7,0,Math.PI*2);else if(color===0){ctx.moveTo(x,y-8);ctx.lineTo(x+8,y+6);ctx.lineTo(x-8,y+6);ctx.closePath();}else{ctx.moveTo(x,y-8);ctx.lineTo(x+8,y);ctx.lineTo(x,y+8);ctx.lineTo(x-8,y);ctx.closePath();}ctx.fillStyle=COLORS[color].ink;ctx.fill();}
 function arrow(ctx,x,y,d,color){const[dx,dy]=DIRS[d],len=17;ctx.strokeStyle=color;ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x-dx*len/2,y-dy*len/2);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.moveTo(x+dx*len/2-dx*5+dy*4,y+dy*len/2-dy*5-dx*4);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.lineTo(x+dx*len/2-dx*5-dy*4,y+dy*len/2-dy*5+dx*4);ctx.stroke();}
 function render(ctx){
  ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='700 21px sans-serif';ctx.fillText('大块碰对',22,29);ctx.textAlign='right';ctx.fillStyle='#607d6d';ctx.font='600 14px sans-serif';ctx.fillText(`${moves} / ${all.length/2} 对`,368,30);ctx.fillStyle='#536a5d';ctx.textAlign='left';ctx.font='600 14px sans-serif';ctx.fillText('同色同形，碰到就成对消掉',22,61);ctx.fillStyle='#7a877c';ctx.font='12px sans-serif';ctx.fillText('点箭头直走 · 清空全部彩块',22,84);
  rr(ctx,LEFT-9,TOP-9,COLS*CELL+18,ROWS*CELL+18,18,'#e4e6dc');for(let y=0;y<ROWS;y++)for(let x=0;x<COLS;x++)rr(ctx,LEFT+x*CELL+2,TOP+y*CELL+2,CELL-4,CELL-4,10,'#f9f7f0');
  const order=all.map((p,i)=>i).filter(i=>mask&(1<<i)).sort((a,b)=>(a===motion?.id?1:0)-(b===motion?.id?1:0));
  for(const i of order){const p=all[i],c=pose(i),palette=COLORS[p.color];let alpha=1;if(motion?.kind==='clear'&&(motion.id===i||motion.target===i)){const t=motion.elapsed/motion.duration;alpha=1-Math.max(0,(t-.78)/.22);}ctx.save();ctx.globalAlpha=alpha;rr(ctx,c.x-p.w/2,c.y-p.h/2+2,p.w,p.h,10,'#24332d14');rr(ctx,c.x-p.w/2,c.y-p.h/2,p.w,p.h,10,palette.fill,'#24332d25');symbol(ctx,p.color,c.x,c.y-10);arrow(ctx,c.x,c.y+13,p.d,palette.ink);ctx.restore();}
  for(const f of flashes){const u=1-f.time/.24;ctx.save();ctx.globalAlpha=Math.max(0,1-u);ctx.lineWidth=3;rr(ctx,f.x-f.w/2-u*6,f.y-f.h/2-u*6,f.w+u*12,f.h+u*12,11,null,COLORS[f.color].fill);ctx.restore();}
  ctx.textAlign='center';ctx.fillStyle='#7c897d';ctx.font='12px sans-serif';ctx.fillText('长条占多格，会同时挡住几条路',195,459);rr(ctx,18,486,354,58,13,status==='failed'?'#f1ddd5':status==='won'?'#dce8db':'#e8eadf');ctx.fillStyle=status==='failed'?'#a34d3d':INK;ctx.font='600 13px sans-serif';const text=Array.from(feedback);if(text.length>25){ctx.fillText(text.slice(0,25).join(''),195,507);ctx.fillText(text.slice(25).join(''),195,528);}else ctx.fillText(feedback,195,515);ctx.restore();
 }
 return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;flashes=[];history=[];}};
}
window.MixGames=window.MixGames||{};window.MixGames.bigpair={title:'大块碰对',shortTitle:'大块碰对',operation:'点整块沿箭头走，同色同形碰到一起消掉。',combination:'整块占路 × 同形同色配对',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
