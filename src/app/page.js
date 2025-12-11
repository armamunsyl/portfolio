import StarsBackground from "@/components/StarsBackground";
import FloatingIcons from "@/components/FloatingIcons";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";
import TechScroller from "@/components/TechScroller";
import MotionSection from "@/components/MotionSection";

export default function Home() {
  return (
    <>
      <MotionSection
        as="section"
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >

        <StarsBackground />

        <FloatingIcons />

        <div className="absolute top-0 right-0   bg-pink-500 blur-[200px] opacity-30 pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 blur-[200px] opacity-30 pointer-events-none"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Abdur Rahman Mamun
        </h1>
        <p className="relative z-10 text-pink-500 text-2xl md:text-3xl font-semibold mb-8">
          Full-Stack Developer
        </p>

        <a
          href="#projects"
          className="relative z-10 px-8 py-3 rounded-full text-white border border-transparent bg-black bg-clip-padding bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-[0_0_25px_rgba(255,0,168,0.7)] transition-all"
        >
          View Projects
        </a>
      </MotionSection>

      <AboutSection />
      
      <ProjectsSection></ProjectsSection>
      <SkillsSection></SkillsSection>
      <TechScroller></TechScroller>
      <ContactSection></ContactSection>
    </>
  );
}
