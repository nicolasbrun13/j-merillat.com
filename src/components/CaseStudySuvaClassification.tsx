import { ArrowLeft, Building2, FileText, Users, CheckCircle } from "lucide-react";

interface CaseStudySuvaClassificationProps {
  onBack?: () => void;
}

export function CaseStudySuvaClassification({ onBack }: CaseStudySuvaClassificationProps) {
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
            src="https://res.cloudinary.com/df9tcmyq5/image/upload/v1768821879/Gemini_Generated_Image_oxoghvoxoghvoxog_eqcevv.webp"
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
            Reducing Costs Through Correct Classification After a Corporate Split
          </h1>

          <p className="!text-[14px] leading-6 text-white/90 max-w-3xl">
            After a corporate split, a large Swiss company continued to insure all employees under SUVA.
            We identified that administrative and HR roles were not legally SUVA-mandatory and transferred them to private coverage — maintaining the same protection at a lower cost.
            The company now saves several thousand francs per year, all while remaining fully compliant with Swiss accident insurance law.
          </p>
        </div>
      </section>

      {/* Key Question Section */}
      <section className="py-12 bg-[#f6efe2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-0 text-[#12362a] text-2xl md:text-3xl leading-tight">
            SUVA mandate?
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
                  Following a recent corporate split, a large industrial company in Switzerland continued insuring all of its employees under SUVA, the Swiss National Accident Insurance Fund.
                  While this arrangement had originally been correct for the unified entity, the new structure included a wide range of roles — from factory and technical staff to administrative, HR, and finance personnel.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Under Swiss law, not all employees are required to be insured through SUVA.
                  Administrative and office-based staff can often be covered by private accident insurers instead, usually at significantly lower premiums.
                  However, this distinction had been overlooked during the organizational transition.
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
              <Building2 className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl leading-tight">The Challenge</h2>

              <div className="space-y-4">
                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  In the aftermath of the split, the company simply continued its previous insurance arrangements without reassessing eligibility under SUVA regulations.
                  As a result, it was paying accident insurance premiums for categories of employees who no longer fell within SUVA's mandatory scope.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The error was not intentional — but it was costly.
                  With hundreds of employees across various functions, this misclassification translated into several thousand francs in unnecessary premiums each year.
                  At the same time, the company remained unaware that simpler, equally compliant options existed for these office-based roles.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The challenge was therefore twofold:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    To identify which employee categories were still legally bound to SUVA coverage.
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    To transition eligible groups to private accident insurance — without disrupting operations or benefits continuity.
                  </li>
                </ul>
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
                  We began by conducting a full audit of employee classifications, comparing job functions with SUVA's official eligibility framework.
                  Each department was analyzed according to activity type, exposure risk, and physical work environment.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The results were clear:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Technical and production employees remained SUVA-mandatory.
                  </li>
                  <li className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                    Administrative, HR, and finance personnel could be legally insured through a private provider instead.
                  </li>
                </ul>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Once these groups were identified, we prepared a compliance report for management and liaised directly with SUVA to confirm the eligibility change.
                  With SUVA's acknowledgment, we then negotiated an equivalent private accident insurance contract offering the same protection level, but with notably lower premiums.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  Throughout the process, our focus remained on transparency and seamless execution.
                  Employees were informed clearly of the change, ensuring they maintained uninterrupted coverage and identical claims procedures.
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
                  The reclassification and transition were completed smoothly, without administrative friction or employee concern.
                  The company achieved annual savings of several thousand francs — while remaining fully compliant with Swiss accident insurance law.
                </p>

                <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                  The HR and finance departments welcomed the simplification: premium management became clearer, billing was consolidated, and all policy documentation aligned with the new corporate structure.
                  Most importantly, every employee continued to enjoy the same level of protection, now through the most appropriate and cost-efficient insurer.
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
                This case highlights the importance of reviewing insurance structures after corporate reorganizations.
                Even small regulatory oversights can lead to significant, recurring costs over time.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                By combining legal understanding with practical negotiation, we helped the company restore compliance, reduce costs, and improve internal clarity — achieving measurable results without compromising employee protection.
              </p>

              <p className="!text-[14px] leading-6 !text-[#12362a] !opacity-80">
                What began as a technical correction became a lasting source of efficiency and financial savings.
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
          <h2 className="mb-4 text-white text-3xl leading-tight">Need Help With Insurance Classification?</h2>
          <p className="!text-[14px] leading-6 text-white/90 mb-8 max-w-2xl mx-auto">
            Let's review your employee insurance structure to ensure compliance and cost-efficiency.
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
