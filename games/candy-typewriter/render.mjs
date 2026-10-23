import {COLORS,clockOf} from './engine.mjs';
export const art={};
const shared=['board-frame','panel-paper','button-primary','button-paper',...Object.values(COLORS).flatMap(c=>['candy-'+c,'socket-'+c])];
export async function loadArt(){
  const sources=[...shared.map(n=>[n,`assets/art/${n}.png`]),['belt-tile','assets/art-machine/belt-tile.png'],...['slot','pipe-h','pipe-v','pipe-h-tile','pipe-v-tile','elbow','joint','nozzle','queue-cover'].map(n=>[n,`assets/art-typewriter/${n}.png`])];
  await Promise.all(sources.map(async([name,url])=>{const img=new Image();img.src=url;await img.decode();art[name]=img;}));
}
const sprite=(ctx,name,x,y,w,h=w)=>{if(art[name])ctx.drawImage(art[name],x,y,w,h);};
const text=(ctx,value,x,y,size=22,color='#614c40')=>{ctx.font=`600 ${size}px Noto,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=color;ctx.fillText(value,x,y);};
const ease=t=>t*t*(3-2*t);
export const slotPoint=i=>({x:150+i*210,y:52});
export function cellPoint(l,index,x,y,size){const inset=size*.115,unit=size*.77/Math.max(l.width,l.height);return {x:x+inset+(index%l.width+.5)*unit,y:y+inset+(Math.floor(index/l.width)+.5)*unit,size:unit};}
export function picture(ctx,l,filled,x,y,size,{full=false,activeRow=null,emptyAlpha=.65}={}){
  sprite(ctx,'board-frame',x,y,size);const set=new Set(filled);
  for(let i=0;i<l.cells.length;i++){const c=l.cells[i],p=cellPoint(l,i,x,y,size);ctx.globalAlpha=full||set.has(i)||activeRow===c.y?1:emptyAlpha;sprite(ctx,'socket-'+COLORS[c.color],p.x-p.size/2,p.y-p.size/2,p.size);if(full||set.has(i)){ctx.globalAlpha=1;sprite(ctx,'candy-'+COLORS[c.color],p.x-p.size/2,p.y-p.size/2,p.size);}}
  ctx.globalAlpha=1;
}
export function thumbnail(canvas,l,filled=[],full=false){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);picture(ctx,l,filled,0,0,canvas.width,{full});}
function belt(ctx,row){ctx.save();ctx.beginPath();ctx.rect(106,280,508,380);ctx.clip();ctx.translate(614,280);ctx.rotate(Math.PI/2);const w=508,u=w*96/280;for(let x=-u+(row*30)%u;x<560;x+=u)sprite(ctx,'belt-tile',x,0,u,w);ctx.restore();}
function flipped(ctx,name,x,y,w,h,flipX=false,flipY=false){
  ctx.save();ctx.translate(x+(flipX?w:0),y+(flipY?h:0));ctx.scale(flipX?-1:1,flipY?-1:1);sprite(ctx,name,0,0,w,h);ctx.restore();
}
function pipeRoute(ctx,startX,endX,levelY,top,bottom){
  const width=12,dx=endX-startX;
  const vertical=(x,a,b)=>{if(b>a)sprite(ctx,'pipe-v-tile',x-width/2,a,width,b-a);};
  const horizontal=(a,b,y)=>{if(Math.abs(b-a)>.1)sprite(ctx,'pipe-h-tile',Math.min(a,b)-1,y-width/2,Math.abs(b-a)+2,width);};
  if(Math.abs(dx)<2){vertical(startX,top,bottom);return;}
  if(Math.abs(dx)<54){
    vertical(startX,top,levelY);horizontal(startX,endX,levelY);vertical(endX,levelY,bottom);
    // Compact articulated cuffs keep short arms connected when two full elbows would collide.
    sprite(ctx,'joint',startX-8,levelY-8,16);sprite(ctx,'joint',endX-8,levelY-8,16);return;
  }
  // Atlas elbow anchors: left (20,100), bottom (304,354) in a 400x384 crop.
  const w=36,h=34.56,right=dx>0,offsetX=25.56,offsetY=22.86;
  vertical(startX,top,levelY-offsetY+1);
  horizontal(startX+(right?offsetX:-offsetX),endX+(right?-offsetX:offsetX),levelY);
  vertical(endX,levelY+offsetY-1,bottom);
  const sourceTopX=right?8.64:27.36;
  flipped(ctx,'elbow',startX-sourceTopX,levelY-25.56,w,h,right,true);
  const endBottomX=right?27.36:8.64;
  flipped(ctx,'elbow',endX-endBottomX,levelY-9,w,h,!right,false);
}
let previousSeq=-1,headMotion=[];
export function resetScene(){previousSeq=-1;headMotion=[];}
export function scene(canvas,l,s,time,subTick=0,pops=[]){
  const ctx=canvas.getContext('2d');ctx.clearRect(0,0,720,660);const clock=clockOf(l),tick=s.tick+subTick,size=490,unit=size*.77/l.width;
  const moving=s.phase==='advancing'?ease(Math.max(0,Math.min(1,1-(s.moveUntil-tick)/clock.rowMoveTicks))):0,row=Math.min(l.height-1,s.row+moving),y=335-(row+.5)*unit-size*.115;
  belt(ctx,row);ctx.save();ctx.beginPath();ctx.rect(100,290,520,370);ctx.clip();picture(ctx,l,s.filled,115,y,size,{activeRow:s.row,emptyAlpha:.72});ctx.restore();
  // All machine surfaces are registered bitmap art. Pipes link each fixed slot to its own moving nozzle.
  sprite(ctx,'panel-paper',55,-2,610,288);
  if(s.seq!==previousSeq){for(let i=0;i<s.slots.length;i++){const slot=s.slots[i],target=slot.x<0?slotPoint(i).x:115+size*.115+(slot.x+.5)*unit,old=headMotion[i];if(!old||old.target!==target)headMotion[i]={from:old?headX(old,time):target,target,start:time};}previousSeq=s.seq;}
  for(let i=0;i<s.slots.length;i++){
    const slot=s.slots[i],p=slotPoint(i),armY=145+i*35,x=headX(headMotion[i],time),block=slot.blockId?s.blocks[slot.blockId]:null;
    pipeRoute(ctx,p.x,x,armY,107,247.3);
    sprite(ctx,'nozzle',x-11,245.36,22,48);
    if(block){sprite(ctx,'candy-'+COLORS[block.color],x-7,257,14);}
  }
  for(let i=0;i<s.slots.length;i++){
    const p=slotPoint(i),slot=s.slots[i],block=slot.blockId?s.blocks[slot.blockId]:null;
    sprite(ctx,'slot',p.x-42,15,84,98);
    if(block&&s.tick>=slot.loadUntilTick)sprite(ctx,'candy-'+COLORS[block.color],p.x-27,p.y-27,54);
    sprite(ctx,'panel-paper',p.x+44,34,51,37);
    text(ctx,block?block.remaining:'空槽',p.x+69.5,52.5,20,block?'#564234':'#a18b75');
  }
  for(const f of s.flights){const progress=Math.min(1,Math.max(0,(tick-f.startTick)/(f.dueTick-f.startTick))),fall=Math.max(0,(progress-.45)/.55),target=cellPoint(l,f.cell,115,y,size),x=fall>0?target.x:headX(headMotion[f.slot],time),cy=290+(target.y-290)*fall*fall,grain=target.size*.9;sprite(ctx,'candy-'+COLORS[f.color],x-grain/2,cy-grain/2,grain);}
  for(const pop of pops){const t=(time-pop.time)/180;if(t<0||t>1)continue;const p=cellPoint(l,pop.cell,115,y,size),scale=1+Math.sin(t*Math.PI)*.12;sprite(ctx,'candy-'+COLORS[pop.color],p.x-p.size*scale/2,p.y-p.size*scale/2,p.size*scale);}
}
function headX(m,time){if(!m)return 100;const t=Math.min(1,Math.max(0,(time-m.start)/45));return m.from+(m.target-m.from)*ease(t);}
