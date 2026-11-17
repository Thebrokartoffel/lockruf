// Zusatz-Szenen für Kapitel 2: Nessa am Wanderparkplatz, Mara oben auf dem Goetheturm, Garagenhof (Münztelefon,
// schwarzes Auto, Radio), Blumentopf mit Schlüssel, Dietrich-Set und das verschlossene Holzgatter am Waldeingang.
import * as THREE from 'three';
import { G } from './state.js';
import { Story } from './story.js';
import { K } from './input.js';
import { rand } from './timers.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const S = Story.prototype;
const headPos = () => G.camera.position.clone();

S.ch2Extras = function () {
  const O = G.objects, E = O.extra, pl = G.player, A = G.audio;
  if (!E) return;
  const nessa = O.nessa, mara = O.mara;
  const st = this.st2 = { nessaMet: false, nessaTalks: 0, maraTalked: false, gateSeen: false, court: false, carDone: false, phoneDone: false };

  // ---------- Nessa am Parkplatz ----------
  this.addUp(() => {
    const d = pl.p.distanceTo(nessa.root.position);
    nessa.lookAt(d < 12 ? headPos() : null);
    if (!st.nessaMet && d < 9) { st.nessaMet = true; this.nessaShout(); }
  });
  this.interact({ story: true, pos: V(nessa.root.position.x, 1.45, nessa.root.position.z), radius: 0.45, range: 2.6, once: false, text: 'Ansprechen',
    enabled: () => !this.busyTalk, onUse: () => this.nessaTalk() });

  // ---------- Mara oben auf dem Turm ----------
  const top = mara.root.position;
  this.addUp(() => {
    const dh = Math.hypot(pl.p.x - top.x, pl.p.z - top.z);
    mara.lookAt(dh < 45 ? headPos() : null);
  });
  this.interact({ story: true, pos: V(top.x, top.y + 1.5, top.z), radius: 1.6, range: 48, once: false, text: 'Nach oben rufen',
    enabled: () => !this.busyTalk && Math.hypot(pl.p.x - top.x, pl.p.z - top.z) < 22, onUse: () => this.maraTalk() });

  // ---------- Schlüssel unterm Blumentopf ----------
  const pk = O.potKey;
  this.interact({ story: true, pos: pk.pos, radius: 0.3, range: 2.2, text: 'Blumentopf anheben', enabled: () => !pk.lifted,
    onUse: () => { pk.lift(); A.burst({ pos: pk.pos, f: 600, q: 1, d: 0.12, peak: 0.3 }); G.ui.say('Da liegt was drunter.', 2); } });
  this.interact({ story: true, pos: V(pk.pos.x, 0.05, pk.pos.z), radius: 0.2, range: 2.2, text: 'Schlüssel nehmen', enabled: () => pk.lifted && pk.key.visible,
    onUse: () => { pk.key.visible = false; G.inv.add('gatterKey'); A.keys(pk.pos); G.ui.say(st.gateSeen ? 'Der kleine Schlüssel. Vielleicht fürs Gatter.' : 'Ein kleiner Schlüssel. Für was auch immer.', 3); } });

  // ---------- Dietrich-Set in der offenen Garage ----------
  const lp = O.lockpick;
  this.interact({ story: true, pos: lp.pos, radius: 0.2, range: 2.2, text: 'Dietrich-Set nehmen', enabled: () => lp.group.visible,
    onUse: () => { lp.group.visible = false; G.inv.add('lockpick'); A.pickup(); G.ui.say('Ein Dietrich-Set. Wer lässt so was offen rumliegen?', 3.2); if (!this.pickHint) { this.pickHint = true; G.ui.hint(`Im Handy unter <b>Taschen</b> siehst du, was du dabei hast`, 5); } } });

  // ---------- Garagenhof: Radio, Münztelefon, schwarzes Auto ----------
  this.addUp(() => {
    const inCourt = pl.p.x > 20.5 && pl.p.x < 53 && pl.p.z > -140 && pl.p.z < -96;
    if (A.ready && A.samplesReady) {
      if (!A.loops.radio) A.posLoop && A.posLoop('radio', 'amb_tv', E.radioPos, 0);
      A.setLoop('radio', inCourt || pl.p.x > 14 ? 0.12 : 0, 1);
    }
    if (inCourt && !st.court) { st.court = true; this.mark('Garagenhof'); this.after(2.5, () => this.payphoneRing()); }
    if (inCourt && !st.carDone && pl.p.distanceTo(E.blackCar.pos) < 15) { st.carDone = true; this.blackCarEvent(); }
  });
};

