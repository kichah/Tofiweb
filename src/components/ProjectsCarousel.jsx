'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CarouselCard from './CarouselCard';

// Core Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectsCarousel({ projects }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  if (!projects || projects.length === 0) return null;

  return (
    <div className='w-full relative touch-pan-y z-10'>
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        style={{
          '--swiper-pagination-color': '#f3f4f6',
          '--swiper-pagination-bullet-inactive-color': '#4b5563',
          '--swiper-pagination-bullet-inactive-opacity': '0.4',
          '--swiper-pagination-bottom': '0px',
        }}
        onSwiper={setSwiperInstance}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={16}
        breakpoints={{
          768: {
            spaceBetween: 32,
            slidesOffsetBefore: 0,

          },
          1200: {
            slidesOffsetBefore: -80,
            slidesPerView: 3,
            loop: projects.length > 3 ? true : false,

          },
        }}
        initialSlide={1}
        className='w-full h-full py-12!' // Use important overrides (!) to beat Swiper's native CSS reset
      >
        {projects.map((project, i) => (
          <SwiperSlide
            key={`${project.id} ${Math.random()}`}
            className="w-[82vw]! md:w-[450px]!"
          >
            {({ isActive }) => (
              <CarouselCard
                project={project}
                isActive={isActive}
                itemWidth="100%"
                onClick={() => {
                  if (swiperInstance && typeof swiperInstance.slideToLoop === 'function') {
                    swiperInstance.slideToLoop(i);
                  }
                }}
                isClickable={true}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
