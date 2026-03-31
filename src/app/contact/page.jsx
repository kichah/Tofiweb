import { Star } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-offwhite pt-32 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary blur-[150px] opacity-[0.08] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="section-container relative z-10 w-full max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="font-inter text-sm md:text-base text-primary uppercase tracking-[0.2em] font-bold mb-4">Start A Project</p>
          <h1 className="font-oswald text-5xl md:text-7xl uppercase tracking-wider mb-6 leading-tight drop-shadow-md">
            Let's build something <span className="text-tagOrange drop-shadow-[0_0_20px_rgba(246,92,10,0.5)]">extraordinary</span>
          </h1>
          <p className="font-inter text-lg lg:text-xl text-gray-400 font-light border-l-[3px] border-primary pl-6 py-2">
            I personally read and reply to every message within 24 hours. Whether you are ready to build a complete digital storefront, or you just have a quick question about your current website, I am here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 xl:gap-16">

          {/* Left: Discovery Form (Col Span 3) */}
          <div className="lg:col-span-3">
            <form className="w-full flex flex-col gap-8 bg-[#111] p-8 md:p-12 xl:p-16 rounded-[40px] border border-white/5 shadow-2xl">
              <h3 className="font-oswald text-3xl uppercase tracking-widest text-white mb-2 border-b border-white/5 pb-6">Project Discovery</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <label className="block font-inter text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full bg-black/40 border border-white/10 rounded-xl focus:border-primary outline-none px-6 py-4 font-inter text-base transition-all focus:shadow-[0_0_15px_rgba(246,210,10,0.15)] placeholder:text-gray-600 text-white focus:placeholder:text-gray-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block font-inter text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full bg-black/40 border border-white/10 rounded-xl focus:border-primary outline-none px-6 py-4 font-inter text-base transition-all focus:shadow-[0_0_15px_rgba(246,210,10,0.15)] placeholder:text-gray-600 text-white focus:placeholder:text-gray-500" placeholder="john@example.com" />
                </div>
              </div>

              <div className="text-left">
                <label className="block font-inter text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3" htmlFor="projectType">What are you looking to build?</label>
                <div className="relative">
                  <select id="projectType" defaultValue="" className="w-full bg-black/90 border border-white/10 rounded-xl focus:border-primary outline-none px-6 py-4 font-inter text-base transition-all appearance-none text-white focus:shadow-[0_0_15px_rgba(246,210,10,0.15)]">
                    <option value="" disabled className="text-gray-300 font-light">Select a project type...</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="webapp">Web App</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="brand">Brand Strategy / Identity</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>

              <div className="text-left">
                <label className="block font-inter text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3" htmlFor="budget">Where is your business currently on its journey?</label>
                <div className="relative">
                  <select id="budget" defaultValue="" className="w-full bg-black/90 border border-white/10 rounded-xl focus:border-primary outline-none px-6 py-4 font-inter text-base transition-all appearance-none text-white focus:shadow-[0_0_15px_rgba(246,210,10,0.15)]">
                    <option value="" disabled className="text-gray-600 font-light">Select your business stage...</option>
                    <option value="new">We are launching a brand new business.</option>
                    <option value="upgrade">We have some sales, looking to upgrade our current site.</option>
                    <option value="scaling">We are an established brand scaling up our operations.</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>

              <div className="text-left">
                <label className="block font-inter text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3" htmlFor="goals">Tell me about your business and goals</label>
                <textarea id="goals" rows="6" className="w-full bg-black/40 border border-white/10 rounded-xl focus:border-primary outline-none px-6 py-4 font-inter text-base transition-all focus:shadow-[0_0_15px_rgba(246,210,10,0.15)] resize-none placeholder:text-gray-600 text-white focus:placeholder:text-gray-500" placeholder="What are the main bottlenecks preventing you from scaling right now?"></textarea>
              </div>

              <button type="button" className="cursor-pointer self-start bg-primary text-black font-inter font-bold text-sm tracking-widest uppercase px-12 py-5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 mt-2 shadow-[0_0_20px_rgba(246,210,10,0.2)]">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

          {/* Right: Social Proof & Direct Booking (Col Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Social Proof Testimonial */}
            <div className="min-h-fit bg-[#111] p-8 xl:p-10 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-tagOrange blur-[60px] opacity-20 rounded-full pointer-events-none"></div>

              <div className="flex gap-1 text-primary mb-6">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="font-inter text-gray-300 text-[15px] xl:text-[17px] leading-relaxed italic mb-8 relative z-10">
                "Working with Tofi transformed our jewelry brand. The new storefront is flawlessly elegant and our conversion rates have completely doubled since launch."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/5 shrink-0">
                  <img src="https://i.pravatar.cc/150?u=sarah_jewelry" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white text-sm">Sarah Jenkins</h4>
                  <p className="font-inter text-gray-500 text-xs mt-1">Founder, Aurelia Gems</p>
                </div>
              </div>
            </div>

            {/* Direct Booking Embed */}
            <div className="bg-[#111] p-8 xl:p-10 rounded-[40px] border border-white/5 shadow-2xl flex flex-col h-full relative overflow-hidden">
              <h3 className="font-oswald text-3xl uppercase tracking-wide text-white mb-3">Direct Booking</h3>
              <p className="font-inter text-gray-400 text-sm mb-8 leading-relaxed">
                Skip the emails entirely. Book a free 30-minute discovery call directly on my calendar below.
              </p>

              {/* Calendly Inline Widget Placeholder */}
              <div className="w-full grow min-h-[350px] bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-inner border border-white/5 relative">
                {/* Replace src with actual calendly link */}
                <iframe
                  src="https://calendly.com/abdellatifkichah/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f6d20a"
                  width="100%"
                  height="100%"
                  className="w-full h-full absolute inset-0 border-none"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