// Gespräch führen: blockiert weitere Gespräche, gibt Bewegung danach sicher wieder frei.
// Bei einem Kapitelwechsel (anderer token) räumt setup() auf – dann hier nichts mehr anfassen.
S.talk = async function (fn, { freeze = false } = {}) {
  const tok = this.token, pl = G.player;
  this.busyTalk = true; if (freeze) pl.canMove = false;
  try { await fn(); } finally { if (tok === this.token) { this.busyTalk = false; if (freeze) pl.canMove = true; } }
};

// Nessa ruft zum Turm hoch, Mara antwortet von oben
S.nessaShout = function () { return this.talk(() => this._nessaShout()); };
S._nessaShout = async function () {
  await this.say('Mara! Wie lang willst du da oben noch Sterne gucken? Mir frieren die Beine ab!', 3.6, 'Nessa');
  await this.wait(0.6);
  if (G.audio.ready) G.audio.babble({ pos: G.objects.mara.root.position, dur: 1.2, voice: 'Mara', vol: 0.35 });
  G.ui.say('Dann zieh dir halt was an, Schatz!', 2.6, 'Mara (von oben)');
  await this.wait(2.8);
  await this.say('…Oh. Hallo. Wir haben Publikum.', 2.6, 'Nessa');
};

S.nessaTalk = function () { return this.talk(() => this._nessaTalk(), { freeze: true }); };
S._nessaTalk = async function () {
  const st = this.st2, n = G.objects.nessa;
  n.stand('talk');
  if (st.nessaTalks === 0) {
    await this.say('Na? Halloween ist vorbei und du schleichst hier noch rum?', 3.2, 'Nessa');
    const i = await this.raceAbort(G.ui.setChoice(['Ich such meinen Kumpel. Deniz.', 'Ist dir nicht kalt in dem Outfit?'], 'NESSA'));
    if (i === 0) {
      await this.say('Ich such meinen Kumpel. Deniz.', 2.2, 'Leon');
      await this.say('Deniz? Kenn ich nicht. Hier war seit Ewigkeiten keiner außer dir.', 3.4, 'Nessa');
      await this.say('Und so ein großer Typ mit Kapuze. Ist Richtung Turm. Gruselig.', 3.4, 'Nessa');
      await this.say('Frag Mara. Die sieht von da oben alles.', 2.6, 'Nessa');
    } else {
      await this.say('Ist dir nicht kalt in dem Outfit?', 2.2, 'Leon');
      n.smile = 0.6;
      await this.say('Kalt? Schatz, dafür seh ich gut aus. Hat halt seinen Preis.', 3.4, 'Nessa');
      await this.say('Aber süß, dass du fragst. Wie heißt du?', 2.6, 'Nessa');
      await this.say('Leon.', 1.4, 'Leon');
      await this.say('Leon. Okay. Merk ich mir.', 2.4, 'Nessa');
      n.smile = 0.25;
    }
    if (G.inv.has('gatterKey') || G.inv.has('lockpick') || G.objects.gatter.open) {
      await this.say('Und jetzt willst du in den Wald? Nachts? Du bist echt mutig. Oder dumm.', 3.4, 'Nessa');
    } else {
      await this.say('Wenn du in den Wald willst: Das Gatter am Weg ist nachts zu.', 3.0, 'Nessa');
      await this.say('Der Platzwart legt den Schlüssel immer unter den Blumentopf am Kiosk. Hast du nicht von mir.', 3.8, 'Nessa');
      this.knowsPot = true;
    }
    await this.say('Hier. Für den Wald. Falls du rennen musst.', 2.6, 'Nessa');
    G.inv.add('energy'); G.audio.pickup();
    G.ui.hint('Nessa hat dir ein Energy gegeben: beim Rennen hältst du länger durch', 5);
    await this.say('Und Leon? Pass auf dich auf da drin. Ich will dich nochmal sehen.', 3.4, 'Nessa');
  } else {
    const lines = ['Was denn? Vermisst du mich schon?', 'Mara braucht noch. Die braucht immer noch.', 'Geh schon. Und lass dich nicht fressen.', 'Wenn du so weiterguckst, verlang ich Eintritt.'];
    await this.say(lines[Math.min(lines.length - 1, st.nessaTalks - 1)], 2.8, 'Nessa');
  }
  st.nessaTalks++;
  n.smile = 0; n.stand('phone');
};

