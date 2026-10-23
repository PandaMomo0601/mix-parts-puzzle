import {LEVELS} from './levels.mjs';
import {restore,serialize} from './engine.mjs';
export const STORAGE_KEY='candy-trials-v1';
export function freshProgress(){return {schema:1,completed:[],sessions:{},settings:{music:true,sfx:true,reducedMotion:false},seen:[],last:{}};}
export function normalizeProgress(input){
  const out=freshProgress();if(!input||input.schema!==1)return out;
  const ids=new Set(LEVELS.map(l=>l.id));
  out.completed=[...new Set(Array.isArray(input.completed)?input.completed.filter(id=>ids.has(id)):[])];
  for(const k of Object.keys(out.settings))if(typeof input.settings?.[k]==='boolean')out.settings[k]=input.settings[k];
  out.seen=[...new Set(Array.isArray(input.seen)?input.seen.filter(t=>['queue','tile','tilt'].includes(t)):[])];
  for(const level of LEVELS){try{if(input.sessions?.[level.id]){const state=restore(level,input.sessions[level.id]);out.sessions[level.id]=serialize(level,state);}}catch{/* Discard only a damaged level, preserving other progress. */}}
  for(const type of ['queue','tile','tilt'])if(LEVELS.some(l=>l.id===input.last?.[type]&&l.type===type))out.last[type]=input.last[type];
  return out;
}
export function readProgress(storage){try{return {progress:normalizeProgress(JSON.parse(storage.getItem(STORAGE_KEY))),available:true};}catch{return {progress:freshProgress(),available:false};}}
export function writeProgress(storage,progress){try{storage.setItem(STORAGE_KEY,JSON.stringify(progress));return true;}catch{return false;}}
export function complete(progress,id){if(!LEVELS.some(l=>l.id===id))return false;if(progress.completed.includes(id))return false;progress.completed.push(id);return true;}
