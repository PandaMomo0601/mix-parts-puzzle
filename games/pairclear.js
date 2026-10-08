(function(){
'use strict';
const PAPER='#f4f1e9',INK='#24332d',CELL=62,LEFT=40,TOP=117,BLOCK=58;
const DIRS=[[1,0],[0,1],[-1,0],[0,-1]],NAMES=['right','down','left','up'];
const COLORS=[{id:'coral',fill:'#d87561',ink:'#fff7ec',symbol:'triangle'},{id:'mint',fill:'#79ab97',ink:'#fff7ec',symbol:'circle'},{id:'violet',fill:'#8f89d0',ink:'#fff7ec',symbol:'diamond'},{id:'gold',fill:'#c59b52',ink:'#fff7ec',symbol:'square'}];
const SEARCH_STATE_LIMIT=8192,SEARCH_MS_LIMIT=12;
const part=(id,col,row,color,d)=>({id,col,row,color,d});
const LEVELS = [
{name:'01 · 先碰中间这一对',hint:'点中间向上的绿块，先给红块让路。',pieces:[part(0,0,2,0,0),part(1,4,2,0,2),part(2,2,2,1,3),part(3,2,0,1,1)]},
{name:'02 · 一对让开两条路',hint:'先消中间的绿块，两边的路都会打开。',pieces:[part(0,4,3,0,3),part(1,4,0,0,3),part(2,0,0,0,1),part(3,0,4,0,3),part(4,4,2,1,2),part(5,0,2,1,3)]},
{name:'03 · 同色也要选对',hint:'看清第一个会碰到谁，再点。',pieces:[part(0,3,4,0,2),part(1,2,4,0,1),part(2,0,1,0,0),part(3,3,1,0,1),part(4,1,0,1,1),part(5,1,4,1,3),part(6,1,1,2,1),part(7,1,3,2,3)]},
{name:'04 · 配对以后留条路',hint:'同色有四块，消掉哪一对会影响后面。',pieces:[part(0,4,4,0,2),part(1,3,4,0,2),part(2,3,0,1,1),part(3,3,3,1,2),part(4,3,1,2,2),part(5,0,1,2,1),part(6,2,0,0,1),part(7,2,4,0,2),part(8,2,1,1,2),part(9,1,1,1,3),part(10,0,2,2,1),part(11,0,4,2,1)]},
{name:'05 · 让整盘接起来',hint:'一次消一对，留意刚刚露出来的路线。',pieces:[part(0,0,1,0,0),part(1,4,1,0,1),part(2,3,0,1,1),part(3,3,3,1,2),part(4,0,4,2,0),part(5,3,4,2,0),part(6,0,2,3,0),part(7,3,2,3,2),part(8,1,1,0,1),part(9,1,4,0,1),part(10,2,2,1,3),part(11,2,1,1,0),part(12,4,4,2,3),part(13,4,3,2,3),part(14,1,3,3,3),part(15,1,2,3,2)]}
];
const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
function create(env){
 const level=Math.min(LEVELS.length-1,Math.max(0,Math.floor(env.level||0))),cfg=LEVELS[level],all=cfg.pieces.map(p=>({...p}));let mask=(1<<all.length)-1,status='playing',motion=null,history=[],moves=0,feedback=cfg.hint,alive=true,flashes=[],searchRuns=0;
 const point=p=>({x:LEFT+(p.col+.5)*CELL,y:TOP+(p.row+.5)*CELL});
 const rays=all.map((a,i)=>{const[dx,dy]=DIRS[a.d];return all.map((p,j)=>({j,distance:(p.col-a.col)*dx+(p.row-a.row)*dy,cross:(p.col-a.col)*dy-(p.row-a.row)*dx})).filter(q=>q.j!==i&&q.distance>0&&q.cross===0).sort((a,b)=>a.distance-b.distance).map(q=>q.j);});
 const first=(state,i)=>rays[i].find(j=>(state&(1<<j))!==0);
 const action=(state,i)=>{if(!(state&(1<<i)))return null;const j=first(state,i);return j!==undefined&&all[j].color===all[i].color?{id:i,target:j,next:state&~(1<<i)&~(1<<j)}:null;};
 const memo=new Map([[0,true]]);
 function inspect(state){
  const started=now();let visited=0,memoHits=0;
  function search(s){if(memo.has(s)){memoHits++;return memo.get(s);}if(visited>=SEARCH_STATE_LIMIT||now()-started>=SEARCH_MS_LIMIT)return null;visited++;let uncertain=false;
   for(let i=0;i<all.length;i++){const a=action(s,i);if(!a)continue;const result=search(a.next);if(result===true){memo.set(s,true);return true;}if(result===null)uncertain=true;}
   if(uncertain)return null;memo.set(s,false);return false;
  }
  const result=search(state);searchRuns++;return{result:result===true?'reachable':result===false?'unreachable':'unknown',visited,memoHits,elapsedMs:+(now()-started).toFixed(3),stateLimit:SEARCH_STATE_LIMIT,timeLimitMs:SEARCH_MS_LIMIT};
 }
 let search=inspect(mask);
 const sound=(kind,v=.5,p=1)=>env.sound?.(kind,v,p);
 function input(type,p){
  if(!alive||type!=='down'||status!=='playing'||motion||!p)return false;const i=all.findIndex((q,j)=>{if(!(mask&(1<<j)))return false;const c=point(q);return Math.abs(c.x-p.x)<=29&&Math.abs(c.y-p.y)<=29;});if(i<0)return false;
  const a=action(mask,i),from=point(all[i]);if(a){history.push({mask,moves,search:{...search}});motion={id:i,target:a.target,kind:'clear',from,to:point(all[a.target]),next:a.next,elapsed:0,duration:.22+Math.hypot(point(all[a.target]).x-from.x,point(all[a.target]).y-from.y)/600};feedback='同色碰到一起，两块一起消掉。';sound('whoosh',.4,1);return true;}
  const j=first(mask,i),[dx,dy]=DIRS[all[i].d];let to;
  if(j!==undefined){const target=point(all[j]);to={x:target.x-dx*BLOCK,y:target.y-dy*BLOCK};feedback='第一个是别的颜色，先给这条路让开。';}
  else{to={x:dx<0?LEFT+29:dx>0?LEFT+5*CELL-29:from.x,y:dy<0?TOP+29:dy>0?TOP+5*CELL-29:from.y};feedback='这个方向暂时没有同色伙伴。';}
  motion={id:i,target:j??null,kind:'bounce',from,to,elapsed:0,duration:.3+Math.hypot(to.x-from.x,to.y-from.y)/700};sound('hit',.25,.8);return false;
 }
 function update(dt){if(!alive)return;dt=Math.max(0,Math.min(.08,Number(dt)||0));flashes=flashes.filter(p=>p.time>0);for(const p of flashes)p.time-=dt;if(!motion)return;motion.elapsed+=dt;if(motion.elapsed<motion.duration)return;const done=motion;motion=null;if(done.kind==='bounce')return;
  mask=done.next;moves++;flashes=[{...done.to,color:all[done.id].color,time:.26}];sound('collect',.65,1.05);feedback='消掉一对，看看新露出的路线。';
  if(mask===0){status='won';feedback='全部成对，清空了！';sound('win',.8,1);env.onComplete?.({message:feedback,moves,pairs:all.length/2});return;}
  search=inspect(mask);if(search.result==='unreachable'){status='failed';feedback='剩下的路线走不通了，悔棋调整配对。';sound('fail',.5,.85);env.onFail?.({reason:feedback,moves,proof:'complete-pair-reachability'});}
 }
 function canUndo(){return alive&&!motion&&status!=='won'&&history.length>0;}
 function undo(){if(!canUndo())return false;const old=history.pop();mask=old.mask;moves=old.moves;search=old.search;status='playing';flashes=[];feedback='这一对回来了，换个搭配试试。';sound('tap',.3,.8);return true;}
 function pose(i){const p=point(all[i]);if(motion?.id!==i)return p;const t=Math.min(1,motion.elapsed/motion.duration),travel=motion.kind==='bounce'?Math.sin(t*Math.PI):(t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2);return{x:p.x+(motion.to.x-p.x)*travel,y:p.y+(motion.to.y-p.y)*travel};}
 function getState(){return{game:'pairclear',level,status,moving:!!motion,moves,pairs:moves,totalPairs:all.length/2,remaining:all.filter((p,i)=>mask&(1<<i)).length,undoDepth:history.length,canUndo:canUndo(),feedback,search:{...search},searchRuns,animation:motion?JSON.parse(JSON.stringify(motion)):null,
  pieces:all.flatMap((p,i)=>(mask&(1<<i))?[{id:p.id,...pose(i),col:p.col,row:p.row,w:58,h:58,color:COLORS[p.color].id,colorIndex:p.color,symbol:COLORS[p.color].symbol,direction:NAMES[p.d],directionIndex:p.d,canMove:!!action(mask,i)}]:[])};}
 function rr(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.1;ctx.stroke();}}
 function symbol(ctx,color,x,y){ctx.beginPath();if(color===1)ctx.arc(x,y,8,0,Math.PI*2);else if(color===0){ctx.moveTo(x,y-10);ctx.lineTo(x+10,y+8);ctx.lineTo(x-10,y+8);ctx.closePath();}else if(color===2){ctx.moveTo(x,y-10);ctx.lineTo(x+10,y);ctx.lineTo(x,y+10);ctx.lineTo(x-10,y);ctx.closePath();}else ctx.rect(x-8,y-8,16,16);ctx.fillStyle=COLORS[color].ink;ctx.fill();}
 function arrow(ctx,x,y,d,color){const[dx,dy]=DIRS[d],len=16;ctx.strokeStyle=color;ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x-dx*len/2,y-dy*len/2);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.moveTo(x+dx*len/2-dx*5+dy*4,y+dy*len/2-dy*5-dx*4);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.lineTo(x+dx*len/2-dx*5-dy*4,y+dy*len/2-dy*5+dx*4);ctx.stroke();}
 function render(ctx){
  ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='700 21px sans-serif';ctx.fillText('碰个对儿',22,29);ctx.textAlign='right';ctx.fillStyle='#607d6d';ctx.font='600 14px sans-serif';ctx.fillText(`${moves} / ${all.length/2} 对`,368,30);ctx.fillStyle='#536a5d';ctx.textAlign='left';ctx.font='600 14px sans-serif';ctx.fillText('点箭头，碰到同色就一起消掉',22,61);ctx.fillStyle='#7a877c';ctx.font='12px sans-serif';ctx.fillText('清空彩块 · 不同色和空路都会回弹',22,84);
  rr(ctx,LEFT-7,TOP-7,5*CELL+14,5*CELL+14,20,'#e4e6dc');for(let y=0;y<5;y++)for(let x=0;x<5;x++)rr(ctx,LEFT+x*CELL+2,TOP+y*CELL+2,58,58,12,'#f9f7f0');
  const order=all.map((p,i)=>i).filter(i=>mask&(1<<i)).sort((a,b)=>(a===motion?.id?1:0)-(b===motion?.id?1:0));
  for(const i of order){const p=all[i],c=pose(i),palette=COLORS[p.color];let alpha=1;if(motion?.kind==='clear'&&(motion.id===i||motion.target===i)){const t=motion.elapsed/motion.duration;alpha=1-Math.max(0,(t-.73)/.27);}ctx.save();ctx.globalAlpha=alpha;rr(ctx,c.x-29,c.y-27,58,58,12,'#24332d14');rr(ctx,c.x-29,c.y-29,58,58,12,palette.fill,'#24332d25');symbol(ctx,p.color,c.x,c.y-10);arrow(ctx,c.x,c.y+16,p.d,palette.ink);ctx.restore();}
  for(const f of flashes){const u=1-f.time/.26;ctx.save();ctx.globalAlpha=Math.max(0,1-u);ctx.strokeStyle=COLORS[f.color].fill;ctx.lineWidth=3;rr(ctx,f.x-29-u*8,f.y-29-u*8,58+u*16,58+u*16,13,null,COLORS[f.color].fill);ctx.restore();}
  ctx.textAlign='center';ctx.fillStyle='#7c897d';ctx.font='12px sans-serif';ctx.fillText('只看沿箭头遇到的第一个彩块',195,455);
  rr(ctx,18,486,354,58,13,status==='failed'?'#f1ddd5':status==='won'?'#dce8db':'#e8eadf');ctx.fillStyle=status==='failed'?'#a34d3d':INK;ctx.font='600 13px sans-serif';const text=Array.from(feedback);if(text.length>25){ctx.fillText(text.slice(0,25).join(''),195,507);ctx.fillText(text.slice(25).join(''),195,528);}else ctx.fillText(feedback,195,515);ctx.restore();
 }
 return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;flashes=[];history=[];}};
}
window.MixGames=window.MixGames||{};window.MixGames.pairclear={title:'碰个对儿',shortTitle:'碰个对儿',operation:'点箭头，碰到同色，两块一起消掉。',combination:'定向移动 × 同色成对消除',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
