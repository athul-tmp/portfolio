"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTheme } from "next-themes"; 
import { Spinner } from "./ui/spinner";

const SKILLS_DATA = [
  {
    category: "Languages",
    skills: [
      { name: "Python", image: "/images/python.png" }, 
      { name: "Java", image: "/images/java.png" },
      { name: "C#", image: "/images/cs.svg" },
      { name: "C++", image: "/images/cplusplus.png" },
      { name: "HTML", image: "/images/html.png" },
      { name: "CSS", image: "/images/css.png" },
      { name: "JavaScript", image: "/images/js.png" },
      { name: "TypeScript", image: "/images/ts.png" },
      { name: "PHP", image: "/images/php.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", image: "/images/react.png" },
      { name: "Node.js", image: "/images/nodejs.svg" },
      { name: "Spring Boot", image: "/images/springboot.svg" },
      { name: ".NET Core", image: "/images/NETCore.svg" },
      { name: "Chakra UI", image: "/images/chakra.png" },
      { name: "Shadcn UI", image: "/images/ui_dark.svg", light_image: "/images/ui_light.svg" }, 
      { name: "Tailwind CSS", image: "/images/tailwind.svg" },
      { name: "GraphQL", image: "/images/graphql.png" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", image: "/images/mysql.svg" },
      { name: "SQLite", image: "/images/sqlite.png" },
      { name: "MS SQL Server", image: "/images/mssql.png" },
      { name: "PostgreSQL", image: "/images/postgresql.png"},
      { name: "MongoDB", image: "/images/mongodb.svg" },
      { name: "DynamoDB", image: "/images/DynamoDB.png" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", image: "/images/git.png" },
      { name: "AWS", image: "/images/aws.png", light_image: "/images/aws_dark.svg" }, 
      { name: "Firebase", image: "/images/firebase.svg" },
      { name: "Docker", image: "/images/docker.png" },
      { name: "VS Code", image: "/images/vscode.png" },
      { name: "Figma", image: "/images/figma.png" },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "macOS", image: "/images/macos.png", light_image: "/images/apple_dark.png"}, 
      { name: "Linux", image: "/images/linux.png" },
      { name: "Windows", image: "/images/windows.png" },
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