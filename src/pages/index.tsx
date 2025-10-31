import { AboutMeSection } from "@/components/AboutMeSection";
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
    <Head>
      <title>Athul Thampan</title>
      <meta property="og:title" content="Athul Thampan Portfolio" />
      <meta property="og:description" content="Portfolio showcasing Athul Thampan's software projects." />
      <meta property="og:url" content="https://athulthampan.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://athulthampan.com/images/portfolio.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:site_name" content="Athul Thampan" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Athul Thampan Portfolio" />
      <meta name="twitter:description" content="Portfolio showcasing Athul Thampan's software projects." />
      <meta name="twitter:image" content="https://athulthampan.com/images/portfolio.png" />
    </Head>
    
    <div className="space-y-24">
      <AboutMeSection />     
      <SkillsSection />
      <ProjectsSection />
    </div>
    </>
  );
}