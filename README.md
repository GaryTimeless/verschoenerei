# Verschönerei Weinheim · Salon-Entwürfe

Die [Startseite der GitHub-Vorschau](https://garytimeless.github.io/verschoenerei/)
öffnet **Schlicht · Galerie**. Unten auf der Seite lässt sich zwischen den drei
Entwürfen wechseln.

| Entwurf | Schwerpunkt |
|---|---|
| [Schlicht · Galerie](https://garytimeless.github.io/verschoenerei/) | Ruhiges Fotoraster mit großem Empfangsbild |
| [Kreativ · Lichtspiel](https://garytimeless.github.io/verschoenerei/salon-kreativ.html) | Spiegelrahmen und sanft bewegte Bildpendel |
| [Leistungen · Aufklappen](https://garytimeless.github.io/verschoenerei/salon-leistungen.html#leistungen) | Aufklappbare Leistungskarten für Haare, Haut und Nägel |

Alle Entwürfe starten mit der Lounge am Fenster. Danach folgen Waschplätze
und Eingang. Die Salon-Galerien enthalten jeweils acht Fotos.
Gestaltung und Prüfungen stehen in [SALON-ENTWUERFE.md](SALON-ENTWUERFE.md).

## Archiv

- [Sand-Entwürfe vom 19. Oktober 2026](https://garytimeless.github.io/verschoenerei/archiv/2026-10-19-sand-entwuerfe/): A · Milchig, B · Sandfläche, C · Pur und D · Dreiklang. Der frühere Startlink `variante-a.html` führt zur aktuellen Vorschau. Die übrigen Variantenlinks führen ins Archiv.
- [Helle Entwürfe vom 16. Oktober 2026](https://garytimeless.github.io/verschoenerei/archiv/2026-10-16-helle-entwuerfe/): Galerie, Salon und Klar samt Übersicht, CSS, JavaScript, Bildern, lokalen Schriften und Dokumentation. Die 32 Dateien wurden unverändert archiviert.
- [Frühere acht Vorschläge](https://garytimeless.github.io/verschoenerei/archiv/bisherige-entwuerfe/).

Die archivierten hellen Entwürfe funktionieren unabhängig von den neuen
Stylesheets und Bildern, weil alle benötigten Dateien im Archiv liegen.

## Bearbeitung und Vorschau

Statische HTML-Seiten ohne Build-Schritt. `index.html` enthält Schlicht · Galerie.
Der ältere Link `salon-schlicht.html` führt ebenfalls zur Startseite.
Die aktuellen Entwürfe verwenden
`salon-entwuerfe.css` und `salon-entwuerfe.js`; Lichtspiel ergänzt
`salon-kreativ.css` und `salon-kreativ.js`.

Lokal `python3 -m http.server 8000` starten und <http://localhost:8000> öffnen.
GitHub Pages veröffentlicht den Hauptordner von `main`; `.nojekyll` bleibt erhalten.

Gestaltung der Sand-Entwürfe und offene Inhalte: [DESIGN.md](DESIGN.md).
Bild- und Schriftquellen: [ASSETS.md](ASSETS.md).
