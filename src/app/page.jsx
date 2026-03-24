import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutServices from "@/components/AboutServices";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TechStackMarquee from "@/components/TechStackMarquee";
import DevLogs from "@/components/DevLogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyApproach from "@/components/MyApproach";


export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip bg-background" >
      <Header />
      <Hero />
      <AboutServices />
      <ProjectsCarousel />
      <TechStackMarquee />
      <MyApproach />
      <DevLogs />
      <Contact />
      <Footer />
    </main>
  );
}
