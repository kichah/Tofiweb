'use client';
import { motion } from 'framer-motion';

const stack = [
  'React',
  'Next.js',
  'JavaScript',
  'TailwindCSS',
  'Node.js',
  'Framer Motion',
  'GraphQL',
  'PostgreSQL',
  'Figma',
  'Vercel',
];

export default function TechStackMarquee() {
  return (
    <section className='py-12 bg-background border-b border-[#374151] overflow-hidden relative flex selection:bg-primary'>
      {/* Gradient masks */}
      <div className='absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none'></div>
      <div className='absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none'></div>

      <motion.div
        className='flex gap-16 items-center flex-nowrap shrink-0 pr-16'
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
      >
        {[...stack, ...stack].map((tech, i) => (
          <div
            key={i}
            className='text-gray-600 font-oswald text-4xl md:text-5xl uppercase tracking-wider whitespace-nowrap transition-all duration-300 hover:text-primary hover:scale-110 cursor-crosshair'
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
