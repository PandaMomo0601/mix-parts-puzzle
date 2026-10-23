export const KEY='bobo-packing-v1';
export const defaults=()=>({schema:1,unlocked:1,completed:{},settings:{music:true,sfx:true,reducedMotion:false},active:null,daily:{}});
export function sanitize(raw){
  const d=defaults();if(!raw||raw.schema!==1)return d;
  for(let i=1;i<=36;i++){let r=raw.completed?.[i];if(r&&Number.isFinite(r.stars)&&r.stars>=1&&r.stars<=3)d.completed[i]={stars:Math.floor(r.stars),seconds:Math.max(0,Math.min(86400,Number(r.seconds)||0))};}
  while(d.unlocked<36&&d.completed[d.unlocked])d.unlocked++;
  for(let k of Object.keys(d.settings))if(typeof raw.settings?.[k]==='boolean')d.settings[k]=raw.settings[k];
  if(raw.active&&Number.isInteger(raw.active.id)&&raw.active.id>=1&&raw.active.id<=36&&Number.isInteger(raw.active.seed)&&Array.isArray(raw.active.actions)&&raw.active.actions.length<=5000){const a=raw.active;if(a.daily||a.id<=d.unlocked)d.active={id:a.id,seed:a.seed,actions:a.actions,elapsed:Math.max(0,Math.min(86400,Number(a.elapsed)||0)),daily:typeof a.daily==='string'?a.daily:null};}
  if(raw.daily&&typeof raw.daily==='object')for(const [date,r] of Object.entries(raw.daily).slice(-60))if(/^\d{4}-\d{2}-\d{2}$/.test(date)&&r?.done)d.daily[date]={done:true,stars:Math.max(1,Math.min(3,Number(r.stars)||1))};
  return d;
}
export function load(storage=globalThis.localStorage){try{return sanitize(JSON.parse(storage.getItem(KEY)));}catch{return defaults();}}
export function save(data,storage=globalThis.localStorage){try{storage.setItem(KEY,JSON.stringify(data));return true;}catch{return false;}}
export function complete(data,id,seconds,rescued,daily){const stars=rescued?2:3;if(daily){data.daily[daily]={done:true,stars};}else{const old=data.completed[id];data.completed[id]={stars:Math.max(old?.stars||0,stars),seconds:old?Math.min(old.seconds,seconds):seconds};data.unlocked=Math.max(data.unlocked,Math.min(36,id+1));}data.active=null;return stars;}
