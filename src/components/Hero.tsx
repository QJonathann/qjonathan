import React from "react";
import { MathCanvasBackground } from "./MathCanvasBackground";
import { Sparkles, CheckCircle2, ArrowRight, CalendarCheck, Award, Users } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-slate-50 min-h-[580px] lg:min-h-[640px] flex items-center pt-8 pb-16 lg:py-20 border-b border-slate-200/60">
      {/* Dynamic Animated Kinetic Geometry Background */}
      <MathCanvasBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Pill Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide shadow-2xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Skuteczne Korepetycje z Fizyki i Matematyki Online</span>
            <span className="text-blue-300">•</span>
            <span className="text-blue-600 font-bold">Konsultacje dla Rodziców</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
            Skuteczna nauka w wygodnych warunkach{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
              Twojego domu.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
            Profesjonalne wsparcie uczniów i konsultacje planu nauki dla rodziców. Obejrzyj nagranie próbne na YouTube lub przetestuj asystenta AI.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="https://rezerwacje.qjonathan.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-blue-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <CalendarCheck className="w-5 h-5 text-blue-100 group-hover:scale-110 transition-transform" />
              <span>Zarezerwuj Lekcję</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </a>

            <button
              onClick={() => onNavigate("asystent-ai")}
              className="px-6 py-3.5 bg-white text-slate-700 font-semibold text-base rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>Wypróbuj Asystenta AI</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>100% Zdawalność Matury</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
              <Users className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Konsultacje dla Rodziców</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
              <Award className="w-5 h-5 text-blue-600 shrink-0" />
              <span>Indywidualny Plan Nauki</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
