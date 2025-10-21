import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image"; 
import Link from "next/link";
import { Github, PlayCircle, FileText } from "lucide-react"; 

const projectsData = [
  {
    title: "TeachTeam - Teaching Team Management App",
    image: "/images/teachteam.png", 
    description: "A full-stack platform for managing university teaching teams. Candidates can apply to available courses, and lecturers can review, select, rank, and comment on them through secure, role-based dashboards. Includes an admin panel to assign lecturers to courses, block/unblock candidate logins, manage course data (create/edit/update), and view performance reports. Built with React (TypeScript), Chakra UI, Node.js, Express, and TypeORM, using REST and GraphQL APIs, Recharts for analytics, and MySQL.",
    tech: ["React (TypeScript)", "Node.js", "Express", "TypeORM", "GraphQL", "MySQL", "Chakra UI", "Recharts"],
    demo: "https://drive.google.com/file/d/15oHFyux0pwvxstbkY8mE9hByEYL7Z7RM/view?usp=sharing",
    repo: "https://github.com/athul-tmp/TeachTeam",
  },
  {
    title: "VetCare - Online Vet Clinic Management System",
    image: "/images/VetCare.png",
    description: "A full-stack web app for managing veterinary clinic operations, including appointment scheduling/rescheduling, medical record management, and prescription tracking, integrated with authentication. Built with Spring Boot and MySQL, containerized using Docker.",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    demo: "https://drive.google.com/file/d/1F08xx3LhwmULGUv1ZK2bf_tGriwy8y5H/view?usp=sharing",
  },
  {
    title: "Airbnb Booking Website",
    image: "/images/airbnb.png",
    description: "A full-stack web app simulating an Airbnb booking system using MongoDB, React, TypeScript, Node.js, Express, and Chakra UI. Users can browse listings from MongoDB's sample_airbnb database and create new bookings for those listings, showcasing core CRUD functionality with a focus on booking creation and listing retrieval.",
    tech: ["MongoDB", "React", "TypeScript", "Node.js", "Express", "Chakra UI"],
    repo: "https://github.com/athul-tmp/airbnb-booking-app",
    demo: "https://drive.google.com/file/d/1FDB2GqPM9NOIhKNOLXevuM2lqU1h35yw/view?usp=sharing",
  },
  {
    title: "Music Subscription App",
    image: "/images/Music_App.png",
    description: "A web app built with HTML, CSS, JavaScript, and PHP, hosted on AWS EC2. It uses DynamoDB for user authentication and AWS S3 for image storage.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "AWS (S3, DynamoDB, EC2)"],
    demo: "https://drive.google.com/file/d/1yiK10mySCjGmvhRxm1KdEPc5Br41N_mn/view?usp=sharing",
  },
  {
    title: "Vacuum Cleaner Game",
    image: "/images/Vacuum_Cleaner.png",
    description: "Created a vacuum cleaner game in C++ using OOP principles with a command-line interface. Players navigate a 10x10 grid with text-based commands.",
    tech: ["C++"],
    demo: "https://drive.google.com/file/d/1ZJcLrHsDaiwb9Wh05ghvfdG1gYi3tXLq/view?usp=sharing",
  },
  {
    title: "Minecraft Village Generator",
    image: "/images/Minecraft_Village.png",
    description: "A procedural Minecraft village generator in Python using MCPI. It dynamically generates villages with varying room sizes and pathways, adding trees for realism.",
    tech: ["Python"],
    repo: "https://github.com/athul-tmp/Minecraft-Village-Generator",
    demo: "https://www.youtube.com/watch?v=raSy0x0HETk",
  },
  {
    title: "Closing The Gap",
    image: "/images/Closing_The_Gap.png",
    description: "Developed a web app to highlight socio-economic disparities between Indigenous and non-Indigenous Australians, using Java, Javalin, SQLite, and tabular data visualisations.",
    tech: ["Java", "HTML", "CSS", "SQL"],
    demo: "https://drive.google.com/file/d/1EULJZOG9AyldtHaeqRjcMYZicBthZEHC/view?usp=sharing",
  },
  {
    title: "Rock-Paper-Scissors",
    image: "/images/Rock_Paper_Scissors.png",
    description: "Built an interactive rock-paper-scissors game with HTML, CSS, and JavaScript, where users play against a computer opponent.",
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/athul-tmp/rock-paper-scissors",
    demo: "https://athul-tmp.github.io/rock-paper-scissors/",
  },
  {
    title: "Facebook Metrics Analysis",
    image: "/images/FB_metrics.png",
    description: "Analysed a 2014 Facebook dataset of posts from a cosmetics brand using Python, Pandas, and Matplotlib for data cleaning and visualisation.",
    tech: ["Python", "NumPy", "Matplotlib", "Pandas", "Jupyter Notebook"],
    repo: "https://github.com/athul-tmp/Facebook-Metrics-Analysis",
    report: "https://github.com/athul-tmp/Facebook-Metrics-Analysis/blob/main/Phase1_Project.ipynb",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      
      <p className="mb-4 text-muted-foreground">
        The code repository for this portfolio website can be accessed <Link href="https://github.com/athul-tmp/portfolio" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">here</Link>.
      </p>
      <p className="mb-8 text-muted-foreground">
        The following are some of the projects that I've been involved in over the years:
      </p>

      {/* Grid Layout for Project Cards */}
      <div className="grid gap-12">
        {projectsData.map((project, idx) => (
          <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 w-full">
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    style={{objectFit : "cover"}}
                    className="transition-transform duration-500 hover:scale-[1.02]"
                />
            </div>
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-base text-muted-foreground mb-4">
                {project.description}
              </CardDescription>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, i) => (
                  <Badge key={i} variant="outline" className="text-xs font-normal">
                    {techItem}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-wrap gap-3">
              {/* Project Links (Repo, Demo, Report) */}
              {project.repo && (
                <Button asChild variant="outline">
                  <Link href={project.repo} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button asChild variant="default">
                  <Link href={project.demo} target="_blank" rel="noreferrer">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              )}
              {project.report && (
                <Button asChild variant="secondary">
                  <Link href={project.report} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Report
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />
    </section>
  );
}