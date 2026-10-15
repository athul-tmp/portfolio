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
          Most recently, I built <span className="text-foreground">JobLog</span>, a full-stack job application tracker and analytics dashboard built with <span className="text-foreground">C#, ASP.NET Core, PostgreSQL and React/Next.js</span>, with a companion <span className="text-foreground">Chrome extension</span> that captures job listings in one click. I continue to actively maintain and improve it, shipping regular versioned releases deployed on <span className="text-foreground">Azure</span> and <span className="text-foreground">Vercel</span> through a tested, automated pipeline, with a focus on clarity, automation and user experience.
        </p>

        <p>
          I&apos;m currently working as a <span className="text-foreground">Volunteer Software Engineer at Marra Community Hub</span>, a charity with a volunteer management platform used in production. On the backend in <span className="text-foreground">C#/.NET (ASP.NET Core)</span>, I built volunteer archiving and waitlists for full events. I&apos;m also building the backend for a new <span className="text-foreground">business resource-sharing marketplace</span>, including listings, responses, bookmarks and availability settings. For that project I wrote API documentation for the frontend team and helped merge two database designs into one. I work through a <span className="text-foreground">PR-based Git workflow</span> where teammates review my work and I revise it based on their feedback, and the team uses <span className="text-foreground">Claude Code</span> as part of its everyday workflow.
        </p>

        <p>
          I like building tools people actually use, and I care about what happens after the first release: testing it, shipping it, and fixing and improving it based on feedback. I&apos;m looking to join a team where I can keep learning and contribute to software that people rely on.
        </p>
      </div>

      <Separator className="my-12" />
    </section>
  );
}