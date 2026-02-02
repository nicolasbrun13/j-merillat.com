import {
  ArrowRight,
  Users,
  Shield,
  TrendingUp,
  FileText,
  CheckCircle,
  Target,
  Search,
} from "lucide-react";

interface SwissSMEsProps {
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

export function SwissSMEs({ onNavigate }: SwissSMEsProps) {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#12362a] text-white min-h-[10vh] sm:min-h-[55vh] overflow-hidden flex items-center pt-12 sm:pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/pme-Gemini_Generated_Image_m4b1im4b1im4b1im_gy2hzv.webp"
            alt=""
            className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/85 to-[#12362a]/45" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center pt-10 sm:py-14">
          <h1 className="mb-6 text-white text-4xl md:text-5xl leading-tight">Swiss SMEs</h1>

          <p className="hidden sm:block !text-[14px] leading-6 text-white/85 mb-3 max-w-xl mx-auto">
            We support Swiss SMEs in structuring employee insurance programs that are compliant,
            efficient, and adapted to their stage of growth.
          </p>

          <p className="hidden sm:block !text-[14px] leading-6 text-white/65 max-w-xl mx-auto">
            Our role is to bring clarity, control costs, and ensure coverage decisions are aligned
            with the real needs of the business.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="!pt-5 !pb-6 sm:py-14 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">What We Do for SMEs</h2>
            <p className="!text-[14px] md:text-lg text-[#12362a] opacity-80 max-w-3xl mx-auto">
              We assist Swiss SMEs in creating solid, transparent insurance foundations that grow
              with their business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Coverage */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <FileText className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Coverage</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    Our expertise covers group health and accident plans, loss-of-income protection,
                    and pension coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Optimization */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <TrendingUp className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Optimization</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    By analyzing existing coverage and benchmarking alternatives, we help companies
                    reduce unnecessary premiums.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <CheckCircle className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Strategy</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    Our approach emphasizes clarity, efficiency, and long-term value, ensuring every
                    decision is aligned with growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Independence */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Target className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Independence</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    Every recommendation is independent and based on your company&apos;s exact
                    situation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional small "who it's for" line */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="!text-[12px] sm:!text-[13px] leading-5 sm:leading-6 text-[#12362a] opacity-60 max-w-3xl mx-auto">
              Typical scope: LAA and sickness daily allowance, pension coordination, benefit design,
              and annual renewals with cost control.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-6 sm:py-14 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/pme-Gemini_Generated_Image_m4b1im4b1im4b1im_gy2hzv.webp"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">How We Work</h2>
            <p className="hidden sm:block !text-[14px] md:text-lg max-w-3xl mx-auto text-[#12362a] opacity-80 leading-relaxed">
              Our approach is designed to support Swiss SMEs with practical, compliant, and
              efficient insurance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="group bg-[#f6efe2] !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              {/* Mobile: Row / Desktop: Column */}
              <div className="flex items-center sm:block gap-3 sm:gap-0">
                <div className="!w-7 !h-7 sm:w-10 sm:h-10 bg-[#12362a] rounded-full flex items-center justify-center mb-0 sm:mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#cbd8c3]">
                  <Search className="!w-3.5 !h-3.5 sm:w-5 sm:h-5 text-white group-hover:text-[#12362a] transition-colors duration-300" />
                </div>
                <h3 className="sm:mb-3 !text-[12px] sm:!text-[18px] !leading-tight">
                  Step 1 - Business Assessment
                </h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mt-2 sm:mt-0">
                We work with business owners to understand company structure, activities, workforce,
                and risk exposure to define coverage priorities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-[#f6efe2] !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center sm:block gap-3 sm:gap-0">
                <div className="!w-7 !h-7 sm:w-10 sm:h-10 bg-[#12362a] rounded-full flex items-center justify-center mb-0 sm:mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#cbd8c3]">
                  <FileText className="!w-3.5 !h-3.5 sm:w-5 sm:h-5 text-white group-hover:text-[#12362a] transition-colors duration-300" />
                </div>
                <h3 className="sm:mb-3 !text-[12px] sm:!text-[18px] !leading-tight">
                  Step 2 - Structuring & Optimization
                </h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mt-2 sm:mt-0">
                We structure insurance solutions adapted to your business size and reality,
                comparing options objectively to balance protection and cost efficiency.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-[#f6efe2] !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center sm:block gap-3 sm:gap-0">
                <div className="!w-7 !h-7 sm:w-10 sm:h-10 bg-[#12362a] rounded-full flex items-center justify-center mb-0 sm:mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#cbd8c3]">
                  <Shield className="!w-3.5 !h-3.5 sm:w-5 sm:h-5 text-white group-hover:text-[#12362a] transition-colors duration-300" />
                </div>
                <h3 className="sm:mb-3 !text-[12px] sm:!text-[18px] !leading-tight">
                  Step 3 - Ongoing Management
                </h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mt-2 sm:mt-0">
                We implement the selected solutions, coordinate with insurers, and remain available
                to support contract management as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-6 sm:py-14 bg-[rgb(246,239,226)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">Case studies</h2>
            <p className="!text-[14px] md:text-lg text-[#12362a]/80 mb-3">
              Discreet clients, measurable impact.
            </p>
            <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-3">
              Each business operates differently, but the challenges are often the same: unclear
              coverage, rising premiums, or inconsistent protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow flex flex-col h-full">
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
                A company&apos;s loss of income insurance faced a 15% premium increase due to high
                claim volumes...
              </p>
              <button
                className="mt-auto text-[#12362a] hover:text-[#12362a]/70 transition-colors flex items-center gap-2 text-sm"
                onClick={handleCaseStudyClick}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oxoghvoxoghvoxog_eqcevv.webp"
                  alt="Claim negotiation case study 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Reducing Costs Through Correct Classification
              </h3>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                After a corporate split, a Swiss company continued to insure all employees under
                SUVA...
              </p>
              <button
                className="mt-auto text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
                onClick={handleSuvaCaseStudyClick}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow flex flex-col h-full">
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
                className="mt-auto text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
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
            Ready to Optimize Your Employee Insurance?
          </h2>
          <p className="text-[14px] sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business reduce costs and improve coverage.
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