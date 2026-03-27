import SectionHeading from './SectionHeading';
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 bg-[#0a0a0a] text-offwhite relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Area */}
          <div className="flex flex-col justify-between text-white h-full">
            <div>
              <p className="font-inter text-sm md:text-base text-gray-500 uppercase tracking-[0.2em] font-bold mb-4 mt-2">Let's work together</p>
              <h3 className="font-oswald text-5xl md:text-6xl lg:text-[72px] uppercase tracking-wider mb-6 leading-[1.05]">
                Let's build <span className='text-primary drop-shadow-[0_0_15px_rgba(246,210,10,0.3)]'>fire</span>
              </h3>
              <p className="font-inter text-lg text-gray-400 leading-relaxed max-w-md font-light mb-12">
                Ready to upgrade your digital storefront? Let's discuss your brand, your goals, and how we can build a high-converting experience. Drop me a message or connect directly below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {/* WhatsApp Card */}
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <Phone size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-sm group-hover:text-green-400 transition-colors">WhatsApp</h4>
                    <p className="font-inter text-gray-400 text-xs mt-1">+1 (234) 567 890</p>
                  </div>
                </a>

                {/* Email Card */}
                <a href="mailto:hello@tofi.com" className="group bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-sm group-hover:text-primary transition-colors">Email</h4>
                    <p className="font-inter text-gray-400 text-xs mt-1">hello@tofi.com</p>
                  </div>
                </a>

                {/* Instagram Card */}
                <a href="https://instagram.com/tofikichah" target="_blank" rel="noopener noreferrer" className="group bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-sm group-hover:text-pink-400 transition-colors">Instagram</h4>
                    <p className="font-inter text-gray-400 text-xs mt-1">@tofikichah</p>
                  </div>
                </a>

                {/* Facebook Card */}
                <a href="https://facebook.com/tofikichah" target="_blank" rel="noopener noreferrer" className="group bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Facebook size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-white text-sm group-hover:text-blue-400 transition-colors">Facebook</h4>
                    <p className="font-inter text-gray-400 text-xs mt-1">Tofi Kichah</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Area - Form */}
          <div className="flex items-center w-full">
            <form className="w-full flex flex-col gap-8 bg-[#222222] p-8 xl:p-14 rounded-4xl border border-white/5 shadow-2xl text-white min-h-[50dvh]">
              <div>
                <label className="block font-inter text-sm font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full bg-transparent border-b-2 border-[#444] focus:border-primary outline-none py-2 font-inter text-lg transition-all focus:shadow-[0_4px_15px_-3px_rgba(246,210,10,0.15)] placeholder:text-gray-600 focus:placeholder:text-gray-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block font-inter text-sm font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border-b-2 border-[#444] focus:border-primary outline-none py-2 font-inter text-lg transition-all focus:shadow-[0_4px_15px_-3px_rgba(246,210,10,0.15)] placeholder:text-gray-600 focus:placeholder:text-gray-400" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block font-inter text-sm font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="w-full bg-transparent border-b-2 border-[#444] focus:border-primary outline-none py-2 font-inter text-lg transition-all focus:shadow-[0_4px_15px_-3px_rgba(246,210,10,0.15)] placeholder:text-gray-600 focus:placeholder:text-gray-400" placeholder="Web Design Inquiry" />
              </div>
              <div>
                <label className="block font-inter text-sm font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full bg-transparent border-b-2 border-[#444] focus:border-primary outline-none py-2 font-inter text-lg transition-all focus:shadow-[0_4px_15px_-3px_rgba(246,210,10,0.15)] resize-none placeholder:text-gray-600 focus:placeholder:text-gray-400" placeholder="Hello, I'd like to work with you on..."></textarea>
              </div>
              <button type="button" className="cursor-pointer self-start bg-primary text-black font-inter font-bold text-sm tracking-widest uppercase px-12 py-5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 mt-auto shadow-[0_0_20px_rgba(246,210,10,0.2)]">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
