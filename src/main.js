// LOCKRUF – Einstieg: Renderer, Szene, Menüs, Hauptschleife
import * as THREE from 'three';
import { G, loadSettings, saveSettings, loadProgress, isTouchDevice } from './state.js';
import { World } from './world.js';
import { Player } from './player.js';
import { Post } from './post.js';
import { UI, layoutPhone } from './ui.js';
import { AudioEngine } from './audio.js';
import './sound.js';
import { Input, DEFAULT_KEYS, KEY_LABELS, keyName } from './input.js';
import { Story, CHAPTERS, Abort } from './story.js';
import { mats, Batch } from './models.js';
import { buildOutside } from './level/outside.js';
import { buildExtra } from './level/extra.js';
import './story-extra.js';
import { Lockpick } from './lockpick.js';
import { buildHut } from './level/hut.js';
import { buildHome } from './level/home.js';
import { damp } from './util.js';
import { createDust, createFallingLeaves } from './fx.js';
import { updateTimers } from './timers.js';
import { Noise } from './noise.js';
import { Mic } from './mic.js';
import { Dev } from './dev.js';
import { Touch } from './touch.js';
import { Assets } from './assets.js';

let hemi, moon, last = performance.now();
const clickEl = () => document.getElementById('clickstart');

async function boot() {
  loadSettings();
  const ld = document.getElementById('loading');
  const ldText = ld.textContent;
  await Assets.loadAll((k) => { ld.textContent = ldText + '  ' + Math.round(k * 100) + ' %'; });
  ld.textContent = ldText;
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(1);
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.id = 'game';
  document.body.prepend(renderer.domElement);
  G.renderer = renderer;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x15171d, 0.05);
  scene.background = new THREE.Color(0x020203);
  G.scene = scene;
  const camera = new THREE.PerspectiveCamera(G.settings.fov, innerWidth / innerHeight, 0.04, 1500);
  G.camera = camera;

  hemi = new THREE.HemisphereLight(0x7d93c4, 0x2a2a30, 0.5); scene.add(hemi);
  moon = new THREE.DirectionalLight(0xa4b4dc, 0.3); moon.position.set(-50, 42, 62); scene.add(moon);

  const world = new World(); G.world = world;
  world.initLightPool(scene, 8);
  G.audio = new AudioEngine();
  G.ui = new UI();
  G.noise = new Noise();
  G.mic = new Mic();
  const M = mats(); G.M = M;

  buildOutside(scene, world, M);
  buildExtra(scene, world, M);
  const B = new Batch(48);
  buildHut(scene, world, M, B);
  buildHome(scene, world, M, B);
  B.build(scene);

  G.player = new Player(camera, scene);
  const dust = createDust(scene), leaves = createFallingLeaves(scene);
  dust.visual = true; leaves.visual = true;
  world.updaters.push(dust, leaves);
  G.post = new Post(renderer);
  G.post.resize(innerWidth, innerHeight); G.post.applyGfx();
  G.story = new Story();
  G.lockpick = new Lockpick();
  G.dev = new Dev();
  G.simStep = simStep;
  G.touch = new Touch();
  G.touch.enable(G.settings.touch === 'on' || (G.settings.touch !== 'off' && isTouchDevice()));
  G.pauseGame = () => { if (G.started && !G.paused) pause(); };
  G.layoutPhone = layoutPhone; layoutPhone();
  // Zettel mit Maus oder Finger schließen: läuft über die virtuelle Benutzen-Taste (wird mit aufgezeichnet)
  document.getElementById('note').addEventListener('click', () => {
    if (!G.noteOpen || G.touchOn) return;
    Input.keys.add('Touch_use'); Input.pressed.add('Touch_use'); setTimeout(() => Input.keys.delete('Touch_use'), 90);
  });
  // Einstellung "automatisch": sobald wirklich ein Finger den Bildschirm berührt, Touch einschalten
  // (z. B. Tablet mit Tastatur-Cover, das sich als Maus-Gerät meldet)
  addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' && !G.touchOn && G.settings.touch !== 'off') G.touch.enable(true); }, true);
  // App gewechselt / Bildschirm aus: pausieren
  document.addEventListener('visibilitychange', () => { if (document.hidden && G.started && !G.paused) pause(); });
  Input.init(renderer.domElement);
  Input.onLockChange = (locked) => {
    if (locked) { G.waitLock = false; clickEl().classList.remove('show'); return; }
    if (G.started && !G.paused && !G.dev.panelOpen && !G.waitLock && performance.now() > (G.lockGrace || 0)) pause();
  };
  Input.onLockFail = () => { if (G.started && !G.paused && !G.dev.panelOpen && !G.noLock && !G.touchOn) showClickToPlay(); };
  clickEl().addEventListener('click', () => { Input.lock().then(() => { G.waitLock = false; clickEl().classList.remove('show'); }).catch(() => {}); });

  // Titelkamera
  G.player.teleport(-7, 0, -66, 0, 0);
  try { renderer.compile(scene, camera); } catch (e) { /* egal */ }

  addEventListener('keydown', (e) => { if (e.code === 'F11') { e.preventDefault(); toggleFull(); } });
  addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    G.post.resize(innerWidth, innerHeight);
    layoutPhone();
  });
  document.getElementById('loading').style.display = 'none';
  G.ui.el.fade.style.opacity = 0;
  G.onEnd = () => { G.started = false; G.paused = true; Input.unlock(); titleMenu(); };
  titleMenu();
  requestAnimationFrame(frame);
}

