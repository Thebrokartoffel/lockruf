async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const L = [];
  const st = () => JSON.parse(__state());
  const log = (m) => { const s = st(); L.push(`${m} | ch${s.ch} obj="${s.obj}" sub="${s.sub}" bat=${s.bat} p=${s.p} chat="${s.chat}"`); };
  const waitFor = async (name, fn, ms = 60000) => { const t0 = performance.now(); while (!fn()) { if (performance.now() - t0 > ms) { log('TIMEOUT ' + name); return false; } await sleep(150); } log('ok ' + name); return true; };
  const obj = (s) => () => (st().obj || '').includes(s);
  const sub = (s) => () => (st().sub || '').includes(s);
  const reply = async (i = 0) => { await waitFor('reply', () => st().reply, 60000); __reply(i); await sleep(200); __G.ui.togglePhone(false); };
  const use = async (s) => { for (let k = 0; k < 40; k++) { const r = __use(s); if (r.startsWith('ok')) { log('use ' + s); return; } await sleep(150); } log('USE FAIL ' + s); };
  window.__fast = 1; window.__speed = 2; window.__norender = 1; __G.settings.scale = 0.3; __G.post.resize(innerWidth, innerHeight);
  const only = window.__ONLY || 0;   // 0 = alle Kapitel nacheinander, sonst nur dieses Kapitel (run.py --only N)
  try {
    if (!only || only === 1) {
      __start(1);
      await waitFor('ch1 phone obj', obj('Handy'));
      await use('Handy nehmen');
      await reply(1); await reply(0); await reply(0);
      await waitFor('jacke', obj('Jacke')); await use('Jacke');
      await waitFor('zimmertür', obj('Tür auf')); await use('Tür langsam öffnen');
      await waitFor('schleich', obj('Schleich'));
      __tp(504.85, 11.95, 0); await waitFor('haustür', obj('Haustür'), 30000);
      await use('Tür öffnen'); await waitFor('schlüssel suchen', obj('Hausschlüssel'), 8000);
      __tp(500.4, 11.2, 0); await waitFor('mama vorbei', obj('Schlafzimmer'), 90000);
      log('Mama im Bett: ' + __G.objects.home.momLump.visible);
      __tp(502.8, 6.85); await use('Tür ganz langsam öffnen');
      __tp(498.55, 5.2); await use('Schlüssel ganz vorsichtig nehmen');
      await waitFor('patrol', () => JSON.parse(__state()).dad === 'patrol', 30000);
      __tp(502.95, 11.25); await use('Hinter den Duschvorhang');
      await waitFor('dad zurück', () => JSON.parse(__state()).dad === 'sleep', 150000);
      await waitFor('raus', obj('Raus'), 30000);
      await use('Rauskommen'); __tp(504.0, 14.2, 0); await use('Kette lösen'); await use('Tür leise aufschließen');
      await waitFor('ch2', () => st().ch === 2, 30000);
    }
    if (!only || only === 2) {
      if (only) __start(2);
      await waitFor('obj turm', obj('Goetheturm'));
      __tp(0, -100); await waitFor('kürbis', sub('Kürbis'), 30000);
      __tp(0, -70); await waitFor('finde deniz', obj('Finde Deniz'));
      await use('Dose'); __tp(4, -58);
      await reply(1);
      await waitFor('schneise obj', obj('Hügelschneise'));
      __tp(0, -29); await waitFor('ch3', () => st().ch === 3);
    }
    if (!only || only === 3) {
      if (only) __start(3);
      await sleep(800); __tp(0, 9); await waitFor('eulen', sub('Eulen'));
      __tp(0, 20); await sleep(1500); __tp(0, 27);
      await waitFor('silhouette', () => __G.objects.silhouette.root.visible, 30000);
      __G.player.yaw = 0; __G.player.pitch = 0;
      await reply(0);
      __tp(0, 52); await waitFor('zwäng', obj('Zwäng'));
      __tp(-3.2, 54.4); await sleep(500); await use('Äste');
      __tp(-10, 57); await waitFor('ch4', () => st().ch === 4);
    }
    if (!only || only === 4) {
      if (only) __start(4);
      await waitFor('markierungen', obj('Markierungen'));
      __tp(-14, 61); await sleep(1000); __tp(-20, 68); await sleep(1000); __tp(-24.6, 73.6); await waitFor('baum1', sub('Baum'), 20000);
      __tp(-36.5, 84); await reply(0);
      __tp(-57, 89.5); await waitFor('baum2', sub('Kreis') , 30000);
      __tp(-60, 93); await waitFor('lauf', obj('Lauf'), 90000);
      __tp(-61, 99.5); await waitFor('finde handy', obj('Finde dein Handy'));
      await use('Handy aufheben');
      __tp(-71, 104.3); await waitFor('zaun', obj('Zaun'));
      await use('Tor öffnen');
      __tp(-75.5, 118); await sleep(1500); __tp(-67, 133.5); await waitFor('ch5', () => st().ch === 5);
    }
    if (!only || only === 5) {
      if (only) __start(5);
      await waitFor('untersuch', obj('Untersuch'));
      await use('Tür öffnen'); __tp(-61, 140, 0.3);
      await waitFor('hütte umsehen', obj('Hütte um')); await use('Mütze');
      await waitFor('runter', obj('Keller')); __tp(-62, 145, -3.2);
      await waitFor('laden', obj('Lade')); await use('Handy anschließen');
      await use('Schlüssel'); await use('RUF 2');
      await waitFor('raus', obj('Raus hier'));
      await waitFor('anderen weg', obj('anderen Weg'), 60000);
      await use('Lüftung ansehen'); await use('Schalter 2');
      await use('Schublade'); await sleep(500); await use('Schraubendreher');
      await sleep(4000);
      await use('Gitter abschrauben');
      await waitFor('gehört', sub('gehört'), 20000);
      await use('Lüfter rausziehen');
      await use('Handy nehmen');
      await waitFor('schacht', obj('Schacht'));
      __tp(-63.9, 144.2, -3.2); await sleep(500); __tp(-67, 144.2, -2.95); await sleep(500);
      log('stance ' + __G.player.stance);
      __tp(-70.85, 144.2, -2.95); await waitFor('leiter', sub('Leiter'), 20000);
      await use('Hochklettern');
      await use('Gitter aufdrücken');
      await waitFor('ch6', () => st().ch === 6, 60000);
    }
    if (!only || only === 6) {
      if (only) __start(6);
      await sleep(3000); __tp(-72.5, 138.0); await waitFor('LAUF', obj('LAUF'), 30000);
      __G.dev.ev('set', 'god', true);
      __tp(-77.5, 106.5); await use('Tor aufschließen');
      await sleep(800); __tp(-81.2, 106); await waitFor('bach', obj('Bach'), 30000);
      __tp(-85.6, 106); await waitFor('ch7', () => st().ch === 7);
    }
    if (!only || only === 7) {
      if (only) __start(7);
      __G.dev.ev('set', 'god', true);
      await sleep(1000); __tp(-90, 106); await waitFor('gasse', sub('Gasse'), 20000);
      __tp(-98, 106); await sleep(1500);
      __tp(-113, 106); await waitFor('vogelscheuche', sub('Vogelscheuche'), 20000);
      await waitFor('nach hause', obj('Nach Hause'), 30000);
      __tp(-125, 106); await waitFor('ch8', () => st().ch === 8, 60000);
    }
    if (!only || only === 8) {
      if (only) __start(8);
      await sleep(2000); __tp(-4.5, -131); await waitFor('deniz', () => (st().sub || '').includes('Handy ist weg'), 60000);
      await waitFor('ende', () => !__G.started, 120000);
    }
  } catch (e) { L.push('EXC ' + e.message + ' ' + e.stack); }
  return L.join('\n');
}
