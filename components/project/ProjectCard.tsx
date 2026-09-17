import Link from "next/link";
import type { Project } from "@/lib/types";
import { ProjectImage } from "./ProjectImage";
import { TechPill } from "./TechPill";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface/50 transition-colors hover:border-accent/40 ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <Link href={`/proyectos/${project.slug}`} className="block">
        <ProjectImage
          image={project.image}
          fit={project.imageKind === "logo" ? "contain" : "cover"}
          className="rounded-none border-0 border-b border-surface-border"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Link href={`/proyectos/${project.slug}`}>
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
          </Link>
          {project.status === "local-only" && <Badge tone="accent">En desarrollo</Badge>}
        </div>
        <p className="text-sm text-muted">{project.tagline}</p>

        {wide && project.modules && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.modules.map((m) => (
              <TechPill key={m}>{m}</TechPill>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.stack.slice(0, 5).map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-3 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-accent/80"
            >
              Visitar sitio
            </a>
          )}
          <Link
            href={`/proyectos/${project.slug}`}
            className="ml-auto text-muted transition-colors hover:text-foreground"
          >
            Ver detalle →
          </Link>
        </div>
      </div>
    </div>
  );
}
