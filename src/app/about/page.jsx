import Link from 'next/link';
import { Clock, TrendingUp, ArrowRight } from 'lucide-react';

// The requested Chess Knight inline SVG
const ChessKnight = ({ className }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} width="1em" height="1em">
    <path d="M384 224v128c0 17.7-14.3 32-32 32H314.7l-9.1-36.4c-4.4-17.6-20.2-29.6-38.3-29.6H136.2l34.5-98.6c18.5-52.9 82.5-103.5 137.9-103.5h18.6c13.8 0 26.6 8 32.8 20.8l20.4 42.1c8.7 18 13.6 37.8 13.6 57.8zM242.3 226.9l-58.8 16.8-7.9-22.6c-4.8-13.7 1-28.7 13.5-35l60.2-30.1-27-54.8zm-190.1 82L69 260.6c-6.1-17.5-6.1-36.5 0-54L83 166.5C40 186.2 12.5 228.3 4.2 274.6L0 298.5V384h320c17.7 0 32 14.3 32 32h-352c-17.7 0-32-14.3-32-32zm301.8 109.1H32c-17.7 0-32 14.3-32 32v16H384v-16c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-36 pb-32 bg-[#0a0a0a] text-white overflow-hidden relative">

      {/* SECTION 1: The Hero & Origin */}
      <section className="section-container relative mb-32 md:mb-40">
        <h1 className="text-left font-oswald text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] uppercase tracking-wider mb-16 md:mb-24 leading-[1.1] text-white border-l-[6px] md:border-l-[8px] border-primary pl-6 md:pl-10">
          BUILT ON DISCIPLINE.<br />
          <span className="text-tagOrange drop-shadow-[0_0_20px_rgba(246,92,10,0.5)]">ENGINEERED FOR GROWTH.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Premium Portrait */}
          <div className="relative aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl border border-white/5 order-2 lg:order-1 group">
            <div className="absolute inset-0 bg-[#111] bg-[url('/img/placeholder-hero.png')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 transition-transform duration-700 group-hover:-translate-y-2">
              <span className="font-oswald text-2xl lg:text-3xl uppercase tracking-widest text-[#f0f0f0] drop-shadow-md">Tofi Kichah</span>
              <p className="font-inter text-primary text-sm mt-1 uppercase tracking-widest font-bold">Full Stack Engineer</p>
            </div>
            {/* Soft background glow behind image (rendered outside flow) */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-tagOrange blur-[100px] opacity-[0.05] rounded-full pointer-events-none"></div>
          </div>

          {/* Right Side: Origin Text Block */}
          <div className="order-1 lg:order-2">
            <h2 className="font-oswald text-3xl uppercase tracking-widest text-white mb-8 border-l-4 border-primary pl-6">HOW IT STARTED</h2>
            <div className="font-inter text-gray-400 text-lg leading-relaxed space-y-6 font-light max-w-xl">
              <p>
                My journey into technology didn't start with a high-end setup. Growing up, my first PC was a low-spec machine that constantly needed cleaning, tweaking, and upgrading just to run. I became the designated IT guy for my family, but my curiosity went further—I was the kid taking apart microwaves and hairdryers just to see how the hardware communicated.
              </p>
              <p>
                Though I formally studied Renewable Energy Engineering, that urge to dismantle and rebuild complex systems never left. In 2022, I pivoted entirely into software, moving from Kotlin to mastering the modern web stack (React, Next.js, Node.js). For me, development isn't just a job; it is an endless landscape of learning where I can build entirely new digital machines from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Turning Point */}
      <section className="section-container relative mb-32 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Mission Text Block */}
          <div>
            <h2 className="font-oswald text-3xl uppercase tracking-widest text-white mb-8 border-l-4 border-tagOrange pl-6">WHY TOFIWEB EXISTS</h2>
            <div className="font-inter text-gray-400 text-lg leading-relaxed space-y-6 font-light max-w-xl">
              <p>
                A few years ago, I watched a close friend launch a business that ultimately failed. It wasn't because the product was bad; it was because of poor digital strategy, bad design decisions, and a lack of branding.
              </p>
              <p>
                Seeing that happen changed my perspective. I realized that a bad design—or even a beautiful website that is just too hard to navigate—isn't just a minor mistake. It costs real people their livelihoods. I built TofiWeb to help ambitious entrepreneurs all around the world thrive, ensuring that no great business idea ever fails because of a frustrating user experience.
              </p>
            </div>
          </div>

          {/* Right Side: Abstract Graphic / Quote */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center bg-[#111] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl p-8 lg:p-12">

            {/* Abstract Glow Rings */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[60%] h-[60%] rounded-full border border-primary/20 animate-[spin_25s_linear_infinite_reverse] pointer-events-none"></div>
            <div className="absolute inset-0 bg-radial-[50%_50%_at_50%_50%] from-primary/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              <span className="absolute -top-12 md:-top-20 text-[150px] md:text-[250px] font-oswald text-white/5 leading-none select-none pointer-events-none">"</span>
              <p className="font-oswald text-4xl md:text-5xl lg:text-5xl xl:text-[56px] text-[#F7F7F7] uppercase tracking-widest leading-tight relative mt-10">
                NO GREAT BUSINESS <br /> SHOULD FAIL BECAUSE <br /> OF <span className="text-primary drop-shadow-[0_0_15px_rgba(246,210,10,0.4)]">BAD UX</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Craftsman Behind the Screen */}
      <section className="section-container relative mb-32 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: 3 Stat Cards grids */}
          <div className="grid grid-cols-1 gap-6 order-2 lg:order-1">

            {/* Card 1 */}
            <div className="bg-[#111] p-6 lg:p-8 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-tagOrange/10 flex items-center justify-center shrink-0 group-hover:bg-tagOrange/20 transition-colors">
                <Clock className="text-tagOrange w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h4 className="font-inter font-bold text-white lg:text-xl uppercase tracking-widest mb-1">05:00 AM</h4>
                <p className="font-inter text-gray-500 font-medium text-sm lg:text-base">Daily Start / Disciplined Engineering</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111] p-6 lg:p-8 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ChessKnight className="text-primary text-2xl lg:text-3xl" />
              </div>
              <div>
                <h4 className="font-inter font-bold text-white lg:text-xl uppercase tracking-widest mb-1">Strategic Solving</h4>
                <p className="font-inter text-gray-500 font-medium text-sm lg:text-base">Complex Problems, Elegant Solutions</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111] p-6 lg:p-8 rounded-3xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl hover:-translate-y-1 transition-transform group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                <TrendingUp className="text-green-500 w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h4 className="font-inter font-bold text-white lg:text-xl uppercase tracking-widest mb-1">ROI-Focused</h4>
                <p className="font-inter text-gray-500 font-medium text-sm lg:text-base">Financial Data to Conversion Rates</p>
              </div>
            </div>

          </div>

          {/* Right Side: Craftsman Text */}
          <div className="order-1 lg:order-2">
            <h2 className="font-oswald text-3xl uppercase tracking-widest text-white mb-8 border-l-4 border-primary pl-6">BEYOND THE CODE</h2>
            <div className="font-inter text-gray-400 text-lg leading-relaxed space-y-6 font-light max-w-xl">
              <p>
                Discipline is the foundation of my work. My day starts at 5:00 AM to write code and build projects before heading to my day job as an accountant. That financial background gives me a unique edge in web development: I know that your website is an investment, and every line of code I write is focused on maximizing your return on that investment.
              </p>
              <p>
                When I step away from the keyboard, my mindset doesn't change. I stay sharp by solving chess puzzles, maintaining a strict 3-day full-body gym routine, and constantly pushing myself to learn. I am a problem-solver by nature, whether I am analyzing financial data or debugging a complex React application.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: The Philosophy & Final CTA */}
      <section className="section-container relative flex flex-col items-center text-center max-w-4xl mx-auto pt-24 border-t border-white/10">
        <h2 className="font-oswald text-3xl md:text-4xl uppercase tracking-widest text-gray-500 mb-8">The Philosophy</h2>
        <p className="font-inter text-2xl md:text-3xl text-white font-light leading-relaxed mb-6 italic border-l-4 md:border-l-0 md:border-b-4 border-primary pl-6 py-2 md:pl-0 md:pb-6 inline-block">
          "Be better today than I was yesterday."
        </p>
        <p className="font-inter text-gray-400 text-lg leading-relaxed max-w-3xl mb-16 font-light">
          I am constantly pushing my skills, transitioning from standard setups to high-performance, custom web applications. I put this relentless drive into every project I take on, with one ultimate goal: I want you to look back at your soaring conversion rates and know that hiring me was the best decision you made for your business.
        </p>

        <Link href="/contact" className="group flex flex-col sm:flex-row items-center justify-center gap-6 bg-primary text-black font-inter font-bold text-sm tracking-widest uppercase px-12 py-5 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(246,210,10,0.3)]">
          LET'S DISCUSS YOUR PROJECT
          <span className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <ArrowRight size={20} />
          </span>
        </Link>
      </section>

    </main>
  );
}
