import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
<section id="contact" className="bg-[#f6efe2] pt-12 md:pt-24 pb-24">
  <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl mx-auto px-4 sm:px-6 md:px-6">
    <div className="grid md:grid-cols-2 gap-12 sm:gap-16">

      {/* Contact Information */}
      <div>
        <div
          className="hidden sm:block text-[#cbd8c3] mb-3 sm:mb-4 tracking-wider text-xs sm:text-sm font-medium"
        >
          GET IN TOUCH
        </div>

        <h2 className="text-[#12362a] mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-normal">
          Start a conversation
        </h2>

        <p className="hidden sm:block text-[#12362a]/70 mb-8 sm:mb-12 text-sm sm:text-base md:text-base font-light leading-relaxed">
          Whether you're seeking guidance on a specific challenge or exploring how independent
          consulting can benefit your organization, we're here to help.
        </p>

        <div className="space-y-5 sm:space-y-6">

          {/* Email */}
          <div className="flex items-start gap-3 sm:gap-4">
            <Mail className="w-5 h-5 text-[#12362a]/60 mt-1" />
            <div>
              <div className="text-[#12362a]/50 mb-0.5 text-xs sm:text-sm font-normal">
                Email
              </div>
              <a
                href="mailto:contact@merillat-consulting.ch"
                className="text-[#12362a] hover:text-[#cbd8c3] transition-colors text-xs sm:text-sm md:text-base block"
              >
                contact@merillat-consulting.ch
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 sm:gap-4">
            <Phone className="w-5 h-5 text-[#12362a]/60 mt-1" />
            <div>
              <div className="text-[#12362a]/50 mb-0.5 text-xs sm:text-sm font-normal">
                Phone
              </div>
              <a
                href="tel:+41123456789"
                className="text-[#12362a] hover:text-[#cbd8c3] transition-colors text-xs sm:text-sm md:text-base block"
              >
                +41 12 345 67 89
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 sm:gap-4">
            <MapPin className="w-5 h-5 text-[#12362a]/60 mt-1" />
            <div>
              <div className="text-[#12362a]/50 mb-0.5 text-xs sm:text-sm font-normal">
                Address
              </div>
              <div className="text-[#12362a] text-xs sm:text-sm md:text-base leading-relaxed">
                Bahnhofstrasse 123<br />
                8001 Zürich<br />
                Switzerland
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-4 sm:p-6 md:p-8 shadow-sm rounded-md">
        <form className="space-y-4 sm:space-y-5 md:space-y-6">

          <div>
            <label
              htmlFor="name"
              className="block text-[#12362a] mb-1 sm:mb-2 text-sm sm:text-base font-normal"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a] text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#12362a] mb-1 sm:mb-2 text-sm sm:text-base font-normal"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a] text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[#12362a] mb-1 sm:mb-2 text-sm sm:text-base font-normal"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a] text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#12362a] mb-1 sm:mb-2 text-sm sm:text-base font-normal"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a] text-sm sm:text-base resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#12362a] text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 hover:bg-[#cbd8c3] hover:text-[#12362a] transition-all duration-300 text-sm sm:text-base font-normal"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  </div>
</section>


  );
}
