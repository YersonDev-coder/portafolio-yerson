import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import type { TimelineItem } from "@/lib/types";

export function Timeline({
  id,
  kicker,
  title,
  items,
}: {
  id: string;
  kicker: string;
  title: string;
  items: TimelineItem[];
}) {
  if (items.length === 0) return null;
  return (
    <Section id={id} kicker={kicker} title={title}>
      <RevealOnScroll>
        <ol className="space-y-4 border-l border-surface-border pl-6">
          {items.map((item) => (
            <li
              key={`${item.title}-${item.subtitle}`}
              className="relative rounded-lg border border-surface-border bg-surface/50 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-surface"
            >
              <span
                aria-hidden
                className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full bg-accent"
              />
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-foreground/90">{item.subtitle}</p>
                </div>
                {item.date && <Badge tone="accent">{item.date}</Badge>}
              </div>
              {item.description && (
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              )}
              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-xs text-accent hover:underline"
                >
                  Ver certificado
                </a>
              )}
            </li>
          ))}
        </ol>
      </RevealOnScroll>
    </Section>
  );
}