// Pointer-Lock konnte nicht geholt werden (z. B. direkt nach Esc): Spiel wartet auf einen Klick
function showClickToPlay() {
  G.waitLock = true;
  const c = clickEl(); c.textContent = 'KLICKEN ZUM WEITERSPIELEN'; c.classList.add('show');
}
function requestLock() {
  if (G.touchOn) return Promise.resolve();          // am Handy gibt es keinen Mausfang
  return Input.lock().catch(() => { /* onLockFail zeigt den Klick-Hinweis */ });
}
const isApp = /Electron/i.test(navigator.userAgent);
// Handy: Vollbild und Querformat versuchen (iPhone kann das im Browser nicht, dann über „Zum Home-Bildschirm“)
function mobileFullscreen() {
  if (!G.touchOn || document.fullscreenElement) return;
  const el = document.documentElement;
  try {
    const p = el.requestFullscreen ? el.requestFullscreen({ navigationUI: 'hide' }) : null;
    if (p && p.then) p.then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* egal */ } }).catch(() => {});
  } catch (e) { /* egal */ }
}

// ---------------- Menüs ----------------
function bindMenu(handlers) {
  for (const el of document.querySelectorAll('#menu [data-a]')) {
    el.addEventListener('click', (e) => { G.audio.ready && G.audio.click(); handlers[el.dataset.a] && handlers[el.dataset.a](el, e); });
  }
}

function titleMenu() {
  document.body.classList.remove('ingame');
  G.ui.objective(null); G.ui.clockShow(false); G.ui.togglePhone(false); G.ui.say(null); G.ui.prompt(null);
  const prog = loadProgress();
  G.ui.menu(`<div class="inner">
    <h1>LOCKRUF</h1><div class="tag">INSPIRIERT VON EINER WAHREN BEGEBENHEIT</div>
    <button class="item" data-a="new">Neues Spiel</button>
    ${prog.last > 0 ? `<button class="item" data-a="continue">Fortsetzen – ${CHAPTERS[prog.last].name} ${CHAPTERS[prog.last].sub}</button>` : ''}
    <button class="item" data-a="chapters">Kapitel wählen</button>
    <button class="item" data-a="settings">Einstellungen</button>
    <button class="item" data-a="controls">Steuerung</button>
    <button class="item" data-a="credits">Credits</button>
    ${isApp ? '<button class="item" data-a="quit">Beenden</button>' : ''}
    <div class="small">Kopfhörer empfohlen. ${G.touchOn ? 'Handy quer halten.' : 'Vollbild: F11.'}<br>Stadtwald Frankfurt · 31. Oktober</div></div>`);
  bindMenu({
    new: () => startGame(0),
    continue: () => startGame(prog.last),
    chapters: () => chapterMenu(titleMenu),
    settings: () => settingsMenu(titleMenu),
    controls: () => controlsMenu(titleMenu),
    credits: () => creditsMenu(titleMenu),
    quit: () => window.close(),
  });
}

