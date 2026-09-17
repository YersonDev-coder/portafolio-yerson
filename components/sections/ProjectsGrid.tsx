import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { Project } from "@/lib/types";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <Section id="proyectos" kicker="Proyectos" title="Más proyectos">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 80} className={project.modules ? "sm:col-span-2" : ""}>
            <ProjectCard project={project} wide={Boolean(project.modules)} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
