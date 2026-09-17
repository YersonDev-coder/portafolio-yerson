import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Astro", "JavaScript", "HTML / CSS", "Tailwind CSS"] },
  { label: "Backend", items: ["Django", "Django REST Framework", "Node.js", "JWT"] },
  { label: "Bases de datos", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { label: "Infraestructura", items: ["Docker", "Render", "Vercel", "Git / GitHub"] },
  { label: "IA", items: ["Integración de LLMs", "Asistentes conversacionales", "Claves BYOK cifradas"] },
  { label: "Otras herramientas", items: ["SEO técnico (Open Graph, JSON-LD)", "Yape / Plin", "WhatsApp API"] },
];
