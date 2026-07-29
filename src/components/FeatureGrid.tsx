import React from "react";
import { BookOpen, Video, FileText, ArrowUpRight, ExternalLink } from "lucide-react";

interface FeatureGridProps {
  onNavigate: (sectionId: string) => void;
  onOpenTrialLesson?: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onNavigate, onOpenTrialLesson }) => {
  const features = [
    {
      id: "card-1",
      icon: BookOpen,
      heading: "Elastyczne Terminy",
      badge: "Wygoda & Płynność",
      description:
        "Zajęcia dopasowane do Twojego planu dnia i tempa nauki. Możliwość stałych terminów cotygodniowych lub elastycznego umawiania lekcji przed sprawdzianami i klasówkami.",
      highlights: [
        "Dostępność poniedziałek – sobota",
        "Darmowa zmiana terminu z wyprzedzeniem",
        "Intensywne powtórki przed egzaminami",
      ],
      action: "Zobacz ofertę",
      onClick: () => onNavigate("oferta"),
    },
    {
      id: "card-2",
      icon: Video,
      heading: "Microsoft Teams i Excalidraw",
      badge: "Interaktywna Tablica",
      description:
        "Zajęcia odbywają się w stabilnej jakości HD na platformie MS Teams z wykorzystaniem wirtualnej tablicy Excalidraw. Uczeń i nauczyciel piszą na żywo w czasie rzeczywistym.",
      highlights: [
        "Wspólne rozwiązywanie zadań na żywo",
        "Pełna prezentacja wzorów i wykresów",
        "Zapisana tablica po każdej lekcji (PDF)",
      ],
      action: "Jak wyglądają lekcje?",
      onClick: () => {
        if (onOpenTrialLesson) {
          onOpenTrialLesson();
        }
        onNavigate("gwarancja-jakosci");
      },
    },
    {
      id: "card-3",
      icon: FileText,
      heading: "Baza Materiałów",
      badge: "Bezpłatne Kompendium",
      description:
        "Dostęp do autorskiej bazy schematów rozwiązań, kart wzorów, zadań maturalnych CKE oraz zestawień wzorów z fizyki i matematyki na każdym poziomie.",
      highlights: [
        "Autorskie karty wzorów Fizyka & Matematyka",
        "Rozwiązania zadań krok po kroku",
        "Zestawy sprawdzianów i arkuszy CKE",
      ],
      action: "Przeglądaj materiały (materialy.qjonathan.pl)",
      isExternal: true,
      onClick: () => {
        window.open("https://materialy.qjonathan.pl/", "_blank", "noopener,noreferrer");
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Dlaczego Warto
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Nowoczesny model efektywnej edukacji online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Łączymy sprawdzane metody dydaktyczne z najnowszymi narzędziami cyfrowymi, by zapewnić najwyższą przyswajalność wiedzy.
          </p>
        </div>

        {/* 3 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Blue Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100/80 text-blue-800 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-slate-200/60">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={card.onClick}
                  className="w-full pt-4 flex items-center justify-between text-sm font-semibold text-blue-600 hover:text-blue-700 border-t border-slate-200/60 cursor-pointer group/btn"
                >
                  <span>{card.action}</span>
                  {card.isExternal ? (
                    <ExternalLink className="w-4 h-4 text-blue-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
