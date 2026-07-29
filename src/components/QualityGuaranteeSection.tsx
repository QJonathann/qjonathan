import React, { useState } from "react";
import { 
  ShieldCheck, 
  Monitor, 
  Video, 
  FileCheck, 
  Sparkles, 
  CheckCircle2, 
  Award,
  Youtube,
  Users,
  ChevronDown,
  ChevronUp,
  Maximize2,
  ZoomIn,
  Mail,
  FileText,
  X,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TrialLessonModal } from "./TrialLessonModal";

// SmartImage component for fallback handling
const SmartImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & { fallbackSrc?: string }> = ({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
          setHasError(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
};

interface GuaranteeItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
  expandable: boolean;
  expandedTitle?: string;
  details?: string[];
  hasImage?: boolean;
  imageSrc?: string;
  imageFallbackSrc?: string;
  imageCaption?: string;
}

export const QualityGuaranteeSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; fallbackUrl?: string; caption: string } | null>(null);

  const guarantees: GuaranteeItem[] = [
    {
      id: "excalidraw",
      icon: Monitor,
      title: "Interaktywna Tablica Excalidraw",
      badge: "Cyfrowe Płótno HD",
      description: "Zajęcia odbywają się na cyfrowej tablicy Excalidraw w czasie rzeczywistym. Rysujemy schematy, fizyczne układy i obliczenia ramię w ramię.",
      expandable: true,
      expandedTitle: "Rozwiązania w czasie rzeczywistym na Excalidraw",
      details: [
        "Wspólne rysowanie schematów obwodów elektrycznych, układów sił oraz wykresów w pełnej płynności.",
        "Uczeń widzi każdy ruch rysika i kursor w czasie rzeczywistym bez żadnego opóźnienia.",
        "Brak konieczności instalacji czegokolwiek – wystarczy jedno kliknięcie w przeglądarce.",
        "Możliwość pracy na gotowych rysunkach i wykresach z arkuszy maturalnych CKE i E8."
      ]
    },
    {
      id: "teams",
      icon: Video,
      title: "Microsoft Teams",
      badge: "Platforma Lekcyjna",
      description: "Niezawodne połączenie wideo HD oraz czysty dźwięk. Stałe miejsce spotkań i łatwy dostęp bez problemów technicznych.",
      expandable: true,
      expandedTitle: "Szczegóły organizacji spotkań na Microsoft Teams",
      details: [
        "Stały, indywidualny link do wirtualnej klasy na cały semestr – zero szukania nowych odnośników przed zajęciami.",
        "Bezpieczne połączenie w jakości HD, udostępnianie ekranu i wysoka jakość dźwięku.",
        "Możliwość uczestnictwa bezpośrednio w przeglądarce internetowej lub aplikacji na komputerze/tablecie.",
        "Wsparcie dla dodatkowych materiałów i czatu organizacyjnego w jednym miejscu."
      ]
    },
    {
      id: "notatki-pdf",
      icon: FileCheck,
      title: "Notatki PDF Po Każdej Lekcji",
      badge: "Automatyczny Mail z Notatkami",
      description: "Po ukończonej lekcji dostajesz kompletny zapis tablicy w formacie PDF prosto na e-mail. Nie musisz tracić czasu na przepisywanie.",
      expandable: true,
      hasImage: true,
      imageSrc: "/o-mnie/email-pdf-preview.jpg",
      imageFallbackSrc: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Wiadomość e-mail ze spakowanymi notatkami w PDF dostarczana automatycznie po lekcji",
      expandedTitle: "Jak wygląda podsumowanie lekcji w Twojej skrzynce mailowej?",
      details: [
        "W ciągu kilku minut po zakończeniu lekcji system wysyła e-mail z podsumowaniem tematu i załącznikiem PDF.",
        "Zapis zawiera wszystkie wzory, wykresy i rozwiązania krok po kroku w wysokiej rozdzielczości.",
        "Oszczędność czasu: Uczeń skupia się na rozumieniu fizyki i matematyki zamiast na pośpiesznym przepisywaniu z ekranu.",
        "Archiwum wiedzy: Wszystkie pliki PDF możesz zachować w folderze do szybkiej powtórki przed sprawdzianem i maturą."
      ]
    },
    {
      id: "konsultacje-planu",
      icon: Users,
      title: "Konsultacje Planu Nauki dla Rodziców",
      badge: "Wsparcie Rodziców",
      description: "Rodzice mogą skonsultować cel edukacyjny, bieżące postępy oraz indywidualną strategię nauki przed egzaminami.",
      expandable: true,
      expandedTitle: "Zakres konsultacji strategicznych dla Rodzica i Ucznia",
      details: [
        "Strukturalna analiza mocnych stron oraz obszarów wymagających nadrobienia zaległości.",
        "Planowanie harmonogramu pod kątem Egzaminu Ósmoklasisty, Matury Podstawowej lub Rozszerzonej.",
        "Regularne informacje zwrotne dotyczące zaangażowania i przyrostu punktów ze sprawdzianów.",
        "Możliwość umówienia krótkiej rozmowy organizacyjnej w dogodnym terminie."
      ]
    },
    {
      id: "asystent-ai",
      icon: Sparkles,
      title: "Dedykowany Asystent AI 24/7",
      badge: "Wsparcie AI",
      description: "Dostęp do inteligentnego asystenta na stronie, który pomaga przypomnieć wzory i naprowadza na rozwiązania zadań.",
      expandable: true,
      expandedTitle: "Całodobowa pomoc sztucznej inteligencji między lekcjami",
      details: [
        "Błyskawiczne odpowiedzi na pytania dotyczące wzorów z fizyki i matematyki o każdej porze dnia i nocy.",
        "Pomoc w nakierowaniu na właściwy tok myślenia w zadaniach domowych bez podawania gotowców.",
        "Integracja z podstawą programową i zakresem wymagań CKE."
      ]
    },
    {
      id: "transparentny-wybor",
      icon: Award,
      title: "Jasny Wybór Korepetytora",
      badge: "100% Przejrzystość",
      description: "Rezerwując zajęcia zawsze dokładnie wiesz, z kim będziesz uczyć się fizyki lub matematyki. Zero nieuzgodnionych zastępstw.",
      expandable: true,
      expandedTitle: "Gwarancja pełnej przejrzystości i zespołu wspierającego",
      details: [
        "Lekcje z Jonathanem: Wybierając zajęcia ze mną, masz 100% pewności, że spotkanie poprowadzę ja osobiście.",
        "Dedykowany Zespół: W przypadku braku wolnych terminów w moim grafiku, w systemie rezerwacji możesz wybrać sprawdzonego korepetytora z mojego zespołu.",
        "Pełna wiedza Klienta: Wybór prowadzącego zawsze zależy od Ciebie i jest widoczny od pierwszej chwili przy składaniu rezerwacji.",
        "Jednolity standard: Cały zespół pracuje na tym samym najwyższym standardzie tablicy Excalidraw oraz notatek PDF."
      ]
    }
  ];

  const toggleCard = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <section id="gwarancja-jakosci" className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Gwarancja Jakości & Technologia</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Nowoczesne metody i sprawdzone narzędzia nauki
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Łączymy indywidualne podejście z najlepszymi cyfrowymi narzędziami. Kliknij dowolny kafelek, aby poznać szczegóły.
          </p>
        </div>

        {/* Interactive Expandable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {guarantees.map((g) => {
            const Icon = g.icon;
            const isExpanded = expandedCardId === g.id;

            return (
              <motion.div
                key={g.id}
                layout
                transition={{ duration: 0.25 }}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isExpanded
                    ? "bg-white border-blue-400 shadow-xl ring-2 ring-blue-500/20"
                    : "bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md"
                }`}
                onClick={() => toggleCard(g.id)}
              >
                {/* Card Main Visible Section */}
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {g.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between gap-2">
                    <span>{g.title}</span>
                    <span className="text-blue-600 shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.description}</p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isExpanded ? "Zwiń szczegóły" : "Kliknij, aby rozwinąć"}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal">
                      {isExpanded ? "Szczegóły widoczne" : "Więcej informacji"}
                    </span>
                  </div>
                </div>

                {/* Animated Expandable Details Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-slate-900 text-white p-6 border-t border-slate-800 space-y-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{g.expandedTitle || "Szczegółowe informacje"}</span>
                      </div>

                      {/* Detail points */}
                      {g.details && (
                        <ul className="space-y-2 text-xs text-slate-300">
                          {g.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* SPECIAL FEATURE: Email PDF Preview Image (for Notatki PDF kafelek) */}
                      {g.hasImage && (
                        <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                              <Mail className="w-4 h-4 text-blue-400" />
                              <span>Podgląd wiadomości e-mail z notatkami PDF</span>
                            </span>
                            <span className="text-[10px] font-semibold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/80 flex items-center gap-1">
                              <ZoomIn className="w-3 h-3" />
                              <span>Powiększ</span>
                            </span>
                          </div>

                          {/* Email Screenshot Card Container */}
                          <div
                            onClick={() => setLightboxImage({
                              url: g.imageSrc || "",
                              fallbackUrl: g.imageFallbackSrc,
                              caption: g.imageCaption || "Podgląd maila z notatkami PDF"
                            })}
                            className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 group cursor-pointer hover:border-blue-500 transition-all shadow-lg"
                          >
                            {/* Realistic Mockup Email Overlay for Fallback */}
                            <div className="p-3 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 font-mono text-[10px] text-slate-400">Mail System • Notatki PDF po lekcji</span>
                              </div>
                              <span className="text-blue-400 font-bold flex items-center gap-1">
                                <FileText className="w-3.5 h-3.5" />
                                <span>Lekcja_Fizyka_Notatki.pdf</span>
                              </span>
                            </div>

                            {/* Image Preview */}
                            <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                              <SmartImage
                                src={g.imageSrc}
                                fallbackSrc={g.imageFallbackSrc}
                                alt={g.imageCaption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />

                              {/* Hover Zoom Overlay */}
                              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                                  <Maximize2 className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-bold">Kliknij, aby powiększyć maila</span>
                              </div>
                            </div>

                            <div className="p-2.5 bg-slate-900 text-center text-[11px] text-slate-400 italic">
                              {g.imageCaption}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer status line inside card */}
                <div className="p-4 bg-slate-100/60 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Gwarancja 100% jakości zajęć</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Banner at bottom */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Chcesz zobaczyć jak wyglądają moje lekcje?</h3>
            <p className="text-xs text-slate-300">
              Obejrzyj lekcję próbną nagraną na YouTube lub umów konsultację rodzica w systemie rezerwacji.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-blue-500 transition-colors shrink-0 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Youtube className="w-4 h-4 text-red-400" />
            <span>Obejrzyj Lekcję Próbną (YouTube)</span>
          </button>
        </div>

      </div>

      {/* Trial Lesson YouTube Modal */}
      <TrialLessonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* LIGHTBOX FOR EMAIL PREVIEW IMAGE ENLARGEMENT */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 sm:-right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Zamknij podgląd"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 max-h-[75vh]">
                <SmartImage
                  src={lightboxImage.url}
                  fallbackSrc={lightboxImage.fallbackUrl}
                  alt={lightboxImage.caption}
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 px-4 py-2 bg-slate-900/90 text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/10 text-center max-w-xl">
                {lightboxImage.caption}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

