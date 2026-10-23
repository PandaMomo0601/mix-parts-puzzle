import {createState,launch,step,replay,normalizeCommands,won} from './engine.mjs';
import {LEVELS} from './levels.mjs';
export const SAVE_KEY='mix-candy-typewriter-v1';
export const SAVE_VERSION=1;
const copy=value=>structuredClone(value);
export function createRecord(level) { return {levelId:level.id,revision:level.revision||1,commands:[]}; }
export function restoreProgress(level,record=createRecord(level)) {
  if (!record || typeof record!=='object' || record.levelId!==level.id || record.revision!==(level.revision||1)) throw Error('存档版本或关卡不匹配');
  const commands=normalizeCommands(record.commands);
  return {state:replay(level,commands),record:{levelId:level.id,revision:level.revision||1,commands},commands};
}
// Append only commands actually accepted by the engine. RLE changes storage size, never clock order.
export function appendCommand(record,command) {
  if (!record || !Array.isArray(record.commands) || !command) throw Error('存档命令无效');
  return {...record,commands:normalizeCommands([...record.commands,command])};
}
export function undoRecord(level,record) {
  const valid=restoreProgress(level,record).record;
  const index=valid.commands.findLastIndex(command=>command.type==='launch');
  const result=restoreProgress(level,{...valid,commands:index<0?[]:valid.commands.slice(0,index)});
  return {...result,undone:index>=0};
}
export function applyCommand(level,progress,command) {
  if (!progress?.record || !progress?.state) throw Error('游戏进度无效');
  const result=command?.type==='launch'?launch(level,progress.state,command.headId):command?.type==='step' && (command.count===undefined || command.count===1)?step(level,progress.state):null;
  if (!result) throw Error('只可实时提交单步命令');
  const accepted=result.accepted??result.advanced;
  return {...result,accepted,record:accepted?appendCommand(progress.record,result.command):progress.record};
}
export function collectionReceipt(level,record,date=new Date().toISOString()) {
  const restored=restoreProgress(level,record);if(!won(level,restored.state))throw Error('未完成作品不能入柜');
  return {...restored.record,date:typeof date==='string'?date.slice(0,32):''};
}
export function cleanSave(raw,levels=LEVELS) {
  const data={version:SAVE_VERSION,settings:{music:true,sfx:true},current:null,collection:{}};
  if (!raw || raw.version!==SAVE_VERSION) return data;
  for(const key of ['music','sfx'])if(typeof raw.settings?.[key]==='boolean')data.settings[key]=raw.settings[key];
  const find=id=>levels.find(level=>level.id===id);
  if(raw.current){const level=find(raw.current.levelId);try{if(level)data.current=restoreProgress(level,raw.current).record;}catch{}}
  for(const level of levels){const record=raw.collection?.[level.id];try{if(record)data.collection[level.id]=collectionReceipt(level,record,record.date);}catch{}}
  // A final landed-and-exited box is authoritative even if a tab closed before the cabinet write.
  if(data.current && !data.collection[data.current.levelId]) {
    const level=find(data.current.levelId);try{data.collection[level.id]=collectionReceipt(level,data.current,raw.current?.date||'');}catch{}
  }
  return data;
}
export function loadSave(storage,levels=LEVELS) {try{return cleanSave(JSON.parse(storage?.getItem(SAVE_KEY)),levels);}catch{return cleanSave(null,levels);}}
export function writeSave(storage,data) {try{if(!storage)return false;storage.setItem(SAVE_KEY,JSON.stringify(data));return true;}catch{return false;}}
