import heroImage from "figma:asset/78167d0d2fd06771634a8ccd69a80c018a501562.png";

interface HeroProps {
  onNavigate?: (page: 'home' | 'private-clients') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const services = [
    { title: "Private clients", description: "Personalized insurance solutions", page: 'private-clients' as const },
    { title: "Multinationals", description: "Global coverage and risk management" },
    { title: "Swiss SMEs", description: "Tailored business protection" },
    { title: "Public institutions", description: "Comprehensive public sector solutions" }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.page && onNavigate) {
      onNavigate(service.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#12362a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Swiss landscape" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/80 to-[#12362a]/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6" style={{ fontSize: '3.5rem', fontWeight: '300', lineHeight: '1.1' }}>
            Independent insurance consulting
          </h1>
          <p className="text-[#cbd8c3] mb-12" style={{ fontSize: '1.5rem', fontWeight: '300', letterSpacing: '0.01em' }}>
            Clarity, performance, protection
          </p>

          {/* Service Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(service)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 px-6 py-6 text-left"
              >
                <div className="text-white mb-2" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
                  {service.title}
                </div>
                <div className="text-[#cbd8c3]" style={{ fontSize: '0.875rem', fontWeight: '300' }}>
                  {service.description}
                </div>
                <div className="absolute bottom-6 right-6 text-white/40 group-hover:text-white/80 transition-colors">
                  →
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}