import { getProjectById } from "@/app/_lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default async function SingleProjectPage({ params }) {
  const { id } = await params
  const project = getProjectById(id);

  if (!project) notFound();

  return (
    <main className="min-h-screen relative bg-background text-white pb-32">
      {/* Hero Header Area */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 border-b border-white/5 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="section-container relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-12 items-start justify-between">

          <div className="flex-1 max-w-3xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-inter text-sm mb-12 group uppercase tracking-widest font-bold">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Gallery
            </Link>

            <div className="flex items-center mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {project.category}
              </span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl xl:text-[80px] uppercase tracking-wider mb-8 leading-[1.1] drop-shadow-lg">
              {project.title}
            </h1>

            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-10 border border-white/5 shadow-2xl relative bg-[#111]">
              <img src={project.img || "/img/hero.webp"} alt={project.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            <p className="font-inter text-gray-400 text-lg md:text-xl leading-relaxed mb-10 md:mb-14 max-w-2xl">
              {project.detail}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href={project.webLink || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-[#FFE23F] text-black font-inter font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,226,63,0.15)]">
                Live Preview <ExternalLink size={18} />
              </a>
              <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-inter font-bold rounded-full hover:bg-white/10 transition-colors duration-300">
                View Source <Github size={18} />
              </a>
            </div>
          </div>

          {/* Right side Metadata Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 backdrop-blur-xl shadow-2xl">
            <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-8 pb-4 border-b border-white/5">Project Data</h3>

            <div className="space-y-8">
              <div>
                <p className="font-inter text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-2">Client / Role</p>
                <p className="font-inter text-white font-medium text-sm">Lead Frontend Engineer</p>
              </div>

              <div>
                <p className="font-inter text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-2">Development Timeline</p>
                <p className="font-inter text-white font-medium text-sm">4 - 6 Weeks</p>
              </div>

              <div>
                <p className="font-inter text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-3">Core Technologies</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag.text} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-inter text-[11px] font-bold text-gray-300">
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Full Website Length Image */}
      <section className="section-container mt-16 md:mt-24">
        <div className="w-full bg-[#111] border border-white/10 rounded-[32px] overflow-hidden relative shadow-2xl">
          <img
            src={project.webImg || "/img/hero.webp"}
            alt={`${project.title} Full Website Layout`}
            className="w-full h-auto object-top opacity-90 hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </section>

    </main>
  );
}
