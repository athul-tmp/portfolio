import { Separator } from "@/components/ui/separator";

export function AboutMeSection() {
  return (
    <section id="about" >
      <h2 className="text-3xl font-bold mb-8">About</h2>
      
      <div className="space-y-4 text-muted-foreground">
        <p>
          I&apos;m <span className="text-foreground">Athul</span>, a Software Engineer and recent Computer Science graduate from RMIT University who enjoys building software that&apos;s both functional and thoughtfully designed. I&apos;m early in my career and actively pursuing opportunities across <span className="text-foreground">Software Engineering, Data, and Cloud,</span> while continuing to build real-world projects and strengthen my technical foundations.
        </p>
        <p>
          My foundation is built on hands-on experience, including an internship as a <span className="text-foreground">Software Development Intern at Woofya</span>. There, I contributed to a gamified PWA by implementing core features like onboarding and profile setup, integrating Firebase Auth and Directus APIs into a <span className="text-foreground">PHP codebase</span>. I&apos;m also particularly proud of <span className="text-foreground">TeachTeam</span>, a full-stack platform I built using <span className="text-foreground">React and Node.js</span> for managing university teaching teams, complete with secure, role-based dashboards and admin reporting.</p>
        <p>
          Most recently, I completed <span className="text-foreground">JobLog</span>, a full-stack job application tracker and analytics dashboard built with <span className="text-foreground">C#, ASP.NET, PostgreSQL, and React/Next.js</span>. It helps users manage and analyse their job search journey with features like filtering, sorting, and trend visualisations powered by <span className="text-foreground">Chart.js</span>. Deployed via <span className="text-foreground">Vercel</span> and <span className="text-foreground">Google Cloud Run</span>, JobLog focuses on clarity, automation, and user experience. I&apos;m now expanding it further with a <span className="text-foreground">browser extension</span> that automatically captures job listings and syncs them directly into the tracker.
        </p>

        <p>
          I enjoy designing <span className="text-foreground">practical, user-centric tools</span> that streamline everyday challenges by transforming ideas into robust, scalable, and visually refined software products.
        </p>
      </div>

      <Separator className="my-12" />
    </section>
  );
}