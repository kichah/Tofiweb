'use client';
import { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Search, PenTool, Terminal, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01 / Discovery & Strategy',
    title: 'UNDERSTANDING THE GOAL',
    desc: 'Before writing a single line of code, we dig into your brand, your local customers, and your current bottlenecks. We map out the exact strategy needed to increase your conversions and build buyer trust.',
    color: '#F60A2E', // Red
    icon: Search,
  },
  {
    num: '02 / Brand & UI Design',
    title: 'DESIGNING FOR TRUST',
    desc: 'Your products are premium, and your digital storefront must reflect that. I design a clean, modern, and beautiful user interface that makes your brand look expensive and makes navigating your store effortless.',
    color: '#f97316', // Orange
    icon: PenTool,
  },
  {
    num: '03 / Development',
    title: 'HIGH-PERFORMANCE ENGINEERING',
    desc: 'This is where the magic happens. I build robust, custom web applications with zero bloated templates. The result is a highly secure, ultra-fast digital storefront that feels premium and works flawlessly across multiple languages.',
    color: '#eab308', // Yellow
    icon: Terminal,
  },
  {
    num: '04 / Testing & Launch',
    title: 'LAUNCH & CONVERSION',
    desc: 'We rigorously test the site on all devices to ensure zero dropped carts. Once we launch, you get a highly scalable, automated sales machine so you can step away from the tech and focus entirely on growing your business.',
    color: '#fef08a', // Bright yellow
    icon: Rocket,
  },
];

export default function MyApproach() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
    layoutEffect: false,
  });

  // 2. Wrap the scroll progress in a smooth spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    let step = 0;
    // 'latest' represents your scroll progress from 0.0 to 1.0.
    // Adjust these numbers to tune the exact transition points!
    if (latest < 0.25) {
      step = 0; // Step 1: 0% to 20%
    } else if (latest < 0.50) {
      step = 1; // Step 2: 20% to 45%
    } else if (latest < 0.8) {
      step = 2; // Step 3: 45% to 70%
    } else {
      step = 3; // Step 4: 70% to 100% (This gives the final step a huge amount of scroll time)
    }
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  return (
    // Lowered section height to 400dvh (300vh total scroll distance) to reduce exit time
    // after the final step has been reached.
    <section
      ref={containerRef}
      id='approach'
      className='h-[600vh] md:h-[300vh] bg-[#0a0a0a] text-offwhite border-b border-[#374151] relative'

    >
      <div className='sticky top-0 h-lvh w-full flex flex-col z-20 overflow-hidden pointer-events-none'>
        {/* Dynamic Background Glow */}
        <div
          className='absolute inset-0 z-0 opacity-20 transition-colors duration-1000'
          style={{
            background: `radial-gradient(circle at 10% 50%, ${steps[activeStep].color} 0%, transparent 60%)`,
          }}
        />

        {/* Heading */}
        <div className='pt-24 pb-8 shrink-0 relative z-20 text-center pointer-events-auto'>
          <SectionHeading>My Approach</SectionHeading>
        </div>

        {/* Timeline & Text Layout */}
        <div className='flex-1 w-full max-w-6xl mx-auto flex items-center relative z-20 px-8 md:px-16 pb-12 pointer-events-auto mt-[-5vh] lg:mt-0'>
          {/* LEFT: Extended Segmented Colored Timeline */}
          <div className='w-20 md:w-30 h-112.5 md:h-150 relative shrink-0 flex flex-col items-center justify-between'>
            {/* Top Entry Stub */}
            <div className='w-0.5 flex-1 bg-[#222] relative overflow-hidden'>
              <div
                className='absolute top-0 w-full transition-all duration-800 ease-out'
                style={{
                  height: activeStep >= 0 ? '100%' : '0%', // Always on
                  backgroundColor: steps[0].color,
                  boxShadow: `0 0 15px 1px ${steps[0].color}80`,
                }}
              />
            </div>

            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              const nextStep = steps[idx + 1];

              return [
                /* The Dot */
                <div
                  key={`dot-${idx}`}
                  className='w-full flex justify-center shrink-0 my-2 xl:my-4 relative z-20'
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 transition-all duration-500 bg-[#0a0a0a] flex items-center justify-center
                           ${isActive ? 'scale-100 bg-[#111] opacity-100' : isPast ? 'scale-95 opacity-100' : 'scale-[0.7] opacity-40'}`}
                    style={{
                      borderColor: isActive || isPast ? step.color : '#333',
                      boxShadow: isActive
                        ? `0 0 20px ${step.color}80, inset 0 0 10px ${step.color}60`
                        : isPast
                          ? `0 0 10px ${step.color}40`
                          : 'none',
                    }}
                  >
                    <step.icon
                      size={18}
                      color={isActive || isPast ? '#fff' : '#555'}
                      className={`md:w-6 md:h-6 transition-transform duration-500 ${isActive || isPast ? 'scale-110 drop-shadow-[0_0_8px_currentColor] text-offwhite' : ''}`}
                    />
                  </div>
                </div>,

                /* The Extended Line Segment leading to next dot */
                nextStep && (
                  <div
                    key={`line-${idx}`}
                    className='w-0.5 flex-1 bg-[#222] relative overflow-hidden z-10'
                  >
                    <div
                      className='absolute top-0 w-full transition-all duration-800 ease-out'
                      style={{
                        height: isPast ? '100%' : '0%', // Fully extends when passed
                        backgroundColor: nextStep.color,
                        boxShadow: `0 0 15px 1px ${nextStep.color}80`,
                      }}
                    />
                  </div>
                ),
              ];
            })}

            {/* Bottom Exit Stub */}
            <div className='w-0.5 flex-1 bg-[#222] relative overflow-hidden'>
              <div
                className='absolute top-0 w-full transition-all duration-800 ease-out'
                style={{
                  height: activeStep >= 3 ? '100%' : '0%', // Fills when the last step is reached
                  backgroundColor: steps[3].color,
                  boxShadow: `0 0 15px 1px ${steps[3].color}80`,
                }}
              />
            </div>
          </div>

          {/* RIGHT: CROSSFADING TEXT */}
          <div className='flex-1 relative h-75 md:h-112.5 flex flex-col justify-center pl-8 md:pl-16' >
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className='absolute left-8 md:left-16 right-0'
              >
                <span
                  className='font-inter font-bold text-sm md:text-base tracking-[0.2em] mb-4 block uppercase transition-colors'
                  style={{ color: steps[activeStep].color }}
                >
                  {steps[activeStep].num}
                </span>
                <h3 className='font-oswald text-4xl md:text-[4.5rem] leading-[1.1] mb-6 text-offwhite uppercase tracking-wide drop-shadow-lg'>
                  {steps[activeStep].title}
                </h3>
                <p className='font-inter text-gray-400 leading-relaxed text-lg md:text-2xl max-w-xl font-light'>
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
