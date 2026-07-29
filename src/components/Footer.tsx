import React from "react";
import { GraduationCap, ShieldCheck, Mail, Phone, Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Korepetycje Online
                </span>
                <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                  Fizyka • Matematyka
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Profesjonalne korepetycje online z fizyki i matematyki dla uczniów szkół podstawowych i ponadpodstawowych. Przygotowanie do Egzaminu Ósmoklasisty oraz Matury CKE.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Bezpieczne płatności & Dedykowana platforma Miro + MS Teams</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Nawigacja</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onNavigate("o-mnie")} className="hover:text-blue-400 transition-colors">
                  O mnie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("gwarancja-jakosci")} className="hover:text-blue-400 transition-colors">
                  Gwarancja jakości
                </button>
              </li>
              <li>
                <a
                  href="https://materialy.qjonathan.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-block"
                >
                  Baza Materiałów (materialy.qjonathan.pl)
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate("oferta")} className="hover:text-blue-400 transition-colors">
                  Oferta i Cennik
                </button>
              </li>
              <li>
                <a
                  href="https://ai.qjonathan.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Asystent AI (ai.qjonathan.pl)</span>
                  <span className="px-1.5 py-0.2 bg-blue-500/20 text-blue-300 text-[9px] rounded font-bold">NOWOŚĆ</span>
                </a>
              </li>
              <li>
                <a
                  href="https://rezerwacje.qjonathan.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-block"
                >
                  Rezerwacje (System Online)
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate("kontakt")} className="hover:text-blue-400 transition-colors">
                  Kontakt i Lekcja Próbna
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Safety Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Zasady i prywatność</h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-blue-400 text-slate-300 font-medium transition-colors cursor-pointer text-left"
                >
                  Warunki świadczenia usług (Regulamin)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-blue-400 text-slate-300 font-medium transition-colors cursor-pointer text-left"
                >
                  Polityka prywatności & RODO
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 qJonathan.pl. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-2">
            <span>Korepetycje Online – Fizyka & Matematyka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
