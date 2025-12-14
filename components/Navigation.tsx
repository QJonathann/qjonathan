import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <div className="flex flex-col items-start">
              <span className="text-lg md:text-xl">Korepetycje Online</span>
              <span className="text-xs text-gray-600">Fizyka • Matematyka</span>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-600 transition-colors"
            >
              O mnie
            </button>
            <button 
              onClick={() => scrollToSection('guides')}
              className="hover:text-blue-600 transition-colors"
            >
              Poradniki
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-blue-600 transition-colors"
            >
              Cennik
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
              >
                O mnie
              </button>
              <button 
                onClick={() => scrollToSection('guides')}
                className="px-4 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
              >
                Poradniki
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cennik
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}