// Pflichtangaben der verwendeten Assets (CC-BY und Packs, die eine Nennung verlangen) plus CC0-Danksagungen
function creditsMenu(back) {
  G.ui.menu(`<div class="inner credits" style="max-width:640px;max-height:92vh;overflow:auto;padding-right:16px"><h1 style="font-size:40px">CREDITS</h1><div class="tag">IDEE: EMIL · CODE &amp; UMSETZUNG MIT CLAUDE</div>
    <div class="small" style="text-align:left;line-height:1.55;font-size:13px">
    <b>Haare (CC BY, Namensnennung):</b> Elvaerwyn – „Katherine Hair“, „Keylth Hair“, „Wavy Bob“ (MakeHuman Community, angepasst: Farbe, Transparenz)<br>
    <b>Sounds:</b> „A Horror Sound Pack“ – Dylan Seibert (dylanseibert-audio.itch.io) · „Horror Stinger Sound Effects“ – DHSFX (dhsfx.itch.io)<br>
    <b>Figuren:</b> MakeHuman / MPFB-Assets (CC0), Kleidung &amp; Haut: MargaretToigo, Cortu, scailman (CC0)<br>
    <b>Animationen:</b> Universal Animation Library 1 &amp; 2 – Quaternius (CC0)<br>
    <b>Modelle:</b> PSX Style Cars – GGBotNet · Red SUV – som_natalino · City Environment Pack 1 &amp; 2 – 3DModelsCC0 · PSX Waste &amp; PSX Derelict Furniture – Daniel Jurys · Retro Shacks – chilly_durango (alle CC0)<br>
    <b>Geräusche:</b> Kenney Impact, RPG &amp; Interface Sounds · Autosounds von GGBotNet (CC0)<br>
    <b>Engine:</b> three.js (MIT)<br>
    Alles Weitere (Gelände, Häuser, Wald, Musik-Synth, Stimmen) ist im Spiel erzeugt. Vollständige Liste: ASSETS_LICENSES.md
    </div>
    <button class="item" data-a="back">Zurück</button></div>`);
  bindMenu({ back });
}

function chapterMenu(back) {
  G.ui.menu(`<div class="inner"><h1 style="font-size:40px">KAPITEL</h1><div class="tag">ALLE FREIGESCHALTET</div><div class="chapters">
    ${CHAPTERS.map((c) => `<button class="item" data-a="ch" data-ch="${c.id}"><span>${c.name}</span>${c.sub}</button>`).join('')}
    </div><button class="item" data-a="back" style="margin-top:24px">← Zurück</button></div>`);
  bindMenu({ ch: (el) => startGame(+el.dataset.ch), back });
}

function micLabel() {
  const m = G.mic;
  if (m.on) return 'Mikrofon: AN – nur Pegelmessung, nichts wird aufgenommen';
  return 'Mikrofon: aus' + (m.status !== 'aus' ? ' (' + m.status + ')' : '');
}

function micConfirm(back) {
  G.ui.menu(`<div class="inner" style="max-width:560px"><h1 style="font-size:36px">MIKROFON</h1><div class="tag">OPTIONAL</div>
    <div class="controls" style="line-height:1.7">Wenn du laut bist (reden, husten, schreien), hört dich der Vater im Haus – und später nicht nur der.<br><br>
    Das Spiel misst dafür nur die Lautstärke, direkt auf deinem PC. Es wird <b style="min-width:0">nichts aufgenommen, gespeichert oder übertragen</b>.
    Du kannst das Mikrofon jederzeit hier oder im Pausenmenü wieder ausschalten. Ohne Mikrofon läuft das Spiel ganz normal.</div>
    <button class="item" data-a="yes" style="margin-top:20px">Mikrofon aktivieren</button>
    <button class="item" data-a="no">Abbrechen</button></div>`);
  bindMenu({
    yes: async () => { await G.mic.enable(); back(); },
    no: back,
  });
}

