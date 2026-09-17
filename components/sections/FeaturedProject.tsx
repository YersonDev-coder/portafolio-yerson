import Link from "next/link";
import type { Project } from "@/lib/types";
import { ProjectImage } from "@/components/project/ProjectImage";
import { TechPill } from "@/components/project/TechPill";
import { ProjectLinks } from "@/components/project/ProjectLinks";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <Section id="proyecto-destacado" kicker="Proyecto destacado" className="pt-0 sm:pt-0">
      <RevealOnScroll>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ProjectImage image={project.image} priority className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 text-muted">{project.tagline}</p>
            <p className="mt-4 text-foreground/90">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <TechPill key={tech}>{tech}</TechPill>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-accent/20 bg-accent-soft p-4">
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-accent">Por qué importa: </span>
                kárdex, roles de usuario, expedientes y auditoría — la misma lógica de
                control que exige un sistema ERP.
              </p>
            </div>

            <div className="mt-6">
              <ProjectLinks project={project} />
            </div>

            <Link
              href={`/proyectos/${project.slug}`}
              className="mt-4 inline-block text-sm text-muted transition-colors hover:text-foreground"
            >
              Ver caso completo →
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
