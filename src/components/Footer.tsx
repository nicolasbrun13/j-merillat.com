import { Logo } from "./Logo";

// On définit ce que le Footer a le droit de recevoir comme commandes
interface FooterProps {
  onNavigate: (page: any) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  
  // Cette fonction gère le clic : d'abord on change de page, puis on scrolle
  const handleNav = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault(); // Empêche le comportement par défaut
    
    // 1. On force l'affichage de la page d'accueil
    onNavigate('home');

    // 2. On attend 100ms que la page d'accueil s'affiche, puis on scrolle
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#12362a] text-white pt-5 pb-12 sm:pb-16" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2 mb-8 md:mb-0 text-center md:text-left">
            <div className="mb-6 mx-auto md:mx-0" style={{ maxWidth: '150px' }}>
              <Logo variant="light" className="w-full h-auto" />
            </div>
            <p className="text-white/60 max-w-sm mx-auto md:mx-0" style={{ fontSize: '0.95rem', fontWeight: '300', lineHeight: '1.6' }}>
              Independent insurance consulting rooted in Swiss values of integrity, 
              precision, and excellence.
            </p>
          </div>

          {/* Quick Links & Legal */}
          <div className="md:col-span-2">
            
            {/* VERSION MOBILE */}
            <div className="grid grid-cols-2 gap-6 md:hidden">
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>Quick Links</h4>
                <ul className="space-y-2">
                  {/* On utilise onClick={handleNav} partout ici */}
                  <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Services</a></li>
                  <li><a href="#expertise" onClick={(e) => handleNav(e, 'expertise')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Expertise</a></li>
                  <li><a href="#about" onClick={(e) => handleNav(e, 'about')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>About</a></li>
                  <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>Legal</h4>
                 <ul className="space-y-2">
                  <li><span className="text-white/60" style={{ fontSize: '0.9rem', fontWeight: '300' }}>FINMA registered</span></li>
                  <li><span className="text-white/60" style={{ fontSize: '0.9rem', fontWeight: '300' }}>CICERO and AFA certified</span></li>
                </ul>
              </div>
            </div>

            {/* VERSION DESKTOP */}
            <div className="hidden md:flex justify-between">
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>Quick Links</h4>
                <ul className="space-y-2">
                  {/* On utilise onClick={handleNav} partout ici aussi */}
                  <li><a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Services</a></li>
                  <li><a href="#expertise" onClick={(e) => handleNav(e, 'expertise')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Expertise</a></li>
                  <li><a href="#about" onClick={(e) => handleNav(e, 'about')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>About</a></li>
                  <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="text-white/60 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>Legal</h4>
                <ul className="space-y-2">
                  <li><span className="text-white/60" style={{ fontSize: '0.9rem', fontWeight: '300' }}>FINMA registered</span></li>
                  <li><span className="text-white/60" style={{ fontSize: '0.9rem', fontWeight: '300' }}>CICERO and AFA certified</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/40" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
            © 2024 MÉRILLAT Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/m%C3%A9rillat-consulting/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '0.875rem', fontWeight: '300' }}>LinkedIn</a>
            <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="text-white/40 hover:text-white transition-colors cursor-pointer" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}