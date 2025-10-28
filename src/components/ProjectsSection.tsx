import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image"; 
import { Github, PlayCircle, FileText, ArrowUpRight, Globe } from "lucide-react"; 
import { useTheme } from "next-themes";

const projectsData = [
  {
    title: "JobLog - Job Application Tracker with Analytics",
    image: "/images/joblog.png",
    lightImage: "/images/joblog_light.png",
    description: "A modern, full-stack platform that helps users track and analyse their job applications across multiple platforms. Includes features like filtering, sorting, and searching applications; an analytics dashboard with key metrics showing outcomes and trends to help visualise your job hunting journey; and secure JWT-based authentication. Designed with dark and light modes and fully responsive across devices. Planned Chrome extension for automatic job data capture. Built with React, Next.js, shadcn/ui, and Chart.js on the frontend, and C#/.NET (ASP.NET) with a model-services-controllers architecture, Entity Framework Core, and PostgreSQL on the backend. Deployed using Docker containers on Google Cloud Run (backend), Neon (database), and Vercel (frontend).",
    tech: ["React", "Next.js", "TypeScript", "shadcn/ui", "Chart.js", "C#/.NET (ASP.NET)", "Entity Framework Core", "PostgreSQL", "Docker", "Google Cloud Run", "Vercel"],
    live: "https://joblog.athulthampan.com/",
    repo: "https://github.com/athul-tmp/JobLog"
  },
  {
    title: "TeachTeam - Teaching Team Management Platform",
    image: "/images/teachteam.png",
    lightImage: "/images/teachteam.png",
    description: "A full-stack platform for managing university teaching teams. Candidates can apply to available courses, and lecturers can review, select, rank, and comment on them through secure, role-based dashboards. Includes an admin panel to assign lecturers to courses, block/unblock candidate logins, manage course data (create/edit/update), and view performance reports. Built with React (TypeScript), Chakra UI, Node.js, Express, and TypeORM, using REST and GraphQL APIs, Recharts for analytics, and MySQL.",
    tech: ["React (TypeScript)", "Node.js", "Express", "TypeORM", "GraphQL", "MySQL", "Chakra UI", "Recharts"],
    demo: "https://drive.google.com/file/d/15oHFyux0pwvxstbkY8mE9hByEYL7Z7RM/view?usp=sharing",
    repo: "https://github.com/athul-tmp/TeachTeam",
  },
  {
    title: "VetCare - Online Vet Clinic Management System",
    image: "/images/VetCare.png",
    lightImage: "/images/VetCare.png",
    description: "A full-stack web app for managing veterinary clinic operations, including appointment scheduling/rescheduling, medical record management, and prescription tracking, integrated with authentication. Built with Spring Boot and MySQL, containerized using Docker.",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    demo: "https://drive.google.com/file/d/1F08xx3LhwmULGUv1ZK2bf_tGriwy8y5H/view?usp=sharing",
  },
  {
    title: "Airbnb Booking Website",
    image: "/images/airbnb.png",
    lightImage: "/images/airbnb.png",
    description: "A full-stack web app simulating an Airbnb booking system using MongoDB, React, TypeScript, Node.js, Express, and Chakra UI. Users can browse listings from MongoDB's sample_airbnb database and create new bookings for those listings, showcasing core CRUD functionality with a focus on booking creation and listing retrieval.",
    tech: ["MongoDB", "React", "TypeScript", "Node.js", "Express", "Chakra UI"],
    repo: "https://github.com/athul-tmp/airbnb-booking-app",
    demo: "https://drive.google.com/file/d/1FDB2GqPM9NOIhKNOLXevuM2lqU1h35yw/view?usp=sharing",
  },
  {
    title: "Music Subscription App",
    image: "/images/Music_App.png",
    lightImage: "/images/Music_App.png",
    description: "A web app built with HTML, CSS, JavaScript, and PHP, hosted on AWS EC2. It uses DynamoDB for user authentication and AWS S3 for image storage.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "AWS (S3, DynamoDB, EC2)"],
    demo: "https://drive.google.com/file/d/1yiK10mySCjGmvhRxm1KdEPc5Br41N_mn/view?usp=sharing",
  },
  {
    title: "Vacuum Cleaner Game",
    image: "/images/Vacuum_Cleaner.png",
    lightImage: "/images/Vacuum_Cleaner.png",
    description: "Created a vacuum cleaner game in C++ using OOP principles with a command-line interface. Players navigate a 10x10 grid with text-based commands.",
    tech: ["C++"],
    demo: "https://drive.google.com/file/d/1ZJcLrHsDaiwb9Wh05ghvfdG1gYi3tXLq/view?usp=sharing",
  },
  {
    title: "Minecraft Village Generator",
    image: "/images/Minecraft_Village.png",
    lightImage: "/images/Minecraft_Village.png",
    description: "A procedural Minecraft village generator in Python using MCPI. It dynamically generates villages with varying room sizes and pathways, adding trees for realism.",
    tech: ["Python"],
    repo: "https://github.com/athul-tmp/Minecraft-Village-Generator",
    demo: "https://www.youtube.com/watch?v=raSy0x0HETk",
  },
  {
    title: "Closing The Gap",
    image: "/images/Closing_The_Gap.png",
    lightImage: "/images/Closing_The_Gap.png",
    description: "Developed a web app to highlight socio-economic disparities between Indigenous and non-Indigenous Australians, using Java, Javalin, SQLite, and tabular data visualisations.",
    tech: ["Java", "HTML", "CSS", "SQL"],
    demo: "https://drive.google.com/file/d/1EULJZOG9AyldtHaeqRjcMYZicBthZEHC/view?usp=sharing",
  },
  {
    title: "Rock-Paper-Scissors",
    image: "/images/Rock_Paper_Scissors.png",
    lightImage: "/images/Rock_Paper_Scissors.png",
    description: "Built an interactive rock-paper-scissors game with HTML, CSS, and JavaScript, where users play against a computer opponent.",
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/athul-tmp/rock-paper-scissors",
    live: "https://athul-tmp.github.io/rock-paper-scissors/",
  },
  {
    title: "Facebook Metrics Analysis",
    image: "/images/FB_metrics.png",
    lightImage: "/images/FB_metrics.png",
    description: "Analysed a 2014 Facebook dataset of posts from a cosmetics brand using Python, Pandas, and Matplotlib for data cleaning and visualisation.",
    tech: ["Python", "NumPy", "Matplotlib", "Pandas", "Jupyter Notebook"],
    repo: "https://github.com/athul-tmp/Facebook-Metrics-Analysis",
    report: "https://github.com/athul-tmp/Facebook-Metrics-Analysis/blob/main/Phase1_Project.ipynb",
  },
];


