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
    <section id="about" className="bg-[#12362a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <div className="text-[#cbd8c3] mb-4 tracking-wider" style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.1em' }}>
              OUR VALUES
            </div>
            <h2 className="text-white mb-6">
              Built on trust, driven by integrity
            </h2>
            <p className="text-white/70" style={{ fontSize: '1rem', fontWeight: '300' }}>
              MÉRILLAT Consulting was founded on a simple premise: insurance consulting should 
              serve the client, not the insurer.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="border-l-2 border-[#cbd8c3]/30 pl-6">
                  <h3 className="text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70" style={{ fontSize: '1rem', fontWeight: '300', lineHeight: '1.6' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60 italic" style={{ fontSize: '1.125rem', fontWeight: '300', lineHeight: '1.7' }}>
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