function settingsMenu(back) {
  const S = G.settings;
  const row = (id, label, min, max, step, val) => `<div class="row"><label>${label}</label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"><span id="${id}v">${val}</span></div>`;
  G.ui.menu(`<div class="inner"><h1 style="font-size:40px">EINSTELLUNGEN</h1><div class="tag">&nbsp;</div>
    ${row('sens', 'Mausempfindlichkeit', 0.3, 2.5, 0.05, S.sens)}
    ${row('bright', 'Helligkeit', 0.6, 2.2, 0.05, S.bright ?? 1)}
    ${row('scale', 'Render-Auflösung', 0.4, 1, 0.05, S.scale)}
    ${row('grain', 'Filmkorn', 0, 1.6, 0.05, S.grain)}
    ${row('fov', 'Sichtfeld', 60, 90, 1, S.fov)}
    ${row('volume', 'Lautstärke', 0, 1, 0.05, S.volume)}
    <button class="item" data-a="invert">Maus invertieren: ${S.invertY ? 'an' : 'aus'}</button>
    <button class="item" data-a="gfx">Grafikstufe: ${Post.LEVELS[S.gfx ?? 2]} (Raumschatten, Dunst, Schatten)</button>
    <button class="item" data-a="quality">Grafikqualität: ${S.quality === 'low' ? 'niedrig (schneller)' : 'hoch'} – gilt ab dem nächsten Start</button>
    <button class="item" data-a="mic">${micLabel()}</button>
    <button class="item" data-a="touch">Touch-Steuerung: ${S.touch === 'on' ? 'an' : S.touch === 'off' ? 'aus' : 'automatisch'}${G.touchOn ? ' (aktiv)' : ''}</button>
    ${G.touchOn ? `<button class="item" data-a="autos">Auflösung automatisch senken, wenn es ruckelt: ${S.autoScale === false ? 'aus' : 'an'}</button>` : ''}
    <button class="item" data-a="full">Vollbild an/aus${G.touchOn ? '' : ' (F11)'}</button>
    <button class="item" data-a="back" style="margin-top:24px">← Zurück</button></div>`);
  for (const k of ['sens', 'bright', 'scale', 'grain', 'fov', 'volume']) {
    const el = document.getElementById(k);
    el.addEventListener('input', () => {
      S[k] = +el.value; document.getElementById(k + 'v').textContent = el.value;
      if (k === 'scale') G.post.resize(innerWidth, innerHeight);
      if (k === 'volume') G.audio.setVolume(S.volume);
      saveSettings();
    });
  }
  bindMenu({
    back, invert: () => { S.invertY = !S.invertY; saveSettings(); settingsMenu(back); }, full: toggleFull,
    mic: () => { if (G.mic.on) { G.mic.disable(); settingsMenu(back); } else micConfirm(() => settingsMenu(back)); },
    gfx: () => { S.gfx = ((S.gfx ?? 2) + 1) % 4; saveSettings(); G.post.applyGfx(); settingsMenu(back); },
    quality: () => { S.quality = S.quality === 'low' ? 'high' : 'low'; saveSettings(); settingsMenu(back); },
    autos: () => { S.autoScale = S.autoScale === false; saveSettings(); settingsMenu(back); },
    touch: () => { S.touch = S.touch === 'on' ? 'off' : S.touch === 'off' ? undefined : 'on'; saveSettings(); G.touch.enable(S.touch === 'on' || (S.touch !== 'off' && isTouchDevice())); settingsMenu(back); },
  });
}

function toggleFull() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().catch(() => {});
}