// Mara oben am Geländer: sie hat Deniz gesehen – und den Mann
S.maraTalk = function () { return this.talk(() => this._maraTalk()); };
S._maraTalk = async function () {
  const st = this.st2, m = G.objects.mara;
  if (!st.maraTalked) {
    st.maraTalked = true;
    m.play('rail_call', { fade: 0.4 });
    await this.say('Hey! Du da oben!', 1.8, 'Leon');
    await this.say('Kommt drauf an, wer fragt.', 2.4, 'Mara');
    await this.say('Hast du hier wen gesehen? Einen Jungen, so alt wie ich?', 3.0, 'Leon');
    await this.say('Einer mit Kopfhörern war vorhin an der Bank. Ist dann zurück zur Straße.', 3.6, 'Mara');
    await this.wait(0.6);
    await this.say('Danach kam so ein großer Typ. Hat sich auf die Bank gesetzt und auf ein Handy gestarrt.', 4.0, 'Mara');
    await this.say('Nicht auf seins, glaub ich.', 2.4, 'Mara');
    await this.say('Deniz schreibt mir die ganze Zeit. Der ist im Wald.', 3.0, 'Leon');
    await this.say('Wenn du meinst.', 2.0, 'Mara');
    await this.wait(0.8);
    await this.say('Komm doch hoch. Die Aussicht ist besser als dein Plan.', 3.2, 'Mara');
    await this.say('Der Turm ist zu.', 1.8, 'Leon');
    await this.say('Für dich vielleicht.', 2.2, 'Mara');
    if (!G.objects.gatter.open && !G.inv.has('gatterKey') && !G.inv.has('lockpick')) {
      await this.say('Und wenn du durchs Gatter willst: Im Garagenhof hinter den Häusern steht eine Garage offen. Da liegt Werkzeug.', 4.4, 'Mara');
      this.knowsGarage = true;
    }
    m.stand('rail');
    this.mark('Mara hat den Mann gesehen');
  } else {
    const lines = ['Du schon wieder. Langweilig wird’s mit dir nicht.', 'Nessa wartet unten. Sag ihr, ich komm gleich.', 'Geh nicht in den Wald, wenn du nicht musst.'];
    await this.say(lines[Math.min(lines.length - 1, (this.maraN = (this.maraN || 0) + 1) - 1)], 3, 'Mara');
  }
};

// Münztelefon klingelt – wer abhebt, hört eine Frau. Oder eine Aufnahme.
S.payphoneRing = async function () {
  const E = G.objects.extra, A = G.audio, pp = E.payphone, pl = G.player;
  if (pp.rang) return;
  pp.rang = true;
  let ringing = true, rings = 0;
  const ring = () => { if (!ringing || !A.ready) return; for (let i = 0; i < 14; i++) A.tone({ pos: pp.pos, type: 'square', f: i % 2 ? 980 : 1240, d: 0.035, peak: 0.07, t: i * 0.05, rev: 0.4, ref: 3, lp: 3000 }); rings++; if (rings < 9) this.after(3.2, ring); else ringing = false; };
  ring();
  const it = this.interact({ story: true, pos: pp.pos, radius: 0.3, range: 2.3, text: 'Abheben', enabled: () => ringing,
    onUse: () => this.talk(async () => {
      ringing = false; pp.answered = true;
      A.burst({ pos: pp.pos, type: 'highpass', f: 2000, d: 0.03, peak: 0.4 });
      if (A.samplesReady) A.posLoop && A.posLoop('phoneStatic', 'amb_tv', pp.pos, 0.18);
      await this.say('…Hallo?', 1.6, 'Leon');
      await this.wait(1.4);
      A.breath(0.5);
      await this.wait(1.2);
      if (A.ready) A.babble({ pos: pp.pos, dur: 1.6, voice: 'phone', vol: 0.3 });
      G.ui.say('„…hilf mir … bitte …“', 2.8, '???');
      await this.wait(3.0);
      A.stopLoop('phoneStatic', 0.1);
      A.burst({ pos: pp.pos, type: 'highpass', f: 2500, d: 0.02, peak: 0.5 });
      for (let i = 0; i < 4; i++) A.tone({ pos: pp.pos, f: 425, d: 0.24, peak: 0.05, t: 0.4 + i * 0.5, rev: 0 });
      await this.wait(0.3);
      this.mark('Anruf im Garagenhof');
    }, { freeze: true }).then(() => this.say('Aufgelegt. Wer ruft nachts eine Telefonzelle an?', 3.4)) });
  void it;
};

