import { ArrowLeft, FileText, Search, AlertTriangle, CheckCircle } from "lucide-react";

interface CaseStudyLifeInsuranceTrapProps {
  onBack?: () => void;
}

export function CaseStudyLifeInsuranceTrap({ onBack }: CaseStudyLifeInsuranceTrapProps) {
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768826689/Gemini_Generated_Image_w49s7ow49s7ow49s_rnksot.webp"
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
            Avoiding a Costly Life Insurance Trap
          </h1>

          <p className="!text-[14px] leading-6 text-white/90 max-w-3xl">
            An expatriate was approached by an online broker promoting a "tax-saving" life insurance plan.
            The offer combined risk and savings components — but because he planned to stay in Switzerland only eight years, he would have lost around CHF 16,000 in unrecoverable costs.
            After reviewing the policy, we arranged a pure life insurance solution that met his needs precisely — protecting both his capital and his peace of mind.
          </p>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="py-12 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-0 text-[#12362a] text-2xl md:text-3xl leading-tight">
            Life insurance is good, isn't it?
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
                  A client reached out after receiving an unsolicited call from an online insurance broker offering what appeared to be a highly attractive deal — a "tax-optimized life insurance plan."
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The product was presented as a combined life insurance policy that included both risk coverage (in case of death) and a savings component intended to generate tax advantages. The broker strongly emphasized the supposed "tax savings", urging the client to subscribe quickly before the offer expired.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  At first glance, the proposal seemed reasonable, and the client almost signed. Fortunately, before committing, he decided to seek a second opinion.
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
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Challenge</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  On the surface, mixed life insurance policies can appear beneficial, especially when presented as "tax-efficient." Yet these products are long-term financial instruments, designed primarily for clients planning to remain in Switzerland for at least ten years.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  During the first decade, most of the premiums paid are allocated to fees, commissions, and acquisition costs — not to savings or investment. In this case, the client was an expatriate planning to live in Switzerland for a maximum of eight years. That single detail, ignored by the broker, completely changed the picture.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Had he accepted the offer, he would have contributed to the savings plan for eight years but recovered virtually nothing upon departure. Our analysis showed that he would have lost approximately CHF 16,000, effectively nullifying any tax advantage and leaving him financially worse off.
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
              <Search className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">Our Approach</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We started by conducting a detailed, impartial review of the policy. The contract combined three distinct elements:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    A standard risk coverage (death protection)
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    A capital accumulation mechanism invested in internal funds
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    A rigid lock-in period with high penalties for early exit
                  </li>
                </ul>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We then ran a financial projection based on his real timeline in Switzerland. The results confirmed our concern: the product was completely unsuitable for short- or medium-term residents.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We explained that while the risk portion of the policy made sense, the savings portion did not. The promised tax deduction, though genuine, would offer only a minor benefit compared to the potential capital loss.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  After reviewing our analysis, the client understood the long-term implications clearly and decided against signing the original contract.
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
                  We structured a new, transparent solution: a pure life insurance policy covering his genuine risk exposure during his years in Switzerland. This provided full protection for his family, at a much lower cost and with no binding lock-in period.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  In parallel, we guided him toward short-term, flexible investment alternatives for his savings — allowing him to preserve liquidity and repatriate funds easily when returning to his home country.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  This tailored approach resulted in savings exceeding CHF 16,000 compared to the original offer, while maintaining optimal coverage throughout his stay.
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
                This case reflects a growing issue in Switzerland: the aggressive marketing of complex "tax-saving" life insurance products to expatriates unfamiliar with local rules.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                By asking the right questions and focusing on the client's real timeline, we prevented a significant loss and delivered a simple, effective alternative.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                The success of this case was not defined by a product sold, but by a product avoided — and by the financial peace of mind that followed.
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
          <h2 className="mb-4 text-white text-3xl leading-tight">Considering Life Insurance in Switzerland?</h2>
          <p className="!text-[14px] leading-6 text-white/90 mb-8 max-w-2xl mx-auto">
            Let's review your options together and find the solution that truly fits your needs.
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
