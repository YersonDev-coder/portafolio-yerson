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
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-accent text-black hover:bg-accent/90",
    secondary:
      "border border-surface-border bg-surface text-foreground hover:border-accent/50",
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
