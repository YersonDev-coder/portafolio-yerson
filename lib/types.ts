export type ProjectStatus = "live" | "local-only";

export interface ProjectImage {
  src: string;
  alt: string;
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
}

export interface SkillGroup {
  label: string;
  items: string[];
}
