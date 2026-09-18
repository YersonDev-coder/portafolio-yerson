export type ProjectStatus = "live" | "local-only";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface DemoAccount {
  role: string;
  user: string;
  password: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  highlights: string[];
  modules?: string[];
  image: ProjectImage | null;
  imageKind?: "screenshot" | "logo";
  // Cuentas de prueba para que un reclutador/cliente entre a la demo sin
  // pedirlas por separado. Solo para proyectos "live" con datos de prueba,
  // nunca con datos reales de un cliente.
  demoAccounts?: DemoAccount[];
  demoUserLabel?: string;
  demoNote?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface TimelineItem {
  title: string;
  subtitle: string;
  description?: string;
  date?: string;
  certificateUrl?: string;
}
