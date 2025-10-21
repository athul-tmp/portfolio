import { Separator } from "@/components/ui/separator";

export function AboutMeSection() {
  return (
    <section id="about" >
      <h2 className="text-3xl font-bold mb-8">About</h2>
      
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm <strong>Athul</strong>, a Computer Science graduate from RMIT University who loves creating software that's both functional and thoughtful. I'm always experimenting with new tools, improving my projects, and diving into things that make me a better developer.
        </p>
        <p>
          Check out some of my projects!
        </p>
      </div>

      <Separator className="my-12" />
    </section>
  );
}