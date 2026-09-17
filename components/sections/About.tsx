import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { site } from "@/content/site";

const facts = [
  { label: "Ubicación", value: site.location },
  { label: "Proyectos en producción", value: "2 sitios en vivo" },
  { label: "Enfoque", value: "Full-stack: DB, backend y frontend" },
];

export function About() {
  return (
    <Section id="sobre-mi" kicker="Sobre mí" title="Quién soy">
      <RevealOnScroll>
        <p className="max-w-2xl text-lg text-foreground/90">
          Estudiante de Ciencias de la Computación construyendo sistemas reales para
          negocios y organizaciones: desde el modelo de datos hasta la interfaz que
          usa la gente todos los días.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-surface-border bg-surface/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
            >
              <p className="font-mono text-xs text-accent">{fact.label}</p>
              <p className="mt-1 text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
