export const COLORS = [
  {name:'草莓',hex:'#F2747B',dark:'#C95060',symbol:'●'},
  {name:'柠檬',hex:'#F5C858',dark:'#CA9630',symbol:'✦'},
  {name:'薄荷',hex:'#68C9AD',dark:'#389C83',symbol:'▲'},
  {name:'蓝莓',hex:'#6AAFE5',dark:'#3C83B9',symbol:'◆'},
  {name:'葡萄',hex:'#B599DD',dark:'#8767B0',symbol:'✿'},
  {name:'蜜桃',hex:'#F3A875',dark:'#CA794B',symbol:'■'},
];
export const CHAPTERS = ['莓果工坊','甜点时间','花园来信','小小伙伴','星空邮局','快乐出游'];
const names=['心动莓莓','小桃气','甜甜橙','薄荷叶','小樱桃','柠檬气泡','快乐布丁','甜筒星期天','彩虹甜甜圈','软绵蛋糕','棒棒糖','下午茶','太阳花','仙人掌','小蘑菇','幸运四叶草','小小盆栽','雨后彩虹','小狐狸','打盹小猫','啵啵小熊','小企鹅','鲸鱼来信','兔兔耳朵','一颗星愿','晚安月亮','起飞啦','土星环游','小小飞碟','星星气球','海边小屋','帆船假日','小火车','花花相机','一杯夏天','快乐工厂'];
// Original 16 × 16 mosaic illustrations. Paint order is part of the authored artwork.
function artwork(id) {
  const g=Array.from({length:16},()=>Array(16).fill(-1));
  const dot=(x,y,c)=>{if(x>=0&&y>=0&&x<16&&y<16)g[y][x]=c;};
  const rect=(x,y,w,h,c)=>{for(let j=y;j<y+h;j++)for(let i=x;i<x+w;i++)dot(i,j,c);};
  const ell=(x,y,rx,ry,c)=>{for(let j=0;j<16;j++)for(let i=0;i<16;i++)if(((i-x)/rx)**2+((j-y)/ry)**2<=1)dot(i,j,c);};
  const tri=(x,y,w,h,c,down=false)=>{for(let j=0;j<h;j++){let ww=Math.max(1,Math.round(w*(down?1-j/h:(j+1)/h)));rect(Math.round(x+(w-ww)/2),y+j,ww,1,c);}};
  const eyes=(y=8)=>{rect(5,y,1,2,4);rect(10,y,1,2,4);};
  const line=(x,y,dx,dy,n,c)=>{for(let k=0;k<n;k++)dot(x+k*dx,y+k*dy,c);};
  switch(id%36){
    case 0: ell(7.5,7,5.8,4.7,0);tri(2,7,12,8,0,true);rect(7,1,2,3,2);tri(2,2,12,3,2,true);for(let y=5;y<12;y+=3)for(let x=4+(y%2);x<12;x+=3)dot(x,y,1);break;
    case 1: ell(5,8,4,5,5);ell(10,8,4,5,0);rect(7,2,2,4,2);ell(10,2,3,1.5,2);line(8,6,0,1,6,5);break;
    case 2: ell(7.5,8,6,6,5);ell(7.5,8,4.5,4.5,1);rect(7,3,1,11,5);rect(3,8,10,1,5);line(4,4,1,1,8,5);line(11,4,-1,1,8,5);rect(7,1,2,2,2);break;
    case 3: ell(7,7,5,6,2);line(4,11,1,-1,7,1);line(5,6,1,0,5,1);line(8,4,0,1,6,1);rect(3,12,2,3,5);break;
    case 4: line(4,9,1,-1,7,2);line(10,9,0,-1,7,2);ell(4,11,3.5,3.5,0);ell(11,10,3.5,3.5,0);ell(10,2,3,1.5,2);dot(3,9,5);dot(10,8,5);break;
    case 5: ell(7.5,8,6.5,4.5,1);rect(1,7,2,3,1);rect(13,7,2,3,1);ell(8,7,4,2,5);ell(11,2,2,1.5,2);break;
    case 6: rect(3,12,10,2,5);tri(2,4,12,9,1);rect(4,4,8,3,5);ell(7,3,2,1,0);eyes(9);break;
    case 7: tri(4,8,8,8,5,true);ell(8,6,5,4,0);ell(6,4,3,3,1);ell(10,4,3,3,4);rect(3,8,11,2,1);break;
    case 8: ell(7.5,8,6.5,6,5);ell(7.5,7,5.5,4.8,0);ell(7.5,8,2.3,2.3,-1);for(let i=0;i<8;i++){let a=i*Math.PI/4;dot(Math.round(7.5+4*Math.cos(a)),Math.round(7+3.7*Math.sin(a)),i%3+1);}break;
    case 9: rect(2,6,12,8,5);rect(2,8,12,2,0);rect(2,12,12,2,0);rect(1,5,14,3,1);rect(7,1,2,4,4);dot(7,0,1);ell(4,5,2,1,0);ell(11,5,2,1,0);break;
    case 10: rect(7,9,2,6,5);ell(7.5,5.5,5.5,5.5,0);ell(7.5,5.5,3.8,3.8,1);ell(7.5,5.5,2.3,2.3,4);ell(7.5,5.5,1,1,0);break;
    case 11: ell(7,13,6,1,4);ell(11,7,3,3,5);ell(11,7,1,1,-1);rect(2,5,9,6,5);ell(6,10,4,3,5);rect(2,4,9,2,1);line(5,1,0,1,2,4);line(8,0,0,1,3,4);break;
    case 12: rect(7,7,2,8,2);ell(4,11,3,1.5,2);ell(11,13,3,1.5,2);for(let i=0;i<8;i++){let a=i*Math.PI/4;ell(7.5+4*Math.cos(a),5.5+4*Math.sin(a),2.4,2.4,1);}ell(7.5,5.5,3,3,5);break;
    case 13: rect(4,12,8,3,5);rect(6,3,4,10,2);ell(7.5,3,1.6,2,2);rect(2,5,3,4,2);rect(3,8,5,2,2);rect(11,3,3,4,2);rect(9,6,4,2,2);ell(8,1,2,1,0);break;
    case 14: rect(5,8,6,7,5);ell(7.5,6,7,5,0);rect(1,8,14,2,0);ell(4,5,1.4,1.4,1);ell(10,4,1.5,1.5,1);ell(8,8,1,1,1);eyes(11);break;
    case 15: line(7,7,0,1,8,2);for(let [x,y] of [[5,4],[10,4],[4,9],[11,9]]){ell(x,y,3.2,3.2,2);}ell(7.5,7,2,2,1);break;
    case 16: tri(3,10,10,5,5,true);rect(2,9,12,2,0);rect(7,4,2,6,2);ell(4,6,3,2,2);ell(11,4,3,2,2);ell(7,2,2,2,1);break;
    case 17: for(let r=7;r>=2;r--)ell(7.5,10,r,r,[0,1,2,3,4,0][7-r]);rect(0,10,16,6,-1);ell(3,11,3,2,3);ell(12,11,3,2,3);break;
    case 18: tri(1,1,6,8,5);tri(9,1,6,8,5);ell(7.5,9,6.5,5,5);tri(2,7,6,6,1,true);tri(8,7,6,6,1,true);eyes(7);ell(7.5,12,1,1,4);break;
    case 19: tri(2,2,5,7,4);tri(9,2,5,7,4);ell(7.5,9,6,5,4);rect(4,8,3,1,3);rect(9,8,3,1,3);dot(7,11,0);rect(1,10,3,1,1);rect(12,10,3,1,1);break;
    case 20: ell(3,3,3,3,5);ell(12,3,3,3,5);ell(7.5,8,6.5,6.5,5);ell(7.5,10,3,2.5,1);eyes(7);rect(7,9,2,1,4);break;
    case 21: ell(7.5,7.5,5.5,7,3);ell(7.5,9,3.5,5,1);eyes(5);tri(6,7,4,2,5,true);rect(3,14,4,2,5);rect(9,14,4,2,5);break;
    case 22: ell(6,9,5.7,4.5,3);tri(10,7,6,7,3,true);rect(12,6,3,4,3);ell(6,11,4,2,2);dot(3,7,4);line(5,4,0,-1,3,3);dot(3,1,3);dot(7,1,3);break;
    case 23: ell(5,4,2,4,5);ell(10,4,2,4,5);ell(5,4,1,3,0);ell(10,4,1,3,0);ell(7.5,10,6,5,5);eyes(9);dot(7,12,0);break;
    case 24: tri(6,0,4,7,1);tri(1,4,14,6,1,true);tri(3,7,10,8,1);tri(5,12,6,4,-1);eyes(6);break;
    case 25: ell(7,7.5,6,7,1);ell(11,5,5.5,5.5,-1);dot(11,12,3);dot(14,9,4);dot(12,1,0);break;
    case 26: tri(5,0,6,5,0);rect(5,4,6,7,5);ell(7.5,6,2,2,3);tri(1,7,4,5,0);tri(11,7,4,5,0);tri(5,11,6,5,1,true);rect(7,11,2,3,0);break;
    case 27: ell(8,7.5,5,5.5,4);for(let y=4;y<12;y++)for(let x=0;x<16;x++)if(Math.abs(y-(11-x*.45))<1.2)dot(x,y,1);ell(6,5,1.6,1,3);break;
    case 28: ell(7.5,5,4,4,3);ell(7.5,8,7,3,4);rect(2,8,12,2,2);dot(3,9,1);dot(7,9,1);dot(11,9,1);line(4,12,-1,1,3,1);line(11,12,1,1,3,1);break;
    case 29: ell(7.5,5,5,5.5,0);tri(6,10,3,3,0);line(7,12,0,1,4,4);ell(5,3,1,2,5);dot(2,12,1);dot(13,3,1);break;
    case 30: rect(3,7,10,8,5);tri(1,1,14,7,0);rect(6,10,4,5,3);rect(4,8,2,2,1);rect(10,8,2,2,1);rect(11,2,2,4,5);break;
    case 31: rect(7,1,1,11,5);tri(8,2,6,9,0);for(let y=2;y<11;y++)rect(7-(y-1),y,y-1,1,1);tri(1,11,14,4,3,true);rect(0,15,16,1,2);break;
    case 32: rect(1,6,10,6,2);rect(9,3,5,9,0);rect(10,4,3,3,3);rect(2,3,3,4,5);rect(0,11,15,2,5);for(let x of [3,8,12])ell(x,13,2,2,4);ell(3,1,2,1,1);break;
    case 33: rect(1,5,14,9,0);rect(3,3,4,3,1);rect(12,4,2,2,5);ell(8,9,4,4,4);ell(8,9,2.5,2.5,3);dot(7,8,1);rect(2,6,3,1,5);break;
    case 34: tri(3,4,10,11,3,true);rect(3,4,10,6,2);rect(4,8,8,4,1);rect(9,0,1,12,0);ell(4,3,3,3,1);ell(4,3,1,1,5);break;
    case 35: rect(2,6,12,8,2);tri(1,3,5,4,0);tri(6,3,5,4,0);rect(12,1,2,6,5);for(let x=4;x<12;x+=3)rect(x,8,2,2,1);rect(6,11,4,3,0);ell(13,0,2,1,1);break;
  }
  return g;
}
export function motif(id){return artwork(id-1);}
export function levelInfo(id){return {id,name:names[(id-1)%36],chapter:CHAPTERS[Math.floor((id-1)%36/6)],chapterIndex:Math.floor((id-1)%36/6)};}
export function rng(seed){let s=seed>>>0;return ()=>{s+=0x6D2B79F5;let t=Math.imul(s^s>>>15,1|s);t^=t+Math.imul(t^t>>>7,61|t);return ((t^t>>>14)>>>0)/4294967296;};}
function frontier(grid){const out=[];for(let x=0;x<grid[0].length;x++)for(let y=grid.length-1;y>=0;y--)if(grid[y][x]>=0){out.push({x,y,color:grid[y][x]});break;}return out;}
export function createLevel(id=1, seed=id*7919+20261022){
  const random=rng(seed), source=motif(id), scale=id===1?1:2;
  const grid=Array.from({length:16*scale},(_,y)=>Array.from({length:16*scale},(_,x)=>source[Math.floor(y/scale)][Math.floor(x/scale)]));
  const clone=grid.map(r=>r.slice()), sequence=[];let serial=0;
  if(id>=4){
    // Capacities deliberately cross colour boundaries: a box must sometimes wait
    // while another colour reveals the rest. The witness simulates these waits.
    const totals=Array(6).fill(0);grid.flat().forEach(c=>{if(c>=0)totals[c]++;});
    const base=id<7?24:id<19?20:16,step=id<7?8:4;
    const capacities=totals.map(total=>{let out=[];while(total>0){let cap=Math.min(total,base+Math.floor(random()*3)*step);out.push(cap);total-=cap;}return out;});
    let active=[];
    while(frontier(clone).length){
      let moved=true;
      while(moved){moved=false;for(let p of frontier(clone)){let box=active.find(b=>b.color===p.color&&b.loaded<b.capacity);if(box){clone[p.y][p.x]=-1;box.loaded++;moved=true;}}active=active.filter(b=>b.loaded<b.capacity);}
      const edge=frontier(clone);if(!edge.length)break;
      const scores=Array(6).fill(0);edge.forEach(p=>scores[p.color]++);
      const choices=scores.map((n,c)=>({n,c})).filter(v=>v.n&&capacities[v.c].length&&!active.some(b=>b.color===v.c)).sort((a,b)=>b.n-a.n);
      if(!choices.length||active.length>=5)throw Error('Artwork needs a new packing witness: '+id);
      const color=choices[0].c,box={id:'box-'+serial++,color,capacity:capacities[color].shift()};sequence.push(box);active.push({...box,loaded:0});
    }
  }else
  while(true){let edge=frontier(clone);if(!edge.length)break;
    let scores=Array(6).fill(0);edge.forEach(p=>scores[p.color]++);
    let colors=scores.map((n,c)=>({n,c})).filter(v=>v.n>0).sort((a,b)=>b.n-a.n);
    // Deliberate same-colour runs form authored release peaks, with fixed seeded tie breaks.
    let color=colors[Math.floor(random()*Math.min(colors.length,id<4?1:2))].c,count=0;
    while(true){let hits=frontier(clone).filter(p=>p.color===color);if(!hits.length)break;for(let p of hits){clone[p.y][p.x]=-1;count++;}}
    const cap=id===1?16:id<7?28:36;
    while(count>0){let capacity=Math.min(cap,count);sequence.push({id:'box-'+serial++,color,capacity});count-=capacity;}
  }
  const lanes=Array.from({length:4},()=>[]),witness=[];
  for(let i=0;i<sequence.length;i++){let lane=id===1?i%4:Math.floor(random()*4);lanes[lane].push(sequence[i]);witness.push(lane);}
  return {...levelInfo(id),seed,grid,lanes,witness,total:grid.flat().filter(c=>c>=0).length};
}
export function dailySeed(date){return [...date].reduce((s,c)=>Math.imul(s^c.charCodeAt(0),16777619)>>>0,2166136261);}
