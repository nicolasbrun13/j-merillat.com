export function About() {
  const values = [
    {
      title: "Independence",
      description: "No affiliations, no commissions—only advice aligned with your interests."
    },
    {
      title: "Expertise",
      description: "Decades of experience navigating the Swiss and international insurance markets."
    },
    {
      title: "Discretion",
      description: "Confidentiality and professionalism in every engagement."
    }
  ];

  return (
    <section id="about" className="bg-[#12362a] text-white py-8 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-5 gap-8 md:gap-16">
      <div className="md:col-span-2">
        <div className="text-[#cbd8c3] mb-3 md:mb-4 tracking-wider text-xs md:text-sm font-medium">
          OUR VALUES
        </div>
        <h2 className="text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl font-normal">
          Built on trust, driven by integrity
        </h2>
        <p className="text-white/70 text-sm md:text-base font-light">
          MÉRILLAT Consulting was founded on a simple premise: insurance consulting should 
          serve the client, not the insurer.
        </p>
      </div>
      <div className="md:col-span-3">
        <div className="space-y-6 md:space-y-8">
          {values.map((value, index) => (
            <div key={index} className="border-l-2 border-[#cbd8c3]/30 pl-4 md:pl-6">
              <h3 className="text-white mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl font-normal">
                {value.title}
              </h3>
              <p className="!text-xs md:!text-sm lg:!text-base text-white/70 font-light leading-relaxed">
  {value.description}
</p>

            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
          <p className="text-white/60 italic text-base md:text-lg font-light leading-relaxed">
            "In complexity, we find clarity. In independence, we build trust. 
            In every decision, we protect what matters most."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