export function ProjectsSection() {
  const { resolvedTheme } = useTheme(); 
  const currentTheme = (resolvedTheme || 'dark');

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      
      <p className="mb-4 text-muted-foreground">
        The code repository for this portfolio website can be accessed <Link href="https://github.com/athul-tmp/portfolio" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">here</Link>.
      </p>
      <p className="mb-8 text-muted-foreground">
        The following are some of the projects that I&apos;ve been involved in over the years:
      </p>

      {/* Projects */}
      <div className="grid gap-4">
        {projectsData.map((project, idx) => (
          <div 
            key={idx} 
            className="group grid grid-cols-1 gap-y-4 p-4 rounded-lg 
                       transition-all duration-300 hover:bg-muted/30 focus-within:bg-muted/30 focus-within:shadow-lg"
          >
            
            {/* Title */}
            <h3 className="text-xl font-bold transition-colors duration-300">
              {project.title}
            </h3>

            <div className="grid grid-cols-12 gap-x-4">
                
                {/* Image */}
                <div className="col-span-4 h-32 w-full relative overflow-hidden rounded-md border 
                                hidden sm:block">
                    <Image
                        src={currentTheme === "dark" ? project.image : project.lightImage}
                        alt={`${project.title} screenshot`}
                        fill
                        style={{objectFit : "cover"}}
                        className="transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                </div>
                
                {/* Description */}
                <p className="col-span-12 sm:col-span-8 text-sm text-muted-foreground">
                    {project.description}
                </p>
            </div>


            {/* Links */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
                {project.repo && (
                  <Link 
                    href={project.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-sm font-semibold text-primary p-2 rounded-md transition-all hover:bg-primary/10 underline"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                )}
                {project.demo && (
                  <Link 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-sm font-semibold text-primary p-2 rounded-md transition-all hover:bg-primary/10 underline"
                    aria-label={`View ${project.title} Demo`}
                  >
                    <PlayCircle className="mr-1 h-4 w-4" />
                    Demo
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                )}
                {project.report && (
                  <Link 
                    href={project.report} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-sm font-semibold text-primary p-2 rounded-md transition-all hover:bg-primary/10 underline"
                    aria-label={`View ${project.title} Report`}
                  >
                    <FileText className="mr-1 h-4 w-4" />
                    Report
                    <ArrowUpRight className="ml-1 h-3 w-3" /> 
                  </Link>
                )}
                {project.live && (
                <Link 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-sm font-semibold text-primary p-2 rounded-md transition-all hover:bg-primary/10 underline"
                  aria-label={`View ${project.title} Live Site`}
                >
                  <Globe className="mr-1 h-4 w-4" />
                  Live Site
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
                )}
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((techItem, i) => (
                  <Badge 
                    key={i} 
                    className="text-xs font-medium text-primary bg-primary/10 border-transparent 
                                hover:bg-primary/20 transition-colors duration-200"
                  >
                    {techItem}
                  </Badge>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-12" />
    </section>
  );
}