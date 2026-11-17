async () => {
  // Hochkant: Dreh-Hinweis mit Ausweg, Handy mittig, Antwort direkt auf dem Handy antippen
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  const fire = (type, id, x, y) => { const t = document.elementFromPoint(x, y) || document.body; t.dispatchEvent(new PointerEvent(type, { pointerId: id, clientX: x, clientY: y, pointerType: 'touch', bubbles: true, cancelable: true, isPrimary: id === 1 })); };
  const rot = document.getElementById('rotate');
  L.push('Dreh-Hinweis sichtbar: ' + (getComputedStyle(rot).display !== 'none'));
  await __shot('rotate');
  rot.querySelector('.go').click(); await sleep(200);
  L.push('nach "Trotzdem": sichtbar=' + (getComputedStyle(rot).display !== 'none'));
  window.__fast = 1; __G.settings.scale = 0.3; __G.post.resize(innerWidth, innerHeight);
  __start(1);
  let t0 = performance.now(); while (!(st().obj || '').includes('Handy') && performance.now() - t0 < 30000) await sleep(100);
  for (let k = 0; k < 40; k++) { if (__use('Handy nehmen').startsWith('ok')) break; await sleep(150); }
  t0 = performance.now(); while (!st().reply && performance.now() - t0 < 30000) await sleep(100);
  if (!__G.phoneOpen) __G.ui.togglePhone(true);
  await sleep(600);
  const ph = document.getElementById('phone').getBoundingClientRect();
  L.push(`Handy: links=${ph.left.toFixed(0)} rechts=${ph.right.toFixed(0)} oben=${ph.top.toFixed(0)} unten=${ph.bottom.toFixed(0)} (Breite Fenster ${innerWidth}) Antwort offen=${st().reply}`);
  await __shot('phone');
  const opts = [...document.querySelectorAll('#phone .reply .opt')];
  L.push('Antwort-Optionen: ' + opts.map((o) => o.textContent).join(' | '));
  const before = st().chat;
  const r = opts[0].getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  L.push('getroffen: ' + (document.elementFromPoint(x, y) || {}).id + '/' + ((document.elementFromPoint(x, y) || {}).className || ''));
  fire('pointerdown', 9, x, y); await sleep(150); fire('pointerup', 9, x, y); await sleep(800);
  L.push(`nach Antippen: chat vorher="${before}" nachher="${st().chat}" Antwort offen=${st().reply}`);
  await __shot('after');
  // Rückspulen: die angetippte Antwort muss beim Neuabspielen wieder genauso gesendet werden
  await sleep(1500);
  const D = __G.dev, f = D.frame, chat1 = st().chat, p1 = __G.player.p.clone();
  await D.rewindTo(f);
  L.push(`Rückspulen auf f${f}: chat "${chat1}" -> "${st().chat}" gleich=${chat1 === st().chat} d=${p1.distanceTo(__G.player.p).toFixed(5)}`);
  return L.join('\n');
}
