import { getAllProjects } from "@/app/_lib/data";
import CarouselCard from "@/components/CarouselCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen pt-36 pb-24 bg-background text-white">
      <div className="section-container">
        <h1 className="font-oswald text-5xl md:text-7xl uppercase tracking-wider mb-8">All Projects</h1>
        <p className="font-inter text-gray-400 text-lg max-w-2xl mb-16">
          A comprehensive master gallery showcasing high-performance web applications and premium digital experiences crafted over the years.
        </p>

        {/* Master Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {projects.map((project, i) => (
            <div key={project.id} className="w-full flex">
              <CarouselCard
                project={project}
                isActive={true}
                itemWidth="100%"
                isClickable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
