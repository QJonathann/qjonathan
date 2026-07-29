import React, { useState } from "react";
import { 
  GraduationCap, 
  Award, 
  CheckCircle, 
  UserCheck,
  BookOpen,
  Sparkles,
  X,
  ArrowRight,
  Stethoscope,
  FlaskConical,
  Presentation,
  Camera,
  Globe,
  Users,
  Clock,
  Check,
  ZoomIn,
  Maximize2,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ShowcaseItem {
  id: "pokazy" | "konferencje" | "vilniustech";
  title: string;
  badge: string;
  icon: React.ElementType;
  badgeColor: string;
  shortDesc: string;
  mainImage: string;
  galleryImages: { url: string; caption: string; fallbackUrl?: string }[];
  fullDesc: string[];
  tags: string[];
  articleUrl?: string;
}

// Helper component that tries loading a local image first, falling back to a placeholder if missing
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

export const AboutSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<ShowcaseItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption: string; fallbackUrl?: string } | null>(null);

  const showcases: ShowcaseItem[] = [
    {
      id: "pokazy",
      title: "Pokazy Fizyczne i Doświadczenia Naukowe",
      badge: "Pokazy & Eksperymenty",
      icon: FlaskConical,
      badgeColor: "bg-blue-600 text-white",
      shortDesc: "Prezentacje widowiskowych doświadczeń z dynamiki, elektrostatyki i optyki. Pokazuję młodzieży, że fizyka to fascynujące zjawiska na wyciągnięcie ręki.",
      mainImage: "/o-mnie/pokazy-1.jpg",
      galleryImages: [
        {
          url: "/o-mnie/pokazy-1.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
          caption: "Eksperymenty na żywo z fizyki – Główne zdjęcie",
        },
        {
          url: "/o-mnie/pokazy-2.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
          caption: "Pokazy elektrostatyki i dynamiki w laboratoriach",
        },
        {
          url: "/o-mnie/pokazy-3.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
          caption: "Warsztaty fizyki dla młodzieży i uczestników",
        },
      ],
      fullDesc: [
        "Organizuję i prowadzę pokazy widowiskowych eksperymentów fizycznych dedykowane uczniom szkół podstawowych i średnich.",
        "Program pokazów obejmuje m.in. zjawiska indukcji elektromagnetycznej, optykę laserową, stany skupienia oraz prawa dynamiki zaprezentowane w przyjazny, porywający sposób.",
        "Uczestnicy mają okazję samodzielnie przeprowadzać proste doświadczenia i zadawać pytania, co budzi autentyczną pasję do przedmiotów ścisłych."
      ],
      tags: ["Eksperymenty na żywo", "Interaktywna fizyka", "Warsztaty dla szkół"],
    },
    {
      id: "konferencje",
      title: "Konferencje i Wystąpienia Naukowe",
      badge: "Konferencje & Referaty",
      icon: Presentation,
      badgeColor: "bg-indigo-600 text-white",
      shortDesc: "Wystąpienia naukowe oraz sympozje inżynierii medycznej. Dzielę się pasją do nowoczesnych technologii biomedycznych oraz innowacji.",
      mainImage: "/o-mnie/konferencje-1.jpg",
      galleryImages: [
        {
          url: "/o-mnie/konferencje-1.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
          caption: "Wystąpienie prelegenta na konferencji naukowej",
        },
        {
          url: "/o-mnie/konferencje-2.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
          caption: "Prezentacja wyników badań z inżynierii medycznej",
        },
        {
          url: "/o-mnie/konferencje-3.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
          caption: "Dyskusje panelowe z ekspertami i profesorami",
        },
      ],
      fullDesc: [
        "Aktywnie uczestniczę w konferencjach naukowo-technicznych poświęconych inżynierii medycznej oraz zastosowaniu biofizyki w medycynie.",
        "Prezentuję referaty naukowe dotyczące nowatorskich metod pomiarowych, przetwarzania sygnałów medycznych oraz analizy numerycznej.",
        "Wymiana doświadczeń w środowisku akademickim pozwala mi wnosić najnowszą wiedzę i wysokie standardy merytoryczne do codziennej pracy z uczniami."
      ],
      tags: ["Prezentacje i referaty", "Inżynieria Medyczna", "Sympozja Naukowe"],
    },
    {
      id: "vilniustech",
      title: "Wyjazd BIP VilniusTech 2025",
      badge: "VilniusTech 2025 • Litwa",
      icon: Globe,
      badgeColor: "bg-emerald-600 text-white",
      shortDesc: "Międzynarodowy program Blended Intensive Programme na Vilnius Gediminas Technical University (VilniusTech).",
      mainImage: "/o-mnie/vilniustech-1.jpg",
      galleryImages: [
        {
          url: "/o-mnie/vilniustech-1.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
          caption: "Udział w projekcie międzynarodowym VilniusTech 2025 – Wilno",
        },
      ],
      articleUrl: "https://wmifs.prz.edu.pl/aktualnosci/wyjazd-studentow-inzynierii-w-medycynie-na-bip-sensor-driven-modelling-for-healthy-living-w-wilnie-481.html",
      fullDesc: [
        "W dniach 19–23 maja 2025 r. dwaj studenci II roku kierunku Inżynieria w Medycynie z WMiFS Politechniki Rzeszowskiej – Kacper Gołębiowski oraz Jonathan Ciupera Ferro – wraz z dr inż. Wiktorią Wojnarowską uczestniczyli w międzynarodowym programie Blended Intensive Program (BIP) pod hasłem „Sensor Driven Modelling for Healthy Living”.",
        "Organizatorem programu była Katedra Inżynierii Biomechanicznej Wileńskiego Uniwersytetu Technicznego im. Giedymina (Vilnius Tech), we współpracy z Laboratorium Biomechaniki na OTH Regensburg (Niemcy) oraz Instytutem Inżynierii Biomedycznej Politechniki Białostockiej.",
        "Wizyta studyjna oraz warsztaty technologiczne stanowią doskonałe potwierdzenie wyższych kompetencji inżynierskich i komunikacyjnych."
      ],
      tags: ["Międzynarodowy projekt", "VilniusTech 2025", "BIP Program", "Artykuł PRz"],
    },
  ];

  return (
    <section id="o-mnie" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-block mb-3">
            O mnie & Wykształcenie Akademickie
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kim jestem i jak pracuję?
          </h2>
        </div>

        {/* PROFILE MAIN BLOCK - Matching User Provided Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Avatar & Stats Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-blue-50/90 to-blue-100/40 p-6 sm:p-8 rounded-3xl border border-blue-100 shadow-md text-center flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center">
              {/* Profile Image Circle (Click to Zoom) */}
              <div
                onClick={() => setLightboxImage({
                  url: "/o-mnie/profil.jpg",
                  fallbackUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
                  caption: "Jonathan Ciupera Ferro – Zdjęcie Profilowe"
                })}
                className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5 cursor-pointer group hover:border-blue-300 transition-all"
                title="Kliknij, aby powiększyć zdjęcie profilowe"
              >
                <SmartImage
                  src="/o-mnie/profil.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  alt="Jonathan Ciupera Ferro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Jonathan Ciupera Ferro
              </h3>
              <p className="text-sm font-bold text-blue-600 mt-1">
                Korepetytor Fizyki i Matematyki
              </p>
            </div>

            {/* Quick Stats list directly matching screenshot */}
            <div className="w-full mt-6 pt-6 border-t border-blue-200/60 space-y-3 text-left">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Award className="w-5 h-5 text-blue-600 shrink-0" />
                <span>3 lata doświadczenia</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Users className="w-5 h-5 text-blue-600 shrink-0" />
                <span>70+ zadowolonych uczniów</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span>500+ przeprowadzonych zajęć</span>
              </div>
            </div>
          </div>

          {/* Right Text & Curriculum Matrix Block */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Kim jestem?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Jestem studentem IV roku <strong>Inżynierii w Medycynie</strong> na Wydziale Matematyki i Fizyki Stosowanej Politechniki Rzeszowskiej im. Ignacego Łukasiewicza. Posiadam trzyletnie doświadczenie w prowadzeniu korepetycji, zarówno w formie online, jak i stacjonarnej.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Specjalizuję się w pracy z uczniami szkół podstawowych oraz średnich, skutecznie przygotowując ich do egzaminów ósmoklasisty oraz matury.
              </p>
            </div>

            {/* Curriculum Subjects Program Matrix */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mb-4">
                Zrealizowane programy (przedmioty) podczas studiów:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Math Subjects Block */}
                <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100/80 space-y-2.5">
                  <h5 className="text-sm font-extrabold text-blue-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Zajęcia związane z matematyką</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Metody numeryczne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Narzędzia wspomagania obliczeń inżynierskich</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Metody opracowania danych pomiarowych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Matematyka</span>
                    </li>
                  </ul>
                </div>

                {/* Physics Subjects Block */}
                <div className="bg-indigo-50/60 p-5 rounded-2xl border border-indigo-100/80 space-y-2.5">
                  <h5 className="text-sm font-extrabold text-indigo-900 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-indigo-600" />
                    <span>Zajęcia związane z fizyką</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Fizyka ośrodków ciągłych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Podstawy konstrukcji maszyn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Mechanika, Wytrzymałość materiałowa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>Drgania układów mechanicznych</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 3 CLICKABLE SHOWCASE CARDS: Pokazy Fizyczne, Konferencje, VilniusTech 2025 */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100 inline-block mb-2">
              Działalność & Wyjazdy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Doświadczenie w praktyce i wyjazdy naukowe
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Kliknij w dowolny kafelek, aby otworzyć pełną galerię zdjęć i opis szczegółowy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveModalItem(item)}
                  className="bg-white rounded-3xl p-5 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Badge */}
                    <div className="relative h-52 rounded-2xl overflow-hidden mb-4 bg-slate-900">
                      <SmartImage
                        src={item.mainImage}
                        fallbackSrc={item.galleryImages[0]?.fallbackUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs ${item.badgeColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-blue-400" />
                        <span>{item.galleryImages.length === 1 ? "1 Zdjęcie" : `${item.galleryImages.length} Zdjęcia`}</span>
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Click Button CTA inside card */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Zobacz więcej i galerię</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MODAL DIALOG WHEN CLICKING ANY SHOWCASE CARD */}
        <AnimatePresence>
          {activeModalItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative border border-slate-100"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-6">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1.5 ${activeModalItem.badgeColor}`}>
                      {activeModalItem.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                      {activeModalItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Gallery Section */}
                <div className="mb-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Camera className="w-4 h-4 text-blue-600" />
                      <span>{activeModalItem.galleryImages.length === 1 ? "Zdjęcie Dokumentujące" : `Galeria Zdjęć (${activeModalItem.galleryImages.length} Zdjęcia)`}</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" />
                      <span>Kliknij zdjęcie, aby powiększyć</span>
                    </span>
                  </div>

                  <div className={`grid gap-3 ${activeModalItem.galleryImages.length === 1 ? "grid-cols-1 max-w-xl mx-auto" : "grid-cols-1 sm:grid-cols-3"}`}>
                    {activeModalItem.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setLightboxImage(img)}
                        className={`relative ${activeModalItem.galleryImages.length === 1 ? "h-64 sm:h-72" : "h-44"} rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-xs cursor-pointer hover:border-blue-400 transition-all`}
                      >
                        <SmartImage
                          src={img.url}
                          fallbackSrc={img.fallbackUrl}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Hover Overlay Zoom Icon */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform">
                            <Maximize2 className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex flex-col justify-end pointer-events-none">
                          <span className="text-[11px] font-bold text-white leading-snug">
                            {img.caption}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Article Link Callout if available */}
                {activeModalItem.articleUrl && (
                  <div className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 rounded-2xl border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                    <div className="space-y-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                        <span>Oficjalny Artykuł Politechniki Rzeszowskiej</span>
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-bold">
                        Wyjazd studentów Inżynierii w Medycynie na BIP w Wilnie
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Wydział Matematyki i Fizyki Stosowanej PRz
                      </p>
                    </div>
                    <a
                      href={activeModalItem.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <span>Otwórz oficjalny artykuł PRz</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Detailed Narrative */}
                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
                  <h4 className="text-sm font-extrabold text-slate-900">
                    Szczegółowy opis przedsięwzięcia:
                  </h4>
                  {activeModalItem.fullDesc.map((p, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeModalItem.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-xl border border-blue-100">
                      ✓ {tag}
                    </span>
                  ))}
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Jonathan Ciupera Ferro • Inżynieria w Medycynie
                  </span>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                  >
                    Zamknij galerię
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* LIGHTBOX FULLSCREEN IMAGE ENLARGEMENT */}
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

      </div>
    </section>
  );
};
