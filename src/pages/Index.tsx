import { Linkedin, Mail } from "lucide-react";
import CustomCursor from "../components/CustomCursor";
import ScrollReveal from "../components/ScrollReveal";
import SkillsMarquee from "../components/SkillsMarquee";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { generateResumePDF } from "../lib/generateResume";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <CustomCursor />

      {/* ═══ HERO VOID ═══ */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 overflow-hidden">
        {/* Atmospheric gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 20%, hsl(0 0% 6%) 0%, hsl(0 0% 1.2%) 70%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 container max-w-5xl">
          {/* Staggered load */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
              Portfolio — 2025
            </span>
          </div>

          <div className="mt-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.85] tracking-tighter text-foreground">
              Vemula
              <br />
              <span className="text-glow">Chandana</span>
            </h1>
          </div>

          <div className="mt-8 md:mt-10 max-w-lg opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed tracking-wider">
              Data Science Master's &nbsp;·&nbsp; Analytical Innovator &nbsp;·&nbsp; Problem Solver
            </p>
          </div>

          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "1.1s" }}>
            <a
              href="https://linkedin.com/in/vemulachandana-08b4511b1"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 font-body text-[11px] text-foreground tracking-[0.2em] uppercase hover:bg-glow hover:text-background transition-all duration-500"
            >
              <Linkedin size={14} />
              View LinkedIn
            </a>
            <button
              onClick={generateResumePDF}
              data-magnetic
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground font-body text-[11px] text-background tracking-[0.2em] uppercase hover:bg-glow transition-all duration-500"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* ═══ THE ARCHITECTURE (About) ═══ */}
      <section className="py-32 md:py-48 px-6">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <ScrollReveal>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground block">
                02 / About
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-body text-sm md:text-base text-silver leading-[2] tracking-wide max-w-2xl">
                Experienced Full Stack Developer transitioning into Data Science.
                Architecting scalable applications, optimizing backend systems,
                and engineering high-performance data pipelines via AWS.
                Skilled in API design, cloud infrastructure, and data engineering —
                ensuring efficient, production-grade software solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="container max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ THE STACK (Skills) ═══ */}
      <SkillsMarquee />

      <div className="container max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ THE LEDGER (Experience & Education) ═══ */}
      <ExperienceTimeline />

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border py-16 px-6">
        <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} Vemula Chandana
          </p>
          <div className="flex items-center gap-8">
            <a
              href="mailto:chandana@example.com"
              className="text-muted-foreground hover:text-glow transition-colors duration-500"
              data-magnetic
            >
              <Mail size={16} />
            </a>
            <a
              href="https://linkedin.com/in/vemulachandana-08b4511b1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-glow transition-colors duration-500"
              data-magnetic
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
