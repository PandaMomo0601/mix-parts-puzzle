import {COLORS,motif} from './levels.mjs';
import {edgeCells} from './engine.mjs';
export function rounded(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,Math.min(r,w/2,h/2));}
export function jelly(ctx,x,y,size,color,alpha=1){
  const c=COLORS[color];if(!c)return;ctx.save();ctx.globalAlpha*=alpha;const r=size*.28;
  ctx.fillStyle=c.dark;rounded(ctx,x,y+size*.12,size,size*.87,r);ctx.fill();
  const g=ctx.createLinearGradient(x,y,x+size,y+size);g.addColorStop(0,'#ffffff');g.addColorStop(.14,c.hex);g.addColorStop(1,c.hex);ctx.fillStyle=g;rounded(ctx,x,y,size,size*.86,r);ctx.fill();
  ctx.fillStyle='#ffffff64';rounded(ctx,x+size*.17,y+size*.12,size*.44,size*.13,size*.07);ctx.fill();ctx.restore();
}
export function drawMotif(canvas,id,muted=false){
  const dpr=Math.min(devicePixelRatio||1,2),w=canvas.clientWidth||200,h=canvas.clientHeight||200;canvas.width=w*dpr;canvas.height=h*dpr;const ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);let g=motif(id),size=Math.min(w,h)/17,ox=(w-size*16)/2,oy=(h-size*16)/2;ctx.globalAlpha=muted?.45:1;for(let y=0;y<16;y++)for(let x=0;x<16;x++)if(g[y][x]>=0)jelly(ctx,ox+x*size,oy+y*size,size*.93,g[y][x]);
}
export class GameRenderer {
  constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.flows=[];this.exits=[];this.particles=[];this.selections=[];this.shake=0;this.resize();}
  resize(){const r=this.canvas.getBoundingClientRect();this.w=r.width;this.h=r.height;let d=Math.min(devicePixelRatio||1,2);this.canvas.width=Math.round(r.width*d);this.canvas.height=Math.round(r.height*d);this.ctx.setTransform(d,0,0,d,0,0);}
  geometry(s){const n=s.grid.length,cell=Math.min((this.w-28)/n,(this.h-116)/n);return {cell,ox:(this.w-cell*n)/2,oy:Math.max(5,(this.h-116-cell*n)/2),n};}
  slotPoint(slot){let size=Math.min(60,(this.w-38)/5),gap=7,total=size*5+gap*4;return slot===5?{x:this.w-47,y:this.h-111,size:37}:{x:(this.w-total)/2+slot*(size+gap)+size/2,y:this.h-39,size};}
  add(event,s,now,reduced){const geo=this.geometry(s);for(let [i,p] of event.transfers.entries()){let to=this.slotPoint(p.slot);this.flows.push({x:geo.ox+(p.x+.5)*geo.cell,y:geo.oy+(p.y+.5)*geo.cell,to,color:p.color,start:now+i*5,duration:reduced?70:330,side:(i%2?1:-1)*(20+i%5*7),size:geo.cell*.96});}
    for(let b of event.completed){this.exits.push({...b,start:now+(reduced?80:360),duration:reduced?100:380});const q=this.slotPoint(b.slot);for(let k=0;k<(reduced?4:18);k++)this.particles.push({x:q.x,y:q.y-18,vx:(Math.random()-.5)*140,vy:-40-Math.random()*110,color:b.color,start:now+300,life:600+Math.random()*200});}this.particles=this.particles.slice(-200);
  }
  selection(box,now){this.selections.push({id:box.id,start:now});}
  drawBox(box,point,now,scale=1,alpha=1){const c=this.ctx,size=point.size*scale,x=point.x-size/2,y=point.y-size*.38,col=COLORS[box.color];c.save();c.globalAlpha=alpha;c.fillStyle='#31554b16';c.beginPath();c.ellipse(point.x,y+size*.88,size*.48,size*.12,0,0,Math.PI*2);c.fill();c.fillStyle=col.dark;rounded(c,x,y+5,size,size*.73,10);c.fill();c.fillStyle=col.hex;rounded(c,x,y,size,size*.70,10);c.fill();c.fillStyle='#fff7';rounded(c,x+2,y-4,size*.34,9,3);c.fill();rounded(c,x+size*.64,y-4,size*.34,9,3);c.fill();c.fillStyle='#254d4b';c.font=`700 ${Math.max(10,size*.22)}px "Noto Sans SC", "Bobo Symbols", sans-serif`;c.textAlign='center';c.fillText(COLORS[box.color].symbol+' '+box.loaded+'/'+box.capacity,point.x,y+size*.35);c.fillStyle='#ffffff50';rounded(c,x+7,y+size*.5,size-14,5,3);c.fill();c.fillStyle='#fffdeb';if(box.loaded) {rounded(c,x+7,y+size*.5,(size-14)*box.loaded/box.capacity,5,3);c.fill();}c.restore();}
  draw(s,now,reduced=false){const c=this.ctx,w=this.w,h=this.h;c.clearRect(0,0,w,h);const {cell,ox,oy,n}=this.geometry(s);c.save();
    // An intact, faint picture is the visual destination; only the lowest surviving cell per column can move.
    c.fillStyle='#fffaf280';rounded(c,ox-9,oy-7,n*cell+18,n*cell+15,22);c.fill();
    const edges=new Set(edgeCells(s).map(p=>p.x+','+p.y));
    for(let y=0;y<n;y++)for(let x=0;x<n;x++){let orig=s.level.grid[y][x],color=s.grid[y][x];if(orig<0)continue;
      if(color<0){c.fillStyle=COLORS[orig].hex+'12';rounded(c,ox+x*cell,oy+y*cell,cell*.9,cell*.9,cell*.24);c.fill();continue;}
      jelly(c,ox+x*cell,oy+y*cell,cell*.94,color,1);
      if(edges.has(x+','+y)){c.strokeStyle='#fffce6';c.lineWidth=Math.max(1,cell*.11);rounded(c,ox+x*cell+.4,oy+y*cell+.4,cell*.87,cell*.85,cell*.24);c.stroke();}
    }
    // Recessed slots and their conveyor track.
    c.fillStyle='#cbded1';rounded(c,8,h-75,w-16,68,22);c.fill();c.fillStyle='#e4ecdb';rounded(c,12,h-71,w-24,59,18);c.fill();
    for(let k=0;k<5;k++){let q=this.slotPoint(k);c.fillStyle='#b8cdbc6b';rounded(c,q.x-q.size/2,q.y-q.size*.43,q.size,q.size*.76,12);c.fill();c.setLineDash([4,4]);c.strokeStyle='#99b5a378';c.lineWidth=1.5;c.stroke();c.setLineDash([]);c.fillStyle='#8ba593';c.font='600 17px "Noto Sans SC", "Bobo Symbols", sans-serif';c.textAlign='center';c.fillText('+',q.x,q.y+4);}
    if(s.rescued){let q=this.slotPoint(5);c.fillStyle='#e1e7c7';rounded(c,q.x-26,q.y-23,52,46,12);c.fill();c.fillStyle='#7e9579';c.font='9px "Noto Sans SC", "Bobo Symbols", sans-serif';c.textAlign='center';c.fillText('临时打包位',q.x,q.y+31);}
    for(let box of s.active){let pop=this.selections.find(v=>v.id===box.id),t=pop?Math.min(1,(now-pop.start)/250):1;this.drawBox(box,this.slotPoint(box.slot),now,reduced?1:.87+Math.sin(t*Math.PI/2)*.13);}
    this.selections=this.selections.filter(p=>now-p.start<300);
    this.exits=this.exits.filter(b=>now<b.start+b.duration);for(let b of this.exits){let q=this.slotPoint(b.slot),t=Math.max(0,(now-b.start)/b.duration);if(t<.1)this.drawBox(b,q,now,1.04);else{q={...q,x:q.x+(reduced?0:t*t*150),y:q.y-(reduced?0:Math.sin(t*Math.PI)*35)};this.drawBox(b,q,now,1-t*.25,1-t);}}
    this.flows=this.flows.filter(p=>now<p.start+p.duration);for(let p of this.flows){let t=Math.max(0,Math.min(1,(now-p.start)/p.duration)),e=t*t*(3-2*t),x=p.x+(p.to.x-p.x)*e+Math.sin(t*Math.PI)*p.side,y=p.y+(p.to.y-10-p.y)*t*t,sz=p.size*(1-t*.12);c.globalAlpha=1;for(let j=1;j<4&&!reduced;j++){c.fillStyle=COLORS[p.color].hex; c.globalAlpha=.12-j*.025;c.beginPath();c.arc(x-j*1.5,y-j*4,sz*.35,0,Math.PI*2);c.fill();}c.globalAlpha=1;jelly(c,x-sz/2,y-sz/2,sz,p.color);}
    this.particles=this.particles.filter(p=>now<p.start+p.life);for(let p of this.particles){if(now<p.start)continue;let t=(now-p.start)/1000,fade=1-(now-p.start)/p.life;c.fillStyle=COLORS[p.color].hex;c.globalAlpha=fade;let x=p.x+p.vx*t,y=p.y+p.vy*t+190*t*t;c.save();c.translate(x,y);c.rotate(t*5);rounded(c,-3,-3,6,7,2);c.fill();c.restore();}c.globalAlpha=1;c.restore();
  }
}
