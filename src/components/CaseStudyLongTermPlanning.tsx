import { ArrowLeft, FileText, TrendingUp, Calculator, CheckCircle } from "lucide-react";

interface CaseStudyLongTermPlanningProps {
  onBack?: () => void;
}

export function CaseStudyLongTermPlanning({ onBack }: CaseStudyLongTermPlanningProps) {
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768830967/Gemini_Generated_Image_j74do8j74do8j74d_gvnxqc.webp"
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
            Planning Long-Term
          </h1>

          <p className="!text-[14px] leading-6 text-white/90 max-w-3xl">
            A couple in their forties had a well-structured health insurance plan — except for one overlooked detail: long-term pricing.
            Their insurer's premiums increased sharply with age, which would have cost them nearly CHF 400,000 more over their lifetime.
            By switching to a provider with capped age-based pricing, we secured lasting protection and major long-term savings, proving that true optimization comes from planning ahead.
          </p>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="py-12 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-0 text-[#12362a] text-2xl md:text-3xl leading-tight">
            The Hidden Cost of Not Planning Long-Term
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
                  A couple in their early forties had recently relocated to Switzerland and subscribed to health insurance through another broker.
                  The product they had chosen appeared sound — reputable insurer, good coverage, fair pricing, and no obvious issues at first glance.
                  However, one crucial question had never been asked: "How long do you plan to stay in Switzerland?"
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  At first, the question might seem irrelevant. But in the Swiss system, supplementary insurance premiums increase with age, usually in five-year increments.
                  This means that the long-term financial impact of a plan depends heavily on how long one intends to remain insured in Switzerland — a detail often overlooked by brokers focused on short-term sales.
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
              <TrendingUp className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Challenge</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  When we reviewed their policy, everything appeared reasonable in the present moment.
                  Their insurer offered excellent benefits and competitive pricing — up to a certain age.
                  After analyzing the full premium curve, we discovered that while the plan was very affordable until age 45, the cost increased sharply thereafter, continuing to rise every five years.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  For clients planning to leave Switzerland within a decade, this model might have been acceptable.
                  But this couple intended to make Switzerland their permanent home, meaning those increases would accumulate across decades — a hidden financial risk of enormous magnitude.
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
              <Calculator className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">Our Approach</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We began by projecting the couple's premium evolution year by year, assuming both remained insured until age 85.
                  This long-term simulation clearly revealed the total cost difference between their existing insurer and more stable alternatives.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We then compared multiple providers, focusing on those with age-cap systems — models where the premium increase stops after a certain age, typically between 50 and 55.
                  While the monthly price of such plans is slightly higher at the beginning, they remain far more economical over the long term.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Our objective was not just to find a "cheaper" option, but to identify the plan offering the best lifetime cost-to-coverage ratio.
                  We presented both scenarios to the clients: staying with their current insurer versus transitioning to one with capped age progression.
                  The results were unambiguous.
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
                  Although the new provider's premium was modestly higher in the present year, its price curve flattened after age 50 — meaning no further increases.
                  When we compared total lifetime premiums assuming both clients lived to 85, the projected difference exceeded CHF 400,000 (!!!!) in total savings.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The couple immediately decided to switch insurers.
                  We coordinated the entire transition, ensuring continuous coverage and no administrative disruption.
                  The process was completed swiftly, and the clients gained not only better financial security but also full understanding of how their insurance would evolve over time.
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
                This case perfectly illustrates how even a strong insurance product can become unsuitable if it's chosen without understanding the client's long-term goals.
                By focusing on lifecycle analysis rather than short-term pricing, we helped this couple secure the same level of protection — but at a fraction of the cost over their lifetime.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                True consulting is not about choosing between "good" and "bad" products — it's about identifying what remains right for decades, not just today.
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
          <h2 className="mb-4 text-white text-3xl leading-tight">Planning to Stay in Switzerland Long-Term?</h2>
          <p className="!text-[14px] leading-6 text-white/90 mb-8 max-w-2xl mx-auto">
            Let's analyze your insurance plan's lifetime cost and find the best long-term solution.
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
