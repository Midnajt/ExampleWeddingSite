# Katalog grafik

Agent i człowiek mają czytać ten plik zamiast zgadywać po bitmapach.
Podmieniając plik zachowaj **tę samą nazwę**, albo zaktualizuj import w `client/src/config/assets.ts`.

## `client/assets/` — importowane w aplikacji

Źródło: pełnowymiarowe JPG z `example_photos/` (do 6720 px / ~26 MB). Na stronę idzie kopia webowa: dłuższy bok **1920 px**, JPEG quality 85.

| Plik | Zastosowanie | Kadr źródłowy |
| --- | --- | --- |
| `5F4A6221.jpg` | Hero — para pod welonem | 6720×4480 → 1920×1280 |
| `5F4A5869.jpg` | Historia — portret intymny (lewy) | 4480×6720 → 1280×1920 |
| `5F4A5888.jpg` | Historia — splecione dłonie (środek) | 5688×3792 → 1920×1280 |
| `5F4A5971.jpg` | Historia — uśmiech panny młodej (prawy) | 6720×4480 → 1920×1280 |
| `5F4A9191.jpg` | Slider — wyjście z kościoła | 2257×3386 → 1280×1920 |
| `5F4A8913.jpg` | Slider — ceremonia | 2932×4398 → 1280×1920 |
| `5F4A9728.jpg` | Slider — pierwszy taniec | 6146×4097 → 1920×1280 |
| `5F4A8998.jpg` | Galeria — sakrament | 5707×3805 → 1920×1280 |
| `5F4A8392.jpg` | Galeria — detale panny młodej | 6557×4371 → 1920×1280 |
| `5F4A8617.jpg` | Galeria — detale pana młodego | 4107×6160 → 1280×1920 |
| `watercolor-floral.png` | Ornament — separator (tło przezroczyste) | nie skalować z JPG |

Galeria lightbox używa **wszystkich 10 JPG**. Placeholdery SVG nie są importowane.

`watercolor-floral.png`: białe tło wykrojone do alfy, żeby `brightness-0 invert` w hero nie robił białego kwadratu.

## `client/public/images/`

| Plik | Zastosowanie |
| --- | --- |
| `og-image.jpg` | Open Graph — kopia webowego `5F4A6221.jpg` |

`favicon.svg` — monogram D&M w `client/public/favicon.svg`.
