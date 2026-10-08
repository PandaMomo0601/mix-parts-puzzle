(function(){
'use strict';
const INK='#24332d',PAPER='#f4f1e9',CORAL='#d87561',MINT='#79ab97',RED='#bd5547';
const SIZES={1:40,2:58,4:80},DIR={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]};
const BOUNDS={left:14,right:376,top:80,bottom:490};
const p=(id,x,y,direction,value=1)=>({id,x,y,direction,value,installed:false,target:null});
const h=(id,x,y,value)=>({id,x,y,value,filled:false,pieceId:null});
const LEVELS=[
{name:'01 · 先合大，再装好',hint:'先点左边的 1，合成 2；再点大件，补上大缺口。',pieces:[p('A',65,235,'right'),p('B',195,235,'right'),p('C',190,385,'up')],holes:[h('H1',315,235,2),h('H2',190,120,1)]},
{name:'02 · 把交叉口让出来',hint:'先让横着的大件通过，再把竖着的大件送上去。',pieces:[p('A',65,205,'right'),p('B',200,205,'right'),p('C',210,410,'up'),p('D',210,320,'up')],holes:[h('H1',320,205,2),h('H2',210,115,2)]},
{name:'03 · 再大一号',hint:'两个 2 还能合成 4；大件也保留你点击的箭头。',pieces:[p('A',65,235,'right'),p('B',170,235,'right'),p('C',170,425,'up'),p('D',170,335,'right'),p('E',305,355,'up'),p('F',75,390,'right')],holes:[h('H1',170,120,4),h('H2',305,115,1),h('H3',305,390,1)]},
{name:'04 · 别先封住路口',hint:'装好就固定。让还没过去的大件先走。',pieces:[p('A',60,230,'right'),p('B',210,230,'right'),p('C',120,420,'up'),p('D',120,330,'left'),p('E',300,420,'up'),p('F',300,330,'right'),p('G',300,145,'right'),p('H',120,225,'up')],holes:[h('H1',315,230,2),h('H2',120,230,2),h('H3',300,145,2),h('H4',350,145,1),h('H5',120,115,1)]},
{name:'05 · 留给最大的那一块',hint:'先让最大的零件通过，再补它身后的缺口。',pieces:[p('A',60,260,'right'),p('B',180,260,'up'),p('C',180,430,'up'),p('D',180,350,'left'),p('E',305,350,'up'),p('F',305,260,'right'),p('G',55,195,'right'),p('H',105,195,'up'),p('I',305,195,'right')],holes:[h('H1',180,125,4),h('H2',180,195,2),h('H3',305,125,2),h('H4',355,195,1)]}
];
const clone=x=>JSON.parse(JSON.stringify(x));
const rect=(p,size=SIZES[p.value])=>({x:p.x-size/2,y:p.y-size/2,w:size,h:size});
const overlap=(a,b)=>a.x<b.x+b.w-.001&&a.x+a.w>b.x+.001&&a.y<b.y+b.h-.001&&a.y+a.h>b.y+.001;
const fits=r=>r.x>=BOUNDS.left-.001&&r.x+r.w<=BOUNDS.right+.001&&r.y>=BOUNDS.top-.001&&r.y+r.h<=BOUNDS.bottom+.001;
function create(env){
 const index=Math.min(4,Math.max(0,Math.floor(env.level||0))),cfg=LEVELS[index];
 let pieces=clone(cfg.pieces),holes=clone(cfg.holes),status='playing',motion=null,history=[],moves=0,merges=0,feedback=cfg.hint,alive=true,highlight=null,pulse=0;
 const sound=(type,volume=.5,pitch=1)=>env.sound?.(type,volume,pitch);
 function plan(piece){
  if(piece.installed)return {legal:false,reason:'装好的零件已经固定。'};
  const [dx,dy]=DIR[piece.direction],size=SIZES[piece.value],events=[];
  const ahead=q=>{const along=(q.x-piece.x)*dx+(q.y-piece.y)*dy,cross=(q.x-piece.x)*dy-(q.y-piece.y)*dx;return Math.abs(cross)<.001&&along>.001?along:null;};
  for(const q of pieces){const dist=ahead(q);if(q.id!==piece.id&&!q.installed&&q.value===piece.value&&SIZES[q.value*2]&&dist!==null)events.push({kind:'merge',distance:dist,targetId:q.id,x:q.x,y:q.y,value:piece.value*2});}
  for(const hole of holes){const dist=ahead(hole);if(!hole.filled&&hole.value===piece.value&&dist!==null)events.push({kind:'install',distance:dist,targetId:hole.id,x:hole.x,y:hole.y,value:piece.value});}
  events.sort((a,b)=>a.distance-b.distance);
  if(!events.length)return {legal:false,reason:'先合成同尺寸零件，再送进对应缺口。'};
  const event=events[0],from=rect(piece),to=rect({...piece,x:event.x,y:event.y});
  const swept={x:Math.min(from.x,to.x),y:Math.min(from.y,to.y),w:Math.abs(event.x-piece.x)+size,h:Math.abs(event.y-piece.y)+size};
  const other=pieces.find(q=>q.id!==piece.id&&!(event.kind==='merge'&&q.id===event.targetId)&&overlap(swept,rect(q)));
  if(other)return {legal:false,reason:other.installed?'装好的零件挡住了路，悔棋换个顺序。':'前面有零件挡路，先让它通过。',blocker:other.id};
  const grown=rect({...piece,x:event.x,y:event.y,value:event.value});
  if(!fits(grown))return {legal:false,reason:'这里放不下合成后的大件。'};
  const growthBlock=pieces.find(q=>q.id!==piece.id&&q.id!==event.targetId&&overlap(grown,rect(q)));
  if(growthBlock)return {legal:false,reason:'合成后会挤到旁边的零件，先让出空间。',blocker:growthBlock.id};
  return {...event,legal:true};
 }
 function snapshot(){return {pieces:clone(pieces),holes:clone(holes),moves,merges,feedback};}
 function endAction(){
  const action=motion;motion=null;const mover=pieces.find(q=>q.id===action.id);mover.x=action.to.x;mover.y=action.to.y;
  if(action.to.kind==='merge'){pieces=pieces.filter(q=>q.id!==action.to.targetId);mover.value=action.to.value;merges++;feedback=`合成 ${mover.value} 了！再点大件，沿原箭头继续走。`;sound('collect',.7,1+mover.value*.08);pulse=.3;}
  else{mover.installed=true;mover.target=action.to.targetId;const hole=holes.find(q=>q.id===action.to.targetId);hole.filled=true;hole.pieceId=mover.id;feedback='装好了。绿色零件会留在这里挡路。';sound('collect',.6,1.1);pulse=.25;}
  moves++;
  if(holes.every(q=>q.filled)&&pieces.every(q=>q.installed)){status='won';feedback='大小刚刚好，所有缺口都补上了。';sound('win',.8,1);env.onComplete?.({message:feedback,moves,merges});}
  else if(!pieces.some(q=>!q.installed&&plan(q).legal)){status='failed';feedback='路被封住了，悔棋调整安装顺序。';sound('fail',.6,.9);env.onFail?.({reason:feedback,moves,merges});}
 }
 function input(type,point){
  if(!alive||type!=='down'||status!=='playing'||motion||!point)return false;
  const piece=pieces.filter(q=>!q.installed).find(q=>Math.abs(point.x-q.x)<=Math.max(23,SIZES[q.value]/2)&&Math.abs(point.y-q.y)<=Math.max(23,SIZES[q.value]/2));
  if(!piece)return false;const action=plan(piece);
  if(!action.legal){feedback=action.reason;highlight=action.blocker||piece.id;motion={id:piece.id,bump:true,from:{x:piece.x,y:piece.y,value:piece.value},elapsed:0,duration:.18};sound('hit',.25,.85);return false;}
  history.push(snapshot());highlight=null;motion={id:piece.id,bump:false,from:{x:piece.x,y:piece.y,value:piece.value},to:action,elapsed:0,duration:.24+action.distance/550};feedback=action.kind==='merge'?'碰到一起，合成大一号……':'正在补上缺口……';sound('whoosh',.4,1);return true;
 }
 function update(dt){if(!alive)return;const delta=Math.min(.08,Math.max(0,Number(dt)||0));pulse=Math.max(0,pulse-delta);if(!motion)return;motion.elapsed+=delta;if(motion.elapsed>=motion.duration){if(motion.bump)motion=null;else endAction();}}
 function undo(){if(!canUndo())return false;const last=history.pop();pieces=last.pieces;holes=last.holes;moves=last.moves;merges=last.merges;status='playing';feedback='退回一步。位置、尺寸和箭头都恢复了。';highlight=null;pulse=0;sound('tap',.4,.8);return true;}
 function canUndo(){return alive&&!motion&&status!=='won'&&history.length>0;}
 function pose(piece){
  let x=piece.x,y=piece.y,w=SIZES[piece.value],h=w;
  if(motion?.id===piece.id){const t=Math.min(1,motion.elapsed/motion.duration);if(motion.bump){const [dx,dy]=DIR[piece.direction];x+=Math.sin(t*Math.PI)*3*dx;y+=Math.sin(t*Math.PI)*3*dy;}
   else{const travel=Math.min(1,t/.8),ease=travel<.5?2*travel*travel:1-Math.pow(-2*travel+2,2)/2;x+=(motion.to.x-x)*ease;y+=(motion.to.y-y)*ease;if(motion.to.kind==='merge'&&t>.8)w=h=w+(SIZES[motion.to.value]-w)*((t-.8)/.2);}}
  return{x,y,w,h};
 }
 function getState(){return {game:'partsmerge',level:index,status,moving:!!motion,moves,merges,undoDepth:history.length,canUndo:canUndo(),feedback,bounds:{...BOUNDS},animation:motion?clone(motion):null,
  pieces:pieces.map(q=>({...q,...pose(q),canMove:!q.installed&&plan(q).legal,action:!q.installed?plan(q):null})),holes:holes.map(q=>({...q,w:SIZES[q.value],h:SIZES[q.value]})),remainingPieces:pieces.filter(q=>!q.installed).length,remainingHoles:holes.filter(q=>!q.filled).length};}
 function rr(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.5;ctx.stroke();}}
 function arrow(ctx,x,y,direction,color){const[dx,dy]=DIR[direction],len=14;ctx.strokeStyle=color;ctx.lineWidth=2.8;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(x-dx*len/2,y-dy*len/2);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.moveTo(x+dx*len/2-dx*5+dy*4,y+dy*len/2-dy*5-dx*4);ctx.lineTo(x+dx*len/2,y+dy*len/2);ctx.lineTo(x+dx*len/2-dx*5-dy*4,y+dy*len/2-dy*5+dx*4);ctx.stroke();}
 function render(ctx){
  ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.font='700 18px sans-serif';ctx.textAlign='left';ctx.fillText('先合大，再补缺口',19,28);ctx.fillStyle='#748478';ctx.font='12px sans-serif';ctx.fillText('同尺寸合成 · 装好就固定',19,50);ctx.fillStyle=MINT;ctx.font='700 21px sans-serif';ctx.textAlign='right';ctx.fillText(`${holes.filter(q=>q.filled).length} / ${holes.length}`,371,31);
  ctx.strokeStyle='#d8dfd4';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(19,65);ctx.lineTo(371,65);ctx.stroke();ctx.fillStyle='#dce0d6';for(let y=87;y<490;y+=23)for(let x=24;x<376;x+=23){ctx.beginPath();ctx.arc(x,y,.9,0,Math.PI*2);ctx.fill();}
  for(const hole of holes){if(hole.filled)continue;const size=SIZES[hole.value];ctx.save();ctx.setLineDash([4,4]);rr(ctx,hole.x-size/2,hole.y-size/2,size,size,7,'#e6eee4','#9bbfac');ctx.restore();ctx.fillStyle='#7c9e89';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`700 ${hole.value===4?22:16}px sans-serif`;ctx.fillText(hole.value,hole.x,hole.y);}
  const order=pieces.slice().sort((a,b)=>(a.id===motion?.id?1:0)-(b.id===motion?.id?1:0));
  for(const piece of order){let alpha=1;if(motion&&!motion.bump&&motion.to.kind==='merge'&&piece.id===motion.to.targetId){const t=motion.elapsed/motion.duration;alpha=1-Math.max(0,(t-.65)/.35);}ctx.save();ctx.globalAlpha=alpha;const z=pose(piece),x=z.x-z.w/2,y=z.y-z.h/2;
   rr(ctx,x+1.5,y+3,z.w,z.h,7,'#24332d13');rr(ctx,x,y,z.w,z.h,7,piece.installed?'#a9c8b6':CORAL,piece.installed?'#618b74':highlight===piece.id?RED:'#a65345');ctx.fillStyle=piece.installed?'#355c47':'#fff6eb';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`700 ${piece.value===4?25:piece.value===2?21:17}px sans-serif`;
   if(piece.installed){ctx.fillText(piece.value,z.x,z.y);ctx.strokeStyle='#456d54';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(x+5,y+7);ctx.lineTo(x+8,y+10);ctx.lineTo(x+14,y+4);ctx.stroke();}
   else{const labelOffset=piece.value===4?12:piece.value===2?10:8,arrowOffset=piece.value===4?18:piece.value===2?14:11;ctx.fillText(piece.value,z.x,z.y-labelOffset);arrow(ctx,z.x,z.y+arrowOffset,piece.direction,'#fff6eb');}ctx.restore();
  }
  rr(ctx,18,505,354,38,12,status==='failed'?'#f2d8d0':'#e8e9dc');ctx.fillStyle=status==='failed'?RED:INK;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='600 12px sans-serif';const chars=Array.from(feedback);if(chars.length>26){ctx.fillText(chars.slice(0,26).join(''),195,518);ctx.fillText(chars.slice(26).join(''),195,533);}else ctx.fillText(feedback,195,525);ctx.restore();
 }
 return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;history=[];}};
}
window.MixGames=window.MixGames||{};window.MixGames.partsmerge={title:'拆东补西·合成',shortTitle:'合成大件',operation:'点同尺寸零件合成大件，再点大件补上缺口。',combination:'拆东补西 × 合成',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
