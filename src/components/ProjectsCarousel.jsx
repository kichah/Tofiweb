"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import CarouselCard from './CarouselCard';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website V3',
    category: 'UI/UX Design',
    tags: [
      { text: 'Landing Page', color: 'green' },
      { text: 'Responsive', color: 'indigo' },
      { text: 'Light Mode', color: 'orange' }
    ],
    detail: 'A personal portfolio site built with Next.js, featuring a fully responsive layout and dark/light mode toggle. Optimized for performance, accessibility, and clean navi...',
    img: '/img/hero.webp'
  },
  {
    id: 2,
    title: 'Digital Agency Website',
    category: 'UI/UX Design',
    tags: [
      { text: '8 Screen', color: 'green' },
      { text: 'Mobile', color: 'indigo' },
      { text: 'Dark Mode', color: 'orange' }
    ],
    detail: 'Functional development. With experience across design systems, user experience, and front-end technologies, I focus on crafting products that are not just beautiful...',
    img: '/img/hero.webp'
  },
  {
    id: 3,
    title: 'VR Games Website',
    category: 'UI/UX Design',
    tags: [
      { text: '10 Screens', color: 'green' },
      { text: 'Mobile', color: 'blue' },
      { text: 'Shopping UI', color: 'orange' }
    ],
    detail: 'A modern e-commerce mobile interface focused on minimal design, easy checkout flow, and clean product layouts. Designed entirely in Figma with a focus on mob...',
    img: '/img/hero.webp'
  },
  {
    id: 4,
    title: 'Fintech Dashboard',
    category: 'Web App',
    tags: [
      { text: 'Dashboard', color: 'blue' },
      { text: 'Analytics', color: 'purple' }
    ],
    detail: 'A sleek financial dashboard presenting complex data in an easy-to-read, actionable format utilizing charts, custom widgets, and dark mode optimizations.',
    img: '/placeholder4.jpg'
  },
];

export default function ProjectsCarousel() {
  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  // Make the card slightly smaller than the screen on mobile, allowing the next card to peek in.
  const ITEM_WIDTH = isMobile ? windowWidth * 0.82 : 400;
  const GAP = isMobile ? 16 : 32;

  // On Mobile: snap to 16px from left edge. On Desktop: centered.
  const startOffset = isMobile ? '16px' : `calc(50vw - ${ITEM_WIDTH / 2}px)`;

  const containerRef = useRef(null);

  return (
    <section id="projects" className="py-20 md:py-24 bg-background overflow-hidden relative border-b border-[#374151]">
      <div className="section-container mb-12 md:mb-16">
        <SectionHeading>Featured Projects</SectionHeading>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden min-h-[600px] md:h-[750px] py-10 md:py-0 flex items-center">
        {/* Carousel Track */}
        <motion.div
          drag="x"
          dragConstraints={containerRef}
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
          animate={{ x: `calc(${startOffset} - ${(ITEM_WIDTH + GAP) * active}px)` }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="flex items-stretch md:items-center relative w-max cursor-grab active:cursor-grabbing touch-pan-y"
          style={{ gap: `${GAP}px` }}
        >
          {projects.map((porject, i) => (
            <CarouselCard
              key={porject.id}
              project={porject}
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
