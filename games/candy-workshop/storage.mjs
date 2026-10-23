import {createState,perform,replay,won} from './engine.mjs';
import {LEVELS} from './levels.mjs';
export const SAVE_KEY='mix-candy-workshop-v1';

// The cursor is the number of visually completed events in the last click.
// Rebuild that deterministic transaction so refresh never skips a delivery.
export function restoreProgress(level,record){
  const actions=record?.actions??[];
  if(!Array.isArray(actions)||actions.length>100||actions.some(x=>typeof x!=='string'))throw Error('存档动作无效');
  if(!actions.length){if(record?.cursor!==undefined&&record.cursor!==0)throw Error('空存档进度无效');return {state:createState(level),actions:[],events:[],cursor:0,final:createState(level)};}
  const before=replay(level,actions.slice(0,-1));
  const result=perform(level,before,actions.at(-1));
  if(!result.accepted)throw Error('存档投料顺序无效');
  const cursor=record.cursor??result.events.length;
  if(!Number.isInteger(cursor)||cursor<0||cursor>result.events.length)throw Error('存档进度无效');
  return {state:cursor?result.events[cursor-1].after:before,actions:[...actions],events:result.events,cursor,final:result.state};
}
export function cleanSave(raw){
  const data={version:1,settings:{music:true,sfx:true},current:null,collection:{}};
  if(!raw||raw.version!==1)return data;
  for(const k of ['music','sfx'])if(typeof raw.settings?.[k]==='boolean')data.settings[k]=raw.settings[k];
  if(raw.current){const l=LEVELS.find(l=>l.id===raw.current.levelId);try{if(l){const p=restoreProgress(l,raw.current);data.current={levelId:l.id,actions:p.actions,cursor:p.cursor};}}catch{}}
  for(const l of LEVELS){const r=raw.collection?.[l.id];if(!r||r.levelId!==l.id)continue;
    try{if(won(l,replay(l,r.actions)))data.collection[l.id]={levelId:l.id,actions:[...r.actions],date:typeof r.date==='string'?r.date.slice(0,32):''};}catch{}
  }
  return data;
}
export function loadSave(storage){try{return cleanSave(JSON.parse(storage?.getItem(SAVE_KEY)));}catch{return cleanSave(null);}}
export function writeSave(storage,data){try{if(!storage)return false;storage.setItem(SAVE_KEY,JSON.stringify(data));return true;}catch{return false;}}
