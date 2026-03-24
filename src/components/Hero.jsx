import { MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="snap-start relative min-h-dvh pt-24 pb-16 flex items-center justify-start overflow-hidden w-full border-b border-[#374151]">
      {/* Background image rectangle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] xl:w-[35%] lg:w-[45%] md:w-[60%] h-[105%] bg-darkGray rounded-b-full overflow-hidden z-0 shadow-2xl">
        {/* Placeholder for the image */}
        <div className="w-full h-full bg-cover bg-position-[60%_center] " style={{ backgroundImage: "url('/img/placeholder-hero.png')" }}></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="section-container relative z-10 pointer-events-none">
        <div className="flex flex-col items-start gap-6 mt-16 pointer-events-auto relative z-20">
          <h1 className="font-oswald text-5xl sm:text-7xl md:text-[6rem] leading-none tracking-tight uppercase text-offwhite drop-shadow-2xl max-w-[70%]">
            DIGITAL EXPERIENCES<br />
            CRAFTED FOR <br />
            <span className="text-primary"> AMBITIOUS BRANDS.</span>
          </h1>
          <p className="font-inter text-sm md:text-base text-gray-200 max-w-sm leading-relaxed mb-4 mt-2 pr-4 drop-shadow-xl font-medium">
            Your products are premium. Your website should be, too. I design and
            develop high-performance e-commerce platforms so you can focus
            100% on growing your business.s
          </p>
          <button className="group flex items-center gap-4 bg-primary text-black font-inter font-bold text-sm tracking-widest uppercase pl-8 pr-2 py-2 rounded-full hover:bg-[#e0be00] transition-colors duration-300 drop-shadow-xl pointer-events-auto">
            VIEW MY WORK
            <span className="bg-black text-offwhite rounded-full p-2 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <MoveRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
