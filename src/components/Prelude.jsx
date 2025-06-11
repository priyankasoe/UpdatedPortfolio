import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const Prelude = () => {
  const [text, setText] = useState("");
  const fullText =
    "   I notice my mind, in its leisure minutes or hours, in constant dispute between the discrete and the continuous. There are certain aspects of coherent brain function that occur within the analog domain but can only be recalled in a digitized one. And, digitized, I do not correspond solely to pixels on a screen, which are only a subsection of “digital,” but rather the fragmented, numeric interval.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 75); // Adjust speed here (50ms per letter)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="prelude" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-lg md:text-xl font-medium mb-8 italic text-center">
          {text}
        </div>
        <a href="#about" className="cosmic-button-2">
              ready?
        </a>
      </div>
    </section>
  );
};