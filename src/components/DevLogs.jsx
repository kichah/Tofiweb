import SectionHeading from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const logs = [
  {
    id: 1,
    date: 'Oct 12, 2023',
    title: 'Building Fluid Layouts in Next.js',
    category: 'Development',
  },
  {
    id: 2,
    date: 'Nov 05, 2023',
    title: 'Micro-interactions that Convert',
    category: 'UX Design',
  },
  {
    id: 3,
    date: 'Jan 18, 2024',
    title: 'Why Performance is a Feature',
    category: 'Tech',
  },
];

export default function DevLogs() {
  return (
    <section
      id='dev-blog'
      className='snap-start py-24 bg-background border-b border-[#374151]'
    >
      <div className='section-container'>
        <div className='flex justify-between items-end mb-16 w-full'>
          <SectionHeading>Dev Logs</SectionHeading>
          <button className='text-primary font-inter font-bold text-sm tracking-widest uppercase hover:text-offwhite transition-colors flex items-center gap-2'>
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {logs.map((log) => (
            <div key={log.id} className='group cursor-pointer'>
              <div className='w-full aspect-video bg-[#2A2A28] rounded-3xl mb-6 overflow-hidden relative border border-white/5'>
                <div className='absolute inset-0 bg-darkGray opacity-40 group-hover:opacity-60 transition-opacity duration-500'></div>
                <div className='absolute inset-0 flex items-center justify-center text-gray-600 font-oswald tracking-widest'>
                  [ Image ]
                </div>
              </div>
              <div className='flex gap-4 items-center mb-3'>
                <span className='text-primary font-inter font-bold text-xs tracking-widest uppercase'>
                  {log.category}
                </span>
                <span className='text-gray-500 font-inter text-sm'>
                  {log.date}
                </span>
              </div>
              <h3 className='font-oswald text-2xl text-offwhite group-hover:text-primary transition-colors'>
                {log.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
