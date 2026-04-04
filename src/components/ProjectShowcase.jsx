import SectionHeading from './SectionHeading';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProjectsCarousel from './ProjectsCarousel';
import { getProjects } from '@/app/_lib/apiProject';

export default async function ProjectShowcase() {
  const { projects, error } = await getProjects();

  if (error) console.error(error);
  // Ensure we safely handle the absence of projects gracefully
  let dataToPass = projects || [];
  if (projects.length <= 3)
    dataToPass = [...projects, ...projects]

  return (
    <section
      id='projects'
      className='py-20 md:py-32 bg-background relative border-b border-[#374151]'
    >
      <div className='section-container mb-16 md:mb-24 flex justify-between items-end'>
        <SectionHeading>Featured Projects</SectionHeading>
        <Link href="/projects" className="text-primary hover:text-white font-inter text-[13px] md:text-sm font-bold uppercase tracking-widest transition-colors mb-4 flex items-center gap-2">
          View All <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className='section-container relative w-full overflow-visible min-h-[500px] md:min-h-[600px] flex items-center'>
        {/* Pass the server-fetched projects into the Client-side Swiper carousel */}
        <ProjectsCarousel projects={dataToPass} />
      </div>
    </section>
  );
}
