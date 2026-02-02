import { Logo } from "./Logo";

export function Footer() {
  return (
    // J'ai gardé ton pt-5 ici
    <footer className="bg-[#12362a] text-white pt-5 pb-12 sm:pb-16" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          {/* AJOUT: text-center (mobile) md:text-left (desktop) */}
          <div className="md:col-span-2 mb-8 md:mb-0 text-center md:text-left">
            
            {/* AJOUT: mx-auto (centre le logo sur mobile) md:mx-0 (remet à gauche sur desktop) */}
            <div className="mb-6 mx-auto md:mx-0" style={{ maxWidth: '150px' }}>
              <Logo variant="light" className="w-full h-auto" />
            </div>

            {/* AJOUT: mx-auto md:mx-0 pour centrer le bloc de texte aussi */}
            <p className="text-white/60 max-w-sm mx-auto md:mx-0" style={{ fontSize: '0.95rem', fontWeight: '300', lineHeight: '1.6' }}>
              Independent insurance consulting rooted in Swiss values of integrity, 
              precision, and excellence.
            </p>
          </div>

          {/* Quick Links & Legal */}
          <div className="md:col-span-2">
            {/* Mobile: deux colonnes */}
            <div className="grid grid-cols-2 gap-6 md:hidden">
              {/* Quick Links */}
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Services</a></li>
                  <li><a href="#expertise" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Expertise</a></li>
                  <li><a href="#about" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>About</a></li>
                  <li><a href="#contact" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Contact</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>
                  Legal
                </h4>
                 <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>FINMA registered</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>CICERO and AFA certified</a></li>
                </ul>
              </div>
            </div>

            {/* Desktop: affichage normal */}
            <div className="hidden md:flex justify-between">
              {/* Quick Links */}
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Services</a></li>
                  <li><a href="#expertise" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Expertise</a></li>
                  <li><a href="#about" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>About</a></li>
                  <li><a href="#contact" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>Contact</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>FINMA registered</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>CICERO and AFA certified</a></li>
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
            <a
  href="https://www.linkedin.com/company/m%C3%A9rillat-consulting/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/40 hover:text-white transition-colors"
  style={{ fontSize: '0.875rem', fontWeight: '300' }}
>
  LinkedIn
</a>
            <a href="#contact" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}