'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import CarouselCard from './CarouselCard';
import { getAllProjects } from '@/app/_lib/data';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsCarousel() {
  const [active, setActive] = useState(1);
  const [windowWidth, setWindowWidth] = useState(1200);

  const projects = getAllProjects();

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 500;
  // Make the card slightly smaller than the screen on mobile, allowing the next card to peek in.
  const ITEM_WIDTH = isMobile ? windowWidth * 0.82 : 450;
  const GAP = isMobile ? 16 : 32;

  // On Mobile: snap to 16px from left edge. On Desktop: centered.
  const startOffset = isMobile ? '16px' : `calc(50vw - ${ITEM_WIDTH / 2}px)`;

  return (
    <section
      id='projects'
      className=' py-20 md:py-24 bg-background overflow-hidden relative border-b border-[#374151]'
    >
      <div className='section-container mb-12 md:mb-16 flex justify-between items-end'>
        <SectionHeading>Featured Projects</SectionHeading>
        <Link href="/projects" className="text-primary hover:text-white font-inter text-[13px] md:text-sm font-bold uppercase tracking-widest transition-colors mb-4 flex items-center gap-2">
          View All <ArrowUpRight size={16} />
        </Link>
      </div>

      <div
        className='relative w-full overflow-hidden min-h-150 md:h-187.5 py-10 md:py-0 flex items-center'
      >
        {/* Carousel Track */}
        <motion.div
          drag={'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            // Swipe Left (Next)
            if (swipe < -80 || velocity.x < -300) {
              if (active < projects.length - 1) setActive(active + 1);
            }
            // Swipe Right (Prev)
            else if (swipe > 80 || velocity.x > 300) {
              if (active > 0) setActive(active - 1);
            }
          }}
          animate={{
            x: `calc(${startOffset} - ${(ITEM_WIDTH + GAP) * active}px)`,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className='flex items-stretch md:items-center relative w-max cursor-grab active:cursor-grabbing touch-pan-y'
          style={{ gap: `${GAP}px`, position: 'relative' }}
        >
          {projects.map((project, i) => (
            <CarouselCard
              key={project.id}
              project={project}
              isActive={i === active}
              onClick={() => setActive(i)}
              itemWidth={ITEM_WIDTH}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
