import {LEVELS,MODES} from './levels.mjs';
import {COLORS,createState,applyAction,undo,solve,serialize,restore,tilePlacements,remainingCount} from './engine.mjs';
import {readProgress,writeProgress,complete,freshProgress} from './storage.mjs';
import {FactoryAudio} from './audio.mjs';
const $=id=>document.getElementById(id),NAMES={coral:'草莓',gold:'柠檬',mint:'薄荷',blue:'蓝莓'},ARROWS={up:'↑',right:'→',down:'↓',left:'←'},DIR_NAMES={up:'向上',right:'向右',down:'向下',left:'向左'};
const assets={},screen=$('screen'),modal=$('modal');
let storage;try{storage=globalThis.localStorage;}catch{storage=null;}
let {progress}=storage?readProgress(storage):{progress:freshProgress()};
const audio=new FactoryAudio(progress.settings);
let current=null,state=null,view='home',selected=null,hint=null,busy=false,epoch=0,toastTimer,focusBeforeModal=null;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){if(storage&&!writeProgress(storage,progress))toast('浏览器暂时无法保存，当前这一局仍可继续。');}
function saveSession(){progress.sessions[current.id]=serialize(current,state);progress.last[current.type]=current.id;save();}
function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.add('show');toastTimer=setTimeout(()=>{$('toast').classList.remove('show');$('toast').textContent='';},2700);}
const img=(type,color,extra='')=>`<img class="${type==='candy'?'candy':''} ${extra}" src="./assets/art/${type}-${color}.png" alt="" draggable="false">`;
const pos=c=>`--x:${c.x};--y:${c.y}`;
const mode=()=>MODES.find(m=>m.id===current?.type);
function doneCount(type){return LEVELS.filter(l=>l.type===type&&progress.completed.includes(l.id)).length;}
function openDialog(body){focusBeforeModal=document.activeElement;modal.innerHTML=`<section class="modal-sheet paper">${body}</section>`;if(!modal.open)modal.showModal();modal.querySelector('[data-close]')?.addEventListener('click',closeDialog);modal.querySelector('button,input')?.focus();}
function closeDialog(){if(modal.open)modal.close();if(focusBeforeModal?.isConnected)focusBeforeModal.focus({preventScroll:true});}
const closeButton=()=>'<button class="modal-close" data-close aria-label="关闭">×</button>';
modal.addEventListener('click',e=>{if(e.target===modal)closeDialog();});
modal.addEventListener('cancel',()=>{if(focusBeforeModal?.isConnected)queueMicrotask(()=>focusBeforeModal.focus({preventScroll:true}));});