// Schwarzes Auto: Scheinwerfer gehen an, Motor läuft – keiner drin
S.blackCarEvent = async function () {
  const E = G.objects.extra, A = G.audio, bc = E.blackCar, pl = G.player;
  if (A.ready) A.car('start', bc.pos, 0.8);
  await this.wait(0.9);
  bc.lights(true);
  if (A.ready) A.engine('blackCar', bc.pos, true, 0.35);
  G.post.scare(0.25);
  this.mark('Schwarzes Auto: Licht an');
  const t0 = G.time;
  await this.until(() => pl.p.distanceTo(bc.pos) < 7 || G.time - t0 > 9);
  bc.lights(false);
  if (A.ready) { A.engine('blackCar', bc.pos, false); A.car('off', bc.pos, 0.6); }
  await this.wait(0.8);
  await this.say('Da sitzt keiner drin. …Oder?', 2.8);
};

// Das Holzgatter am Waldeingang – blockiert, bis es offen ist
S.gatterSetup = function () {
  const O = G.objects, gt = O.gatter, pl = G.player, A = G.audio;
  if (!gt || gt.open) return;
  const st = this.st2 || (this.st2 = {});
  this.addUp(() => { if (!st.gateSeen && !gt.open && Math.hypot(pl.p.x, pl.p.z - gt.z) < 3.4) { st.gateSeen = true; this.gateFound(); } });
  this.interact({ story: true, pos: gt.lockPos, radius: 0.35, range: 2.5, once: false, text: 'Gatter untersuchen',
    enabled: () => !gt.open && !G.inv.has('gatterKey') && !G.inv.has('lockpick'),
    onUse: () => { if (!st.gateSeen) { st.gateSeen = true; this.gateFound(); } else G.ui.say(this.knowsPot ? 'Blumentopf am Kiosk, hat Nessa gesagt.' : '„Schlüssel: Platzwart (Kiosk)“ steht auf dem Schild.', 3); } });
  this.interact({ story: true, pos: gt.lockPos, radius: 0.35, range: 2.5, hold: 1.4, text: 'Mit dem kleinen Schlüssel aufschließen',
    enabled: () => !gt.open && G.inv.has('gatterKey'),
    onHold: (dt) => { if (rand() < dt * 5) A.keys(gt.lockPos); }, onUse: () => this.openGatter('key') });
  this.interact({ story: true, pos: gt.lockPos, radius: 0.35, range: 2.5, once: false, text: 'Schloss knacken',
    enabled: () => !gt.open && !G.inv.has('gatterKey') && G.inv.has('lockpick') && !G.pickOpen,
    onUse: async () => {
      pl.canInteract = false;
      const ok = await this.raceAbort(G.lockpick.start({ difficulty: 1 }));
      pl.canInteract = true;
      if (ok) this.openGatter('pick'); else G.ui.say('Später nochmal.', 1.6);
    } });
};

S.gateFound = async function () {
  this.obj('Finde einen Weg durch das Gatter');
  this.mark('Gatter zu');
  await this.say('Ein Gatter. Abgeschlossen.', 2.4);
  await this.say('Und oben Stacheldraht. Da klettere ich nicht drüber.', 3);
  const done = () => G.objects.gatter.open || G.inv.has('gatterKey') || G.inv.has('lockpick');
  if (done()) return;
  // Deniz meldet sich erst, wenn das Gespräch am Turm durch ist (sonst überschneiden sich die Chats)
  await this.until(() => (this.st2 && this.st2.towerDone) || done());
  if (done()) return;
  await this.wait(1.2);
  if (done()) return;
  this.msg('kletter einfach drüber 😂');
  await this.reply(['da ist stacheldraht drauf', 'wie bist du rüber?']);
  await this.wait(1.6);
  this.msg('der schlüssel liegt immer beim kiosk. unterm blumentopf');
  await this.wait(1.2);
  await this.say('Woher weiß der das?', 2.2);
};

S.openGatter = async function (how) {
  const gt = G.objects.gatter, A = G.audio;
  if (gt.open) return;
  if (A.ready) A.padlock(gt.lockPos);
  await this.wait(0.6);
  gt.set(true);
  if (A.ready) { A.creak(gt.lockPos, 1.1, 1.6); A.doorCreak(gt.lockPos); }
  this.mark(how === 'pick' ? 'Gatter geknackt' : 'Gatter aufgeschlossen');
  G.ui.say(how === 'pick' ? 'Klick. Offen.' : 'Passt.', 1.8);
  this.obj('Folge der Hügelschneise in den Wald');
};
