import { Monitor, FileText, Wifi, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Guides() {
  const [activeGuide, setActiveGuide] = useState<string>('connection');

  const guides = [
    {
      id: 'connection',
      title: 'Jak się połączyć?',
      icon: Monitor,
      content: {
        intro: 'Proces połączenia jest prosty i intuicyjny. Oto kroki, które musisz wykonać:',
        steps: [
          {
            title: 'Krok 1: Ustal termin',
            description: 'Skontaktuj się ze mną przez e-mail lub telefon, aby umówić termin lekcji.'
          },
          {
            title: 'Krok 2: Otrzymaj link',
            description: 'Na 15 minut przed lekcją otrzymasz link do spotkania (Google Meet, Zoom lub inna platforma).'
          },
          {
            title: 'Krok 3: Dołącz do spotkania',
            description: 'Kliknij w link i dołącz do wideo konferencji. Upewnij się, że kamera i mikrofon działają.'
          },
          {
            title: 'Krok 4: Dostęp do tablicy Miro',
            description: 'Podczas lekcji otrzymasz link do tablicy Miro, na której będziemy pracować.'
          }
        ]
      }
    },
    {
      id: 'miro',
      title: 'Tablica Miro - jak z niej korzystać?',
      icon: FileText,
      content: {
        intro: 'Miro to interaktywna tablica, która pozwala na wspólną pracę w czasie rzeczywistym:',
        steps: [
          {
            title: 'Czym jest Miro?',
            description: 'Miro to cyfrowa tablica, na której możemy razem rysować, pisać, wklejać obrazy i rozwiązywać zadania.'
          },
          {
            title: 'Nie potrzebujesz konta',
            description: 'Wystarczy, że otworzysz link, który Ci prześlę. Nie musisz zakładać konta ani instalować aplikacji.'
          },
          {
            title: 'Podstawowe funkcje',
            description: 'Nauczę Cię podczas pierwszej lekcji, jak korzystać z narzędzi do rysowania, pisania i dodawania notatek.'
          },
          {
            title: 'Zapisane notatki',
            description: 'Wszystko, co napiszemy na tablicy, zostanie zapisane i będziesz mieć do tego dostęp po lekcji.'
          }
        ]
      }
    },
    {
      id: 'requirements',
      title: 'Wymagania techniczne',
      icon: Wifi,
      content: {
        intro: 'Aby lekcje przebiegały sprawnie, upewnij się, że spełniasz poniższe wymagania:',
        steps: [
          {
            title: 'Stabilne połączenie internetowe',
            description: 'Przynajmniej 10 Mb/s pobierania i 5 Mb/s wysyłania. Możesz sprawdzić to na speedtest.net'
          },
          {
            title: 'Komputer lub tablet',
            description: 'Zalecam komputer z myszką do wygodniejszej pracy na tablicy. Tablet też jest OK, telefon mniej wygodny.'
          },
          {
            title: 'Przeglądarka',
            description: 'Najlepiej Chrome, Firefox lub Safari w najnowszej wersji.'
          },
          {
            title: 'Kamera i mikrofon',
            description: 'Upewnij się, że działają poprawnie. Słuchawki z mikrofonem poprawiają jakość dźwięku.'
          }
        ]
      }
    },
    {
      id: 'preparation',
      title: 'Jak przygotować się do lekcji?',
      icon: CheckCircle,
      content: {
        intro: 'Aby maksymalnie wykorzystać czas lekcji, oto kilka wskazówek:',
        steps: [
          {
            title: 'Przygotuj materiały',
            description: 'Miej pod ręką zeszyt, notatki z lekcji szkolnych lub zadania, które sprawiają Ci trudność.'
          },
          {
            title: 'Lista pytań',
            description: 'Zapisz sobie pytania i tematy, które chcesz poruszyć podczas lekcji.'
          },
          {
            title: 'Ciche miejsce',
            description: 'Znajdź spokojne miejsce, gdzie nikt Ci nie będzie przeszkadzał przez czas trwania lekcji.'
          },
          {
            title: 'Test sprzętu',
            description: 'Sprawdź 5 minut przed lekcją, czy wszystko działa (internet, kamera, mikrofon).'
          }
        ]
      }
    }
  ];

  const currentGuide = guides.find(g => g.id === activeGuide)!;
  const Icon = currentGuide.icon;

  return (
    <section id="guides" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Poradniki</h2>
          <p className="text-xl text-gray-600">
            Wszystko, co musisz wiedzieć przed pierwszą lekcją
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-3">
            {guides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <button
                  key={guide.id}
                  onClick={() => setActiveGuide(guide.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    activeGuide === guide.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <GuideIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{guide.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3>{currentGuide.title}</h3>
            </div>

            <p className="text-gray-700 mb-8">
              {currentGuide.content.intro}
            </p>

            <div className="space-y-6">
              {currentGuide.content.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
