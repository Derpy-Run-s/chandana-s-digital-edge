import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  details: string[];
  type: "work" | "edu";
}

const entries: TimelineEntry[] = [
  {
    period: "2024 — 2025",
    role: "Student Assistant",
    org: "University of North Texas",
    type: "work",
    details: [
      "Engineered data processing & visualization pipelines",
      "Integrated authentication across distributed systems",
      "Optimized NoSQL/SQL queries for 3x performance gains",
      "Automated ETL pipelines for large-scale data ingestion",
      "Deployed AWS cloud infrastructure with CI/CD",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Programming Analyst",
    org: "Cognizant",
    type: "work",
    details: [
      "Architected scalable backend systems",
      "AWS deployment & infrastructure management",
      "ETL automation & data pipeline optimization",
      "RESTful API design & integration",
    ],
  },
  {
    period: "2021",
    role: "Programmer Analyst Trainee",
    org: "Cognizant",
    type: "work",
    details: [
      "Web application development & deployment",
      "Developed RESTful APIs for microservices",
      "Automated testing suite development",
      "Code refactoring for scalability",
    ],
  },
  {
    period: "2023 — 2025",
    role: "M.S. in Data Science",
    org: "University of North Texas",
    type: "edu",
    details: [],
  },
  {
    period: "2017 — 2021",
    role: "B.Tech in Electronics & Communications",
    org: "Anurag Group of Institutions",
    type: "edu",
    details: [],
  },
];

const honors = ["Certificate of Excellence in Academics", "Roll of Honors", "Academic Excellence Award"];

const TimelineItem = ({ entry, index }: { entry: TimelineEntry; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 100}>
      <div
        className="group relative grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-8 border-b border-border cursor-pointer"
        onClick={() => entry.details.length > 0 && setIsOpen(!isOpen)}
        onKeyDown={(e) => e.key === "Enter" && entry.details.length > 0 && setIsOpen(!isOpen)}
        role={entry.details.length > 0 ? "button" : undefined}
        tabIndex={entry.details.length > 0 ? 0 : undefined}
      >
        {/* Period */}
        <span className="font-body text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] pt-1">
          {entry.period}
        </span>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground group-hover:text-glow transition-colors duration-500">
                {entry.role}
              </h3>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wider">
                {entry.org}
              </p>
            </div>
            {entry.details.length > 0 && (
              <span
                className="font-body text-xs text-muted-foreground group-hover:text-glow transition-all duration-300 shrink-0 mt-1"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
              >
                +
              </span>
            )}
          </div>

          {/* Expandable details */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{
              maxHeight: isOpen ? "400px" : "0px",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <ul className="mt-6 space-y-3">
              {entry.details.map((d, i) => (
                <li key={i} className="font-body text-xs text-silver leading-relaxed flex items-start gap-3">
                  <span className="w-px h-3 bg-glow/30 shrink-0 mt-1" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ExperienceTimeline = () => {
  const workEntries = entries.filter((e) => e.type === "work");
  const eduEntries = entries.filter((e) => e.type === "edu");

  return (
    <section className="py-32 md:py-48 px-6">
      <div className="container max-w-5xl">
        {/* Experience */}
        <ScrollReveal className="mb-16">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            04 / The Ledger
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
            Experience
          </h2>
        </ScrollReveal>

        <div className="border-t border-border">
          {workEntries.map((entry, i) => (
            <TimelineItem key={i} entry={entry} index={i} />
          ))}
        </div>

        {/* Education */}
        <ScrollReveal className="mt-32 mb-16">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            05 / Education
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
            Academic Background
          </h2>
        </ScrollReveal>

        <div className="border-t border-border">
          {eduEntries.map((entry, i) => (
            <TimelineItem key={i} entry={entry} index={i} />
          ))}
        </div>

        {/* Honors */}
        <ScrollReveal delay={200} className="mt-20">
          <div className="border-t border-border pt-10">
            <h3 className="font-display text-sm font-medium text-glow mb-6 tracking-wide">Honors</h3>
            <div className="flex flex-wrap gap-3">
              {honors.map((h) => (
                <span
                  key={h}
                  className="font-body text-[11px] text-muted-foreground border border-border px-5 py-2.5 hover:text-glow hover:border-glow/20 transition-all duration-500 tracking-wider"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
