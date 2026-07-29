import React from "react";
import { X, Shield, Lock, Server, Cpu, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100 flex flex-col justify-between"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-5 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Polityka Prywatności & RODO
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Polityka Prywatności
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              title="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Legal Text Content */}
          <div className="space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed pr-1">
            
            {/* 1. Administrator Danych */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                1. Administrator Danych
              </h3>
              <p>
                Administratorem Twoich danych osobowych jest <strong>Jonathan Ciupera Ferro</strong>, prowadzący działalność edukacyjną (działalność nierejestrowana) za pośrednictwem strony <strong>qJonathan.pl</strong>.
              </p>
              <p className="font-semibold text-slate-900">
                Kontakt: <a href="mailto:kontakt@qjonathan.pl" className="text-blue-600 hover:underline">kontakt@qjonathan.pl</a>
              </p>
            </section>

            {/* 2. Cel i Podstawa Przetwarzania */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                2. Cel i Podstawa Przetwarzania
              </h3>
              <p>Przetwarzam Twoje dane (imię, e-mail, nr telefonu) w celu:</p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-700 font-medium">
                <li>Ustalenia terminów i realizacji zajęć (Art. 6 ust. 1 lit. b RODO).</li>
                <li>Przesyłania materiałów dydaktycznych i nagrań z lekcji.</li>
                <li>Rozliczeń finansowych (ewidencja sprzedaży).</li>
              </ul>
            </section>

            {/* 3. Hosting i Dane Techniczne */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                3. Hosting i Dane Techniczne
              </h3>
              <p>
                Strona jest hostowana w usłudze <strong>GitHub Pages (GitHub Inc., USA)</strong>. Dane techniczne (np. adres IP) mogą być przetwarzane na serwerach w USA na podstawie Standardowych Klauzul Umownych, zapewniających bezpieczeństwo danych.
              </p>
            </section>

            {/* 4. Narzędzia Zewnętrzne */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                4. Narzędzia Zewnętrzne
              </h3>
              <p>W ramach współpracy korzystam z:</p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-700 font-medium">
                <li><strong>Microsoft Teams / Miro</strong> – do prowadzenia zajęć i pracy na tablicy.</li>
                <li><strong>WhatsApp</strong> – do bieżącej komunikacji z uczniem i rodzicem.</li>
                <li><strong>Google Drive</strong> – do krótkoterminowego udostępniania nagrań z lekcji.</li>
              </ul>
            </section>

            {/* 5. Twoje Prawa */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                5. Twoje Prawa
              </h3>
              <p>
                Masz prawo do wglądu w swoje dane, ich poprawienia, żądania usunięcia oraz ograniczenia przetwarzania. Możesz także wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO).
              </p>
            </section>

            {/* 6. Ciasteczka (Cookies) */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                6. Ciasteczka (Cookies)
              </h3>
              <p>
                Strona wykorzystuje jedynie niezbędne pliki cookies do poprawnego wyświetlania treści. Nie stosuję inwazyjnego śledzenia ani profilowania reklamowego.
              </p>
            </section>

            {/* 7. Wirtualny Asystent AI i historia czatu */}
            <section className="space-y-3 bg-blue-50/70 p-5 rounded-2xl border border-blue-100">
              <h3 className="text-base font-extrabold text-blue-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span>7. Wirtualny Asystent AI i historia czatu</span>
              </h3>
              <p className="text-slate-800">
                Na naszej stronie udostępniamy Wirtualnego Asystenta opartego na sztucznej inteligencji, który pomaga w kwestiach organizacyjnych i informacyjnych. W trosce o najwyższą jakość obsługi oraz rozwój naszych usług, informujemy, że:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-slate-800 font-medium">
                <li>
                  <strong>Analiza zapytań:</strong> Treść pytań wpisywanych w oknie czatu jest analizowana przez zautomatyzowane modele sztucznej inteligencji (LLM).
                </li>
                <li>
                  <strong>Zapisywanie historii (logi):</strong> Historia konwersacji z Asystentem jest przesyłana na nasz wewnętrzny, zabezpieczony serwer komunikacyjny wyłącznie w celach technicznych, analitycznych oraz poprawy jakości obsługi przez Administratora.
                </li>
                <li>
                  <strong>Ochrona danych:</strong> Zdecydowanie prosimy o niepodawanie wrażliwych danych osobowych (np. PESEL, adres zamieszkania, hasła) w oknie czatu. Czat służy wyłącznie do zapytań ogólnych. W celu przekazania danych do rezerwacji lekcji prosimy o kontakt bezpośredni (e-mail, telefon, WhatsApp).
                </li>
              </ul>
            </section>

            {/* Date and Consent Notice */}
            <div className="pt-2 text-xs text-slate-500 font-medium space-y-1">
              <p className="italic">Data wejścia w życie: Polityka prywatności obowiązuje od dnia opublikowania na stronie internetowej.</p>
              <p className="text-slate-700">
                Korzystając ze strony oraz usług, oświadczasz, że zapoznałeś się z niniejszą polityką prywatności i wyrażasz zgodę na przetwarzanie Twoich danych na określonych warunkach.
              </p>
            </div>

          </div>

          {/* Footer actions */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Jonathan Ciupera Ferro • Polityka Prywatności
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer ml-auto"
            >
              Zamknij
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
