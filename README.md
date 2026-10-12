# Verschönerei Weinheim — Design-Entwürfe (Relaunch)

Neun Entwürfe für die neue Website der Verschönerei
(Peggy Fändrich, Bergstraße 22, 69469 Weinheim). Reine Design-Studie:
**Platzhalter** für Videos, Buttons, Karte und Teamfotos. Keine echte Funktionalität.

Überall stehen die drei Bereiche **Haut · Haare · Nägel** im Mittelpunkt — in den
neuen Entwürfen F, G und H sind sie das dominante Gestaltungselement der Seite.

## Ansehen

Online teilen: **https://garytimeless.github.io/verschoenerei/**

Die Übersicht enthält alle neun Entwürfe. Der Design-Switcher unten links
ist auf jeder Entwurfsseite verfügbar; eine GitHub-Anmeldung ist nicht nötig.

Lokal ansehen:

```bash
cd verschoenerei
python3 -m http.server 8000
```

Dann öffnen: **http://localhost:8000** (Übersicht) oder direkt eine Datei doppelklicken.

Alle Seiten haben **unten links einen Design-Switcher** (runder Palette-Button):
Darüber lässt sich jederzeit zwischen den Entwürfen A, C, D, E, F, G, H, I und J wechseln —
praktisch zum Vergleichen und für das Gespräch mit Peggy. Die sichtbaren
Bezeichnungen sind einheitlich „Entwurf A“, „Entwurf C“ usw.

| Entwurf | Datei | Stil | Stimmung |
|---|---|---|---|
| A | `vorschlag-a-editorial.html` | Hell, Serif (Playfair Display), viel Luft | Klassisch-elegant, editorial |
| C | `vorschlag-c-organic.html` | Warmes Beige, Quicksand, abgerundet | Freundlich, einladend, viel Info |
| D | `vorschlag-d-modern.html` | Helles Greige, schwebende Karten, Space Grotesk, Holz-/Pastelltöne | Zeitgemäß, luftig, warm |
| E | `vorschlag-e-timate.html` | Weiß, Open Sans Uppercase, Vollbild-Bänder (Stil: timatehair.com) | Klassisch, bildlastig, vertraut |
| F | `vorschlag-f-triptychon.html` | Drei große Holz-Panels als Aufmacher (Beige/Holz/Walnuss), Archivo, vertikale Titel, Hover vergrößert Panel | Architektonisch, modern, Haut·Haare·Nägel = der Hero |
| G | `vorschlag-g-werkstatt.html` | Fraunces, gedrehte „Holzbretter" mit Preislisten (Punktlinien), Holzmaserung, dunkles Walnuss-Band | Rustikal-modern, Handwerk, warm |
| H | `vorschlag-h-mokka.html` | Dunkles Mokka-Braun, Champagner-Akzente, Syne, Laufband, drei Aspekt-Karten | Luxuriös, mutig, der dunkle Gegenentwurf |
| I | `vorschlag-i-dreiklang.html` | Drei Holzflächen, Fraunces + Figtree, aufklappbare Bereiche | Warm, klar, interaktiv |
| J | `vorschlag-j-karte.html` | Dunkles Nussbraun, Instrument Serif, Leistungskarte mit Preiszeilen | Hochwertig, café-artig |

## Import aus Downloads/claude

Dreiklang und Die Karte wurden als I und J ergänzt, da F und G bereits vergeben waren.
Die mitgelieferte ältere Übersicht und README liegen unverändert unter
`imports/claude/index.html.original` und `imports/claude/README.md.original`.
Die gemeinsame Übersicht ist `index.html`; alle neun Entwürfe sind auf jeder
Entwurfsseite über den Design-Switcher erreichbar.

## Farbpaletten (alle WCAG-geprüft)

Basis: **Kaffeebraun `#6F4E37`** (Ladenfarbe) — jeder Entwurf setzt eigene Akzente.
Die neuen Entwürfe arbeiten durchgehend mit hellem Beige- und Holzfarben
(F: Creme/Holz/Walnuss-Panels · G: Kraftpapier-Beige + Walnuss · H: Mokka mit Champagner).

