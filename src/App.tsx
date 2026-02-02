import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { Expertise } from "./components/Expertise";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivateClients } from "./components/PrivateClients";
import { Multinationals } from "./components/Multinationals";
import { SwissSMEs } from "./components/SwissSMEs";
import { PublicInstitutions } from "./components/PublicInstitutions";
import { CaseStudyPremiumNegotiation } from "./components/CaseStudyPremiumNegotiation";
import { CaseStudySuvaClassification } from "./components/CaseStudySuvaClassification";
import { CaseStudyMobilityOnboarding } from "./components/CaseStudyMobilityOnboarding";
import { CaseStudyLifeInsuranceTrap } from "./components/CaseStudyLifeInsuranceTrap";
import { CaseStudyLongTermPlanning } from "./components/CaseStudyLongTermPlanning";
import { CaseStudyPreExistingCondition } from "./components/CaseStudyPreExistingCondition";
import { CorporateInstitutional } from "./components/CorporateInstitutional";
import { PrivateSME } from "./components/PrivateSME";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'case-study-premium' | 'case-study-suva' | 'case-study-mobility' | 'case-study-life-insurance' | 'case-study-long-term' | 'case-study-pre-existing' | 'corporate-institutional' | 'private-sme'>('home');

  // === C'EST ICI QUE LA MAGIE OPÈRE ===
  useEffect(() => {
    // Si l'adresse contient un # (exemple: /#contact)
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // on récupère le mot après le #
      
      // On attend un tout petit peu (100ms) que la page s'affiche
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []); // Ce code s'exécute une seule fois au chargement
  // ====================================

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ServicesShowcase onNavigate={setCurrentPage} />
            <Expertise />
            <About />
            <Contact />
          </>
        ) : currentPage === 'private-clients' ? (
          <PrivateClients onNavigate={setCurrentPage} />
        ) : currentPage === 'multinationals' ? (
          <Multinationals onNavigate={setCurrentPage} />
        ) : currentPage === 'swiss-smes' ? (
          <SwissSMEs onNavigate={setCurrentPage} />
        ) : currentPage === 'public-institutions' ? (
          <PublicInstitutions onNavigate={setCurrentPage} />
        ) : currentPage === 'case-study-premium' ? (
          <CaseStudyPremiumNegotiation onNavigate={() => setCurrentPage('public-institutions')} />
        ) : currentPage === 'case-study-suva' ? (
          <CaseStudySuvaClassification onNavigate={() => setCurrentPage('public-institutions')} />
        ) : currentPage === 'case-study-mobility' ? (
          <CaseStudyMobilityOnboarding onNavigate={() => setCurrentPage('public-institutions')} />
        ) : currentPage === 'case-study-life-insurance' ? (
          <CaseStudyLifeInsuranceTrap onNavigate={() => setCurrentPage('public-institutions')} />
        ) : currentPage === 'case-study-long-term' ? (
          <CaseStudyLongTermPlanning onNavigate={() => setCurrentPage('public-institutions')} />
        ) : currentPage === 'case-study-pre-existing' ? (
          <CaseStudyPreExistingCondition onNavigate={() => setCurrentPage('public-institutions')} />
        ) : currentPage === 'corporate-institutional' ? (
          <CorporateInstitutional onNavigate={setCurrentPage} />
        ) : currentPage === 'private-sme' ? (
          <PrivateSME onNavigate={setCurrentPage} />
        ) : null}
      </main>
{/* C'est ICI qu'on change : on ajoute onNavigate={setCurrentPage} */}
      <Footer onNavigate={setCurrentPage} />    </div>
  );
}