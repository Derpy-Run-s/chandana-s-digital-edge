import ScrollReveal from "./ScrollReveal";

const skills = [
  "SQL", "Data Engineering", "ETL Pipelines", "RESTful APIs",
  "AWS (Certified Developer)", "CI/CD", "NoSQL", "Python",
  "Full Stack Development", "Cloud Architecture", "Monitoring & Logging",
  "Teamwork", "Management",
];

const SkillsMarquee = () => {
  const doubled = [...skills, ...skills];

  return (
    <section className="py-32 md:py-48 overflow-hidden">
      <ScrollReveal className="mb-16 px-6">
        <div className="container max-w-5xl">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
            03 / The Stack
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
            Core Competencies
          </h2>
        </div>
      </ScrollReveal>

      {/* Marquee row 1 */}
      <div className="relative mb-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((skill, i) => (
            <span
              key={`a-${i}`}
              className="inline-flex items-center px-6 md:px-10 py-3 md:py-4 mx-2 border border-border text-sm md:text-base font-body text-silver hover:text-glow hover:border-glow/30 transition-all duration-500 shrink-0"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 - reverse */}
      <div className="relative">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 35s linear infinite reverse",
          }}
        >
          {[...doubled].reverse().map((skill, i) => (
            <span
              key={`b-${i}`}
              className="inline-flex items-center px-6 md:px-10 py-3 md:py-4 mx-2 border border-border text-sm md:text-base font-body text-muted-foreground hover:text-glow hover:border-glow/30 transition-all duration-500 shrink-0"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Asymmetric skill highlights */}
      <ScrollReveal delay={200} className="mt-20 px-6">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { label: "Data & Backend", items: "SQL · ETL · APIs · NoSQL" },
              { label: "Cloud & DevOps", items: "AWS · CI/CD · Deployment" },
              { label: "Leadership", items: "Teamwork · Management" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="bg-void p-8 md:p-10 group hover:bg-obsidian transition-colors duration-500"
              >
                <h3 className="font-display text-sm font-medium text-glow mb-3 tracking-wide">
                  {cat.label}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed tracking-wide group-hover:text-silver transition-colors duration-500">
                  {cat.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SkillsMarquee;
