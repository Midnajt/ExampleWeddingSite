# Katalog grafik

Agent i człowiek mają czytać ten plik zamiast zgadywać po bitmapach / SVG.
Podmieniając plik zachowaj **tę samą nazwę**, albo zaktualizuj import w `client/src/config/assets.ts`.

## `client/assets/` — importowane w aplikacji

| Plik | Zastosowanie | Sugerowane proporcje |
| --- | --- | --- |
| `hero.svg` | Tło / zdjęcie sekcji Hero | 16:9, min. 1600×900 |
| `about.svg` | Zdjęcie w sekcji O nas | 4:3, min. 1200×900 |
| `slider-1.svg` | Slajd 1 karuzeli | 2:1, min. 1600×800 |
| `slider-2.svg` | Slajd 2 karuzeli | 2:1, min. 1600×800 |
| `slider-3.svg` | Slajd 3 karuzeli | 2:1, min. 1600×800 |
| `gallery-1.svg` | Galeria, pozycja 1 (lightbox) | 4:3, min. 1200×900 |
| `gallery-2.svg` | Galeria, pozycja 2 | 4:3 |
| `gallery-3.svg` | Galeria, pozycja 3 | 4:3 |
| `gallery-4.svg` | Galeria, pozycja 4 | 4:3 |
| `team-1.svg` | Portret — Anna Nowak | 4:5, min. 800×1000 |
| `team-2.svg` | Portret — Piotr Wiśniewski | 4:5 |
| `team-3.svg` | Portret — Marta Zielińska | 4:5 |

Obecne pliki to **placeholdery SVG** (gradient + etykieta nazwy). W projekcie klienta wrzuć zdjęcia JPG/WebP pod tymi samymi nazwami albo zmień rozszerzenia w `assets.ts`.

## `client/public/images/` — bez hasha Vite, ścieżka stała

| Plik | Zastosowanie |
| --- | --- |
| `og-image.svg` | Open Graph / udostępnianie w social (`index.html` → `og:image`) |

`favicon.svg` leży w `client/public/favicon.svg`.
