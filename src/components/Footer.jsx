import { Instagram, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-12 border-t border-white/5 relative z-10 mt-[-40px]">
      {/* The mt-[-40px] and z-10 is to slightly tuck under or right below the contact section curve if needed, though they don't overlap directly */}
      <div className="section-container flex flex-col md:flex-row justify-between gap-16 mt-10">
        {/* Left Area (1fr) */}
        <div className="flex-1">
          <h3 className="font-oswald text-2xl text-offwhite mb-8 tracking-wider uppercase">Stay Connected</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"><Instagram size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"><Facebook size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"><Twitter size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"><Linkedin size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"><Github size={20} /></a>
          </div>
        </div>

        {/* Right Area (2fr/flex-grow) */}
        <div className="flex-2 flex flex-col md:items-end md:text-right">
          <nav className="flex flex-wrap md:justify-end gap-x-12 gap-y-4 font-inter text-sm font-bold text-offwhite mb-16">
            <Link href="#projects" className="hover:text-primary transition-colors uppercase tracking-widest">Projects</Link>
            <Link href="#dev-blog" className="hover:text-primary transition-colors uppercase tracking-widest">Dev Blog</Link>
            <Link href="#about" className="hover:text-primary transition-colors uppercase tracking-widest">About me</Link>
            <Link href="#contact" className="hover:text-primary transition-colors uppercase tracking-widest">Contact me</Link>
          </nav>
          <div className="text-gray-500 font-inter text-sm font-semibold tracking-wide uppercase mt-auto">
            © {new Date().getFullYear()} TofiWeb. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