function controlsMenu(back) {
  const S = G.settings;
  if (G.touchOn) {
    G.ui.menu(`<div class="inner" style="max-height:92vh;overflow:auto"><h1 style="font-size:36px">STEUERUNG</h1><div class="tag">HANDY</div>
      <div class="controls" style="line-height:1.9">
      <b>Linker Daumen</b> irgendwo links aufsetzen = Stick. Ganz nach vorne schieben = rennen.<br>
      <b>Rechter Daumen</b> wischen = umsehen.<br>
      <b>✋</b> benutzen (für Türen und Schlösser gedrückt halten) · <b>⤒</b> springen · <b>⤓</b> ducken an/aus<br>
      <b>☀</b> Taschenlampe · <b>▯</b> Handy · <b>⇄</b> Chat/Karte · Antworten erscheinen als Buttons<br>
      <b>☰</b> Pause, dort auch Godmode und „Ich stecke fest“.</div>
      <button class="item" data-a="back" style="margin-top:18px">← Zurück</button></div>`);
    bindMenu({ back });
    return;
  }
  if (!S.keys) S.keys = { ...DEFAULT_KEYS };
  const rows = Object.keys(DEFAULT_KEYS).map((a) => `<div class="row"><label>${KEY_LABELS[a]}</label><button class="item bind" data-a="bind" data-k="${a}" style="font-size:15px;padding:4px 12px;border:1px solid rgba(255,255,255,.25);border-radius:6px;min-width:150px;text-align:center">${keyName(S.keys[a])}${a === 'sprint' && /^Shift/.test(S.keys[a]) ? ' (links + rechts)' : ''}</button></div>`).join('');
  G.ui.menu(`<div class="inner" style="max-height:92vh;overflow:auto;padding-right:20px"><h1 style="font-size:40px">STEUERUNG</h1><div class="tag">KLICK AUF EINE TASTE ZUM ÄNDERN · ESC BRICHT AB</div>
    ${rows}
    <div class="controls" style="margin-top:12px"><b>Maus</b> Umsehen &nbsp; <b>Esc</b> Pause &nbsp; <b>F11</b> Vollbild &nbsp; <b>+</b> Godmode</div>
    <button class="item" data-a="reset" style="margin-top:14px">Standard wiederherstellen</button>
    <button class="item" data-a="back">← Zurück</button></div>`);
  bindMenu({
    bind: (el) => {
      el.textContent = 'Taste drücken …';
      Input.capture = (code) => {
        if (code !== 'Escape') {
          // doppelte Belegung tauschen
          const other = Object.keys(S.keys).find((k) => S.keys[k] === code && k !== el.dataset.k);
          if (other) S.keys[other] = S.keys[el.dataset.k];
          S.keys[el.dataset.k] = code;
          saveSettings();
        }
        setTimeout(() => controlsMenu(back), 30);
      };
    },
    reset: () => { S.keys = { ...DEFAULT_KEYS }; saveSettings(); controlsMenu(back); },
    back: () => { Input.capture = null; back(); },
  });
}

function pauseMenu() {
  G.ui.menu(`<div class="inner"><h1 style="font-size:46px">PAUSE</h1><div class="tag">${CHAPTERS[G.story.chapter]?.name || ''} · ${CHAPTERS[G.story.chapter]?.sub || ''}</div>
    <button class="item" data-a="resume">Weiter</button>
    <button class="item" data-a="unstuck">Ich stecke fest</button>
    <button class="item" data-a="restart">Kapitel neu starten</button>
    <button class="item" data-a="chapters">Kapitel wählen</button>
    <button class="item" data-a="settings">Einstellungen</button>
    <button class="item" data-a="controls">Steuerung</button>
    ${G.mic.on ? '<button class="item" data-a="micoff" style="color:#e0553f">● Mikrofon ist an – ausschalten</button>' : ''}
    ${G.touchOn ? '<button class="item" data-a="god">Godmode-Panel</button>' : ''}
    <button class="item" data-a="title">Hauptmenü</button></div>`);
  bindMenu({
    resume, restart: () => startGame(G.story.chapter),
    god: () => { resume(); if (!G.dev.panelOpen) G.dev.toggle(); },
    unstuck: () => { if (G.dev.seg) G.dev.ev('unstuck'); else G.story.unstuck(); resume(); },
    chapters: () => chapterMenu(pauseMenu), settings: () => settingsMenu(pauseMenu), controls: () => controlsMenu(pauseMenu),
    micoff: () => { G.mic.disable(); pauseMenu(); },
    title: () => {
      G.started = false; G.story.token++; G.audio.heartbeat(false); G.story.chase = null;
      for (const n of Object.keys(G.audio.loops)) if (!['wind', 'drone'].includes(n) && !n.endsWith('_osc')) G.audio.stopLoop(n, 0.3);
      if (G.dev.on) G.dev.disable();
      G.player.teleport(-7, 0, -66, 0, 0); G.ui.fade(0, 0.5); titleMenu();
    },
  });
}

function pause() {
  G.paused = true;
  document.body.classList.remove('ingame');
  clickEl().classList.remove('show'); G.waitLock = false;
  if (G.audio.ctx) G.audio.ctx.suspend();
  pauseMenu();
}
function resume() {
  G.lockGrace = performance.now() + 1500;
  G.ui.menu(null);
  document.body.classList.add('ingame');
  if (G.audio.ctx) G.audio.ctx.resume();
  G.paused = false;
  requestLock();
  mobileFullscreen();
}

