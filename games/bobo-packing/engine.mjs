import {createLevel} from './levels.mjs';
export function createSession(id=1,seed){const level=createLevel(id,seed);return {level,grid:level.grid.map(r=>r.slice()),lanes:level.lanes.map(r=>r.map(b=>({...b}))),active:[],packed:0,moves:0,rescued:false,status:'playing',actions:[],elapsed:0};}
export function edgeCells(s){const cells=[];for(let x=0;x<s.grid[0].length;x++)for(let y=s.grid.length-1;y>=0;y--)if(s.grid[y][x]>=0){cells.push({x,y,color:s.grid[y][x]});break;}return cells;}
export function canFlow(s){return edgeCells(s).some(p=>s.active.some(b=>b.color===p.color&&b.loaded<b.capacity));}
export function selectBox(s,lane){
  if(s.status!=='playing'||!Number.isInteger(lane)||lane<0||lane>3||!s.lanes[lane].length)return null;
  const slot=[0,1,2,3,4].find(slot=>!s.active.some(b=>b.slot===slot));if(slot===undefined)return null;
  const b={...s.lanes[lane].shift(),loaded:0,slot};s.active.push(b);s.moves++;s.actions.push({type:'select',lane});return b;
}
export function advance(s,limit=16){
  if(s.status!=='playing')return {transfers:[],completed:[],status:s.status};
  const transfers=[];let progress=true;
  while(transfers.length<limit&&progress){progress=false;
    for(const p of edgeCells(s)){if(transfers.length>=limit)break;let box=s.active.find(b=>b.color===p.color&&b.loaded<b.capacity);if(!box)continue;
      s.grid[p.y][p.x]=-1;box.loaded++;s.packed++;transfers.push({...p,slot:box.slot,boxId:box.id});progress=true;
    }
  }
  const completed=s.active.filter(b=>b.loaded===b.capacity).map(b=>({...b}));s.active=s.active.filter(b=>b.loaded<b.capacity);
  if(s.packed===s.level.total&&s.active.length===0&&s.lanes.every(l=>!l.length))s.status='won';
  else if(transfers.length===0&&s.active.filter(b=>b.slot<5).length===5&&!canFlow(s))s.status='failed';
  return {transfers,completed,status:s.status};
}
export function rescue(s){
  if(s.rescued||!['playing','failed'].includes(s.status)||!s.active.length)return false;
  let box=s.active.filter(b=>b.slot<5).sort((a,b)=>(b.capacity-b.loaded)-(a.capacity-a.loaded))[0];if(!box)return false;
  box.slot=5;s.rescued=true;s.status='playing';s.actions.push({type:'rescue'});return true;
}
export function settle(s){let events;do{events=advance(s,1000);}while(events.transfers.length&&s.status==='playing');return s.status;}
export function replay(id,seed,actions=[]){const s=createSession(id,seed);if(!Array.isArray(actions)||actions.length>5000)throw Error('Invalid saved actions');for(const a of actions){if(a.type==='select'){if(!selectBox(s,a.lane))throw Error('Invalid saved selection');settle(s);}else if(a.type==='rescue'){if(!rescue(s))throw Error('Invalid saved rescue');settle(s);}else throw Error('Invalid saved action');}return s;}
export function hintLane(s){const edge=edgeCells(s);return s.lanes.map((l,i)=>({i,b:l[0]})).filter(x=>x.b).map(x=>({...x,score:edge.filter(p=>p.color===x.b.color).length})).sort((a,b)=>b.score-a.score)[0]?.i??-1;}
