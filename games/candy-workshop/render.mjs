import {COLORS} from './engine.mjs';
export const art={};
const names=['board-frame','panel-paper','button-primary','button-paper',...Object.values(COLORS).flatMap(c=>['candy-'+c,'socket-'+c])];
export async function loadArt(){
  await Promise.all([...names.map(n=>[n,`assets/art/${n}.png`]),...['belt','belt-tile','beam','nozzle','hopper','gate','loop'].map(n=>[n,`assets/art-machine/${n}.png`])].map(async([n,url])=>{
    const img=new Image();img.src=url;await img.decode();art[n]=img;
  }));
}
const sprite=(ctx,name,x,y,w,h=w)=>{if(art[name])ctx.drawImage(art[name],x,y,w,h);};
const text=(ctx,value,x,y,size=22,color='#614c40',align='center')=>{ctx.font=`600 ${size}px Noto, sans-serif`;ctx.textAlign=align;ctx.textBaseline='middle';ctx.fillStyle=color;ctx.fillText(value,x,y);};
const ease=t=>t*t*(3-2*t);
export function cellPoint(l,index,x,y,size){const inset=size*.115,unit=(size-inset*2)/Math.max(l.width,l.height);return {x:x+inset+(index%l.width+.5)*unit,y:y+inset+(Math.floor(index/l.width)+.5)*unit,size:unit};}
export function picture(ctx,l,filled,x,y,size,{full=false,activeRow=null,emptyAlpha=.45}={}){
  sprite(ctx,'board-frame',x,y,size);const set=new Set(filled);
  for(let i=0;i<l.cells.length;i++){
    const c=l.cells[i],p=cellPoint(l,i,x,y,size);
    ctx.globalAlpha=full||set.has(i)||activeRow===c.y?1:emptyAlpha;
    sprite(ctx,'socket-'+COLORS[c.color],p.x-p.size/2,p.y-p.size/2,p.size);
    if(full||set.has(i)){ctx.globalAlpha=1;sprite(ctx,'candy-'+COLORS[c.color],p.x-p.size/2,p.y-p.size/2,p.size);}
  }
  ctx.globalAlpha=1;
}
export function thumbnail(canvas,l,filled=[],full=false){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);picture(ctx,l,filled,0,0,canvas.width,{full});}
function trayBounds(l,cells){const xs=cells.map(i=>i%l.width),ys=cells.map(i=>Math.floor(i/l.width));return {x:Math.min(...xs),y:Math.min(...ys),w:Math.max(...xs)-Math.min(...xs)+1,h:Math.max(...ys)-Math.min(...ys)+1};}
export function trayPicture(ctx,l,cells,filled,x,y,w,h,{full=false}={}){
  sprite(ctx,'panel-paper',x,y,w,h);const b=trayBounds(l,cells),unit=Math.min((w-30)/b.w,(h-26)/b.h),ox=x+(w-b.w*unit)/2,oy=y+(h-b.h*unit)/2,set=new Set(filled);
  for(const i of cells){const c=l.cells[i],px=ox+(c.x-b.x)*unit,py=oy+(c.y-b.y)*unit;ctx.globalAlpha=set.has(i)||full?1:.6;sprite(ctx,'socket-'+COLORS[c.color],px,py,unit);if(set.has(i)||full){ctx.globalAlpha=1;sprite(ctx,'candy-'+COLORS[c.color],px,py,unit);}}
  ctx.globalAlpha=1;return {b,unit,ox,oy};
}
export function trayThumbnail(canvas,l,t){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);trayPicture(ctx,l,t.cells,[],0,0,canvas.width,canvas.height);}
function belt(ctx,x,y,w,h,time,vertical=false){
  ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();
  if(vertical){ctx.translate(x+w,y);ctx.rotate(Math.PI/2);const unit=w*96/280;for(let dx=-unit+(time*.03)%unit;dx<h+unit;dx+=unit)sprite(ctx,'belt-tile',dx,0,unit,w);}
  else{const unit=h*96/280;for(let dx=x-unit+(time*.05)%unit;dx<x+w+unit;dx+=unit)sprite(ctx,'belt-tile',dx,y,unit,h);}
  ctx.restore();
}
function station(l,id,state){const slot=Math.max(0,state.active.indexOf(id)),w=l.slots===3?208:278,gap=16;return {x:(720-l.slots*w-(l.slots-1)*gap)/2+slot*(w+gap),y:460,w,h:136};}
function ringPoint(t){
  // Positions advance on one visible closed belt; every waiting candy occupies a pocket.
  t=((t%1)+1)%1;
  const y0=400,y1=582,arc=91,straight=390,total=2*straight+2*Math.PI*arc;
  let d=t*total;
  if(d<straight)return {x:161+d,y:y0,size:32};d-=straight;
  if(d<Math.PI*arc){const a=-Math.PI/2+d/arc;return {x:551+Math.cos(a)*arc,y:491+Math.sin(a)*arc,size:32};}d-=Math.PI*arc;
  if(d<straight)return {x:551-d,y:y1,size:32};d-=straight;
  const a=Math.PI/2+d/arc;return {x:161+Math.cos(a)*arc,y:491+Math.sin(a)*arc,size:32};
}
export function loopPoint(index,capacity,time){return ringPoint(index/Math.max(capacity,1)+time/16000);}
function ringPath(start,end){const span=((end-start)%1+1)%1;return Array.from({length:21},(_,i)=>ringPoint(start+span*i/20));}
function along(points,t){const lengths=points.slice(1).map((p,i)=>Math.hypot(p.x-points[i].x,p.y-points[i].y)),total=lengths.reduce((a,b)=>a+b,0);let d=t*total;for(let i=0;i<lengths.length;i++){if(d<=lengths[i]||i===lengths.length-1){const u=lengths[i]?d/lengths[i]:1;return {x:points[i].x+(points[i+1].x-points[i].x)*u,y:points[i].y+(points[i+1].y-points[i].y)*u};}d-=lengths[i];}return points.at(-1);}
function targetGeometry(l,s){const t=l.targets[s.targetIndex];if(!t)return null;const b=trayBounds(l,t.cells),w=Math.min(340,Math.max(170,b.w*28+30)),h=90;return {t,x:(720-w)/2,y:282,w,h};}
function gatePoint(l,lane){return {x:130+lane*(460/Math.max(1,l.lanes.length-1)),y:624,size:34};}
function trayCellPoint(l,t,cell,geom){const b=trayBounds(l,t.cells),unit=Math.min((geom.w-30)/b.w,(geom.h-26)/b.h);return {x:geom.x+(geom.w-b.w*unit)/2+((cell%l.width)-b.x+.5)*unit,y:geom.y+(geom.h-b.h*unit)/2+(Math.floor(cell/l.width)-b.y+.5)*unit,size:unit};}
export function eventPoints(l,before,event,time){
  if(l.mode==='bridge'){
    const slot=Math.max(0,before.active.indexOf(event.source)),x=360+(slot-(l.slots-1)/2)*170;
    const size=490,unit=size*.77/l.width,y=260-(before.row+.5)*unit-size*.115;
    const to=cellPoint(l,event.cell??0,115,y,size);return {from:{x:to.x,y:237,size:to.size},to};
  }
  if(l.mode==='trays'){
    const t=l.trays.find(t=>t.id===event.source),geom=station(l,event.source,before);
    return {from:{x:90,y:384,size:38},via:{x:geom.x+geom.w/2,y:384},to:t?trayCellPoint(l,t,event.cell??t.cells[0],geom):{x:360,y:530,size:30}};
  }
  const total=780+2*Math.PI*91,port=(360-161)/total,intake=(390+Math.PI*91+551-360)/total;
  if(event.type==='feed'){const from=gatePoint(l,event.lane||0),to=loopPoint(before.buffer.length,l.capacity,time+75);return {from,to,path:[from,{x:360,y:624},...ringPath(intake,before.buffer.length/l.capacity+(time+75)/16000)]};}
  const g=targetGeometry(l,before),from=loopPoint(event.bufferIndex||0,l.capacity,time);
  const to=g?trayCellPoint(l,g.t,event.cell??g.t.cells[0],g):{x:360,y:330,size:30};return {from,to,path:[...ringPath((event.bufferIndex||0)/l.capacity+time/16000,port),{x:360,y:372},to]};
}
function visibleFilled(l,s){
  if(l.mode==='bridge')return s.filled;
  if(l.mode==='trays')return l.trays.filter(t=>s.trays.find(x=>x.id===t.id)?.status==='done').flatMap(t=>t.cells);
  return l.targets.slice(0,s.targetIndex).flatMap(t=>t.cells);
}
export function scene(canvas,l,s,time,animation=null){
  const ctx=canvas.getContext('2d');ctx.clearRect(0,0,720,660);
  const e=animation?.event,t=animation?Math.min(1,animation.progress):0;
  if(l.mode==='bridge'){
    belt(ctx,111,0,498,660,time,true);
    const size=490,unit=size*.77/l.width,row=s.row+(e?.type==='advance'?(e.row-s.row)*ease(t):0),y=260-(row+.5)*unit-size*.115;
    picture(ctx,l,s.filled,115,y,size,{activeRow:s.row,emptyAlpha:.62});
    const nozzleW=unit*.72,nozzleH=nozzleW*432/272,nozzleY=237-nozzleH*.89,beamY=nozzleY-70;
    sprite(ctx,'beam',75,beamY,570,570*400/1496);
    for(let col=0;col<l.width;col++){const p=cellPoint(l,col,115,y,size);sprite(ctx,'nozzle',p.x-nozzleW/2,nozzleY,nozzleW,nozzleH);}
    for(let i=0;i<l.slots;i++){
      const p=s.packets.find(p=>p.id===s.active[i]),x=360+(i-(l.slots-1)/2)*170;
      sprite(ctx,'hopper',x-37,beamY-77,74,83);if(p)sprite(ctx,'candy-'+COLORS[p.color],x-23,beamY-57,46);sprite(ctx,'panel-paper',x-41,4,82,37);text(ctx,p?p.remaining:'空位',x,23,22);
    }
  }else if(l.mode==='trays'){
    picture(ctx,l,visibleFilled(l,s),213,2,294,{emptyAlpha:.28});
    belt(ctx,0,331,720,105,time);
    const next=l.stream.slice(s.streamCursor,s.streamCursor+11);for(let i=0;i<next.length;i++){if(i===0&&e?.type==='land')continue;sprite(ctx,'candy-'+COLORS[next[i]],70-i*52,357,52);}
    text(ctx,'来糖 →',610,384,24,'#fff4d8');sprite(ctx,'gate',4,331,126,59);
    for(let i=0;i<l.slots;i++){
      const id=s.active[i],dummy={...s,active:[...s.active]};if(!id)dummy.active.push('__empty'+i);
      const g=id?station(l,id,s):{x:(720-l.slots*(l.slots===3?208:278)-(l.slots-1)*16)/2+i*((l.slots===3?208:278)+16),y:460,w:l.slots===3?208:278,h:136};
      belt(ctx,g.x+g.w/2-23,407,46,76,time,true);
      if(id){const tr=l.trays.find(t=>t.id===id);if(!(e?.type==='dock'&&e.source===id))trayPicture(ctx,l,tr.cells,s.filled,g.x,g.y,g.w,g.h);text(ctx,`${tr.name||id} · 还差 ${s.trays.find(t=>t.id===id).remaining}`,g.x+g.w/2,624,20);}
      else{sprite(ctx,'panel-paper',g.x,g.y,g.w,g.h);text(ctx,'空装填位',g.x+g.w/2,530,23,'#967e68');}
    }
  }else{
    picture(ctx,l,visibleFilled(l,s),240,0,240,{emptyAlpha:.3});
    const g=targetGeometry(l,s);if(g){if(e?.type!=='dock')trayPicture(ctx,l,g.t.cells,s.filled,g.x,g.y,g.w,g.h);text(ctx,`第 ${s.targetIndex+1} / ${l.targets.length} 托 · ${g.t.cells.filter(i=>!s.filled.includes(i)).length} 颗待装`,360,256,20);}
    sprite(ctx,'loop',32,332,656,328);
    for(let i=0;i<s.buffer.length;i++){if(e?.type==='land'&&e.bufferIndex===i)continue;const p=loopPoint(i,l.capacity,time);sprite(ctx,'candy-'+COLORS[s.buffer[i].color],p.x-23,p.y-23,46);}
    text(ctx,`回环带 ${s.buffer.length} / ${l.capacity}`,360,486,25);
    for(let i=0;i<l.lanes.length;i++){const p=gatePoint(l,i);sprite(ctx,'gate',p.x-50,600,100,46);}
  }
  if(animation&&(e.type==='land'||e.type==='feed')){
    const {from,to,via,path}=animation.points,p=ease(t);let x=from.x+(to.x-from.x)*p,y=from.y+(to.y-from.y)*p;
    if(path){const pos=along(path,p);x=pos.x;y=pos.y;}
    if(via){if(p<.55){x=from.x+(via.x-from.x)*p/.55;y=from.y+(via.y-from.y)*p/.55;}else{x=via.x+(to.x-via.x)*(p-.55)/.45;y=via.y+(to.y-via.y)*(p-.55)/.45;}}
    const size=from.size+(to.size-from.size)*p;
    sprite(ctx,'candy-'+COLORS[e.color],x-size/2,y-size/2,size);
  }else if(animation&&e.type==='dock'){
    const tr=l.mode==='trays'?l.trays.find(x=>x.id===e.source):l.targets[e.target];
    if(tr){const b=trayBounds(l,tr.cells),origin=l.mode==='trays'?station(l,e.source,s):targetGeometry(l,s),size=l.mode==='trays'?294:240,boxX=l.mode==='trays'?213:240;
      const dest=cellPoint(l,tr.cells[0],boxX,l.mode==='trays'?2:0,size),unit=size*.77/Math.max(l.width,l.height),p=ease(t);
      const w=origin.w*(1-p)+(b.w*unit+8)*p,h=origin.h*(1-p)+(b.h*unit+8)*p;
      trayPicture(ctx,l,tr.cells,s.filled,origin.x*(1-p)+(dest.x-unit/2-4)*p,origin.y*(1-p)+(dest.y-unit/2-4)*p,w,h,{full:true});
    }
  }
}
