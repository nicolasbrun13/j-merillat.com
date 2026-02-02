import { ArrowLeft, Globe, FileText, Users, CheckCircle } from "lucide-react";

interface CaseStudyMobilityOnboardingProps {
  onBack?: () => void;
}

export function CaseStudyMobilityOnboarding({ onBack }: CaseStudyMobilityOnboardingProps) {
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oklipsoklipsokli_dawovb.webp"
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
            Simplifying Employee Onboarding for a Multinational Company
          </h1>

          <p className="!text-[14px] leading-6 text-white/90 max-w-3xl">
            A multinational relocating employees to Switzerland faced repeated delays and inconsistencies in health insurance onboarding.
            We negotiated a group arrangement granting automatic acceptance for all new staff and family members, semi-private coverage, and no maternity waiting period — all at no cost to the employer.
            The result: faster onboarding, uniform benefits, and a smooth experience for HR and employees alike.
          </p>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="py-12 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-0 text-[#12362a] text-2xl md:text-3xl leading-tight">
            How to arrange health insurance for local contracts
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
                  A global company with operations in Switzerland was facing recurring challenges when onboarding employees relocating from abroad.
                  Each new arrival required a separate health insurance setup, often involving individual medical questionnaires, inconsistent acceptance conditions, and delays in activating supplementary coverage.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The process created uncertainty for both new employees and HR teams, leading to unequal protection across the organization.
                  Some employees obtained semi-private hospital coverage, while others faced exclusions or waiting periods — particularly for maternity benefits.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The company's management wanted a unified, reliable solution that would simplify onboarding, ensure consistent treatment for all staff, and reduce administrative work for HR.
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
              <Globe className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Challenge</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Under standard Swiss insurance rules, each insured person — including family members — must submit a health questionnaire when applying for supplementary coverage.
                  Based on this information, insurers can impose exclusions, waiting periods, or outright rejections.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  For a multinational hiring talent from around the world, this meant each relocation brought new administrative hurdles and unpredictable outcomes.
                  HR departments were spending hours chasing documents, managing correspondence, and reassuring employees anxious about incomplete insurance coverage.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The company needed a framework that would guarantee fast, uniform, and equitable coverage for every new hire, while avoiding additional costs or obligations for the employer.
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
                  We began with a detailed review of the company's relocation and employee benefits process.
                  The issue was not with the insurer's product itself, but with the lack of a corporate agreement — a structure that would allow all new employees to be accepted automatically, without individual health assessments.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  We engaged directly with several leading Swiss insurers and proposed a tailored group arrangement based on the company's profile, stability, and consistent inflow of expatriate employees.
                  Through careful negotiation, we secured an exceptional agreement that included:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Automatic acceptance for all new employees joining the Swiss entity
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Inclusion of family members under identical terms
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Coverage up to semi-private hospital class
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Immediate maternity benefits, with no waiting period
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Zero cost to the employer, maintaining voluntary employee participation
                  </li>
                </ul>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  This structure provided the company with the consistency and efficiency it needed, while also giving the insurer confidence through well-managed, high-quality risk selection.
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
                  The new agreement completely transformed the onboarding experience.
                  Every new employee now receives immediate, predictable insurance coverage from day one, with no risk of rejection or delay.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  For HR teams, administrative workload dropped significantly.
                  The process became faster, cleaner, and transparent — a key factor in strengthening the company's reputation as an employer that supports its international staff.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  At the same time, employees gained confidence and satisfaction, knowing that their health and family protection were guaranteed without additional effort or uncertainty.
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
                This project demonstrated how structured negotiation and independent consulting can bridge the gap between corporate needs and insurer capabilities.
                By aligning both sides' interests, we delivered a lasting solution that benefits everyone involved — a simple, elegant framework that ensures continuity, equality, and compliance across all new hires in Switzerland.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                And all of it achieved without a single additional cost to the employer.
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
          <h2 className="mb-4 text-white text-3xl leading-tight">Expanding Your Team in Switzerland?</h2>
          <p className="!text-[14px] leading-6 text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a seamless onboarding solution for your international employees.
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
