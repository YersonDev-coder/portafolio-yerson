import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "gestor-documental-municipal",
    name: "Gestor Documental Municipal",
    tagline: "Documentos, expedientes y trámites de una municipalidad",
    description:
      "Plataforma para la administración de documentos, expedientes y trámites de una municipalidad: mesa de partes, seguimiento de expedientes, y control de usuarios, roles y auditoría. Desplegada con Docker en Render.",
    status: "live",
    featured: true,
    liveUrl: "https://gestor-documental-municipal.onrender.com/",
    repoUrl: "https://github.com/YersonDev-coder/gestor-documental-municipal",
    stack: ["Django 5", "MySQL", "Docker", "Render"],
    highlights: [
      "Documentos y expedientes centralizados",
      "Seguimiento de trámites y mesa de partes",
      "Usuarios, roles y auditoría de acciones",
      "Contenerizado con Docker y desplegado en Render",
    ],
    image: {
      src: "/images/projects/gestor-documental/login.png",
      alt: "Pantalla de acceso de Gestor Documental Municipal",
    },
    imageKind: "screenshot",
  },
  {
    slug: "rali-cosmetics",
    name: "RALI Cosmetics",
    tagline: "Tienda online de maquillaje con delivery en Huánuco",
    description:
      "Tienda online de maquillaje y cosméticos para el mercado de Huánuco, Perú. Catálogo de productos, delivery, pago por Yape/Plin, contacto directo por WhatsApp y SEO técnico.",
    status: "live",
    liveUrl: "https://ralicosmetics.com/",
    repoUrl: "https://github.com/YersonDev-coder/rali-cosmetics",
    stack: ["Node.js", "JavaScript", "Yape / Plin", "SEO / JSON-LD"],
    highlights: [
      "Catálogo de productos y delivery",
      "Pagos por Yape y Plin, contacto por WhatsApp",
      "SEO técnico: Open Graph, datos estructurados JSON-LD",
      "Integración con Google Ads",
    ],
    image: {
      src: "/images/projects/rali/hero.jpg",
      alt: "Página de inicio de RALI Cosmetics",
    },
    imageKind: "screenshot",
  },
  {
    slug: "farmatec",
    name: "FarmaTec",
    tagline: "SaaS para boticas y farmacias peruanas",
    description:
      "Software SaaS para boticas y farmacias en Perú: punto de venta (POS), facturación electrónica SUNAT, control de inventario y kárdex, cumplimiento DIGEMID y soporte multi-sucursal en la nube o local.",
    status: "live",
    liveUrl: "https://farmatec.org/",
    stack: ["Astro", "Diseño de producto SaaS"],
    highlights: [
      "Punto de venta (POS) y facturación electrónica SUNAT",
      "Control de inventario y kárdex",
      "Cumplimiento DIGEMID: catálogo y alertas de vencimiento",
      "Soporte multi-sucursal, en la nube o local",
    ],
    image: {
      src: "/images/projects/farmatec/logo.png",
      alt: "Logo de FarmaTec",
    },
    imageKind: "logo",
  },
  {
    slug: "gestion-procesos-iso9001",
    name: "Sistema de Gestión por Procesos",
    tagline: "ISO 9001, Six Sigma, BPMN y un asistente de IA",
    description:
      "Suite de gestión por procesos y calidad: fichas de proceso bajo ISO 9001, análisis Six Sigma, diagramas BPMN, dashboard ejecutivo, gestión del cambio (Lewin) y un asistente de IA que responde preguntas sobre cada proceso registrado.",
    status: "local-only",
    repoUrl: "https://github.com/YersonDev-coder/gestion-procesos-iso9001",
    stack: ["Django REST Framework", "React", "Vite", "JWT", "IA / LLM"],
    highlights: [
      "Fichas de proceso y control de calidad ISO 9001",
      "Análisis Six Sigma y diagramas BPMN",
      "Dashboard ejecutivo y gestión del cambio (Lewin)",
      "Asistente de IA (claves propias cifradas) sobre cada proceso",
    ],
    modules: ["ISO 9001", "Six Sigma", "BPMN", "Dashboard", "Lewin", "IA"],
    image: null,
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);
