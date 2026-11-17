// Eingabe: Tastatur, Maus, Pointer-Lock, frei belegbare Tasten.
// Das Spiel liest nur Aktionen (vorwärts, rennen, benutzen …), nie rohe Tasten. Dadurch lässt sich jede
// Eingabe pro Frame aufzeichnen und für das Rückspulen im Godmode exakt wieder abspielen.
import { G } from './state.js';

export const DEFAULT_KEYS = {
  forward: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD', sprint: 'ShiftLeft', crouch: 'KeyC', jump: 'Space',
  use: 'KeyE', flash: 'KeyF', phone: 'Tab', reply1: 'Digit1', reply2: 'Digit2', app: 'KeyQ',
};
import { ICONS } from './icons.js';
export const KEY_LABELS = {
  forward: 'Vorwärts', back: 'Rückwärts', left: 'Links', right: 'Rechts', sprint: 'Rennen', crouch: 'Ducken', jump: 'Springen',
  use: 'Benutzen', flash: 'Taschenlampe', phone: 'Handy', reply1: 'Antwort 1', reply2: 'Antwort 2', app: 'Handy: Chat/Karte',
};
// Aktionen als Bits. confirm = Enter/Escape (Notizen schließen, Erzählung überspringen)
export const ACTIONS = ['forward', 'back', 'left', 'right', 'sprint', 'crouch', 'jump', 'use', 'flash', 'phone', 'reply1', 'reply2', 'app', 'confirm'];
const BIT = Object.fromEntries(ACTIONS.map((a, i) => [a, 1 << i]));
const ARROWS = { forward: 'ArrowUp', back: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' };

const NAMES = { Space: 'Leertaste', ShiftLeft: 'Shift', ShiftRight: 'Shift rechts', ControlLeft: 'Strg', ControlRight: 'Strg rechts', AltLeft: 'Alt', Tab: 'Tab', Enter: 'Enter', CapsLock: 'Feststell', Backspace: 'Rücktaste',
  ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Mouse0: 'Linke Maus', Mouse1: 'Mittlere Maus', Mouse2: 'Rechte Maus', Mouse3: 'Maus 4', Mouse4: 'Maus 5' };
export function keyName(code) {
  if (!code) return '–';
  if (NAMES[code]) return NAMES[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return code;
}
const TOUCH_LABELS = { use: ICONS.use, jump: ICONS.jump, crouch: ICONS.crouch, flash: ICONS.flash, phone: ICONS.phone, reply1: '1', reply2: '2', app: ICONS.map,
  sprint: 'Stick ganz vor', forward: 'Stick', back: 'Stick', left: 'Stick', right: 'Stick', confirm: ICONS.use };
export const K = (a) => {
  if (G.touchOn && TOUCH_LABELS[a]) return TOUCH_LABELS[a];
  const c = (G.settings.keys || DEFAULT_KEYS)[a];
  if (a === 'sprint' && (c === 'ShiftLeft' || c === 'ShiftRight')) return 'Shift';
  return keyName(c);
};

const isTyping = (e) => {
  const t = e.target;
  if (!t || !t.tagName) return false;
  if (t.isContentEditable) return true;
  return t.tagName === 'TEXTAREA' || (t.tagName === 'INPUT' && !['range', 'checkbox', 'button'].includes(t.type));
};

export const Input = {
  keys: new Set(),
  pressed: new Set(),   // in diesem Frame gedrückt (roh)
  mx: 0, my: 0,
  wheel: 0,
  locked: false,
  canvas: null,
  onLockChange: null,
  onLockFail: null,
  // Aktionszustand, den das Spiel liest (live berechnet oder aus der Aufzeichnung gesetzt)
  st: { held: 0, hit: 0, lx: 0, ly: 0, ax: 0, az: 0 },
  ax: 0, az: 0,          // analoger Stick (Touch): x rechts, z vorwärts negativ

  init(canvas) {
    this.canvas = canvas;
    window.addEventListener('keydown', (e) => {
      if (this.capture) { e.preventDefault(); const c = this.capture; this.capture = null; c(e.code); return; }
      if (isTyping(e)) return;
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'F5', 'F1', 'F3', 'F7'].includes(e.code) || e.ctrlKey || e.altKey) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => this.keys.clear());
    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      // Ausreißer (Browser-Bug bei Pointer-Lock) ignorieren
      if (Math.abs(e.movementX) > 300 || Math.abs(e.movementY) > 300) return;
      this.mx += e.movementX; this.my += e.movementY;
    });
    document.addEventListener('mousedown', (e) => {
      if (this.capture && e.button !== 0) { const c = this.capture; this.capture = null; c('Mouse' + e.button); return; }
      if (this.locked) this.pressed.add('Mouse' + e.button);
      this.keys.add('Mouse' + e.button);
    });
    document.addEventListener('wheel', (e) => { if (this.locked) this.wheel += Math.sign(e.deltaY); }, { passive: true });
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('mouseup', (e) => { this.keys.delete('Mouse' + e.button); });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (this.locked) this.lastLock = performance.now(); else this.lastUnlock = performance.now();
      if (this.onLockChange) this.onLockChange(this.locked);
    });
    // Chrome/Electron melden fehlgeschlagene Sperren auch als Event
    document.addEventListener('pointerlockerror', () => { if (!this.locked && this.onLockFail) this.onLockFail(); });
  },

  // Pointer-Lock anfordern. Liefert ein Promise, das bei Erfolg auflöst und bei Fehlschlag ablehnt.
  // Kein Fehler darf als "unhandled rejection" durchrutschen (das war der rote Fehler im Keller).
  lock() {
    if (this.locked) return Promise.resolve();
    if (!this.canvas) return Promise.reject(new Error('kein Canvas'));
    const req = (opts) => {
      try {
        const p = opts ? this.canvas.requestPointerLock(opts) : this.canvas.requestPointerLock();
        if (p && typeof p.then === 'function') return p;
        // ältere Browser: kein Promise, Ergebnis kommt über pointerlockchange
        return new Promise((res, rej) => {
          const t0 = performance.now();
          const chk = () => { if (this.locked) res(); else if (performance.now() - t0 > 600) rej(new Error('pointer lock timeout')); else requestAnimationFrame(chk); };
          chk();
        });
      } catch (e) { return Promise.reject(e); }
    };
    return req({ unadjustedMovement: true })
      .catch((e) => {
        // "unadjustedMovement" wird nicht überall unterstützt → ohne Option erneut
        if (e && /unadjusted|NotSupported/i.test(String(e.name || e.message))) return req();
        throw e;
      })
      .then(() => { this.lockFailed = false; })
      .catch((e) => { this.lockFailed = true; if (this.onLockFail) this.onLockFail(e); throw e; });
  },
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); },

  // ---- Aktionen ----
  key(a) { return (G.settings.keys || DEFAULT_KEYS)[a] || DEFAULT_KEYS[a]; },
  _codesFor(a) {
    const c = this.key(a);
    const out = [c];
    // Rennen: beide Shift-Tasten, wenn auf Shift gelegt
    if (a === 'sprint' && (c === 'ShiftLeft' || c === 'ShiftRight')) out.push(c === 'ShiftLeft' ? 'ShiftRight' : 'ShiftLeft');
    if (ARROWS[a]) out.push(ARROWS[a]);
    if (a === 'confirm') out.push('Enter', 'Escape', 'NumpadEnter', 'Touch_use');
    out.push('Touch_' + a);        // Bildschirm-Buttons am Handy
    return out;
  },
  // aus den rohen Tasten den Aktionszustand dieses Frames bilden
  sample() {
    let held = 0, hit = 0;
    for (const a of ACTIONS) {
      for (const c of this._codesFor(a)) {
        if (this.keys.has(c)) held |= BIT[a];
        if (this.pressed.has(c)) hit |= BIT[a];
      }
    }
    const S = G.settings, k = 0.0022 * (S.sens || 1);
    // Stick ganz nach vorne gedrückt = rennen
    if (Math.hypot(this.ax, this.az) > 0.9 && this.az < -0.45) held |= BIT.sprint;
    this.st = { held, hit, lx: this.mx * k, ly: this.my * k * (S.invertY ? -1 : 1), ax: this.ax, az: this.az };
    return this.st;
  },
  apply(st) { this.st = { ax: 0, az: 0, ...st }; },
  // nach dem ersten Teilschritt eines Frames: Tastendrücke und Mausbewegung nicht doppelt verwenden
  consume() { this.st = { held: this.st.held, hit: 0, lx: 0, ly: 0, ax: this.st.ax, az: this.st.az }; },
  act(a) { return (this.st.held & BIT[a]) !== 0; },
  actHit(a) { return (this.st.hit & BIT[a]) !== 0; },
  // rohe Abfragen nur noch für Menüs/Dev-Werkzeuge (nicht Teil der Spielsimulation)
  down(code) { return this.keys.has(code); },
  hit(code) { return this.pressed.has(code); },
  endFrame() { this.pressed.clear(); this.mx = 0; this.my = 0; this.wheel = 0; },
};
