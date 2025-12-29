export function Expertise() {
  const expertiseAreas = [
    {
      title: "Risk Analysis",
      description: "Comprehensive evaluation of your exposure to identify opportunities for optimization and protection."
    },
    {
      title: "Strategic Advisory",
      description: "Independent guidance aligned with your long-term objectives, free from commercial conflicts of interest."
    },
    {
      title: "Portfolio Management",
      description: "Continuous monitoring and adjustment of your insurance program to ensure optimal coverage and cost efficiency."
    },
    {
      title: "Claims Support",
      description: "Expert assistance throughout the claims process to protect your interests and ensure fair settlements."
    }
  ];

  return (
    <section id="expertise" className="bg-[#f6efe2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="text-[#cbd8c3] mb-4 tracking-wider" style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.1em' }}>
              OUR APPROACH
            </div>
            <h2 className="text-[#12362a] mb-6">
              Quiet expertise, lasting impact
            </h2>
            <p className="text-[#12362a]/70 mb-6">
              In a complex insurance landscape, independence is not just a principle—it is your protection. 
              We navigate the intricacies of risk with precision and discretion, ensuring that every decision 
              serves your interests alone.
            </p>
            <p className="text-[#12362a]/70">
              Our approach combines deep market knowledge with Swiss values of integrity and excellence, 
              delivering clarity where others see complexity.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#cbd8c3]/30 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="300" height="300" viewBox="0 0 300 300" className="text-[#12362a]/20">
                  {/* Decorative mountain illustration */}
                  <path
                    d="M 0 200 Q 50 120, 100 140 Q 150 80, 200 120 Q 250 100, 300 160 L 300 300 L 0 300 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 0 220 Q 60 160, 120 180 Q 180 140, 240 180 Q 280 160, 300 200 L 300 300 L 0 300 Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                  {/* Mountain outline */}
                  <path
                    d="M 50 200 L 100 120 L 150 160 M 150 140 L 200 80 L 250 140"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="border-t border-[#12362a]/20 pt-6">
                <div className="text-[#12362a] mb-4" style={{ fontSize: '1.25rem', fontWeight: '400' }}>
                  {area.title}
                </div>
                <p className="text-[#12362a]/60" style={{ fontSize: '0.95rem', fontWeight: '300', lineHeight: '1.6' }}>
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
