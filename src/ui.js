// UI: Ziel, Untertitel, Prompt, Handy, Notizen, Übergänge
import { G } from './state.js';
import { K, Input } from './input.js';
import { gwait } from './timers.js';

const $ = (s) => document.querySelector(s);

// Gegenstände für die Taschen-Ansicht
export const ITEMS = {
  jacket: { i: '🧥', n: 'Jacke', d: 'Dünn. Für Halloween reicht es hoffentlich.' },
  homeKeys: { i: '🔑', n: 'Hausschlüssel', d: 'Von Papas Nachttisch. Nicht klimpern lassen.' },
  gatterKey: { i: '🗝', n: 'Kleiner Schlüssel', d: 'Lag unterm Blumentopf am Kiosk. Passt vielleicht ans Holzgatter.' },
  lockpick: { i: '🪛', n: 'Dietrich-Set', d: 'Spanner und Haken aus der offenen Garage. Für ein einfaches Vorhängeschloss.' },
  energy: { i: '🥫', n: 'Energy von Nessa', d: '„Für den Wald. Falls du rennen musst.“ Damit hältst du beim Rennen länger durch.' },
  torKey: { i: '🗝', n: 'Schlüssel „TOR 3“', d: 'Aus dem Keller. Für das Tor am Wildzaun.' },
  screwdriver: { i: '🪛', n: 'Schraubendreher', d: 'Kreuzschlitz, aus der Werkbank im Keller.' },
};

export class UI {
  constructor() {
    this.el = {
      fade: $('#fade'), obj: $('#objective'), objTxt: $('#objective .txt'), sub: $('#subtitle'), cross: $('#crosshair'),
      prompt: $('#prompt'), promptTxt: $('#prompt .txt'), promptCirc: $('#prompt circle'), hint: $('#hint'), card: $('#card'),
      narr: $('#narration'), narrBox: $('#narration .box'), phone: $('#phone'), app: $('#phone .app'), notif: $('#notif'),
      note: $('#note'), paper: $('#note .paper'), menu: $('#menu'), death: $('#death'), clock: $('#clock'),
      ptm: $('#phone .tm'), pnet: $('#phone .net'), ppct: $('#phone .pct'), pbatt: $('#phone .batt'), pdead: $('#phone .dead'),
    };
    this.subTimer = null; this.hintTimer = null; this.notifTimer = null;
    this.phoneTab = 'chat';
    G.chat = [];
    this.reply = null;
    this.mapCanvas = null;
  }

