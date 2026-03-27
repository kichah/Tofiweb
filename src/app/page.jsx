import Hero from "@/components/Hero";
import AboutServices from "@/components/AboutServices";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackMarquee from "@/components/TechStackMarquee";
import DevLogs from "@/components/DevLogs";
import Contact from "@/components/Contact";
import MyApproach from "@/components/MyApproach";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip bg-background" >
      <Hero />
      <AboutServices />
      <ProjectsCarousel />
      <TechStackMarquee />
      <MyApproach />
      <DevLogs />
      <Contact />
    </main>
  );
}
