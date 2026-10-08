(() => {
  'use strict';
  const PAPER = '#f4f1e9', INK = '#24332d';
  const COLORS = ['#d87561', '#659b84', '#668fbc', '#b18a3f', '#a47bb2'];
  const DIR = [{ x: 1, y: 0, name: 'right' }, { x: 0, y: 1, name: 'down' }, { x: -1, y: 0, name: 'left' }, { x: 0, y: -1, name: 'up' }];
  // A tap advances the selected block by one cell. Every touching block ahead
  // joins that move; only the first free cell or a wall decides whether it fits.
  const LEVELS = [
    { name: '一起挪一格', hint: '点左边的积木，两个会一起前进。', w: 4, h: 4, walls: [], start: [4, 5], dirs: [0, 0], goals: [6, 7], solution: [0, 0] },
    { name: '先送到路口', hint: '向下的积木，也能被别人向右推。', w: 4, h: 4, walls: [], start: [4, 5], dirs: [0, 1], goals: [6, 14], solution: [0, 1, 1, 0] },
    { name: '借一步', hint: '每块积木都需要借别人的方向。', w: 4, h: 4, walls: [], start: [4, 5, 10, 9], dirs: [0, 1, 2, 3], goals: [11, 15, 13, 6], solution: [3, 0, 1, 2, 1, 0, 0, 1, 0] },
    { name: '别堵住路', hint: '灰色角块推不动，给后面的积木留路。', w: 5, h: 5, walls: [0, 4, 20, 24], start: [6, 7, 18, 17], dirs: [0, 1, 2, 3], goals: [18, 19, 21, 3], solution: [3, 3, 0, 1, 1, 2, 1, 0, 0, 2, 3] },
    { name: '五块一盘棋', hint: '已经入座的积木，有时也得让一步。', w: 5, h: 5, walls: [0, 4, 20, 24], start: [6, 7, 13, 12, 17], dirs: [0, 1, 2, 3, 0], goals: [14, 15, 6, 3, 23], solution: [1, 4, 1, 2, 3, 2, 3, 3, 0, 3, 0, 1, 0, 0, 2, 2, 1, 1] }
  ];
  function roundRect(ctx, x, y, w, h, radius) {
    const r = Math.min(radius, w / 2, h / 2);
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function mark(ctx, index, x, y, size, color) {
    ctx.save(); ctx.translate(x, y); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 2.2; ctx.beginPath();
    if (index === 0) { ctx.arc(0, 0, size * .43, 0, Math.PI * 2); ctx.fill(); }
    else if (index === 1) { ctx.rect(-size * .4, -size * .4, size * .8, size * .8); ctx.fill(); }
    else if (index === 2) { ctx.moveTo(0, -size * .5); ctx.lineTo(size * .5, size * .4); ctx.lineTo(-size * .5, size * .4); ctx.closePath(); ctx.fill(); }
    else if (index === 3) { ctx.moveTo(0, -size * .55); ctx.lineTo(size * .5, 0); ctx.lineTo(0, size * .55); ctx.lineTo(-size * .5, 0); ctx.closePath(); ctx.fill(); }
    else { ctx.moveTo(-size * .5, 0); ctx.lineTo(size * .5, 0); ctx.moveTo(0, -size * .5); ctx.lineTo(0, size * .5); ctx.stroke(); }
    ctx.restore();
  }
  function arrow(ctx, d, x, y, length) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(d * Math.PI / 2); ctx.strokeStyle = '#fffdf6'; ctx.fillStyle = '#fffdf6'; ctx.lineWidth = 4.3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-length * .48, 0); ctx.lineTo(length * .38, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(length * .48, 0); ctx.lineTo(length * .06, -length * .3); ctx.lineTo(length * .06, length * .3); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function geometry(l) { const cell = l.w === 5 ? 64 : 72; return { cell, x: (390 - l.w * cell) / 2, y: l.h === 5 ? 112 : 128 }; }
  function create(env) {
    const index = Math.max(0, Math.min(LEVELS.length - 1, Number(env.level) || 0));
    const l = LEVELS[index], g = geometry(l), walls = new Set(l.walls);
    let positions = [...l.start], history = [], animation = null, won = false, destroyed = false, moves = 0, clock = 0, flash = null;
    let note = l.hint;
    const at = p => ({ x: g.x + (p % l.w + .5) * g.cell, y: g.y + (Math.floor(p / l.w) + .5) * g.cell });
    function plan(i) {
      const d = DIR[l.dirs[i]], chain = [i];
      let x = positions[i] % l.w, y = Math.floor(positions[i] / l.w);
      for (;;) {
        x += d.x; y += d.y;
        if (x < 0 || y < 0 || x >= l.w || y >= l.h || walls.has(y * l.w + x)) return { blocked: true, chain };
        const occupant = positions.indexOf(y * l.w + x);
        if (occupant < 0) return { blocked: false, chain, delta: d.y * l.w + d.x };
        chain.push(occupant);
      }
    }
    function matched() { return positions.reduce((n, p, i) => n + (p === l.goals[i]), 0); }
    function settled() {
      if (positions.every((p, i) => p === l.goals[i])) {
        won = true; note = '全部入座！'; env.sound?.('win', .8, 1); env.onComplete?.({ moves, total: positions.length, matched: positions.length });
      } else if (positions.every((_, i) => plan(i).blocked)) note = '暂时无路可走，悔棋换个顺序。';
    }
    function update(dt) {
      if (destroyed) return;
      dt = Math.max(0, Math.min(.1, Number(dt) || 0)); clock += dt;
      if (flash) { flash.time -= dt; if (flash.time <= 0) flash = null; }
      if (animation) {
        animation.elapsed += dt;
        if (animation.elapsed >= animation.duration) { animation = null; settled(); }
      }
    }
    function input(type, p) {
      if (destroyed || type !== 'down' || animation || won || !p) return;
      const i = positions.findIndex(pos => { const c = at(pos); return Math.abs(p.x - c.x) < g.cell * .47 && Math.abs(p.y - c.y) < g.cell * .47; });
      if (i < 0) return;
      const move = plan(i);
      if (move.blocked) { flash = { ids: move.chain, time: .46 }; note = '前面没有空位，换个顺序试试。'; env.sound?.('block', .3, .7); return; }
      history.push({ positions: [...positions], moves, note });
      const from = [...positions]; move.chain.forEach(k => { positions[k] += move.delta; });
      moves += 1; flash = null;
      animation = { from, to: [...positions], ids: move.chain, elapsed: 0, duration: .2 };
      note = move.chain.length > 1 ? `一起推动了 ${move.chain.length} 块积木。` : '再看看，谁能给谁让路？';
      env.sound?.('move', .5, 1 + move.chain.length * .08);
    }
    function undo() {
      if (destroyed || animation || won || history.length === 0) return false;
      const last = history.pop(); positions = [...last.positions]; moves = last.moves; note = '退回一步，换个顺序。'; flash = null;
      env.sound?.('undo', .35, .9); return true;
    }
    function getState() {
      return { game: 'push', level: index, won, failed: false, status: won ? 'won' : animation ? 'moving' : 'playing', moves, matched: matched(), total: positions.length,
        animating: !!animation, animation: !!animation, undoDepth: history.length, canUndo: !animation && !won && history.length > 0,
        board: { cols: l.w, rows: l.h, cell: g.cell, x: g.x, y: g.y, walls: [...l.walls] }, positions: [...positions], goals: [...l.goals],
        pieces: positions.map((pos, i) => ({ id: i, ...at(pos), cx: at(pos).x, cy: at(pos).y, gridX: pos % l.w, gridY: Math.floor(pos / l.w), direction: DIR[l.dirs[i]].name, dir: l.dirs[i], color: COLORS[i], matched: pos === l.goals[i], canMove: !plan(i).blocked })),
        note };
    }
    function render(ctx) {
      ctx.save(); ctx.fillStyle = PAPER; ctx.fillRect(0, 0, 390, 560); ctx.fillStyle = INK; ctx.font = '700 20px sans-serif'; ctx.textAlign = 'left'; ctx.fillText('把积木推到同色座位', 21, 31);
      ctx.font = '12px sans-serif'; ctx.fillStyle = '#68776d'; ctx.fillText('点一下走一格 · 连着的积木一起推', 22, 53);
      ctx.font = '700 17px sans-serif'; ctx.textAlign = 'right'; ctx.fillStyle = '#467a61'; ctx.fillText(`${matched()} / ${positions.length}`, 369, 79);
      const bx = g.x - 9, by = g.y - 9, bw = l.w * g.cell + 18, bh = l.h * g.cell + 18;
      ctx.fillStyle = '#e5e7dc'; roundRect(ctx, bx, by, bw, bh, 20); ctx.fill();
      for (let pos = 0; pos < l.w * l.h; pos++) {
        const c = at(pos), size = g.cell - 6;
        if (walls.has(pos)) {
          ctx.fillStyle = '#acb5ac'; roundRect(ctx, c.x - size / 2, c.y - size / 2, size, size, 10); ctx.fill(); ctx.strokeStyle = '#939e93'; ctx.lineWidth = 1.7;
          ctx.beginPath(); ctx.moveTo(c.x - 12, c.y - 10); ctx.lineTo(c.x + 12, c.y + 10); ctx.moveTo(c.x + 12, c.y - 10); ctx.lineTo(c.x - 12, c.y + 10); ctx.stroke();
        } else { ctx.fillStyle = '#f9f8f1'; roundRect(ctx, c.x - size / 2, c.y - size / 2, size, size, 10); ctx.fill(); }
      }
      l.goals.forEach((pos, i) => {
        const c = at(pos), s = g.cell - 13;
        ctx.save(); ctx.fillStyle = COLORS[i]; ctx.globalAlpha = .11; roundRect(ctx, c.x - s / 2, c.y - s / 2, s, s, 11); ctx.fill(); ctx.globalAlpha = .72; ctx.strokeStyle = COLORS[i]; ctx.lineWidth = 2; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]); mark(ctx, i, c.x, c.y, 19, COLORS[i]); ctx.restore();
      });
      positions.forEach((pos, i) => {
        let c = at(pos);
        if (animation?.ids.includes(i)) { const a = at(animation.from[i]); const t = Math.min(1, animation.elapsed / animation.duration), e = 1 - Math.pow(1 - t, 3); c = { x: a.x + (c.x - a.x) * e, y: a.y + (c.y - a.y) * e }; }
        const blocked = flash?.ids.includes(i);
        if (blocked) c.x += Math.sin(clock * 65) * 2.7 * Math.min(1, flash.time * 3);
        const s = g.cell - 17;
        ctx.fillStyle = '#23342b20'; roundRect(ctx, c.x - s / 2, c.y - s / 2 + 3, s, s, 12); ctx.fill();
        ctx.fillStyle = COLORS[i]; roundRect(ctx, c.x - s / 2, c.y - s / 2, s, s, 12); ctx.fill();
        if (blocked) { ctx.strokeStyle = '#963c34'; ctx.lineWidth = 3; ctx.stroke(); }
        arrow(ctx, l.dirs[i], c.x + 2, c.y + 2, s * .46); mark(ctx, i, c.x - s / 2 + 10, c.y - s / 2 + 10, 8, '#fffdf6');
        if (pos === l.goals[i] && !animation) { ctx.fillStyle = '#fffdf6'; ctx.font = '700 12px sans-serif'; ctx.textAlign = 'right'; ctx.fillText('✓', c.x + s / 2 - 5, c.y + s / 2 - 5); }
      });
      ctx.textAlign = 'center'; ctx.fillStyle = won ? '#467a61' : INK; ctx.font = '600 15px sans-serif'; ctx.fillText(won ? '每一块，都刚刚好。' : note, 195, 492);
      ctx.fillStyle = '#778378'; ctx.font = '12px sans-serif'; ctx.fillText(won ? `用了 ${moves} 步` : '颜色＋形状对应座位 · 卡住可悔棋', 195, 520); ctx.restore();
    }
    return { update, render, input, getState, undo, canUndo: () => !destroyed && !animation && !won && history.length > 0, destroy() { destroyed = true; animation = null; history = []; } };
  }
  function witnesses() {
    return LEVELS.map(l => {
      const g = geometry(l), positions = [...l.start], result = [];
      for (const i of l.solution) {
        const p = positions[i], d = DIR[l.dirs[i]];
        result.push({ id: i, x: g.x + (p % l.w + .5) * g.cell, y: g.y + (Math.floor(p / l.w) + .5) * g.cell });
        const chain = [i]; let q = p;
        while (positions.includes(q + d.y * l.w + d.x)) { q += d.y * l.w + d.x; chain.push(positions.indexOf(q)); }
        chain.forEach(k => { positions[k] += d.y * l.w + d.x; });
      }
      return result;
    });
  }
  window.MixGames ||= {};
  window.MixGames.push = { title: '推推入座', shortTitle: '推推入座', operation: '点积木，沿箭头推一格；连着的一起推。', combination: '点击＋连推＋同色入座', levels: LEVELS.map(({ name, hint }) => ({ name, hint })), create, witnesses: witnesses() };
})();
