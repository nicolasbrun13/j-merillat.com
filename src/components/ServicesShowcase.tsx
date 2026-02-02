
const corporateServicesImage =
  "https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/multi-Gemini_Generated_Image_m4b1im4b1im4b1im_auwg2y.webp";
const privateSmeServicesImage =
  "https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/Gemini_Generated_Image_m4b1im4b1im4b1im_lek8jc.webp";


interface ServicesShowcaseProps {
  onNavigate?: (page: 'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional' | 'private-sme') => void;
}

export function ServicesShowcase({ onNavigate }: ServicesShowcaseProps) {
  const handlePrivateClientsClick = () => {
    if (onNavigate) {
      onNavigate('private-clients');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCorporateInstitutionalClick = () => {
    if (onNavigate) {
      onNavigate('corporate-institutional');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrivateSMEClick = () => {
    if (onNavigate) {
      onNavigate('private-sme');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSMEsClick = () => {
    if (onNavigate) {
      onNavigate('swiss-smes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePublicInstitutionsClick = () => {
    if (onNavigate) {
      onNavigate('public-institutions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
<section id="services" className="bg-white min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <div className="text-[#cbd8c3] mb-3 sm:mb-4 text-xs sm:text-sm font-medium tracking-widest">
        TAILORED SOLUTIONS
      </div>
      <h2 className="text-[#12362a] text-3xl sm:text-4xl lg:text-5xl font-normal">
        Excellence across sectors
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {/* Corporate & Institutional */}
      <button
        onClick={handleCorporateInstitutionalClick}
        className="group relative overflow-hidden bg-[#f6efe2] hover:shadow-xl transition-all duration-500 text-left w-full flex flex-col"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={corporateServicesImage}
            alt="Corporate services"
            className="w-full h-full object-cover object-top brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
          <h3 className="text-[#12362a] mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-normal">
            Corporate & Institutional
          </h3>
<p className="!text-xs md:!text-sm lg:!text-base text-[#12362a]/70 mb-4 font-light leading-relaxed">
            From multinational corporations to public institutions, we deliver sophisticated
            insurance solutions that align with organizational complexity and regulatory requirements.
          </p>
          <div className="flex items-center gap-2 text-[#12362a] group-hover:gap-4 transition-all mt-auto">
            <span className="text-sm sm:text-base font-normal">Explore solutions</span>
            <span className="text-[#cbd8c3]">→</span>
          </div>
        </div>
      </button>

      {/* Private & SME */}
      <button
        onClick={handlePrivateSMEClick}
        className="group relative overflow-hidden bg-[#f6efe2] hover:shadow-xl transition-all duration-500 text-left w-full flex flex-col"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={privateSmeServicesImage}
            alt="Private and SME services"
            className="w-full h-full object-cover object-top brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
          <h3 className="text-[#12362a] mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-normal">
            Private Clients & SMEs
          </h3>
<p className="!text-xs md:!text-sm lg:!text-base text-[#12362a]/70 mb-4 font-light leading-relaxed">
            Personalized insurance strategies designed for Swiss SMEs and private clients seeking
            independent expertise and long-term protection.
          </p>
          <div className="flex items-center gap-2 text-[#12362a] group-hover:gap-4 transition-all mt-auto">
            <span className="text-sm sm:text-base font-normal">Explore solutions</span>
            <span className="text-[#cbd8c3]">→</span>
          </div>
        </div>
      </button>
    </div>
  </div>
</section>
);
}