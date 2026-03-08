import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const SectionTitle = ({ children, mono }: { children: string; mono?: string }) => (
  <div className="mb-12 md:mb-16">
    {mono && <span className="font-mono text-xs tracking-widest uppercase text-dim mb-3 block">{mono}</span>}
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{children}</h2>
  </div>
);

const skills = {
  "Data & Backend": ["SQL", "Data Engineering", "ETL Pipelines", "RESTful APIs", "Relational Databases", "NoSQL Databases"],
  "Cloud & DevOps": ["AWS (Certified Developer – Associate)", "CI/CD Pipelines", "Deployment", "Monitoring & Logging"],
  Leadership: ["Teamwork", "Management"],
};

const experiences = [
  {
    org: "University of North Texas",
    role: "Student Assistant",
    period: "April 2024 — May 2025",
    highlights: [
      "Handled data processing and visualization workflows",
      "Integrated authentication systems",
      "Optimized NoSQL and SQL queries for performance",
      "Automated ETL pipelines for data ingestion",
      "Built CI/CD pipelines and deployed AWS cloud infrastructure",
    ],
  },
  {
    org: "Cognizant",
    role: "Programming Analyst",
    period: "August 2021 — July 2023",
    highlights: [],
  },
  {
    org: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "March 2021 — July 2021",
    highlights: [
      "Assisted in web application development",
      "Developed RESTful APIs",
      "Contributed to automated testing suites",
      "Refactored codebase for scalability",
    ],
  },
];

const education = [
  { degree: "M.S. in Data Science", school: "University of North Texas", period: "Aug 2023 — May 2025" },
  { degree: "B.Tech in Electronics & Communications Engineering", school: "Anurag Group of Institutions", period: "Nov 2017 — Jan 2021" },
];

const awards = ["Certificate of Excellence in Academics", "Roll of Honors", "Academic Excellence Award"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <motion.div
          className="relative z-10 max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-xs tracking-[0.3em] uppercase text-dim mb-6">
            Portfolio
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
            Vemula<br />Chandana
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-6 md:mt-8 text-base md:text-lg font-light tracking-wide text-subtle max-w-xl mx-auto">
            Data Science Master's · Analytical Innovator & Problem Solver
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/vemulachandana-08b4511b1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-foreground/20 text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-foreground text-background text-sm font-medium tracking-wide hover:bg-primary transition-all duration-300"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32 px-6">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionTitle mono="01 / About">Overview</SectionTitle>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-subtle text-base md:text-lg leading-relaxed font-light">
              Experienced Full Stack Developer transitioning into Data Science. Expertise in designing, developing, and optimizing scalable applications. Skilled in backend and frontend development, API design, cloud solutions (AWS), and data engineering — ensuring high-performance and efficient software solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container max-w-3xl px-6"><div className="h-px bg-border" /></div>

      {/* Skills */}
      <section className="py-24 md:py-32 px-6">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionTitle mono="02 / Competencies">Core Skills</SectionTitle>
            </motion.div>
            {Object.entries(skills).map(([category, items], ci) => (
              <motion.div key={category} variants={fadeUp} custom={ci + 1} className="mb-10 last:mb-0">
                <h3 className="font-mono text-xs tracking-widest uppercase text-dim mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium text-secondary-foreground bg-secondary border border-border hover:border-primary/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="container max-w-3xl px-6"><div className="h-px bg-border" /></div>

      {/* Experience */}
      <section className="py-24 md:py-32 px-6">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionTitle mono="03 / Experience">Professional Journey</SectionTitle>
            </motion.div>
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} className="relative pl-6 border-l border-border">
                  <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-[5px] bg-primary/60 rounded-full" />
                  <span className="font-mono text-xs text-dim tracking-wider">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-subtle text-sm mt-0.5">{exp.org}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container max-w-3xl px-6"><div className="h-px bg-border" /></div>

      {/* Education */}
      <section className="py-24 md:py-32 px-6">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp}>
              <SectionTitle mono="04 / Education">Education & Honors</SectionTitle>
            </motion.div>
            <div className="space-y-8">
              {education.map((ed, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1}>
                  <span className="font-mono text-xs text-dim tracking-wider">{ed.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{ed.degree}</h3>
                  <p className="text-subtle text-sm mt-0.5">{ed.school}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} custom={3} className="mt-12 pt-8 border-t border-border">
              <h3 className="font-mono text-xs tracking-widest uppercase text-dim mb-4">Awards</h3>
              <div className="flex flex-wrap gap-3">
                {awards.map((award) => (
                  <span key={award} className="px-4 py-2 text-sm font-medium text-secondary-foreground bg-secondary border border-border">
                    {award}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dim tracking-wider">© {new Date().getFullYear()} Vemula Chandana</p>
          <div className="flex items-center gap-6">
            <a href="mailto:chandana@example.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/vemulachandana-08b4511b1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
