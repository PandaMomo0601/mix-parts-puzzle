(function () {
  'use strict';
  const PAPER='#f4f1e9',INK='#24332d';
  const PALETTE={coral:{fill:'#d87561',light:'#f1ded6',ink:'#753d32',name:'红色'},mint:{fill:'#79ab97',light:'#dfebe1',ink:'#345c49',name:'绿色'},blue:{fill:'#759ebd',light:'#e0e9ef',ink:'#355675',name:'蓝色'},gold:{fill:'#d8b865',light:'#f1e8d0',ink:'#705b29',name:'黄色'}};
  const VECTORS={right:[1,0],left:[-1,0],down:[0,1],up:[0,-1]};
  const piece=(id,x,y,w,h,color,direction)=>({id,x,y,w,h,color,direction});
  const hole=(id,x,y,w,h,color)=>({id,x,y,w,h,color});
  const p=(id,x,y,color,direction)=>piece(id,x,y,54,42,color,direction);
  const h=(id,x,y,color)=>hole(id,x,y,54,42,color);
  const LEVELS=[
    {name:'合上，就消掉',hint:'点零件，送进同色同形缺口；一起消掉。',
      pieces:[piece('A',68,230,64,42,'coral','right'),piece('B',190,360,44,64,'mint','up')],
      holes:[hole('a',316,230,64,42,'coral'),hole('b',190,132,44,64,'mint')]},
    {name:'近的先留给谁',hint:'虚线只指向最近的同色同形缺口。',
      pieces:[p('A',63,300,'coral','right'),p('B',190,122,'coral','down'),piece('C',190,212,54,42,'blue','right')],
      holes:[h('a',190,300,'coral'),h('b',314,300,'coral'),hole('c',314,212,54,42,'blue')]},
    {name:'一根梁，两条路',hint:'先移开横梁，再看谁只有一个缺口。',
      pieces:[p('A',60,290,'coral','right'),p('B',175,120,'coral','down'),p('C',60,405,'mint','right'),p('D',265,120,'mint','down'),piece('E',220,205,130,36,'blue','left')],
      holes:[h('a',175,290,'coral'),h('b',310,290,'coral'),h('c',265,405,'mint'),h('d',340,405,'mint'),hole('e',90,205,130,36,'blue')]},
    {name:'把后面的路也留好',hint:'孔会消失，路会打开；顺序仍要想一下。',
      pieces:[p('A',60,290,'coral','right'),p('B',175,120,'coral','down'),p('C',60,405,'mint','right'),p('D',265,120,'mint','down'),piece('E',220,205,130,36,'blue','left'),piece('F',120,290,44,44,'gold','down'),piece('G',185,405,44,44,'blue','up')],
      holes:[h('a',175,290,'coral'),h('b',310,290,'coral'),h('c',265,405,'mint'),h('d',340,405,'mint'),hole('e',90,205,130,36,'blue'),hole('f',120,350,44,44,'gold'),hole('g',185,350,44,44,'blue')]},
    {name:'让整张图一起松开',hint:'同色也要同形，三条路线共用一根横梁。',
      pieces:[p('A',48,260,'coral','right'),p('B',138,100,'coral','down'),p('C',48,350,'mint','right'),p('D',200,100,'mint','down'),p('E',48,440,'blue','right'),p('F',260,100,'blue','down'),piece('G',200,170,224,26,'gold','down'),piece('H',93,345,26,232,'gold','right'),piece('I',160,395,44,34,'blue','up')],
      holes:[h('a',138,260,'coral'),h('b',317,260,'coral'),h('c',200,350,'mint'),h('d',317,350,'mint'),h('e',260,440,'blue'),h('f',317,440,'blue'),hole('g',200,477,224,26,'gold'),hole('h',361,345,26,232,'gold'),hole('i',160,215,44,34,'blue')]},
  ];
  const clone=v=>JSON.parse(JSON.stringify(v));
  const rect=o=>({x:o.x-o.w/2,y:o.y-o.h/2,w:o.w,h:o.h});
  const overlaps=(a,b)=>a.x<b.x+b.w-.01&&a.x+a.w>b.x+.01&&a.y<b.y+b.h-.01&&a.y+a.h>b.y+.01;
  function targetFor(p,holes) {
    const [dx,dy]=VECTORS[p.direction];
    return holes.filter(h=>h.color===p.color&&h.w===p.w&&h.h===p.h&&Math.abs(dx?h.y-p.y:h.x-p.x)<.01&&((h.x-p.x)*dx+(h.y-p.y)*dy)>.01)
      .sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0]||null;
  }
  function sweep(p,t) {return{x:Math.min(p.x,t.x)-p.w/2,y:Math.min(p.y,t.y)-p.h/2,w:Math.abs(p.x-t.x)+p.w,h:Math.abs(p.y-t.y)+p.h};}
  function blockersFor(p,t,pieces) {return t?pieces.filter(q=>q.id!==p.id&&overlaps(sweep(p,t),rect(q))):[];}
  function rounded(ctx,x,y,w,h,r,fill,stroke,width=1) {ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();}}
  function symbol(ctx,color,x,y,size,ink) {
    ctx.save();ctx.fillStyle=ink||PALETTE[color].ink;ctx.beginPath();
    if(color==='coral'){ctx.moveTo(x,y-size);ctx.lineTo(x+size*.9,y+size*.7);ctx.lineTo(x-size*.9,y+size*.7);ctx.closePath();}
    else if(color==='mint')ctx.arc(x,y,size*.76,0,Math.PI*2);
    else if(color==='blue'){ctx.moveTo(x,y-size);ctx.lineTo(x+size,y);ctx.lineTo(x,y+size);ctx.lineTo(x-size,y);ctx.closePath();}
    else ctx.rect(x-size*.75,y-size*.75,size*1.5,size*1.5);
    ctx.fill();ctx.restore();
  }
  function arrow(ctx,x,y,dir,color,len=13) {
    const [dx,dy]=VECTORS[dir];ctx.save();ctx.translate(x,y);ctx.rotate(Math.atan2(dy,dx));ctx.strokeStyle=color;ctx.lineWidth=2.4;ctx.lineCap='round';ctx.lineJoin='round';
    ctx.beginPath();ctx.moveTo(-len/2,0);ctx.lineTo(len/2,0);ctx.moveTo(len/2-5,-4);ctx.lineTo(len/2,0);ctx.lineTo(len/2-5,4);ctx.stroke();ctx.restore();
  }
  function create(env) {
    const level=Math.max(0,Math.min(LEVELS.length-1,Number(env.level)||0)),def=LEVELS[level],total=def.pieces.length;
    let pieces=clone(def.pieces),holes=clone(def.holes),status='playing',motion=null,history=[],matches=[],effects=[],highlight=null,notice=0,time=0,destroyed=false;
    let message='实心是零件，虚线是缺口。',failureReason=null;
    const sound=(t,v=.5,p=1)=>env.sound&&env.sound(t,v,p);
    function fail(reason,stuckId) {
      if(status!=='playing')return;status='failed';failureReason=reason;message=reason;highlight={piece:stuckId||null,blocker:null};notice=99;sound('fail',.55,.8);
      if(env.onFail)env.onFail({reason:reason+'，悔棋换个顺序。',moves:matches.length,level});
    }
    function inspect() {
      if(!pieces.length) {status='won';message='零件和缺口，都清空了！';sound('win',.7,1.2);if(env.onComplete)env.onComplete({message:'零件与缺口全部清空。',moves:matches.length,level});return;}
      const stranded=pieces.find(p=>!targetFor(p,holes));
      if(stranded){fail(PALETTE[stranded.color].name+'零件的可用缺口被先用掉了',stranded.id);return;}
      if(pieces.every(p=>blockersFor(p,targetFor(p,holes),pieces).length))fail('剩下的零件互相挡住了',pieces[0].id);
    }
    function snapshot(){return{pieces:clone(pieces),holes:clone(holes),matches:clone(matches)};}
    function input(type,point) {
      if(type!=='down'||destroyed||motion||status!=='playing'||!point)return;
      // A generous hit area keeps narrow original-style parts usable on phones.
      const p=pieces.filter(p=>Math.abs(point.x-p.x)<=Math.max(p.w/2,26)&&Math.abs(point.y-p.y)<=Math.max(p.h/2,26)).sort((a,b)=>Math.hypot(a.x-point.x,a.y-point.y)-Math.hypot(b.x-point.x,b.y-point.y))[0];
      if(!p)return;
      const target=targetFor(p,holes);
      if(!target){fail('这个方向已没有同色同形缺口',p.id);return;}
      const blockers=blockersFor(p,target,pieces);
      if(blockers.length) {
        highlight={piece:p.id,blocker:blockers[0].id};notice=2.4;message='前面有实心零件，先把它移开。';sound('hit',.32,.85);
        motion={kind:'bump',id:p.id,from:{x:p.x,y:p.y},age:0,duration:.24};return;
      }
      history.push(snapshot());highlight=null;notice=0;failureReason=null;message='入位后，零件和缺口一起消掉。';
      motion={kind:'clear',id:p.id,targetId:target.id,from:{x:p.x,y:p.y},to:{x:target.x,y:target.y},age:0,duration:.26+Math.hypot(target.x-p.x,target.y-p.y)/680};sound('whoosh',.4,1.05);
    }
    function update(dt) {
      if(destroyed)return;dt=Math.max(0,Math.min(Number(dt)||0,.08));time+=dt;notice=Math.max(0,notice-dt);
      effects.forEach(e=>e.age+=dt);effects=effects.filter(e=>e.age<.44);
      if(!motion)return;
      const m=motion,p=pieces.find(p=>p.id===m.id);m.age+=dt;const u=Math.min(1,m.age/m.duration);
      if(m.kind==='bump') {const [dx,dy]=VECTORS[p.direction],n=Math.sin(u*Math.PI)*4;p.x=m.from.x+dx*n;p.y=m.from.y+dy*n;if(u===1){p.x=m.from.x;p.y=m.from.y;motion=null;}return;}
      const ease=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;p.x=m.from.x+(m.to.x-m.from.x)*ease;p.y=m.from.y+(m.to.y-m.from.y)*ease;
      if(u===1) {
        const target=holes.find(h=>h.id===m.targetId);
        matches.push({pieceId:p.id,holeId:target.id,color:p.color,w:p.w,h:p.h,from:m.from,to:m.to});
        effects.push({x:p.x,y:p.y,w:p.w,h:p.h,color:p.color,age:0});pieces=pieces.filter(q=>q.id!==p.id);holes=holes.filter(h=>h.id!==target.id);motion=null;
        message='缺口也消掉了，这条路空出来了。';sound('collect',.6,1+matches.length*.045);inspect();
      }
    }
    function canUndo(){return !destroyed&&!motion&&history.length>0&&status!=='won';}
    function undo(){if(!canUndo())return false;const last=history.pop();pieces=last.pieces;holes=last.holes;matches=last.matches;motion=null;effects=[];highlight=null;notice=1.8;status='playing';failureReason=null;message='已撤回，零件和缺口都回来了。';sound('tap',.28,.9);return true;}
    function render(ctx) {
      ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);
      ctx.fillStyle=INK;ctx.font='700 20px system-ui,sans-serif';ctx.textAlign='left';ctx.fillText('拆东补西 · 消除',19,30);
      ctx.font='12px system-ui,sans-serif';ctx.fillStyle='#6e7d70';ctx.fillText(def.hint,19,53);
      ctx.textAlign='right';ctx.fillStyle='#527f68';ctx.font='700 18px system-ui,sans-serif';ctx.fillText(matches.length+' / '+total,371,30);
      ctx.strokeStyle='#d8dfd4';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(19,65);ctx.lineTo(371,65);ctx.stroke();
      ctx.fillStyle='#dce0d6';for(let y=83;y<492;y+=23)for(let x=24;x<376;x+=23){ctx.beginPath();ctx.arc(x,y,.85,0,Math.PI*2);ctx.fill();}
      // Rails show destination geometry, never whether a move keeps the puzzle solvable.
      for(const p of pieces) {
        if(motion&&motion.id===p.id)continue;const t=targetFor(p,holes);if(!t)continue;
        ctx.save();ctx.strokeStyle=PALETTE[p.color].fill;ctx.globalAlpha=.32;ctx.lineWidth=1.3;ctx.setLineDash([2,6]);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(t.x,t.y);ctx.stroke();ctx.restore();
      }
      for(const h of holes) {const c=PALETTE[h.color],r=rect(h);ctx.save();ctx.setLineDash([5,4]);rounded(ctx,r.x,r.y,r.w,r.h,7,c.light,c.fill,1.8);ctx.setLineDash([]);symbol(ctx,h.color,h.x,h.y,6,c.ink);ctx.restore();}
      if(highlight&&notice>0) {
        const p=pieces.find(p=>p.id===highlight.piece),b=pieces.find(p=>p.id===highlight.blocker);
        for(const q of [p,b].filter(Boolean)){const r=rect(q);rounded(ctx,r.x-4,r.y-4,r.w+8,r.h+8,10,null,status==='failed'?'#bd5547':'#bb9750',2);}
      }
      for(const p of pieces) {
        const c=PALETTE[p.color],r=rect(p);rounded(ctx,r.x+1.3,r.y+2.4,r.w,r.h,7,'#24332d12');rounded(ctx,r.x,r.y,r.w,r.h,7,c.fill,c.ink,1.3);
        ctx.save();ctx.strokeStyle='#ffffff55';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(r.x+7,r.y+4);ctx.lineTo(r.x+r.w-7,r.y+4);ctx.stroke();ctx.restore();
        const vertical=(p.w<40&&p.h>=60)||((p.direction==='up'||p.direction==='down')&&p.h>=40);
        symbol(ctx,p.color,p.x-(vertical?0:13),p.y-(vertical?10:0),5.5,c.ink);
        arrow(ctx,p.x+(vertical?0:9),p.y+(vertical?9:0),p.direction,c.ink);
      }
      for(const e of effects){const u=e.age/.44;ctx.save();ctx.globalAlpha=1-u;rounded(ctx,e.x-e.w/2-u*9,e.y-e.h/2-u*9,e.w+u*18,e.h+u*18,9,null,PALETTE[e.color].fill,2);for(let j=0;j<8;j++){const a=j*Math.PI/4;ctx.beginPath();ctx.arc(e.x+Math.cos(a)*(12+u*33),e.y+Math.sin(a)*(12+u*27),2.4*(1-u),0,Math.PI*2);ctx.fillStyle=PALETTE[e.color].fill;ctx.fill();}ctx.restore();}
      ctx.textAlign='center';ctx.fillStyle=status==='failed'?'#a34739':INK;ctx.font='600 13px system-ui,sans-serif';ctx.fillText(message,195,519);
      ctx.fillStyle='#819080';ctx.font='12px system-ui,sans-serif';ctx.fillText(status==='won'?'全部配对完成':'同色同形才配对 · 虚线孔可以穿过',195,542);ctx.restore();
    }
    function getState(){return{level,status,moving:!!motion,motion:motion?clone(motion):null,pieces:pieces.map(p=>({...clone(p),targetId:targetFor(p,holes)?.id||null,blockers:blockersFor(p,targetFor(p,holes),pieces).map(b=>b.id)})),holes:clone(holes),matchedPairs:clone(matches),moves:matches.length,total,canUndo:canUndo(),undoDepth:history.length,message,failureReason,seconds:time};}
    return{update,render,input,getState,undo,canUndo,destroy(){destroyed=true;motion=null;effects=[];history=[];}};
  }
  window.MixGames||={};window.MixGames.partsclear={title:'拆东补西·消除',shortTitle:'拆补消除',operation:'点零件进入同色同形缺口，一起消除。',combination:'拆东补西 × 撞色消除 × 共享缺口',levels:LEVELS.map(l=>({name:l.name,hint:l.hint})),create};
})();
