import { Bot, Code, PenLine } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          who am <span className="text-primary"> I?</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6">

        <div className="flex-1 gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">0</h4>
              <p className="text-muted-foreground">
                <br /> Six years of experience in robotics, with knowledge in control systems, computer vision, and machine learning integrations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">1</h4>
              <p className="text-muted-foreground">
                 <br /> Fascinated with proof-based thinking, the evolving landscape of education, and how we can leverage AI to enhance it. 
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 gradient-border p-6 card-hover">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <PenLine className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">The Space Between</h4>
              <p className="text-muted-foreground">
                <br /> Constantly oscillating around various permutations of numbers and letters. <br /> (TLDR; I enjoy writing and doing math).
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>

    </section>
  );
};