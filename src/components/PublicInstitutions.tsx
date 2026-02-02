import { ArrowRight, FileText, Search, Shield } from "lucide-react";

interface PublicInstitutionsProps {
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

export function PublicInstitutions({ onNavigate }: PublicInstitutionsProps) {
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
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    // si l'ID n'existe pas, navigue vers la home et scroll après un petit délai
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200); // délai pour laisser le DOM se mettre à jour
    }
  }
};

const handleContactClick = () => {
  handleSectionClick('contact');
};

  return (
    <div>
      {/* Hero Section */}
<section className="relative text-white min-h-[10vh] sm:min-h-[55vh] overflow-hidden flex items-center pt-12 sm:pt-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217068/bGemini_Generated_Image_m4b1im4b1im4b1im_k04gyi.webp"
            alt=""
          className="w-full h-full object-cover opacity-90 animate-[ken-burns_30s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12362a]/85 to-[#12362a]/45" />
        </div>

<div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center pt-10 sm:py-14">
  <h1 className="mb-6 text-white text-4xl md:text-5xl leading-tight">
    Public and Semi-Public Institutions
  </h1>



<p className="hidden sm:block !text-[14px] leading-6 text-white/80 mb-3 max-w-xl mx-auto">
  We support public and para-public institutions in managing insurance tenders within
  strict procurement frameworks, ensuring rigor, transparency, and full regulatory
  compliance.
</p>

<p className="hidden sm:block !text-[14px] leading-6 text-white/65 max-w-xl mx-auto">
  Our role is to provide a clear and neutral framework that simplifies complex,
  time-sensitive processes while securing compliant decision-making for public
  administrations.
</p>

        </div>
      </section>

{/* What We Do Section */}
<section className="!pt-5 !pb-6 sm:!py-12 lg:!py-10 bg-[#f6efe2]">
  <div className="max-w-6xl mx-auto px-6">
    {/* Réduction du mb-10 à mb-6 sur mobile */}
    <div className="text-center mb-6 sm:mb-10">
      <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">What We Do</h2>
      <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-4 max-w-3xl mx-auto">
        Our role is to simplify and professionalize the public insurance tender process.
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

  <p className="!text-[12px] sm:!text-[14px] !leading-[1.3] !max-w-full !mx-0">
    Define insurance needs and risk parameters clearly
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

  <p className="!text-[12px] sm:!text-[14px] !leading-[1.3] !max-w-full !mx-0">
    Analyze existing coverage and identify gaps
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

  <p className="!text-[12px] sm:!text-[14px] !leading-[1.3] !max-w-full !mx-0">
    Deliver clear recommendations and implementation steps
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

  <p className="!text-[12px] sm:!text-[14px] !leading-[1.3] !max-w-full !mx-0">
    Ensure full compliance with applicable legal frameworks
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

  <p className="!text-[12px] sm:!text-[14px] !leading-[1.3] !max-w-full !mx-0">
    Implement the selected solution seamlessly with your administration
  </p>
</div>

          </div>

{/* Suppression du mt-10 sur mobile (mt-0 sm:mt-10) */}
    <div className="space-y-3 mt-0 sm:mt-10 text-center text-[#12362a] opacity-80">
      <p className="hidden sm:block !text-[14px] leading-6 max-w-3xl mx-auto">
        Beyond tenders, we remain available to support ongoing contract management and communication with insurers.
      </p>
      <p className="hidden sm:block !text-[14px] leading-6 max-w-3xl mx-auto">
        Our process guarantees transparency, efficiency, and neutrality - key values for any public institution.
      </p>
    </div>
  </div>
</section>

{/* How We Work Section */}
<section className="relative py-6 sm:py-14 bg-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217068/bGemini_Generated_Image_m4b1im4b1im4b1im_k04gyi.webp"
      alt=""
      className="w-full h-full object-cover opacity-35"
    />
    <div className="absolute inset-0 bg-white/85" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6">
    {/* Réduction du mb-10 à mb-6 sur mobile */}
    <div className="text-center mb-6 sm:mb-10">
      <h2 className="mb-2 sm:mb-4 text-3xl leading-tight">How We Work</h2>
      <p className="!text-[14px] md:text-lg max-w-3xl mx-auto text-[#12362a]/80 leading-relaxed">
        Our tender process is built for compliance, transparency, and efficiency.
      </p>
      <p className="hidden sm:block !text-[14px] md:text-lg max-w-3xl mx-auto text-[#12362a]/80 leading-relaxed mt-3">
        Each stage from requirement definition to contract signature follows public
        procurement law while ensuring institutions receive the best possible terms.
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
      Step 1 - Requirements Definition
    </h3>
  </div>

  <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70">
    We work with your team to define coverage needs, risk tolerance, and budget
    parameters. This stage establishes the foundation for a clear, compliant tender.
  </p>
</div>


            {/* Step 2 */}
 <div className="group bg-[#f6efe2] !p-3 sm:!p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg cursor-pointer">
  <div className="flex items-center !gap-2 sm:!gap-3 !mb-2 sm:!mb-4">
    <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center group-hover:bg-[#cbd8c3] transition-all">
      <FileText className="!w-3.5 !h-3.5 sm:!w-5 sm:!h-5 text-white group-hover:text-[#12362a]" />
    </div>
    <h3 className="!text-[12px] sm:!text-lg !leading-tight">
      Step 2 - Tender Publication and Evaluation
    </h3>
  </div>

  <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70">
    We prepare tender documents, coordinate publication, and analyze all incoming
    offers against objective criteria ensuring full transparency and legal compliance.
  </p>
</div>


            {/* Step 3 */}
<div className="group bg-[#f6efe2] !p-3 sm:!p-6 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg cursor-pointer col-span-2 sm:col-span-1">
  <div className="flex items-center !gap-2 sm:!gap-3 !mb-2 sm:!mb-4">
    <div className="!w-7 !h-7 sm:!w-10 sm:!h-10 bg-[#12362a] rounded-full flex items-center justify-center group-hover:bg-[#cbd8c3] transition-all">
      <Shield className="!w-3.5 !h-3.5 sm:!w-5 sm:!h-5 text-white group-hover:text-[#12362a]" />
    </div>
    <h3 className="!text-[12px] sm:!text-lg !leading-tight">
      Step 3 - Contract Implementation
    </h3>
  </div>

  <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70">
    Once the winner is selected, we manage the transition, coordinate with the chosen
    insurer, and ensure your institution's employees are covered without disruption.
  </p>
</div>

          </div>
        </div>
      </section>

      {/* Case Studies Section */}
<section className="py-6 sm:py-14 bg-[#f6efe2]">
  <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="mb-4 text-3xl leading-tight">Case studies</h2>
            <p className="!text-[14px] md:text-lg text-[#12362a]/80 mb-3">
              Discreet clients, measurable impact.
            </p>
            <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-3">
              Many institutions face the same challenge: insurance contracts renewed for years
              without competitive review, exposing them to unnecessary costs or compliance risks.
              <br />
              Our case studies highlight how a well-managed tender process can generate measurable
              savings, strengthen legal conformity, and reassure both management and auditors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <div className="bg-white p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-[#cbd8c3] rounded-lg mb-4 flex items-center justify-center">
  <img
    src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768228502/Gemini_Generated_Image_fwcnsafwcnsafwcn_qllzjh.webp"
    alt="Claim negotiation case study"
    className="w-full h-full object-cover"
  />              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">Reducing a Premium Increase Through Claim Negotiation</h3>
              <p className="hidden sm:block !text-[14px] md:text-lg text-[#12362a]/80 mb-3">
                A company&apos;s loss of income insurance (indemnités journalières maladie) faced a 15%
                premium increase due to high claim volumes. We reviewed each open claim, identified
                over-provisioned cases, and negotiated directly with the insurer. After clarifying
                the real exposure, the increase was reduced to 10%, saving the company thousands
                while preserving full coverage and a transparent partnership with the insurer.
              </p>
              <button
                className="text-[#12362a] hover:text-[#12362a]/70 transition-colors flex items-center gap-2 text-sm"
                onClick={handleCaseStudyClick}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

                     {/* Case Study 2 */}
            <div className="bg-white p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
<div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
<div className="aspect-video rounded-lg mb-4 overflow-hidden">
  <img
    src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oxoghvoxoghvoxog_eqcevv.webp"
    alt="Claim negotiation case study 2"
    className="w-full h-full object-cover"
  />
</div>              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">Reducing Costs Through Correct Classification After a Corporate Split</h3>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                After a corporate split, a Swiss company continued to insure all employees under
                SUVA. We transferred eligible roles to private coverage while maintaining
                protection - reducing annual costs and keeping full compliance.
              </p>
              <button className="text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm" onClick={handleSuvaCaseStudyClick}>
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-6 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
<div className="aspect-video w-full rounded-lg mb-4 overflow-hidden bg-[#cbd8c3]">
<div className="aspect-video rounded-lg mb-4 overflow-hidden">
  <img
    src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oklipsoklipsokli_dawovb.webp"
    alt="Claim negotiation case study 3"
    className="w-full h-full object-cover"
  />
</div>              </div>
              <h3 className="!text-[14px] sm:!text-lg !leading-tight mb-2 font-medium">Free Onboarding for a Multinational Company</h3>
              <p className="hidden sm:block !text-[14px] leading-6 text-[#12362a] opacity-70 mb-4">
                A multinational relocating employees faced delays in health onboarding. We secured a
                corporate framework with automatic acceptance, better coverage options, and no
                maternity waiting period - at no cost to the employer.
              </p>
              <button className="text-[#12362a] hover:text-[#12362a]/70 transition-colors inline-flex items-center gap-2 text-sm" onClick={handleMobilityCaseStudyClick}>
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-[#12362a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl leading-tight text-white">Need Support with Your Insurance Tender?</h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Let&apos;s ensure your procurement process is compliant, transparent, and efficient.
          </p>
          <button
            className="bg-white text-[#12362a] px-6 py-3 rounded-lg hover:bg-[#f6efe2] transition-colors inline-flex items-center gap-2"
            onClick={handleContactClick}
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}