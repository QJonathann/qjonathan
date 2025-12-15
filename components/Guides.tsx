import { Monitor, FileText, Wifi, CheckCircle, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

interface Guide {
  id: string;
  title: string;
  icon: any;
  shortDesc: string;
  intro: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export function Guides() {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const guides: Guide[] = [
    {
      id: 'connection',
      title: 'Jak się połączyć?',
      icon: Monitor,
      shortDesc: 'Prosty proces połączenia do lekcji online w 4 krokach',
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
    },
    {
      id: 'miro',
      title: 'Tablica Miro',
      icon: FileText,
      shortDesc: 'Dowiedz się jak korzystać z interaktywnej tablicy',
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
    },
    {
      id: 'requirements',
      title: 'Wymagania techniczne',
      icon: Wifi,
      shortDesc: 'Sprawdź czego potrzebujesz do płynnych lekcji',
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
    },
    {
      id: 'preparation',
      title: 'Przygotowanie do lekcji',
      icon: CheckCircle,
      shortDesc: 'Wskazówki jak maksymalnie wykorzystać czas lekcji',
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
  ];

  const openGuideDetails = (guide: Guide) => {
    setSelectedGuide(guide);
    document.body.style.overflow = 'hidden';
  };

  const closeGuideDetails = () => {
    setSelectedGuide(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="guides" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Poradniki</h2>
          <p className="text-xl text-gray-600">
            Wszystko, co musisz wiedzieć przed pierwszą lekcją
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <div
                key={guide.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                onClick={() => openGuideDetails(guide)}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-center mb-3">{guide.title}</h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {guide.shortDesc}
                </p>
                <div className="text-center">
                  <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1 mx-auto">
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal ze szczegółami poradnika */}
      {selectedGuide && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeGuideDetails}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {(() => {
                      const Icon = selectedGuide.icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{selectedGuide.title}</h3>
                    <p className="text-blue-100 text-sm">{selectedGuide.shortDesc}</p>
                  </div>
                </div>
                <button
                  onClick={closeGuideDetails}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-700 text-lg">
                  {selectedGuide.intro}
                </p>
              </div>

              <div className="space-y-6">
                {selectedGuide.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={closeGuideDetails}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Rozumiem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
