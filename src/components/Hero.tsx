interface HeroProps {
  onNavigate?: (page: 'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional' | 'private-sme') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const services = [
    {
      title: "Private clients",
      description: "Personalized insurance solutions",
      page: 'private-clients' as const
    },
    {
      title: "Multinationals",
      description: "Global coverage and risk management",
      page: 'multinationals' as const
    },
    {
      title: "Swiss SMEs",
      description: "Tailored business protection",
      page: 'swiss-smes' as const
    },
    {
      title: "Public institutions",
      description: "Comprehensive public sector solutions",
      page: 'public-institutions' as const
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.page && onNavigate) {
      onNavigate(service.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-[#12362a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768215843/PHOTOSHOPED-Gemini_Generated_Image_m4b1im4b1im4b1im_belwqj.webp"
          alt="Swiss landscape"
          className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/80 to-[#12362a]/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-16 lg:py-32">
        <div className="max-w-3xl">


<h1
  className="
    text-white
    mb-3 sm:mb-6
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-light
    sm:leading-tight
  "
>
  Independent insurance consulting
</h1>




          
          <p 
            className="text-[#cbd8c3] mb-6 sm:mb-8 lg:mb-12 text-lg sm:text-xl md:text-2xl font-light tracking-wide"
          >
            Clarity, performance, protection
          </p>

          {/* Service Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(service)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 px-4 py-4 sm:px-6 sm:py-6 text-left"
              >
                <div className="text-white mb-1 sm:mb-2 text-base sm:text-lg font-normal">
                  {service.title}
                </div>
                <div className="text-[#cbd8c3] text-xs sm:text-sm font-light pr-6 sm:pr-0">
                  {service.description}
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white/40 group-hover:text-white/80 transition-colors">
                  →
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}