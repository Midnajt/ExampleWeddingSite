# Raport prac — strona weselna Doroty i Marcina

Data: 2026-08-16  
Projekt: `ExampleWedding`  
Cel kolejnego kroku: publikacja / dopracowanie prezentacji (GitHub Pages).

---

## 1. Co jest gotowe

One-pager ślubny (gość, nie planer) na Vite + React + TypeScript + Tailwind v4 + shadcn. Boilerplate usługowy (oferta, cennik, zespół) został zastąpiony szkieletem z `docs/example.md`.

Adres docelowy: https://midnajt.github.io/example_weeding_site.github.io/  
`VITE_BASE=/example_weeding_site.github.io/` (ustawiane w GitHub Actions, lokalnie `/`).

`npm run build` i `npm run lint` przechodziły po pierwszej implementacji. Po podmianie zdjęć warto ponownie odpalić `npm run build` przed pushem.

---

## 2. Decyzje produktowe (nie zgadywać od nowa)

| Temat | Ustalenie |
| --- | --- |
| Charakter | Hybryda: wygląda jak prawdziwa strona pary; logistyka (godziny, menu, stoły, telefony, świadkowie) jest **demo** pod prezentację klientom |
| Data | 28 września 2024 (grawer na obrączkach) — uroczystość **za nami**; countdown liczy dni od ślubu |
| Ślub | Kościół pw. Narodzenia NMP, ul. Krakowska 6, 33-350 Piwniczna-Zdrój, godz. demo 14:00 |
| Wesele | Rezydencja Las Vegas, Barcice 550, 33-342 Barcice, godz. demo 16:30 |
| Paleta | Jedna, boho: tło `#F9F4EC`, CTA `#9E5A30`, akcent `#5E6551`; **bez** fuksji WZK `#9F1E6F` |
| Motywy | Bez panelu 3 wariantów, **bez dark mode** |
| Języki | PL + EN |
| Potwierdzenie | Formularz w `localStorage` (bez backendu). W UI po polsku: **„Potwierdź obecność”** (nie „RSVP”) |
| Księga | 3 wpisy statyczne + mailto, bez zapisu |
| Kontakt | Fikcyjne numery `500 100 20x` i maile `@example.pl` |
| GitHub Pages | Workflow gotowy; **push dopiero na prośbę** |

---

## 3. Mapa strony (kolejność)

1. Hero — `5F4A6221.jpg`, imiona, data, CTA zdjęcia + potwierdzenie obecności  
2. Karty Ślub / Wesele + linki OSM  
3. Countdown — „wesele za nami”  
4. Historia — 3 kadry (kolejność: intymny → dłonie → uśmiech panny)  
5. Slider — wyjście z kościoła, ceremonia, pierwszy taniec  
6. Plan dnia (timeline)  
7. Plan stołów (fikcyjne grupy)  
8. Menu weselne (demo)  
9. Logistyka (dojazd, dzieci, nocleg, dress code, bus)  
10. Prezenty — „zamiast kwiatów”, **bez numeru konta**  
11. Formularz potwierdzenia obecności (`#rsvp`)  
12. Galeria — **wszystkie 10 JPG**, lightbox  
13. Księga gości  
14. FAQ  
15. Świadkowie — Anna Kowalska / Tomasz Nowak, inicjały, bez portretów  
16. Kontakt — dwie mapy OSM  
17. Stopka AddPattern, `#/rodo`, `#/polityka`, banner cookies  

Kotwice hash bez React Router. Hero **nie** używa komponentu `Section` (osobna pełna wysokość).

---

## 4. Zdjęcia (stan po aktualizacji `example_photos/`)

Użytkownik podmienił pliki w `example_photos/` na pełnowymiarowe oryginały (nawet 6720 px / ~26 MB).  
**Nie wrzucamy surowych plików do `client/assets/`** — GitHub Pages i Vite by się zadławiły.

Na stronę poszła kopia webowa (dłuższy bok 1920 px, JPEG 85). Nazwy plików **bez zmian**, więc `assets.ts` nie wymagał nowej mapy slotów.

