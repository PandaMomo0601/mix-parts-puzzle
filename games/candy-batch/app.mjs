import { LEVELS } from './levels.mjs';
import { COLORS, NAMES, createState, front, ledger, won, chooseDrop, launch, land, deadlocked, solve } from './engine.mjs';
import { SAVE_KEY, loadSave, writeSave, readJournal, undoJournal } from './storage.mjs';
import { FactoryAudio } from './audio.mjs';

const $ = (s, root=document) => root.querySelector(s);
const screen = $('#screen'), modal = $('#modal'), sprites = {};
let storage; try { storage=localStorage; } catch { storage=null; }
const saved = loadSave(storage), audio = new FactoryAudio(saved.settings);
let level, state, journal=[], flights=[], stamps=[], page='play', clock=0, lastFrame=0, lastSpawn=-1000;
let burst=0, lastLandSound=-1000, lastSave=-1000, dirty=false, completed=false, deadShown=false;
let slots=[], previousWaiting=new Set(), resumed=new Map(), toastTimer, hintId=null;
const metrics={ landings:0, autoResumes:0, completed:0 };
const home = new URL('../../index.html?v=r12', location.href).href;
const icon = c => `assets/art/candy-${COLORS[c]}.png`;
const button = (id,text,primary=false) => `<button class="plate${primary?' primary':''}" id="${id}">${text}</button>`;
const escape = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(text) {
  $('#toast').textContent=text; $('#toast').classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2500);
}
function saveNow() {
  saved.current={levelId:level.id,journal:journal.map(e=>[...e])};
  if (!writeSave(storage,saved) && !saveNow.warned) { saveNow.warned=true; toast('浏览器未允许保存，收藏暂留在本次打开中'); }
  dirty=false; lastSave=clock;
}
function openModal(title,html) {
  modal.innerHTML=`<div class="modal-sheet paper"><button class="modal-close" aria-label="关闭">×</button><h2 id="modal-title">${title}</h2>${html}</div>`;
  $('.modal-close',modal).onclick=()=>modal.close();
  if (!modal.open) modal.showModal();
}
function closeModal() { if(modal.open)modal.close(); }
function listen(id, fn) { const el=$(`#${id}`); if(el)el.onclick=fn; }
function start(index, restore=null) {
  closeModal(); level=LEVELS[index]; journal=restore?.map(e=>[...e])||[];
  state=readJournal(level,journal); flights=[]; stamps=[]; slots=Array(level.slots).fill(null);
  state.active.forEach((id,i)=>slots[i]=id); previousWaiting=new Set(); resumed.clear();
  completed=won(level,state)&&Boolean(saved.collection[level.id]); deadShown=false; hintId=null; burst=0; page='play'; lastSpawn=-1000;
  renderPlay(); saveNow();
}
function renderPlay() {
  page='play';
  screen.innerHTML=`<section class="play-page"><nav class="topbar" aria-label="游戏导航"><a class="back-link" href="${home}" target="_top">‹ 合集</a><button id="levels-button">第 ${LEVELS.indexOf(level)+1} / 6 关</button><button id="collection-button">收藏 ${Object.keys(saved.collection).length}/6</button><button id="sound-button">声音</button></nav>
    <div class="play-title"><h1>${level.name}</h1><div class="progress"><strong id="filled-label">0</strong><small id="total-label">/ ${level.grid.length*level.grid[0].length} 颗</small></div></div>
    <p class="instruction" id="instruction">${level.focus}</p>
    <div class="board-shell"><div class="board-wrap"><canvas id="board" width="800" height="800" role="img" aria-label="${level.name}糖画，亮起的空纸托可接糖"></canvas></div></div>
    <div class="feedback" id="feedback" role="status">亮纸托接糖，每列从下往上装</div>
    <section class="work-area"><div class="area-heading">装填台 <span id="work-label"></span></div><div class="slots" id="slots" style="--slots:${level.slots}"></div></section>
    <section class="stock-area"><div class="area-heading">选一盒糖 <span>点一下，自动装填</span></div><div class="stock" id="stock">${level.packets.map(p=>`<button class="packet paper" data-packet="${p.id}" aria-label="${NAMES[p.color]} ${p.count} 颗"><img class="packet-candy" src="${icon(p.color)}" alt=""><strong class="packet-count">${p.count}</strong><small class="packet-name">${NAMES[p.color]}</small></button>`).join('')}</div></section>
    <div class="tools">${button('undo','撤回一盒')}${button('restart','重新装')}${button('hint','看提示')}</div><p class="footer-note">一关一幅收藏 · 糖和料盒全部用完才完成</p></section>`;
  listen('levels-button',showLevels); listen('collection-button',showCollection); listen('sound-button',showSettings);
  listen('undo',undo); listen('restart',()=>{audio.play('undo');start(LEVELS.indexOf(level));}); listen('hint',showHint);
  $('#stock').onclick=e=>{const el=e.target.closest('[data-packet]');if(el)launchPacket(el.dataset.packet);};
  updateUI(); drawBoard($('#board'),level,state,clock);
}
function launchPacket(id) {
  void audio.unlock();
  const next=launch(level,state,id);
  if(!next){ audio.play('blocked',{volume:.6});toast('装填台满了，等一盒用完，或撤回一盒');return; }
  state=next; journal.push(['L',id]); slots[slots.indexOf(null)]=id;
  hintId=null; burst=0; deadShown=false; dirty=true; audio.play('tap');
  $('#feedback').textContent='糖来了…'; updateUI(); saveNow();
}
function undo() {
  if(!state.actions.length)return;
  audio.play('undo'); const before=undoJournal(journal); start(LEVELS.indexOf(level),before);
  toast('已撤回上一盒，糖和位置一起恢复');
}
function updateUI() {
  if(page!=='play')return;
  const q=ledger(level,state); $('#filled-label').textContent=q.filled;
  $('#work-label').textContent=`${state.active.length} / ${level.slots} 位`;
  $('#undo').disabled=!state.actions.length;
  for(let i=0;i<slots.length;i++)if(slots[i]&&!state.active.includes(slots[i]))slots[i]=null;
  for(const id of state.active)if(!slots.includes(id))slots[slots.indexOf(null)]=id;
  const waiting=new Set();
  $('#slots').innerHTML=slots.map(id=>{
    if(!id)return '<div class="slot paper"><span class="slot-count">空位</span></div>';
    const p=state.boxes.find(b=>b.id===id);
    const pouring=flights.some(f=>f.boxId===id)||state.fill.some((_,c)=>front(level,state,c)?.color===p.color);
    if(!pouring)waiting.add(id);
    const waking=(resumed.get(id)||0)>clock;
    return `<div class="slot paper occupied ${pouring?'pouring':'waiting'}${waking?' resuming':''}" data-box="${id}"><img class="slot-candy" src="${icon(p.color)}" alt="${NAMES[p.color]}"><strong class="slot-count">${p.remaining}</strong><span class="slot-status">${waking?'接着装！':pouring?'装填中':'等下一层'}</span></div>`;
  }).join('');
  previousWaiting=waiting;
  for(const el of $('#stock').children){
    const p=state.boxes.find(b=>b.id===el.dataset.packet);
    el.disabled=p.status!=='stock'; el.classList.toggle('used',p.status==='done');
    el.classList.toggle('hinted',p.id===hintId);
  }
}
function geometry(canvas,l) {
  const w=canvas.width,h=canvas.height,size=Math.min(w/l.grid[0].length,h/l.grid.length);
  return {size,x:(w-size*l.grid[0].length)/2,y:(h-size*l.grid.length)/2};
}
function drawBoard(canvas,l,s,time,full=false) {
  if(!canvas)return;const ctx=canvas.getContext('2d');const g=geometry(canvas,l);
  ctx.clearRect(0,0,canvas.width,canvas.height);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  for(let r=0;r<l.grid.length;r++)for(let c=0;c<l.grid[0].length;c++){
    const color=l.grid[r][c],filled=full||r>=l.grid.length-s.fill[c],isFront=!filled&&r===l.grid.length-1-s.fill[c];
    const x=g.x+c*g.size,y=g.y+r*g.size;
    ctx.globalAlpha=filled?.90:isFront?1:.24;
    ctx.drawImage(sprites[`socket-${color}`],x,y,g.size,g.size);
    if(filled){
      ctx.globalAlpha=1;
      const stamp=!full&&l===level?stamps.find(a=>a.col===c&&a.row===r):null;
      const scale=stamp?1+.10*Math.sin(Math.PI*Math.max(0,1-(time-stamp.at)/150)):1;
      const d=g.size*(scale-1)/2;
      ctx.drawImage(sprites[`candy-${color}`],x-d,y-d,g.size*scale,g.size*scale);
    }
  }
  ctx.globalAlpha=1;
  if(!full&&l===level)for(const f of flights){
    const t=Math.min(1,Math.max(0,(time-f.at)/f.duration));
    const targetY=g.y+f.row*g.size, y=-g.size+(targetY+g.size)*t*t;
    ctx.drawImage(sprites[`candy-${f.color}`],g.x+f.col*g.size,y,g.size,g.size);
  }
}
function frame(now) {
  const dt=lastFrame?Math.min(now-lastFrame,50):0;lastFrame=now;
  if(!document.hidden&&page==='play'&&!modal.open){
    clock+=dt;
    let changed=false;
    for(const f of [...flights])if(clock>=f.at+f.duration){
      state=land(level,state,f);journal.push(['D',f.boxId,f.col,f.row,f.color]);
      flights=flights.filter(x=>x!==f);stamps.push({...f,at:clock});
      burst++;metrics.landings++;dirty=true;changed=true;
      if(clock-lastLandSound>55){audio.play('land',{pitch:1+(burst%12)*.035,volume:.45});lastLandSound=clock;}
      if(!state.active.includes(f.boxId))audio.play('pack',{pitch:1.12,volume:.6});
    }
    stamps=stamps.filter(f=>clock-f.at<150);
    if(clock-lastSpawn>=24){
      const next=chooseDrop(level,state,flights);
      if(next){
        if(previousWaiting.has(next.boxId)){
          resumed.set(next.boxId,clock+1400);metrics.autoResumes++;
          $('#feedback').textContent=`${NAMES[next.color]}接着装！`;
          $('#feedback').classList.add('resuming');
        }
        flights.push({...next,at:clock,duration:280+next.row/level.grid.length*90});lastSpawn=clock;changed=true;
      }
    }
    if(changed){
      updateUI();
      if(![...resumed.values()].some(t=>t>clock)){
        $('#feedback').classList.remove('resuming');
        $('#feedback').textContent=burst?`一口气装好 ${burst} 颗${flights.length?'…':'！'}`:'选一盒糖，开始装填';
      }
    }
    if(!flights.length&&!chooseDrop(level,state)){
      if(won(level,state)&&!completed)finish();
      else if(deadlocked(level,state)&&!deadShown){deadShown=true;showDeadlock();}
    }
    if(dirty&&clock-lastSave>200)saveNow();
    drawBoard($('#board'),level,state,clock);
  }
  requestAnimationFrame(frame);
}
function finish() {
  completed=true;metrics.completed++;audio.play('win');
  saved.collection[level.id]={levelId:level.id,journal:journal.map(e=>[...e]),date:new Date().toISOString()};saveNow();
  const i=LEVELS.indexOf(level),q=ledger(level,state);
  openModal('这一盒，收藏啦',`<p>${level.name} · ${q.total} 颗糖，刚刚好</p><div class="reward"><canvas width="640" height="640" aria-label="完成的${level.name}"></canvas></div><p>糖已用完 · 料盒已用完 · 空纸托 0</p>${button('next-level',i<5?'装下一盒':'再看我的收藏',true)}${button('view-collection','放进收藏柜看看')}`);
  drawBoard($('.reward canvas',modal),level,state,clock,true);
  listen('next-level',()=>i<5?start(i+1):showCollection());listen('view-collection',showCollection);
  $('#collection-button').textContent=`收藏 ${Object.keys(saved.collection).length}/6`;
}
function showDeadlock() {
  audio.play('blocked',{volume:.6});
  const needs=[...new Set(state.fill.map((_,c)=>front(level,state,c)?.color).filter(Boolean))].map(c=>NAMES[c]).join('、');
  openModal('给下一盒留个位置',`<p>现在能接糖的纸托需要 ${needs}，<br>装填台上的盒子都在等下一层。</p><p>撤回上一盒，换个顺序就能再试。</p>${button('dead-undo','撤回一盒',true)}${button('dead-restart','重新装这一盒')}`);
  listen('dead-undo',()=>{closeModal();undo();});listen('dead-restart',()=>start(LEVELS.indexOf(level)));
}
function showLevels() {
  openModal('今天装哪一盒',`<p>六幅糖画都可以直接试玩</p><div class="level-list">${LEVELS.map((l,i)=>`<button class="level-choice${l===level?' current':''}" data-level="${i}"><strong>${i+1}. ${l.name}</strong><small>${l.grid.length*l.grid[0].length} 颗 · ${saved.collection[l.id]?'已收藏':l.slots+' 个工作位'}</small></button>`).join('')}</div><div class="rules"><span><b>点料盒：</b>直接进入装填台，不用选位置。</span><span><b>看亮纸托：</b>每列从下往上装，颜色相同就落糖。</span><span><b>会自动续填：</b>没有位置就等，出现同色纸托便继续。</span></div>`);
  $('.level-list',modal).onclick=e=>{const b=e.target.closest('[data-level]');if(b){const i=Number(b.dataset.level);i===LEVELS.indexOf(level)?closeModal():start(i);}};
}
function showHint() {
  if(flights.length||chooseDrop(level,state)){toast('糖正在落，等这一批装完再看提示');return;}
  const result=solve(level,state,60000);
  if(result.path?.length){hintId=result.path[0];updateUI();const p=state.boxes.find(b=>b.id===hintId);toast(`试试这盒 ${p.count} 颗${NAMES[p.color]}糖`);}
  else if(won(level,state))toast('这一盒已经在收藏柜里了');
  else toast(result.exhausted?'先给下一种颜色留一个空位':'这条路暂时装不完，撤回上一盒再试试');
}
function showCollection() {
  closeModal();saveNow();page='collection';
  screen.innerHTML=`<section class="collection-page"><nav class="topbar"><button id="back-play">‹ 继续装</button><strong>我的糖画柜</strong><a class="back-link" href="${home}" target="_top">合集</a></nav><div class="collection-heading"><h1>每一盒，都是你装的</h1><p>已收藏 ${Object.keys(saved.collection).length} / 6 幅<br>点开糖画，看看这一盒的甜。</p></div><div class="shelf">${LEVELS.map((l,i)=>`<button class="collect-card paper${saved.collection[l.id]?'':' locked'}" data-collect="${i}"><canvas class="thumb" width="400" height="400" aria-label="${l.name}${saved.collection[l.id]?'已收藏':'未完成'}"></canvas><strong>${l.name}</strong><small>${saved.collection[l.id]?l.grid.length*l.grid[0].length+' 颗 · 已收藏':'第 '+(i+1)+' 关 · 等你来装'}</small></button>`).join('')}</div></section>`;
  listen('back-play',()=>{renderPlay();});
  [...$('.shelf').children].forEach((card,i)=>{
    const l=LEVELS[i],record=saved.collection[l.id];drawBoard($('canvas',card),l,record?readJournal(l,record.journal):createState(l),clock,Boolean(record));
    card.onclick=()=>showCollectDetail(i);
  });
}
function showCollectDetail(i) {
  const l=LEVELS[i],record=saved.collection[l.id];
  if(!record){start(i);return;}
  openModal(l.name,`<div class="reward"><canvas width="640" height="640" aria-label="收藏的${l.name}"></canvas></div><p>${l.story}<br>${l.grid.length*l.grid[0].length} 颗糖 · ${l.packets.length} 盒全部用完</p>${button('replay-level','再装一盒',true)}${button('back-shelf','放回收藏柜')}`);
  drawBoard($('.reward canvas',modal),l,readJournal(l,record.journal),clock,true);
  listen('replay-level',()=>start(i));listen('back-shelf',closeModal);
}
function showSettings() {
  void audio.unlock();
  openModal('这一盒的声音',`<div class="settings"><label>背景音乐<input id="music-setting" type="checkbox" ${saved.settings.music?'checked':''}></label><label>落糖音效<input id="sfx-setting" type="checkbox" ${saved.settings.sfx?'checked':''}></label><p>沿用打包厂的背景音乐。第一次点击后开始播放。</p></div>${button('sound-done','继续装',true)}<p class="credits">音乐：syncopika · happy tune（CC BY 3.0）<br>音效：Kenney（CC0）<br><a href="assets/audio/ATTRIBUTION.txt" target="_blank" rel="noopener">声音资源与许可</a> · 试玩 v0.1.0</p>`);
  for(const k of ['music','sfx'])$(`#${k}-setting`).onchange=e=>{saved.settings[k]=e.target.checked;audio.setSettings(saved.settings);saveNow();};
  listen('sound-done',closeModal);
}
document.addEventListener('pointerdown',()=>{void audio.unlock();},{once:true});
window.addEventListener('pagehide',()=>{if(level)saveNow();});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&level)saveNow();});
modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});