function startGame(ch) {
  G.audio.init();
  G.audio.decodeSamples();
  if (G.audio.ctx.state !== 'running') G.audio.ctx.resume();
  if (!G.audio.loops.wind) G.audio.startAmbience();
  G.ui.menu(null);
  document.body.classList.add('ingame');
  G.started = true; G.paused = false;
  G.lockGrace = performance.now() + 1500;
  requestLock();
  mobileFullscreen();
  G.ui.el.fade.style.transition = 'none'; G.ui.el.fade.style.opacity = 1;
  G.story.run(ch, true);
}

// ---------------- Umgebung (Nebel, Ambience, Hall) ----------------
const env = { fog: 0.05, hemi: 0.55, wind: 0, drone: 0 };
function updateEnv(dt) {
  const p = G.player.p;
  let fog = 0.058, wind = 0.5, drone = 0.28, aenv = 'forest', h = 0.62, mo = 0.42;
  const inHut = p.x > -64.5 && p.x < -59.5 && p.z > 138 && p.z < 142 && p.y > -0.5;
  G.viewCap = 1500;
  if (p.x > 400) { fog = 0.0; wind = 0.035; drone = 0.07; aenv = 'room'; h = 0.1; mo = 0; G.viewCap = 60; }
  else if (p.y < -1.0) { fog = 0.0; wind = 0.02; drone = 0.16; aenv = 'cellar'; h = 0.04; mo = 0; G.viewCap = 60; }
  else if (inHut) { fog = 0.02; wind = 0.16; drone = 0.2; aenv = 'room'; h = 0.14; mo = 0.04; }
  else if (p.z < -72) { fog = 0.026; wind = 0.18; drone = 0.05; aenv = 'street'; h = 0.4; mo = 0.25; }
  else if (p.z < -29) { fog = 0.038; wind = 0.3; drone = 0.12; }
  else if (p.x < -86) { fog = 0.045; wind = 0.22; drone = 0.12; aenv = p.x > -104.5 ? 'room' : 'forest'; }
  else if (Math.abs(p.x) < 3 && p.z < 62) { fog = 0.052; wind = 0.4; drone = 0.2; }
  if (G.story && G.story.chapter === 0) drone = 0.3;
  env.fog = damp(env.fog, fog, 1.5, dt);
  env.hemi = damp(env.hemi, h, 2, dt);
  G.scene.fog.density = env.fog;
  hemi.intensity = env.hemi * (G.settings.bright ?? 1) ** 0.5;
  moon.intensity = mo;
  const A = G.audio;
  // Spannung für die adaptive Musik
  const st = G.story;
  let ten = [0.6, 0.3, 0.15, 0.35, 0.5, 0.55, 0.8, 0.85, 0.2][st ? st.chapter : 0] ?? 0.2;
  if (st && st.chase && st.chase.state !== 'off') ten = 1;
  if (st && st.dad && st.dad.mode !== 'sleep' && st.dad.mode !== 'off') ten = Math.max(ten, 0.7);
  if (G.flags.tension !== undefined) ten = G.flags.tension;
  G.tension = ten;
  if (A.ready) {
    A.env = aenv;
    A.setLoop('wind', wind, 1.5);
    A.setLoop('drone', drone, 2);
    A.updateBeds(aenv, dt, p.x > 400 ? 'home' : aenv);
  }
}

// Wald-Atmosphäre: zufällige Geräusche um den Spieler (Ast knackt hinter dir, Rascheln, Klopfen, Krähen)
let ambT = 14;
function ambient(dt) {
  const ch = G.story.chapter, p = G.player.p;
  if (G.audio.ready && ch > 0) { const fw = G.player.forward(); G.audio.rare(dt, p.x > 400 ? 'room' : p.z < -72 ? 'street' : 'forest', p, fw); }
  const active = G.flags.ambient || (ch === 3 && p.z > 14) || (ch === 6 && !G.story.chase);
  if (!active || p.x > 400 || p.y < -1) return;
  ambT -= dt; if (ambT > 0) return;
  ambT = 9 + Math.random() * 13;
  const A = G.audio, f = G.player.forward(); f.y = 0; f.normalize();
  const side = new THREE.Vector3(f.z, 0, -f.x), r = Math.random();
  const at = (fw, sd, up) => p.clone().addScaledVector(f, fw).addScaledVector(side, sd).setY(p.y + up);
  if (r < 0.5) A.branchSnap(at(-(6 + Math.random() * 7), (Math.random() - 0.5) * 8, 0.2));
  else if (r < 0.7) A.rustle(at(Math.random() * 6, Math.random() < 0.5 ? -12 : 12, 0.3), 7);
  else if (r < 0.82) A.knock(at(28, (Math.random() - 0.5) * 30, 2));
  else A.crow(at(5, 20, 12));
}

