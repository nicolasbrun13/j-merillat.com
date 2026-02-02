const expertiseImage = "https://res.cloudinary.com/df9tcmyq5/image/upload/v1768217068/EXPERTISE_ngspfs.webp";

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
    <section id="expertise" className="bg-[#f6efe2] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro + Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-20">
          <div>
            <div className="text-[#cbd8c3] mb-3 md:mb-4 tracking-wider text-xs md:text-sm font-medium">
              OUR APPROACH
            </div>
            <h2 className="text-[#12362a] mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl font-normal">
              Quiet expertise, lasting impact
            </h2>
<p className="hidden sm:block !text-xs md:!text-sm lg:!text-base text-[#12362a]/70 mb-4 leading-relaxed">
  In a complex insurance landscape, independence is not just a principle - it is your protection. 
  We navigate the intricacies of risk with precision and discretion, ensuring that every decision 
  serves your interests alone.
</p>

<p className="hidden sm:block !text-xs md:!text-sm lg:!text-base text-[#12362a]/70 leading-relaxed">
  Our approach combines deep market knowledge with Swiss values of integrity and excellence, 
  delivering clarity where others see complexity.
</p>


          </div>
          <div className="relative">
            <div className="aspect-video md:aspect-square bg-[#cbd8c3]/30 rounded-sm relative overflow-hidden">
              <img 
                src={expertiseImage} 
                alt="Professional consulting" 
                className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-110 hover:brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="border-t border-[#12362a]/20 pt-4 sm:pt-6">
                <div className="text-[#12362a] mb-2 sm:mb-3 text-base md:text-xl font-medium" style={{ textShadow: '0 0 20px rgba(203, 216, 195, 0.5), 0 0 40px rgba(203, 216, 195, 0.3)' }}>
                  {area.title}
                </div>
<p className="!text-xs md:!text-sm lg:!text-base text-[#12362a]/60 font-light leading-relaxed">
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