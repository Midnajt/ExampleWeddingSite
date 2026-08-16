# Nowy projekt z BoilerPlate

Szablon: [https://github.com/Midnajt/BoilerPlate](https://github.com/Midnajt/BoilerPlate)

Nie edytuj repozytorium `BoilerPlate`. Każda strona klienta to **osobny folder i osobne repo**. Ten plik trzymaj w folderze nowego projektu i odhaczaj punkty po kolei.

## 1. Utwórz folder i pobierz szablon

Szablon leży na gałęzi **`master`**. Domyślna gałąź GitHuba to `main` — tam są tylko `.gitignore` i licencja (to GitHub dodał przy tworzeniu repo). Bez `-b master` clone **nie pobierze** `client/`, `.cursor/rules/` ani reszty projektu.

W PowerShellu (podmień `NazwaKlienta` na np. `KwiaciarniaWilga`):

```powershell
cd C:\Users\marci\OneDrive\Pulpit\Projekty
git clone -b master https://github.com/Midnajt/BoilerPlate.git NazwaKlienta
cd NazwaKlienta
```

Jeśli ten plik już leży w pustym folderze projektu i chcesz wklonować szablon **do niego**:

```powershell
git clone -b master https://github.com/Midnajt/BoilerPlate.git .
```

(`kropka` na końcu = bieżący katalog; katalog musi być pusty albo prawie pusty.)

Po clone w folderze muszą być m.in. `client/`, `.cursor/rules/`, `package.json`, `INSTRUKCJA.md`. Jeśli widzisz tylko `.gitignore` i `LICENSE`, sklonowałeś `main` — skasuj folder i powtórz komendę z `-b master`.

Zanim sklonujesz pod klienta, w folderze BoilerPlate zrób commit i `git push origin master`. Clone pobiera tylko to, co jest na GitHubie — niezacommitowane pliki z dysku się nie skopiują.

## 2. Oderwij projekt od szablonu

Żeby `git push` nie poszło do BoilerPlate:

```powershell
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "Start strony z BoilerPlate"
```

Potem, gdy będziesz mieć repo klienta na GitHubie:

```powershell
git remote add origin https://github.com/TWOJ_LOGIN/NazwaKlienta.git
git branch -M main
git push -u origin main
```

## 3. Środowisko

`.env` nie jest w gicie. Zrób go z wzoru:

```powershell
Copy-Item .env.example .env
```

Na czas projektowania zostaw:

```
VITE_SHOW_DEV_PANEL=true
VITE_BASE=/
```

Zainstaluj paczki i odpal podgląd:

```powershell
npm install
npm run dev
```

Strona: [http://localhost:5173/](http://localhost:5173/)

Otwórz **ten folder** w Cursorze (`File → Open Folder`), nie folder BoilerPlate. Reguły z `.cursor/rules/` wczytają się same.

## 4. Wypełnij dane klienta (kolejność)

Zrób to zanim rzeźbisz layout. Jedna zmiana w configu, nie w dziesięciu komponentach.

1. **`client/src/config/site.ts`** — nazwa, telefon, e-mail, adres, godziny, Facebook, mapa OSM (`mapEmbed` + `mapLink`), kredyt AddPattern.
2. **`client/index.html`** — `<title>`, `description`, `og:title`, `og:description`.
3. **`client/src/i18n/locales/pl.json`** — teksty na stronie. Jeśli klient nie potrzebuje EN, i tak zaktualizuj **`en.json`**, żeby przełącznik nie pokazywał szablonu.
4. **`client/src/config/theme.ts`** — kolory i fonty trzech wariantów (Klasyczny / Nowoczesny / Elegancki), jeśli klient chce inną paletę niż demo.
5. **`package.json`** — pole `"name"` na nazwę projektu (małe litery, bez spacji).

Telefon w `phoneHref` zawsze w formacie `tel:+48XXXXXXXXX` (bez spacji).

Mapa: otwórz lokalizację na [openstreetmap.org](https://www.openstreetmap.org/), Share → HTML, skopiuj `bbox` z iframe do `mapEmbed`.

## 5. Zdjęcia

Najpierw przeczytaj **`client/assets/ASSETS.md`** — tam jest tabela: który plik do której sekcji.

- Wrzucaj zdjęcia **pod tymi samymi nazwami** (`hero`, `about`, `slider-1` …).
- JPG/WebP: zamień plik i **popraw rozszerzenie w** `client/src/config/assets.ts` (import `hero.jpg?url` zamiast `hero.svg?url`).
- `client/public/favicon.svg` — ikona w karcie przeglądarki.
- `client/public/images/og-image.svg` (albo `.jpg`) — miniatura przy udostępnianiu; jeśli zmienisz nazwę, zaktualizuj `og:image` w `index.html`.

Nie analizuj bitmap „na oko”, jeśli katalog w `ASSETS.md` jest aktualny. Po dodaniu nowych plików dopisz je do tej tabeli.

## 6. Pokaz wariantów klientowi

Panel u góry strony (`Klasyczny` / `Nowoczesny` / `Elegancki`) zmienia kolory i układ Hero. Wybór zapisuje się w przeglądarce.

Na spotkaniu zostaw `VITE_SHOW_DEV_PANEL=true`. Klient klika trzy przyciski i wybiera.

## 7. Publikacja na FTP

Przed buildem produkcyjnym w `.env`:

```
VITE_SHOW_DEV_PANEL=false
VITE_BASE=/
```

Jeśli strona ma wisieć w podkatalogu (albo GitHub Pages `/NazwaRepo/`):

```
VITE_BASE=/NazwaRepo/
```

```powershell
npm run build
```

Na FTP wrzuć **zawartość** folderu `dist/` (nie sam folder `dist`). Powinny tam być m.in. `index.html`, `assets/`, `favicon.svg`, `.htaccess`.

Sprawdzenie lokalnie przed wrzuceniem:

```powershell
npm run preview
```

## 8. Checklista przed oddaniem

- [ ] `site.ts` — prawdziwy telefon, mail, adres, godziny
- [ ] `index.html` — tytuł i opis pod SEO
- [ ] Teksty PL (i EN, jeśli zostaje przełącznik)
- [ ] Zdjęcia klienta zamiast placeholderów SVG
- [ ] RODO i polityka (`#/rodo`, `#/polityka`) — treść zweryfikowana, nie szablon
- [ ] Panel deweloperski wyłączony (`VITE_SHOW_DEV_PANEL=false`)
- [ ] `npm run build` przechodzi bez błędu
- [ ] Strona na FTP: telefon i mail działają, mapa się ładuje, kotwice w menu scrollują

## Gdzie czego szukać

| Co | Gdzie |
| --- | --- |
| Dane firmy | `client/src/config/site.ts` |
| Kolory, fonty, 3 presety | `client/src/config/theme.ts` |
| Import zdjęć | `client/src/config/assets.ts` |
| Katalog zdjęć | `client/assets/ASSETS.md` |
| Teksty | `client/src/i18n/locales/pl.json` |
| Sekcje strony | `client/src/components/sections/` |
| Cookies / RODO | `client/src/components/legal/` |
| Reguły dla AI w Cursorze | `.cursor/rules/` |

Backendu i bazy nie dodawaj, dopóki klient ich naprawdę nie potrzebuje. Kontakt zostaje przyciskiem Zadzwoń / Napisz e-mail.
