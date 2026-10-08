(() => {
  'use strict';
  const PAPER='#f4f1e9',INK='#24332d',COLORS={red:'#d87561',blue:'#668fbc',green:'#659b84'};
  const VECTORS={right:{x:1,y:0},down:{x:0,y:1},left:{x:-1,y:0},up:{x:0,y:-1}};
  const SIZE={1:40,2:58,4:80},BOARD={left:20,right:370,top:88,bottom:485};
  const block=(id,x,y,color,value,direction)=>({id,x,y,color,value,direction,size:SIZE[value]});
  const hole=(id,x,y,color,value)=>({id,x,y,color,value,size:SIZE[value]});
  const LEVELS=[
    {name:'先合大，再消掉',hint:'点左边的 1，合成 2 后，再点一次进孔。',pieces:[block('A',80,265,'red',1,'right'),block('B',195,265,'red',1,'right')],holes:[hole('R',315,265,'red',2)],solution:['A','A']},
    {name:'消掉，就让路',hint:'先让红块进孔，蓝块的路就通了。',pieces:[block('A',65,220,'red',1,'right'),block('B',200,220,'red',1,'right'),block('C',200,120,'blue',1,'down'),block('D',200,350,'blue',1,'down')],holes:[hole('R',315,220,'red',2),hole('B',200,450,'blue',2)],solution:['A','A','C','C']},
    {name:'再长大一次',hint:'1 加 1 变 2；两个 2 还能合成 4。',pieces:[block('A',50,230,'red',1,'right'),block('B',135,230,'red',1,'right'),block('C',230,230,'red',2,'right'),block('D',230,110,'blue',1,'down'),block('E',230,365,'blue',1,'down')],holes:[hole('R',330,230,'red',4),hole('B',230,450,'blue',2)],solution:['A','A','A','D','D']},
    {name:'箭头跟着谁',hint:'蓝块先让路。合成后，保留你点的箭头。',pieces:[block('A',70,225,'red',1,'right'),block('B',205,225,'red',1,'left'),block('C',145,115,'blue',1,'down'),block('D',145,225,'blue',1,'down')],holes:[hole('R',325,225,'red',2),hole('B',145,450,'blue',2)],solution:['C','C','A','A'],bad:['C','C','B']},
    {name:'一条路，接一条路',hint:'红块合成 4 先走，再给蓝块和绿块让路。',pieces:[block('A',50,210,'red',1,'right'),block('B',130,210,'red',1,'left'),block('C',235,210,'red',2,'right'),block('D',235,110,'blue',1,'down'),block('E',235,340,'blue',1,'down'),block('F',65,340,'green',1,'right'),block('G',145,340,'green',1,'right')],holes:[hole('R',330,210,'red',4),hole('B',235,450,'blue',2),hole('G',325,340,'green',2)],solution:['A','A','A','D','D','F','F'],bad:['B','F']}
  ];
  const clone=x=>JSON.parse(JSON.stringify(x));
  const overlaps=(a,b)=>Math.abs(a.x-b.x)<(a.size+b.size)/2-.01&&Math.abs(a.y-b.y)<(a.size+b.size)/2-.01;
  const inside=p=>p.x-p.size/2>=BOARD.left-.01&&p.x+p.size/2<=BOARD.right+.01&&p.y-p.size/2>=BOARD.top-.01&&p.y+p.size/2<=BOARD.bottom+.01;
  function round(ctx,x,y,w,h,r,fill,stroke,width=1){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();}}
  function symbol(ctx,color,x,y,size,ink){ctx.save();ctx.fillStyle=ink;ctx.beginPath();if(color==='red')ctx.arc(x,y,size/2,0,Math.PI*2);else if(color==='blue')ctx.rect(x-size/2,y-size/2,size,size);else{ctx.moveTo(x,y-size*.6);ctx.lineTo(x+size*.55,y+size*.45);ctx.lineTo(x-size*.55,y+size*.45);ctx.closePath();}ctx.fill();ctx.restore();}
  function arrow(ctx,p,ink){const d=VECTORS[p.direction],len=p.size<50?15:21,c={x:p.x+p.size*.2,y:p.y+1};ctx.strokeStyle=ink;ctx.lineWidth=2.8;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(c.x-d.x*len/2,c.y-d.y*len/2);ctx.lineTo(c.x+d.x*len/2,c.y+d.y*len/2);ctx.moveTo(c.x+d.x*len/2-d.x*5+d.y*5,c.y+d.y*len/2-d.y*5-d.x*5);ctx.lineTo(c.x+d.x*len/2,c.y+d.y*len/2);ctx.lineTo(c.x+d.x*len/2-d.x*5-d.y*5,c.y+d.y*len/2-d.y*5+d.x*5);ctx.stroke();}
  function create(env){
    const level=Math.max(0,Math.min(LEVELS.length-1,Number(env.level)||0)),cfg=LEVELS[level];
    let pieces=clone(cfg.pieces),holes=clone(cfg.holes),steps=[],history=[],status='playing',motion=null,note=cfg.hint,flash=null,time=0,emitted=false,effects=[];
    const sound=(t,v=.5,p=1)=>env.sound?.(t,v,p);
    function plan(p){
      const d=VECTORS[p.direction],along=q=>(q.x-p.x)*d.x+(q.y-p.y)*d.y,across=q=>Math.abs((q.x-p.x)*d.y-(q.y-p.y)*d.x);
      const solids=pieces.filter(q=>q.id!==p.id&&along(q)>0&&across(q)<(p.size+q.size)/2-.01).map(q=>({q,t:along(q)-(p.size+q.size)/2})).sort((a,b)=>a.t-b.t);
      const target=holes.filter(q=>q.color===p.color&&q.value===p.value&&across(q)<.01&&along(q)>0).sort((a,b)=>along(a)-along(b))[0];
      if(target&&(!solids.length||along(target)<solids[0].t+.01))return{kind:'clear',target:{...target},x:target.x,y:target.y};
      const first=solids[0]?.q;
      if(first){
        if(first.color!==p.color)return{kind:'blocked',blocker:first.id,reason:'颜色不同，先让挡路的零件走。'};
        if(first.value!==p.value)return{kind:'blocked',blocker:first.id,reason:'数字要一样，才能合成。'};
        if(across(first)>.01)return{kind:'blocked',blocker:first.id,reason:'没有正对齐，先让挡路的零件走。'};
        const next={...p,x:first.x,y:first.y,value:p.value*2,size:SIZE[p.value*2]};
        if(!next.size)return{kind:'blocked',blocker:first.id,reason:'4 已经够大了，送进同号孔吧。'};
        if(!inside(next))return{kind:'blocked',blocker:first.id,reason:'合大后碰到边界了，换个方向合成。'};
        const other=pieces.find(q=>q.id!==p.id&&q.id!==first.id&&overlaps(next,q));
        if(other)return{kind:'blocked',blocker:other.id,reason:'合大后放不下，先让旁边的零件走。'};
        return{kind:'merge',target:{...first},next,x:first.x,y:first.y};
      }
      const mismatch=holes.find(q=>q.color===p.color&&q.value!==p.value&&across(q)<.01&&along(q)>0);
      return{kind:'blocked',reason:mismatch?'块和孔的数字要一样，先合成再入孔。':'这个方向没有可合的零件或同号孔。'};
    }
    const canUndo=()=>history.length>0&&!motion&&(status==='playing'||status==='failed');
    function undo(){if(!canUndo())return false;const h=history.pop();pieces=clone(h.pieces);holes=clone(h.holes);steps=clone(h.steps);status='playing';emitted=false;motion=null;flash=null;effects=[];note='已退回一步，换个合并顺序。';sound('tap',.35,.8);return true;}
    function finish(){
      if(!pieces.length&&!holes.length){status='won';note='合得上，也放得下。';if(!emitted){emitted=true;sound('win',.8);env.onComplete?.({message:'零件与缺口全部消掉了。',steps:steps.length,cleared:cfg.holes.length});}return;}
      if(!pieces.some(p=>plan(p).kind!=='blocked')){status='failed';note='剩下的零件没有可用路线，悔棋换个顺序。';if(!emitted){emitted=true;sound('fail',.5);env.onFail?.({reason:note,steps:steps.length});}}
    }
    function input(type,point){
      if(type!=='down'||status!=='playing'||motion||!point)return;
      const p=pieces.find(q=>Math.abs(point.x-q.x)<=Math.max(29,q.size/2+3)&&Math.abs(point.y-q.y)<=Math.max(29,q.size/2+3));if(!p)return;
      const action=plan(p);if(action.kind==='blocked'){note=action.reason;flash={id:p.id,blocker:action.blocker,time:.65};sound('hit',.3,.8);return;}
      history.push({pieces:clone(pieces),holes:clone(holes),steps:clone(steps)});flash=null;
      motion={id:p.id,from:{x:p.x,y:p.y},action,elapsed:0,duration:.26+Math.hypot(action.x-p.x,action.y-p.y)/520};
      note=action.kind==='merge'?`${p.value} + ${p.value} → ${p.value*2}`:'进孔后，块和孔一起消失。';sound('whoosh',.35,.9);
    }
    function update(dt){
      if(status==='destroyed')return;dt=Math.max(0,Math.min(.08,Number(dt)||0));time+=dt;
      if(flash){flash.time-=dt;if(flash.time<=0)flash=null;}
      effects=effects.filter(e=>e.life>0);for(const e of effects){e.life-=dt;e.x+=e.vx*dt;e.y+=e.vy*dt;}
      if(!motion)return;motion.elapsed+=dt;if(motion.elapsed<motion.duration)return;
      const p=pieces.find(p=>p.id===motion.id),a=motion.action;steps.push({id:p.id,kind:a.kind,target:a.target.id});
      if(a.kind==='merge'){pieces=pieces.filter(q=>q.id!==a.target.id).map(q=>q.id===p.id?clone(a.next):q);note=`合成 ${a.next.value}，箭头保持不变。`;sound('pop',.6,1.05);}
      else{pieces=pieces.filter(q=>q.id!==p.id);holes=holes.filter(q=>q.id!==a.target.id);note='路空出来了，接着走。';sound('collect',.65,1.15);}
      for(let i=0;i<10;i++){const angle=i*2.4;effects.push({x:a.x,y:a.y,vx:Math.cos(angle)*(25+i*2),vy:Math.sin(angle)*(25+i*2),life:.32,color:COLORS[p.color]});}
      motion=null;finish();
    }
    function getState(){return{game:'partsfusion',level,status,moving:!!motion,won:status==='won',failed:status==='failed',steps:clone(steps),moves:steps.length,remaining:pieces.length,cleared:cfg.holes.length-holes.length,total:cfg.holes.length,undoDepth:history.length,canUndo:canUndo(),note,board:{...BOARD},pieces:pieces.map(p=>({...p,cx:p.x,cy:p.y,center:{x:p.x,y:p.y},w:p.size,h:p.size,canMove:plan(p).kind!=='blocked',next:plan(p).kind,clickable:status==='playing'&&!motion})),holes:clone(holes)};}
    function render(ctx){
      ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.fillStyle=INK;ctx.font='700 17px sans-serif';ctx.fillText('同色同号合大，再进孔消掉',19,28);ctx.fillStyle='#748478';ctx.font='12px sans-serif';ctx.fillText('合并留住所点箭头 · 块与孔一起消失',19,49);ctx.strokeStyle='#d8dfd4';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(19,68);ctx.lineTo(371,68);ctx.stroke();
      ctx.fillStyle='#dce0d6';for(let y=95;y<490;y+=23)for(let x=24;x<376;x+=23){ctx.beginPath();ctx.arc(x,y,.8,0,Math.PI*2);ctx.fill();}
      for(const h of holes){ctx.save();ctx.setLineDash([5,4]);round(ctx,h.x-h.size/2,h.y-h.size/2,h.size,h.size,9,COLORS[h.color]+'12',COLORS[h.color]+'a8',1.8);ctx.setLineDash([]);ctx.fillStyle=COLORS[h.color];ctx.globalAlpha=.72;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`700 ${h.size<60?20:27}px sans-serif`;ctx.fillText(h.value,h.x,h.y);symbol(ctx,h.color,h.x-h.size/2+9,h.y-h.size/2+9,6,COLORS[h.color]);ctx.restore();}
      for(const piece of pieces){let p={...piece},alpha=1;const selected=motion?.id===p.id;
        if(selected){const t=Math.min(1,motion.elapsed/motion.duration),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;p.x=motion.from.x+(motion.action.x-motion.from.x)*e;p.y=motion.from.y+(motion.action.y-motion.from.y)*e;if(motion.action.kind==='clear'&&t>.8)alpha=1-(t-.8)/.2;}
        else if(motion?.action.kind==='merge'&&motion.action.target.id===p.id){const t=motion.elapsed/motion.duration;if(t>.75)alpha=Math.max(0,1-(t-.75)/.25);}
        if(flash?.id===p.id)p.x+=Math.sin(time*65)*Math.min(2.5,flash.time*5);
        ctx.save();ctx.globalAlpha=alpha;round(ctx,p.x-p.size/2+1.5,p.y-p.size/2+3,p.size,p.size,8,'#24332d16');round(ctx,p.x-p.size/2,p.y-p.size/2,p.size,p.size,8,COLORS[p.color],flash&&(flash.id===p.id||flash.blocker===p.id)?'#913f35':null,2.4);
        symbol(ctx,p.color,p.x-p.size/2+8,p.y-p.size/2+8,5,'#fff6eb');ctx.fillStyle='#fff8ef';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`700 ${p.size<50?15:p.size<70?21:27}px sans-serif`;ctx.fillText(p.value,p.x-p.size*.18,p.y+1);arrow(ctx,p,'#fff8ef');ctx.restore();
      }
      for(const e of effects){ctx.save();ctx.globalAlpha=Math.max(0,e.life/.32);ctx.fillStyle=e.color;ctx.beginPath();ctx.arc(e.x,e.y,2.3,0,Math.PI*2);ctx.fill();ctx.restore();}
      ctx.textAlign='center';ctx.textBaseline='alphabetic';ctx.font='600 13px sans-serif';ctx.fillStyle=status==='failed'?'#a84f41':INK;ctx.fillText(note,195,514);ctx.font='12px sans-serif';ctx.fillStyle='#7c897d';ctx.fillText(`${cfg.holes.length-holes.length} / ${cfg.holes.length} 个孔已消掉 · 颜色＋形状＋数字对应`,195,539);ctx.restore();
    }
    return{update,render,input,getState,undo,canUndo,destroy(){status='destroyed';motion=null;effects=[];history=[];}};
  }
  // Witness coordinates come from real public state after every settled action.
  function path(level,ids){const session=create({level}),points=[];for(const id of ids){const p=session.getState().pieces.find(p=>p.id===id);if(!p)throw Error('Missing witness piece '+id);points.push({id,x:p.x,y:p.y});session.input('down',p);for(let i=0;i<180&&session.getState().moving;i++)session.update(1/60);}session.destroy();return points;}
  window.MixGames||={};window.MixGames.partsfusion={title:'拆东补西·合成消除',shortTitle:'合成消除',operation:'点箭头：同色同号合大，进同号孔消掉。',combination:'定向装配 × 合成变大 × 入孔消除',levels:LEVELS.map(({name,hint})=>({name,hint})),create,witnesses:LEVELS.map((l,i)=>path(i,l.solution)),badPaths:LEVELS.map((l,i)=>l.bad?path(i,l.bad):null)};
})();
