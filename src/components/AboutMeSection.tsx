import { Separator } from "@/components/ui/separator";

export function AboutMeSection() {
  return (
    <section id="about" >
      <h2 className="text-3xl font-bold mb-8">About</h2>
      
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm <span className="text-foreground">Athul</span>, a motivated Computer Science graduate from RMIT University who loves creating software that's both functional and thoughtful. As a fresh graduate, I'm genuinely open to exploring roles across the <span className="text-foreground">Software Development, Data, and Cloud</span> domains, eager and excited to learn and advance my career.
        </p>
        <p>
          My foundation is built on hands-on experience, including an internship as a <span className="text-foreground">Software Development Intern at Woofya</span>. There, I contributed to a gamified PWA by implementing core features like onboarding and profile setup, integrating Firebase Auth and Directus APIs into a <span className="text-foreground">PHP codebase</span>. I'm also particularly proud of <span className="text-foreground">TeachTeam</span>, a full-stack platform I built using <span className="text-foreground">React and Node.js</span> for managing university teaching teams, complete with secure, role-based dashboards and admin reporting.</p>
        <p>
          I enjoy creating <span className="text-foreground">practical solutions for real-world problems</span>. Currently I am creating JobLog, a job tracking platform I'm building because <span className="text-foreground">relying on spreadsheets requires excessive manual setup and lacks the integrated, analytical clarity</span> needed for a modern job search. JobLog is designed to be a powerful tracker that provides clarity on my application progress and outcomes. Built with <span className="text-foreground">C#, ASP.NET, PostgreSQL, and React/Next.js</span>, it leverages Chart.js for an <span className="text-foreground">advanced dashboard that visualises application status and trends which are crucial insights that are automatic in a streamlined software tool</span>. The project is <span className="text-foreground">currently being prepared for deployment</span> using Vercel and Oracle Cloud Infrastructure, and <span className="text-foreground">I'm truly looking forward to sharing the finished product</span>.
        </p>
      </div>

      <Separator className="my-12" />
    </section>
  );
}