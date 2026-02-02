import { ArrowRight, FileText, Globe, Search, Shield, Users } from "lucide-react";

interface MultinationalsProps {
  onNavigate?: (
    page:
      | "home"
      | "private-clients"
      | "multinationals"
      | "swiss-smes"
      | "public-institutions"
      | "case-study-premium"
      | "case-study-suva"
      | "case-study-mobility"
  ) => void;
}

export function Multinationals({ onNavigate }: MultinationalsProps) {
  const handleCaseStudyClick = () => {
    if (onNavigate) {
      onNavigate("case-study-premium");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSuvaCaseStudyClick = () => {
    if (onNavigate) {
      onNavigate("case-study-suva");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMobilityCaseStudyClick = () => {
    if (onNavigate) {
      onNavigate("case-study-mobility");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      if (onNavigate) {
        onNavigate("home");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  };

  const handleContactClick = () => {
    handleSectionClick("contact");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white min-h-[10vh] sm:min-h-[55vh] overflow-hidden flex items-center pt-12 sm:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217068/aGemini_Generated_Image_m4b1im4b1im4b1im_qejxjc.webp"
            alt=""
            className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/85 to-[#12362a]/45" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center pt-10 sm:py-14">
          <h1 className="mb-6 text-white text-4xl md:text-5xl leading-tight">
            Solutions for Multinational Teams
          </h1>

          <p className="hidden sm:block !text-[14px] leading-6 text-white/85 mb-3 max-w-xl mx-auto">
            We support multinational organizations in managing insurance programs for employees,
            within complex international environments.
          </p>

          <p className="hidden sm:block !text-[14px] leading-6 text-white/65 max-w-xl mx-auto">
            Our role is to provide clear, compliant, and coordinated advisory services that align
            requirements with global HR and mobility policies.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="!pt-5 !pb-6 sm:!py-12 lg:!py-10 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">What We Do</h2>
            <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-4 max-w-3xl mx-auto">
              We provide structured advisory support for Swiss-based employees within complex
              international environments.
            </p>
            <p className="hidden sm:block text-base md:text-lg text-[#12362a]/80 mb-0">We help you:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white !p-3 sm:!p-6 rounded-lg border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg group">
              <div className="flex items-center !gap-2 sm:!gap-4 !mb-2 sm:!mb-3">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center text-white group-hover:bg-[#cbd8c3] group-hover:text-[#12362a] transition-all">
                  <span className="!text-[12px] sm:!text-[16px] !leading-none">1</span>
                </div>
                <div className="!h-[2px] flex-1 bg-gradient-to-r from-[#12362a] to-[#cbd8c3] rounded" />
              </div>
              <p className="!text-[12px] sm:!text-[15px] !leading-[1.3] text-[#12362a]">
                Structure onboarding support for employees relocating to Switzerland
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white !p-3 sm:!p-6 rounded-lg border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg group">
              <div className="flex items-center !gap-2 sm:!gap-4 !mb-2 sm:!mb-3">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center text-white group-hover:bg-[#cbd8c3] group-hover:text-[#12362a] transition-all">
                  <span className="!text-[12px] sm:!text-[16px] !leading-none">2</span>
                </div>
                <div className="!h-[2px] flex-1 bg-gradient-to-r from-[#12362a] to-[#cbd8c3] rounded" />
              </div>
              <p className="!text-[12px] sm:!text-[15px] !leading-[1.3] text-[#12362a]">
                Align Swiss insurance plans with global HR and mobility policies
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white !p-3 sm:!p-6 rounded-lg border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg group">
              <div className="flex items-center !gap-2 sm:!gap-4 !mb-2 sm:!mb-3">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center text-white group-hover:bg-[#cbd8c3] group-hover:text-[#12362a] transition-all">
                  <span className="!text-[12px] sm:!text-[16px] !leading-none">3</span>
                </div>
                <div className="!h-[2px] flex-1 bg-gradient-to-r from-[#12362a] to-[#cbd8c3] rounded" />
              </div>
              <p className="!text-[12px] sm:!text-[15px] !leading-[1.3] text-[#12362a]">
                Harmonize benefits across jurisdictions while ensuring compliance
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white !p-3 sm:!p-6 rounded-lg border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg group md:col-start-1 md:col-end-3">
              <div className="flex items-center !gap-2 sm:!gap-4 !mb-2 sm:!mb-3">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center text-white group-hover:bg-[#cbd8c3] group-hover:text-[#12362a] transition-all">
                  <span className="!text-[12px] sm:!text-[16px] !leading-none">4</span>
                </div>
                <div className="!h-[2px] flex-1 bg-gradient-to-r from-[#12362a] to-[#cbd8c3] rounded" />
              </div>
              <p className="!text-[12px] sm:!text-[15px] !leading-[1.3] text-[#12362a]">
                Coordinate with insurers and corporate partners to improve efficiency and cost control
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white !p-3 sm:!p-6 rounded-lg border-2 border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg group col-span-2 sm:col-span-1">
              <div className="flex items-center !gap-2 sm:!gap-4 !mb-2 sm:!mb-3">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center text-white group-hover:bg-[#cbd8c3] group-hover:text-[#12362a] transition-all">
                  <span className="!text-[12px] sm:!text-[16px] !leading-none">5</span>
                </div>
                <div className="!h-[2px] flex-1 bg-gradient-to-r from-[#12362a] to-[#cbd8c3] rounded" />
              </div>
              <p className="!text-[12px] sm:!text-[15px] !leading-[1.3] text-[#12362a]">
                Deliver consistent, compliant cross-border administration for Swiss-based employees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-6 sm:py-14 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217068/aGemini_Generated_Image_m4b1im4b1im4b1im_qejxjc.webp"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">How We Work</h2>
            <p className="!text-[14px] md:text-lg max-w-3xl mx-auto text-[#12362a] opacity-80 leading-relaxed">
              Our approach is designed to support multinational organizations operating in complex,
              cross-border environments.
            </p>
            <p className="hidden sm:block !text-[14px] md:text-lg max-w-3xl mx-auto text-[#12362a] opacity-80 leading-relaxed mt-3">
              Each engagement follows a structured process that ensures regulatory compliance,
              alignment with global HR and mobility policies, and operational efficiency for
              Swiss-based employees.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="group bg-[#f6efe2] !p-3 sm:!p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg cursor-pointer">
              <div className="flex items-center !gap-2 sm:!gap-3 !mb-2 sm:!mb-4">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center group-hover:bg-[#cbd8c3] transition-all">
                  <Search className="!w-3.5 !h-3.5 sm:!w-5 sm:!h-5 text-white group-hover:text-[#12362a]" />
                </div>
                <h3 className="!text-[12px] sm:!text-lg !leading-tight">
                  Step 1 - Context and Needs Definition
                </h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70">
                We work with HR, mobility, and corporate teams to understand international policies,
                Swiss requirements, and employee profiles.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-[#f6efe2] !p-3 sm:!p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg cursor-pointer">
              <div className="flex items-center !gap-2 sm:!gap-3 !mb-2 sm:!mb-4">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center group-hover:bg-[#cbd8c3] transition-all">
                  <FileText className="!w-3.5 !h-3.5 sm:!w-5 sm:!h-5 text-white group-hover:text-[#12362a]" />
                </div>
                <h3 className="!text-[12px] sm:!text-lg !leading-tight">
                  Step 2 - Structuring and Coordination
                </h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70">
                We structure compliant Swiss insurance solutions and align them with global benefit
                frameworks, balancing compliance, cost control, and employee experience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-[#f6efe2] !p-3 sm:!p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg cursor-pointer col-span-2 sm:col-span-1">
              <div className="flex items-center !gap-2 sm:!gap-3 !mb-2 sm:!mb-4">
                <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center group-hover:bg-[#cbd8c3] transition-all">
                  <Shield className="!w-3.5 !h-3.5 sm:!w-5 sm:!h-5 text-white group-hover:text-[#12362a]" />
                </div>
                <h3 className="!text-[12px] sm:!text-lg !leading-tight">
                  Step 3 - Implementation and Support
                </h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70">
                We coordinate implementation with insurers and stakeholders, manage transitions, and
                ensure continuity of coverage for employees without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-6 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">Focus</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg text-center">
              <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#12362a] transition-colors">
                <Globe className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="!text-[13px] sm:text-lg leading-tight">
                International assignments and relocations
              </h3>
            </div>

            <div className="group !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg text-center">
              <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#12362a] transition-colors">
                <Users className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="!text-[13px] sm:text-lg leading-tight">
                Integration with global HR frameworks
              </h3>
            </div>

            <div className="group !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg text-center col-span-2 sm:col-span-1">
              <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#12362a] transition-colors">
                <Shield className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="!text-[13px] sm:text-lg leading-tight">
                Executive and VIP coverage structures
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-6 sm:py-14 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">Case studies</h2>
            <p className="!text-[14px] md:text-lg text-[#12362a]/80 mb-3">
              Discreet clients, measurable impact.
            </p>
            <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-3">
              Each organization faces its own structure, priorities, and constraints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-[#cbd8c3] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768228502/Gemini_Generated_Image_fwcnsafwcnsafwcn_qllzjh.webp"
                  alt="Claim negotiation case study"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Reducing a Premium Increase Through Claim Negotiation
              </h3>
              <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-3">
                A company&apos;s loss of income insurance faced a 15% premium increase...
              </p>
              <button
                className="text-[#12362a] hover:text-[#12362a]/70 transition-colors flex items-center gap-2 text-sm"
                onClick={handleCaseStudyClick}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oxoghvoxoghvoxog_eqcevv.webp"
                  alt="Claim negotiation case study 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Reducing Costs Through Correct Classification After a Corporate Split
              </h3>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                After a corporate split, a Swiss company continued to insure all employees under
                SUVA...
              </p>
              <button
                className="text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
                onClick={handleSuvaCaseStudyClick}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oklipsoklipsokli_dawovb.webp"
                  alt="Claim negotiation case study 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Free Onboarding for a Multinational Company
              </h3>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                A multinational relocating employees faced delays in health onboarding...
              </p>
              <button
                className="text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
                onClick={handleMobilityCaseStudyClick}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 bg-[#12362a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl leading-tight text-white">
            Ready to Streamline Your Swiss Insurance Operations?
          </h2>
          <p className="text-[14px] sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can support your global mobility and benefits strategy.
          </p>
          <button
            className="bg-white text-[#12362a] px-6 py-3 rounded-lg hover:bg-[#f6efe2] transition-colors inline-flex items-center gap-2"
            onClick={handleContactClick}
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}