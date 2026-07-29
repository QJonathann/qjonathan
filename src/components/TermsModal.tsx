import React from "react";
import { X, FileText, CheckCircle2, ShieldCheck, Download, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Dokument Prawny
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Warunki Świadczenia Usług
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
            
            {/* Intro Alert Box */}
            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-start gap-3 text-blue-900 font-medium">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Zamawiając usługi edukacyjne, Klient oświadcza, że zapoznał się z niniejszym regulaminem i wyraża zgodę na jego warunki.
              </span>
            </div>

            {/* §1 */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700 flex items-center gap-2">
                <span>§1. Postanowienia ogólne</span>
              </h3>
              <p>
                Niniejszy regulamin określa zasady współpracy edukacyjnej pomiędzy Nauczycielem <strong>Jonathan Ciupera Ferro</strong>, a Klientem Uczniem/Rodzicem.
              </p>
              <p>
                Współpraca opiera się na modelu mentoringowym, skupionym na rozwoju umiejętności analitycznych i inżynierskich.
              </p>
            </section>

            {/* §2 */}
            <section className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                §2. Rezerwacja i odwoływanie zajęć
              </h3>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 underline decoration-blue-200">Zasady dla Klienta:</h4>
                <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                  <li>Odwołanie zajęć musi nastąpić nie później niż <strong>24 godziny przed ustalonym terminem</strong>.</li>
                  <li>W przypadku odwołania zajęć w czasie krótszym niż 24h lub nieobecności Ucznia, Klient zobowiązany jest do uiszczenia opłaty w wysokości <strong>50% ceny zajęć</strong>.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200/60">
                <h4 className="font-bold text-slate-900 underline decoration-blue-200">Zasady dla Nauczyciela:</h4>
                <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                  <li>Nauczyciel zobowiązuje się do poinformowania o zmianie terminu co najmniej <strong>48 godzin przed zajęciami</strong>.</li>
                  <li>W przypadku odwołania zajęć przez Nauczyciela w czasie krótszym niż 48h, <strong>kolejna godzina zajęć dla Klienta jest bezpłatna</strong>.</li>
                </ul>
              </div>
            </section>

            {/* §3 */}
            <section className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                §3. Nagrania i materiały dydaktyczne
              </h3>

              <div className="space-y-2">
                <p>
                  <strong>Dostęp do nagrań:</strong> Uczeń ma możliwość otrzymania nagrania wideo z przebiegu lekcji do celów powtórkowych.
                </p>
                <p>
                  <strong>Warunki techniczne:</strong> W szczególnych przypadkach, wynikających ze specyfiki technicznej wykorzystywanego urządzenia lub uwarunkowań sprzętowych uniemożliwiających rejestrację ekranu, Nauczyciel zamiast nagrania wideo dostarcza Klientowi rozszerzone, pisemne opracowanie tematu lekcji w formie pliku PDF.
                </p>
                <p>
                  <strong>Logistyka nagrań:</strong> Nagranie jest udostępniane Klientowi w ciągu 24 godzin od zakończenia lekcji. Ze względu na optymalizację zasobów, nagranie jest przechowywane na serwerze przez 48 godzin, po czym zostaje trwale usunięte. Klient jest odpowiedzialny za jego pobranie w tym terminie.
                </p>
                <p>
                  <strong>Zgody i prywatność:</strong> Nagrywanie odbywa się za obopólną zgodą. Klient ma prawo do udziału w nagraniu bez rejestracji swojego głosu.
                </p>
                <p className="p-3 bg-red-50 text-red-900 border border-red-100 rounded-xl font-medium">
                  <strong>Własność intelektualna:</strong> Nagrania oraz przekazywane opracowania PDF stanowią autorską własność intelektualną Nauczyciela. Obowiązuje całkowity zakaz ich publicznego udostępniania lub odsprzedaży.
                </p>
              </div>
            </section>

            {/* §4 */}
            <section className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/70">
              <h3 className="text-base font-extrabold text-slate-900 text-blue-700">
                §4. Płatności i prawo do odstąpienia
              </h3>
              <p>
                Płatność za zajęcia odbywa się z góry, w terminie ustalonym podczas rezerwacji.
              </p>
              <p>
                W przypadku zakupu treści cyfrowych (gotowych nagrań/kursów), Klient wyraża zgodę na ich dostarczenie przed upływem terminu do odstąpienia od umowy, co skutkuje utratą prawa do zwrotu (zgodnie z ustawą o prawach konsumenta).
              </p>
            </section>

            {/* Date */}
            <div className="pt-2 text-xs font-semibold text-slate-500 italic">
              Data wejścia w życie: Regulamin obowiązuje od dnia opublikowania na stronie internetowej.
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Jonathan Ciupera Ferro • Regulamin
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