async function boot() {
  try {
    await Promise.all(Object.entries(COLORS).flatMap(([c,name])=>['candy','socket'].map(kind=>new Promise((resolve,reject)=>{
      const img=new Image();img.onload=()=>{sprites[`${kind}-${c}`]=img;resolve();};img.onerror=reject;img.src=`assets/art/${kind}-${name}.png`;
    }))));
    $('#loading').hidden=true;screen.hidden=false;
    const query=new URLSearchParams(location.search),selected=Number(query.get('level'));
    const current=saved.current;
    if(query.has('level')&&Number.isInteger(selected)&&selected>=1&&selected<=6)start(selected-1);
    else if(current)start(LEVELS.findIndex(l=>l.id===current.levelId),current.journal);
    else start(0);
    if(query.get('qa')==='1')Object.defineProperty(window,'__CANDY_QA__',{value:()=>JSON.parse(JSON.stringify({level:level.id,state,ledger:ledger(level,state),flights:flights.length,settled:flights.length===0&&!chooseDrop(level,state),page,journal,metrics,saveKey:SAVE_KEY,audio:audio.status,collection:Object.keys(saved.collection)}))});
    requestAnimationFrame(frame);
  } catch(error) {
    console.error(error);$('#loading').innerHTML='<h1>糖果还没准备好</h1><p>检查网络后，重新打开这一盒。</p><button class="plate" id="retry">重新加载</button>';listen('retry',()=>location.reload());
  }
}
void boot();
