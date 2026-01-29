import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatWritingDate, getWritingExcerpt, parseWritings } from "@/lib/writings";

export const WritingsSection = () => {
  const [writings, setWritings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the dummy data from the CSV file
    fetch("/src/data/writings.csv")
      .then((response) => response.text())
      .then((data) => {
        setWritings(parseWritings(data));
      });
  }, []);

  return (
    <section id="writings" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          equilibrium of <span className="text-primary">the introspect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
			that was pretentious. this is simply just words. 
		</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {writings.map((writing) => (
            <div
              key={writing.id}
              className="group bg-card p-6 rounded-3xl shadow-xs card-hover flex flex-col items-center text-center cursor-pointer"
              onClick={() => navigate(`/writing/${writing.id}`)}
            >
              <h3 className="text-lg font-semibold">{writing.title}</h3>
              <p className="text-sm text-muted-foreground">
                {formatWritingDate(writing.date)}
              </p>
              <p className="mt-3 text-sm text-muted-foreground/90">
                {getWritingExcerpt(writing.content, 140)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
