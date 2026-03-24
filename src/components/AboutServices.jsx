'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const baseServices = [
  'Web Design',
  'Web Development',
  'App Design',
  'UI/UX Research',
  'Branding',
];

// Repeat to create an "infinite" scroll effect
const services = Array.from({ length: 30 }, (_, i) => ({
  text: baseServices[i % baseServices.length],
  absoluteIndex: i,
}));

export default function AboutServices() {
  const [activeIdx, setActiveIdx] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev < services.length - 5 ? prev + 1 : 2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='about'
      className='snap-start py-16 md:py-20 lg:py-32 bg-background text-offwhite overflow-hidden border-b border-[#374151]'
    >
      <div className='section-container flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24'>
        {/* Left: What I DO - Vertical Carousel */}
        <div className='flex-1 flex flex-col border-b md:border-b-0 md:border-r border-white/10 pb-10 md:pb-0 md:pr-10'>
          <SectionHeading className='mb-8'>What I Do</SectionHeading>

          <div className='relative h-100 md:h-112.5 overflow-hidden'>
            <div className='absolute inset-x-0 top-0 bottom-0 pt-16' >
              <motion.div
                initial={{ y: -(2 * 80) + 160 }}
                animate={{ y: -(activeIdx * 80) + 160 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className='flex flex-col'
              >
                {services.map((item, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <div
                      key={i}
                      className='h-20 flex items-center cursor-pointer px-2'
                      onClick={() => setActiveIdx(i)}
                    >
                      <h3
                        className={`font-oswald text-[2.5rem] md:text-6xl uppercase transition-all duration-500 w-full truncate`}
                        style={{
                          WebkitTextStroke: isActive ? '0px' : '1px #4b5563',
                          color: isActive ? '#ffffff' : 'transparent',
                          opacity: isActive ? 1 : 0.4,
                        }}
                      >
                        {item.text}
                      </h3>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Gradient masks for smooth fade on top/bottom */}
            <div className='absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background via-background/80 to-transparent pointer-events-none z-10'></div>
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none z-10'></div>
          </div>
        </div>

        {/* Right: Who Am I */}
        <div className='flex-1 flex flex-col justify-center h-auto md:h-full md:pl-8 mt-4 md:mt-0'>
          <SectionHeading className='mb-8 font-oswald text-4xl md:text-5xl'>
            Who Am I
          </SectionHeading>
          <p className='font-inter text-2xl md:text-3xl leading-[1.6] text-gray-400 font-light tracking-tight max-w-2xl'>
            Hi, I'm Tofi. I bridge the gap between{' '}
            <strong className='text-offwhite font-normal'>
              beautiful brand design
            </strong>{' '}
            and{' '}
            <strong className='text-offwhite font-normal'>
              high-performance code
            </strong>
            . I build custom, frictionless website experiences that allow
            ambitious brands to scale without technical headaches.
          </p>
        </div>
      </div>
    </section>
  );
}
