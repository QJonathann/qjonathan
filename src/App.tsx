/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeatureGrid } from "./components/FeatureGrid";
import { AiAssistantSection } from "./components/AiAssistantSection";
import { AboutSection } from "./components/AboutSection";
import { QualityGuaranteeSection } from "./components/QualityGuaranteeSection";
import { OfferSection } from "./components/OfferSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { TermsModal } from "./components/TermsModal";
import { PrivacyModal } from "./components/PrivacyModal";
import { CookieBanner } from "./components/CookieBanner";
import { TrialLessonModal } from "./components/TrialLessonModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  // Helper to push or replace URL path smoothly
  const updateUrlPath = (path: string, replace = false) => {
    if (window.location.pathname !== path) {
      if (replace) {
        window.history.replaceState(null, "", path);
      } else {
        window.history.pushState(null, "", path);
      }
    }
  };

  // Handle initial URL load & browser back/forward buttons (popstate)
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.replace(/\/$/, "") || "/";

      if (path === "/warunki-swiadczenia-uslug") {
        setIsTermsOpen(true);
        setIsPrivacyOpen(false);
      } else if (path === "/polityka-prywatnosci") {
        setIsPrivacyOpen(true);
        setIsTermsOpen(false);
      } else {
        setIsTermsOpen(false);
        setIsPrivacyOpen(false);

        const cleanSectionId = path.replace("/", "");
        const validSections = ["o-mnie", "asystent-ai", "gwarancja-jakosci", "oferta", "kontakt"];

        if (cleanSectionId === "" || cleanSectionId === "hero") {
          setActiveSection("hero");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (validSections.includes(cleanSectionId)) {
          setActiveSection(cleanSectionId);
          setTimeout(() => {
            const el = document.getElementById(cleanSectionId);
            if (el) {
              const offset = 80;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = el.getBoundingClientRect().top;
              const offsetPosition = elementRect - bodyRect - offset;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
          }, 100);
        }
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Update active section and URL path on scroll
  useEffect(() => {
    const sectionIds = [
      "o-mnie",
      "asystent-ai",
      "gwarancja-jakosci",
      "oferta",
      "kontakt",
    ];

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;

        // Don't overwrite URL if modal is currently open
        const currentPath = window.location.pathname;
        if (currentPath === "/warunki-swiadczenia-uslug" || currentPath === "/polityka-prywatnosci") {
          return;
        }

        const scrollPosition = window.scrollY + 120;

        if (window.scrollY < 200) {
          if (activeSection !== "hero") {
            setActiveSection("hero");
            updateUrlPath("/", true);
          }
          return;
        }

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              if (activeSection !== id) {
                setActiveSection(id);
                updateUrlPath("/" + id, true);
              }
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isTermsOpen) setIsTermsOpen(false);
    if (isPrivacyOpen) setIsPrivacyOpen(false);

    const newPath = sectionId === "hero" ? "/" : "/" + sectionId;
    updateUrlPath(newPath);

    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenTerms = () => {
    setIsTermsOpen(true);
    setIsPrivacyOpen(false);
    updateUrlPath("/warunki-swiadczenia-uslug");
  };

  const handleCloseTerms = () => {
    setIsTermsOpen(false);
    const fallbackPath = activeSection === "hero" ? "/" : "/" + activeSection;
    updateUrlPath(fallbackPath);
  };

  const handleOpenPrivacy = () => {
    setIsPrivacyOpen(true);
    setIsTermsOpen(false);
    updateUrlPath("/polityka-prywatnosci");
  };

  const handleClosePrivacy = () => {
    setIsPrivacyOpen(false);
    const fallbackPath = activeSection === "hero" ? "/" : "/" + activeSection;
    updateUrlPath(fallbackPath);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Header */}
      <Header onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onNavigate={scrollToSection} />
        <FeatureGrid 
          onNavigate={scrollToSection} 
          onOpenTrialLesson={() => setIsTrialModalOpen(true)}
        />
        <AboutSection />
        <AiAssistantSection />
        <QualityGuaranteeSection />
        <OfferSection onNavigate={scrollToSection} />
        <ContactSection />
      </main>

      {/* Deep Blue Footer */}
      <Footer 
        onNavigate={scrollToSection} 
        onOpenTerms={handleOpenTerms}
        onOpenPrivacy={handleOpenPrivacy} 
      />

      {/* Trial Lesson Modal */}
      <TrialLessonModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />

      {/* Terms of Service Subpage Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={handleCloseTerms} />

      {/* Privacy Policy Subpage Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={handleClosePrivacy} />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenPrivacy={handleOpenPrivacy} />
    </div>
  );
}
