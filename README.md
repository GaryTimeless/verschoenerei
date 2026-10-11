# Verschönerei Weinheim — Design-Entwürfe (Relaunch)

Vier stark unterschiedliche Entwürfe für die neue Website der Verschönerei
(Peggy Fändrich, Bergstraße 22, 69469 Weinheim). Reine Design-Studie:
**Platzhalter** für Videos, Buttons, Karte und Teamfotos. Keine echte Funktionalität.

## Ansehen

```bash
cd verschoenerei
python3 -m http.server 8000
```

Dann öffnen: **http://localhost:8000** (Übersicht) oder direkt eine Datei doppelklicken.

Alle Seiten haben **unten links einen Design-Switcher** (runder Palette-Button):
Darüber lässt sich jederzeit zwischen den Entwürfen A, C, D und E wechseln —
praktisch zum Vergleichen und für das Gespräch mit Peggy.

| Datei | Stil | Stimmung |
|---|---|---|
| `vorschlag-a-editorial.html` | Hell, Serif (Playfair Display), viel Luft | Klassisch-elegant, editorial |
| `vorschlag-c-organic.html` | Warmes Beige, Quicksand, abgerundet | Freundlich, einladend, viel Info |
| `vorschlag-d-modern.html` | Helles Greige, schwebende Karten, Space Grotesk, Holz-/Pastelltöne | Zeitgemäß, luftig, warm |
| `vorschlag-e-timate.html` | Weiß, Open Sans Uppercase, Vollbild-Bänder (Stil: timatehair.com) | Klassisch, bildlastig, vertraut |

## Farbpaletten (alle WCAG-geprüft)

Basis: **Kaffeebraun `#6F4E37`** (Ladenfarbe) — jeder Entwurf setzt eigene Akzente.

| Entwurf | Hintergrund | Text | Akzent (3. Farbe) | Akzent-Verwendung |
|---|---|---|---|---|
| A | Creme `#F6F0E6` | `#221D18` | **Terracotta `#B4643C`** (gebrannter Ton) | Große Überschriften, Hotspots |
| C | Beige `#EAE0D2` (2. Braunton) | `#2A241E` | **Altrosa `#B07575`** (gedämpftes, pudriges Rosa) | Hotspots, Icons, Markierungen |
| D | Greige `#EAE2D2` (hell, durchgehend) | `#3E3527` | **Holz-Taupe `#8F7A5B`** + Deep `#605844` (warme Holz-/Pastelltöne) | Akzent-Wörter, Buttons, Hotspots |
| E | Weiß `#FFFFFF` | `#1A1A1A` | **Kaffeebraun `#6F4E37`** (bestehende Ladenfarbe) | Links, Buttons, Sterne |

Kontrast (WCAG): Text/Hintergrund überall AA oder AAA (z. B. A: 14,7:1, C: 11,8:1, D: 9,4:1, E: 17,3:1).
Akzentfarben sind nur für große Schrift/Deko gedacht (A Terracotta 3,8:1, C Altrosa 2,9:1,
D Holz-Taupe 3,2:1 — daher dunklere Varianten `#96502E`, `#9A5F5F` bzw. `#605844`
für kleinere Akzent-Texte).

## Die Silhouette

Wiederverwendbares SVG-Symbol (`#figur`): grobe Umrisse einer Person —
Haare, Gesicht, Hände, Fingerspitzen. Pro Bereich wird der passende Teil
hervorgehoben (Haut → Gesicht + Hände, Haare → Haare, Nägel → Fingerspitzen-Punkte),
die übrigen Teile treten zurück. Pulsierende Hotspots + Chips mit Leistungen/Preisen
im Stil von Technik-Produktvideos. Im Intro sind die drei Hotspots verlinkt.

## Platzhalter (noch zu ersetzen)

- **Videos:** animierte Farbflächen mit Play-Icon. Echte Videos: 16:9 (A, D), Vollbild-Bänder (E),
  WebM + MP4, < 5 MB, komprimiert (z. B. HandBrake/ffmpeg). Peggy hat noch kein Material.
- **Buttons:** „Termin buchen" etc. sind Platzhalter (`#` bzw. `#kontakt`).
  Später: Link zum #mitdenkt-Buchungsportal (ufuk.mitdenkt.io).
- **Karte:** statt Google Maps (auf der alten Seite defekt) → OpenStreetMap-Embed, DSGVO-freundlich.
- **Teamfotos:** Platzhalter-Kreise mit Initialen (C). Echte Fotos + Freigaben nötig.
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

1. Greg zeigt Peggy die drei Entwürfe → Stilrichtung wählen
2. Ausgewählten Entwurf ausbauen (echte Inhalte, Videos, Karte, rechtliche Seiten)
3. Staging auf GitHub Pages, Review mit Peggy
4. Live-Schaltung mit Redirects von den alten URLs
