import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SKILLS_DATA = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C#", "C++", "HTML", "CSS", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Spring Boot", ".NET Core", "Chakra UI", "Tailwind CSS", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite", "MS SQL Server", "MongoDB", "DynamoDB"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "AWS", "Firebase", "Docker", "VS Code", "Figma"],
  },
  {
    category: "Operating Systems",
    skills: ["macOS", "Linux", "Windows"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

      <div className="space-y-12">
        {SKILLS_DATA.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold mb-4 text-primary">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
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