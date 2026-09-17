import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { otherRepos } from "@/content/other-repos";
import { site } from "@/content/site";

export function OtherRepos() {
  return (
    <Section
      id="otros-repositorios"
      kicker="Otros repositorios"
      title="Prácticas, landings y experimentos"
      subtitle="También viven en mi GitHub, con menos alcance que los proyectos de arriba."
    >
      <RevealOnScroll>
        <div className="divide-y divide-surface-border overflow-hidden rounded-lg border border-surface-border bg-surface/50">
          {otherRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="font-mono text-sm text-foreground">{repo.name}</span>
                <p className="text-sm text-muted">{repo.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted">{repo.type}</span>
                <span className="text-sm text-accent">GitHub →</span>
              </div>
            </a>
          ))}
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-muted transition-colors hover:text-foreground"
        >
          Ver todo en GitHub →
        </a>
      </RevealOnScroll>
    </Section>
  );
}
