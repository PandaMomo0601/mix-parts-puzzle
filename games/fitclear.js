(function(){
'use strict';
const MODE='fitclear',TITLE='拼好就消',PAPER='#f4f1e9',INK='#24332d',CELL=54,LEFT=33,TOP=113,N=6;
const DIRS=[[1,0],[0,1],[-1,0],[0,-1]],NAMES=['right','down','left','up'];
const COLORS=[{id:'coral',fill:'#d87561',ink:'#fff7ec',symbol:'triangle'},{id:'mint',fill:'#79ab97',ink:'#fff7ec',symbol:'circle'},{id:'violet',fill:'#8f89d0',ink:'#fff7ec',symbol:'diamond'}];
const SEARCH_STATE_LIMIT=8192,SEARCH_MS_LIMIT=12;
const LEVELS=[{"name":"01 · 先拼绿块","hint":"先拼绿块，红块的路就通了。","pieces":[{"col":4,"row":4,"cells":[[1,0],[0,1],[1,1]],"color":0,"d":2},{"col":1,"row":4,"cells":[[0,0]],"color":0,"d":0},{"col":3,"row":4,"cells":[[0,0]],"color":1,"d":3},{"col":3,"row":0,"cells":[[0,0],[1,0],[1,1]],"color":1,"d":3}]},{"name":"02 · 一对给一对让路","hint":"红色有两对，先处理挡路的绿块。","pieces":[{"col":0,"row":4,"cells":[[0,0]],"color":0,"d":0},{"col":4,"row":3,"cells":[[0,0],[1,0],[1,1]],"color":0,"d":2},{"col":0,"row":5,"cells":[[0,0]],"color":1,"d":0},{"col":1,"row":4,"cells":[[0,0],[1,0],[1,1]],"color":1,"d":2},{"col":0,"row":0,"cells":[[0,0],[1,0],[0,1]],"color":0,"d":0},{"col":4,"row":1,"cells":[[0,0]],"color":0,"d":3}]},{"name":"03 · 同色也要选对","hint":"同色也可能找错伙伴，看好缺口。","pieces":[{"col":1,"row":4,"cells":[[0,0]],"color":0,"d":0},{"col":4,"row":4,"cells":[[1,0],[0,1],[1,1]],"color":0,"d":2},{"col":4,"row":4,"cells":[[0,0]],"color":1,"d":3},{"col":3,"row":0,"cells":[[0,0],[1,0],[0,1]],"color":1,"d":0},{"col":2,"row":3,"cells":[[0,0]],"color":0,"d":1},{"col":2,"row":4,"cells":[[1,0],[0,1],[1,1]],"color":0,"d":3},{"col":3,"row":2,"cells":[[0,0],[1,0]],"color":1,"d":2},{"col":0,"row":3,"cells":[[0,0],[1,0]],"color":1,"d":0}]},{"name":"04 · 把两边接起来","hint":"一对消掉，另一对才能穿过去。","pieces":[{"col":3,"row":4,"cells":[[1,0],[0,1],[1,1]],"color":0,"d":2},{"col":2,"row":4,"cells":[[0,0]],"color":0,"d":2},{"col":0,"row":0,"cells":[[0,0],[1,0]],"color":1,"d":1},{"col":0,"row":4,"cells":[[0,0],[1,0]],"color":1,"d":1},{"col":2,"row":2,"cells":[[0,0],[0,1]],"color":2,"d":0},{"col":5,"row":2,"cells":[[0,0],[0,1]],"color":2,"d":3},{"col":3,"row":0,"cells":[[0,0],[1,0],[0,1]],"color":0,"d":1},{"col":4,"row":3,"cells":[[0,0]],"color":0,"d":2},{"col":1,"row":1,"cells":[[0,0],[1,0]],"color":1,"d":2},{"col":0,"row":2,"cells":[[0,0],[1,0]],"color":1,"d":0}]},{"name":"05 · 留好最后一对","hint":"别只看眼前能拼的一对。","pieces":[{"col":0,"row":0,"cells":[[0,0],[1,0],[1,1]],"color":0,"d":1},{"col":0,"row":4,"cells":[[0,0]],"color":0,"d":1},{"col":4,"row":2,"cells":[[0,0],[0,1],[1,1]],"color":1,"d":3},{"col":5,"row":0,"cells":[[0,0]],"color":1,"d":0},{"col":2,"row":0,"cells":[[0,0]],"color":2,"d":1},{"col":2,"row":4,"cells":[[1,0],[0,1],[1,1]],"color":2,"d":3},{"col":2,"row":3,"cells":[[0,0],[1,0]],"color":0,"d":2},{"col":1,"row":4,"cells":[[0,0],[1,0]],"color":0,"d":0},{"col":5,"row":1,"cells":[[0,0]],"color":1,"d":2},{"col":3,"row":0,"cells":[[0,0],[1,0],[0,1]],"color":1,"d":3},{"col":0,"row":1,"cells":[[0,0]],"color":2,"d":1},{"col":0,"row":2,"cells":[[1,0],[0,1],[1,1]],"color":2,"d":1}]}];
const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
const occupied=p=>p.cells.map(([x,y])=>[x+p.col,y+p.row]);
const keys=p=>occupied(p).map(([x,y])=>y*N+x);
const inside=p=>occupied(p).every(([x,y])=>x>=0&&y>=0&&x<N&&y<N);
const overlap=(a,b)=>keys(a).some(k=>keys(b).includes(k));
const boxPiece=b=>({col:b.col,row:b.row,cells:[[0,0],[1,0],[0,1],[1,1]]});
function square(a,b){
 if(a.color!==b.color||a.cells.length+b.cells.length!==4)return null;
 const cells=[...occupied(a),...occupied(b)],xs=cells.map(c=>c[0]),ys=cells.map(c=>c[1]),col=Math.min(...xs),row=Math.min(...ys);
 return Math.max(...xs)-col===1&&Math.max(...ys)-row===1&&new Set(cells.map(c=>c.join(','))).size===4?{col,row}:null;
}
// Scan actual occupied cells. Side contact is allowed; frontal penetration is not.
// A valid fit requires at least one full cell of travel. Already joined pieces never auto-fit.
// A move stops at the first exact 2x2 completion, before any later obstruction.
function trace(all,state,i){
 if(!(state.mask&(1<<i)))return null;
 const a=all[i],[dx,dy]=DIRS[a.d],others=all.filter((p,j)=>j!==i&&(state.mask&(1<<j))),fixed=state.fixed.map(boxPiece);
 for(let t=0;t<=N;t++){
  const p={...a,col:a.col+dx*t,row:a.row+dy*t},next={...p,col:p.col+dx,row:p.row+dy};
  if(!inside(p)||others.some(b=>overlap(p,b))||fixed.some(b=>overlap(p,b)))return null;
  for(const b of others){const box=square(p,b);if(box&&t>0){const j=all.indexOf(b);return{kind:'fit',id:i,target:j,distance:t,to:{col:p.col,row:p.row},box,next:{mask:state.mask&~(1<<i)&~(1<<j),fixed:MODE==='fitlock'?[...state.fixed,{...box,color:a.color}]:[]}};}}
  const obstacle=others.find(b=>overlap(next,b)),solid=fixed.some(b=>overlap(next,b));
  if(!inside(next)||obstacle||solid)return{kind:'bounce',id:i,target:obstacle?all.indexOf(obstacle):null,distance:t,to:{col:p.col,row:p.row},reason:solid?'fixed':obstacle?'mismatch':'empty'};
 }
 return null;
}
const action=(all,state,i)=>{const move=trace(all,state,i);return move?.kind==='fit'?move:null;};
const key=s=>`${s.mask}|${s.fixed.map(p=>p.col+','+p.row).sort().join(';')}`;
function create(env){
 const level=Math.min(LEVELS.length-1,Math.max(0,Math.floor(env.level||0))),cfg=LEVELS[level],all=cfg.pieces.map((p,id)=>({...p,id,cells:p.cells.map(c=>[...c])}));
 let state={mask:(1<<all.length)-1,fixed:[]},status='playing',motion=null,history=[],moves=0,feedback=cfg.hint,alive=true,flashes=[],searchRuns=0;
 const memo=new Map;
 function inspect(s){
  const started=now();let visited=0,memoHits=0;
  function dfs(q){if(!q.mask)return true;const k=key(q);if(memo.has(k)){memoHits++;return memo.get(k);}if(visited>=SEARCH_STATE_LIMIT||now()-started>=SEARCH_MS_LIMIT)return null;visited++;let uncertain=false;
   for(let i=0;i<all.length;i++){const a=action(all,q,i);if(!a)continue;const result=dfs(a.next);if(result===true){memo.set(k,true);return true;}if(result===null)uncertain=true;}
   if(uncertain)return null;memo.set(k,false);return false;
  }
  const result=dfs(s);searchRuns++;return{result:result===true?'reachable':result===false?'unreachable':'unknown',visited,memoHits,elapsedMs:+(now()-started).toFixed(3),stateLimit:SEARCH_STATE_LIMIT,timeLimitMs:SEARCH_MS_LIMIT};
 }
 let search=inspect(state);
 const sound=(type,v=.5,p=1)=>env.sound?.(type,v,p);
 function input(type,p){
  if(!alive||type!=='down'||!p||status!=='playing'||motion)return false;
  const i=all.findIndex((q,j)=>(state.mask&(1<<j))&&occupied(q).some(([col,row])=>p.x>=LEFT+col*CELL+2&&p.x<=LEFT+(col+1)*CELL-2&&p.y>=TOP+row*CELL+2&&p.y<=TOP+(row+1)*CELL-2));if(i<0)return false;
  const step=trace(all,state,i);if(!step)return false;
  if(step.kind==='fit')history.push({state:{mask:state.mask,fixed:state.fixed.map(b=>({...b}))},moves,search:{...search}});
  motion={...step,from:{col:all[i].col,row:all[i].row},elapsed:0,duration:.22+step.distance*CELL/(step.kind==='fit'?620:760)};
  if(step.kind==='fit'){feedback=MODE==='fitclear'?'同色拼成正方形，一起消掉。':'拼成正方形，成品留在这里。';sound('whoosh',.38,1);}else{feedback=step.reason==='fixed'?'成品挡住了，换条路线或悔棋。':step.reason==='empty'?'这个方向没有能拼好的伙伴。':'前面拼不成同色正方形，先让路。';sound('hit',.25,.8);}
  return step.kind==='fit';
 }
 function update(dt){
  if(!alive)return;dt=Math.max(0,Math.min(.08,Number(dt)||0));for(const f of flashes)f.time-=dt;flashes=flashes.filter(f=>f.time>0);if(!motion)return;
  motion.elapsed+=dt;if(motion.elapsed<motion.duration)return;const done=motion;motion=null;if(done.kind!=='fit')return;
  state=done.next;moves++;flashes=[{...done.box,color:all[done.id].color,time:.3}];sound('collect',.65,1.05);
  if(!state.mask){status='won';search={...search,result:'reachable'};feedback=MODE==='fitclear'?'全部拼好，清空了！':'全部归位，拼好了！';sound('win',.8,1);env.onComplete?.({message:feedback,moves,pairs:all.length/2});return;}
  search=inspect(state);feedback=MODE==='fitclear'?'一对消掉，新的路线打开了。':'成品留在原地，看看下一条路线。';
  if(search.result==='unreachable'){status='failed';feedback='剩下的零件拼不完了，悔棋换个配法。';sound('fail',.5,.85);env.onFail?.({reason:feedback,moves,proof:'complete-fit-reachability'});}
 }
 function canUndo(){return alive&&!motion&&status!=='won'&&history.length>0;}
 function undo(){if(!canUndo())return false;const old=history.pop();state={mask:old.state.mask,fixed:old.state.fixed.map(b=>({...b}))};moves=old.moves;search={...old.search};status='playing';flashes=[];feedback='两片回来了，换个顺序试试。';sound('tap',.3,.8);return true;}
 function pose(i){const p=all[i];if(motion?.id!==i)return{col:p.col,row:p.row};const t=Math.min(1,motion.elapsed/motion.duration),u=motion.kind==='bounce'?Math.sin(t*Math.PI):(t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2);return{col:p.col+(motion.to.col-p.col)*u,row:p.row+(motion.to.row-p.row)*u};}
 function getState(){return{game:MODE,level,status,moving:!!motion,moves,pairs:moves,totalPairs:all.length/2,remaining:all.filter((_,i)=>state.mask&(1<<i)).length,undoDepth:history.length,canUndo:canUndo(),feedback,search:{...search},searchRuns,animation:motion?JSON.parse(JSON.stringify(motion)):null,board:{left:LEFT,top:TOP,cols:N,rows:N,cellSize:CELL},
  pieces:all.flatMap((p,i)=>{if(!(state.mask&(1<<i)))return[];const q=pose(i),first=p.cells[0],w=Math.max(...p.cells.map(c=>c[0]))+1,h=Math.max(...p.cells.map(c=>c[1]))+1;return[{id:i,x:LEFT+(q.col+first[0]+.5)*CELL,y:TOP+(q.row+first[1]+.5)*CELL,w:w*CELL-4,h:h*CELL-4,col:p.col,row:p.row,cells:p.cells.map(c=>[...c]),cellSize:CELL,hitCells:p.cells.map(([x,y])=>({x:LEFT+(q.col+x+.5)*CELL,y:TOP+(q.row+y+.5)*CELL,w:CELL-4,h:CELL-4})),color:COLORS[p.color].id,colorIndex:p.color,symbol:COLORS[p.color].symbol,direction:NAMES[p.d],directionIndex:p.d,canMove:!!action(all,state,i)}];}),
  fixed:state.fixed.map((b,i)=>({id:'fixed-'+i,col:b.col,row:b.row,x:LEFT+(b.col+1)*CELL,y:TOP+(b.row+1)*CELL,w:CELL*2-4,h:CELL*2-4,cells:[[0,0],[1,0],[0,1],[1,1]],color:COLORS[b.color].id,direction:null,canMove:false}))};}
 function rr(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.1;ctx.stroke();}}
 function symbol(ctx,color,x,y){ctx.beginPath();if(color===1)ctx.arc(x,y,6,0,Math.PI*2);else if(color===0){ctx.moveTo(x,y-7);ctx.lineTo(x+7,y+6);ctx.lineTo(x-7,y+6);ctx.closePath();}else{ctx.moveTo(x,y-8);ctx.lineTo(x+8,y);ctx.lineTo(x,y+8);ctx.lineTo(x-8,y);ctx.closePath();}ctx.fillStyle=COLORS[color].ink;ctx.fill();}
 function arrow(ctx,x,y,d,color){const[dx,dy]=DIRS[d],len=18;ctx.strokeStyle=color;ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x-dx*len/2,y-dy*len/2);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.moveTo(x+dx*len/2-dx*5+dy*4,y+dy*len/2-dy*5-dx*4);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.lineTo(x+dx*len/2-dx*5-dy*4,y+dy*len/2-dy*5+dx*4);ctx.stroke();}
 function drawPiece(ctx,p,q,alpha){ctx.save();ctx.globalAlpha=alpha;const palette=COLORS[p.color],exists=(x,y)=>p.cells.some(c=>c[0]===x&&c[1]===y);for(const[cx,cy]of p.cells){const x=LEFT+(q.col+cx)*CELL,y=TOP+(q.row+cy)*CELL;rr(ctx,x+2,y+4,CELL-4,CELL-4,7,'#24332d18');rr(ctx,x+2,y+2,CELL-4,CELL-4,7,palette.fill);ctx.fillStyle=palette.fill;if(exists(cx+1,cy))ctx.fillRect(x+CELL-8,y+2,16,CELL-4);if(exists(cx,cy+1))ctx.fillRect(x+2,y+CELL-8,CELL-4,16);}
  const[fX,fY]=p.cells[0],x=LEFT+(q.col+fX+.5)*CELL,y=TOP+(q.row+fY+.5)*CELL;symbol(ctx,p.color,x,y-11);arrow(ctx,x,y+12,p.d,palette.ink);ctx.restore();}
 function render(ctx){
  ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='700 21px sans-serif';ctx.fillText(TITLE,22,29);ctx.textAlign='right';ctx.fillStyle='#607d6d';ctx.font='600 14px sans-serif';ctx.fillText(`${moves} / ${all.length/2} 对`,368,30);ctx.textAlign='left';ctx.fillStyle='#536a5d';ctx.font='600 14px sans-serif';ctx.fillText('点箭头，把同色拼成正方形',22,61);ctx.fillStyle='#7a877c';ctx.font='12px sans-serif';ctx.fillText(MODE==='fitclear'?'拼成 2×2 就消掉 · 清空所有零件':'拼成 2×2 就归位 · 成品不再移动',22,84);
  rr(ctx,LEFT-7,TOP-7,N*CELL+14,N*CELL+14,18,'#e4e6dc');for(let row=0;row<N;row++)for(let col=0;col<N;col++)rr(ctx,LEFT+col*CELL+2,TOP+row*CELL+2,CELL-4,CELL-4,7,'#f9f7f0');
  for(const b of state.fixed){const x=LEFT+b.col*CELL+2,y=TOP+b.row*CELL+2;rr(ctx,x,y,CELL*2-4,CELL*2-4,10,'#c9d2c7','#aab9aa');ctx.strokeStyle='#718a75';ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x+37,y+51);ctx.lineTo(x+48,y+62);ctx.lineTo(x+69,y+40);ctx.stroke();}
  const order=all.map((_,i)=>i).filter(i=>state.mask&(1<<i)).sort((a,b)=>(a===motion?.id?1:0)-(b===motion?.id?1:0));for(const i of order){let alpha=1;if(motion?.kind==='fit'&&(i===motion.id||i===motion.target)){const t=motion.elapsed/motion.duration;alpha=1-Math.max(0,(t-.8)/.2)*.75;}drawPiece(ctx,all[i],pose(i),alpha);}
  for(const f of flashes){const u=1-f.time/.3;ctx.save();ctx.globalAlpha=1-u;const x=LEFT+f.col*CELL+2,y=TOP+f.row*CELL+2;rr(ctx,x-u*3,y-u*3,CELL*2-4+u*6,CELL*2-4+u*6,11,MODE==='fitclear'?COLORS[f.color].fill:null,COLORS[f.color].fill);ctx.restore();}
  ctx.textAlign='center';ctx.fillStyle='#7c897d';ctx.font='12px sans-serif';ctx.fillText(MODE==='fitclear'?'拼掉一对，为另一对让路':'点哪一片，决定成品留在哪里',195,459);
  rr(ctx,18,486,354,58,13,status==='failed'?'#f1ddd5':status==='won'?'#dce8db':'#e8eadf');ctx.fillStyle=status==='failed'?'#a34d3d':INK;ctx.font='600 13px sans-serif';const text=Array.from(feedback);if(text.length>25){ctx.fillText(text.slice(0,25).join(''),195,507);ctx.fillText(text.slice(25).join(''),195,528);}else ctx.fillText(feedback,195,515);ctx.restore();
 }
 return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;history=[];flashes=[];}};
}
window.MixGames=window.MixGames||{};window.MixGames[MODE]={title:TITLE,shortTitle:TITLE,operation:'点箭头，同色拼成正方形，两片一起消掉。',combination:'格形互补 × 定向移动 × 成对消除',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
