import { getAllBlogs } from '@/app/_lib/apiBlogs';
import SectionHeading from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import { formatLocalDate } from '@/app/_lib/data';
import Link from 'next/link';

export default async function DevLogs() {
  const { Blogs: logs } = await getAllBlogs();
  console.log(logs);

  return (
    <section
      id='dev-blog'
      className=' py-20 md:py-32 bg-background border-b border-[#374151]'
    >
      <div className='section-container'>
        <div className='flex justify-between items-end mb-12 md:mb-16 w-full'>
          <SectionHeading>Dev Blog</SectionHeading>
          <Link href="/blog" className="text-primary hover:text-white font-inter text-[13px] md:text-sm font-bold uppercase tracking-widest transition-colors mb-4 flex items-center gap-2">
            View All <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-8'>
          {logs.map((log) => (
            <Link key={log.id} href={`/blog/${log.slug}`} className='group cursor-pointer block'>
              <div className='w-full aspect-4/3 relative mb-6'>
                <div className='w-full h-full rounded-[32px] overflow-hidden relative shadow-lg group-hover:shadow-[0_0_30px_rgba(255,226,63,0.05)] transition-shadow duration-500'>
                  <img src={log.img} alt={log.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Bottom Right Cutout Wrapper */}
                <div className="absolute bottom-0 right-0 bg-background rounded-tl-[32px] pl-4 pt-4 z-10 hidden sm:block">
                  {/* top inverted corner */}
                  <div className="absolute top-[-20px] right-0 w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[10px_10px_0_10px_var(--background)] pointer-events-none"></div>
                  {/* left inverted corner */}
                  <div className="absolute bottom-0 left-[-20px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[10px_10px_0_10px_var(--background)] pointer-events-none"></div>

                  <div className="relative z-10 w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-tagRed transition-colors duration-300">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>

                {/* Mobile basic circle on corner (fallback) */}
                <div className="absolute -bottom-4 right-4 z-10 sm:hidden">
                  <div className="w-14 h-14 bg-[#222] border-4 border-background rounded-full flex items-center justify-center group-hover:bg-tagRed transition-colors duration-300 shadow-xl">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className='mb-4'>
                <span className='px-4 py-1.5 rounded-full bg-white/5 text-offwhite font-inter text-xs tracking-wide'>
                  {log.tag}
                </span>
              </div>
              <h3 className='font-inter text-xl md:text-2xl text-offwhite group-hover:text-primary transition-colors mb-4 font-medium leading-[1.3]'>
                {log.title}
              </h3>
              <div className='flex items-center gap-2 text-sm text-gray-400 font-inter'>
                <span className='text-tagRed text-[12px]'>●</span>
                <span>{log.author}</span>
                <span className='text-tagOrange text-[12px]'>●</span>
                <span>{formatLocalDate(log.created_at)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
