import { getAllBlogs } from "@/app/_lib/data";
import Link from "next/link";

export default function BlogPage() {
  const logs = getAllBlogs();

  return (
    <main className="min-h-screen pt-36 pb-24 bg-background text-white">
      <div className="section-container">
        <h1 className="font-oswald text-5xl md:text-7xl uppercase tracking-wider mb-8">Dev Logs</h1>
        <p className="font-inter text-gray-400 text-lg max-w-2xl mb-16 md:mb-24">
          Insights, deep dives, and architectural breakdowns from the frontlines of software development and UI engineering.
        </p>

        {/* Master Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-10">
          {logs.map((log) => (
            <Link key={log.id} href={`/blog/${log.slug}`} className='group cursor-pointer block'>
              <div className='w-full aspect-video bg-[#2A2A28] rounded-3xl mb-6 overflow-hidden relative border border-white/5 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,226,63,0.05)] transition-all duration-500'>
                <img src={log.img || '/img/hero.webp'} alt={log.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent'></div>
              </div>
              <div className='flex gap-4 items-center mb-4'>
                <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary font-inter font-bold text-[10px] tracking-widest uppercase'>
                  {log.category}
                </span>
                <div className='flex items-center gap-2 text-gray-500 font-inter text-xs tracking-wider'>
                  <span className='text-tagRed text-[12px]'>●</span>
                  <span>{log.author}</span>
                  <span className='text-tagOrange text-[12px]'>●</span>
                  <span>{log.date}</span>
                </div>
              </div>
              <h3 className='font-oswald text-3xl md:text-[32px] md:leading-tight text-offwhite group-hover:text-primary transition-colors tracking-wide'>
                {log.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
