import {
  ArrowRight,
  Home,
  Heart,
  Shield,
  Briefcase,
  FileText,
  CheckCircle,
  Search,
} from "lucide-react";

interface PrivateClientsProps {
  onNavigate?: (
    page:
      | "home"
      | "private-clients"
      | "multinationals"
      | "swiss-smes"
      | "public-institutions"
      | "case-study-life-insurance"
      | "case-study-long-term"
      | "case-study-pre-existing"
  ) => void;
}

export function PrivateClients({ onNavigate }: PrivateClientsProps) {
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

  const handleLifeInsuranceCaseStudyClick = () => {
    if (onNavigate) {
      onNavigate("case-study-life-insurance");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLongTermCaseStudyClick = () => {
    if (onNavigate) {
      onNavigate("case-study-long-term");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePreExistingCaseStudyClick = () => {
    if (onNavigate) {
      onNavigate("case-study-pre-existing");
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/private-Gemini_Generated_Image_m4b1im4b1im4b1im_ussn3h.webp"
            alt=""
            className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/85 to-[#12362a]/45" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center pt-10 sm:py-14">
          <h1 className="mb-6 text-white text-4xl md:text-5xl leading-tight">
            Tailored Insurance Solutions for Life
          </h1>

          <p className="hidden sm:block !text-[14px] leading-6 text-white/85 mb-3 max-w-xl mx-auto">
            We provide clear and structured insurance solutions adapted to life, from health and
            accident coverage to pension coordination.
          </p>

          <p className="hidden sm:block !text-[14px] leading-6 text-white/65 max-w-xl mx-auto">
            Whether newly arrived or long established, navigating insurance systems can be
            complex. Our role is to simplify decisions, protect what matters, and avoid unnecessary
            costs.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="!pt-5 !pb-6 sm:py-14 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">What We Do for Private Clients</h2>
            <p className="!text-[14px] md:text-lg text-[#12362a] opacity-80 max-w-3xl mx-auto">
              Comprehensive coverage, tailored to every aspect of life in Switzerland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Health */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Heart className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Health</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    We compare and structure both basic and supplementary health coverage, ensuring
                    the right balance between benefits, flexibility, and cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Things */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Home className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Things</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    From cars and homes to valuables and travel, we provide clear, optimized
                    solutions that protect what matters without unnecessary extras.
                  </p>
                </div>
              </div>
            </div>

            {/* Life & Income */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Shield className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Life and Income</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    Tailored plans that secure your income, family, and long-term stability in the
                    event of illness, accident, or loss of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialized */}
            <div className="group bg-white !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="!w-8 !h-8 sm:w-10 sm:h-10 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Briefcase className="!w-4 !h-4 sm:w-5 sm:h-5 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-medium">Specialized</h3>
                  <p className="!text-[10px] sm:!text-[14px] leading-snug sm:leading-6 text-[#12362a] opacity-70">
                    Business, legal, travel, or high-value asset protection - we design individual
                    solutions for unique requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-6 sm:py-14 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217069/private-Gemini_Generated_Image_m4b1im4b1im4b1im_ussn3h.webp"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">How We Work</h2>
            <p className="hidden sm:block !text-[14px] md:text-lg max-w-3xl mx-auto text-[#12362a] opacity-80 leading-relaxed">
              Our process is built for efficiency, precision, and peace of mind. Each stage from
              discovery to implementation follows a proven framework.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="group bg-[#f6efe2] !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              {/* Mobile: Row Layout / Desktop: Column Layout */}
              <div className="flex items-center sm:block gap-3 sm:gap-0">
                <div className="!w-7 !h-7 sm:w-10 sm:h-10 bg-[#12362a] rounded-full flex items-center justify-center mb-0 sm:mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#cbd8c3]">
                  <Search className="!w-3.5 !h-3.5 sm:w-5 sm:h-5 text-white group-hover:text-[#12362a] transition-colors duration-300" />
                </div>
                <h3 className="sm:mb-3 !text-[12px] sm:!text-[18px] !leading-tight">Step 1 - Discovery</h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mt-2 sm:mt-0">
                We begin by understanding your situation, priorities, and objectives. This first
                conversation allows us to identify your exact needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-[#f6efe2] !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center sm:block gap-3 sm:gap-0">
                <div className="!w-7 !h-7 sm:w-10 sm:h-10 bg-[#12362a] rounded-full flex items-center justify-center mb-0 sm:mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#cbd8c3]">
                  <FileText className="!w-3.5 !h-3.5 sm:w-5 sm:h-5 text-white group-hover:text-[#12362a] transition-colors duration-300" />
                </div>
                <h3 className="sm:mb-3 !text-[12px] sm:!text-[18px] !leading-tight">Step 2 - Analysis</h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mt-2 sm:mt-0">
                We compare leading Swiss insurers, review coverage options, and highlight gaps or
                overlaps. Our goal: complete clarity before any decision is made.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-[#f6efe2] !p-3 sm:p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center sm:block gap-3 sm:gap-0">
                <div className="!w-7 !h-7 sm:w-10 sm:h-10 bg-[#12362a] rounded-full flex items-center justify-center mb-0 sm:mb-4 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#cbd8c3]">
                  <CheckCircle className="!w-3.5 !h-3.5 sm:w-5 sm:h-5 text-white group-hover:text-[#12362a] transition-colors duration-300" />
                </div>
                <h3 className="sm:mb-3 !text-[12px] sm:!text-[18px] !leading-tight">Step 3 - Implementation</h3>
              </div>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mt-2 sm:mt-0">
                Once the plan is defined, we coordinate directly with insurers and handle all
                administration. You receive a complete, compliant setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-6 sm:py-14 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">Case Studies</h2>
            <p className="!text-[14px] md:text-lg mb-3 text-[#12362a]/80">
              Real results for individuals and families who needed clarity and confidence.
            </p>
            <p className="hidden sm:block !text-[14px] md:text-lg mb-3 text-[#12362a]/80">
              Every client&apos;s situation is unique - but the challenges are often similar:
              complexity, confusion, and unnecessary cost.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768826689/Gemini_Generated_Image_w49s7ow49s7ow49s_rnksot.webp"
                  alt="Life insurance case study"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Avoiding a Costly Life Insurance Trap
              </h3>

              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                An expatriate was approached by an online broker promoting a "tax-saving" life
                insurance plan - but would have lost CHF 16,000.
              </p>

              <button
                onClick={handleLifeInsuranceCaseStudyClick}
                className="mt-auto text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768830967/Gemini_Generated_Image_j74do8j74do8j74d_gvnxqc.webp"
                  alt="Long-term planning case study"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Planning Long-Term
              </h3>

              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                A couple in their forties had a well-structured health insurance plan - except for
                one overlooked detail: long-term pricing.
              </p>

              <button
                onClick={handleLongTermCaseStudyClick}
                className="mt-auto text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
                <img
                  src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768831370/Gemini_Generated_Image_esrklwesrklwesrk_fzervj.webp"
                  alt="Pre-existing condition case study"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">
                Pre-Existing Condition?
              </h3>

              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                A family relocating to Switzerland faced repeated rejections from insurers due to
                their daughter's pre-existing medical condition.
              </p>

              <button
                onClick={handlePreExistingCaseStudyClick}
                className="mt-auto text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}