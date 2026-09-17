import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectImage } from "@/components/project/ProjectImage";
import { TechPill } from "@/components/project/TechPill";
import { ProjectLinks } from "@/components/project/ProjectLinks";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Proyecto`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Link href="/#proyectos" className="text-sm text-muted transition-colors hover:text-foreground">
          ← Volver a proyectos
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{project.name}</h1>
          {project.status === "local-only" && <Badge tone="accent">En desarrollo</Badge>}
        </div>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <ProjectImage image={project.image} priority fit={project.imageKind === "logo" ? "contain" : "cover"} />

          <div>
            <p className="text-foreground/90">{project.description}</p>

            {project.modules && (
              <div className="mt-5">
                <h2 className="mb-2 font-mono text-sm text-accent">Módulos</h2>
                <div className="flex flex-wrap gap-2">
                  {project.modules.map((m) => (
                    <TechPill key={m}>{m}</TechPill>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5">
              <h2 className="mb-2 font-mono text-sm text-accent">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h2 className="mb-2 font-mono text-sm text-accent">Características</h2>
              <ul className="space-y-1.5 text-foreground/90">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent">–</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
