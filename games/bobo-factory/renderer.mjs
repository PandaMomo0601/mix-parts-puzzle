import {BOARD_BOUNDS as B, COLORS} from './levels.mjs';
const CANDY={coral:[52,56,416,416],gold:[1069,56,416,416],mint:[52,544,416,416],blue:[560,545,416,416]};
const TRAY={coral:[34,28,480,480],gold:[1026,28,480,480],mint:[34,509,480,480],blue:[530,508,480,480]};
const DIR={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2};
const ease=t=>1-Math.pow(1-t,3);
function imageFile(src){return new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(new Error('Resource unavailable: '+src));i.src=src;});}
export class FactoryRenderer {
  constructor(canvas,dispatch){this.canvas=canvas;this.dispatch=dispatch;this.ctx=canvas.getContext('2d');this.dctx=dispatch.getContext('2d');this.time=0;this.effects=[];this.pending=null;this.preview=null;this.shake=null;this.parcels=[];this.reduced=false;this.dpr=Math.min(devicePixelRatio||1,2);this.resize();}
  async load(){[this.candy,this.tray]=await Promise.all([imageFile('./assets/candy-atlas.png'),imageFile('./assets/tray-atlas.png'),imageFile('./assets/hero.webp'),imageFile('./assets/factory-workbench.png')]);this.ready=true;}
  async loadExtras(){[this.shipping,this.mascot]=await Promise.all([imageFile('./assets/shipping-atlas.png'),imageFile('./assets/mascot-atlas.png')]);}
  resize(){this.w=this.canvas.clientWidth||324;this.h=this.canvas.clientHeight||434;this.canvas.width=Math.round(this.w*this.dpr);this.canvas.height=Math.round(this.h*this.dpr);this.s=this.w/B.width;this.dispatch.width=230;this.dispatch.height=156;}
  xy(p){return {x:(p.x-B.x)*this.s,y:(p.y-B.y)*this.s};}
  sprite(ctx,img,rect,x,y,w,h=w,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(img,...rect,x-w/2,y-h/2,w,h);ctx.restore();}
  drawCandy(ctx,color,x,y,size,{arrow=null,alpha=1,squash=1,mark=true}={}){this.sprite(ctx,this.candy,CANDY[color],x,y,size*squash,size/Math.sqrt(squash),alpha);if(arrow){ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y-size*.045);ctx.rotate(DIR[arrow]);ctx.shadowColor='#79380d33';ctx.shadowBlur=2;ctx.beginPath();ctx.moveTo(-size*.19,-size*.05);ctx.lineTo(size*.055,-size*.05);ctx.lineTo(size*.055,-size*.14);ctx.lineTo(size*.21,0);ctx.lineTo(size*.055,size*.14);ctx.lineTo(size*.055,size*.05);ctx.lineTo(-size*.19,size*.05);ctx.closePath();ctx.fillStyle='#fffbe9';ctx.strokeStyle=COLORS[color].ink;ctx.lineWidth=size*.023;ctx.stroke();ctx.fill();ctx.restore();}if(mark)this.mark(ctx,color,x+size*.25,y+size*.25,size*.095,alpha);}
  mark(ctx,color,x,y,r,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle='#fff8e8';ctx.strokeStyle=COLORS[color].ink;ctx.lineWidth=1;ctx.beginPath();if(color==='coral'){ctx.moveTo(x,y-r);ctx.lineTo(x+r,y+r*.7);ctx.lineTo(x-r,y+r*.7);}else if(color==='blue'){ctx.moveTo(x,y-r);ctx.lineTo(x+r,y);ctx.lineTo(x,y+r);ctx.lineTo(x-r,y);}else if(color==='gold'){ctx.rect(x-r*.8,y-r*.8,r*1.6,r*1.6);}else ctx.arc(x,y,r,0,Math.PI*2);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();}
  drawTray(ctx,color,x,y,size,{filled=false,alpha=1,scale=1}={}){size*=scale;const rect=TRAY[color];this.sprite(ctx,this.tray,rect,x,y,size,size,alpha);if(filled){this.drawCandy(ctx,color,x,y-size*.03,size*.76,{alpha,mark:false});const rimY=rect[1]+296;ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(this.tray,rect[0],rimY,480,184,x-size/2,y-size/2+size*(296/480),size,size*(184/480));ctx.restore();}else this.mark(ctx,color,x,y+size*.04,size*.075,alpha*.65);}
  highlight(move,color='#78a888'){if(!move?.target)return;const c=this.ctx,a=this.xy(move.piece),b=this.xy(move.target);c.save();c.strokeStyle=color;c.lineWidth=4*this.s;c.lineCap='round';c.setLineDash([3*this.s,7*this.s]);c.globalAlpha=.62;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke();c.setLineDash([]);c.strokeStyle=color;c.lineWidth=2.4*this.s;c.beginPath();c.roundRect(b.x-23*this.s,b.y-21*this.s,46*this.s,42*this.s,10*this.s);c.stroke();c.restore();}
  burst(x,y,color){if(this.reduced)return;for(let i=0;i<12;i++){const angle=i*Math.PI/6+.2;this.effects.push({x,y,color,vx:Math.cos(angle)*(14+Math.random()*23),vy:Math.sin(angle)*(15+Math.random()*25),age:0,life:520+Math.random()*180});}}
  draw(state,dt=16){if(!this.ready)return;this.time+=dt;const c=this.ctx;c.setTransform(this.dpr,0,0,this.dpr,0,0);c.clearRect(0,0,this.w,this.h);c.fillStyle='#b39e6829';for(let row=0;row<8;row++)for(let col=0;col<6;col++){const p=this.xy({x:75+col*48,y:112+row*48});c.beginPath();c.arc(p.x,p.y,1.2,0,Math.PI*2);c.fill();}if(this.preview)this.highlight(this.preview,this.preview.legal?'#75a47b':'#d78670');for(const h of state.holes){const p=this.xy(h);this.drawTray(c,h.color,p.x,p.y,47*this.s);}
    const pend=this.pending; if(pend){const p=this.xy(pend.event.target);this.drawTray(c,pend.event.color,p.x,p.y,47*this.s,{alpha:pend.phase==='fly'?1-pend.phaseT:1,filled:pend.phase!=='slide'});}
    for(const p of state.pieces){const q=this.xy(p);let x=q.x,y=q.y;const blocked=this.shake&&this.shake.ids.includes(p.id);if(blocked){if(!this.reduced)x+=Math.sin(this.shake.age*.07)*3*Math.max(0,1-this.shake.age/400);c.save();c.strokeStyle='#d77d68';c.lineWidth=2;c.beginPath();c.roundRect(x-22*this.s,y-21*this.s,44*this.s,42*this.s,10);c.stroke();c.restore();}const scale=this.preview?.piece?.id===p.id&&!this.reduced?1+Math.sin(this.time/180)*.026:1;this.drawCandy(c,p.color,x,y,46*this.s*scale,{arrow:p.direction});}
    if(pend&&pend.phase==='slide'){const a=this.xy(pend.event.piece),b=this.xy(pend.event.target),t=ease(pend.phaseT);this.drawCandy(c,pend.event.color,a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t,46*this.s,{arrow:pend.event.piece.direction,squash:1+.07*Math.sin(t*Math.PI)});}
    if(pend&&pend.phase==='fly'){const b=this.xy(pend.event.target),t=ease(pend.phaseT);this.drawTray(c,pend.event.color,b.x+(this.w*.50-b.x)*t,b.y+(this.h+32-b.y)*t,47*this.s,{filled:true,scale:1-.2*t,alpha:1-pend.phaseT*.65});}
    if(this.shake){this.shake.age+=dt;if(this.shake.age>600)this.shake=null;}
    this.effects=this.effects.filter(e=>{e.age+=dt;const t=e.age/e.life;if(t>=1)return false;c.save();c.globalAlpha=1-t;c.fillStyle=e.color;const x=e.x+e.vx*t,y=e.y+e.vy*t+25*t*t;c.translate(x,y);c.rotate(t*5);c.fillRect(-2,-2,4,4);c.restore();return true;});this.drawDispatch(state,dt);
  }
  drawBox(ctx,x,y,size,colors,{closed=false,alpha=1}={}) {
    if(!this.shipping)return;
    if(closed){this.sprite(ctx,this.shipping,[1026,240,480,480],x,y+size*.03,size*.92,size*.92,alpha);return;}
    this.sprite(ctx,this.shipping,[38,240,480,480],x,y,size,size,alpha);
    for(let i=0;i<Math.min(6,colors.length);i++){
      const cx=x+(-.22+(i%3)*.22)*size,cy=y+(-.105+Math.floor(i/3)*.17)*size;
      this.drawCandy(ctx,colors[i],cx,cy,size*.245,{alpha,mark:false});
    }
    // The front paper wall occludes the lower candy edges. Source pixels stay intact.
    ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(this.shipping,38,556,480,164,x-size/2,y-size/2+size*(316/480),size,size*(164/480));ctx.restore();
  }
  drawMascot(canvas,pose='attentive_watch'){
    if(!canvas||!this.mascot)return;const rects={welcome_wave:[16,28,480,480],attentive_watch:[528,28,480,480],happy_celebrate:[1040,28,480,480],puzzled_think:[16,516,480,480],hug_box:[528,516,480,480],satisfied_thumbsup:[1040,516,480,480]};
    const ctx=canvas.getContext('2d');canvas.width=240;canvas.height=240;ctx.clearRect(0,0,240,240);ctx.drawImage(this.mascot,...rects[pose],0,0,240,240);
  }
  drawDispatch(state,dt){
    const c=this.dctx;c.setTransform(2,0,0,2,0,0);c.clearRect(0,0,115,78);
    const t=this.parcelAnimation,count=state.moves-(this.pending?1:0);
    const keepFull=count>0&&((t!==null&&t!==undefined)||(state.status==='won'&&!this.pending));
    const batch=count%6||(keepFull?6:0),matches=state.matches.slice(Math.max(0,count-batch),count);
    if(this.shipping){
      if(t!==null&&t!==undefined){const closed=t>.26,travel=Math.max(0,(t-.36)/.64);const bounce=1+Math.sin(Math.min(1,t/.36)*Math.PI)*.06;this.drawBox(c,57+travel*100,39,96*bounce,matches.map(m=>m.color),{closed,alpha:1-travel*.7});}
      else this.drawBox(c,57,39,96,matches.map(m=>m.color),{closed:state.status==='won'&&!this.pending});
    }
    else for(let i=0;i<matches.length;i++)this.drawTray(c,matches[i].color,29+(i%3)*29,25+Math.floor(i/3)*26,33,{filled:true});
  }
  drawReward(canvas,colors){const ctx=canvas.getContext('2d');canvas.width=300;canvas.height=260;ctx.scale(2,2);ctx.clearRect(0,0,150,130);if(this.shipping)this.drawBox(ctx,75,66,155,colors.slice(-6));else for(let i=0;i<Math.min(colors.length,6);i++){const x=36+(i%3)*39,y=40+Math.floor(i/3)*34;this.drawTray(ctx,colors[i],x,y,47,{filled:true});}}
}
