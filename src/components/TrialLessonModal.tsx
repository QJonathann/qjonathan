import React from "react";
import { X, Youtube, ExternalLink, Sparkles, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TrialLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialLessonModal: React.FC<TrialLessonModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>Przykładowa Lekcja Próbna • YouTube</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                  Zobacz jak wyglądają moje zajęcia online
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Lekcja próbna jest przygotowana w formie krótkiego nagrania wideo na YouTube. Zobacz w praktyce, jak korzystamy z cyfrowej tablicy Miro, tłumaczymy wzory CKE oraz rozwiązujemy zadania krok po kroku.
            </p>

            {/* Embedded Responsive YouTube Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-800 mb-6 group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                title="Przykładowa Lekcja Próbna z Fizyki i Matematyki - mgr inż. Jonathan"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Parent Consultation & Direct Booking Callout */}
            <div className="bg-blue-50/80 rounded-2xl p-4 sm:p-5 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center justify-center sm:justify-start gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Konsultacja dla Rodziców & Rezerwacje</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Rodzice mogą również umówić się na bezpłatną konsultację dotyczącą planu nauki dziecka w naszym systemie rezerwacji.
                </p>
              </div>

              <a
                href="https://rezerwacje.qjonathan.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Rezerwuj Termin</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Footer Close */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                QJonathan Tutoring • Zobacz pełne nagranie lekcji próbnej
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Zamknij podgląd
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
