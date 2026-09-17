import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-surface-border/60 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} {site.name}.</p>
        <p>Hecho con Next.js, Tailwind CSS y desplegado en Vercel.</p>
      </div>
    </footer>
  );
}
