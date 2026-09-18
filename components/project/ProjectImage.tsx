import Image from "next/image";
import type { ProjectImage as ProjectImageType } from "@/lib/types";

function PlaceholderMockup() {
  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="260" fill="var(--surface)" />
      <rect x="0" y="0" width="72" height="260" fill="var(--accent-soft)" />
      {[40, 80, 120, 160, 200].map((y) => (
        <rect key={y} x="18" y={y} width="36" height="8" rx="4" fill="var(--accent)" opacity="0.35" />
      ))}
      <rect x="72" y="0" width="328" height="34" fill="var(--surface-border)" opacity="0.4" />
      <circle cx="90" cy="17" r="6" fill="var(--accent)" opacity="0.5" />
      <rect x="110" y="12" width="80" height="10" rx="5" fill="var(--muted)" opacity="0.35" />
      <rect x="96" y="52" width="130" height="80" rx="8" fill="var(--surface-border)" opacity="0.55" />
      <rect x="236" y="52" width="130" height="80" rx="8" fill="var(--surface-border)" opacity="0.55" />
      <polyline
        points="106,120 130,95 150,105 175,75 200,90 216,60"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        opacity="0.7"
      />
      <rect x="96" y="146" width="270" height="90" rx="8" fill="var(--surface-border)" opacity="0.45" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={112 + i * 62}
          y={162 + (i % 2 === 0 ? 0 : 18)}
          width="46"
          height={56 - (i % 2 === 0 ? 0 : 18)}
          rx="4"
          fill="var(--accent-2)"
          opacity="0.3"
        />
      ))}
    </svg>
  );
}

export function ProjectImage({
  image,
  className = "",
  priority = false,
  fit = "cover",
  sizes = "(min-width: 1024px) 600px, 100vw",
}: {
  image: ProjectImageType | null;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-surface-border bg-surface ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-surface-border px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            className={`transition-transform duration-500 ease-out group-hover:scale-[1.06] ${
              fit === "cover" ? "object-cover" : "object-contain p-8"
            }`}
            sizes={sizes}
          />
        ) : (
          <>
            <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
              <PlaceholderMockup />
            </div>
            <span className="absolute right-3 top-3 rounded-full border border-accent/30 bg-background/80 px-3 py-1 font-mono text-xs text-accent backdrop-blur">
              Captura próximamente
            </span>
          </>
        )}
      </div>
    </div>
  );
}
