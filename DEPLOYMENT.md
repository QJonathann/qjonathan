# Instrukcja wdrożenia na GitHub Pages

## Krok 1: Upewnij się, że kod jest na GitHubie

Jeśli jeszcze nie wrzuciłeś kodu na GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA/NAZWA-REPOZYTORIUM.git
git push -u origin main
```

## Krok 2: Włącz GitHub Pages w ustawieniach repozytorium

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij **Settings** (Ustawienia)
3. W menu po lewej stronie kliknij **Pages**
4. W sekcji **Source** wybierz:
   - Source: **GitHub Actions**

## Krok 3: Uruchom deployment

Po włączeniu GitHub Pages i wypchniięciu kodu z plikiem `.github/workflows/deploy.yml`:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

GitHub automatycznie zbuduje i wdroży Twoją stronę!

## Krok 4: Sprawdź swoją stronę

Po kilku minutach Twoja strona będzie dostępna pod adresem:

```
https://TWOJA-NAZWA.github.io/NAZWA-REPOZYTORIUM/
```

## Aktualizacje

Każda zmiana, którą wypchniesz na branch `main`, automatycznie zaktualizuje stronę!

```bash
git add .
git commit -m "Opis zmian"
git push
```

## Sprawdzanie statusu deployment

1. Przejdź do zakładki **Actions** w swoim repozytorium
2. Zobacz status buildu - zielony = sukces, czerwony = błąd

---

## Inne opcje hostingu (darmowe alternatywy):

### Netlify
1. Zaloguj się na https://netlify.com
2. Przeciągnij folder `dist` (po wykonaniu `npm run build`)
3. Gotowe!

### Vercel
1. Zaloguj się na https://vercel.com
2. Zaimportuj repozytorium z GitHub
3. Vercel automatycznie wykryje Vite i wdroży stronę

### Cloudflare Pages
1. Zaloguj się na https://pages.cloudflare.com
2. Połącz repozytorium GitHub
3. Ustaw build command: `npm run build`
4. Ustaw output directory: `dist`
