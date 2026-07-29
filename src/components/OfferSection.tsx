import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Clock, ShieldCheck, GraduationCap, BookOpen, Users, Youtube } from "lucide-react";
import { TrialLessonModal } from "./TrialLessonModal";

interface OfferSectionProps {
  onNavigate: (sectionId: string) => void;
}

interface OfferPlan {
  id: string;
  title: string;
  levelBadge: string;
  price: string;
  duration: string;
  targetAudience: string;
  popular?: boolean;
  features: string[];
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onNavigate }) => {
  const [selectedSubject, setSelectedSubject] = useState<"matematyka" | "fizyka">("matematyka");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mathPlans: OfferPlan[] = [
    {
      id: "math-sp-zwykla",
      title: "Szkoła Podstawowa – Zwykła",
      levelBadge: "Klasy 4–8 • Podstawowa",
      price: "40 zł",
      duration: "45 minut",
      targetAudience: "Szybkie omówienie materiału szkolnego i bieżąca pomoc przy zadaniach domowych.",
      features: [
        "Ćwiczenie bieżącego materiału z lekcji",
        "Pomoc w przygotowaniu do kartkówek",
        "Nadrabianie podstawowych zaległości",
        "Przyjazna i bezstresowa atmosfera",
      ],
    },
    {
      id: "math-sp-plus",
      title: "Szkoła Podstawowa – Plus",
      levelBadge: "Klasy 7–8 • Egzamin CKE",
      price: "50 zł",
      duration: "60 minut (1 godz.)",
      popular: true,
      targetAudience: "Wydłużona lekcja z pełną notatką graficzną PDF i dodatkowymi powtórkami do egzaminu.",
      features: [
        "Pełne 60 minut intensywnej pracy",
        "Kompletne notatki z lekcji w formacie PDF",
        "Autorskie zestawy zadań utrwalających",
        "Wsparcie przy trudniejszych zagadnieniach",
      ],
    },
    {
      id: "math-liceum-zwykla",
      title: "Liceum – Lekcja Zwykła",
      levelBadge: "Liceum / Technikum • Podstawa",
      price: "60 zł",
      duration: "45 minut",
      targetAudience: "Systematyczne nadrabianie zaległości ze szkoły średniej oraz praca na lekcjach.",
      features: [
        "Analiza definicji i wzorów licealnych",
        "Praca na zadaniach z klasówek i sprawdzianów",
        "Nauka sprawnego korzystania z Kart Wzorów",
        "Rozwiązywanie arkuszy matury podstawowej",
      ],
    },
    {
      id: "math-liceum-plus",
      title: "Liceum – Lekcja Plus (Rozszerzenie)",
      levelBadge: "Matura Rozszerzona • CKE",
      price: "70 zł",
      duration: "60 minut (1 godz.)",
      popular: true,
      targetAudience: "Kompleksowe przygotowanie do matury rozszerzonej z matematyki z pakietem notatek.",
      features: [
        "Dowody matematyczne i zadania z parametrem",
        "Notatki z tablicy w formacie PDF po zajęciach",
        "Dostęp do dedykowanego Asystenta AI 24/7",
        "Indywidualne wsparcie WhatsApp przed maturą",
      ],
    },
  ];

  const physicsPlans: OfferPlan[] = [
    {
      id: "phys-sp-zwykla",
      title: "Szkoła Podstawowa – Zwykła",
      levelBadge: "Klasy 7–8 • Podstawowa",
      price: "40 zł",
      duration: "45 minut",
      targetAudience: "Zrozumienie podstawowych praw fizyki, przeliczania jednostek oraz prostej kinematyki.",
      features: [
        "Wyjaśnianie pojęć fizycznych bez trudnego języka",
        "Przeliczanie jednostek i wzorów fizycznych",
        "Pomoc przy zadaniach domowych ze szkoły",
        "Budowanie pewności siebie na lekcjach",
      ],
    },
    {
      id: "phys-sp-plus",
      title: "Szkoła Podstawowa – Plus",
      levelBadge: "Klasy 7–8 • Z Notatkami",
      price: "50 zł",
      duration: "60 minut (1 godz.)",
      popular: true,
      targetAudience: "Godzina lekcyjna wzbogacona o przejrzystą notatkę z rysunkami i schematami w PDF.",
      features: [
        "60 minut zajęć z omówieniem ćwiczeń",
        "Ilustrowane notatki z fizyki w PDF",
        "Przykłady z życia codziennego i eksperymenty",
        "Sprawdzanie i korekta zadań własnych",
      ],
    },
    {
      id: "phys-liceum-zwykla",
      title: "Liceum – Lekcja Zwykła",
      levelBadge: "Liceum / Technikum • Podstawa",
      price: "60 zł",
      duration: "45 minut",
      targetAudience: "Nadrabianie zaległości z fizyki klasycznej: dynamika, prąd elektryczny, optyka i termodynamika.",
      features: [
        "Rozwiązywanie zadań obrachunkowych i teoretycznych",
        "Przygotowanie do sprawdzianów i poprawek",
        "Krok po kroku przeliczanie układów SI",
        "Praca na oficjalnych pytaniach maturalnych",
      ],
    },
    {
      id: "phys-liceum-plus",
      title: "Liceum – Lekcja Plus (Rozszerzenie)",
      levelBadge: "Matura Rozszerzona • Fizyka CKE",
      price: "70 zł",
      duration: "60 minut (1 godz.)",
      popular: true,
      targetAudience: "Dla kandydatów na politechniki i kierunki ścisłe – pełne przygotowanie rozszerzone z notatkami.",
      features: [
        "Fizyka nowożytna, wektory i ruch po okręgu",
        "Cyfrowy skrypt PDF ze wszystkimi schematami z lekcji",
        "Analiza problematycznych zadań doświadczalnych",
        "Dostęp do Asystenta AI z zapytaniami z fizyki",
      ],
    },
  ];

  const currentPlans = selectedSubject === "matematyka" ? mathPlans : physicsPlans;

  const handleBookingRedirect = () => {
    window.open("https://rezerwacje.qjonathan.pl", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="oferta" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-block mb-3">
            Przejrzysty Cennik & Pakiety
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Oferta Korepetycji Online
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Jasne zasady rozliczeń. Wybierz przedmiot i wariant lekcji dopasowany do Twoich potrzeb.
          </p>
        </div>

        {/* YouTube Trial Lesson Banner */}
        <div className="mb-10 max-w-4xl mx-auto bg-gradient-to-r from-red-500/5 via-slate-50 to-blue-500/5 p-5 sm:p-6 rounded-3xl border border-red-200/70 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-1">
                Darmowy Wgląd • YouTube
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Zobacz jak przebiegają zajęcia w praktyce
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Obejrzyj lekcję próbną nagraną na YouTube – bezpłatny podgląd pracy na cyfrowej tablicy Miro i z fizyką CKE.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Youtube className="w-4.5 h-4.5 text-white" />
            <span>Obejrzyj Lekcję Próbną</span>
          </button>
        </div>

        {/* Subject Toggle Buttons (Matematyka / Fizyka) */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex items-center gap-1.5 shadow-inner">
            <button
              onClick={() => setSelectedSubject("matematyka")}
              className={`px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                selectedSubject === "matematyka"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Matematyka</span>
            </button>
            <button
              onClick={() => setSelectedSubject("fizyka")}
              className={`px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                selectedSubject === "fizyka"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Fizyka</span>
            </button>
          </div>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                plan.popular
                  ? "border-blue-600 shadow-xl shadow-blue-500/10 ring-2 ring-blue-600/20"
                  : "border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  <span>Polecany Wariant</span>
                </div>
              )}

              <div>
                {/* Level Badge */}
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block mb-3">
                  {plan.levelBadge}
                </span>

                <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 leading-snug">
                  {plan.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[36px]">
                  {plan.targetAudience}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-5 pb-4 border-b border-slate-100">
                  <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" /> / {plan.duration}
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBookingRedirect}
                className={`w-full py-3 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  plan.popular
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <span>Rezerwuj Lekcję</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Transparent Tutor Selection & Team Availability Banner */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-400/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>100% Przejrzystość Rezerwacji</span>
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-400/30 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dedykowany Zespół Wspierający</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Gwarancja Wyboru Korepetytora i Jasnych Zasad
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                <p>
                  <strong className="text-white">Jasny wybór przed rezerwacją:</strong> Osoba zamawiająca lekcję zawsze dokładnie wie, z kim będzie miała zajęcia. Jeżeli rezerwujesz lekcję u mnie (Jonathana), masz pełną pewność, że to ja osobiście ją poprowadzę.
                </p>
                <p>
                  <strong className="text-white">Gdy brakuje wolnych terminów:</strong> Jeśli mój grafik w danym tygodniu jest w pełni zajęty, w systemie rezerwacji możesz świadomie wybrać terminy u sprawdzonych i zweryfikowanych przeze mnie korepetytorów z mojego kameralnego zespołu. Decyzja zawsze należy w 100% do Ciebie i jest od początku wyraźnie zaznaczona.
                </p>
              </div>
            </div>

            <button
              onClick={handleBookingRedirect}
              className="w-full md:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm rounded-2xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Sprawdź Terminy & Rezerwuj</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-6 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-600 shrink-0" />
            <p className="text-xs text-slate-600 font-medium">
              Konsultacja dla rodziców w sprawie planu nauki dziecka dostępna bezpłatnie w systemie rezerwacji online.
            </p>
          </div>
          <button
            onClick={handleBookingRedirect}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 underline shrink-0 cursor-pointer"
          >
            Umów konsultację lub lekcję &rarr;
          </button>
        </div>

      </div>

      {/* Trial Lesson YouTube Modal */}
      <TrialLessonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