// ---------------- Titelkamera ----------------
function titleCam(t) {
  const cam = G.camera;
  const a = t * 0.03;
  cam.position.set(-14 + Math.sin(a) * 2, 1.6, -38 + Math.cos(a) * 1.5);
  cam.lookAt(-2, 15 + Math.sin(t * 0.1) * 1.5, -60);
  G.scene.fog.density = 0.03; G.viewCap = 1500;
  hemi.intensity = 0.5; moon.intensity = 0.35;
}

// ---------------- Simulation: ein fester Schritt (wird live und beim Rückspulen identisch ausgeführt) ----------------
function simStep(dt, replay = false) {
  G.time += dt; G.dt = dt;
  let fired = updateTimers();
  const ui = G.ui;
  if (G.pickOpen) {
    G.lockpick.update(dt);
    G.player.updateCamera(dt);
  } else if (G.noteOpen) {
    if (Input.actHit('use') || Input.actHit('confirm')) ui.closeNote();
    G.player.updateCamera(dt);
  } else {
    if (Input.actHit('phone')) ui.togglePhone();
    if (Input.actHit('reply1')) ui.chooseReply(0);
    if (Input.actHit('reply2')) ui.chooseReply(1);
    if (Input.actHit('app')) ui.switchTab();
    G.player.update(dt);
  }
  G.world.update(dt, G.time, replay);
  fired += G.story.update(dt);
  if (!replay) { updateEnv(dt); ambient(dt); }
  return fired;
}

// ---------------- Hauptschleife ----------------
// Handy: wenn es dauerhaft ruckelt, die Render-Auflösung schrittweise senken (nur nach unten)
const perf = { t: 0, n: 0 };
function autoScale(realDt) {
  const off = !G.touchOn || G.settings.autoScale === false || !G.started || G.paused || G.waitLock || G.replaying
    || window.__norender || window.__fast || (/[?&]test/.test(location.search) && !window.__autoScaleTest);
  if (off || realDt > 2) { perf.t = perf.n = 0; return; }          // > 2 s: App-Wechsel o. Ä., nicht werten
  perf.t += realDt; perf.n++;
  if (perf.t < 4) return;
  const fps = perf.n / perf.t; perf.t = perf.n = 0;
  if (fps >= 24 || G.settings.scale <= 0.4) return;
  G.settings.scale = Math.max(0.4, Math.round((G.settings.scale - 0.1) * 20) / 20);
  G.post.resize(innerWidth, innerHeight);
  saveSettings();
  if (!G.ui.el.hint.classList.contains('show')) G.ui.hint(`Ruckelt – Auflösung auf ${Math.round(G.settings.scale * 100)} % gesenkt`, 3);
}

function frame(now) {
  requestAnimationFrame(frame);
  autoScale((now - last) / 1000);
  const dt = Math.min(window.__fast ? 0.2 : 0.05, (now - last) / 1000) * (window.__speed || 1);
  last = now;
  const ui = G.ui;
  if (G.replaying) { Input.endFrame(); return; }            // Rückspulen läuft – nichts rendern
  if (G.pendingRun && G.started) {
    const r = G.pendingRun; G.pendingRun = null;
    G.story.directRun = true; G.story.run(...r); G.story.directRun = false;
  }
  if (G.started && !G.paused && !G.waitLock) {
    Input.sample();
    G.micLvl = G.mic.sample(dt);
    const steps = G.dev.plan(dt);
    for (let i = 0; i < steps.length; i++) {
      G.dev.record(steps[i], i === steps.length - 1);
      simStep(steps[i]);
      if (i === 0) Input.consume();
    }
    if (!steps.length) G.player.updateCamera(0);
    if (G.phoneOpen && ui.phoneTab === 'map') ui.drawMap();
  } else if (G.started) {
    G.player.updateCamera(0);
  } else {
    G.time += dt;
    titleCam(G.time);
    G.world.update(dt, G.time);
  }
  G.dev.update(dt);
  if (G.started) G.touch.update();
  ui.hud(dt);
  G.post.mat.uniforms.exposure.value = 1.45 * (G.settings.bright ?? 1);
  G.world.updateLights(G.camera.position, G.time);
  if (G.audio.ready) G.audio.updateListener(G.camera);
  if (!window.__norender) G.post.render(G.scene, G.camera, dt);   // Tests ohne Bild: nur Simulation
  Input.endFrame();
}

