'use client';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiFramer, SiGraphql, SiPostgresql, 
  SiFigma, SiVercel 
} from 'react-icons/si';

const stack = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Figma', icon: SiFigma },
  { name: 'Vercel', icon: SiVercel },
];

export default function TechStackMarquee() {
  return (
    <section className='py-12 bg-background border-b border-white/5 overflow-hidden relative flex selection:bg-primary'>
      {/* Gradient masks */}
      <div className='absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none'></div>
      <div className='absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none'></div>

      <motion.div
        className='flex gap-16 md:gap-20 items-center flex-nowrap shrink-0 pr-16 md:pr-20'
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
      >
        {[...stack, ...stack, ...stack].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className='flex items-center gap-4 text-gray-600 font-oswald text-4xl md:text-5xl uppercase tracking-wider whitespace-nowrap transition-all duration-300 hover:text-primary hover:-translate-y-1 cursor-crosshair group'
            >
              <Icon className="text-3xl md:text-4xl opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
