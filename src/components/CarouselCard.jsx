"use client";
import { Layers } from 'lucide-react';

const colorMap = {
  green: "bg-green-500/10 border-green-500/30 text-green-600",
  indigo: "bg-indigo-500/10 border-indigo-500/30 text-indigo-600",
  orange: "bg-orange-500/10 border-orange-500/30 text-orange-600",
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-600",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-600",
};

export default function CarouselCard({ project, isActive, onClick, itemWidth }) {
  return (
    <div
      onClick={onClick}
      style={{ width: itemWidth }}
      className={`shrink-0 flex flex-col p-4 md:p-5 rounded-[32px] transition-all duration-500 cursor-pointer h-auto md:h-[660px]
      ${isActive ? 'bg-white shadow-2xl scale-100 z-20' : 'bg-[#222222] scale-[0.98] md:scale-90 opacity-60 hover:opacity-100 z-10'}`}
    >
      {/* Image Area */}
      <div className={`w-full h-[240px] md:h-[280px] rounded-t-[24px] md:rounded-[24px] relative overflow-hidden shrink-0
        ${isActive ? 'bg-[#111111]' : 'bg-[#1a1a1a]'}`}>
        <img
          src={project.img || "/img/hero.webp"}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        {/* Category Tag inside Image */}
        <div className={`absolute bottom-4 right-4 py-1.5 px-4 rounded-full flex items-center gap-2 text-[11px] font-bold font-inter tracking-wide
          ${isActive ? 'bg-offwhite text-black' : 'bg-[#333] text-gray-300'}`}>
          {project.category} <Layers size={14} />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-6 px-2 flex flex-col flex-1">
        <h3 className={`font-inter font-bold text-[22px] mb-4 
          ${isActive ? 'text-black' : 'text-gray-200'}`}>
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag.text}
              className={`px-3 py-1.5 rounded-full text-[11px] font-inter font-bold tracking-wide border ${colorMap[tag.color] || "bg-gray-500/10 border-gray-500/30 text-gray-600"} ${!isActive ? 'opacity-70' : ''}`}
            >
              {tag.text}
            </span>
          ))}
        </div>

        {/* Detail Box */}
        <div className={`p-4 rounded-2xl mb-6
          ${isActive ? 'bg-offwhite' : 'bg-background'}`}>
          <span className={`block font-inter text-[11px] font-bold mb-2 uppercase tracking-widest
            ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>
            Detail :
          </span>
          <p className={`font-inter text-[13px] leading-relaxed line-clamp-4
            ${isActive ? 'text-gray-500' : 'text-gray-500'}`}>
            {project.detail}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 min-[400px]:gap-4 mt-auto">
          <button className={`flex-1 py-3 min-[400px]:py-3.5 px-1 rounded-full font-inter font-bold text-[11px] min-[400px]:text-sm tracking-wide transition-colors
            ${isActive ? 'bg-primary text-black hover:bg-[#e0be00]' : 'bg-[#ffe133]/15 text-[#ffe133]/60 hover:bg-[#ffe133]/25'}`}>
            Learn more
          </button>
          <button className={`flex-1 py-3 min-[400px]:py-3.5 px-1 rounded-full font-inter font-bold text-[11px] min-[400px]:text-sm tracking-wide transition-colors
            ${isActive ? 'bg-black text-offwhite hover:bg-gray-800' : 'bg-[#111] text-gray-400 hover:bg-[#222]'}`}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
