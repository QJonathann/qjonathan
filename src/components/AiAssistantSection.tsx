import React, { useState, useEffect } from "react";
import { Sparkles, Bot, MessageSquare, ExternalLink, ArrowRight, Zap } from "lucide-react";

export const AiAssistantSection: React.FC = () => {
  const [subject, setSubject] = useState<"matematyka" | "fizyka">("matematyka");

  const mathPhrases = [
    "Rozwiąż równanie kwadratowe 2x² - 8x + 6 = 0 z wyznaczeniem delty.",
    "Oblicz pochodną funkcji f(x) = (3x² + 2x) / (x - 1).",
    "Wyznacz równanie prostej prostopadłej do y = 3x - 5 przechodzącej przez P(2, 7).",
    "Oblicz granicę ciągu lim (n→∞) (3n² + 5) / (2n² - 1).",
    "Wyjaśnij twierdzenie sinusów i cosinusów na przykładzie trójkąta.",
  ];

  const physicsPhrases = [
    "Samochód przyspiesza z a = 2.5 m/s² od v₀ = 0. Oblicz drogę i prędkość po t = 6 s.",
    "Jak obliczyć siłę dośrodkową w ruchu po okręgu F = m·v² / r?",
    "Wyjaśnij I i II zasadę dynamiki Newtona w zadaniach CKE.",
    "Oblicz natężenie prądu I w obwodzie z oporem R = 15 Ω i napięciem U = 230 V.",
    "Praca wyjścia elektronów wynosi 2.1 eV. Oblicz częstotliwość graniczną zjawiska.",
  ];

  const currentPhrases = subject === "matematyka" ? mathPhrases : physicsPhrases;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset animation when subject changes
  useEffect(() => {
    setPhraseIndex(0);
    setTypedText("");
    setIsDeleting(false);
  }, [subject]);

  // Fast typewriter animation effect
  useEffect(() => {
    const currentPhrase = currentPhrases[phraseIndex % currentPhrases.length];
    let speed = isDeleting ? 12 : 28;

    if (!isDeleting && typedText === currentPhrase) {
      const timer = setTimeout(() => setIsDeleting(true), 1600);
      return () => clearTimeout(timer);
    }

    if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % currentPhrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentPhrase.substring(0, typedText.length - 1)
          : currentPhrase.substring(0, typedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, currentPhrases]);

  const handleOpenAiSite = () => {
    window.open("https://ai.qjonathan.pl/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="asystent-ai" className="py-16 md:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Dedykowany Serwis AI • ai.qjonathan.pl</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Inteligentny Asystent Fizyki i Matematyki
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
            Potrzebujesz szybkiej podpowiedzi do zadania lub natychmiastowego objaśnienia wzoru? Przetestuj naszego asystenta AI zaprogramowanego specjalnie pod wymagania CKE.
          </p>
        </div>

        {/* Narrow Workspace Container (max-w-2xl) */}
        <div className="max-w-2xl mx-auto bg-slate-900/95 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Top Header Bar */}
          <div className="bg-slate-950/90 p-5 sm:p-6 border-b border-slate-800/80">
            <div className="flex items-center justify-between gap-4 mb-4">
              
              {/* Left AI Identity */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center relative shadow-xs">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>QJonathan AI Tutor</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono uppercase tracking-wider border border-blue-500/30">
                      Live
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400">Generuje rozwiązania krok po kroku</p>
                </div>
              </div>

              {/* Subject Toggle */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setSubject("matematyka")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    subject === "matematyka"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Matematyka
                </button>
                <button
                  onClick={() => setSubject("fizyka")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    subject === "fizyka"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Fizyka
                </button>
              </div>
            </div>

            {/* ANIMATED CHAT BUBBLE (Dymek Czatu) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-inner">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-blue-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                      <span>Asystent AI pisze pytanie ({subject})...</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Auto-typograf</span>
                  </div>

                  <div className="text-xs sm:text-sm font-mono text-slate-200 min-h-[80px] sm:min-h-[64px] bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 flex items-start leading-relaxed">
                    <div className="w-full">
                      <span>{typedText}</span>
                      <span className="inline-block w-2 h-4 bg-blue-400 ml-1 animate-pulse align-middle"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-5 sm:p-6 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-slate-300">
              <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
              <p className="text-xs">
                Chcesz zadać to lub własne pytanie? Przejdź do pełnej wersji.
              </p>
            </div>

            <button
              onClick={handleOpenAiSite}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 group"
            >
              <span>Zapytaj AI na ai.qjonathan.pl</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
