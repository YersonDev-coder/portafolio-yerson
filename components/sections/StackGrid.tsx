import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TechPill } from "@/components/project/TechPill";
import { skills } from "@/content/skills";

export function StackGrid() {
  return (
    <Section
      id="stack"
      kicker="Stack y tecnologías"
      title="Herramientas que uso en proyectos reales"
      subtitle="No solo en tutoriales — todas aparecen en al menos uno de los proyectos de abajo."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <RevealOnScroll key={group.label} delay={i * 60}>
            <div className="h-full rounded-lg border border-surface-border bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-[0_12px_30px_-14px_rgba(0,0,0,0.4)]">
              <h3 className="mb-3 font-mono text-sm text-accent">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechPill key={item}>{item}</TechPill>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
