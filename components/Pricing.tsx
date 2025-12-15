import { Check, X, ArrowRight, Clock, Calendar, BookOpen, Mail } from 'lucide-react';
import { useState } from 'react';

interface Package {
  name: string;
  price: string;
  pricePerLesson?: string;
  duration: string;
  features: string[];
  popular: boolean;
  details: {
    description: string;
    whatYouGet: string[];
    idealFor: string[];
    validity: string;
  };
}

export function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const packages: Package[] = [
    {
      name: 'Pojedyncza Lekcja',
      price: '80',
      duration: '60 minut',
      features: [
        'Elastyczny termin',
        'Dostęp do tablicy Miro',
        'Materiały po lekcji',
        'Wsparcie mailowe'
      ],
      popular: false,
      details: {
        description: 'Idealne rozwiązanie jeśli potrzebujesz pomocy z konkretnym tematem lub chcesz wypróbować korepetycje przed zakupem większego pakietu.',
        whatYouGet: [
          '60 minut indywidualnych zajęć online',
          'Dostęp do interaktywnej tablicy Miro podczas lekcji',
          'Zapis z tablicy i notatki po lekcji',
          'Możliwość zadawania pytań mailowo w ciągu 24h po lekcji',
          'Elastyczny wybór terminu (także weekendy)',
          'Materiały dodatkowe dostosowane do Twoich potrzeb'
        ],
        idealFor: [
          'Uczniów potrzebujących pomocy z konkretnym zagadnieniem',
          'Osób, które chcą przetestować jakość korepetycji',
          'Przygotowania do klasówki lub sprawdzianu',
          'Wyjaśnienia trudnego tematu przed egzaminem'
        ],
        validity: 'Termin do ustalenia indywidualnie'
      }
    },
    {
      name: 'Pakiet 5 Lekcji',
      price: '370',
      pricePerLesson: '74 zł/lekcja',
      duration: '60 minut każda',
      features: [
        'Wszystko z pojedynczej lekcji',
        'Oszczędzasz 30 zł',
        'Priorytetowe terminy',
        'Plan nauki',
        'Regularne sprawdziany postępów'
      ],
      popular: true,
      details: {
        description: 'Najpopularniejszy wybór! Pakiet 5 lekcji pozwala na systematyczną pracę nad wybranymi tematami i osiągnięcie wymiernych rezultatów.',
        whatYouGet: [
          '5 x 60 minut indywidualnych zajęć online',
          'Wszystkie korzyści z pojedynczej lekcji',
          'Oszczędność 30 zł w porównaniu do pojedynczych lekcji',
          'Priorytetowe rezerwacje terminów (przed klientami jednorazowymi)',
          'Spersonalizowany plan nauki na cały pakiet',
          'Mini-test po każdych 2 lekcjach do sprawdzenia postępów',
          'Stały kontakt mailowy - pytania między lekcjami',
          'Dedykowane materiały i zadania domowe'
        ],
        idealFor: [
          'Uczniów potrzebujących pomocy z kilku powiązanych tematów',
          'Systematycznego nadrabiania zaległości',
          'Przygotowania do ważnego egzaminu lub sprawdzianu',
          'Utrwalenia materiału z kilku rozdziałów',
          'Powtórki przed klasówką lub testem'
        ],
        validity: 'Ważność pakietu: 3 miesiące od daty zakupu'
      }
    },
    {
      name: 'Pakiet 10 Lekcji',
      price: '700',
      pricePerLesson: '70 zł/lekcja',
      duration: '60 minut każda',
      features: [
        'Wszystko z pakietu 5 lekcji',
        'Oszczędzasz 100 zł',
        'Dedykowany plan nauki',
        'Comiesięczne podsumowanie',
        'Kontakt przez całą ważność pakietu'
      ],
      popular: false,
      details: {
        description: 'Kompleksowy pakiet dla osób nastawionych na długofalowy rozwój i znaczącą poprawę wyników. Idealne do przygotowania do matury lub systematycznej nauki przez cały semestr.',
        whatYouGet: [
          '10 x 60 minut indywidualnych zajęć online',
          'Wszystkie korzyści z pakietu 5 lekcji',
          'Oszczędność 100 zł w porównaniu do pojedynczych lekcji',
          'Najwyższy priorytet w rezerwacji terminów',
          'Kompleksowy, dedykowany plan nauki na cały pakiet',
          'Regularne testy i sprawdziany postępów (co 3 lekcje)',
          'Comiesięczne szczegółowe podsumowanie postępów dla ucznia i rodzica',
          'Stały kontakt mailowy i WhatsApp przez cały okres ważności pakietu',
          'Rozbudowane materiały, zadania domowe i dodatkowe ćwiczenia',
          'Porady dotyczące technik uczenia się i organizacji nauki',
          'Możliwość bezpłatnego przesunięcia maksymalnie 2 terminów (48h wcześniej)'
        ],
        idealFor: [
          'Przygotowania do matury (podstawowej lub rozszerzonej)',
          'Systematycznej nauki przez cały semestr',
          'Kompleksowego nadrobienia dużych zaległości',
          'Uczniów dążących do znaczącej poprawy ocen',
          'Przygotowania do olimpiad i konkursów',
          'Nauki od podstaw trudnych działów (np. całej fizyki lub matematyki)'
        ],
        validity: 'Ważność pakietu: 3 miesiące od daty zakupu'
      }
    }
  ];

  const openPackageDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden'; // Zapobiega scrollowaniu tła
  };

  const closePackageDetails = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToContact = () => {
    closePackageDetails();
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Cennik</h2>
          <p className="text-xl text-gray-600">
            Wybierz pakiet dopasowany do Twoich potrzeb
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="text-center mb-4">
                  <span className="px-4 py-1 bg-white/20 rounded-full text-sm">
                    Najpopularniejszy
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`mb-2 ${pkg.popular ? 'text-white' : ''}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl">{pkg.price}</span>
                  <span className={pkg.popular ? 'text-white/80' : 'text-gray-600'}>
                    zł
                  </span>
                </div>
                {pkg.pricePerLesson && (
                  <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {pkg.pricePerLesson}
                  </p>
                )}
                <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  {pkg.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      pkg.popular ? 'text-white' : 'text-blue-600'
                    }`} />
                    <span className={`text-sm ${
                      pkg.popular ? 'text-white' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openPackageDetails(pkg)}
                className={`w-full py-3 rounded-lg transition-colors ${
                  pkg.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Zobacz szczegóły
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-xl">
          <h3 className="mb-4">Dodatkowe informacje</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Pierwsza lekcja próbna w pełnej cenie - jeśli nie będziesz zadowolony, zwracam pieniądze</li>
            <li>• Pakiety ważne 3 miesiące od daty zakupu</li>
            <li>• Możliwość odwołania lekcji do 24h przed terminem bez utraty zajęć</li>
            <li>• Płatność przelewem lub BLIK przed lekcją</li>
          </ul>
        </div>
      </div>

      {/* Modal ze szczegółami pakietu */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closePackageDetails}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="mb-2">{selectedPackage.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl">{selectedPackage.price} zł</span>
                    {selectedPackage.pricePerLesson && (
                      <span className="text-blue-100">({selectedPackage.pricePerLesson})</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={closePackageDetails}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-blue-100">{selectedPackage.duration}</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-8">
                <h4 className="mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Opis pakietu
                </h4>
                <p className="text-gray-700">{selectedPackage.details.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-600" />
                  Co dostajesz?
                </h4>
                <ul className="space-y-3">
                  {selectedPackage.details.whatYouGet.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Idealny dla:
                </h4>
                <ul className="space-y-2">
                  {selectedPackage.details.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h5 className="text-blue-900">Ważność pakietu</h5>
                </div>
                <p className="text-gray-700">{selectedPackage.details.validity}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={scrollToContact}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Wybierz pakiet i skontaktuj się
                </button>
                <button
                  onClick={closePackageDetails}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
