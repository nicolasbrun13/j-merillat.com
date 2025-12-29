import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#12362a] text-white py-16" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-white/60 max-w-sm" style={{ fontSize: '0.95rem', fontWeight: '300', lineHeight: '1.6' }}>
              Independent insurance consulting rooted in Swiss values of integrity, 
              precision, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  Expertise
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4" style={{ fontSize: '1rem', fontWeight: '500' }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.9rem', fontWeight: '300' }}>
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
            © 2024 MÉRILLAT Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
              LinkedIn
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}