function drawNine(ctx,image,x,y,w,h,border=18){
  if(!image)return;const s=Math.round(Math.min(image.width,image.height)*.125),sx=[0,s,image.width-s],sy=[0,s,image.height-s],sw=[s,image.width-2*s,s],sh=[s,image.height-2*s,s],dx=[x,x+border,x+w-border],dy=[y,y+border,y+h-border],dw=[border,w-2*border,border],dh=[border,h-2*border,border];
  for(let j=0;j<3;j++)for(let i=0;i<3;i++)ctx.drawImage(image,sx[i],sy[j],sw[i],sh[j],dx[i],dy[j],dw[i],dh[j]);
}
function drawCollection(canvas,level,{filled=true}={}){
  const w=360,h=300;canvas.width=w*2;canvas.height=h*2;const c=canvas.getContext('2d');c.scale(2,2);c.clearRect(0,0,w,h);
  const cell=Math.min(52,240/level.width,230/level.height),bw=level.width*cell+30,bh=level.height*cell+30,x=(w-bw)/2,y=(h-bh)/2;
  drawNine(c,assets['board-frame'],x,y,bw,bh,18);
  for(const p of level.cells){const px=x+15+p.x*cell,py=y+15+p.y*cell;c.drawImage(assets[`socket-${p.color}`],px,py,cell,cell);if(filled)c.drawImage(assets[`candy-${p.color}`],px,py,cell,cell);}
}
function thumbnails(){for(const c of screen.querySelectorAll('canvas[data-level]'))drawCollection(c,LEVELS.find(l=>l.id===c.dataset.level));}
function clearToast(){clearTimeout(toastTimer);$('toast').classList.remove('show');$('toast').textContent='';}
function home(){clearToast();epoch++;busy=false;closeDialog();view='home';render();window.scrollTo({top:0,behavior:'instant'});}
function renderHome(){
 screen.innerHTML=`<section class="page"><div class="hero"><img src="./assets/hero.webp" alt="糖果工厂里亮晶晶的糖果礼盒"><div class="hero-copy"><p class="kicker">啵啵打包厂 · 新玩法试玩</p><h1>糖果新工坊</h1><p>三种装盒方法，哪一种更让你想再来一关？</p></div></div><nav class="home-nav"><button class="plate primary" id="collection">我的糖盒 · ${progress.completed.length}/12</button><button class="plate" id="settings">音乐与设置</button></nav><div class="mode-list">${MODES.map(m=>`<button class="mode-card paper" data-mode="${m.id}" aria-label="试玩${m.name}"><canvas class="thumb" data-level="${LEVELS.find(l=>l.type===m.id&&l.id.endsWith('2')).id}" aria-hidden="true"></canvas><div><span class="kicker">${m.letter} · ${m.verb}</span><h2>${m.name}</h2><p>${m.description}</p><span class="enter">${doneCount(m.id)?`已收藏 ${doneCount(m.id)}/4 盒 · 继续试玩`:'4 个关卡 · 开始试玩'} →</span></div></button>`).join('')}</div><p class="home-note">每关装好一盒，收藏的就是亲手完成的作品。<br>所有关卡自由选择，可以随时撤回。</p></section>`;
 screen.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{const type=b.dataset.mode,levels=LEVELS.filter(l=>l.type===type);const last=LEVELS.find(l=>l.id===progress.last[type]);load(last&&!progress.completed.includes(last.id)?last:levels.find(l=>!progress.completed.includes(l.id))||levels[0]);});
 $('collection').onclick=showCollection;$('settings').onclick=showSettings;thumbnails();
}
function instruction(){
 if(state.status==='stuck')return '这一步让后面的糖找不到位置了。撤回一步，换个顺序。';
 if(current.type==='queue'){const color=current.cells[state.filled.length]?.color;return color?`下一格需要${NAMES[color]}糖。看看哪一列后面更顺路。`:'整盒糖画，已经完成。';}
 if(current.type==='tile')return selected?'亮起的位置都能放。点一个落点，给剩下的糖留好空间。':'先点选一块连体糖，再点盒里的左上落点。';
 return current.id==='t1'&&state.moves===0?'点右边把手试试：一倾，整盘糖都会动。':'点方向把手。糖滑进同色模位就装好，其他模位可以经过。';
}
function renderBoard(){
 const filled=new Map(state.filled.map(c=>[`${c.x},${c.y}`,c]));
 const targets=new Map(current.cells.map((c,i)=>[`${c.x},${c.y}`,{...c,index:i}]));
 const placements=selected?tilePlacements(current,state,selected):[];
 let html='';
 for(let y=0;y<current.height;y++)for(let x=0;x<current.width;x++){
  const k=`${x},${y}`,target=targets.get(k),packed=filled.get(k),anchor=placements.some(p=>p.x===x&&p.y===y),hinted=hint?.piece===selected&&hint.x===x&&hint.y===y;
  html+=`<div class="cell ${packed?'filled':''} ${target&&current.type==='queue'&&target.index===state.filled.length?'target-next':''}" style="${pos({x,y})}">${target?img('socket',target.color):''}${packed?img('candy',packed.color):''}${target&&current.type==='queue'&&!packed?`<span class="cell-number">${target.index+1}</span>`:''}${current.type==='tile'?`<button class="board-hit ${anchor?'anchor':''} ${hinted?'hinted':''}" data-x="${x}" data-y="${y}" ${!selected||busy?'disabled':''} aria-label="第${y+1}行第${x+1}列${anchor?'，可放置':''}${target?`，${NAMES[target.color]}模位`:''}"></button>`:''}</div>`;
 }
 if(current.type==='tilt'){
  html+=(current.walls||[]).map(p=>`<div class="cell wall" style="${pos(p)}"><img src="./assets/art/barrier.png" alt="固定挡板"></div>`).join('');
  html+=state.pieces.map(p=>`<div class="cell loose" data-piece="${p.id}" style="${pos(p)}">${img('candy',p.color)}</div>`).join('');
 }
 return `<div class="board-shell" style="max-width:${Math.min(380,current.width*62+48)}px"><div id="board" class="board" style="--cols:${current.width};--rows:${current.height}" role="group" aria-label="${current.name}，已装${state.filled.length}颗，还有${remainingCount(current,state)}颗未装">${html}<span class="sr-only">${current.type==='tilt'?state.pieces.map(p=>`${NAMES[p.color]}糖在第${p.y+1}行第${p.x+1}列`).join('；'):''}</span></div></div>`;
}
function renderQueues(){return `<section class="queue-area"><p class="area-label">从这里取糖 · 每列只取最前一颗</p><div class="lanes" style="--lanes:${current.queues.length}">${current.queues.map((q,i)=>{const rest=q.slice(state.heads[i]);return `<button class="lane paper ${rest.length?'':'empty'} ${hint?.lane===i?'hinted':''}" data-lane="${i}" ${busy||!rest.length||state.status!=='playing'?'disabled':''} aria-label="第${i+1}列，${rest.length?`前排${NAMES[rest[0]]}，剩余${rest.length}颗`:'已取完'}"><span class="lane-title">第 ${i+1} 列</span>${rest.length?`<span class="head">${img('candy',rest[0])}</span><span class="color-name">${NAMES[rest[0]]}</span>${rest.slice(1).map(c=>`<span class="queued">${img('candy',c)}</span>`).join('')}`:'<span>已取完</span>'}</button>`;}).join('')}</div></section>`;}
function renderTiles(){return `<section class="tiles-area"><p class="area-label">选一块，再放进盒里 · 方向固定</p><div class="tiles">${current.tiles.filter(t=>state.remaining.includes(t.id)).map(t=>{const w=Math.max(...t.cells.map(c=>c.x))+1,h=Math.max(...t.cells.map(c=>c.y))+1;return `<button class="tile-card paper ${selected===t.id?'selected':''}" data-tile="${t.id}" ${busy||state.status!=='playing'?'disabled':''} aria-label="选择第${t.id.slice(1)}块糖，${t.cells.length}颗" aria-pressed="${selected===t.id}"><span class="mini-shape" style="--w:${w};--h:${h}">${t.cells.map(c=>`<img src="./assets/art/candy-${c.color}.png" style="${pos(c)}" alt="${NAMES[c.color]}">`).join('')}</span><small>第 ${t.id.slice(1)} 块 · ${t.cells.length} 颗</small></button>`;}).join('')}</div></section>`;}
function renderTilt(){return `<div class="tilt-controls">${['up','left','down','right'].map(d=>`<button class="plate ${hint?.direction===d?'hinted':''}" data-direction="${d}" aria-label="${DIR_NAMES[d]}倾盘" ${busy||state.status!=='playing'?'disabled':''}>${ARROWS[d]}</button>`).join('')}</div><p class="board-caption">同色模位才会接走糖；装好的糖不再挡路。</p>`;}
function renderPlay(){
 const levels=LEVELS.filter(l=>l.type===current.type),m=mode(),next=current.type==='queue'?current.cells[state.filled.length]:null;
 screen.innerHTML=`<section class="page ${busy?'busy':''}"><header class="topbar"><button class="plate" id="back" ${busy?'disabled':''}>‹ 玩法</button><strong>${m.letter} · ${m.name}</strong><button class="plate" id="settings" ${busy?'disabled':''} aria-label="音乐与设置">♫ 设置</button></header><nav class="level-tabs" aria-label="关卡">${levels.map((l,i)=>`<button class="level-tab plate ${current.id===l.id?'current':''} ${progress.completed.includes(l.id)?'done':''}" data-level-select="${l.id}" ${busy?'disabled':''} aria-label="第${i+1}关，${l.name}">${progress.completed.includes(l.id)?'<span>✓ </span>':''}第${i+1}盒</button>`).join('')}</nav><div class="play-title"><div><h1>${current.name}</h1><p>${current.tag}</p></div><div class="progress"><strong>${state.filled.length} / ${current.cells.length}</strong>颗糖已装好</div></div><div class="instruction paper" role="status" aria-live="polite">${next?`<span class="next-icon">${img('candy',next.color)}</span>`:''}<p id="instruction">${instruction()}</p><button class="plate" id="help" aria-label="查看玩法说明" ${busy?'disabled':''}>?</button></div>${renderBoard()}${current.type==='queue'?renderQueues():current.type==='tile'?renderTiles():renderTilt()}<div class="tools"><button class="plate" id="undo" ${busy||!state.history.length?'disabled':''}>↶ 撤回</button><button class="plate" id="hint" ${busy||state.status!=='playing'?'disabled':''}>看一步</button><button class="plate" id="restart" ${busy?'disabled':''}>重新装</button></div><p class="help-note">${current.type==='tilt'?'方向键也能倾盘 · ':''}可以随时撤回 · Z 撤回 · H 提示</p></section>`;
 $('back').onclick=home;$('settings').onclick=showSettings;$('help').onclick=showHelp;$('undo').onclick=doUndo;$('hint').onclick=showHint;$('restart').onclick=askRestart;
 screen.querySelectorAll('[data-level-select]').forEach(b=>b.onclick=()=>load(LEVELS.find(l=>l.id===b.dataset.levelSelect)));
 screen.querySelectorAll('[data-lane]').forEach(b=>b.onclick=()=>act({lane:Number(b.dataset.lane)}));
 screen.querySelectorAll('[data-tile]').forEach(b=>b.onclick=()=>{selected=selected===b.dataset.tile?null:b.dataset.tile;hint=null;audio.play('tap');render();});
 screen.querySelectorAll('[data-x]').forEach(b=>{b.onclick=()=>{if(selected)act({piece:selected,x:Number(b.dataset.x),y:Number(b.dataset.y)});};b.onpointerenter=()=>previewPlacement(Number(b.dataset.x),Number(b.dataset.y));b.onfocus=b.onpointerenter;b.onpointerleave=clearGhost;b.onblur=clearGhost;});
 screen.querySelectorAll('[data-direction]').forEach(b=>b.onclick=()=>act({direction:b.dataset.direction}));
}
function clearGhost(){screen.querySelectorAll('.ghost').forEach(n=>n.remove());}
function previewPlacement(x,y){clearGhost();if(!selected||busy||!tilePlacements(current,state,selected).some(p=>p.x===x&&p.y===y))return;const t=current.tiles.find(t=>t.id===selected);$('board').insertAdjacentHTML('beforeend',t.cells.map(c=>`<div class="cell ghost" style="${pos({x:x+c.x,y:y+c.y})}">${img('candy',c.color)}</div>`).join(''));}
function render(){if(view==='home')renderHome();else if(view==='collection')renderCollection();else renderPlay();}
function load(level,{fresh=false}={}){
 clearToast();epoch++;closeDialog();busy=false;current=level;selected=null;hint=null;view='play';
 state=createState(level);if(!fresh&&progress.sessions[level.id]){try{const saved=restore(level,progress.sessions[level.id]);if(saved.status!=='won')state=saved;}catch{delete progress.sessions[level.id];}}
 if(level.type==='tilt'&&state.moves&&solve(level,state,{limit:12000}).status==='unsolvable')state.status='stuck';
 saveSession();render();window.scrollTo({top:0,behavior:'instant'});void audio.unlock();
 if(!progress.seen.includes(level.type)){progress.seen.push(level.type);save();showHelp();}
 else if(state.status==='stuck')showFailure();
}
async function act(action){
 if(busy||modal.open||!state||view!=='play'||state.status!=='playing')return;
 const activeEpoch=epoch,prev=structuredClone(state),beforeRect=$('board').getBoundingClientRect();
 const result=applyAction(current,state,action);
 if(!result.accepted){audio.play('blocked');toast(result.reason==='color'?'先看盒里需要的颜色，再选前排糖。':result.reason==='fit'?'这块在这里放不下。试试亮起的落点。':'这个方向没有糖能移动，换个方向看看。');return;}
 busy=true;selected=null;hint=null;
 if(current.type==='tilt'&&state.status==='playing'&&solve(current,state,{limit:12000}).status==='unsolvable')state.status='stuck';
 if(state.status==='won')complete(progress,current.id);
 saveSession();void audio.unlock();audio.play('move');render();
 const reduced=progress.settings.reducedMotion||matchMedia('(prefers-reduced-motion: reduce)').matches,duration=reduced?0:current.type==='tilt'?430:270,animations=[];
 if(duration&&current.type==='tilt'){
  for(const p of prev.pieces){const n=screen.querySelector(`[data-piece="${p.id}"]`);const dest=state.pieces.find(v=>v.id===p.id);
   if(n&&dest){const dx=(p.x-dest.x)*beforeRect.width/current.width,dy=(p.y-dest.y)*beforeRect.height/current.height;animations.push(n.animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'translate(0,0)'}],{duration,easing:'cubic-bezier(.24,.68,.24,1)'}).finished.catch(()=>{}));}
  }
  for(const dest of result.event.removed){
   const p=prev.pieces.find(v=>v.id===dest.id),packed=screen.querySelector(`.cell.filled[style="${pos(dest)}"] .candy`);
   if(packed)packed.style.opacity='0';
   const n=document.createElement('div');n.className='cell loose';n.style.cssText=pos(dest);n.innerHTML=img('candy',p.color);$('board').append(n);
   const dx=(p.x-dest.x)*beforeRect.width/current.width,dy=(p.y-dest.y)*beforeRect.height/current.height;
   animations.push(n.animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'translate(0,0) scale(.93)'}],{duration,easing:'cubic-bezier(.24,.68,.24,1)',fill:'forwards'}).finished.catch(()=>{}));
  }
 }
 if(duration&&current.type!=='tilt'){const newest=current.type==='queue'?[state.filled.at(-1)]:result.event.cells;for(const c of newest){const el=screen.querySelector(`.cell.filled[style="${pos(c)}"] .candy`);if(el)animations.push(el.animate([{transform:'scale(.65)',opacity:.2},{transform:'scale(1.08)',opacity:1,offset:.7},{transform:'scale(1)',opacity:1}],{duration}).finished.catch(()=>{}));}}
 await Promise.all([new Promise(r=>setTimeout(r,duration)),...animations]);if(epoch!==activeEpoch)return;
 busy=false;audio.play('land');render();
 if(state.status==='won'){audio.play('pack');audio.play('win');showWin();}
 else if(state.status==='stuck')showFailure();
}
function doUndo(){if(busy||!state?.history.length)return;closeDialog();undo(state);selected=null;hint=null;audio.play('undo');saveSession();render();toast('退回一步，换个办法装。');}
function askRestart(){if(busy)return;openDialog(`${closeButton()}<p class="kicker">慢慢来，也很好</p><h2 id="modal-title">重新装这盒？</h2><p>当前摆放会回到开局。<br>已经收藏的糖盒会保留。</p><button class="plate primary" id="restart-yes">重新开始</button><button class="plate" id="restart-no">继续想一想</button>`);$('restart-yes').onclick=()=>load(current,{fresh:true});$('restart-no').onclick=closeDialog;}
function showHint(){if(busy||!state||state.status!=='playing')return;const result=solve(current,state,{limit:30000});if(result.status==='unsolvable'){toast('这个局面已经无法装满，可以撤回再试。');return;}if(result.status==='limit'){toast('这盒还需要想一想，可以先撤回一步。');return;}hint=result.actions[0];if(hint?.piece)selected=hint.piece;audio.play('tap');render();toast(current.type==='queue'?`可以先取第 ${hint.lane+1} 列。`:current.type==='tile'?`第 ${hint.piece.slice(1)} 块，试试标出的落点。`:`可以先${DIR_NAMES[hint.direction]}倾盘。`);}
function showFailure(){openDialog(`<p class="kicker">换个顺序，就有新路</p><h2 id="modal-title">这盒卡住了</h2><p>${current.type==='queue'?'需要的颜色被压在队列后面了。':current.type==='tile'?'剩下的糖块填不进这些空位了。':'这一轮移动让剩下的糖无法全部入模了。'}<br>撤回一步，刚才的操作还来得及改变。</p><button class="plate primary" id="fail-undo">撤回一步</button><button class="plate" id="fail-restart">重新装这盒</button><button class="small-link" id="fail-leave">换一种玩法</button>`);$('fail-undo').onclick=doUndo;$('fail-restart').onclick=()=>load(current,{fresh:true});$('fail-leave').onclick=home;}
function showWin(){const ls=LEVELS.filter(l=>l.type===current.type),n=ls.indexOf(current),next=ls[n+1];openDialog(`<p class="kicker">散糖归零 · 整盒收藏</p><h2 id="modal-title">${current.name}，收好了</h2><canvas class="reward" id="reward" aria-label="本关装好的完整糖盒"></canvas><p>${current.cells.length} 颗糖全部装好，空模位 0 个。<br>这就是刚才亲手完成的那一盒。</p><button class="plate primary" id="win-next">${next?'接着装下一盒':'换一种玩法'}</button><button class="plate" id="win-collection">放进收藏看看 · ${progress.completed.length}/12</button><button class="small-link" id="win-replay">再装一次</button>`);drawCollection($('reward'),current);$('win-next').onclick=()=>next?load(next):home();$('win-collection').onclick=()=>{closeDialog();showCollection();};$('win-replay').onclick=()=>load(current,{fresh:true});}
function showHelp(){const t=current?.type||'queue',title=MODES.find(m=>m.id===t).name;const rules={queue:['看盒里标出的<b>下一颗颜色</b>。','每列只能取最前一颗；后面的糖都看得见。','两列颜色相同时，看看取走后会露出什么。'],tile:['先选一块糖，方向固定，不需要旋转。','再点盒里亮起的<b>左上落点</b>；同色格必须对齐。','能放进去，也要给后面的糖留好空间。'],tilt:['点方向把手，整盘糖一起朝那个方向滑。','糖遇到<b>同色空模位</b>就装好，其他颜色模位可以经过。','挡板和散糖会挡路，已经装好的糖不挡路。']};openDialog(`${closeButton()}<p class="kicker">一盒糖，一个小谜题</p><h2 id="modal-title">${title}怎么玩</h2><div class="rules">${rules[t].map((s,i)=>`<p>${i+1}. ${s}</p>`).join('')}<p>全部糖与模位恰好用完，整盒作品进入收藏。随时可以撤回。</p></div><button class="plate primary" id="help-done">明白了，开工</button>`);$('help-done').onclick=closeDialog;}
function showSettings(){openDialog(`${closeButton()}<p class="kicker">让工坊舒服一点</p><h2 id="modal-title">音乐与设置</h2>${[['music','背景音乐'],['sfx','糖果音效'],['reducedMotion','减少动态效果']].map(([k,n])=>`<label class="setting"><span>${n}</span><input type="checkbox" data-setting="${k}" aria-label="${n}" ${progress.settings[k]?'checked':''}></label>`).join('')}<button class="plate primary" id="settings-close">回到工坊</button><button class="small-link" id="credits">制作与音乐</button><button class="small-link" id="reset-progress">重置本轮试玩</button>`);modal.querySelectorAll('[data-setting]').forEach(e=>e.onchange=()=>{progress.settings[e.dataset.setting]=e.checked;audio.setSettings(progress.settings);void audio.unlock();save();});$('settings-close').onclick=closeDialog;$('credits').onclick=showCredits;$('reset-progress').onclick=askResetProgress;}
function askResetProgress(){openDialog(`${closeButton()}<h2 id="modal-title">从第一盒重新体验？</h2><p>仅重置这 12 关的试玩记录与收藏。<br>音乐设置保留；本次重置可以撤销。</p><button class="plate primary" id="reset-confirm">重新体验 12 关</button><button class="plate" id="reset-cancel">保留当前记录</button>`);$('reset-cancel').onclick=showSettings;$('reset-confirm').onclick=()=>{const previous=structuredClone(progress);progress=freshProgress();progress.settings=previous.settings;save();home();openDialog(`<h2 id="modal-title">准备好了</h2><p>三个玩法都从第一盒开始。</p><button class="plate primary" id="reset-done">开始新一轮</button><button class="plate" id="reset-undo">撤销重置</button>`);$('reset-done').onclick=closeDialog;$('reset-undo').onclick=()=>{progress=previous;save();home();};};}
function showCredits(){openDialog(`${closeButton()}<h2 id="modal-title">制作与音乐</h2><div class="credits">糖果新工坊 · 三种玩法试玩<br>美术：本项目 AI 生成并整理的专用资源，正俯视糖果与模位。<br>配乐：happy tune — syncopika，CC BY 3.0；播放有淡入淡出交叠。<br><a href="https://opengameart.org/content/happy-tune" target="_blank" rel="noopener">配乐作者与来源</a><br>音效：Kenney，CC0，播放进行音量处理。<br><a href="https://kenney.nl/assets" target="_blank" rel="noopener">音效来源</a><br>字体：Noto Sans SC，SIL OFL 1.1。<br>全部素材与许可证随工程提供。</div><button class="plate primary" id="credits-close">返回设置</button>`);$('credits-close').onclick=showSettings;}
function showCollection(){epoch++;busy=false;closeDialog();view='collection';render();window.scrollTo({top:0,behavior:'instant'});}
function renderCollection(){screen.innerHTML=`<section class="page"><div class="topbar"><button class="plate" id="back">‹ 工坊</button><strong>我的糖盒</strong><span class="tiny">${progress.completed.length}/12</span></div><div class="collection-heading"><p class="kicker">每一盒，都由你亲手装好</p><h1>甜蜜收藏架</h1><p>开盒看看，再装一次。<br>还没完成的作品，也在等你。</p></div><div class="shelf">${LEVELS.map(l=>{const done=progress.completed.includes(l.id);return `<button class="collect-card paper ${done?'':'locked'}" data-collect="${l.id}" aria-label="${l.name}，${done?'已收藏，开盒欣赏':'尚未收藏，开始挑战'}"><canvas data-level="${l.id}" aria-hidden="true"></canvas><strong>${l.name}</strong><small>${MODES.find(m=>m.id===l.type).name} · ${done?'点击开盒':'等你来装'}</small></button>`;}).join('')}</div></section>`;$('back').onclick=home;screen.querySelectorAll('[data-collect]').forEach(b=>b.onclick=()=>{const level=LEVELS.find(l=>l.id===b.dataset.collect);if(!progress.completed.includes(level.id)){load(level);return;}openDialog(`${closeButton()}<p class="kicker">你亲手装好的第 ${LEVELS.indexOf(level)+1} 盒甜蜜</p><h2 id="modal-title">${level.name}</h2><canvas class="reward" id="reward"></canvas><p>${level.story}<br>${level.cells.length} 颗糖，全部在这里。</p><button class="plate primary" id="collection-replay">再装一次</button><button class="plate" id="collection-close">放回收藏架</button>`);drawCollection($('reward'),level);$('collection-replay').onclick=()=>load(level,{fresh:true});$('collection-close').onclick=closeDialog;});thumbnails();}
document.addEventListener('keydown',e=>{if(modal.open||busy||view!=='play'||e.metaKey||e.ctrlKey||e.altKey)return;if(e.key.toLowerCase()==='z'){e.preventDefault();doUndo();}if(e.key.toLowerCase()==='h'){e.preventDefault();showHint();}const d={ArrowUp:'up',ArrowRight:'right',ArrowDown:'down',ArrowLeft:'left'}[e.key];if(d&&current?.type==='tilt'){e.preventDefault();act({direction:d});}});
async function boot(){try{
 const names=[...COLORS.flatMap(c=>[`candy-${c}`,`socket-${c}`]),'board-frame','button-primary','button-paper','panel-paper','barrier'];
 await Promise.all(names.map(name=>new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>{assets[name]=image;resolve();};image.onerror=()=>reject(Error(name));image.src=`./assets/art/${name}.png`;})));
 $('loading').hidden=true;screen.hidden=false;render();
 }catch{$('loading').innerHTML='<h1>糖果还没准备好</h1><p>请重试加载，让所有素材都到齐。</p><button id="reload">重新加载</button>';$('reload').onclick=()=>location.reload();}}
boot();
