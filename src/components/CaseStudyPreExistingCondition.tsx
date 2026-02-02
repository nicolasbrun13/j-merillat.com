import { ArrowLeft, FileText, Users, Shield, CheckCircle } from "lucide-react";

interface CaseStudyPreExistingConditionProps {
  onBack?: () => void;
}

export function CaseStudyPreExistingCondition({ onBack }: CaseStudyPreExistingConditionProps) {
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768831370/Gemini_Generated_Image_esrklwesrklwesrk_fzervj.webp"
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
            Pre-Existing Condition?
          </h1>

          <p className="!text-[14px] leading-6 text-white/90 max-w-3xl">
            A family relocating to Switzerland faced repeated rejections from insurers due to their daughter's pre-existing medical condition.
            By carefully restructuring their file, consolidating medical information, and presenting the case as a complete family package, we obtained full acceptance and comprehensive supplementary coverage.
            This ensured seamless protection from day one — a result few insurers would have granted under normal circumstances.
          </p>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="py-12 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-0 text-[#12362a] text-2xl md:text-3xl leading-tight">
            Securing Full Family Coverage Despite a Pre-Existing Condition
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
                  A family relocating from the United States to Switzerland reached out to us.
                  Both parents were employed, and their daughter — an active, bright teenager — had a pre-existing medical condition that required regular treatment.
                  Although the family had organized most of their relocation, they quickly discovered that finding adequate health insurance coverage in Switzerland was far more complex than anticipated.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Switzerland's health insurance system, while highly efficient, is also strictly regulated.
                  Basic insurance (LAMal) is mandatory for everyone residing in the country, but supplementary insurance is granted on a case-by-case basis and often requires a health questionnaire.
                  In this family's case, several insurers had already declined supplementary coverage because of the daughter's medical history — leaving the family anxious about potential costs and gaps in protection.
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
              <Shield className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Challenge</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The key issue was not only the medical condition itself, but the way the family's application had been presented.
                  Like many newcomers, they had approached insurers separately, submitting fragmented medical information without proper context or documentation.
                  This led to automatic rejections, as underwriting departments often prefer to decline rather than take risks on incomplete or unclear cases.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Moreover, time was running short — under Swiss law, all new residents must secure health insurance within three months of arrival.
                  The family needed a solution that would not only provide complete coverage but also restore their sense of security as they settled into their new life.
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
                  The first step was to understand the full picture — both medically and administratively.
                  We gathered all relevant details regarding the daughter's condition, treatment plan, and recent medical reports.
                  Our goal was to provide insurers with a precise, transparent, and reassuring file rather than a vague declaration.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We then reviewed all available insurers, identifying those with a reputation for flexibility and pragmatic underwriting.
                  Instead of submitting separate individual applications, we proposed that the family be evaluated as a unit — allowing the insurer to assess the overall risk across the entire household rather than focusing solely on one member's medical profile.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We drafted a professional medical summary in collaboration with the parents, clearly explaining the stability of the daughter's condition and her excellent treatment record.
                  The tone and structure of the documentation were crucial: complete enough to satisfy medical scrutiny, yet concise and confident enough to inspire trust.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Once the file was complete, we presented it directly to a senior underwriter at one of Switzerland's leading health insurers — with whom we maintain a strong professional relationship.
                  We clarified that this was a long-term, relocating family seeking stability, not a short-term opportunistic move.
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
                  After careful review, the insurer agreed to accept the entire family under one policy, with full supplementary coverage.
                  The decision was based not only on the medical facts but on the clear, professional presentation of the case and the transparent dialogue we established between all parties.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  This outcome was exceptional — in most cases, insurers either reject such applications or impose exclusions and waiting periods.
                  Instead, the family received comprehensive coverage from day one, ensuring access to private care and specialists as needed, without administrative obstacles.
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
                Beyond the technical success, the emotional impact for the family was significant.
                They arrived in Switzerland able to focus on their new environment, work, and education — free from the stress of navigating medical bureaucracy.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                For us, this case illustrated the true value of independent consulting:
                when expertise, precision, and empathy come together, even the most complex situations can be resolved to everyone's satisfaction.
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
          <h2 className="mb-4 text-white text-3xl leading-tight">Relocating with a Pre-Existing Condition?</h2>
          <p className="!text-[14px] leading-6 text-white/90 mb-8 max-w-2xl mx-auto">
            Let's work together to secure the comprehensive coverage your family deserves.
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
