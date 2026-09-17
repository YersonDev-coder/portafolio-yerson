export function Badge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
}) {
  const tones: Record<string, string> = {
    default: "border-surface-border bg-surface text-foreground",
    accent: "border-accent/30 bg-accent-soft text-accent",
    muted: "border-surface-border bg-surface text-muted",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
