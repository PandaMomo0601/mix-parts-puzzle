(() => {
  'use strict';
  const PAPER='#f4f1e9',INK='#24332d',COLORS=['#d87561','#79ab97','#8f89d0'],COLOR_NAMES=['coral','mint','violet'],DIRECTIONS=['right','down','left','up'];
  const VECTORS=[[1,0],[0,1],[-1,0],[0,-1]],SIDE=5,CELL=62,LEFT=40,TOP=117,BLOCK=58;
  const LEVELS = [{"name":"01 · 碰同色，一起清","hint":"点任意一块，碰到同色后一起消失。","pieces":[{"id":"A","x":1,"y":2,"c":0,"d":0},{"id":"B","x":3,"y":2,"c":0,"d":2}]},{"name":"02 · 空格也能跨","hint":"点两端的箭头，一次清掉整串。","pieces":[{"id":"A","x":0,"y":2,"c":0,"d":0},{"id":"B","x":1,"y":2,"c":0,"d":3},{"id":"C","x":3,"y":2,"c":0,"d":1},{"id":"D","x":4,"y":2,"c":0,"d":2}]},{"name":"03 · 一串给另一串让路","hint":"红色清掉后，紫色的路就通了。","pieces":[{"id":"A","x":0,"y":2,"c":0,"d":0},{"id":"B","x":1,"y":2,"c":0,"d":3},{"id":"C","x":2,"y":2,"c":0,"d":3},{"id":"D","x":3,"y":2,"c":0,"d":1},{"id":"E","x":4,"y":2,"c":0,"d":2},{"id":"F","x":2,"y":0,"c":2,"d":1},{"id":"G","x":2,"y":4,"c":2,"d":3}]},{"name":"04 · 先把交叉口清开","hint":"同色也要看箭头，别把伙伴留落单。","pieces":[{"id":"A","x":2,"y":0,"c":0,"d":0},{"id":"B","x":2,"y":2,"c":0,"d":1},{"id":"C","x":2,"y":4,"c":0,"d":3},{"id":"D","x":0,"y":3,"c":2,"d":0},{"id":"E","x":2,"y":3,"c":2,"d":2},{"id":"F","x":3,"y":3,"c":2,"d":3},{"id":"G","x":0,"y":1,"c":0,"d":0},{"id":"H","x":2,"y":1,"c":0,"d":3},{"id":"I","x":3,"y":1,"c":0,"d":3},{"id":"J","x":1,"y":1,"c":1,"d":1},{"id":"K","x":1,"y":2,"c":1,"d":2},{"id":"L","x":1,"y":3,"c":1,"d":0}]},{"name":"05 · 一串接一串","hint":"先清中间红串，接着看看整条绿线。","pieces":[{"id":"A","x":0,"y":4,"c":0,"d":0},{"id":"B","x":3,"y":4,"c":0,"d":1},{"id":"C","x":4,"y":4,"c":0,"d":0},{"id":"D","x":0,"y":0,"c":2,"d":0},{"id":"E","x":2,"y":0,"c":2,"d":1},{"id":"F","x":3,"y":0,"c":2,"d":3},{"id":"G","x":4,"y":0,"c":2,"d":3},{"id":"H","x":1,"y":0,"c":1,"d":1},{"id":"I","x":1,"y":2,"c":1,"d":3},{"id":"J","x":1,"y":3,"c":1,"d":2},{"id":"K","x":1,"y":4,"c":1,"d":1},{"id":"L","x":0,"y":1,"c":0,"d":0},{"id":"M","x":1,"y":1,"c":0,"d":1},{"id":"N","x":3,"y":1,"c":0,"d":2}]}];
  const copy=objects=>objects.map(p=>({...p}));
  const center=p=>({x:LEFT+(p.x+.5)*CELL,y:TOP+(p.y+.5)*CELL});
  const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
  function rulesFor(base){
    const rays=base.map((p,i)=>{const [dx,dy]=VECTORS[p.d];return base.map((q,j)=>({j,along:(q.x-p.x)*dx+(q.y-p.y)*dy,across:(q.x-p.x)*dy-(q.y-p.y)*dx})).filter(q=>q.j!==i&&q.along>0&&q.across===0).sort((a,b)=>a.along-b.along).map(q=>q.j);});
    const cache=new Map([[0,true]]);
    function plan(mask,index){
      if(!(mask&(1<<index)))return null;
      const targets=[];let blocker=null,remove=1<<index;
      for(const j of rays[index]){if(!(mask&(1<<j)))continue;if(base[j].c!==base[index].c){blocker=j;break;}targets.push(j);remove|=1<<j;}
      return{index,targets,blocker,remove,accepted:targets.length>0,next:mask&~remove};
    }
    function solve(mask){
      const began=now();let visited=0,proof='complete-search';
      function visit(m){if(cache.has(m))return cache.get(m);visited++;const counts=[0,0,0];for(let i=0;i<base.length;i++)if(m&(1<<i))counts[base[i].c]++;
        if(counts.some(n=>n===1)){cache.set(m,false);return false;}
        for(let i=0;i<base.length;i++){const a=plan(m,i);if(a?.accepted&&visit(a.next)){cache.set(m,true);return true;}}
        cache.set(m,false);return false;
      }
      const reachable=visit(mask);if(!mask)proof='empty-board';else if(!reachable){const counts=[0,0,0];for(let i=0;i<base.length;i++)if(mask&(1<<i))counts[base[i].c]++;if(counts.some(n=>n===1))proof='unpaired-color';}
      return{result:reachable?'reachable':'unreachable',proof,visited,cachedStates:cache.size,elapsedMs:+(now()-began).toFixed(3)};
    }
    return{plan,solve};
  }
  function create(env){
    const level=Math.max(0,Math.min(LEVELS.length-1,Math.floor(Number(env.level)||0))),cfg=LEVELS[level],base=copy(cfg.pieces),rules=rulesFor(base);
    let pieces=base.map((p,index)=>({...p,index})),status='playing',motion=null,history=[],moves=0,alive=true,time=0,feedback=cfg.hint,effects=[],events=[],highlight=null;
    const mask=()=>pieces.reduce((m,p)=>m|(1<<p.index),0);let search=rules.solve(mask());
    const sound=(kind,intensity=.5,pitch=1)=>env.sound?.(kind,intensity,pitch);
    function snapshot(){return{pieces:copy(pieces),moves,search:{...search},events:events.map(e=>({...e,at:{...e.at}}))};}
    function canUndo(){return alive&&!motion&&history.length>0&&status!=='won';}
    function undo(){if(!canUndo())return false;const old=history.pop();pieces=old.pieces;moves=old.moves;search=old.search;events=old.events;status='playing';effects=[];highlight=null;feedback='这一串退回来了，换个箭头试试。';sound('tap',.3,.85);return true;}
    function burst(p,at){for(let i=0;i<9;i++){const a=i*2.4;effects.push({x:at.x,y:at.y,vx:Math.cos(a)*(30+i*3),vy:Math.sin(a)*(30+i*3),life:.28,c:p.c});}}
    function finishAction(){
      const active=motion,p=pieces.find(p=>p.index===active.index),at=active.stop;
      pieces=pieces.filter(q=>q.index!==active.index);events.push({type:'source',id:p.id,step:moves+1,elapsed:+active.elapsed.toFixed(4),at:{...at}});burst(p,at);moves++;motion=null;
      search=rules.solve(mask());
      if(!pieces.length){status='won';feedback='一串接一串，全部清空！';sound('win',.75,1.12);env.onComplete?.({message:feedback,moves,cleared:base.length});}
      else if(search.result==='unreachable'){status='failed';feedback='剩下的色块已无法清空，悔棋换个顺序。';sound('fail',.45,.85);env.onFail?.({reason:feedback,moves,proof:search.proof});}
      else{feedback=`一箭清掉 ${active.targets.length+1} 块，接着来。`;sound('collect',.4,1.05);}
    }
    function input(type,point){
      if(!alive||type!=='down'||status!=='playing'||motion||!point)return false;
      const p=pieces.find(q=>{const c=center(q);return Math.abs(point.x-c.x)<=BLOCK/2&&Math.abs(point.y-c.y)<=BLOCK/2;});if(!p)return false;
      const a=rules.plan(mask(),p.index),from=center(p);
      if(!a.accepted){motion={kind:'bump',index:p.index,from,elapsed:0,duration:.2};highlight=a.blocker===null?null:base[a.blocker].id;feedback=a.blocker===null?'箭头前没有同色块，换一个试试。':'第一块颜色不同，不能越过去。';sound('hit',.28,.85);return false;}
      history.push(snapshot());highlight=null;const[dx,dy]=VECTORS[p.d],last=center(base[a.targets.at(-1)]);
      let stop;if(a.blocker!==null){const b=center(base[a.blocker]);stop={x:b.x-dx*(BLOCK+2),y:b.y-dy*(BLOCK+2)};}else stop={x:dx?LEFT+(.5+(dx>0?SIDE-1:0))*CELL:from.x,y:dy?TOP+(.5+(dy>0?SIDE-1:0))*CELL:from.y};
      const distance=Math.abs(stop.x-from.x)+Math.abs(stop.y-from.y),travel=Math.max(.24,distance/470);
      motion={kind:'clear',index:p.index,from,stop,last,dx,dy,elapsed:0,travel,fade:.12,distance,targets:a.targets.map(index=>({index,contact:Math.max(0,Math.abs(center(base[index]).x-from.x)+Math.abs(center(base[index]).y-from.y)-BLOCK)})),nextTarget:0,blocker:a.blocker};
      feedback=`这一串能清 ${a.targets.length+1} 块。`;sound('whoosh',.3,.95);return true;
    }
    function update(dt){
      if(!alive)return;const delta=Math.max(0,Math.min(.05,Number(dt)||0));time+=delta;
      effects=effects.filter(e=>e.life>0);for(const e of effects){e.life-=delta;e.x+=e.vx*delta;e.y+=e.vy*delta;}
      if(!motion)return;motion.elapsed+=delta;
      if(motion.kind==='bump'){if(motion.elapsed>=motion.duration)motion=null;return;}
      const travelled=Math.min(1,motion.elapsed/motion.travel)*motion.distance;
      while(motion.nextTarget<motion.targets.length&&travelled+.001>=motion.targets[motion.nextTarget].contact){
        const hit=motion.targets[motion.nextTarget],p=pieces.find(p=>p.index===hit.index),at=center(p);pieces=pieces.filter(q=>q.index!==hit.index);events.push({type:'target',id:p.id,step:moves+1,elapsed:+motion.elapsed.toFixed(4),at:{...at}});burst(p,at);motion.nextTarget++;sound('pop',.52,1+motion.nextTarget*.11);
      }
      if(motion.elapsed>=motion.travel+motion.fade)finishAction();
    }
    function pose(p){const c=center(p);if(motion?.index!==p.index)return c;if(motion.kind==='bump'){const[dx,dy]=VECTORS[p.d],n=Math.sin(Math.min(1,motion.elapsed/motion.duration)*Math.PI)*2;return{x:c.x+dx*n,y:c.y+dy*n};}const t=Math.min(1,motion.elapsed/motion.travel);return{x:motion.from.x+(motion.stop.x-motion.from.x)*t,y:motion.from.y+(motion.stop.y-motion.from.y)*t};}
    function getState(){return{game:'lineclear',level,status,moving:!!motion,moves,won:status==='won',failed:status==='failed',remaining:pieces.length,cleared:base.length-pieces.length,total:base.length,canUndo:canUndo(),undoDepth:history.length,feedback,search:{...search},board:{cols:SIDE,rows:SIDE,left:LEFT,top:TOP,cell:CELL,block:BLOCK},events:events.map(e=>({...e,at:{...e.at}})),animation:motion?JSON.parse(JSON.stringify(motion)):null,pieces:pieces.map(p=>({id:p.id,...pose(p),col:p.x,row:p.y,w:BLOCK,h:BLOCK,color:COLOR_NAMES[p.c],colorIndex:p.c,direction:DIRECTIONS[p.d],directionIndex:p.d,symbol:['triangle','circle','diamond'][p.c],canMove:rules.plan(mask(),p.index).accepted,clickable:!motion&&status==='playing'}))};}
    function box(ctx,x,y,w,h,r,fill,stroke,line=1){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=line;ctx.stroke();}}
    function symbol(ctx,c,x,y){ctx.fillStyle='#fff8ef';ctx.beginPath();if(c===0){ctx.moveTo(x,y-5);ctx.lineTo(x+5,y+4);ctx.lineTo(x-5,y+4);ctx.closePath();}else if(c===1)ctx.arc(x,y,4.3,0,Math.PI*2);else{ctx.moveTo(x,y-5);ctx.lineTo(x+5,y);ctx.lineTo(x,y+5);ctx.lineTo(x-5,y);ctx.closePath();}ctx.fill();}
    function arrow(ctx,p,c){const[dx,dy]=VECTORS[p.d],len=24;ctx.strokeStyle='#fff8ef';ctx.lineWidth=4;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(c.x-dx*len/2,c.y-dy*len/2);ctx.lineTo(c.x+dx*len/2,c.y+dy*len/2);ctx.moveTo(c.x+dx*len/2-dx*8+dy*7,c.y+dy*len/2-dy*8-dx*7);ctx.lineTo(c.x+dx*len/2,c.y+dy*len/2);ctx.lineTo(c.x+dx*len/2-dx*8-dy*7,c.y+dy*len/2-dy*8+dx*7);ctx.stroke();}
    function render(ctx){
      ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.textBaseline='middle';ctx.textAlign='left';ctx.fillStyle=INK;ctx.font='800 26px sans-serif';ctx.fillText('一箭清一串',22,30);ctx.textAlign='right';ctx.fillStyle='#54866b';ctx.font='700 15px sans-serif';ctx.fillText(`${base.length-pieces.length} / ${base.length}`,367,30);ctx.textAlign='left';ctx.fillStyle='#546c5f';ctx.font='600 14px sans-serif';ctx.fillText('沿箭头碰同色，清空整张图',22,62);ctx.font='12px sans-serif';ctx.fillStyle='#7c897d';ctx.fillText('空格可以跨 · 碰到异色就停',22,85);
      box(ctx,LEFT-7,TOP-7,SIDE*CELL+14,SIDE*CELL+14,20,'#e4e6dc');for(let y=0;y<SIDE;y++)for(let x=0;x<SIDE;x++)box(ctx,LEFT+x*CELL+2,TOP+y*CELL+2,BLOCK,BLOCK,12,'#f9f7f0');
      const order=pieces.slice().sort((a,b)=>(a.index===motion?.index?1:0)-(b.index===motion?.index?1:0));for(const p of order){const c=pose(p);let alpha=1;if(motion?.kind==='clear'&&motion.index===p.index&&motion.elapsed>motion.travel)alpha=Math.max(0,1-(motion.elapsed-motion.travel)/motion.fade);ctx.save();ctx.globalAlpha=alpha;box(ctx,c.x-29,c.y-26,58,58,12,'#24332d16');box(ctx,c.x-29,c.y-29,58,58,12,COLORS[p.c],p.id===highlight?'#aa594a':null,2.5);symbol(ctx,p.c,c.x-17,c.y-17);arrow(ctx,p,{x:c.x+2,y:c.y+3});ctx.restore();}
      for(const e of effects){ctx.save();ctx.globalAlpha=Math.max(0,e.life/.28);ctx.fillStyle=COLORS[e.c];ctx.beginPath();ctx.arc(e.x,e.y,2.6,0,Math.PI*2);ctx.fill();ctx.restore();}
      ctx.textAlign='center';ctx.fillStyle='#7c897d';ctx.font='12px sans-serif';ctx.fillText('同色同符号 · 至少碰到一块才发动',195,455);box(ctx,18,484,354,60,13,status==='failed'?'#f1ddd5':status==='won'?'#dce8db':'#e8eadf');ctx.fillStyle=status==='failed'?'#a44c39':INK;ctx.font='600 13px sans-serif';const chars=Array.from(feedback);if(chars.length>25){ctx.fillText(chars.slice(0,25).join(''),195,506);ctx.fillText(chars.slice(25).join(''),195,528);}else ctx.fillText(feedback,195,515);ctx.restore();
    }
    return{update,render,input,getState,undo,canUndo,destroy(){alive=false;motion=null;history=[];effects=[];}};
  }
  window.MixGames||={};window.MixGames.lineclear={title:'一箭清一串',shortTitle:'一箭清一串',operation:'点箭头，撞同色清一串，清空就过关。',combination:'点击移动 × 同色连串消除',levels:LEVELS.map(({name,hint})=>({name,hint})),create};
})();
