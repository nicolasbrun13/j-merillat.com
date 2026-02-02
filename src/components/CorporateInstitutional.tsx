import { ArrowRight, Building2, Landmark, Globe, Shield, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CorporateInstitutionalProps {
  onNavigate?: (page: 'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional') => void;
}

export function CorporateInstitutional({ onNavigate }: CorporateInstitutionalProps) {
  const handleNavigate = (page: 'multinationals' | 'public-institutions') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
  <div className="min-h-screen bg-white">
 {/* Hero Section - Hidden on mobile */}
      <section className="relative bg-[#12362a] text-white min-h-[60vh] hidden sm:flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/multi-Gemini_Generated_Image_m4b1im4b1im4b1im_auwg2y.webp" 
            alt="Swiss landscape" 
            className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/80 to-[#12362a]/40"></div>
        </div>
  
  {/* Hero Content */}
  <div className="w-full px-3 sm:px-6 relative z-10 text-center py-20 max-w-[280px] sm:max-w-6xl mx-auto">
    <div className="inline-block mb-6">
      <div className="flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-2 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
        <Building2 className="w-3 sm:w-5 h-3 sm:h-5" />
        <span className="text-[10px] sm:text-sm uppercase tracking-wider">Professional Services</span>
        <Landmark className="w-3 sm:w-5 h-3 sm:h-5" />
      </div>
    </div>
    
    <h1 className="mb-6 sm:mb-8 text-lg sm:text-4xl font-semibold leading-tight">
      Corporate & Institutional Solutions
    </h1>
    
    <p className="hidden sm:block text-sm sm:text-xl text-white/90 max-w-3xl mx-auto mb-4 sm:mb-6">
      Sophisticated insurance advisory for organizations that operate at scale
    </p>
    
    <p className="hidden sm:block text-xs sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
      Whether you're managing cross-border mobility or navigating public procurement, we deliver independent expertise that aligns with your strategic objectives.
    </p>
  </div>
</section>


{/* Introduction Section */}
<section className="hidden sm:block py-12 sm:py-16 bg-[#f6efe2]">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-lg sm:text-2xl mb-4 sm:mb-6 font-semibold">Two Distinct Worlds, One Common Need</h2>
    <p className="text-sm sm:text-lg text-[#12362a]/80 leading-relaxed">
      Multinational corporations and public institutions face fundamentally different constraints—
      yet both require the same foundation: clarity, compliance, and performance.
      <br /><br />
      We've built specialized advisory frameworks for each environment.
    </p>
  </div>
</section>


{/* Main Content - Two Cards */}
      <section className="pt-20 pb-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
      
      {/* Multinationals Card */}
      <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all duration-500 hover:shadow-2xl cursor-pointer">
{/* Image Section */}
<div className="relative h-[250px] sm:h-[400px] overflow-hidden">
  <ImageWithFallback
    src="https://images.unsplash.com/photo-1636142466028-8c6c7cd616b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc2MzEyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    alt="Public institution architecture"
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#12362a] via-[#12362a]/50 to-transparent opacity-60"></div>


          
          {/* Floating Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
                    <Shield className="w-5 h-5 text-[#12362a]" />
              <span className="font-medium text-[#12362a]">Global Scale</span>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
            <h3 className="text-white text-lg sm:text-3xl mb-1 sm:mb-2">Multinationals</h3>
            <p className="hidden sm:block text-white/90 text-xs sm:text-sm">Cross-border mobility & benefits coordination</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-8 bg-[#f6efe2]">
          <p className="hidden sm:block text-[#12362a]/80 mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed">
            Support for multinational organizations managing insurance programs for employees
            in complex international environments. We align Swiss requirements with global HR
            and mobility policies.
          </p>

          {/* Key Features */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
              <span className="text-[#12362a]/70">International assignments & relocations</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
              <span className="text-[#12362a]/70">Global HR framework integration</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
              <span className="text-[#12362a]/70">Executive & VIP coverage structures</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-[#cbd8c3] text-xs sm:text-sm">
            <span className="text-[#12362a] font-medium group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform mb-2 sm:mb-0">
              Explore Multinational Solutions
            </span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>

      {/* Public Institutions Card - appliquer mêmes classes responsive que Multinationals */}
      {/* ... même structure avec tailles réduites pour mobile / tablette ... */}

           {/* Public Institutions Card */}
<div 
  onClick={() => handleNavigate('public-institutions')}
  className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all duration-500 hover:shadow-2xl cursor-pointer"
>
  {/* Image Section */}
  <div className="relative h-[250px] sm:h-[400px] overflow-hidden">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1767570059803-4d2b6214641b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwaW5zdGl0dXRpb24lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY3NjMxMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      alt="Public institution architecture"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#12362a] via-[#12362a]/50 to-transparent opacity-60"></div>

    {/* Floating Badge */}
    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
      <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
        <Shield className="w-5 h-5 text-[#12362a]" />
        <span className="font-medium text-[#12362a]">Public Sector</span>
      </div>
    </div>

    {/* Title Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
      <h3 className="text-white text-lg sm:text-3xl mb-1 sm:mb-2">Public Institutions</h3>
      <p className="hidden sm:block text-white/90 text-xs sm:text-sm">Compliant tender management & procurement</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="p-4 sm:p-8 bg-[#f6efe2]">
    <p className="hidden sm:block text-[#12362a]/80 mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed">
      Independent advisory for public-sector entities navigating insurance tenders under
      Swiss procurement law. We ensure full transparency, compliance, and optimized value
      throughout the tender process.
    </p>

    {/* Key Features */}
    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Full procurement law compliance</span>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Transparent tender documentation</span>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Objective evaluation & selection</span>
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-[#cbd8c3] text-xs sm:text-sm">
      <span className="text-[#12362a] font-medium group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform mb-2 sm:mb-0">
        Explore Public Sector Solutions
      </span>
      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
    </div>

              </div>
            </div>

          </div>
        </div>
      </section>

   {/* Why Choose Us Section */}
      <section className="!py-8 sm:py-16 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="mb-0 sm:mb-6 text-2xl sm:text-4xl font-medium">Why Organizations Choose MÉRILLAT</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-8">
            
            {/* Item 1 */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#12362a] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:bg-[#cbd8c3] transition-colors">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#12362a] transition-colors" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-medium">100% Independent</h3>
              <p className="!text-[14px] sm:text-base text-[#12362a]/70 leading-snug sm:leading-normal max-w-xs mx-auto">
                No insurer commissions, no conflicts of interest. Our advice serves only your interests.
              </p>
            </div>

            {/* Item 2 */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#12362a] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:bg-[#cbd8c3] transition-colors">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#12362a] transition-colors" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-medium">Specialized Expertise</h3>
              <p className="!text-[14px] sm:text-base text-[#12362a]/70 leading-snug sm:leading-normal max-w-xs mx-auto">
                Deep knowledge of both corporate mobility and public procurement regulations.
              </p>
            </div>

            {/* Item 3 */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#12362a] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:bg-[#cbd8c3] transition-colors">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#12362a] transition-colors" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-medium">Proven Results</h3>
              <p className="!text-[14px] sm:text-base text-[#12362a]/70 leading-snug sm:leading-normal max-w-xs mx-auto">
                Measurable cost savings, compliance assurance, and streamlined operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#12362a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-white">Ready to Optimize Your Insurance Strategy?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how independent advisory can deliver clarity and performance for your organization.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-[#12362a] px-8 py-4 rounded-lg hover:bg-[#f6efe2] transition-colors inline-flex items-center gap-2"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}