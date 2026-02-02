import { ArrowRight, Users, Building, Shield, Heart, CheckCircle, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PrivateSMEProps {
  onNavigate?: (page: 'home' | 'private-clients' | 'multinationals' | 'swiss-smes' | 'public-institutions' | 'corporate-institutional' | 'private-sme') => void;
}

export function PrivateSME({ onNavigate }: PrivateSMEProps) {
  const handleNavigate = (page: 'private-clients' | 'swiss-smes') => {
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/Gemini_Generated_Image_m4b1im4b1im4b1im_lek8jc.webp" 
            alt="Swiss landscape" 
            className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/80 to-[#12362a]/40"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Heart className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Personal Advisory</span>
              <Building className="w-5 h-5" />
            </div>
          </div>
          
          <h1 className="mb-8 text-white text-4xl font-semibold">
            Private Clients & SME Solutions
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Personalized insurance strategies for individuals and businesses that value independence
          </p>
          
          <p className="text-white/70 max-w-2xl mx-auto">
            Whether you're protecting your family's future or securing your business legacy,
            we provide expert guidance tailored to your unique circumstances.
          </p>
        </div>
      </section>

      {/* Introduction Section - Hidden on mobile */}
      <section className="hidden sm:block py-16 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-2xl font-semibold">Personal Attention, Professional Excellence</h2>
          <p className="text-lg text-[#12362a]/80 leading-relaxed">
            Private clients and SME owners share a common goal: securing what matters most with 
            clarity and confidence. We deliver independent expertise without the complexity of 
            institutional advisory.
            <br /><br />
            Two specialized approaches for your peace of mind.
          </p>
        </div>
      </section>

      {/* Main Content - Two Cards */}
      <section className="pt-20 pb-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
{/* Private Clients Card */}
<div 
  onClick={() => handleNavigate('private-clients')}
  className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all duration-500 hover:shadow-2xl cursor-pointer"
>
  {/* Image Section */}
  <div className="relative h-[250px] sm:h-[400px] overflow-hidden">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1624285928622-e3a66565dfa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcml2YXRlJTIwd2VhbHRofGVufDF8fHx8MTc2NzYzMTc0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
      alt="Private wealth and family protection"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#12362a] via-[#12362a]/50 to-transparent opacity-60"></div>

    {/* Floating Badge */}
    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
      <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
        <Heart className="w-5 h-5 text-[#12362a]" />
        <span className="font-medium text-[#12362a]">Personal Care</span>
      </div>
    </div>

    {/* Title Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
      <h3 className="text-white text-lg sm:text-3xl mb-1 sm:mb-2">Private Clients</h3>
      <p className="hidden sm:block text-white/90 text-xs sm:text-sm">Comprehensive family protection & wealth planning</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="p-4 sm:p-8 bg-[#f6efe2]">
    <p className="hidden sm:block text-[#12362a]/80 mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed">
      Holistic insurance advisory for individuals and families seeking independent guidance.
      We help you navigate life insurance, health, retirement planning, and asset protection
      with clarity and confidence.
    </p>

    {/* Key Features */}
    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Life insurance & succession planning</span>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Health & disability coverage optimization</span>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Asset & liability protection strategies</span>
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-[#cbd8c3] text-xs sm:text-sm">
      <span className="text-[#12362a] font-medium group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform mb-2 sm:mb-0">
        Explore Private Client Services
      </span>
      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
    </div>

              </div>
            </div>

       {/* Swiss SMEs Card */}
<div 
  onClick={() => handleNavigate('swiss-smes')}
  className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all duration-500 hover:shadow-2xl cursor-pointer"
>
  {/* Image Section */}
  <div className="relative h-[250px] sm:h-[400px] overflow-hidden">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1614326618282-94d7f7ac9b3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMHNtYWxsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3NjMxNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      alt="Swiss small and medium enterprises"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#12362a] via-[#12362a]/50 to-transparent opacity-60"></div>

    {/* Floating Badge */}
    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
      <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
        <TrendingUp className="w-5 h-5 text-[#12362a]" />
        <span className="font-medium text-[#12362a]">Business Growth</span>
      </div>
    </div>

    {/* Title Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
      <h3 className="text-white text-lg sm:text-3xl mb-1 sm:mb-2">Swiss SMEs</h3>
      <p className="hidden sm:block text-white/90 text-xs sm:text-sm">Business protection & employee benefits</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="p-4 sm:p-8 bg-[#f6efe2]">
    <p className="hidden sm:block text-[#12362a]/80 mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed">
      Strategic insurance solutions for Swiss small and medium enterprises. We help you
      balance employee benefits, business continuity, and cost optimization while maintaining
      compliance with Swiss regulations.
    </p>

    {/* Key Features */}
    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Employee benefits & pension optimization</span>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Business liability & operational risk</span>
      </div>
      <div className="flex items-start gap-2 sm:gap-3">
        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#12362a] mt-0.5 flex-shrink-0" />
        <span className="text-[#12362a]/70">Key person & succession protection</span>
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-[#cbd8c3] text-xs sm:text-sm">
      <span className="text-[#12362a] font-medium group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform mb-2 sm:mb-0">
        Explore SME Solutions
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
            <h2 className="mb-0 sm:mb-6 text-2xl sm:text-4xl font-medium">Why Individuals & SMEs Choose MÉRILLAT</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-8">
            
            {/* Item 1 */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#12362a] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:bg-[#cbd8c3] transition-colors">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#12362a] transition-colors" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-medium">Truly Independent</h3>
              <p className="!text-[14px] sm:text-base text-[#12362a]/70 leading-snug sm:leading-normal max-w-xs mx-auto">
                No commissions, no hidden agendas. We work exclusively for your interests, not insurers'.
              </p>
            </div>

            {/* Item 2 */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#12362a] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:bg-[#cbd8c3] transition-colors">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#12362a] transition-colors" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-medium">Personal Approach</h3>
              <p className="!text-[14px] sm:text-base text-[#12362a]/70 leading-snug sm:leading-normal max-w-xs mx-auto">
                We take time to understand your unique situation and deliver tailored solutions.
              </p>
            </div>

            {/* Item 3 */}
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#12362a] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:bg-[#cbd8c3] transition-colors">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-[#12362a] transition-colors" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-medium">Long-term Partnership</h3>
              <p className="!text-[14px] sm:text-base text-[#12362a]/70 leading-snug sm:leading-normal max-w-xs mx-auto">
                We're here for the journey—from initial planning to life changes and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#12362a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-white">Ready to Secure Your Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's have a conversation about your insurance needs and how independent advisory can help.
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