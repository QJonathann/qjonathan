import { Check } from 'lucide-react';

export function Pricing() {
  const packages = [
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];

  const scrollToContact = () => {
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
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg transition-colors ${
                  pkg.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Wybierz pakiet
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
    </section>
  );
}
