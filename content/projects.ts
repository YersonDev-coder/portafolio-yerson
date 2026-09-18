import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "raiz-trazabilidad",
    name: "Raíz",
    tagline: "Trazabilidad blockchain-style de café y cacao",
    description:
      "Plataforma de trazabilidad para la cadena de café y cacao de Huánuco: cada lote pasa por productor, cooperativa, planta de procesamiento y exportador, con validaciones encadenadas estilo blockchain y una ficha pública consultable por QR. Frontend en Vercel, backend y base de datos en Render.",
    status: "live",
    liveUrl: "https://raiz-frontend.vercel.app",
    repoUrl: "https://github.com/YersonDev-coder/raiz-trazabilidad",
    stack: ["React 19", "Vite", "Node.js", "Express", "SQLite", "JWT", "Vercel", "Render"],
    highlights: [
      "Cadena de custodia productor → cooperativa → planta → exportador",
      "Cada etapa valida y encadena la anterior (hash estilo blockchain)",
      "Ficha pública de trazabilidad por lote, accesible por QR sin registro",
      "Certificaciones fitosanitarias y aduaneras con revisión del administrador",
    ],
    image: {
      src: "/images/projects/raiz/hero.jpg",
      alt: "Landing de Raíz, plataforma de trazabilidad de café y cacao",
    },
    imageKind: "screenshot",
    demoAccounts: [
      { role: "Productor", user: "productor1@raiz.test", password: "Test1234!" },
      { role: "Cooperativa", user: "cooperativa1@raiz.test", password: "Test1234!" },
      { role: "Planta procesadora", user: "planta1@raiz.test", password: "Test1234!" },
      { role: "Exportador", user: "exportador1@raiz.test", password: "Test1234!" },
      { role: "Administrador", user: "admin1@raiz.test", password: "Test1234!" },
    ],
    demoUserLabel: "Email",
    demoNote:
      "Cuentas de datos de prueba, no de un cliente real. El backend corre en el plan gratuito de Render, así que puede tardar ~30s en responder tras un rato inactivo.",
  },
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
    demoAccounts: [
      {
        role: "Administrador (superusuario, también entra a /admin/)",
        user: "admin",
        password: "admin123",
      },
      { role: "Mesa de Partes", user: "jperez", password: "demo12345" },
      { role: "Jefe de Oficina", user: "mlopez", password: "demo12345" },
      { role: "Funcionario", user: "rgomez", password: "demo12345" },
      { role: "Funcionario", user: "ccastro", password: "demo12345" },
    ],
    demoUserLabel: "Usuario",
    demoNote:
      "Cuentas de datos de prueba, no de una municipalidad real. El sitio corre en el plan gratuito de Render, así que puede tardar ~30s en cargar tras un rato inactivo.",
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
      alt: "Sección Más Vendidos de RALI Cosmetics",
    },
    imageKind: "screenshot",
  },
  {
    slug: "gestion-procesos-iso9001",
    name: "Sistema de Gestión por Procesos",
    tagline: "ISO 9001, Six Sigma, BPMN y un asistente de IA",
    description:
      "Suite de gestión por procesos y calidad: fichas de proceso bajo ISO 9001, análisis Six Sigma, diagramas BPMN, dashboard ejecutivo, gestión del cambio (Lewin) y un asistente de IA que responde preguntas sobre cada proceso registrado. Desplegado en Vercel (frontend y API Django en un solo proyecto) con PostgreSQL en Neon.",
    status: "live",
    liveUrl: "https://gestion-procesos-iso9001.vercel.app",
    repoUrl: "https://github.com/YersonDev-coder/gestion-procesos-iso9001",
    stack: ["Django REST Framework", "React", "Vite", "PostgreSQL", "JWT", "IA / LLM", "Vercel", "Neon"],
    highlights: [
      "Fichas de proceso y control de calidad ISO 9001",
      "Análisis Six Sigma y diagramas BPMN",
      "Indicadores con semáforo y alertas, dashboard ejecutivo y gestión del cambio (Lewin)",
      "Asistente de IA (claves propias cifradas) sobre cada proceso",
    ],
    modules: ["ISO 9001", "Six Sigma", "BPMN", "Dashboard", "Lewin", "IA"],
    image: {
      src: "/images/projects/gestion-procesos/hero.jpg",
      alt: "Landing de Procesos+, plataforma de gestión de procesos con IA",
    },
    imageKind: "screenshot",
    demoAccounts: [
      { role: "Revisor (empresa ficticia)", user: "demo", password: "Demo-Procesos-2026" },
    ],
    demoUserLabel: "Usuario",
    demoNote:
      "Cuenta de datos de prueba de una empresa ficticia, sin información real. Corre en planes gratuitos (Vercel y Neon), así que la primera carga tras un rato inactivo puede tardar unos segundos. En la demo no están activas la exportación a PDF ni las funciones de IA.",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);
