import { Logo } from "./Logo";

interface HeaderProps {
  currentPage?: 'home' | 'private-clients';
  onNavigate?: (page: 'home' | 'private-clients') => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={handleLogoClick} className="cursor-pointer">
          <Logo />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {currentPage === 'home' ? (
            <>
              <a href="#services" className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Services
              </a>
              <a href="#expertise" className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Expertise
              </a>
              <a href="#about" className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                About
              </a>
              <a href="#contact" className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Contact
              </a>
            </>
          ) : (
            <button 
              onClick={handleLogoClick}
              className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" 
              style={{ fontSize: '0.9rem', fontWeight: '400' }}
            >
              Back to Home
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}