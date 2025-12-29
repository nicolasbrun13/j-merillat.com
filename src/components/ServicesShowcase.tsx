import cityImage from "figma:asset/09c61842a18019bce882e665eb316a602fdf9706.png";
import industrialImage from "figma:asset/1ef6e5ab00606ac7d1d0db1fc3bd90f8d4a219e0.png";

interface ServicesShowcaseProps {
  onNavigate?: (page: 'home' | 'private-clients') => void;
}

export function ServicesShowcase({ onNavigate }: ServicesShowcaseProps) {
  const handlePrivateClientsClick = () => {
    if (onNavigate) {
      onNavigate('private-clients');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#cbd8c3] mb-4 tracking-wider" style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.1em' }}>
            TAILORED SOLUTIONS
          </div>
          <h2 className="text-[#12362a]">
            Excellence across sectors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Corporate & Institutional */}
          <div className="group relative overflow-hidden bg-[#f6efe2] hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={cityImage} 
                alt="Corporate services" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[#12362a] mb-4">
                Corporate & Institutional
              </h3>
              <p className="text-[#12362a]/70 mb-6" style={{ fontSize: '1rem', fontWeight: '300' }}>
                From multinational corporations to public institutions, we deliver sophisticated 
                insurance solutions that align with organizational complexity and regulatory requirements.
              </p>
              <div className="flex items-center gap-2 text-[#12362a] group-hover:gap-4 transition-all">
                <span style={{ fontSize: '0.9rem', fontWeight: '400' }}>Explore solutions</span>
                <span className="text-[#cbd8c3]">→</span>
              </div>
            </div>
          </div>

          {/* Private & SME */}
          <button 
            onClick={handlePrivateClientsClick}
            className="group relative overflow-hidden bg-[#f6efe2] hover:shadow-xl transition-all duration-500 text-left w-full"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={industrialImage} 
                alt="Private and SME services" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[#12362a] mb-4">
                Private Clients & SMEs
              </h3>
              <p className="text-[#12362a]/70 mb-6" style={{ fontSize: '1rem', fontWeight: '300' }}>
                Personalized insurance strategies designed for Swiss SMEs and private clients seeking 
                independent expertise and long-term protection.
              </p>
              <div className="flex items-center gap-2 text-[#12362a] group-hover:gap-4 transition-all">
                <span style={{ fontSize: '0.9rem', fontWeight: '400' }}>Explore solutions</span>
                <span className="text-[#cbd8c3]">→</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}