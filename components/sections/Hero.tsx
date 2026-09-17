import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(circle_at_50%_-10%,var(--accent-soft),transparent_60%)]"
      />
      <Container>
        <p className="mb-4 font-mono text-sm text-accent">{`// ${site.role}`}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/90 sm:text-xl">
          {site.tagline}
        </p>
        <p className="mt-4 max-w-xl text-muted">{site.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/#proyectos">Ver proyectos</Button>
          <Button href={`mailto:${site.email}`} variant="secondary">
            Contactarme
          </Button>
        </div>
      </Container>
    </section>
  );
}
