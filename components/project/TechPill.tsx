export function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block cursor-default rounded-md border border-surface-border bg-surface px-2.5 py-1 font-mono text-xs text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:text-accent">
      {children}
    </span>
  );
}