| Entwurf | Hintergrund | Text | Akzent (3. Farbe) | Akzent-Verwendung |
|---|---|---|---|---|
| A | Creme `#F6F0E6` | `#221D18` | **Terracotta `#B4643C`** (gebrannter Ton) | Große Überschriften, Hotspots |
| C | Beige `#EAE0D2` (2. Braunton) | `#2A241E` | **Altrosa `#B07575`** (gedämpftes, pudriges Rosa) | Hotspots, Icons, Markierungen |
| D | Greige `#EAE2D2` (hell, durchgehend) | `#3E3527` | **Holz-Taupe `#8F7A5B`** + Deep `#605844` (warme Holz-/Pastelltöne) | Akzent-Wörter, Buttons, Hotspots |
| E | Weiß `#FFFFFF` | `#1A1A1A` | **Kaffeebraun `#6F4E37`** (bestehende Ladenfarbe) | Links, Buttons, Sterne |
| F | Creme `#F4EDE0` | `#33271A` | **Panels in 3 Holztönen** `#E6D4B0` / `#C49A61` / `#4C331C`, Akzent `#8A5A2E` | Die drei Bereiche selbst sind die Farbe |
| G | Kraftpapier-Beige `#F2E9D8` | `#46351F` | **Walnuss `#5C4327`** + Rost `#B5794A`, Bretter `#DCC6A0` | Bänder, Preislisten, Bretter |
| H | Mokka `#221912` | Creme `#F1E7D5` | **Champagner `#CBA97E`** | Überschriften-Akzente, Buttons, Laufband |
| I | Sand `#F1E8D8` | `#2B1F16` | **Honig-Eiche `#C9A27A`**, **Walnuss `#6F4E37`** | Drei Bereichs-Panels |
| J | Nussbraun `#2B1F17` | `#F0E4D0` | **Honig `#D9AE75`** | Preise, Buttons, Hover |

Kontrast (WCAG): Text/Hintergrund überall AA oder AAA (z. B. A: 14,7:1, C: 11,8:1, D: 9,4:1, E: 17,3:1).
Akzentfarben sind nur für große Schrift/Deko gedacht (A Terracotta 3,8:1, C Altrosa 2,9:1,
D Holz-Taupe 3,2:1 — daher dunklere Varianten `#96502E`, `#9A5F5F` bzw. `#605844`
für kleinere Akzent-Texte). F/G/H: Text auf den Walnuss-/Mokka-Flächen ist immer Creme/Beige
(Kontrast ≥ 8:1); Champagner/Akzente nur auf großen Flächen.

## Die Illustration

Wiederverwendbares SVG-Symbol (`#figur`): Line-Art-Illustration einer Frau
(großes Drei-Viertel-Profil, geschlossene Augen mit markantem Lidstrich,
roséfarbene Lippen, breite geschwungene Haarbänder und eine erhobene Hand
mit Nagel-Design). Die Illustration ist in A, C, D, F, G und H identisch aufgebaut;
Konturen und Haare übernehmen die jeweilige Farbpalette.
`test-figur.html` zeigt alle vier Hervorhebungen im direkten Vergleich.
Pro Bereich wird der passende Teil hervorgehoben (Haut → Gesicht + Hand,
Haare → Haare, Nägel → Nägel), die übrigen Teile treten zurück. Pulsierende
Hotspots + Chips mit Leistungen/Preisen im Stil von Technik-Produktvideos.
Im Intro führen die drei beschrifteten Chips zu den Bereichen. Die Hotspots
sitzen auf Haaren, Wange und Nägeln der neuen Illustration.

## Platzhalter (noch zu ersetzen)

- **Videos:** animierte Farbflächen mit Play-Icon. Echte Videos: 16:9 (A, D), Vollbild-Bänder (E),
  WebM + MP4, < 5 MB, komprimiert (z. B. HandBrake/ffmpeg). Peggy hat noch kein Material.
- **Buttons:** „Termin buchen" etc. sind Platzhalter (`#` bzw. `#kontakt`).
  Später: Link zum #mitdenkt-Buchungsportal (ufuk.mitdenkt.io).
- **Karte:** statt Google Maps (auf der alten Seite defekt) → OpenStreetMap-Embed, DSGVO-freundlich.
- **Teamfotos:** Platzhalter mit Initialen in den Entwürfen mit Team-Sektion. Echte Fotos + Freigaben nötig.
- **Impressum/Datenschutz/AGB:** Platzhalter-Links. Datenschutz muss neu geschrieben werden
  (WhatsApp, #mitdenkt, neues Hosting — siehe Analyse).

## Offene Fragen an Peggy

1. Hat sie Video-Material (Handyaufnahmen) oder starten wir mit Platzhaltern?
2. Teamfotos: aktuelle Fotos vorhanden? Freigaben für die Website?
3. Preise: nur die 3 „ab"-Preise oder eine vollständige Preisliste auf der Seite?
4. Öffnungszeiten klären: Website (Sa 9–13) vs. Fresha (Sa 8–13, Mi 9–15) — was stimmt?
5. Karriere-Seite: ist die Friseur-Stelle noch aktuell?
6. Domain: bleibt es bei verschoenerei.com oder soll .de Hauptdomain werden?

## Nächste Schritte

1. Greg zeigt Peggy die neun Entwürfe → Stilrichtung wählen (F/G/H legen den Fokus auf Haut·Haare·Nägel + Brauntöne)
2. Ausgewählten Entwurf ausbauen (echte Inhalte, Videos, Karte, rechtliche Seiten)
3. Staging auf GitHub Pages, Review mit Peggy
4. Live-Schaltung mit Redirects von den alten URLs
