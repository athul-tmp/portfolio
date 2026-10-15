"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTheme } from "next-themes"; 
import { Spinner } from "./ui/spinner";

type Skill = {
  name: string;
  image: string;
  light_image?: string;
};

const SKILLS_DATA: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "C#", image: "/images/cs.svg" },
      { name: "ASP.NET Core", image: "/images/NETCore.svg" },
      { name: "JavaScript", image: "/images/js.png" },
      { name: "TypeScript", image: "/images/ts.png" },
      { name: "React", image: "/images/react.png" },
      { name: "Node.js", image: "/images/nodejs.svg" },
      { name: "Express.js", image: "/images/express_white.svg", light_image: "/images/express.svg" },
      { name: "Java", image: "/images/java.png" },
      { name: "Spring Boot", image: "/images/springboot.svg" },
      { name: "HTML", image: "/images/html.png" },
      { name: "CSS", image: "/images/css.png" },
      { name: "Tailwind CSS", image: "/images/tailwind.svg" },
      { name: "Python", image: "/images/python.png" },
      { name: "PHP", image: "/images/php.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", image: "/images/postgresql.png" },
      { name: "MySQL", image: "/images/mysql.svg" },
      { name: "SQLite", image: "/images/sqlite.png" },
      { name: "MongoDB", image: "/images/mongodb.svg" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3)", image: "/images/aws.png", light_image: "/images/aws_dark.svg" },
      { name: "Azure (Container Apps)", image: "/images/azure.svg" },
      { name: "Google Cloud (Cloud Run)", image: "/images/googlecloud.svg" },
      { name: "GitHub Actions", image: "/images/githubactions.svg" },
      { name: "Docker", image: "/images/docker.png" },
      { name: "Vercel", image: "/images/vercel_white.svg", light_image: "/images/vercel.svg" },
      { name: "Netlify", image: "/images/netlify.svg" },
    ],
  },
  {
    category: "Libraries & Testing",
    skills: [
      { name: "Axios", image: "/images/axios.svg" },
      { name: "Chakra UI", image: "/images/chakra.png" },
      { name: "shadcn/ui", image: "/images/ui_dark.svg", light_image: "/images/ui_light.svg" },
      { name: "Chart.js", image: "/images/chartjs.svg" },
      { name: "Jest", image: "/images/jest.svg" },
      { name: "JUnit", image: "/images/junit.svg" },
      { name: "xUnit", image: "/images/xunit_white.svg", light_image: "/images/xunit.svg" },
      { name: "Moq", image: "/images/moq.png" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", image: "/images/git.png" },
      { name: "Postman", image: "/images/postman.svg" },
      { name: "Figma", image: "/images/figma.png" },
      { name: "DBeaver", image: "/images/dbeaver.svg" },
      { name: "VS Code", image: "/images/vscode.png" },
      { name: "Claude Code", image: "/images/claude.svg" },
    ],
  },
];

export function SkillsSection() {
  const { resolvedTheme } = useTheme(); 
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="skills">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="space-y-12">
            <Spinner />
        </div>
        <Separator className="my-12" />
      </section>
    )
  }

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="space-y-12">
        {SKILLS_DATA.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold mb-4 text-primary">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => {
                
                const isLight = resolvedTheme === 'light';
                const imageSrc = 
                  isLight && skill.light_image 
                    ? skill.light_image 
                    : skill.image;

                return (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm flex items-center h-10 transition-transform duration-200 hover:scale-[1.05]"
                  >
                    {/* Image */}
                    <div className="relative h-6 w-6 mr-2">
                      <Image
                        src={imageSrc}
                        alt={skill.name}
                        fill
                        style={{ objectFit: 'contain' }} 
                        className="opacity-80 group-hover:opacity-100" 
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <span className="font-medium">{skill.name}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-12" />
    </section>
  );
}