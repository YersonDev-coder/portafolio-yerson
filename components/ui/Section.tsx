import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>
        {(kicker || title) && (
          <div className="mb-10 sm:mb-14">
            {kicker && (
              <p className="mb-3 font-mono text-sm text-accent">{`// ${kicker}`}</p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
