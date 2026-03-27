"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling behind the open mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-50 py-6 transition-all duration-300 bg-transparent ${isOpen ? '' : 'backdrop-blur-md'}`}>
        <div className="section-container flex justify-between items-center relative">
          <div className="relative z-60">
            <Link href="/" className="font-oswald text-2xl font-bold tracking-wide">TofiWeb</Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[600px]:hidden relative z-60 p-2 -mr-2 text-white transition-transform hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden min-[600px]:flex justify-end items-center gap-6 lg:gap-10 font-inter  font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Dev Blog</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About me</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Me</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Nav Overlay extracted from header to cover full screen natively */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-3xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[600px]:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}
      >
        <nav className={`flex flex-col items-center gap-12 font-oswald text-4xl uppercase tracking-widest transition-transform duration-700 delay-100 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Dev Blog</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">About me</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Contact Me</Link>
        </nav>
      </div>
    </>
  );
}
