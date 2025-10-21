import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#projects", label: "PROJECTS" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/athul-tmp", icon: Github, label: "GitHub" }, 
  { href: "https://www.linkedin.com/in/athul-thampan/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:athul.tmp@gmail.com", icon: Mail, label: "Mail" }
];

export function Sidebar() {
  const name = "Athul Thampan";
  const headline = "Computer Science Graduate";

  return (
    <div className="lg:sticky lg:top-0 lg:h-screen lg:w-full lg:max-w-md lg:p-16 flex flex-col justify-between py-12 px-6">
      
      {/* Top Section: Name and Headline */}
      <div className="flex-grow">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          <Link href="/">{name}</Link>
        </h1>
        <p className="mt-4 text-xl font-medium text-primary">
          {headline}
        </p>
        <p className="mt-8 text-lg text-muted-foreground hidden lg:block">
          I'm a Computer Science graduate from RMIT University who loves creating software that's both functional and thoughtful.
        </p>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block mt-16">
          <ul className="space-y-4">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
                <Separator className="w-16 transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between mt-12">
        
        {/* Social Links Group (Left side) */}
        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        
        {/* Theme Toggle (Right side) */}
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}