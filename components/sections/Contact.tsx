import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section
      id="contacto"
      kicker="Contacto"
      title="¿Trabajamos juntos?"
      subtitle="Disponible para prácticas y proyectos full-stack. Escríbeme y te respondo pronto."
    >
      <RevealOnScroll>
        <div className="flex flex-wrap gap-4">
          <Button href={`mailto:${site.email}`}>Escribirme</Button>
          <Button
            href={`https://wa.me/${site.whatsapp}`}
            variant="secondary"
            external
          >
            WhatsApp
          </Button>
          <Button href={site.github} variant="secondary" external>
            GitHub
          </Button>
        </div>
        <div className="mt-6 flex flex-col gap-1 text-sm text-muted">
          <span>{site.email}</span>
          <span>{site.whatsappDisplay}</span>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
