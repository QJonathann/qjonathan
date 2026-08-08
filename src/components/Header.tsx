import React, { useState } from "react";
import { GraduationCap, Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "o-mnie", label: "O mnie" },
    { id: "gwarancja-jakosci", label: "Gwarancja jakości" },
    { id: "materialy", label: "Materiały", href: "https://materialy.qjonathan.pl/", isExternal: true },
    { id: "oferta", label: "Oferta" },
    { id: "asystent-ai", label: "Asystent AI", href: "https://ai.qjonathan.pl/", isExternal: true, isNew: true },
    { id: "rezerwacje", label: "Rezerwacje", href: "https://rezerwacje.qjonathan.pl", isExternal: true },
  ];

  const handleNavClick = (target: string | { id: string; href?: string; isExternal?: boolean }) => {
    const item = typeof target === "string" ? { id: target } : target;
    if (item.isExternal && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      setMobileMenuOpen(false);
      return;
    }
    onNavigate(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Branding */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
            <GraduationCap className="w-6.5 h-6.5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              Nauka 2.0
            </span>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Fizyka • Matematyka • Edukacja cyfrowa
            </span>
          </div>
        </div>

        {/* Center/Right Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <React.Fragment key={item.id}>
                {index > 0 && <span className="text-slate-300 font-light select-none px-0.5">|</span>}
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1.5 select-none focus:outline-none"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 select-none focus:outline-none cursor-pointer ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" /> AI
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300" />
                    )}
                  </button>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right Action Button (Kontakt) */}
        <div className="hidden md:flex items-center pl-4 border-l border-slate-100">
          <button
            onClick={() => handleNavClick("kontakt")}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Kontakt</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
              </a>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                {item.isNew && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                    Nowość
                  </span>
                )}
              </button>
            )
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick("kontakt")}
              className="w-full py-3 bg-blue-600 text-white font-semibold text-center rounded-xl shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Kontakt</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
