import Hero from "@/components/Hero";
import AboutServices from "@/components/AboutServices";
import ProjectShowcase from "@/components/ProjectShowcase";
import TechStackMarquee from "@/components/TechStackMarquee";
import DevLogs from "@/components/DevLogs";
import Contact from "@/components/Contact";
import MyApproach from "@/components/MyApproach";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function Home() {

  return (
    <main className="min-h-screen relative overflow-x-clip bg-background" >
      <Hero />
      <AboutServices />
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectShowcase />
      </Suspense>
      <TechStackMarquee />
      <MyApproach />
      <Suspense fallback={<LoadingSpinner />}>
        <DevLogs />
      </Suspense>
      <Contact />
    </main>
  );
}
