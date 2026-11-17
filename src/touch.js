// Touch-Steuerung für Handy und Tablet.
// Links: Stick zum Gehen (ganz nach vorne = rennen). Rechts: wischen zum Umsehen. Buttons für die Aktionen.
// Alles läuft über virtuelle Tasten (Touch_<aktion>) und den analogen Stick in der Eingabe-Ebene. Dadurch wird
// Touch genauso aufgezeichnet wie Tastatur und Maus und das Rückspulen im Godmode funktioniert auch am Handy.
import { G } from './state.js';
import { Input } from './input.js';

const R = 58;              // Stick-Radius in CSS-Pixeln
const LOOK = 2.3;          // Wischen: Pixel -> Mauspixel-Äquivalent

export class Touch {
  constructor() {
    this.root = document.getElementById('touch');
    this.ptr = new Map();
    this.crouchOn = false;
    this.on = false;
    this.build();
  }

  enable(on) {
    this.on = on;
    G.touchOn = on;
    document.body.classList.toggle('touch', on);
    if (!on) { this.releaseAll(); document.body.classList.remove('phoneopen'); }
    else if (document.pointerLockElement) document.exitPointerLock();
  }

  build() {
    this.root.innerHTML = `
      <div class="tjoy"><div class="base"></div><div class="knob"></div></div>
      <button class="tb pause" data-act="pause" aria-label="Pause">☰</button>
      <div class="tcol">
        <button class="tb" data-k="flash">☀<span>Licht</span></button>
        <button class="tb" data-k="phone">▯<span>Handy</span></button>
        <button class="tb ctx" data-k="app">⇄<span>Karte</span></button>
      </div>
      <div class="tbtns">
        <button class="tb tog" data-k="crouch">⤓<span>Ducken</span></button>
        <button class="tb" data-k="jump">⤒<span>Springen</span></button>
        <button class="tb big" data-k="use">✋<span>Benutzen</span></button>
      </div>
      <div class="treply"><button class="tb rp" data-k="reply1"></button><button class="tb rp" data-k="reply2"></button></div>`;
    this.joyEl = this.root.querySelector('.tjoy');
    this.knob = this.root.querySelector('.knob');
    this.btn = {};
    for (const b of this.root.querySelectorAll('[data-k]')) this.btn[b.dataset.k] = b;
    const r = this.root;
    r.addEventListener('pointerdown', (e) => this.down(e), { passive: false });
    r.addEventListener('pointermove', (e) => this.move(e), { passive: false });
    for (const t of ['pointerup', 'pointercancel', 'lostpointercapture']) r.addEventListener(t, (e) => this.up(e));
    r.addEventListener('contextmenu', (e) => e.preventDefault());
    // iOS: Scrollen, Zoomen, Lupe verhindern, solange gespielt wird
    // Scrollen nur im Godmode-Panel und in Menüs erlauben
    const stop = (e) => { if (e.target && e.target.closest && e.target.closest('#dev, #menu')) return; if (this.on && G.started && !G.paused) e.preventDefault(); };
    document.addEventListener('touchmove', stop, { passive: false });
    document.addEventListener('gesturestart', stop, { passive: false });
    document.addEventListener('dblclick', stop, { passive: false });
    // Hochkant: Hinweis zum Drehen, mit Ausweg (manche Apps lassen sich nicht drehen)
    const go = document.querySelector('#rotate .go');
    if (go) go.addEventListener('click', () => document.body.classList.add('portraitok'));
  }

  press(k) { const c = 'Touch_' + k; if (!Input.keys.has(c)) Input.pressed.add(c); Input.keys.add(c); }
  release(k) { Input.keys.delete('Touch_' + k); }
  releaseAll() {
    for (const k of Object.keys(this.btn)) if (k !== 'crouch' || !this.crouchOn) this.release(k);
    this.ptr.clear(); Input.ax = 0; Input.az = 0; this.showJoy(null);
  }

  down(e) {
    if (!this.on) return;
    e.preventDefault();
    const b = e.target.closest('button');
    try { this.root.setPointerCapture(e.pointerId); } catch (err) { /* egal */ }
    if (b) {
      if (b.dataset.act === 'pause') { if (G.pauseGame) G.pauseGame(); return; }
      const k = b.dataset.k;
      if (k === 'crouch') { this.crouchOn = !this.crouchOn; if (this.crouchOn) this.press('crouch'); else this.release('crouch'); b.classList.toggle('on', this.crouchOn); return; }
      this.press(k); b.classList.add('down');
      this.ptr.set(e.pointerId, { kind: 'btn', k, el: b });
      return;
    }
    // Antwort direkt auf dem Handy-Bildschirm antippen. Läuft über die virtuellen Tasten, wird also mit aufgezeichnet.
    if (G.phoneOpen) {
      const hit = document.elementsFromPoint(e.clientX, e.clientY).find((el) => el.closest && el.closest('#phone .reply .opt'));
      if (hit) {
        const opt = hit.closest('.opt'), i = [...document.querySelectorAll('#phone .reply .opt')].indexOf(opt);
        if (i === 0 || i === 1) {
          const k = 'reply' + (i + 1);
          this.press(k); opt.classList.add('down');
          this.ptr.set(e.pointerId, { kind: 'btn', k, el: opt });
          return;
        }
      }
    }
    if (e.clientX < innerWidth * 0.42) {
      // Stick erscheint dort, wo der Daumen aufsetzt
      for (const p of this.ptr.values()) if (p.kind === 'joy') return;
      this.ptr.set(e.pointerId, { kind: 'joy', cx: e.clientX, cy: e.clientY });
      this.showJoy(e.clientX, e.clientY);
      this.setStick(0, 0);
    } else this.ptr.set(e.pointerId, { kind: 'look', x: e.clientX, y: e.clientY });
  }

