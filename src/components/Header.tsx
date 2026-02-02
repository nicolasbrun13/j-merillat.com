import { Logo } from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage?: 'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional' | 'private-sme';
  onNavigate?: (page: 'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional' | 'private-sme') => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavigate = (page: 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional' | 'private-sme') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setHoveredMenu(null);
      setMobileMenuOpen(false);
    }
  };

const handleSectionClick = (sectionId: string) => {
  const element = document.getElementById(sectionId);

  if (element) {
    // Si l'élément existe sur la page actuelle, scroll direct
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Si l'élément n'existe pas, navigue vers home puis scroll après le rendu
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300); // délai pour que le DOM de la home soit prêt
    }
  }

  setMobileMenuOpen(false);
};



  return (
    <>
<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 h-14 sm:h-auto">
<div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between">
<button 
  onClick={handleLogoClick} 
  className="cursor-pointer scale-75 sm:scale-100 origin-left -mt-1 sm:mt-0"
>
  <Logo variant="dark" />
</button>


            
            {/* Dropdowns centrés - Desktop uniquement */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
              {/* Corporate & Institutional Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('corporate')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button 
                  onClick={() => handleNavigate('corporate-institutional')}
                  className="flex items-center gap-2 text-[#12362a] hover:text-[#cbd8c3] transition-colors font-bold" 
                  style={{ fontSize: '0.9rem' }}
                >
                  <span>Corporate & Institutional</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${hoveredMenu === 'corporate' ? 'rotate-180' : ''}`} />
                </button>
                
                {hoveredMenu === 'corporate' && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white border-2 border-[#cbd8c3] rounded-lg shadow-xl">
                      <button
                        onClick={() => handleNavigate('public-institutions')}
                        className={`w-full text-left px-6 py-4 transition-all border-b border-[#cbd8c3] rounded-t-lg ${
                          currentPage === 'public-institutions' 
                            ? 'bg-[#f6efe2]' 
                            : 'hover:bg-[#faf7f0] hover:scale-[1.02]'
                        }`}
                      >
                        <div className={`text-[#12362a] ${
                          currentPage === 'public-institutions' ? 'font-bold' : 'font-medium'
                        }`}>Public Institutions</div>
                        <div className="text-sm text-[#12362a]/60 mt-1">Tenders & compliance</div>
                      </button>
                      
                      <button
                        onClick={() => handleNavigate('multinationals')}
                        className={`w-full text-left px-6 py-4 transition-all rounded-b-lg ${
                          currentPage === 'multinationals' 
                            ? 'bg-[#f6efe2]' 
                            : 'hover:bg-[#faf7f0] hover:scale-[1.02]'
                        }`}
                      >
                        <div className={`text-[#12362a] ${
                          currentPage === 'multinationals' ? 'font-bold' : 'font-medium'
                        }`}>Multinationals</div>
                        <div className="text-sm text-[#12362a]/60 mt-1">Global coverage solutions</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Private Clients & SMEs Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('private')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button 
                  onClick={() => handleNavigate('private-sme')}
                  className="flex items-center gap-2 text-[#12362a] hover:text-[#cbd8c3] transition-colors font-bold" 
                  style={{ fontSize: '0.9rem' }}
                >
                  <span>Private Clients & SMEs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${hoveredMenu === 'private' ? 'rotate-180' : ''}`} />
                </button>
                
                {hoveredMenu === 'private' && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white border-2 border-[#cbd8c3] rounded-lg shadow-xl">
                      <button
                        onClick={() => handleNavigate('private-clients')}
                        className={`w-full text-left px-6 py-4 transition-all border-b border-[#cbd8c3] rounded-t-lg ${
                          currentPage === 'private-clients' 
                            ? 'bg-[#f6efe2]' 
                            : 'hover:bg-[#faf7f0] hover:scale-[1.02]'
                        }`}
                      >
                        <div className={`text-[#12362a] ${
                          currentPage === 'private-clients' ? 'font-bold' : 'font-medium'
                        }`}>Private Clients</div>
                        <div className="text-sm text-[#12362a]/60 mt-1">Personal insurance advice</div>
                      </button>
                      
                      <button
                        onClick={() => handleNavigate('swiss-smes')}
                        className={`w-full text-left px-6 py-4 transition-all rounded-b-lg ${
                          currentPage === 'swiss-smes' 
                            ? 'bg-[#f6efe2]' 
                            : 'hover:bg-[#faf7f0] hover:scale-[1.02]'
                        }`}
                      >
                        <div className={`text-[#12362a] ${
                          currentPage === 'swiss-smes' ? 'font-bold' : 'font-medium'
                        }`}>Swiss SMEs</div>
                        <div className="text-sm text-[#12362a]/60 mt-1">Business insurance expertise</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Desktop à droite */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => handleSectionClick('services')} className="relative text-[#12362a] hover:text-[#cbd8c3] transition-colors group" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Services
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#cbd8c3] to-[#12362a] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
              <button onClick={() => handleSectionClick('expertise')} className="relative text-[#12362a] hover:text-[#cbd8c3] transition-colors group" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Expertise
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#cbd8c3] to-[#12362a] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
              <button onClick={() => handleSectionClick('about')} className="relative text-[#12362a] hover:text-[#cbd8c3] transition-colors group" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#cbd8c3] to-[#12362a] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
              <button onClick={() => handleSectionClick('contact')} className="relative text-[#12362a] hover:text-[#cbd8c3] transition-colors group" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#cbd8c3] to-[#12362a] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
            </nav>

            {/* Bouton Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#12362a] p-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Full Screen */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#12362a]/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6">
            {/* Services de navigation */}
            <button
              onClick={() => handleNavigate('public-institutions')}
              className="text-white hover:text-[#cbd8c3] transition-colors text-center"
            >
              <div className="font-bold text-xl">Public Institutions</div>
              <div className="text-sm text-white/70 mt-1">Tenders & compliance</div>
            </button>

            <button
              onClick={() => handleNavigate('multinationals')}
              className="text-white hover:text-[#cbd8c3] transition-colors text-center"
            >
              <div className="font-bold text-xl">Multinationals</div>
              <div className="text-sm text-white/70 mt-1">Global coverage solutions</div>
            </button>

            <button
              onClick={() => handleNavigate('private-clients')}
              className="text-white hover:text-[#cbd8c3] transition-colors text-center"
            >
              <div className="font-bold text-xl">Private Clients</div>
              <div className="text-sm text-white/70 mt-1">Personal insurance advice</div>
            </button>

            <button
              onClick={() => handleNavigate('swiss-smes')}
              className="text-white hover:text-[#cbd8c3] transition-colors text-center"
            >
              <div className="font-bold text-xl">Swiss SMEs</div>
              <div className="text-sm text-white/70 mt-1">Business insurance expertise</div>
            </button>

            {/* Navigation conditionnelle */}
            <div className="border-t border-white/20 w-24 my-4"></div>
            <button 
              onClick={(e) => { e.preventDefault(); handleSectionClick('services'); }}
              className="text-white hover:text-[#cbd8c3] transition-colors text-xl"
            >
              Services
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); handleSectionClick('expertise'); }}
              className="text-white hover:text-[#cbd8c3] transition-colors text-xl"
            >
              Expertise
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); handleSectionClick('about'); }}
              className="text-white hover:text-[#cbd8c3] transition-colors text-xl"
            >
              About
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); handleSectionClick('contact'); }}
              className="text-white hover:text-[#cbd8c3] transition-colors text-xl"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}