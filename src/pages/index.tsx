import { AboutMeSection } from "@/components/AboutMeSection";
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <AboutMeSection />     
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}