(function(){
'use strict';
const PAPER='#f4f1e9',INK='#24332d',SIDE=5,CELL=62,LEFT=40,TOP=117,BLOCK=58;
const COLORS=[{name:'coral',fill:'#d87561',ink:'#743d33',light:'#f1ded6',label:'三角'},{name:'mint',fill:'#79ab97',ink:'#345d49',light:'#deebe2',label:'圆形'},{name:'violet',fill:'#8f89d0',ink:'#4b456f',light:'#e6e3f2',label:'菱形'}];
const DIRS=[[1,0],[0,1],[-1,0],[0,-1]],NAMES=['right','down','left','up'];
const LEVELS=[{"name":"一撞就清空","hint":"点任意一个彩块，把这一片清掉。","pieces":[{"c":1,"r":1,"color":0,"d":0},{"c":2,"r":1,"color":0,"d":1},{"c":1,"r":2,"color":0,"d":3},{"c":2,"r":2,"color":0,"d":2}]},{"name":"让它们连成一片","hint":"先清一片，别的颜色就能通过。","pieces":[{"c":2,"r":1,"color":0,"d":1},{"c":2,"r":2,"color":0,"d":0},{"c":4,"r":2,"color":0,"d":1},{"c":2,"r":3,"color":0,"d":0},{"c":4,"r":3,"color":0,"d":0},{"c":0,"r":4,"color":1,"d":0},{"c":2,"r":4,"color":0,"d":3},{"c":4,"r":4,"color":1,"d":1}]},{"name":"空出来的路","hint":"留出路线，再清另一片。","pieces":[{"c":0,"r":0,"color":0,"d":1},{"c":1,"r":0,"color":0,"d":1},{"c":2,"r":0,"color":0,"d":1},{"c":0,"r":1,"color":1,"d":0},{"c":1,"r":1,"color":0,"d":3},{"c":4,"r":1,"color":1,"d":0},{"c":1,"r":2,"color":1,"d":1},{"c":2,"r":2,"color":1,"d":2},{"c":1,"r":3,"color":1,"d":0},{"c":2,"r":3,"color":1,"d":2},{"c":0,"r":4,"color":0,"d":3},{"c":2,"r":4,"color":0,"d":2}]},{"name":"留住最后的搭档","hint":"别把同色的最后一块留孤单。","pieces":[{"c":0,"r":0,"color":2,"d":0},{"c":1,"r":0,"color":2,"d":1},{"c":3,"r":0,"color":2,"d":2},{"c":0,"r":1,"color":2,"d":1},{"c":1,"r":1,"color":1,"d":1},{"c":4,"r":1,"color":0,"d":1},{"c":1,"r":2,"color":0,"d":0},{"c":3,"r":2,"color":1,"d":1},{"c":4,"r":2,"color":0,"d":3},{"c":0,"r":3,"color":2,"d":1},{"c":1,"r":3,"color":1,"d":3},{"c":4,"r":3,"color":2,"d":2},{"c":0,"r":4,"color":2,"d":0},{"c":1,"r":4,"color":2,"d":3},{"c":3,"r":4,"color":1,"d":3}]},{"name":"整张盘一起松开","hint":"先看连成一片的块，再决定从哪边撞。","pieces":[{"c":0,"r":0,"color":2,"d":1},{"c":1,"r":0,"color":1,"d":1},{"c":4,"r":0,"color":2,"d":2},{"c":0,"r":1,"color":0,"d":1},{"c":1,"r":1,"color":1,"d":3},{"c":2,"r":1,"color":1,"d":2},{"c":4,"r":1,"color":2,"d":1},{"c":0,"r":2,"color":1,"d":0},{"c":1,"r":2,"color":2,"d":2},{"c":2,"r":2,"color":2,"d":1},{"c":3,"r":2,"color":2,"d":1},{"c":4,"r":2,"color":1,"d":2},{"c":0,"r":3,"color":0,"d":3},{"c":2,"r":3,"color":2,"d":0},{"c":0,"r":4,"color":2,"d":0},{"c":1,"r":4,"color":2,"d":2},{"c":2,"r":4,"color":2,"d":2},{"c":4,"r":4,"color":2,"d":3}]}];
const bit=(i)=>1<<i;
function makeRules(board){
 const at=new Map(board.map((p,i)=>[p.c+','+p.r,i]));
 const adjacent=board.map(p=>DIRS.map(([dx,dy])=>at.get((p.c+dx)+','+(p.r+dy))).filter(i=>i!==undefined));
 const rays=board.map(p=>{const [dx,dy]=DIRS[p.d];const out=[];for(let k=1;k<SIDE;k++){const i=at.get((p.c+dx*k)+','+(p.r+dy*k));if(i!==undefined)out.push(i);}return out;});
 const actionsMemo=new Map(),proofMemo=new Map([[0,true]]);let visited=0;
 function target(mask,i){return rays[i].find(j=>mask&bit(j));}
 function action(mask,i){
  if(!(mask&bit(i)))return null;const t=target(mask,i);if(t===undefined||board[t].color!==board[i].color)return null;
  // Departure is already vacant while the clicked block moves. Flood only the
  // stationary target's orthogonal neighbors; never travel through the mover.
  let group=bit(t);const queue=[t];
  for(let k=0;k<queue.length;k++)for(const j of adjacent[queue[k]])if(j!==i&&(mask&bit(j))&&!(group&bit(j))&&board[j].color===board[i].color){group|=bit(j);queue.push(j);}
  const removed=group|bit(i);return {id:i,target:t,group,removed,next:mask&~removed,count:queue.length+1};
 }
 function actions(mask){if(!actionsMemo.has(mask))actionsMemo.set(mask,board.flatMap((p,i)=>{const a=action(mask,i);return a?[a]:[];}));return actionsMemo.get(mask);}
 function solve(mask){if(proofMemo.has(mask))return proofMemo.get(mask);visited++;const result=actions(mask).some(a=>solve(a.next));proofMemo.set(mask,result);return result;}
 return{target,action,actions,solve,stats:()=>({evaluatedStates:visited,cachedStates:proofMemo.size})};
}
function create(env){
 const level=Math.min(LEVELS.length-1,Math.max(0,Math.floor(Number(env.level)||0))),cfg=LEVELS[level];
 const board=cfg.pieces.map((p,i)=>({...p,id:'b'+i})),rules=makeRules(board),initialMask=(1<<board.length)-1;
 let mask=initialMask,moves=0,status='playing',motion=null,history=[],effects=[],alive=true,feedback=cfg.hint,highlight=null,notice=0;
 let proof={result:rules.solve(mask)?'reachable':'unreachable',reason:'exact-elimination-search',...rules.stats()};
 const center=p=>({x:LEFT+(p.c+.5)*CELL,y:TOP+(p.r+.5)*CELL});
 const sound=(type,v=.5,pitch=1)=>env.sound?.(type,v,pitch);
 function snapshot(){return {mask,moves,proof:{...proof}};}
 function complete(){
  if(!mask){status='won';feedback='一块不剩，清空了！';sound('win',.75,1.12);env.onComplete?.({message:feedback,moves,remaining:0});return;}
  proof={result:rules.solve(mask)?'reachable':'unreachable',reason:'exact-elimination-search',...rules.stats()};
  if(proof.result==='unreachable'){status='failed';feedback='余下的块已经无法清空，悔棋换个顺序。';sound('fail',.45,.8);env.onFail?.({reason:feedback,moves,proof:proof.reason});}
 }
 function input(type,p){
  if(!alive||type!=='down'||status!=='playing'||motion||!p)return false;
  const i=board.findIndex((b,i)=>{if(!(mask&bit(i)))return false;const q=center(b);return Math.abs(p.x-q.x)<=BLOCK/2&&Math.abs(p.y-q.y)<=BLOCK/2;});if(i<0)return false;
  const a=rules.action(mask,i);
  if(!a){const t=rules.target(mask,i);feedback=t===undefined?'前面没有块，换一个方向。':'前面颜色不同，先让它走。';highlight=t===undefined?i:t;notice=1.3;motion={kind:'bump',id:i,age:0,duration:.18};sound('hit',.24,.86);return false;}
  history.push(snapshot());highlight=null;notice=0;const from=center(board[i]),hit=center(board[a.target]),[dx,dy]=DIRS[board[i].d];
  const to={x:hit.x-dx*BLOCK,y:hit.y-dy*BLOCK};
  motion={kind:'travel',id:i,action:a,from,to,age:0,duration:.2+Math.hypot(to.x-from.x,to.y-from.y)/600};
  feedback='撞同色，把连在一起的一片清掉。';sound('whoosh',.32,1.03);return true;
 }
 function update(dt){
  if(!alive)return;const delta=Math.min(.08,Math.max(0,Number(dt)||0));notice=Math.max(0,notice-delta);effects.forEach(e=>e.age+=delta);effects=effects.filter(e=>e.age<.42);
  if(!motion)return;motion.age+=delta;if(motion.age<motion.duration)return;
  if(motion.kind==='bump'){motion=null;return;}
  if(motion.kind==='travel'){
   const a=motion.action;for(let i=0;i<board.length;i++)if(a.removed&bit(i)){const p=board[i],c=i===a.id?motion.to:center(p);effects.push({...c,color:p.color,age:0,index:i});}
   mask=a.next;moves++;feedback='一口气清掉 '+a.count+' 块。';sound('collect',.65,.95+Math.min(a.count,8)*.08);
   motion={kind:'burst',id:a.id,action:a,age:0,duration:.18};return;
  }
  motion=null;complete();
 }
 function pose(i){const p=board[i],c=center(p);if(!motion||motion.id!==i)return c;const t=Math.min(1,motion.age/motion.duration);if(motion.kind==='bump'){const[dx,dy]=DIRS[p.d];return{x:c.x+dx*Math.sin(t*Math.PI)*2,y:c.y+dy*Math.sin(t*Math.PI)*2};}if(motion.kind==='travel'){const e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;return{x:motion.from.x+(motion.to.x-motion.from.x)*e,y:motion.from.y+(motion.to.y-motion.from.y)*e};}return c;}
 function canUndo(){return alive&&!motion&&status!=='won'&&history.length>0;}
 function undo(){if(!canUndo())return false;const old=history.pop();mask=old.mask;moves=old.moves;proof=old.proof;status='playing';effects=[];highlight=null;notice=0;feedback='已撤回，整片彩块都回来了。';sound('tap',.3,.9);return true;}
 function rect(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.3;ctx.stroke();}}
 function symbol(ctx,color,x,y,size){ctx.fillStyle=COLORS[color].ink;ctx.beginPath();if(color===0){ctx.moveTo(x,y-size);ctx.lineTo(x+size*.9,y+size*.7);ctx.lineTo(x-size*.9,y+size*.7);ctx.closePath();}else if(color===1){ctx.arc(x,y,size*.8,0,Math.PI*2);}else{ctx.moveTo(x,y-size);ctx.lineTo(x+size,y);ctx.lineTo(x,y+size);ctx.lineTo(x-size,y);ctx.closePath();}ctx.fill();}
 function arrow(ctx,x,y,d,color){const[dx,dy]=DIRS[d],length=23;ctx.save();ctx.strokeStyle=color;ctx.lineWidth=3.2;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x-dx*length/2,y-dy*length/2);ctx.lineTo(x+dx*length/2,y+dy*length/2);ctx.moveTo(x+dx*length/2-dx*7+dy*6,y+dy*length/2-dy*7-dx*6);ctx.lineTo(x+dx*length/2,y+dy*length/2);ctx.lineTo(x+dx*length/2-dx*7-dy*6,y+dy*length/2-dy*7+dx*6);ctx.stroke();ctx.restore();}
 function render(ctx){
  ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.textAlign='left';ctx.textBaseline='middle';ctx.font='800 25px system-ui,sans-serif';ctx.fillText('撞同色，消一片',22,30);ctx.fillStyle='#698170';ctx.textAlign='right';ctx.font='600 13px system-ui,sans-serif';ctx.fillText(moves+' 步',368,30);ctx.textAlign='left';ctx.fillStyle='#5d7061';ctx.font='14px system-ui,sans-serif';ctx.fillText('点箭头，去撞前面的第一个块。',22,65);ctx.fillStyle='#7a877c';ctx.font='12px system-ui,sans-serif';ctx.fillText('上下左右连在一起，才算同一片。',22,88);
  rect(ctx,LEFT-7,TOP-7,SIDE*CELL+14,SIDE*CELL+14,18,'#e5e7dd');
  for(let row=0;row<SIDE;row++)for(let col=0;col<SIDE;col++){ctx.fillStyle='#d1d8c9';ctx.beginPath();ctx.arc(LEFT+(col+.5)*CELL,TOP+(row+.5)*CELL,1.6,0,Math.PI*2);ctx.fill();}
  const order=board.map((p,i)=>i).filter(i=>mask&bit(i)).sort((a,b)=>(a===motion?.id?1:0)-(b===motion?.id?1:0));
  for(const i of order){const p=board[i],c=pose(i),color=COLORS[p.color];rect(ctx,c.x-29,c.y-26,58,58,11,'#24332d13');rect(ctx,c.x-29,c.y-29,58,58,11,color.fill,color.ink);ctx.save();ctx.strokeStyle='#ffffff55';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(c.x-20,c.y-24);ctx.lineTo(c.x+20,c.y-24);ctx.stroke();ctx.restore();symbol(ctx,p.color,c.x-16,c.y-16,5);arrow(ctx,c.x+3,c.y+5,p.d,color.ink);if(highlight===i&&notice>0)rect(ctx,c.x-32,c.y-32,64,64,13,null,'#b95445');}
  for(const e of effects){const t=e.age/.42,color=COLORS[e.color];ctx.save();ctx.globalAlpha=1-t;rect(ctx,e.x-28-t*5,e.y-28-t*5,56+t*10,56+t*10,13,null,color.fill);for(let j=0;j<7;j++){const a=j*2.399+e.index*.3;ctx.beginPath();ctx.arc(e.x+Math.cos(a)*(10+t*31),e.y+Math.sin(a)*(10+t*31),3.2*(1-t),0,Math.PI*2);ctx.fillStyle=color.fill;ctx.fill();}ctx.restore();}
  ctx.textAlign='center';ctx.font='12px system-ui,sans-serif';ctx.fillStyle='#7b887b';ctx.fillText('异色或空路会弹回，不消耗步数',195,454);
  rect(ctx,18,482,354,62,13,status==='failed'?'#f1ded6':status==='won'?'#dce9dd':'#e8eadf');ctx.fillStyle=status==='failed'?'#a94e3e':INK;ctx.font='600 13px system-ui,sans-serif';const chars=Array.from(feedback);if(chars.length>25){ctx.fillText(chars.slice(0,25).join(''),195,505);ctx.fillText(chars.slice(25).join(''),195,527);}else ctx.fillText(feedback,195,513);ctx.restore();
 }
 function getState(){return{game:'burstclear',level,status,moving:!!motion,moves,remaining:board.reduce((n,p,i)=>n+!!(mask&bit(i)),0),total:board.length,canUndo:canUndo(),undoDepth:history.length,feedback,mask,proof:{...proof},animation:motion?JSON.parse(JSON.stringify(motion)):null,pieces:board.flatMap((p,i)=>mask&bit(i)?[{id:p.id,...pose(i),col:p.c,row:p.r,w:BLOCK,h:BLOCK,color:COLORS[p.color].name,colorIndex:p.color,symbol:COLORS[p.color].label,direction:NAMES[p.d],directionIndex:p.d,canMove:!!rules.action(mask,i)}]:[])};}
 return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;history=[];effects=[];}};
}
window.MixGames||={};window.MixGames.burstclear={title:'撞开一大片',shortTitle:'撞开一大片',operation:'点箭头撞同色，清掉它连着的一片。',combination:'定向点击 × 四向同色团消除',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
