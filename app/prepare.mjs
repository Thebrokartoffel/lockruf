// Kopiert den fertigen Build (dist/) in die Electron-Hülle: app/game/Lockruf.html, game.js usw.
import { mkdirSync, copyFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, '..', 'dist'), game = join(here, 'game');
mkdirSync(game, { recursive: true });
for (const f of readdirSync(dist)) { if (f === 'assets') continue; copyFileSync(join(dist, f), join(game, f === 'index.html' ? 'Lockruf.html' : f)); }
console.log('app/game/ aktualisiert');