  // ---------- Grundlagen ----------
  fade(to, dur = 1) {
    const f = this.el.fade;
    f.style.transition = `opacity ${dur}s linear`;
    // erzwingt Reflow, damit die Transition greift
    void f.offsetWidth;
    f.style.opacity = to;
    this.fadeTarget = to;
    return gwait(dur + 0.03);
  }
  objective(t) {
    const o = this.el.obj;
    if (!t) { o.classList.remove('show'); this.currentObjective = null; return; }
    if (this.el.objTxt.textContent === t && o.classList.contains('show')) return;
    o.classList.remove('show');
    setTimeout(() => {
      this.el.objTxt.textContent = t;
      o.classList.add('show'); o.classList.remove('flash'); void o.offsetWidth; o.classList.add('flash');
    }, 350);
    this.currentObjective = t;
  }
  say(text, dur = 3.2, who = null, thought = true) {
    const s = this.el.sub;
    clearTimeout(this.subTimer);
    if (!text) { s.classList.remove('show'); return; }
    s.innerHTML = (who ? `<span class="who">${who}:</span>` : '') + `<span class="${who ? '' : thought ? 'thought' : ''}">${text}</span>`;
    s.classList.add('show');
    this.subTimer = setTimeout(() => s.classList.remove('show'), dur * 1000);
  }
  prompt(text, prog = 0, hold = false) {
    const p = this.el.prompt;
    if (!text) { p.classList.remove('show'); this.el.cross.classList.remove('active'); return; }
    p.classList.add('show');
    this.el.cross.classList.add('active');
    const kb = p.querySelector('.key'); const kn = K('use');
    if (kb.firstChild.nodeValue !== kn) { kb.firstChild.nodeValue = kn; kb.style.width = Math.max(28, kn.length * 9 + 12) + 'px'; }
    if (this.el.promptTxt.textContent !== text) this.el.promptTxt.textContent = text + (hold ? ' (halten)' : '');
    this.el.promptCirc.style.strokeDashoffset = 113 * (1 - prog);
  }
  hint(html, dur = 5) {
    const h = this.el.hint;
    clearTimeout(this.hintTimer);
    if (!html) { h.classList.remove('show'); return; }
    h.innerHTML = html; h.classList.add('show');
    this.hintTimer = setTimeout(() => h.classList.remove('show'), dur * 1000);
  }
  crosshair(on) { this.el.cross.classList.toggle('hide', !on); }
  async card(t1, t2, dur = 3) {
    const c = this.el.card;
    c.querySelector('.t1').textContent = t1; c.querySelector('.t2').textContent = t2;
    c.classList.add('show');
    await gwait(dur);
    c.classList.remove('show');
    await gwait(1.2);
  }
  async narration(paras, { perPara = 3.6, onSkip } = {}) {
    const n = this.el.narr, box = this.el.narrBox;
    box.innerHTML = paras.map((p) => `<p>${p}</p>`).join('');
    n.classList.add('show');
    const ps = [...box.querySelectorAll('p')];
    let skipped = false;
    // Überspringen über die Aktions-Eingabe (Leertaste/Enter/Esc) – läuft in Spielzeit und ist damit aufzeichenbar
    const skip = () => G.started ? (Input.actHit('jump') || Input.actHit('confirm')) : false;
    const onKey = (e) => { if (!G.started && (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape')) skipped = true; };
    window.addEventListener('keydown', onKey);
    for (const p of ps) {
      if (skipped) break;
      p.classList.add('on');
      let t = 0;
      const len = perPara + p.textContent.length * 0.022;
      while (t < len && !skipped) { await gwait(0.05); t += 0.05; if (skip()) skipped = true; }
    }
    if (!skipped) await gwait(1.2);
    ps.forEach((p) => p.classList.remove('on'));
    await gwait(1.3);
    window.removeEventListener('keydown', onKey);
    n.classList.remove('show');
    if (skipped && onSkip) onSkip();
  }
  note(text) {
    this.el.paper.textContent = text;
    this.el.note.querySelector('.close').textContent = G.touchOn ? 'Irgendwo tippen zum Schließen' : `[${K('use')}] schließen`;
    this.el.note.classList.add('show');
    G.noteOpen = true;
    return new Promise((res) => { this._noteRes = res; });
  }
  closeNote() {
    if (!G.noteOpen) return;
    this.el.note.classList.remove('show'); G.noteOpen = false;
    if (this._noteRes) { this._noteRes(); this._noteRes = null; }
  }
  clockShow(on) { this.el.clock.classList.toggle('show', on); }

  // ---------- Handy ----------
  setTime(t) { G.phone.time = t; this.refreshStatus(); }
  refreshStatus() {
    const ph = G.phone;
    const pct = Math.max(0, Math.round(ph.battery));
    this.el.ptm.textContent = ph.time;
    this.el.pnet.textContent = ph.network ? 'LTE' : 'Kein Netz';
    this.el.ppct.textContent = pct + '%';
    this.el.pbatt.querySelector('i').style.width = Math.max(4, pct) + '%';
    this.el.pbatt.classList.toggle('low', pct <= 10 && !ph.charging);
    this.el.pbatt.classList.toggle('chg', ph.charging);
    this.el.clock.querySelector('.tm').textContent = ph.time;
    this.el.clock.querySelector('.bat').textContent = (ph.charging ? '⚡ ' : '') + 'Akku ' + pct + '%';
    this.el.pdead.classList.toggle('on', pct <= 0);
  }
  addMsg(from, text, time) {
    G.chat.push({ from, text, time: time || G.phone.time });
    if (G.phoneOpen) this.renderPhone();
  }
  notify(from, text) {
    const n = this.el.notif;
    n.querySelector('.from').innerHTML = `${from} <span>jetzt</span>`;
    n.querySelector('.body').textContent = text;
    n.querySelector('.hint').innerHTML = G.touchOn ? 'Handy-Button antippen' : `[${K('phone')}] Handy`;
    n.classList.add('show');
    clearTimeout(this.notifTimer);
    this.notifTimer = setTimeout(() => n.classList.remove('show'), 4200);
  }
  hideNotif() { this.el.notif.classList.remove('show'); }
  setReply(options) {
    return new Promise((res) => {
      this.reply = { options, res };
      if (G.phoneOpen) this.renderPhone();
    });
  }
  // Gesprächsauswahl vor Ort (Tasten 1/2, Klick oder Tippen); läuft über die Antwort-Aktionen, damit sie mit aufgezeichnet wird
  setChoice(options, who = '') {
    const el = document.getElementById('choice');
    return new Promise((res) => {
      this.choice = { options, res };
      el.innerHTML = (who ? `<div class="who">${who}</div>` : '') + options.map((o, i) => `<div class="opt" data-i="${i}">${G.touchOn ? '' : `<b>${K(i ? 'reply2' : 'reply1')}</b>`}${o}</div>`).join('');
      for (const d of el.querySelectorAll('.opt')) d.addEventListener('click', () => { const c = 'Touch_reply' + (+d.dataset.i + 1); Input.keys.add(c); Input.pressed.add(c); setTimeout(() => Input.keys.delete(c), 90); });
      el.classList.add('show');
    });
  }
  clearChoice() { this.choice = null; const el = document.getElementById('choice'); el.classList.remove('show'); el.innerHTML = ''; }
  chooseReply(i) {
    if (this.choice) { const c = this.choice; if (!c.options[i]) return false; this.clearChoice(); G.audio.ready && G.audio.click(); c.res(i); return true; }
    if (!this.reply || !G.phoneOpen || this.phoneTab !== 'chat') return false;
    const o = this.reply.options[i]; if (!o) return false;
    const r = this.reply; this.reply = null;
    this.addMsg('me', o);
    G.audio.send();
    this.renderPhone();
    r.res(i);
    return true;
  }
  togglePhone(force) {
    const open = force !== undefined ? force : !G.phoneOpen;
    if (open && G.phone.dropped) { this.say('Mein Handy liegt irgendwo am Boden.', 2.6); return; }
    if (open && G.flags.noPhone) { this.say('Das Handy lädt noch auf der Werkbank.', 2.6); return; }
    if (open && !G.flags.hasPhone) return;
    G.phoneOpen = open;
    this.el.phone.classList.toggle('open', open);
    document.body.classList.toggle('phoneopen', open);
    if (open) { this.hideNotif(); this.renderPhone(); G.unread = 0; }
  }
  renderPhone() {
    this.refreshStatus();
    const app = this.el.app;
    if (this.phoneTab === 'map' && G.phone.mapUnlocked) {
      if (!this.mapCanvas) {
        app.innerHTML = '<div class="head"><div class="av" style="background:#2b6e3d">⌖</div><div><div class="name">Karten</div><div class="sub">Stadtwald, Frankfurt</div></div></div>';
        this.mapCanvas = document.createElement('canvas'); this.mapCanvas.width = 250; this.mapCanvas.height = 400;
        app.appendChild(this.mapCanvas);
        const tabs = document.createElement('div'); tabs.className = 'tabs'; tabs.innerHTML = `<span>[${K('app')}] Chat</span><span class="on">Karte</span>`; app.appendChild(tabs);
      }
      this.drawMap();
      return;
    }
    this.mapCanvas = null;
    const tabsHtml = (on) => { const t = [['chat', 'Chat'], ...(G.phone.mapUnlocked ? [['map', 'Karte']] : []), ['inv', 'Taschen']]; return `<div class="tabs">${t.map(([k, n]) => `<span class="${k === on ? 'on' : ''}">${n}</span>`).join('')}<span>${G.touchOn ? '' : `[${K('app')}] weiter`}</span></div>`; };
    if (this.phoneTab === 'inv') {
      const items = [...G.inv].filter((k) => ITEMS[k]).map((k) => `<div class="it"><div class="ic">${ITEMS[k].i}</div><div><div class="nm">${ITEMS[k].n}</div><div class="ds">${ITEMS[k].d}</div></div></div>`).join('');
      app.innerHTML = `<div class="head"><div class="av" style="background:#5a4a2a">▤</div><div><div class="name">Taschen</div><div class="sub">Jacke und Hose</div></div></div><div class="inv">${items || '<div class="empty">Nichts dabei.</div>'}</div>${tabsHtml('inv')}`;
      return;
    }
    const msgs = G.chat.slice(-9).map((m) => {
      if (m.from === 'day') return `<div class="day">${m.text}</div>`;
      return `<div class="msg ${m.from === 'me' ? 'me' : 'them'}">${m.text}</div>`;
    }).join('');
    let reply = '<div class="ph">Nachricht …</div>';
    if (this.reply) reply = this.reply.options.map((o, i) => `<div class="opt">${G.touchOn ? '' : `<b>[${K(i ? 'reply2' : 'reply1')}]</b>`}${o}</div>`).join('');
    const tabs = tabsHtml('chat');
    app.innerHTML = `<div class="head"><div class="av">D</div><div><div class="name">Deniz</div><div class="sub">${G.phone.network ? 'online' : 'zuletzt online 02:12'}</div></div></div>
      <div class="chat">${msgs}</div><div class="reply">${reply}</div>${tabs}`;
  }
  drawMap() {
    const c = this.mapCanvas; if (!c) return;
    const ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    ctx.fillStyle = '#1d2a1e'; ctx.fillRect(0, 0, W, H);
    const p = G.player.p;
    const sc = 1.6;
    const tx = (x) => W / 2 + (x - p.x) * sc, ty = (z) => H / 2 + (z - p.z) * sc;
    const md = G.mapData || { lines: [], labels: [] };
    for (const l of md.lines) {
      ctx.strokeStyle = l.color; ctx.lineWidth = l.width; ctx.setLineDash(l.dash || []);
      ctx.beginPath();
      l.pts.forEach((q, i) => (i ? ctx.lineTo(tx(q[0]), ty(q[1])) : ctx.moveTo(tx(q[0]), ty(q[1]))));
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.font = '10px Arial'; ctx.fillStyle = '#cfd8c8';
    for (const lb of md.labels) ctx.fillText(lb.t, tx(lb.x), ty(lb.z));
    // Spieler
    const f = G.player.forward();
    const a = Math.atan2(f.x, -f.z);
    ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(a);
    ctx.fillStyle = 'rgba(70,140,255,.25)'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 34, -Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5); ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(W / 2, H / 2, 7, 0, 7); ctx.fill();
    ctx.fillStyle = '#3d8bff'; ctx.beginPath(); ctx.arc(W / 2, H / 2, 5, 0, 7); ctx.fill();
  }
  switchTab() {
    if (!G.phoneOpen) return;
    const tabs = ['chat', ...(G.phone.mapUnlocked ? ['map'] : []), 'inv'];
    this.phoneTab = tabs[(tabs.indexOf(this.phoneTab) + 1) % tabs.length];
    this.mapCanvas = null;
    this.renderPhone();
  }

  // ---------- Menüs ----------
  menu(html) {
    const m = this.el.menu;
    if (!html) { m.classList.remove('show'); m.innerHTML = ''; return; }
    m.innerHTML = html; m.classList.add('show');
  }
  death(on, t = 'ER HAT DICH.', sub = 'Checkpoint wird geladen …') {
    const d = this.el.death;
    if (on) { d.querySelector('.t').textContent = t; d.querySelector('.s').textContent = sub; }
    d.classList.toggle('show', on);
  }

  // ---------- HUD: Ausdauer, Geräuschpegel, Mikrofon ----------
  hud(dt) {
    const pl = G.player; if (!pl) return;
    if (!this._st) { this._st = document.getElementById('stamina'); this._sti = this._st.querySelector('i'); this._nz = document.getElementById('noise'); this._nzi = this._nz.querySelector('i'); this._nzm = this._nz.querySelector('.mic'); this._stv = 0; }
    const show = G.started && !G.paused && (pl.stamina < 0.995 || pl.sprinting);
    this._stv = show ? Math.min(1, this._stv + dt * 4) : Math.max(0, this._stv - dt * 1.2);
    this._st.style.opacity = this._stv.toFixed(2);
    this._sti.style.width = (pl.stamina * 100).toFixed(1) + '%';
    this._st.classList.toggle('ex', pl.exhausted > 0);
    // Geräuschanzeige nur, wenn jemand zuhört (Vater) oder das Mikro an ist
    const N = G.noise;
    const listen = G.started && !G.paused && N && (N.listening || (G.mic && G.mic.on));
    this._nz.classList.toggle('show', !!listen);
    if (listen) {
      const lvl = Math.min(1, Math.max(N.level || 0, G.mic && G.mic.on ? G.mic.level : 0));
      this._nzi.style.width = (lvl * 100).toFixed(0) + '%';
      this._nz.classList.toggle('loud', lvl > 0.6);
      this._nzm.style.display = G.mic && G.mic.on ? 'inline' : 'none';
    }
  }
}

// Handy-UI an den Bildschirm anpassen: Höhe passt immer ganz ins Bild, rechts Platz für die Touch-Buttons.
// zoom skaliert in Chromium auch right/bottom mit, deshalb werden die Abstände durch z geteilt.
export function layoutPhone() {
  const w = innerWidth, h = innerHeight, portrait = h > w;
  const z = Math.min(1, Math.max(0.4, (h - 26) / 552));
  const rightPx = portrait ? (w - 276 * z) / 2 : G.touchOn ? 104 : w * 0.06;
  const left = w - rightPx - 276 * z;
  const r = document.documentElement.style;
  r.setProperty('--phz', z.toFixed(3));
  r.setProperty('--phr', (rightPx / z).toFixed(1) + 'px');
  r.setProperty('--phl', Math.max(0, left).toFixed(0) + 'px');
  r.setProperty('--rpr', Math.round(rightPx + 276 * z + 14) + 'px');
}

