async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const fire = (type, id, x, y) => { const t = document.elementFromPoint(x, y) || document.body; t.dispatchEvent(new PointerEvent(type, { pointerId: id, clientX: x, clientY: y, pointerType: 'touch', bubbles: true, cancelable: true, isPrimary: id === 1 })); };
  L.push('touch=' + document.body.classList.contains('touch') + ' settings=' + JSON.stringify({ scale: __G.settings.scale, q: __G.settings.quality, sens: __G.settings.sens }));
  await __shot('title');
  window.__fast = 1;
  __start(1, 'og'); await sleep(4000);
  const pl = __G.player;
  L.push('start p=' + pl.p.toArray().map((v) => v.toFixed(2)) + ' yaw=' + pl.yaw.toFixed(2));
  await __shot('ingame');
  // Stick: links aufsetzen, nach oben schieben (vorwärts)
  fire('pointerdown', 1, 160, 300); await sleep(50); fire('pointermove', 1, 160, 270); fire('pointermove', 1, 160, 250);
  await sleep(1200);
  const p1 = pl.p.clone();
  fire('pointermove', 1, 160, 200); await sleep(1500);   // ganz nach vorn = rennen
  L.push('voll: sprinting=' + pl.sprinting + ' stamina=' + pl.stamina.toFixed(2) + ' bewegt=' + p1.distanceTo(pl.p).toFixed(2));
  await __shot('stick');
  fire('pointerup', 1, 160, 200); await sleep(400);
  // Umsehen: rechts wischen
  const y0 = pl.yaw;
  fire('pointerdown', 2, 560, 200); for (let i = 1; i <= 6; i++) { fire('pointermove', 2, 560 + i * 20, 200); await sleep(30); } fire('pointerup', 2, 680, 200);
  await sleep(300);
  L.push('Umsehen: yaw ' + y0.toFixed(2) + ' -> ' + pl.yaw.toFixed(2));
  // Buttons: Licht, Ducken, Handy
  const btn = (k) => { const b = document.querySelector(`#touch [data-k="${k}"]`); const r = b.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
  let [x, y] = btn('flash'); fire('pointerdown', 3, x, y); await sleep(120); fire('pointerup', 3, x, y); await sleep(300);
  L.push('Licht an: ' + pl.flashOn);
  [x, y] = btn('crouch'); fire('pointerdown', 4, x, y); await sleep(500); fire('pointerup', 4, x, y);
  L.push('Ducken: ' + pl.stance);
  [x, y] = btn('crouch'); fire('pointerdown', 5, x, y); await sleep(500); fire('pointerup', 5, x, y);
  L.push('Ducken aus: ' + pl.stance);
  [x, y] = btn('phone'); fire('pointerdown', 6, x, y); await sleep(150); fire('pointerup', 6, x, y); await sleep(500);
  L.push('Handy offen: ' + __G.phoneOpen + ' phoneopen-Klasse=' + document.body.classList.contains('phoneopen') + ' Springen sichtbar=' + (getComputedStyle(document.querySelector('#touch [data-k="jump"]')).display !== 'none'));
  await __shot('phone');
  // Antwort-Buttons neben dem Handy (Layout-Check mit Beispieltext)
  const ui = __G.ui, oldReply = ui.reply;
  ui.reply = { options: ['klar, komm vorbei', 'heute ist schlecht, morgen?'] }; ui.phoneTab = 'chat';
  await sleep(300);
  const ph = document.getElementById('phone').getBoundingClientRect(), r1 = document.querySelector('#touch [data-k="reply1"]').getBoundingClientRect();
  L.push('Antwort-Button rechts=' + r1.right.toFixed(0) + ' Handy links=' + ph.left.toFixed(0) + ' überlappt=' + (r1.right > ph.left && r1.bottom > ph.top));
  await __shot('reply');
  ui.reply = oldReply;
  [x, y] = btn('phone'); fire('pointerdown', 7, x, y); await sleep(150); fire('pointerup', 7, x, y); await sleep(300);
  // Pause-Button
  const pb = document.querySelector('#touch .pause').getBoundingClientRect();
  fire('pointerdown', 8, pb.left + 10, pb.top + 10); await sleep(300);
  L.push('Pause: ' + __G.paused + ' Menü: ' + document.getElementById('menu').classList.contains('show') + ' Godmode-Button: ' + !!document.querySelector('#menu [data-a="god"]'));
  await __shot('pause');
  document.querySelector('#menu [data-a="god"]').click(); await sleep(800);
  L.push('Godmode-Panel: ' + __G.dev.panelOpen + ' paused=' + __G.paused);
  await __shot('god');
  // Auto-Auflösung: im Software-Renderer ruckelt es immer -> Auflösung muss sinken
  if (__G.dev.panelOpen) __G.dev.toggle();
  await sleep(300);
  window.__fast = 0; window.__autoScaleTest = true;
  const s0 = __G.settings.scale;
  await sleep(6000);
  L.push('Auto-Auflösung: ' + s0 + ' -> ' + __G.settings.scale + ' (paused=' + __G.paused + ')');
  return L.join('\n');
}
