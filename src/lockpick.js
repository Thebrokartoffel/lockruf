// Dietrich-Minispiel: Haken mit der Maus (oder dem Finger) über die Stifte schieben, Benutzen halten = Spanner dreht.
// Steht der Haken an der richtigen Stelle, dreht sich der Zylinder ganz und das Schloss springt auf.
// Falsch gedreht: der Haken spannt sich, wackelt und kann verbiegen (dann neuer Haken, das macht Geräusche).
// Läuft in der Simulation über die aufgezeichneten Eingaben (lx + Benutzen), damit Rückspulen exakt bleibt.
import { G } from './state.js';
import { Input, K } from './input.js';
import { rand } from './timers.js';

export class Lockpick {
  constructor() {
    this.el = document.getElementById('pick');
    this.cv = this.el.querySelector('canvas');
    this.ctx = this.cv.getContext('2d');
    this.info = this.el.querySelector('.info');
    const btn = this.el.querySelector('.tbtn');
    const dn = (e) => { e.preventDefault(); Input.keys.add('Touch_use'); Input.pressed.add('Touch_use'); };
    const upf = () => Input.keys.delete('Touch_use');
    btn.addEventListener('pointerdown', dn); btn.addEventListener('pointerup', upf); btn.addEventListener('pointercancel', upf); btn.addEventListener('pointerleave', upf);
    // Finger ziehen = Haken bewegen (wie Maus): über die gleiche Bewegungseingabe
    let last = null;
    this.cv.addEventListener('pointerdown', (e) => { last = e.clientX; });
    this.cv.addEventListener('pointermove', (e) => { if (last === null || !G.touchOn) return; Input.mx += (e.clientX - last) * 1.6; last = e.clientX; });
    addEventListener('pointerup', () => { last = null; });
    this.active = false;
  }
  // startet; liefert ein Promise mit true (offen) oder false (abgebrochen)
  start({ difficulty = 1 } = {}) {
    if (G.phoneOpen) G.ui.togglePhone(false);      // Handy weg, sonst liegt es über dem Schloss
    this.active = true;
    this.sweet = rand(-0.75, 0.75);           // Zielstellung des Hakens (-1..1)
    this.tol = 0.11 / difficulty;
    this.pos = 0; this.turn = 0; this.strain = 0; this.broken = 0; this.t = 0; this.cancelT = 0;
    this.el.classList.add('show');
    this.info.innerHTML = G.touchOn ? 'Über das Schloss wischen: Haken bewegen &nbsp;·&nbsp; DREHEN halten' : `Maus: Haken bewegen &nbsp;·&nbsp; <b>${K('use')}</b> halten: drehen &nbsp;·&nbsp; <b>${K('crouch')}</b> aufhören`;
    G.player.canMove = false; G.player.canLook = false; G.pickOpen = true;
    return new Promise((res) => { this.res = res; });
  }
  stop(ok) {
    this.active = false; G.pickOpen = false;
    this.el.classList.remove('show');
    G.player.canMove = true; G.player.canLook = true;
    if (this.res) { const r = this.res; this.res = null; r(ok); }
  }
  // ein Simulationsschritt
  update(dt) {
    if (!this.active) return;
    const A = G.audio;
    this.t += dt;
    if (Input.actHit('crouch') || Input.actHit('phone')) { this.stop(false); return; }
    const turning = Input.act('use');
    if (!turning || this.turn < 0.05) this.pos = Math.max(-1, Math.min(1, this.pos + Input.st.lx * 0.9));
    const off = Math.abs(this.pos - this.sweet);
    // wie weit sich der Zylinder bei dieser Hakenstellung drehen lässt
    const maxTurn = off < this.tol ? 1 : Math.max(0, 1 - (off - this.tol) * 3.2);
    if (turning) {
      const was = this.turn;
      this.turn = Math.min(maxTurn, this.turn + dt * 0.9);
      if (this.turn >= maxTurn - 0.01 && maxTurn < 1) {
        this.strain += dt;
        if (A.ready && Math.random() < dt * 9) A.burst({ f: 3200 + Math.random() * 1500, q: 7, d: 0.03, peak: 0.12 });
        if (this.strain > 1.25) {   // Haken verbiegt
          this.broken++; this.strain = 0; this.turn = 0;
          if (A.ready) { A.metalClang && A.metalClang(G.player.p.clone(), 0.35); }
          if (G.noise) G.noise.add(0.12, G.player.p, 'Dietrich');
          G.ui.say(this.broken === 1 ? 'Mist. Der Haken ist verbogen. Zum Glück sind noch welche im Etui.' : 'Noch einer hinüber …', 2.6);
          this.sweet = Math.max(-0.85, Math.min(0.85, this.sweet + rand(-0.12, 0.12)));
        }
      } else this.strain = Math.max(0, this.strain - dt * 0.5);
      if (A.ready && was < 0.02 && this.turn > 0.02) A.burst({ f: 2600, q: 5, d: 0.04, peak: 0.15 });
      if (this.turn >= 0.99) {
        if (A.ready) { A.sample && A.sample('k_metalLatch', { vol: 0.8 }); A.burst({ type: 'highpass', f: 3000, d: 0.03, peak: 0.4 }); }
        this.draw(); this.stop(true); return;
      }
    } else { this.turn = Math.max(0, this.turn - dt * 2.5); this.strain = 0; }
    // Stifte klicken leise beim Verschieben
    if (A.ready && Math.abs(Input.st.lx) > 0.004 && Math.random() < 0.35) A.burst({ f: 4200, q: 9, d: 0.012, peak: 0.05 });
    this.draw();
  }
  draw() {
    const c = this.ctx, W = this.cv.width, H = this.cv.height, cx = W / 2, cy = H / 2;
    c.clearRect(0, 0, W, H);
    // Gehäuse
    const gr = c.createRadialGradient(cx - 60, cy - 80, 20, cx, cy, 260);
    gr.addColorStop(0, '#9a8150'); gr.addColorStop(1, '#3e321c');
    c.fillStyle = gr; c.beginPath(); c.roundRect(cx - 190, cy - 150, 380, 330, 40); c.fill();
    c.strokeStyle = '#7a8088'; c.lineWidth = 26; c.beginPath(); c.arc(cx, cy - 150, 120, Math.PI, 0); c.stroke();
    // Zylinder (dreht sich)
    c.save(); c.translate(cx, cy + 20); c.rotate(this.turn * Math.PI / 2.2 + (this.strain > 0 ? Math.sin(this.t * 60) * 0.02 * this.strain : 0));
    c.fillStyle = '#c9b27a'; c.beginPath(); c.arc(0, 0, 78, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#0c0b0a'; c.beginPath(); c.roundRect(-12, -46, 24, 92, 8); c.fill();
    c.restore();
    // Haken: kommt von unten, Winkel nach Stellung
    const a = -Math.PI / 2 + this.pos * 1.25;
    c.save(); c.translate(cx, cy + 20); c.rotate(a + Math.PI / 2);
    c.strokeStyle = '#d9dde2'; c.lineWidth = 5; c.beginPath(); c.moveTo(0, 0); c.lineTo(0, 250); c.stroke();
    c.lineWidth = 4; c.beginPath(); c.moveTo(0, 0); c.lineTo(-10, -14); c.stroke();
    c.restore();
    // Spanner
    c.strokeStyle = '#8c9096'; c.lineWidth = 6; c.beginPath(); c.moveTo(cx + 8, cy + 66); c.lineTo(cx + 8 + 170 * Math.cos(this.turn * 0.7), cy + 66 + 10 + 170 * Math.sin(this.turn * 0.7)); c.stroke();
    // Spannungsanzeige
    if (this.strain > 0) { c.fillStyle = `rgba(255,60,40,${Math.min(0.6, this.strain / 1.25 * 0.6)})`; c.fillRect(cx - 190, cy + 200, 380 * Math.min(1, this.strain / 1.25), 8); }
  }
}
