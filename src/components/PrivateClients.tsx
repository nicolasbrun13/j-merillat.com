import { ArrowRight, Search, FileText, CheckCircle, Heart, Home, Shield, Briefcase } from "lucide-react";
import heroImage from "figma:asset/d5fb6b30c147e2d508ae29b75a7835436506658c.png";

export function PrivateClients() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#12362a] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Swiss landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="mb-6 text-white">
            Tailored Insurance Solutions for Life in Switzerland
          </h1>
          <p className="text-xl text-white/90 mb-8">
            From health and accident coverage to pension coordination, we make Swiss insurance clear, efficient, and adapted to your lifestyle
          </p>
          <p className="text-white/80 max-w-3xl mx-auto">
            Whether newly arrived or long established, choosing the right insurance can be complex. We simplify it — helping you protect what matters while avoiding unnecessary costs.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">How We Work</h2>
            <p className="text-lg max-w-4xl mx-auto text-[#12362a]/80">
              Our process is built for efficiency, precision, and peace of mind. Each stage — from discovery to implementation — follows a proven framework that minimizes delays and ensures every client receives clear answers, accurate comparisons, and seamless execution. Behind the simplicity lies a meticulous system designed to save time and eliminate uncertainty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg border border-[#cbd8c3]">
              <div className="w-12 h-12 bg-[#12362a] rounded-full flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4">Step 1 — Discovery</h3>
              <p className="text-[#12362a]/70">
                We begin by understanding your situation, priorities, and objectives. This first conversation allows us to identify your exact needs and define a clear strategy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg border border-[#cbd8c3]">
              <div className="w-12 h-12 bg-[#12362a] rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4">Step 2 — Analysis</h3>
              <p className="text-[#12362a]/70">
                We compare leading Swiss insurers, review coverage options, and highlight gaps or overlaps. Our goal: complete clarity before any decision is made.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg border border-[#cbd8c3]">
              <div className="w-12 h-12 bg-[#12362a] rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4">Step 3 — Implementation</h3>
              <p className="text-[#12362a]/70">
                Once the plan is defined, we coordinate directly with insurers and handle all administration. You receive a complete, compliant setup — with follow-up support whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-lg text-[#12362a]/80">
              Comprehensive coverage, tailored to every aspect of life in Switzerland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Health */}
            <div className="group p-8 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Heart className="w-6 h-6 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-3">Health</h3>
                  <p className="text-[#12362a]/70">
                    We compare and structure both basic and supplementary health coverage, ensuring the right balance between benefits, flexibility, and cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Things */}
            <div className="group p-8 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Home className="w-6 h-6 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-3">Things</h3>
                  <p className="text-[#12362a]/70">
                    From cars and homes to valuables and travel, we provide clear, optimized solutions that protect what matters without unnecessary extras.
                  </p>
                </div>
              </div>
            </div>

            {/* Life & Income */}
            <div className="group p-8 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Shield className="w-6 h-6 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-3">Life & Income</h3>
                  <p className="text-[#12362a]/70">
                    Tailored plans that secure your income, family, and long-term stability in the event of illness, accident, or loss of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialized */}
            <div className="group p-8 rounded-lg border border-[#cbd8c3] hover:border-[#12362a] transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#cbd8c3] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#12362a] transition-colors">
                  <Briefcase className="w-6 h-6 text-[#12362a] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="mb-3">Specialized</h3>
                  <p className="text-[#12362a]/70">
                    Business, legal, travel, or high-value asset protection — we design individual solutions for unique requirements and international lifestyles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#f6efe2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">Case Studies</h2>
            <p className="text-lg mb-4 text-[#12362a]/80">
              Real results for individuals and families who needed clarity and confidence.
            </p>
            <p className="text-[#12362a]/70 max-w-4xl mx-auto">
              Every client's situation is unique — but the challenges are often similar: complexity, confusion, and unnecessary cost. These examples illustrate how a structured, independent approach can transform uncertainty into clarity. Our role is simple: to understand, simplify, and deliver the right protection — quickly, precisely, and without compromise.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-[#12362a]/80">
              Enjoy our last case studies below.
            </p>
          </div>

          {/* Case Studies Grid - Placeholder for future case studies */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-[#cbd8c3] rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Case study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-3">Expat Family Relocation</h3>
              <p className="text-[#12362a]/70 mb-4">
                Complete insurance setup for a family of four moving to Geneva — from health coverage to home and liability insurance.
              </p>
              <button className="text-[#12362a] hover:text-[#12362a]/70 transition-colors flex items-center gap-2">
                Read case study <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-[#cbd8c3] hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-[#cbd8c3] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-[#12362a]/40">Case Study Image</span>
              </div>
              <h3 className="mb-3">Pension Optimization</h3>
              <p className="text-[#12362a]/70 mb-4">
                Strategic restructuring of retirement planning for a Swiss professional, reducing costs while improving coverage.
              </p>
              <button className="text-[#12362a] hover:text-[#12362a]/70 transition-colors flex items-center gap-2">
                Read case study <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#12362a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-white">Ready to Simplify Your Insurance?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's start with a clear conversation about your needs and priorities.
          </p>
          <button className="bg-white text-[#12362a] px-8 py-4 rounded-lg hover:bg-[#f6efe2] transition-colors inline-flex items-center gap-2">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
