import React, { useState, useEffect } from "react";
import { Mail, Phone, MessageSquare, Calendar, ExternalLink, Check, Copy, Users } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [phoneAvailable, setPhoneAvailable] = useState<boolean>(true);

  useEffect(() => {
    const checkPhoneAvailability = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Europe/Warsaw",
          weekday: "short",
          hour: "numeric",
          hour12: false,
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        const parts = formatter.formatToParts(now);

        let weekday = "";
        let hour = 0;
        for (const p of parts) {
          if (p.type === "weekday") weekday = p.value;
          if (p.type === "hour") hour = parseInt(p.value, 10);
        }

        const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
        const isSaturday = weekday === "Sat";

        if (isWeekday && hour >= 10 && hour < 22) {
          setPhoneAvailable(true);
        } else if (isSaturday && hour >= 10 && hour < 18) {
          setPhoneAvailable(true);
        } else {
          setPhoneAvailable(false);
        }
      } catch {
        setPhoneAvailable(true);
      }
    };

    checkPhoneAvailability();
    const interval = setInterval(checkPhoneAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact.qjonathan@gmail.com");
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+48796305827");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Skontaktuj się ze mną
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Chętnie odpowiem na wszystkie pytania i pomogę dobrać odpowiedni model współpracy
          </p>
        </div>

        {/* 2x2 Clean White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          
          {/* Card 1: E-mail */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-200/40 flex items-start gap-4 transition-all hover:shadow-lg hover:border-blue-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-slate-800">E-mail</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <a
                  href="mailto:contact.qjonathan@gmail.com"
                  className="text-base font-bold text-blue-600 hover:text-blue-700 truncate hover:underline"
                >
                  contact.qjonathan@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Kopiuj e-mail"
                  className="p-1 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer shrink-0"
                >
                  {copiedMail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Odpowiadam zwykle w ciągu 24 godzin
              </p>
            </div>
          </div>

          {/* Card 2: Telefon (Z live znaczkieem dostępności) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-200/40 flex items-start gap-4 transition-all hover:shadow-lg hover:border-blue-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-800">Telefon</h3>
                {/* Status Badging per user request for Telefon */}
                <span className="flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      phoneAvailable ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                    }`}
                  />
                  <span className={phoneAvailable ? "text-emerald-700" : "text-amber-700"}>
                    {phoneAvailable ? "Dostępny" : "Niedostępny"}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <a
                  href="tel:+48796305827"
                  className="text-base font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  +48 796 305 827
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Kopiuj numer"
                  className="p-1 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer shrink-0"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Pn-Pt: 10:00-22:00, Sb: 10:00-18:00
              </p>
            </div>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-200/40 flex items-start gap-4 transition-all hover:shadow-lg hover:border-blue-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-slate-800">WhatsApp</h3>
              <a
                href="https://wa.me/48796305827"
                target="_blank"
                rel="noreferrer"
                className="text-base font-bold text-blue-600 hover:text-blue-700 hover:underline block mt-0.5"
              >
                +48 796 305 827
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Najszybszy sposób kontaktu
              </p>
            </div>
          </div>

          {/* Card 4: System Rezerwacji Online (ZAWSZE DOSTĘPNY 24/7) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-200/40 flex items-start gap-4 transition-all hover:shadow-lg hover:border-blue-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-800">System rezerwacji</h3>
                <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Zawsze dostępny 24/7</span>
                </span>
              </div>

              <a
                href="https://rezerwacje.qjonathan.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>System rezerwacji online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-xs text-slate-500 mt-1">
                Wybierz dogodny termin lekcji lub konsultacji online
              </p>
            </div>
          </div>

        </div>

        {/* Parent Consultation Special Card */}
        <div className="bg-amber-50/90 rounded-2xl p-5 border border-amber-200/80 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Konsultacja dla Rodziców (Plan Nauki Dziecka)
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Chcesz omówić cele, zaległości lub przygotowanie dziecka do egzaminu? Możesz umówić się na rozmowę w systemie rezerwacji.
              </p>
            </div>
          </div>

          <a
            href="https://rezerwacje.qjonathan.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>Umów konsultację rodzica</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom Blue Banner */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-blue-600/20 text-center">
          <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
            Szybka odpowiedź gwarantowana!
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-2 font-normal leading-relaxed max-w-2xl mx-auto">
            Odpisuję na wszystkie wiadomości w ciągu 24 godzin. Jeśli pilnie potrzebujesz informacji, najlepiej napisz SMS lub na WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
