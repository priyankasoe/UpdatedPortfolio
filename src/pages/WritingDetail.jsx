import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatedCircle } from "../components/AnimatedCircle";
import { formatWritingDate, parseWritings } from "@/lib/writings";

export const WritingDetail = () => {
  const { id } = useParams();
  const [writing, setWriting] = useState(null);

  useEffect(() => {
    fetch("/data/writings.csv")
      .then((response) => response.text())
      .then((data) => {
        const parsedWritings = parseWritings(data);
        const selectedWriting = parsedWritings.find((w) => w.id === id);
        setWriting(selectedWriting);
      });
  }, [id]);

  if (!writing) return <div>Loading...</div>;

  const paragraphs = writing.content
    .split(/\n\s*\n/)
    .filter((paragraph) => paragraph.trim().length > 0);
  const normalizedTitle = writing.title.trim().toLowerCase();
  const cleanedParagraphs = paragraphs.filter((paragraph, index) => {
    if (index !== 0) return true;
    const normalizedParagraph = paragraph
      .trim()
      .replace(/^["'“”‘’]+|["'“”‘’]+$/g, "")
      .toLowerCase();
    return normalizedParagraph !== normalizedTitle;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="py-24 px-4 relative">
        <AnimatedCircle /> {/* Add the animated circle */}
        <div className="container mx-auto max-w-3xl relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{writing.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {formatWritingDate(writing.date)}
          </p>
          <div className="space-y-6 text-lg leading-relaxed">
            {cleanedParagraphs.map((paragraph, index) => (
              <p key={`${writing.id}-paragraph-${index}`} className="whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
