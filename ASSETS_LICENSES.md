# Assets und Lizenzen

LOCKRUF nutzt nur Material, das frei verwendet werden darf: überwiegend CC0 (gemeinfrei), dazu einige Pakete, die eine Namensnennung verlangen. Diese Nennungen stehen hier und im Spiel unter **Hauptmenü → Credits**. Wer Assets austauscht oder ergänzt, trägt sie hier ein.

## Pflichtnennungen

| Was | Urheber | Lizenz | Quelle | Im Spiel |
|---|---|---|---|---|
| Haare „Katherine Hair“, „Keylth Hair“, „Wavy Bob“ (Pack *hair02*) | Elvaerwyn | CC BY (Namensnennung) | MakeHuman Community Asset Packs, static.makehumancommunity.org | Haare von Mara, Nessa und Leons Mutter; verändert: Farbe, Alpha, Größe |
| „A Horror Sound Pack“ | Dylan Seibert | frei für private und kommerzielle Nutzung, Nennung erbeten | https://dylanseibert-audio.itch.io/a-horror-sound-pack | `assets/sfx/amb_*`, `drone_*`, `heartbeat`, `music_title`, `scare_*`, `strike_*` (geschnitten, zu Schleifen verarbeitet, als MP3) |
| „Horror Stinger Sound Effects“ | DHSFX | frei für Spiele, Nennung bei Veröffentlichung | https://dhsfx.itch.io/horror-stinger-sound-effects | `assets/sfx/dh_*` |

## CC0 (keine Nennung nötig, trotzdem danke)

**Figuren** (`assets/chars/*.glb`, erzeugt mit MPFB 2 in Blender)
- MakeHuman System Assets: Grundkörper, Augen, Zähne, Kleidung (casualsuit, elegantsuit, worksuit), Kurzhaar-Frisuren, Haar-Materialien – CC0
- Shirts 01: „Bodice-style top“, „Turtleneck halter top“ – MargaretToigo, CC0
- Shoes 01: „Floppy overknee shoes“ – Cortu, „Gogo platform boots“ – scailman, CC0
- Skins 01: „Light skin with makeup“, „Light skin female with violet makeup“ – MargaretToigo, CC0
- Faceunits 01 (Blinzeln, Sprechen, Lächeln) – CC0
- Animationen: Universal Animation Library 1 und 2 (Standard) – Quaternius, CC0, https://quaternius.itch.io – auf die Figuren umgerechnet

Das MPFB-Add-on selbst (GPL) ist nur Werkzeug und nicht Teil des Spiels.

**Modelle** (`assets/models/*.glb`, umgewandelt, Texturen verkleinert)
- Autos `car1`–`car8`: PSX Style Cars – GGBotNet, CC0, https://ggbot.itch.io/psx-style-cars
- `suv`: Red SUV – som_natalino, CC0, https://som-natalino.itch.io/red-suv
- `payphone`, `dumpster`, `cone`, `acunit`, `camera`, `bench2`: City Environment Pack – 3DModelsCC0, https://3dmodelscc0.itch.io/city-environment-pack
- `busstop`, `mailbox`, `trashbin`, `elecbox`, `portaloo`, `roadblock`: City Environment Pack 2 – 3DModelsCC0, https://3dmodelscc0.itch.io/free-cc0-city-environment-pack-2
- `w_*` (Fass, Karton, Müllsack, Flasche, Dose): PSX Waste – Daniel Jurys, CC0, https://daniel-jurys.itch.io/psx-waste
- `f_*` (Sofa, Matratze, Kühlschrank, Stuhl, Regal): PSX Derelict Furniture – Daniel Jurys, CC0, https://daniel-jurys.itch.io/psx-derelict-furniture
- `pallet`: 3D Retro Shacks, Shanties, Sheds & Gantries – chilly_durango, CC0, https://chilly-durango.itch.io/3dretroshacks

**Geräusche** (`assets/sfx/*.mp3`)
- `step_*`, `k_impact*`: Impact Sounds – Kenney, CC0, https://kenney.nl/assets/impact-sounds
- `k_*` (Türen, Stoff, Knarzen, Schlüssel, Riegel): RPG Audio – Kenney, CC0, https://kenney.nl/assets/rpg-audio
- `ui_*`: Interface Sounds – Kenney, CC0, https://kenney.nl/assets/interface-sounds
- `car_*`: Soundeffekte aus PSX Style Cars – GGBotNet, CC0

## Selbst erzeugt

Gelände, Wald, Häuser, Wohnung, Hütte, Garagenhof-Bauten, Gatter, Schilder, Texturen (Canvas), Himmel, Licht, Post-Processing, Musik-Synth, Stimmen-Gebrabbel, Funk- und Telefongeräusche entstehen im Code (`src/`). Die Musik am Titelbildschirm und die Spannungs-Drones kommen aus dem Horror Sound Pack (siehe oben), alles andere ist prozedural.

## Code

- three.js (MIT), esbuild (MIT), Electron (MIT) für die Windows-App
- Spielcode: Emil + Claude
