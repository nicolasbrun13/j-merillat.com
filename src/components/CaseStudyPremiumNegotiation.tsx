import { ArrowLeft, TrendingDown, FileText, Users, CheckCircle } from "lucide-react";

interface CaseStudyPremiumNegotiationProps {
  onBack?: () => void;
}

export function CaseStudyPremiumNegotiation({ onBack }: CaseStudyPremiumNegotiationProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#12362a] text-white py-30 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768228502/Gemini_Generated_Image_fwcnsafwcnsafwcn_qllzjh.webp"
            alt="Case study"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <button
  onClick={() => window.history.back()}
  className="mb-6 text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 text-sm"
>
  <ArrowLeft className="w-4 h-4" />
  Back
</button>


          <h1 className="mb-4 text-white text-4xl md:text-5xl leading-tight">
            Reducing a Premium Increase Through Claim Negotiation
          </h1>

          <p className="!text-[14px] leading-6 text-white/90 max-w-3xl">
            A company's loss of income insurance (indemnités journalières maladie) faced a 15%
            premium increase due to high claim volumes. We reviewed each open claim, identified
            over-provisioned cases, and negotiated directly with the insurer. After clarifying the
            real exposure, the increase was reduced to 10%, saving the company thousands while
            preserving full coverage and a transparent partnership with the insurer.
          </p>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="py-12 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-0 text-[#12362a] text-2xl md:text-3xl leading-tight">
            How to negotiate with insurance companies?
          </h2>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#12362a] rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">Background</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  One of our long-standing corporate clients faced an unexpected challenge with
                  their loss of income insurance (indemnités journalières maladie) - a policy
                  covering employees' salaries in case of illness.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  After several consecutive years with multiple medical claims, the insurer
                  announced a premium increase of nearly 15% at renewal. This type of adjustment is
                  not uncommon: when an insurer's claims ratio rises, they often raise premiums to
                  offset higher risk exposure.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  However, upon reviewing the insurer's data, we identified that many of the
                  so-called "open claims" were either outdated, over-provisioned, or already
                  resolved - meaning the increase was not fully justified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-14 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#12362a] rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Challenge</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The client's management team was understandably concerned. A 15% increase
                  represented a significant additional cost for the company's HR budget - and it
                  appeared to have been applied mechanically, without detailed review of the
                  underlying claims.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Our objective was to challenge the calculation, clarify the reality of each open
                  case, and restore fairness in the insurer's pricing model - all while preserving
                  the strong partnership between client and insurer.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The main difficulty lay in the insurer's internal reserves. When a claim remains
                  technically "open," even if inactive, the insurer maintains a financial provision
                  to cover potential payments - provisions that directly influence next year's
                  premium calculation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#12362a] rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">Our Approach</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We requested a detailed breakdown of all open claims and scheduled a direct
                  meeting with the insurer's account manager and claims specialist. Before the
                  discussion, we analyzed each file in coordination with the client's HR department
                  to confirm which employees were still on medical leave, which cases were closed,
                  and which provisions no longer reflected actual risk.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  During the negotiation, we presented a structured summary of every open case,
                  demonstrating why several provisions could be reduced or released. In some
                  instances, employees had already returned to work months earlier, yet claim
                  reserves had never been updated. In others, medical reports confirmed full
                  recovery, meaning there was no further financial exposure.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  By aligning the factual situation with the insurer's technical reserves, we
                  argued that the global loss ratio was overstated - and that a 15% premium
                  increase was disproportionate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome Section */}
      <section className="py-14 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#12362a] rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Outcome</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  After reviewing our analysis and accepting several provision adjustments, the
                  insurer agreed to reduce the planned increase from 15% to 10%. This represented a
                  substantial saving for the company while preserving full coverage for all
                  employees.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The discussion also strengthened transparency between both parties. The insurer
                  appreciated the accuracy of the data provided, and the client gained clearer
                  insight into how claims influence annual pricing.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Our intervention transformed what could have been an automatic rate hike into a
                  fair, data-driven outcome - maintaining both financial efficiency and a healthy
                  long-term relationship with the insurer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Impact Section */}
<section className="py-14 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-[#f6efe2] p-8 md:p-10 rounded-lg border-2 border-[#cbd8c3]">
      <h2 className="mb-5 text-center text-3xl leading-tight">Impact</h2>

      <div className="space-y-4">
        <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
          This case shows the value of having a proactive consultant who not only understands
          insurance products, but also the underlying financial and actuarial mechanisms.
          By combining negotiation, technical analysis, and transparent communication, we helped
          the client save meaningful costs and restore balance in their insurance portfolio.
        </p>

        <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
          In insurance management, numbers alone rarely tell the full story - context, accuracy,
          and dialogue make all the difference.
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="text-black/80 hover:text-black transition-colors inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-16 bg-[#12362a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-white text-3xl leading-tight">Facing Similar Challenges?</h2>
          <p className="!text-[14px] leading-6 text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you negotiate better terms with your insurers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
  onClick={() => window.history.back()}
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#12362a] transition-colors inline-flex items-center justify-center gap-2 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button className="bg-white text-[#12362a] px-6 py-3 rounded-lg hover:bg-[#f6efe2] transition-colors text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
