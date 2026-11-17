// LOCKRUF bauen
//   node build.mjs          -> dist/  lesbar, für Entwicklung und Tests
//   node build.mjs --min    -> dist/  minifiziert (für die Desktop-App)
//   node build.mjs --pages  -> docs/  minifiziert, für GitHub Pages
import * as esbuild from 'esbuild';
import { copyFileSync, readdirSync, mkdirSync, writeFileSync, readFileSync, statSync, cpSync, rmSync, existsSync } from 'fs';

const pages = process.argv.includes('--pages');
const out = pages ? 'docs' : 'dist';
mkdirSync(out, { recursive: true });

// Liste aller Asset-Dateien für den Lader (wird vor dem Bündeln erzeugt)
{
  const walk0 = (d) => readdirSync(d).flatMap((f) => statSync(d + '/' + f).isDirectory() ? walk0(d + '/' + f) : [d + '/' + f]);
  const list = existsSync('assets') ? walk0('assets').map((f) => f.slice('assets/'.length)).filter((f) => /\.(glb|mp3|ogg|png|jpg)$/.test(f)).sort() : [];
  writeFileSync('src/assetlist.gen.js', '// automatisch erzeugt von build.mjs\nexport const FILES = ' + JSON.stringify(list, null, 0) + ';\n');
}

await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: out + '/game.js',
  minify: pages || process.argv.includes('--min'),
  target: ['chrome110', 'edge110', 'firefox115', 'safari16'],
  legalComments: 'eof',            // Lizenzhinweis von three.js (MIT) bleibt in game.js erhalten
  logLevel: 'info',
});

// Assets (Figuren, Modelle, Geräusche): als Dateien (Web/Handy) oder eingebettet in assets.js (App, Offline-Browser-Version)
const embed = process.argv.includes('--embed');
const walk = (d) => readdirSync(d).flatMap((f) => statSync(d + '/' + f).isDirectory() ? walk(d + '/' + f) : [d + '/' + f]);
const files = existsSync('assets') ? walk('assets') : [];
if (existsSync(out + '/assets')) rmSync(out + '/assets', { recursive: true });
if (existsSync(out + '/assets.js')) rmSync(out + '/assets.js');
let html = readFileSync('index.html', 'utf8');
if (embed) {
  const parts = files.map((f) => JSON.stringify(f.slice('assets/'.length)) + ':' + JSON.stringify(readFileSync(f).toString('base64')));
  writeFileSync(out + '/assets.js', 'window.__ASSETS={' + parts.join(',\n') + '};\n');
  html = html.replace('<script src="game.js"></script>', '<script src="assets.js"></script>\n<script src="game.js"></script>');
} else if (files.length) cpSync('assets', out + '/assets', { recursive: true });
const total = files.reduce((n, f) => n + statSync(f).size, 0);
console.log('Assets:', files.length, 'Dateien,', (total / 1048576).toFixed(1), 'MB', embed ? '(eingebettet)' : '');
// HTML-Hülle, Manifest, Icons, Offline-Cache, Lizenztext von three.js
writeFileSync(out + '/index.html', html);
for (const f of readdirSync('web')) copyFileSync('web/' + f, out + '/' + f);
// Offline-Cache: neue Versionsnummer bei jeder Änderung (Handys holen sich das Update) und alle Assets vorab laden
if (!embed && existsSync(out + '/sw.js')) {
  const { createHash } = await import('crypto');
  const h = createHash('sha1').update(readFileSync(out + '/game.js')).update(html);
  for (const f of files) h.update(f).update(String(statSync(f).size));
  const list = ['./', './index.html', './game.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', ...files.map((f) => './' + f)];
  let sw = readFileSync(out + '/sw.js', 'utf8');
  sw = sw.replace(/const CACHE = '[^']*';/, `const CACHE = 'lockruf-${h.digest('hex').slice(0, 10)}';`).replace(/const FILES = \[[^\]]*\];/, 'const FILES = ' + JSON.stringify(list) + ';');
  writeFileSync(out + '/sw.js', sw);
}
copyFileSync('node_modules/three/LICENSE', out + '/LICENSE-three.txt');
if (pages) writeFileSync(out + '/.nojekyll', '');   // GitHub Pages: Dateien unverändert ausliefern
