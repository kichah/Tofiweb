import Link from 'next/link';

export default function Header() {
  return (
    <header className="snap-start absolute top-0 left-0 right-0 z-50 py-6 backdrop-blur-md bg-transparent">
      <div className="section-container flex justify-between items-center">
        <div>
          <Link href="/" className="font-oswald text-2xl font-bold tracking-wide">TofiWeb</Link>
        </div>
        <nav className="flex justify-end items-center gap-10 font-inter text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About me</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact Me</Link>
        </nav>
      </div>
    </header>
  );
}