// Fehler sichtbar machen (zum Melden) – harmlose Browser-Meldungen (Pointer-Lock, Abbruch) werden ausgeblendet
const errBox = document.createElement('div');
errBox.style.cssText = 'position:fixed;left:10px;bottom:10px;max-width:60vw;font:12px monospace;color:#ff6a5a;z-index:99;pointer-events:none;white-space:pre-wrap;text-shadow:0 0 4px #000';
document.body.appendChild(errBox);
const BENIGN = /pointer ?lock|exited the lock|requestPointerLock|WrongDocument|The user has exited|AbortError|play\(\) request/i;
const showErr = (m) => { if (BENIGN.test(m)) return; errBox.textContent = 'FEHLER (bitte Screenshot an Claude): ' + m; };
window.addEventListener('error', (e) => showErr(String(e.message) + ' @ ' + (e.filename || '').split('/').pop() + ':' + e.lineno));
window.addEventListener('unhandledrejection', (e) => { if (e.reason instanceof Abort) { e.preventDefault(); return; } const m = String(e.reason && (e.reason.stack || e.reason.message) || e.reason); if (BENIGN.test(m)) { e.preventDefault(); return; } showErr(m.slice(0, 400)); });

// Test-/Entwickler-Hooks: nur mit ?dev / ?test in der Adresse oder nach dem Einschalten des Godmode
G.exposeHooks = () => {
  if (window.__G) return;
  window.__G = G; window.__THREE = THREE;
  window.__start = (ch, cp) => { startGame(ch); if (cp) G.story.run(ch, true, cp); };
  window.__pause = () => pause();
  window.__pick = (x = 0, y = 0) => {
    const rc = new THREE.Raycaster();
    rc.setFromCamera(new THREE.Vector2(x, y), G.camera);
    const hits = rc.intersectObjects(G.scene.children, true).slice(0, 4);
    return hits.map((h) => `${h.object.type}|${h.object.material && (h.object.material.name || h.object.material.type)}|d=${h.distance.toFixed(2)}|p=${h.point.toArray().map((v) => v.toFixed(1)).join(',')}|par=${h.object.parent && h.object.parent.type}`).join('\n');
  };
  // Test-Eingriffe laufen als aufgezeichnete Godmode-Ereignisse, damit das Rückspulen sie exakt wiederholt
  window.__use = (sub) => {
    const it = G.world.interacts.find((i) => !(i.once && i.used) && i.enabled() && String(typeof i.text === 'function' ? i.text() : i.text).includes(sub));
    if (!it) return 'NICHT GEFUNDEN: ' + sub;
    G.dev.ev('use', sub); return 'ok ' + sub;
  };
  window.__tp = (x, z, y) => { G.dev.ev('tp', [x, y ?? G.world.groundAt(x, z, 60), z]); return G.player.p.toArray().map((v) => v.toFixed(2)).join(','); };
  window.__reply = (i) => G.dev.ev('reply', i);
  window.__look = (yaw, pitch = 0) => G.dev.ev('look', [yaw, pitch]);
  window.__state = () => JSON.stringify({ ch: G.story.chapter, t: +G.time.toFixed(1), obj: G.ui.currentObjective, sub: document.getElementById('subtitle').textContent, bat: Math.round(G.phone.battery), p: G.player.p.toArray().map((v) => +v.toFixed(2)), inv: [...G.inv], chat: (G.chat[G.chat.length - 1] || {}).text, reply: !!G.ui.reply, dad: G.story.dad ? G.story.dad.mode : null, chase: G.story.chase ? G.story.chase.state : null, stam: +G.player.stamina.toFixed(3) });
};
if (/[?&](dev|test)\b/.test(location.search)) { G.noLock = /[?&]test\b/.test(location.search); }

boot().catch((e) => {
  console.error(e);
  document.getElementById('loading').textContent = 'FEHLER: ' + e.message;
});
if (/[?&](dev|test)\b/.test(location.search)) G.exposeHooks();
