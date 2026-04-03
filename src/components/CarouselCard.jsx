"use client";
import { Layers } from 'lucide-react';
import Link from 'next/link';

export default function CarouselCard({ project, isActive, onClick, itemWidth, isClickable = true }) {
  console.log(project);
  return (
    <div
      onClick={onClick}
      style={{ width: itemWidth }}
      className={`shrink-0 flex flex-col p-4 md:p-5 rounded-[32px] transition-all duration-700 ${isClickable ? 'cursor-pointer' : ''} h-full relative overflow-hidden backdrop-blur-xl border
      ${isActive ? 'bg-[#171717]/90 border-[#333] hover:border-[#444] shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] scale-100 z-20' : 'bg-[#0a0a0a]/40 border-white/5 scale-[0.98] md:scale-90 opacity-50 hover:opacity-80 z-10'}`}
    >
      {/* Image Area */}
      <div className={`w-full h-[240px] md:h-[280px] rounded-t-[24px] md:rounded-[24px] relative overflow-hidden shrink-0 z-10 border transition-all duration-700
        ${isActive ? 'border-[#333] shadow-lg' : 'border-transparent bg-[#111]'}`}>
        <img
          src={project.img || "/img/hero.webp"}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-105 opacity-90' : 'opacity-30 grayscale-70'}`}
        />
        <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-linear-to-t from-[#151515] via-[#151515]/20 to-transparent' : 'bg-black/60 mix-blend-overlay'}`}></div>

        {/* Category Tag inside Image */}
        <div className={`absolute bottom-4 right-4 py-1.5 px-4 rounded-full flex items-center gap-2 text-[11px] font-bold font-inter tracking-wide backdrop-blur-md border transition-all duration-700
          ${isActive ? 'bg-[#222]/80 border-[#444] text-gray-200' : 'bg-[#222]/40 border-white/5 text-gray-400'}`}>
          {project.category} <Layers size={14} />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-6 px-2 flex flex-col flex-1 relative z-10">
        <h3 className={`font-inter font-bold text-[22px] md:text-2xl mb-4 transition-colors duration-700
          ${isActive ? 'text-white' : 'text-gray-500'}`}>
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            < span
              key={i}
              className={`px-3 py-1.5 rounded-full text-[11px] font-inter font-bold tracking-wide border transition-opacity duration-700 bg-white/5 border-white/10 text-gray-300 ${!isActive ? 'opacity-40 grayscale' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detail Box */}
        <div className={`p-4 md:p-5 rounded-2xl mb-6 backdrop-blur-sm border transition-all duration-700 mt-auto
          ${isActive ? 'bg-white/3 border-white/10 shadow-inner' : 'bg-transparent border-transparent'}`}>
          <span className={`block font-inter text-[11px] font-bold mb-2 uppercase tracking-widest transition-colors duration-700
            ${isActive ? 'text-white drop-shadow-sm' : 'text-gray-600'}`}>
            Detail
          </span>
          <p className={`font-inter text-[13px] leading-relaxed line-clamp-4 transition-colors duration-700
            ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.detail}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 min-[400px]:gap-4 mt-2">
          <Link href={`/projects/${project.id}`} className={`flex-1 flex justify-center items-center py-3 min-[400px]:py-3.5 px-1 rounded-full font-inter font-bold text-[11px] min-[400px]:text-sm tracking-wide transition-all duration-500 border
            ${isActive ? 'bg-[#FFE23F] border-[#FFE23F] text-black hover:bg-[#ffe866] shadow-[0_0_15px_rgba(255,226,63,0.15)]' : 'bg-transparent border-white/10 text-gray-500 hover:bg-white/5'}`}>
            Learn more
          </Link>
          <Link href={project.webLink || "#"} target="_blank" rel="noopener noreferrer" className={`flex-1 flex justify-center items-center py-3 min-[400px]:py-3.5 px-1 rounded-full font-inter font-bold text-[11px] min-[400px]:text-sm tracking-wide transition-all duration-500 border
            ${isActive ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 shadow-lg' : 'bg-transparent border-white/10 text-gray-600 hover:bg-white/5'}`}>
            Visit Website
          </Link>
        </div>
      </div>
    </div >
  );
}
