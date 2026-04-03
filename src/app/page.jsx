import Hero from "@/components/Hero";
import AboutServices from "@/components/AboutServices";
import ProjectShowcase from "@/components/ProjectShowcase";
import TechStackMarquee from "@/components/TechStackMarquee";
import DevLogs from "@/components/DevLogs";
import Contact from "@/components/Contact";
import MyApproach from "@/components/MyApproach";

export default async function Home() {

  return (
    <main className="min-h-screen relative overflow-x-clip bg-background" >
      <Hero />
      <AboutServices />
      <ProjectShowcase />
      <TechStackMarquee />
      <MyApproach />
      <DevLogs />
      <Contact />
    </main>
  );
}
