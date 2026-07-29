import React, { useState } from "react";
import { MaterialItem } from "../types";
import { FileText, ExternalLink, BookOpen, ChevronRight, CheckCircle, Sparkles, ArrowRight, Layers } from "lucide-react";

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  // Teaser samples for physics & math
  const teaserMaterials: MaterialItem[] = [
    {
      id: "mat-1",
      title: "Równania Kwadratowe i Wzory Viète'a",
      subject: "matematyka",
      level: "Liceum Podstawa",
      category: "Algebra",
      description: "Podsumowanie wyróżnika Δ, postaci kanonicznej i iloczynowej oraz wzorów Viète'a.",
      formulaCount: 6,
      formulas: [
        { label: "Postać ogólna", formula: "f(x) = ax² + bx + c", note: "a ≠ 0" },
        { label: "Wyróżnik równania (Delta)", formula: "Δ = b² - 4ac", note: "Δ > 0 → 2 rozwiązania" },
        { label: "Wzory Viète'a", formula: "x₁ + x₂ = -b / a,   x₁ · x₂ = c / a", note: "Dla pierwiastków" },
      ],
      keyTips: [
        "Uważaj na znaki przy obliczaniu b²!",
        "Gdy a > 0 ramiona paraboli skierowane są do góry.",
      ],
    },
    {
      id: "fiz-1",
      title: "Kinematyka – Ruch Jednostajny i Przyspieszony",
      subject: "fizyka",
      level: "Wszystkie",
      category: "Kinematyka",
      description: "Zestawienie wzorów na drogę, prędkość oraz przyspieszenie w ruchu prostoliniowym.",
      formulaCount: 5,
      formulas: [
        { label: "Prędkość w ruchu prostoliniowym", formula: "v = s / t", note: "Prędkość stała" },
        { label: "Przyspieszenie", formula: "a = Δv / Δt = (v - v₀) / t", note: "Jednostka [m/s²]" },
        { label: "Droga w ruchu jednostajnie przyspieszonym", formula: "s = v₀·t + (a·t²) / 2", note: "Gdy v₀ = 0 → s = a·t²/2" },
      ],
      keyTips: [
        "Pamiętaj o przeliczeniu km/h na m/s (dziel przez 3.6).",
        "Wykres v(t): pole pod wykresem oznacza całkowitą drogę s.",
      ],
    },
    {
      id: "mat-2",
      title: "Trygonometria – Jedynka i Twierdzenie Cosinusów",
      subject: "matematyka",
      level: "Liceum Rozszerzenie",
      category: "Trygonometria",
      description: "Tożsamości trygonometryczne, twierdzenie sinusów oraz twierdzenie cosinusów dla trójkątów.",
      formulaCount: 7,
      formulas: [
        { label: "Jedynka Trygonometryczna", formula: "sin²α + cos²α = 1", note: "Tożsamość główna" },
        { label: "Twierdzenie Cosinusów", formula: "c² = a² + b² - 2ab · cos γ", note: "Dowolny trójkąt" },
        { label: "Twierdzenie Sinusów", formula: "a / sin α = b / sin β = 2R", note: "R - promień okręgu opisanego" },
      ],
      keyTips: [
        "Zawsze sprawdzaj ćwiartkę kąta przed ustaleniem znaku wartości trygonometrycznej.",
      ],
    },
  ];

  const handleOpenExternalMaterials = () => {
    window.open("https://materialy.qjonathan.pl/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="materialy" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Callout linking to https://materialy.qjonathan.pl/ */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-8 sm:p-10 mb-14 shadow-xl shadow-blue-600/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>Oficjalny Portal Materiałów</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Pełna Baza Materiałów & Kart Wzorów
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Szukasz darmowych opracowań, ściąg i interaktywnych kart ze wzorami z matematyki oraz fizyki? Odkryj dedykowany serwis materiałów przygotowany przez Jonathana!
              </p>
            </div>

            <button
              onClick={handleOpenExternalMaterials}
              className="px-8 py-4 bg-white text-blue-700 font-extrabold text-sm sm:text-base rounded-2xl shadow-xl hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 shrink-0 cursor-pointer group"
            >
              <span>Przejdź do materialy.qjonathan.pl</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Section Teaser Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Podgląd i Teaser Materiałów
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Przykładowe karty wzorów z naszej bazy
            </h3>
          </div>
          <button
            onClick={handleOpenExternalMaterials}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>Zobacz pełne zestawienie w portalu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Teaser Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teaserMaterials.map((mat) => (
            <div
              key={mat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      mat.subject === "matematyka"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-indigo-100 text-indigo-800"
                    }`}
                  >
                    {mat.subject}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{mat.level}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2">{mat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{mat.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  {mat.formulaCount} wzorów
                </span>
                <button
                  onClick={() => setSelectedMaterial(mat)}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Podgląd</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Teaser View */}
        {selectedMaterial && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {selectedMaterial.subject.toUpperCase()} • {selectedMaterial.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    {selectedMaterial.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Przykładowy Skrót Wzorów:
                  </h4>
                  <div className="space-y-3">
                    {selectedMaterial.formulas.map((f, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <span className="text-xs font-semibold text-slate-500 block">{f.label}</span>
                          <code className="text-base font-bold text-blue-900 font-mono mt-0.5 block">
                            {f.formula}
                          </code>
                        </div>
                        <span className="text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 self-start sm:self-auto">
                          {f.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Wskazówki Egzaminacyjne:
                  </h4>
                  <ul className="space-y-2">
                    {selectedMaterial.keyTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  onClick={handleOpenExternalMaterials}
                  className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Pełna Wersja na materialy.qjonathan.pl</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