  move(e) {
    const p = this.ptr.get(e.pointerId); if (!p) return;
    e.preventDefault();
    if (p.kind === 'joy') {
      let dx = e.clientX - p.cx, dy = e.clientY - p.cy;
      const l = Math.hypot(dx, dy);
      // Stick folgt dem Daumen, wenn er weit über den Rand hinausgeht
      if (l > R * 1.6) { const k = (l - R * 1.6) / l; p.cx += dx * k; p.cy += dy * k; dx = e.clientX - p.cx; dy = e.clientY - p.cy; this.showJoy(p.cx, p.cy); }
      this.setStick(dx, dy);
    } else if (p.kind === 'look') {
      Input.mx += (e.clientX - p.x) * LOOK;
      Input.my += (e.clientY - p.y) * LOOK;
      p.x = e.clientX; p.y = e.clientY;
    }
  }

  up(e) {
    const p = this.ptr.get(e.pointerId); if (!p) return;
    this.ptr.delete(e.pointerId);
    if (p.kind === 'btn') { this.release(p.k); p.el.classList.remove('down'); }
    if (p.kind === 'joy') { Input.ax = 0; Input.az = 0; this.showJoy(null); }
  }

  setStick(dx, dy) {
    let l = Math.hypot(dx, dy);
    const cl = Math.min(R, l);
    const kx = l > 0 ? dx / l * cl : 0, ky = l > 0 ? dy / l * cl : 0;
    this.knob.style.transform = `translate(${kx}px, ${ky}px)`;
    let ax = kx / R, az = ky / R;
    const m = Math.hypot(ax, az);
    if (m < 0.14) { ax = 0; az = 0; } else { const s = (m - 0.14) / 0.86 / m; ax *= s; az *= s; }   // Totzone
    Input.ax = ax; Input.az = az;
    this.joyEl.classList.toggle('run', Math.hypot(ax, az) > 0.9 && az < -0.45);
  }
  showJoy(x, y) {
    const j = this.joyEl;
    if (x === null) { j.classList.remove('act'); j.style.left = ''; j.style.top = ''; this.knob.style.transform = ''; j.classList.remove('run'); return; }
    j.classList.add('act'); j.style.left = x + 'px'; j.style.top = y + 'px';
  }

  // pro Frame: Buttons je nach Lage zeigen
  update() {
    if (!this.on) return;
    const ui = G.ui, b = this.btn;
    const reply = ui.reply && G.phoneOpen && ui.phoneTab === 'chat';
    for (let i = 0; i < 2; i++) {
      const el = b['reply' + (i + 1)], o = reply ? ui.reply.options[i] : null;
      el.style.display = o ? 'block' : 'none';
      if (o && el.dataset.t !== o) { el.dataset.t = o; el.textContent = (i + 1) + '  ' + o; }
    }
    b.app.style.display = G.phoneOpen && G.phone.mapUnlocked ? '' : 'none';
    b.app.querySelector('span').textContent = ui.phoneTab === 'map' ? 'Chat' : 'Karte';
    b.phone.classList.toggle('attn', !!ui.reply && !G.phoneOpen);
    b.phone.classList.toggle('on', !!G.phoneOpen);
    document.body.classList.toggle('phoneopen', !!G.phoneOpen);
    b.flash.classList.toggle('on', !!G.player.flashOn);
    b.use.classList.toggle('hot', !!G.player.current || !!G.noteOpen);
    b.use.querySelector('span').textContent = G.noteOpen ? 'Schließen' : 'Benutzen';
    const narr = document.getElementById('narration').classList.contains('show');
    this.root.classList.toggle('narr', narr);
    b.jump.querySelector('span').textContent = narr ? 'Weiter' : 'Springen';
    if (this.crouchOn !== b.crouch.classList.contains('on')) b.crouch.classList.toggle('on', this.crouchOn);
    // erzwungene Haltung (Schacht, Versteck) übernimmt das Spiel selbst
  }
}
