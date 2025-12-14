import { Mail, Phone, MessageCircle, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skontaktuj się ze mną</h2>
          <p className="text-xl text-gray-600">
            Chętnie odpowiem na wszystkie pytania i pomogę dobrać odpowiedni pakiet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">E-mail</h4>
                  <a href="mailto:korepetycje@example.com" className="text-blue-600 hover:underline">
                    korepetycje@example.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Odpowiadam zwykle w ciągu 24 godzin
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Telefon</h4>
                  <a href="tel:+48123456789" className="text-blue-600 hover:underline">
                    +48 123 456 789
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Pn-Pt: 14:00-20:00, Sb: 10:00-18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">WhatsApp / Signal</h4>
                  <a href="https://wa.me/48123456789" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    +48 123 456 789
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Najszybszy sposób kontaktu
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Dostępność</h4>
                  <p className="text-gray-600">Elastyczne terminy</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Również weekendy i popołudnia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-xl text-center shadow-lg">
            <h3 className="mb-2">Szybka odpowiedź gwarantowana!</h3>
            <p className="text-blue-100">
              Odpisuję na wszystkie wiadomości w ciągu 24 godzin. 
              Jeśli pilnie potrzebujesz informacji, najlepiej napisz SMS lub WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}