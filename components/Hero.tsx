import { BookOpen, Video, Clock } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-blue-600">
            Profesjonalne Korepetycje Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Skuteczna nauka w wygodnych warunkach Twojego domu. 
            Spersonalizowane lekcje dostosowane do Twoich potrzeb.
          </p>
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Umów pierwszą lekcję
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mb-2">Elastyczne Terminy</h3>
            <p className="text-gray-600">
              Dopasuj lekcje do swojego grafiku. Nauka wtedy, kiedy Ci pasuje.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mb-2">Nowoczesne Narzędzia</h3>
            <p className="text-gray-600">
              Wykorzystujemy tablicę Miro i najlepsze platformy do nauki online.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mb-2">Sprawdzona Metoda</h3>
            <p className="text-gray-600">
              Indywidualne podejście i materiały przygotowane specjalnie dla Ciebie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}