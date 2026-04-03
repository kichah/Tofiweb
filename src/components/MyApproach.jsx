'use client';
import SectionHeading from './SectionHeading';
import { Search, PenTool, Terminal, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    label: 'Discovery & Strategy',
    title: 'UNDERSTANDING THE GOAL',
    desc: 'Before writing a single line of code, we dig into your brand, your local customers, and your current bottlenecks. We map out the exact strategy needed to increase your conversions and build buyer trust.',
    bgClass: 'bg-gradient-to-br from-[#3b0918] to-[#14020a]', // Very dark red
    textColor: 'text-red-500',
    icon: Search,
  },
  {
    num: '02',
    label: 'Brand & UI Design',
    title: 'DESIGNING FOR TRUST',
    desc: 'Your products are premium, and your digital storefront must reflect that. I design a clean, modern, and beautiful user interface that makes your brand look expensive and makes navigating your store effortless.',
    bgClass: 'bg-gradient-to-br from-[#381a0b] to-[#140802]', // Very dark brown
    textColor: 'text-orange-500',
    icon: PenTool,
  },
  {
    num: '03',
    label: 'Development',
    title: 'HIGH-PERFORMANCE ENGINEERING',
    desc: 'This is where the magic happens. I build robust, custom web applications with zero bloated templates. The result is a highly secure, ultra-fast digital storefront that feels premium and works flawlessly across multiple languages.',
    bgClass: 'bg-gradient-to-br from-[#272710] to-[#0e0e05]', // Very dark olive
    textColor: 'text-yellow-500',
    icon: Terminal,
  },
  {
    num: '04',
    label: 'Testing & Launch',
    title: 'LAUNCH & CONVERSION',
    desc: 'We rigorously test the site on all devices to ensure zero dropped carts. Once we launch, you get a highly scalable, automated sales machine so you can step away from the tech and focus entirely on growing your business.',
    bgClass: 'bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a]', // Dark Grey
    textColor: 'text-gray-400',
    icon: Rocket,
  },
];

export default function MyApproach() {
  return (
    <section id='approach' className='relative z-20'>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`sticky top-0 h-dvh w-full flex flex-col md:flex-row items-center border-t border-white/5 ${step.bgClass} shadow-[0_-15px_40px_rgba(0,0,0,0.4)] overflow-hidden`}
        >
          {/* Section Heading - Rendered absolutely only on the first card */}
          {idx === 0 && (
            <div className="absolute top-8 md:top-16 left-8 md:left-16 z-50">
              <SectionHeading>My Approach</SectionHeading>
            </div>
          )}

          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 pt-32 lg:pt-0 relative z-20 flex flex-col justify-center h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-black/40 shadow-inner ${step.textColor}`}>
                <step.icon size={20} className="md:w-6 md:h-6" />
              </div>
              <span className={`font-inter font-bold text-[13px] md:text-sm tracking-[0.2em] uppercase ${step.textColor}`}>
                {step.num} / {step.label}
              </span>
            </div>
            
            <h3 className='font-oswald text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.1] mb-6 md:mb-8 text-offwhite uppercase tracking-wide drop-shadow-xl'>
              {step.title}
            </h3>
            
            <p className='font-inter text-gray-400 leading-relaxed text-base md:text-xl max-w-xl font-light'>
              {step.desc}
            </p>
          </div>

          {/* Right Massive Number Area */}
          <div className="absolute right-[-5%] lg:right-[5%] top-1/2 -translate-y-[45%] pointer-events-none z-10 flex justify-end items-center">
            {/* Using text size relative to viewport width/height makes it flawlessly massive on all screens */}
            <span className="font-oswald text-[40vh] md:text-[50vh] lg:text-[65vh] font-bold text-white/4 leading-none tracking-tighter drop-shadow-2xl">
              {step.num}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
