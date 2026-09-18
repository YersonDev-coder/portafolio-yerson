import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";
import { education } from "@/content/profile";

const links = [
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#stack", label: "Stack" },
  { href: "/#proyectos", label: "Proyectos" },
  ...(education.length ? [{ href: "/#formacion", label: "Formación" }] : []),
  { href: "/#contacto", label: "Contacto" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group font-mono text-sm font-semibold text-foreground"
        >
          yrv
          <span className="text-accent transition-transform duration-300 inline-block group-hover:rotate-180">
            .
          </span>
          dev
        </Link>
        <nav className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group/nav relative text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/nav relative hidden text-sm text-muted transition-colors hover:text-foreground sm:inline"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/nav:w-full" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
