import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-[#f6efe2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="text-[#cbd8c3] mb-4 tracking-wider" style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.1em' }}>
              GET IN TOUCH
            </div>
            <h2 className="text-[#12362a] mb-8">
              Start a conversation
            </h2>
            <p className="text-[#12362a]/70 mb-12" style={{ fontSize: '1rem', fontWeight: '300' }}>
              Whether you're seeking guidance on a specific challenge or exploring how independent 
              consulting can benefit your organization, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-[#12362a]/60" />
                </div>
                <div>
                  <div className="text-[#12362a]/50 mb-1" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                    Email
                  </div>
                  <a href="mailto:contact@merillat-consulting.ch" className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
                    contact@merillat-consulting.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-5 h-5 text-[#12362a]/60" />
                </div>
                <div>
                  <div className="text-[#12362a]/50 mb-1" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                    Phone
                  </div>
                  <a href="tel:+41123456789" className="text-[#12362a] hover:text-[#cbd8c3] transition-colors" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
                    +41 12 345 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-[#12362a]/60" />
                </div>
                <div>
                  <div className="text-[#12362a]/50 mb-1" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                    Address
                  </div>
                  <div className="text-[#12362a]" style={{ fontSize: '1.125rem', fontWeight: '400' }}>
                    Bahnhofstrasse 123<br />
                    8001 Zürich<br />
                    Switzerland
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#12362a] mb-2" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#12362a] mb-2" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a]"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#12362a] mb-2" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#12362a] mb-2" style={{ fontSize: '0.875rem', fontWeight: '400' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-[#12362a]/20 focus:border-[#cbd8c3] focus:outline-none transition-colors bg-white text-[#12362a] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#12362a] text-white px-8 py-4 hover:bg-[#cbd8c3] hover:text-[#12362a] transition-all duration-300"
                style={{ fontSize: '1rem', fontWeight: '400' }}
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
