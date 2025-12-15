# Instrukcja - Jak otworzyć stronę na komputerze

## ✅ Najprościej - Otwórz w przeglądarce

Twoja strona jest teraz gotowa do użycia! Wystarczy:

1. **Znajdź plik `index.html`** w folderze z projektem
2. **Kliknij dwukrotnie** na plik `index.html`
3. **Gotowe!** Strona otworzy się w Twojej domyślnej przeglądarce

### Alternatywnie:
- Przeciągnij plik `index.html` na ikonę przeglądarki (Chrome, Firefox, Safari, Edge)
- Lub kliknij prawym przyciskiem → "Otwórz za pomocą" → wybierz przeglądarkę

---

## 🌐 Wgrywanie na GitHub Pages

Jeśli chcesz, aby strona była dostępna online:

### Krok 1: Wgraj plik na GitHub

```bash
# Jeśli masz już repozytorium:
git add index.html
git commit -m "Dodano statyczną wersję HTML"
git push

# Jeśli zakładasz nowe repozytorium:
git init
git add index.html
git commit -m "Pierwsza wersja strony"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA/NAZWA-REPO.git
git push -u origin main
```

### Krok 2: Włącz GitHub Pages

1. Wejdź na GitHub.com → Twoje repozytorium
2. Kliknij **Settings** (Ustawienia)
3. W menu po lewej wybierz **Pages**
4. W sekcji **Source** wybierz:
   - Branch: **main**
   - Folder: **/ (root)**
5. Kliknij **Save**

### Krok 3: Sprawdź stronę

Po 2-3 minutach Twoja strona będzie dostępna pod adresem:
```
https://TWOJA-NAZWA.github.io/NAZWA-REPO/
```

---

## 🚀 Inne opcje hostingu (darmowe)

### Netlify Drop
1. Wejdź na https://app.netlify.com/drop
2. Przeciągnij plik `index.html` na stronę
3. Gotowe! Dostaniesz darmowy adres

### GitHub Gist
1. Wejdź na https://gist.github.com
2. Wklej zawartość `index.html`
3. Nazwij plik `index.html`
4. Stwórz publiczny Gist
5. Skopiuj link i użyj https://htmlpreview.github.io/?[LINK-DO-GIST]

### Vercel
1. Zainstaluj Vercel CLI: `npm i -g vercel`
2. W folderze z `index.html` uruchom: `vercel`
3. Postępuj zgodnie z instrukcjami

---

## 📝 Co zawiera index.html?

- ✅ Kompletna, działająca strona w jednym pliku
- ✅ Wszystkie komponenty (Nawigacja, Hero, O mnie, Poradniki, Cennik, Kontakt)
- ✅ Responsywny design (działa na telefonie, tablecie, komputerze)
- ✅ Interaktywne elementy (menu hamburger, zakładki, modals)
- ✅ **Poradniki w kafelkach** - 4 poradniki z modalami szczegółów
- ✅ **Cennik z modalami** - 3 pakiety z rozwiniętymi opisami
- ✅ React załadowany z CDN (nie wymaga instalacji)
- ✅ Tailwind CSS z CDN (stylowanie)
- ✅ Ikony Lucide (wszystkie ikony działają)

---

## 🛠️ Jak edytować stronę?

Możesz edytować plik `index.html` w dowolnym edytorze tekstu:
- Notepad++ (Windows)
- Visual Studio Code
- Sublime Text
- Nawet zwykły Notatnik

**Co możesz zmienić:**
- Teksty (zamień "Twoje Imię" na prawdziwe dane)
- Kontakt (email, telefon, WhatsApp)
- Cennik (ceny, opisy pakietów)
- Kolory (np. zmień `bg-blue-600` na `bg-green-600`)

**Po zmianach:** Zapisz plik i odśwież stronę w przeglądarce (F5)

---

## ⚠️ Ważne informacje

### Działa bez internetu?
**NIE** - Strona wymaga połączenia z internetem, bo:
- React, ReactDOM i Babel są ładowane z CDN
- Tailwind CSS jest ładowany z CDN
- Ikony Lucide są ładowane z CDN

### Jak zrobić wersję offline?
Jeśli chcesz wersję działającą bez internetu, napisz - przygotuje plik ze wszystkimi bibliotekami wbudowanymi.

### Czy mogę używać na GitHub Pages?
**TAK!** GitHub Pages ma dostęp do internetu, więc wszystko będzie działać idealnie.

---

## 🎨 Personalizacja

### Zmień dane kontaktowe:
Znajdź w pliku sekcję z `id="contact"` i zamień:
```html
<a href="mailto:korepetycje@example.com">korepetycje@example.com</a>
<a href="tel:+48123456789">+48 123 456 789</a>
```

### Zmień imię:
Znajdź tekst "Twoje Imię" i zamień na swoje prawdziwe dane.

### Zmień kolory:
Zamień wszystkie wystąpienia:
- `blue-600` → `green-600` (zielony)
- `blue-600` → `purple-600` (fioletowy)
- `blue-600` → `red-600` (czerwony)

---

## 🆘 Pomoc

Jeśli coś nie działa:
1. Sprawdź czy masz połączenie z internetem
2. Otwórz konsolę przeglądarki (F12) i sprawdź błędy
3. Upewnij się, że plik nazywa się dokładnie `index.html`
4. Wypróbuj inną przeglądarkę (Chrome, Firefox, Edge)

**Wszystko powinno działać od razu po otwarciu pliku!** 🎉
