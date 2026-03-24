import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="snap-start pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 bg-[#0a0a0a] text-offwhite relative">
      <div className="section-container">
        <div className="text-center mb-24">
          <SectionHeading>Let's Work Together</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Area */}
          <div className="p-12 md:p-16 rounded-4xl bg-linear-to-br from-green-950 via-teal-900 to-emerald-950 text-offwhite flex flex-col justify-between overflow-hidden relative shadow-2xl min-h-125">
            <div className="absolute top[-20%] right-[-10%] w-75 h-75 bg-primary blur-[120px] opacity-20 rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="font-oswald text-4xl md:text-5xl uppercase tracking-wider mb-6 text-offwhite leading-tight">Let's build fire</h3>
              <p className="font-inter text-lg text-gray-300 leading-relaxed max-w-xs font-light">
                Have a project that needs high performance and bold design? I am currently available for freelance work.
              </p>
            </div>

            <div className="mt-16 relative z-10">
              <ul className="flex flex-col gap-5 font-inter text-lg font-medium">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Email Me</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Twitter / X</a></li>
              </ul>
            </div>
          </div>

          {/* Right Area - Form */}
          <div className="flex items-center w-full">
            <form className="w-full flex flex-col gap-8 bg-offwhite p-10 md:p-14 rounded-4xl border border-gray-300 shadow-xl shadow-black/5 text-black">
              <div>
                <label className="block font-inter text-sm font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-2 font-inter text-lg transition-colors placeholder:text-gray-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block font-inter text-sm font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-2 font-inter text-lg transition-colors placeholder:text-gray-400" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block font-inter text-sm font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-2 font-inter text-lg transition-colors placeholder:text-gray-400" placeholder="Web Design Inquiry" />
              </div>
              <div>
                <label className="block font-inter text-sm font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full bg-transparent border-b-2 border-gray-300 focus:border-black outline-none py-2 font-inter text-lg transition-colors resize-none placeholder:text-gray-400" placeholder="Hello, I'd like to work with you on..."></textarea>
              </div>
              <button type="button" className="self-start bg-black text-primary font-inter font-bold text-sm tracking-widest uppercase px-12 py-5 rounded-full hover:bg-gray-900 transition-colors duration-300 mt-2 shadow-xl border border-transparent">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
