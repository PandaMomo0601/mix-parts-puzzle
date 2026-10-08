(function () {
  'use strict';
  const INK = '#24332d', PAPER = '#f4f1e9', MINT = '#79ab97', CORAL = '#d87561';
  const DIRS = [[1,0],[0,1],[-1,0],[0,-1]];
  const ARROWS = ['→','↓','←','↑'];
  const CELL=62, LEFT=40, TOP=115, SIZE=5;
  const DATA = [
    {name:'01 · 一碰翻倍', hint:'点 2，让两个 2 碰成 4。',target:4,walls:[],pieces:[['a',0,2,2,0],['b',3,2,2,2]]},
    {name:'02 · 借个停车位', hint:'石块可以挡路，也能帮你停在合适的位置。',target:8,walls:[[2,2]],pieces:[['a',3,1,2,2],['b',4,2,2,2],['c',4,1,2,2],['d',3,4,2,3]]},
    {name:'03 · 留一条合流路', hint:'合成以后，还要能碰到下一块。',target:16,walls:[[1,1],[3,3]],pieces:[['a',2,2,4,3],['b',4,1,4,2],['c',1,4,2,3],['d',0,2,2,0],['e',2,0,4,1]]},
    {name:'04 · 接力靠边站', hint:'有时先滑动一步，才是给后面铺路。',target:16,walls:[[2,1],[2,3]],pieces:[['a',0,1,2,3],['b',0,3,4,3],['c',1,3,2,2],['d',4,0,4,2],['e',0,4,2,3],['f',1,0,2,2]]},
    {name:'05 · 合成三十二', hint:'不同数字会挡住彼此，合并才能腾出路。',target:32,walls:[[1,2],[3,2]],pieces:[['a',3,0,8,0],['b',4,1,4,2],['c',1,0,2,0],['d',1,1,2,3],['e',0,0,2,0],['f',4,3,8,3],['g',3,1,2,3],['h',4,2,4,3]]}
  ];
  const clone = value => JSON.parse(JSON.stringify(value));
  function rounded(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r);}
  function plan(pieces,p,walls){
    const [dx,dy]=DIRS[p.d];let x=p.x,y=p.y,hit=null;
    while(true){const nx=x+dx,ny=y+dy;if(nx<0||nx>=SIZE||ny<0||ny>=SIZE||walls.some(w=>w[0]===nx&&w[1]===ny))break;
      const other=pieces.find(q=>q.id!==p.id&&q.x===nx&&q.y===ny);
      if(other){if(other.v===p.v){x=nx;y=ny;hit=other.id;}break;}x=nx;y=ny;}
    return {x,y,hit,legal:x!==p.x||y!==p.y};
  }
  function create(env){
    const level=DATA[Math.max(0,Math.min(DATA.length-1,Math.floor(env.level||0)))];
    let pieces=level.pieces.map(([id,x,y,v,d])=>({id,x,y,v,d}));
    let phase='playing', animation=null, history=[], moves=0, merges=0, feedback=level.hint;
    let pulse=0, pulseCell=null, alive=true;
    const saySound=(type,intensity=0.5,pitch=440)=>{if(typeof env.sound==='function')env.sound(type,intensity,pitch/440);};
    const pixel=(p)=>({x:LEFT+(p.x+.5)*CELL,y:TOP+(p.y+.5)*CELL});
    const snapshot=()=>({pieces:clone(pieces),moves,merges,feedback,phase});
    const hasMove=()=>pieces.some(p=>plan(pieces,p,level.walls).legal);
    function finishMove(){
      const a=animation;animation=null;
      const p=pieces.find(q=>q.id===a.id);if(!p)return;
      p.x=a.to.x;p.y=a.to.y;
      if(a.to.hit){pieces=pieces.filter(q=>q.id!==a.to.hit);p.v*=2;merges++;pulse=.38;pulseCell={x:p.x,y:p.y};saySound('merge',.7,350+Math.log2(p.v)*85);feedback=`${p.v/2} + ${p.v/2} = ${p.v}，继续沿原箭头走。`;}
      else{saySound('move',.3,420);feedback='停好了，再选下一块。';}
      moves++;
      if(pieces.some(q=>q.v>=level.target)){
        phase='won';feedback=`合成 ${level.target}！这条接力跑通了。`;saySound('win',.8,780);
        if(typeof env.onComplete==='function')env.onComplete({moves,merges,target:level.target});
      }else if(!hasMove()){
        phase='failed';feedback='卡住了：没有能移动的方块，点悔棋试试。';saySound('fail',.5,170);
        if(typeof env.onFail==='function')env.onFail({reason:'blocked',moves,target:level.target});
      }
    }
    function input(type,point){
      if(!alive||type!=='down'||animation||phase!=='playing'||!point)return false;
      const p=pieces.find(q=>{const c=pixel(q);return Math.abs(point.x-c.x)<=27&&Math.abs(point.y-c.y)<=27;});
      if(!p)return false;
      const to=plan(pieces,p,level.walls),start=pixel(p);
      if(!to.legal){animation={id:p.id,blocked:true,time:0,duration:.19,start,to};feedback='前面挡住了，先动另一块。';saySound('block',.3,190);return false;}
      history.push(snapshot());animation={id:p.id,blocked:false,time:0,duration:.18+(.055*(Math.abs(to.x-p.x)+Math.abs(to.y-p.y))),start,to};
      feedback=to.hit?'撞上相同数字，翻倍！':'沿箭头滑动……';return true;
    }
    function update(dt){
      if(!alive)return;const elapsed=Math.max(0,Math.min(Number(dt)||0,.1));pulse=Math.max(0,pulse-elapsed);
      if(animation){animation.time+=elapsed;if(animation.time>=animation.duration){if(animation.blocked)animation=null;else finishMove();}}
    }
    function undo(){
      if(!alive||animation||phase==='won'||!history.length)return false;
      const old=history.pop();pieces=old.pieces;moves=old.moves;merges=old.merges;phase='playing';feedback='已撤回一步，换一个顺序试试。';pulse=0;pulseCell=null;saySound('undo',.3,340);return true;
    }
    function render(ctx){
      ctx.save();ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle=INK;ctx.font='700 21px system-ui, sans-serif';ctx.fillText(`碰出 ${level.target}`,195,31);
      ctx.font='13px system-ui, sans-serif';ctx.fillStyle='#66776e';ctx.fillText('点数字块 → 沿箭头滑动 → 同数翻倍',195,58);
      ctx.font='600 12px system-ui, sans-serif';ctx.textAlign='left';ctx.fillStyle=INK;ctx.fillText(`已走 ${moves} 步`,LEFT,94);
      ctx.textAlign='right';ctx.fillStyle='#66776e';ctx.fillText('合并保留点击块的箭头',LEFT+SIZE*CELL,94);
      rounded(ctx,LEFT-8,TOP-8,SIZE*CELL+16,SIZE*CELL+16,20);ctx.fillStyle='#e5e6dc';ctx.fill();
      for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){rounded(ctx,LEFT+x*CELL+3,TOP+y*CELL+3,CELL-6,CELL-6,12);ctx.fillStyle='#f9f7f0';ctx.fill();}
      for(const [x,y]of level.walls){rounded(ctx,LEFT+x*CELL+6,TOP+y*CELL+6,CELL-12,CELL-12,11);ctx.fillStyle='#b7bfb4';ctx.fill();ctx.strokeStyle='#94a091';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(LEFT+x*CELL+20,TOP+y*CELL+15);ctx.lineTo(LEFT+x*CELL+15,TOP+y*CELL+25);ctx.lineTo(LEFT+x*CELL+26,TOP+y*CELL+33);ctx.stroke();}
      if(pulse>0&&pulseCell){const c=pixel(pulseCell);ctx.strokeStyle=`rgba(216,117,97,${pulse/.38})`;ctx.lineWidth=4;rounded(ctx,c.x-29-(.38-pulse)*15,c.y-29-(.38-pulse)*15,58+(.38-pulse)*30,58+(.38-pulse)*30,14);ctx.stroke();}
      // Draw the moving block last, so it visibly reaches its destination.
      const order=pieces.slice().sort((a,b)=>(a.id===animation?.id?1:0)-(b.id===animation?.id?1:0));
      for(const p of order){let c=pixel(p);const isMoving=animation?.id===p.id;
        if(isMoving){const a=animation,t=Math.min(1,a.time/a.duration);if(a.blocked){const d=DIRS[p.d],v=Math.sin(t*Math.PI)*5;c={x:c.x+d[0]*v,y:c.y+d[1]*v};}
          else{const end=pixel(a.to),e=1-Math.pow(1-t,3);c={x:a.start.x+(end.x-a.start.x)*e,y:a.start.y+(end.y-a.start.y)*e};}}
        const palette={2:MINT,4:'#b5bd7a',8:'#d8ae70',16:CORAL,32:'#bb7982'};
        rounded(ctx,c.x-27,c.y-25,54,54,12);ctx.fillStyle='rgba(36,51,45,.12)';ctx.fill();
        rounded(ctx,c.x-27,c.y-28,54,54,12);ctx.fillStyle=palette[p.v]||CORAL;ctx.fill();
        ctx.textAlign='center';ctx.fillStyle=INK;ctx.font='750 25px system-ui, sans-serif';ctx.fillText(String(p.v),c.x,c.y-7);
        ctx.font='700 18px system-ui, sans-serif';ctx.fillText(ARROWS[p.d],c.x,c.y+14);
      }
      ctx.textAlign='center';ctx.fillStyle='#66776e';ctx.font='12px system-ui, sans-serif';ctx.fillText('异数与石块会挡路 · 没有新方块随机出现',195,458);
      rounded(ctx,18,486,354,57,13);ctx.fillStyle=phase==='failed'?'#f1ddd4':phase==='won'?'#dce9da':'#e8eadf';ctx.fill();
      ctx.fillStyle=phase==='failed'?'#914631':INK;ctx.font='600 13px system-ui, sans-serif';
      const words=Array.from(feedback);if(words.length>25){ctx.fillText(words.slice(0,25).join(''),195,507);ctx.fillText(words.slice(25).join(''),195,526);}else ctx.fillText(feedback,195,515);
      ctx.restore();
    }
    function getState(){return {title:'碰碰翻倍',level:Math.max(0,DATA.indexOf(level)),status:phase,phase,won:phase==='won',failed:phase==='failed',moving:!!animation,moves,merges,target:level.target,feedback,undoDepth:history.length,
      pieces:pieces.map(p=>({...pixel(p),id:p.id,col:p.x,row:p.y,value:p.v,direction:ARROWS[p.d],directionIndex:p.d,canMove:plan(pieces,p,level.walls).legal})),walls:clone(level.walls)};}
    return {update,render,input,getState,undo,canUndo:()=>alive&&!animation&&phase!=='won'&&history.length>0,destroy(){alive=false;animation=null;history=[];}};
  }
  window.MixGames=window.MixGames||{};
  window.MixGames.merge={title:'碰碰翻倍',shortTitle:'碰碰翻倍',operation:'点击数字块，沿箭头撞出更大的数字。',combination:'箭头滑行 × 数字合并',levels:DATA.map(({name,hint})=>({name,hint})),create};
})();
