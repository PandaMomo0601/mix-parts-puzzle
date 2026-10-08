(function () {
  'use strict';
  const COLORS = {
    coral: { fill: '#d87561', light: '#f3ded6', ink: '#743d33', symbol: 'triangle' },
    mint: { fill: '#79ab97', light: '#dcebe2', ink: '#2f5b49', symbol: 'circle' },
    blue: { fill: '#759ebd', light: '#dee9f0', ink: '#355674', symbol: 'diamond' },
    gold: { fill: '#d8b865', light: '#f3ead0', ink: '#705b29', symbol: 'square' },
  };
  const INK = '#24332d', PAPER = '#f4f1e9';
  const X = [117, 169, 221, 273], Y = [206, 258, 310, 362];
  const DATA = [
    { name: '先给上面让路', hint: '点彩球发射，同色消掉，异色撞车。',
      grid: [[null,null,null,null],[null,'coral','mint',null],[null,null,'coral',null],[null,null,null,null]],
      plan: ['L1','L1','T2'] },
    { name: '两边一起开路', hint: '小圆是下一颗，先看看它的颜色。',
      grid: [[null,null,null,null],['coral','mint','blue',null],['blue','coral','mint',null],[null,null,null,null]],
      plan: ['L1','L1','L1','T2','L2','L2'] },
    { name: '借一条路', hint: '同一块砖，换个方向也能消掉。',
      grid: [['coral','mint','blue',null],['blue','coral','mint',null],['blue','coral','mint',null],[null,null,null,null]],
      plan: ['T0','L0','L0','T0','T2','T2','L1','B1','T0'] },
    { name: '四面接力', hint: '一个方向卡住了，看看另一边。',
      grid: [['coral','mint','blue','gold'],['blue','gold','coral','mint'],['mint','blue','gold','coral'],['gold','coral','mint','blue']],
      plan: ['R1','B3','R3','L0','L0','B3','R1','L0','R1','T0','T0','T2','B1','L2','T0','B3'] },
    { name: '把路串起来', hint: '清掉一块，四面的路线都会变。',
      grid: [['mint','coral','mint','coral'],['gold','blue','coral','mint'],['gold','blue','gold','gold'],['coral','mint','coral','coral']],
      plan: ['L0','R3','R3','T0','B3','T0','B3','L2','B1','R3','B3','L0','B1','L0','R1','T2'] },
  ];
  function firstBrick(bricks, id) {
    const d = id[0], line = Number(id[1]);
    const row = d === 'L' || d === 'R';
    const candidates = bricks.filter(b => (row ? b.row : b.col) === line);
    candidates.sort((a,b) => ((row ? a.col-b.col : a.row-b.row) * (d === 'R' || d === 'B' ? -1 : 1)));
    return candidates[0] || null;
  }
  function station(id, queue) {
    const d = id[0], line = Number(id[1]);
    const v = d === 'L' ? [1,0] : d === 'R' ? [-1,0] : d === 'T' ? [0,1] : [0,-1];
    return { id, dir:d, x:d==='L'?41:d==='R'?349:X[line], y:d==='T'?124:d==='B'?446:Y[line], dx:v[0], dy:v[1], queue:queue.slice() };
  }
  function makeBoard(def) {
    return def.grid.flatMap((row,r) => row.flatMap((color,c) => color ? [{id:`b${r}${c}`,row:r,col:c,x:X[c],y:Y[r],color}] : []));
  }
  function makeStations(def) {
    // Build the fixed puzzle's ammunition from a verified construction path.
    // The running game always resolves the actual first collision independently.
    let bricks = makeBoard(def); const queues = {};
    for (const id of def.plan) {
      const b = firstBrick(bricks,id);
      if (!b) throw new Error('Invalid color level construction: '+id);
      (queues[id] ||= []).push(b.color);
      bricks = bricks.filter(x => x.id !== b.id);
    }
    if (bricks.length) throw new Error('Incomplete color level construction');
    return Object.entries(queues).map(([id,queue]) => station(id,queue));
  }
  const clone = value => JSON.parse(JSON.stringify(value));
  function roundRect(ctx,x,y,w,h,r) {
    ctx.beginPath(); ctx.roundRect(x,y,w,h,r);
  }
  function symbol(ctx,color,x,y,size,ink) {
    const shape = COLORS[color].symbol;
    ctx.save(); ctx.fillStyle = ink || COLORS[color].ink;
    ctx.beginPath();
    if (shape === 'circle') ctx.arc(x,y,size*.76,0,Math.PI*2);
    if (shape === 'triangle') { ctx.moveTo(x,y-size);ctx.lineTo(x+size*.92,y+size*.72);ctx.lineTo(x-size*.92,y+size*.72);ctx.closePath(); }
    if (shape === 'diamond') {ctx.moveTo(x,y-size);ctx.lineTo(x+size,y);ctx.lineTo(x,y+size);ctx.lineTo(x-size,y);ctx.closePath();}
    if (shape === 'square') ctx.rect(x-size*.76,y-size*.76,size*1.52,size*1.52);
    ctx.fill();ctx.restore();
  }
  function arrow(ctx,x,y,dx,dy,color) {
    ctx.save();ctx.translate(x,y);ctx.rotate(Math.atan2(dy,dx));ctx.strokeStyle=color;ctx.lineWidth=2.3;ctx.lineCap='round';ctx.lineJoin='round';
    ctx.beginPath();ctx.moveTo(-5,0);ctx.lineTo(5,0);ctx.moveTo(1,-4);ctx.lineTo(5,0);ctx.lineTo(1,4);ctx.stroke();ctx.restore();
  }
  function create(env) {
    const level = Math.max(0,Math.min(DATA.length-1,Number(env.level)||0));
    const def = DATA[level], total = def.plan.length;
    let bricks = makeBoard(def), launchers = makeStations(def), history = [];
    let status = 'playing', moving = null, shots = 0, effects = [], clock = 0;
    let feedback = '点彩球发射，碰到同色砖就消掉。';
    let destroyed = false;
    function snapshot() { return {bricks:clone(bricks),launchers:clone(launchers),shots,feedback}; }
    function sound(kind, intensity, pitch) { if (env.sound) env.sound(kind,intensity,pitch); }
    function fire(s) {
      if (status !== 'playing' || moving || !s.queue.length || destroyed) return;
      history.push(snapshot());
      const color = s.queue.shift();
      const target = firstBrick(bricks,s.id);
      const tx = target ? target.x : s.x+s.dx*316;
      const ty = target ? target.y : s.y+s.dy*316;
      moving = {stationId:s.id,color,x:s.x,y:s.y,tx,ty,age:0,duration:.14+Math.hypot(tx-s.x,ty-s.y)/720,target:target?target.id:null};
      shots++;
      feedback = '发射！';
      sound('tap',.34,1.08);
    }
    function resolveShot(m) {
      const target = bricks.find(b => b.id === m.target);
      if (!target || target.color !== m.color) {
        status = 'failed';
        feedback = target ? '颜色撞错了，悔棋就能接着试。' : '这条路已经空了，悔棋换个顺序。';
        effects.push({x:m.tx,y:m.ty,color:m.color,age:0,bad:true});
        sound('fail',.45,.72);
        if (env.onFail) env.onFail({reason:target?'color-mismatch':'empty-lane',shots,level});
        return;
      }
      bricks = bricks.filter(b => b.id !== target.id);
      effects.push({x:target.x,y:target.y,color:target.color,age:0,bad:false});
      sound('pop',.55,1+((total-bricks.length)%4)*.12);
      feedback = '清掉一块，其他方向也通了一点。';
      if (!bricks.length && launchers.every(s=>!s.queue.length)) {
        status = 'won';feedback='全部清空！四面都通了。';
        sound('win',.65,1.3);
        if (env.onComplete) env.onComplete({shots,moves:shots,level});
      }
    }
    function update(dt) {
      if (destroyed) return;
      const elapsed = Math.max(0,Math.min(Number(dt)||0,.1)); clock+=elapsed;
      effects.forEach(e => e.age+=elapsed);effects=effects.filter(e=>e.age<.42);
      if (!moving) return;
      moving.age += elapsed;
      if (moving.age >= moving.duration) {const finished=moving;moving=null;resolveShot(finished);}
    }
    function input(type,p) {
      if (type !== 'down' || status !== 'playing' || moving || destroyed || !p) return;
      const s = launchers.find(s=>s.queue.length && Math.hypot(s.x-p.x,s.y-p.y)<=26);
      if (s) fire(s);
    }
    function canUndo() { return !destroyed && !moving && status !== 'won' && history.length>0; }
    function undo() {
      if (!canUndo()) return false;
      const old=history.pop();bricks=old.bricks;launchers=old.launchers;shots=old.shots;effects=[];status='playing';
      feedback='已撤回一步，换个方向试试。';sound('tap',.25,.9);return true;
    }
    function render(ctx) {
      ctx.save();ctx.clearRect(0,0,390,560);ctx.fillStyle=PAPER;ctx.fillRect(0,0,390,560);
      ctx.textAlign='left';ctx.fillStyle=INK;ctx.font='700 22px system-ui, sans-serif';ctx.fillText('撞色开路',22,33);
      ctx.font='13px system-ui, sans-serif';ctx.fillStyle='#65756b';ctx.fillText(def.hint,22,56);
      ctx.textAlign='right';ctx.font='600 13px system-ui, sans-serif';ctx.fillStyle=INK;ctx.fillText(`${total-bricks.length} / ${total}`,367,30);
      ctx.fillStyle='#e6e8de';roundRect(ctx,22,70,345,3,2);ctx.fill();ctx.fillStyle='#79ab97';roundRect(ctx,22,70,345*(total-bricks.length)/total,3,2);ctx.fill();
      // A single shared arena makes cross-direction effects visible.
      roundRect(ctx,87,176,216,216,20);ctx.fillStyle='#e9e9de';ctx.fill();
      ctx.save();ctx.strokeStyle='#d8dfd2';ctx.lineWidth=1;ctx.setLineDash([2,5]);
      for(let i=0;i<4;i++) {ctx.beginPath();ctx.moveTo(X[i],187);ctx.lineTo(X[i],381);ctx.stroke();ctx.beginPath();ctx.moveTo(98,Y[i]);ctx.lineTo(292,Y[i]);ctx.stroke();}
      ctx.restore();
      for(const s of launchers) {
        const active=s.queue.length>0;
        const flying=moving&&moving.stationId===s.id;
        ctx.save();ctx.strokeStyle=active?'#c5d0c3':'#dce1d5';ctx.lineWidth=1.3;ctx.setLineDash([3,4]);
        const ex=s.dir==='L'?87:s.dir==='R'?303:s.x, ey=s.dir==='T'?176:s.dir==='B'?392:s.y;
        ctx.beginPath();ctx.moveTo(s.x+s.dx*26,s.y+s.dy*26);ctx.lineTo(ex,ey);ctx.stroke();ctx.restore();
        if (active) {
          const c=COLORS[s.queue[0]];
          ctx.beginPath();ctx.arc(s.x,s.y,21,0,Math.PI*2);ctx.fillStyle='#fffaf0';ctx.fill();
          ctx.beginPath();ctx.arc(s.x,s.y,18.5,0,Math.PI*2);ctx.fillStyle=c.fill;ctx.fill();
          symbol(ctx,s.queue[0],s.x,s.y,7.5,c.ink);
          arrow(ctx,s.x+s.dx*31,s.y+s.dy*31,s.dx,s.dy,c.ink);
          if(s.queue.length>1) {
            const rest=s.queue.slice(1);
            rest.forEach((color,i)=> {const across=(i-(rest.length-1)/2)*14;const px=s.x-s.dx*30+(s.dy?across:0);const py=s.y-s.dy*30+(s.dx?across:0);ctx.beginPath();ctx.arc(px,py,5.4,0,Math.PI*2);ctx.fillStyle=COLORS[color].fill;ctx.fill();symbol(ctx,color,px,py,2.2,COLORS[color].ink);});
          }
        } else {
          ctx.beginPath();ctx.arc(s.x,s.y,17,0,Math.PI*2);ctx.strokeStyle='#d3dccf';ctx.lineWidth=1.5;ctx.stroke();
          if(!flying) {ctx.beginPath();ctx.strokeStyle='#97ab97';ctx.lineWidth=2;ctx.moveTo(s.x-5,s.y);ctx.lineTo(s.x-1,s.y+4);ctx.lineTo(s.x+6,s.y-5);ctx.stroke();}
        }
      }
      for(const b of bricks) {
        const c=COLORS[b.color];
        roundRect(ctx,b.x-21,b.y-21,42,42,10);ctx.fillStyle=c.fill;ctx.fill();
        roundRect(ctx,b.x-18,b.y-18,36,14,7);ctx.fillStyle='rgba(255,255,255,.12)';ctx.fill();
        symbol(ctx,b.color,b.x,b.y,9,c.ink);
      }
      if(moving) {
        const t=Math.min(1,moving.age/moving.duration),x=moving.x+(moving.tx-moving.x)*t,y=moving.y+(moving.ty-moving.y)*t;
        const vx=moving.tx-moving.x,vy=moving.ty-moving.y,dist=Math.hypot(vx,vy)||1;
        ctx.beginPath();ctx.moveTo(x-vx/dist*20,y-vy/dist*20);ctx.lineTo(x,y);ctx.strokeStyle=COLORS[moving.color].light;ctx.lineWidth=14;ctx.lineCap='round';ctx.stroke();
        ctx.beginPath();ctx.arc(x,y,14,0,Math.PI*2);ctx.fillStyle=COLORS[moving.color].fill;ctx.fill();symbol(ctx,moving.color,x,y,6);
      }
      for(const e of effects) {
        const t=e.age/.42;ctx.save();ctx.globalAlpha=1-t;ctx.strokeStyle=e.bad?'#bd5547':COLORS[e.color].fill;ctx.lineWidth=e.bad?3:2;
        ctx.beginPath();ctx.arc(e.x,e.y,14+t*22,0,Math.PI*2);ctx.stroke();
        if(e.bad) {ctx.beginPath();ctx.moveTo(e.x-8,e.y-8);ctx.lineTo(e.x+8,e.y+8);ctx.moveTo(e.x+8,e.y-8);ctx.lineTo(e.x-8,e.y+8);ctx.stroke();}
        else for(let j=0;j<6;j++){const a=j*Math.PI/3+.2;ctx.fillStyle=COLORS[e.color].fill;ctx.beginPath();ctx.arc(e.x+Math.cos(a)*(12+t*30),e.y+Math.sin(a)*(12+t*30),3*(1-t),0,Math.PI*2);ctx.fill();}
        ctx.restore();
      }
      ctx.textAlign='center';ctx.font='600 14px system-ui, sans-serif';ctx.fillStyle=status==='failed'?'#a34638':INK;ctx.fillText(feedback,195,518);
      ctx.font='12px system-ui, sans-serif';ctx.fillStyle='#768074';ctx.fillText(status==='won'?'每一发都替下一发开了路':'点大圆发射 · 小圆是接下来的颜色',195,542);
      ctx.restore();
    }
    function getState() {
      return {level,status,moving:!!moving,animation:moving?clone(moving):null,shots,remainingBricks:bricks.length,totalBricks:total,
        launchers:launchers.map(s=>({...clone(s),color:s.queue[0]||null,remaining:s.queue.length})),bricks:clone(bricks),feedback,undoDepth:history.length,canUndo:canUndo(),clock};
    }
    return {update,render,input,getState,undo,canUndo,destroy(){destroyed=true;moving=null;effects=[];history=[];}};
  }
  window.MixGames ||= {};
  window.MixGames.color = {title:'撞色开路',shortTitle:'撞色',operation:'点彩球发射，同色消掉，异色撞车。',combination:'发射 × 撞色 × 交叉清障',levels:DATA.map(d=>({name:d.name,hint:d.hint})),create};
})();
