import { AboutMeSection } from "@/components/AboutMeSection";
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection";
import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Head>
        <title>Athul Thampan</title>
      </Head>
      <AboutMeSection />     
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}