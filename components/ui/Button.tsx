import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";
  const variants: Record<string, string> = {
    primary: "bg-accent text-black shadow-[0_0_0_rgba(45,212,191,0)] hover:bg-accent/90 hover:shadow-[0_6px_20px_-4px_var(--accent)]",
    secondary:
      "border border-surface-border bg-surface text-foreground hover:border-accent/50 hover:text-accent",
  };
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${variants[variant]}`} {...linkProps}>
      {children}
    </Link>
  );
}
