import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${site.url}/proyectos/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
