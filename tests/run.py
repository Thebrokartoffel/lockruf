#!/usr/bin/env python3
"""LOCKRUF – automatische Tests im Headless-Chrome (Playwright, Software-Rendering).

Vorbereitung (einmalig):  pip install playwright  &&  playwright install chromium
Vorher bauen:             npm run dev        (Tests laufen gegen dist/)

Beispiele (aus dem Repo-Ordner):
  python tests/run.py tests/flow.js               ganze Story Kapitel 0-8 durchspielen
  python tests/run.py tests/flow.js --only 6      nur Kapitel 6 (1-8)
  python tests/run.py tests/chase.js --low        Verfolgung mit simulierter Tastatur (--low: flüssiger im Software-Rendering)
  python tests/run.py tests/rewind.js             Godmode-Rückspulen exakt?
  python tests/run.py tests/touch.js --touch      Handy-Steuerung (844x390, Touch)
  python tests/run.py tests/touch-rewind.js --touch
  python tests/run.py tests/touch-portrait.js --touch --portrait   hochkant, Antwort direkt auf dem Handy antippen
  python tests/run.py tests/mic.js --mic          Mikrofon mit Fake-Gerät (440-Hz-Ton)
  python tests/run.py tests/release-smoke.js --build docs    gegen die GitHub-Pages-Version
  python tests/run.py tests/extra.js              Kapitel 2: Nessa, Mara, Garagenhof, Gatter mit Dietrich (Screenshots)
  python tests/run.py tests/rewind-ch2.js         Rückspulen mit Gespräch, Schlüssel und Gatter
  python tests/run.py tests/gfx.js                Screenshots aller Grafikstufen
  python tests/run.py tests/render-cost.js --low --size 480x270   GPU-Zeit pro Bild an typischen Orten

Screenshots landen in tests/out/. Eigener Chrome: Umgebungsvariable CHROME=/pfad/zu/chrome.
"""
import argparse, asyncio, json, os, pathlib, time
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent


async def main(a):
    js = pathlib.Path(a.script).read_text(encoding='utf-8')
    url = (ROOT / a.build / 'index.html').as_uri() + '?test' + ('&touch' if a.touch else '')
    out = ROOT / 'tests' / 'out'
    out.mkdir(parents=True, exist_ok=True)
    prefix = a.prefix or pathlib.Path(a.script).stem
    args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
            '--autoplay-policy=no-user-gesture-required', '--allow-file-access-from-files']
    if a.mic:
        args += ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']
    async with async_playwright() as p:
        kw = {'executable_path': os.environ['CHROME']} if os.environ.get('CHROME') else {}
        b = await p.chromium.launch(headless=True, args=args, **kw)
        if a.touch:
            vp = {'width': 390, 'height': 750} if a.portrait else {'width': 844, 'height': 390}
            pg = await b.new_page(viewport=vp, has_touch=True, is_mobile=True, device_scale_factor=1)
            await pg.add_init_script("localStorage.removeItem('lockruf_settings')")   # erster Start am Handy
        else:
            w, h = (int(v) for v in a.size.split('x'))
            pg = await b.new_page(viewport={'width': w, 'height': h})
        if a.low:
            await pg.add_init_script("localStorage.setItem('lockruf_settings', JSON.stringify({v:2, quality:'low', scale:0.25, sens:1, grain:1, volume:0.9, fov:70, bright:1}))")
        if os.environ.get('NOAUDIO'):
            await pg.add_init_script('window.__NOAUDIO = 1')
        if a.only:
            await pg.add_init_script(f'window.__ONLY = {int(a.only)}')
        logs = []
        pg.on('console', lambda m: logs.append(f'[{m.type}] {m.text}'))
        pg.on('pageerror', lambda e: logs.append(f'[pageerror] {e}'))

        async def shot(name):
            await pg.screenshot(path=str(out / f'{prefix}_{name}.png'), timeout=180000)
            return 'shot ' + name
        await pg.expose_function('__shot', shot)
        await pg.goto(url)
        await pg.wait_for_function('document.getElementById("loading").style.display === "none" || document.getElementById("loading").textContent.startsWith("FEHLER")', timeout=180000)
        t0 = time.time()
        try:
            r = await asyncio.wait_for(pg.evaluate(js), timeout=a.timeout)
            print('RESULT:\n' + (r if isinstance(r, str) else json.dumps(r, indent=1)))
        except Exception as e:
            print('EXC', e)
            for line in [x for x in logs if 'GPU stall' not in x][-40:]:
                print(line)
            await b.close()
            return
        print('Zeit %.1f s' % (time.time() - t0))
        err = await pg.evaluate("[...document.querySelectorAll('div')].map(d=>d.textContent).filter(t=>t.startsWith('FEHLER')).join('\\n')")
        if err:
            print('FEHLER-ANZEIGE:', err)
        for line in [x for x in logs if 'GPU stall' not in x and 'Automatic fallback' not in x and 'willReadFrequently' not in x][:60]:
            print(line)
        await b.close()


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='LOCKRUF-Testläufer')
    ap.add_argument('script', help='Test-Skript (JavaScript, wird in der Seite ausgeführt)')
    ap.add_argument('--build', default='dist', help='Ordner mit index.html (dist oder docs)')
    ap.add_argument('--touch', action='store_true', help='Handy-Modus: 844x390, Touch')
    ap.add_argument('--portrait', action='store_true', help='mit --touch: hochkant (390x750)')
    ap.add_argument('--mic', action='store_true', help='Fake-Mikrofon')
    ap.add_argument('--low', action='store_true', help='Grafik niedrig, kleine Auflösung')
    ap.add_argument('--only', type=int, default=0, help='flow.js: nur dieses Kapitel')
    ap.add_argument('--size', default='960x540', help='Fenstergröße (Desktop), z. B. 480x270')
    ap.add_argument('--timeout', type=float, default=1700, help='Sekunden')
    ap.add_argument('--prefix', default='', help='Präfix für Screenshots')
    asyncio.run(main(ap.parse_args()))
