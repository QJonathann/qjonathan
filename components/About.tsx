import { Award, Users, Star, GraduationCap, Target, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [activeTab, setActiveTab] = useState<string>('about');

  const tabs = [
    { id: 'about', label: 'O mnie', icon: GraduationCap },
    { id: 'experience', label: 'Doświadczenie', icon: Award },
    { id: 'approach', label: 'Metoda nauczania', icon: BookOpen },
    { id: 'achievements', label: 'Osiągnięcia', icon: Target }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">O mnie</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Zdjęcie i podstawowe info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl text-center sticky top-24">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-24 h-24 text-white" />
              </div>
              <h3 className="mb-2">Twoje Imię</h3>
              <p className="text-blue-600 mb-4">Korepetytor Fizyki i Matematyki</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">5+ lat doświadczenia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">200+ zadowolonych uczniów</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">95% skuteczność</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zakładki z informacjami */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 min-h-[400px]">
              {activeTab === 'about' && (
                <div>
                  <h3 className="mb-4">Kim jestem?</h3>
                  <p className="text-gray-700 mb-4">
                    Jestem absolwentem [Nazwa Uczelni], z tytułem magistra w dziedzinie fizyki/matematyki. 
                    Moją pasją jest nauczanie i pomaganie uczniom w odkrywaniu piękna nauk ścisłych.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Od ponad 5 lat prowadzę korepetycje online i stacjonarne, pomagając uczniom 
                    na różnych poziomach edukacji - od szkoły podstawowej, przez liceum, aż po 
                    przygotowania do matury i egzaminów wstępnych na studia.
                  </p>

                  <h4 className="mb-3">Specjalizacje:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="text-blue-600 mb-2">Matematyka</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Szkoła podstawowa</li>
                        <li>• Liceum (podstawowa i rozszerzona)</li>
                        <li>• Przygotowanie do matury</li>
                        <li>• Egzaminy ósmoklasisty</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h5 className="text-indigo-600 mb-2">Fizyka</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Szkoła podstawowa</li>
                        <li>• Liceum (podstawowa i rozszerzona)</li>
                        <li>• Przygotowanie do matury</li>
                        <li>• Mechanika, elektryczność, optyka</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div>
                  <h3 className="mb-4">Moje doświadczenie</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500">2020 - obecnie</span>
                      </div>
                      <h4 className="mb-2">Korepetytor Online</h4>
                      <p className="text-gray-700">
                        Prowadzenie indywidualnych i grupowych zajęć online z matematyki i fizyki. 
                        Wykorzystanie nowoczesnych narzędzi takich jak tablica Miro do interaktywnej nauki.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500">2018 - 2020</span>
                      </div>
                      <h4 className="mb-2">Korepetytor Stacjonarny</h4>
                      <p className="text-gray-700">
                        Prowadzenie korepetycji stacjonarnych dla uczniów szkół podstawowych i średnich. 
                        Przygotowanie dziesiątek uczniów do egzaminów i matury.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500">2015 - 2020</span>
                      </div>
                      <h4 className="mb-2">Studia - [Nazwa Uczelni]</h4>
                      <p className="text-gray-700">
                        Magisterium w dziedzinie fizyki/matematyki. Podczas studiów prowadziłem zajęcia 
                        wyrównawcze dla młodszych studentów.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="mb-3">Statystyki:</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl text-blue-600 mb-1">200+</div>
                        <p className="text-sm text-gray-600">Uczniów</p>
                      </div>
                      <div>
                        <div className="text-3xl text-blue-600 mb-1">1500+</div>
                        <p className="text-sm text-gray-600">Godzin lekcji</p>
                      </div>
                      <div>
                        <div className="text-3xl text-blue-600 mb-1">95%</div>
                        <p className="text-sm text-gray-600">Skuteczność</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div>
                  <h3 className="mb-4">Moja metoda nauczania</h3>
                  <p className="text-gray-700 mb-6">
                    Wierzę, że każdy uczeń może osiągnąć sukces przy odpowiednim wsparciu i metodzie nauczania. 
                    Moje lekcje są interaktywne, angażujące i dostosowane do indywidualnego stylu uczenia się.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <h4 className="mb-2">1. Diagnostyka i planowanie</h4>
                      <p className="text-gray-700">
                        Na początku sprawdzam poziom wiedzy ucznia i wspólnie ustalamy cele. 
                        Tworzę indywidualny plan nauki dostosowany do potrzeb i tempa uczenia się.
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg">
                      <h4 className="mb-2">2. Teoria połączona z praktyką</h4>
                      <p className="text-gray-700">
                        Nie uczę tylko "na pamięć". Pokazuję praktyczne zastosowania wzorów i praw, 
                        co pomaga w lepszym zrozumieniu i zapamiętaniu materiału.
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <h4 className="mb-2">3. Interaktywne narzędzia</h4>
                      <p className="text-gray-700">
                        Wykorzystuję tablicę Miro, symulacje fizyczne, wykresy interaktywne i inne 
                        nowoczesne narzędzia, które sprawiają, że nauka jest ciekawsza i skuteczniejsza.
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg">
                      <h4 className="mb-2">4. Regularne sprawdziany postępów</h4>
                      <p className="text-gray-700">
                        Co kilka lekcji sprawdzamy postępy, rozwiązujemy testy i zadania egzaminacyjne. 
                        Analizujemy błędy i pracujemy nad ich eliminacją.
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <h4 className="mb-2">5. Materiały i wsparcie</h4>
                      <p className="text-gray-700">
                        Po każdej lekcji dostajesz dostęp do notatek z tablicy Miro, dodatkowych materiałów 
                        i zadań do samodzielnego rozwiązania. Jestem dostępny mailowo na pytania między lekcjami.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div>
                  <h3 className="mb-4">Osiągnięcia moich uczniów</h3>
                  <p className="text-gray-700 mb-6">
                    Największą satysfakcją są dla mnie sukcesy moich uczniów. Oto kilka przykładów:
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="text-green-800 mb-1">Matura - 100% zdawalność</h5>
                          <p className="text-sm text-gray-700">
                            Wszyscy moi uczniowie, którzy przygotowywali się do matury, 
                            zdali egzamin. Średnia punktów: 87%.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="text-green-800 mb-1">Poprawa ocen</h5>
                          <p className="text-sm text-gray-700">
                            95% uczniów poprawiło swoją ocenę o przynajmniej jeden stopień 
                            w ciągu pierwszego semestru współpracy.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="text-green-800 mb-1">Olimpiady i konkursy</h5>
                          <p className="text-sm text-gray-700">
                            Kilkoro moich uczniów zakwalifikowało się do etapów wojewódzkich 
                            olimpiad z matematyki i fizyki.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="mb-4">Co mówią uczniowie i rodzice:</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 italic mb-2">
                        "Dzięki korepetycjom poprawiłem się z matematyki z 2 na 5. 
                        Pan tłumaczy wszystko w prosty sposób i lekcje są naprawdę ciekawe!"
                      </p>
                      <p className="text-sm text-gray-600">- Kacper, uczeń liceum</p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 italic mb-2">
                        "Moja córka wreszcie zrozumiała fizykę! Teraz sama prosi o dodatkowe zadania. 
                        Bardzo polecam!"
                      </p>
                      <p className="text-sm text-gray-600">- Pani Anna, rodzic</p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 italic mb-2">
                        "Zdałam maturę rozszerzoną z matematyki na 92%. Bez tych korepetycji 
                        nie dałabym rady. Dziękuję!"
                      </p>
                      <p className="text-sm text-gray-600">- Zuzia, maturzystka</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