| Plik | Slot |
| --- | --- |
| `5F4A6221.jpg` | Hero + OG (`client/public/images/og-image.jpg`) |
| `5F4A5869.jpg` | Historia lewa |
| `5F4A5888.jpg` | Historia środek |
| `5F4A5971.jpg` | Historia prawa |
| `5F4A9191.jpg` | Slider 1 |
| `5F4A8913.jpg` | Slider 2 |
| `5F4A9728.jpg` | Slider 3 |
| `5F4A8998.jpg` | Galeria |
| `5F4A8392.jpg` | Galeria |
| `5F4A8617.jpg` | Galeria |
| `watercolor-floral.png` | Ornament; tło przezroczyste (wykrojone z bieli) |

Opis kadrów: `example_photos/imgs_map.md`. Katalog w aplikacji: `client/assets/ASSETS.md`.  
Mockupów z `docs/` **nie** ma w `client/assets/`.

---

## 5. Kluczowe pliki

| Co | Gdzie |
| --- | --- |
| Para, miejsca, mapy, świadkowie | `client/src/config/site.ts` |
| Kolory, fonty (Cormorant + Nunito) | `client/src/config/theme.ts` |
| Import zdjęć | `client/src/config/assets.ts` |
| Teksty PL / EN | `client/src/i18n/locales/pl.json`, `en.json` |
| Sekcje | `client/src/components/sections/` |
| Layout | `Navbar.tsx`, `Footer.tsx`, `Section.tsx` (`bg-white` pod ornament) |
| RSVP localStorage | `RsvpForm.tsx`, klucz `wedding-rsvp` |
| SEO | `client/index.html` |
| Pages | `.github/workflows/pages.yml`, `client/public/.nojekyll` |
| Env (wzór) | `.env.example` — `VITE_SHOW_DEV_PANEL=false`, `VITE_BASE=/` |

`.env` jest w `.gitignore`; agent nie może go nadpisać. Lokalnie skopiować z `.env.example` jeśli brak.

---

## 6. Poprawki po pierwszej wersji (kolejność zdarzeń)

1. Ornament: najpierw błędnie wybielony filtr na wszystkich sekcjach (grafika znikała na jasnym tle).  
2. Cofnięte — tło `Section` na białe, żeby biała kanwa PNG nie odcinała się od papieru.  
3. W hero filtr `brightness-0 invert` dawał **biały kwadrat** (nieprzezroczyste tło PNG). Wykrojono biel do alfy w `watercolor-floral.png`.  
4. „RSVP” → **„Potwierdź obecność”** (seniorzy). Kotwica HTML zostaje `#rsvp`.  
5. Historia: zamiana kolejności środkowego i prawego zdjęcia (dłonie na środku).  
6. Ponowne wczytanie JPG z zaktualizowanego `example_photos/` (ten raport).

---

## 7. Świadomie poza zakresem

- Backend, baza, prawdziwe RSVP w chmurze  
- Hasło wejścia, upload zdjęć gości  
- Skrypt FTP  
- Commit / push / utworzenie repo GitHub — **tylko na osobną prośbę**  
- Prawdziwe telefony pary  

---

## 8. Co zostawić na kolejny krok

Propozycja kolejności (do wyboru):

1. **Publikacja GitHub Pages** — repo `midnajt/example_weeding_site.github.io`, Pages → GitHub Actions, push `main`.  
2. **`npm run build` + `npm run preview`** po nowych zdjęciach — kontrola hero, historii, galerii, ornamentu w hero.  
3. Treści demo: czy godziny 14:00 / 16:30, menu i świadkowie zostają, czy podmieniamy.  
4. Ewentualna kompresja WebP (teraz JPEG) albo `loading="lazy"` już jest na galerii.  
5. Przycisk „Potwierdź obecność” w navbarze jest długi na wąskim desktopie — można skrócić do „Potwierdź” w `nav.rsvp`, zostawiając pełny tekst w hero.

---

## 9. Szybki test przed prezentacją

- [ ] Hero: welon, biały ornament (nie kwadrat), dwa CTA  
- [ ] `#slub` / `#wesele` — adresy Piwniczna i Barcice, mapy OSM  
- [ ] Historia: 3 zdjęcia, dłonie na środku  
- [ ] Galeria: 10 kadrów, lightbox  
- [ ] Formularz `#rsvp` zapisuje w localStorage i pokazuje podziękowanie  
- [ ] PL/EN działa, brak przełącznika ciemnego motywu  
- [ ] `#/rodo` i cookies  
- [ ] Stopka AddPattern  
