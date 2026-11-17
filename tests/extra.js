// Kapitel 2 mit den neuen Inhalten: Nessa (Parkplatz), Mara (Turm), Garagenhof (Dietrich, Telefon, schwarzes Auto),
// Turm-Gespräch, Gatter mit Dietrich-Minispiel. Gerendert wird nur für die Screenshots (sonst nur Simulation).
async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const G = __G;
  const log = (m) => console.log('STEP ' + m + ' t=' + (performance.now() / 1000).toFixed(1) + ' game=' + G.time.toFixed(1));
  const frames = (n) => new Promise((r) => { let k = 0; const f = () => (++k >= n ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); });
  const shot = async (name) => { window.__norender = 0; await frames(3); await __shot(name); window.__norender = 1; };
  const until = async (fn, ms = 90000) => { const t0 = performance.now(); while (!fn()) { if (performance.now() - t0 > ms) return false; await sleep(100); } return true; };
  const game = (s) => until(((t) => () => G.time >= t)(G.time + s), s * 4000 + 20000);
  const key = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code }));
  const answer = async (i = 0) => { const ok = await until(() => !!G.ui.reply || !!G.ui.choice, 60000); if (ok) { __reply(i); await game(0.5); } return ok; };
  window.__norender = 1; window.__fast = 1; window.__speed = 2;
  __start(2);
  await until(() => G.story.chapter === 2 && G.started);
  await game(2);
  log('started');
  L.push('A ' + __state());

  // Parkplatz: Nessa ansprechen (Belohnung: Energy + Tipp mit dem Blumentopf)
  __tp(-10.4, -77.6); __look(Math.PI / 2, -0.05); await game(1.5);
  await shot('nessa');
  await until(() => !G.story.busyTalk, 60000);
  L.push(__use('Ansprechen'));
  await answer(0);
  await until(() => !G.story.busyTalk, 90000);
  L.push('B nessa energy=' + G.inv.has('energy') + ' knowsPot=' + !!G.story.knowsPot);
  log('nessa');

  // Mara oben am Turm
  __tp(12.5, -58.5); __look(0, 0.9); await game(1.5);
  await shot('mara');
  await until(() => !G.story.busyTalk, 60000);
  L.push(__use('Nach oben rufen'));
  await game(1);
  await until(() => !G.story.busyTalk, 120000);
  log('mara');

  // Garagenhof: Dietrich, Münztelefon, schwarzes Auto
  __tp(22, -120); __look(-Math.PI / 2 - 0.25, 0); await game(1.5);
  await shot('court');
  __tp(50.0, -119.6); __look(-Math.PI / 2, -0.3); await game(1.2);
  L.push(__use('Dietrich'));
  await game(1);
  L.push('C lockpick=' + G.inv.has('lockpick'));
  __tp(36.5, -102.5); await game(2);
  await until(() => G.world.interacts.some((i) => !i.used && i.enabled() && String(i.text).includes('Abheben')), 30000);
  L.push(__use('Abheben')); await game(8);
  __tp(33.5, -126.5); __look(0.4, 0); await game(3);
  await shot('blackcar');
  await game(10);
  log('court');

  // Turm: Gespräch mit Deniz-Nachrichten, danach weiter zum Gatter
  __tp(9, -50); await game(1);
  const towerOk = await until(() => !!G.ui.reply, 120000);
  L.push('D tower reply=' + towerOk + ' ' + __state());
  __reply(0); await game(4);
  G.ui.togglePhone(false); await game(0.3);
  L.push('E towerDone=' + !!(G.story.st2 && G.story.st2.towerDone) + ' obj=' + G.ui.currentObjective);
  log('tower');

  // Gatter: zu, Dietrich-Minispiel
  __tp(0.3, -32.4); __look(Math.PI, 0); await game(3);
  await shot('gate_closed');
  L.push('F ' + __state());
  // durch das Gatter laufen darf nicht gehen
  __tp(0.3, -30.2); __look(Math.PI, 0); await game(0.3); for (let i = 0; i < 40; i++) { key('KeyW', true); await sleep(60); } key('KeyW', false); await game(0.5);
  L.push('G blocked z=' + G.player.p.z.toFixed(2));
  __tp(0.3, -30.6); __look(Math.PI, -0.1); await game(0.5);
  L.push(__use('knacken'));
  await until(() => G.pickOpen, 20000);
  await game(0.3);
  await shot('lockpick');
  G.lockpick.pos = G.lockpick.sweet;
  key('KeyE', true); await until(() => !G.pickOpen, 30000); key('KeyE', false);
  await game(3);
  L.push('H gate=' + G.objects.gatter.open + ' obj=' + G.ui.currentObjective);
  await shot('gate_open');
  __tp(0.2, -27.5); await game(4);
  L.push('I ' + __state());
  log('done');
  return L.join('\n');
}
