// Contenido del portafolio. Los campos marcados como "TODO" están a la
// espera de la información que falta. Reemplázalos y listo — ningún
// componente necesita tocarse.

export type Bilingual = {
  es: string
  en: string
}

export const profile = {
  name: "Julio Gustavo Campos Yerrén",
  alias: "Julius",
  role: {
    es: "Analista Programador FrontEnd",
    en: "Frontend Software Analyst",
  } satisfies Bilingual,
  tagline: {
    es: "Construyo interfaces sólidas y resuelvo problemas de raíz.",
    en: "I build solid interfaces and solve problems at the root.",
  } satisfies Bilingual,
  summary: {
    es: "Ingeniero de Sistemas Computacionales egresado, con bachiller en Ingeniería de Sistemas, perteneciente al tercio superior, en búsqueda de una oportunidad laboral para analizar y resolver problemas. Aplico el trabajo en equipo siendo responsable y proactivo, con pasión por hacer las cosas bien y ganas constantes de seguir aprendiendo para entregar resultados. Analizo problemas y doy opciones de solución, usando herramientas que ayuden a encontrar la causa raíz, generando un plan de acción inmediato y otro sistémico para que no vuelva a suceder.",
    en: "Computer Systems Engineering graduate with a bachelor's degree, top-third academic standing, looking for an opportunity to analyze and solve problems. I work in teams with responsibility and initiative, with a passion for doing things right and a constant drive to keep learning and deliver results. I analyze problems and propose solutions using tools that help find the root cause, building both an immediate action plan and a systemic one so it doesn't happen again.",
  } satisfies Bilingual,
  contact: {
    email: "julio_campos159@outlook.es",
    linkedin: "https://www.linkedin.com/in/julio-gustavo-campos-yerrén-034080248",
    github: "",
  },
  // Cambia a false para ocultar el chip de disponibilidad en el Hero.
  availability: {
    open: true,
    label: { es: "Disponible para nuevas oportunidades", en: "Open to new opportunities" } satisfies Bilingual,
  },
}

// Hitos rápidos de la carrera, del más antiguo al más reciente — se
// muestran como una línea de tiempo compacta antes del detalle de
// experiencia.
export const timeline: { year: string; label: Bilingual }[] = [
  { year: "2021", label: { es: "Atento — Teleoperador de ventas", en: "Atento — Sales telemarketer" } },
  { year: "2022", label: { es: "Bembos — Producción", en: "Bembos — Production" } },
  { year: "2024", label: { es: "Entelgy — Formación FrontEnd", en: "Entelgy — Frontend training" } },
  { year: "2024", label: { es: "Outlier — Entrenamiento de IA", en: "Outlier — AI training" } },
  { year: "2026", label: { es: "Bachiller en Ingeniería de Sistemas", en: "Bachelor's in Systems Engineering" } },
]

export type Role = {
  title: Bilingual
  period: string
  project?: string
  methodology?: string
  stack: string[]
  achievements: Bilingual[]
}

export type ExperienceGroup = {
  company: string
  period: string
  // Resumen tipo "case study" (problema → qué hice → resultado), síntesis
  // de los logros ya listados abajo — no agrega datos nuevos.
  impact?: Bilingual
  roles: Role[]
}

// Periodos en Entelgy, del más reciente al más antiguo (tal como figuran en el CV).
export const experience: ExperienceGroup[] = [
  {
    company: "Entelgy",
    period: "12/2024 — Actualidad",
    impact: {
      es: "Empecé corrigiendo incidencias recurrentes en el flujo de una feature ya existente. De ahí pasé a construir, desde cero, la lógica y maquetación de un dashboard nuevo: integraciones con Data Managers, notificaciones de vencimiento y mantenimiento, y la suite de tests que lo sostiene con 100% de cobertura.",
      en: "I started by fixing recurring incidents in an existing feature's flow. From there I moved to building, from scratch, the logic and layout of a new dashboard: Data Manager integrations, expiration and maintenance notifications, and the test suite that backs it with 100% coverage.",
    },
    roles: [
      {
        title: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
        period: "05/2026 — Actualidad",
        methodology: "Scrum",
        stack: ["Cells", "LitElement", "Web Components", "JavaScript"],
        achievements: [
          { es: "Validaciones de modales de error en fallos específicos", en: "Error-modal validations for specific failure cases" },
          { es: "PRs de componentes modificados", en: "PRs for modified components" },
          { es: "Tests e2e de accesibilidad", en: "Accessibility e2e tests" },
          { es: "Manejo de Android e iOS", en: "Android and iOS handling" },
          { es: "Implementación de plugin para sesiones nativas y notificaciones push nativas", en: "Plugin implementation for native sessions and native push notifications" },
          { es: "Migración a GitHub", en: "Migration to GitHub" },
          { es: "Manejo de Jira y Bitbucket", en: "Jira and Bitbucket management" },
          { es: "Seguimiento de incidencias en el flujo de la feature", en: "Incident tracking on the feature flow" },
          { es: "Manejo de entorno Android Studio y conexión local con Visual Studio", en: "Android Studio environment management with local Visual Studio connection" },
        ],
      },
      {
        title: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
        period: "10/2025 — 03/2026",
        stack: ["Cells", "LitElement", "Web Components", "JavaScript", "Chai", "Mocha", "Radish", "Cucumber"],
        achievements: [
          { es: "Implementación de tagging", en: "Tagging implementation" },
          { es: "Modificación de componentes", en: "Component modifications" },
          { es: "Manejo de Jira y Bitbucket", en: "Jira and Bitbucket management" },
          { es: "Corrección de incidencias en el flujo de la feature", en: "Incident fixes on the feature flow" },
          { es: "Creación de e2e web en flujo nativo utilizando mocks", en: "Web e2e creation for native flow using mocks" },
        ],
      },
      {
        title: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
        period: "01/2026 — 03/2026",
        stack: ["Cells", "LitElement", "Web Components", "JavaScript", "Chai", "Mocha", "Radish", "Cucumber"],
        achievements: [
          { es: "Implementación de tagging", en: "Tagging implementation" },
          { es: "Modificación de componentes", en: "Component modifications" },
          { es: "Manejo de Jira y Bitbucket", en: "Jira and Bitbucket management" },
          { es: "Integraciones y Data Managers (DM)", en: "Integrations and Data Managers (DM)" },
          { es: "Gestión de eventos dentro del componente principal del nuevo dashboard de la feature", en: "Event management within the main component of the feature's new dashboard" },
          { es: "Implementación de notificaciones de vencimiento de tarjeta y mantenimiento, con literales desde servicios o app settings", en: "Implementation of card-expiration and maintenance notifications, with copy sourced from services or app settings" },
          { es: "Maquetación de componentes dentro del nuevo dashboard de la feature", en: "Component layout within the feature's new dashboard" },
          { es: "Desarrollo de tests unitarios (cobertura al 100%)", en: "Unit test development (100% coverage)" },
        ],
      },
      {
        title: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
        period: "09/2025 — 11/2025",
        stack: ["Cells", "LitElement", "JavaScript", "Chai", "Mocha", "Radish", "Cucumber"],
        achievements: [
          { es: "Desarrollo de tests unitarios", en: "Unit test development" },
          { es: "Desarrollo de tests e2e", en: "E2e test development" },
          { es: "Manejo de Jira y Bitbucket", en: "Jira and Bitbucket management" },
          { es: "Manejo de entorno Android e iOS", en: "Android and iOS environment handling" },
        ],
      },
      {
        title: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
        period: "06/2025 — 09/2025",
        stack: ["Cells", "LitElement", "JavaScript", "Chai", "Mocha", "Radish", "Cucumber"],
        achievements: [
          { es: "Implementación de tagging", en: "Tagging implementation" },
          { es: "Modificación de componentes", en: "Component modifications" },
          { es: "Desarrollo de tests unitarios", en: "Unit test development" },
          { es: "Desarrollo de tests e2e", en: "E2e test development" },
          { es: "Manejo de Jira y Bitbucket", en: "Jira and Bitbucket management" },
          { es: "Manejo de entorno Android e iOS", en: "Android and iOS environment handling" },
        ],
      },
      {
        title: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
        period: "02/2025 — 06/2025",
        stack: ["Cells", "LitElement", "JavaScript", "Chai", "Mocha", "Radish", "Cucumber"],
        achievements: [
          { es: "Implementación de tagging", en: "Tagging implementation" },
          { es: "Modificación de componentes", en: "Component modifications" },
          { es: "Desarrollo de tests unitarios", en: "Unit test development" },
          { es: "Desarrollo de tests e2e", en: "E2e test development" },
          { es: "Manejo de Jira y Bitbucket", en: "Jira and Bitbucket management" },
          { es: "Manejo de entorno Android e iOS", en: "Android and iOS environment handling" },
        ],
      },
      {
        title: { es: "Pasante", en: "Intern" },
        period: "12/2024 — 02/2025",
        project: "Formación FrontEnd",
        stack: ["HTML", "CSS", "JavaScript"],
        achievements: [
          { es: "Depuración de aplicaciones JavaScript", en: "JavaScript application debugging" },
          { es: "Manejo de errores en JavaScript", en: "JavaScript error handling" },
          { es: "Gestión de paquetes con npm y Yarn", en: "Package management with npm and Yarn" },
          { es: "Pruebas unitarias con Jest", en: "Unit testing with Jest" },
          { es: "Creación de API REST", en: "REST API creation" },
          { es: "Uso de decoradores", en: "Use of decorators" },
          { es: "Objetos Proxy y Reflect", en: "Proxy and Reflect objects" },
          { es: "Creación de sitios web con HTML, CSS y JavaScript", en: "Website creation with HTML, CSS and JavaScript" },
        ],
      },
    ],
  },
]

// Otra experiencia: fuera del stack actual, o sin más detalle disponible.
export const otherExperience: { company: string; role: Bilingual; period: string }[] = [
  {
    company: "Outlier",
    role: {
      es: "Entrenamiento de modelos de IA — proyecto LATAM Covers",
      en: "AI model training — LATAM Covers project",
    },
    period: "2024 — 2025",
  },
  {
    company: "Bembos S.A.C.",
    role: { es: "Producción", en: "Production" },
    period: "09/2022 — 08/2023",
  },
  {
    company: "Atento",
    role: { es: "Teleoperador de ventas", en: "Sales telemarketer" },
    period: "07/2021 — 08/2021",
  },
]

export const skills: { category: Bilingual; items: string[] }[] = [
  {
    category: { es: "Frontend", en: "Frontend" },
    items: ["JavaScript", "HTML", "CSS", "LitElement", "Web Components", "Cells"],
  },
  {
    category: { es: "Testing", en: "Testing" },
    items: ["Jest", "Mocha", "Chai", "Cucumber", "Radish", "E2E"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: ["Jira", "Bitbucket", "GitHub", "npm", "Yarn", "Android Studio", "Visual Studio"],
  },
  {
    category: { es: "Metodología", en: "Methodology" },
    items: ["Scrum", "Kanban", "Agile"],
  },
]

export type Project = {
  title: string
  description: Bilingual
  // Ruta a la miniatura dentro de /public, SIN slash inicial (ej.
  // "projects/mi-proyecto.jpg") — Projects.tsx le antepone el BASE_URL
  // del sitio; con slash inicial se rompe en GitHub Pages (project page).
  image: string
  // Demo en vivo (obligatorio) y repo de código (opcional, si es público).
  link: string
  repo?: string
  tags?: string[]
}

// La sección "Proyectos" solo aparece (en el nav y en la página) cuando
// este array tiene al menos un elemento. Para agregar uno más, solo
// añade un objeto aquí, sin tocar ningún componente:
// { title: "...", description: { es: "...", en: "..." }, image: "projects/....jpg", link: "https://...", repo: "https://github.com/...", tags: ["React"] }
export const projects: Project[] = [
  {
    title: "SubTrack",
    description: {
      es: "Dashboard para el seguimiento de suscripciones y renovaciones: resumen de gasto mensual, alertas de vencimiento y centro de notificaciones, con soporte bilingüe y tema claro/oscuro.",
      en: "Dashboard for tracking subscriptions and renewals: monthly spend summary, expiration alerts, and a notification center, with bilingual support and light/dark theme.",
    },
    image: "projects/subtrack.jpg",
    link: "https://itsjulius29.github.io/subtrack/",
    repo: "https://github.com/ItsJulius29/subtrack",
    tags: ["React", "TypeScript", "TanStack Query", "Vitest", "Playwright", "Tailwind CSS"],
  },
  {
    title: "LitKit",
    description: {
      es: "Mini librería de Web Components con LitElement: botón, input, modal y toasts. Encapsulados en Shadow DOM, temables vía CSS custom properties, con accesibilidad real (foco atrapado, aria-live, aria-invalid).",
      en: "Mini Web Components library built with LitElement: button, input, modal, and toasts. Encapsulated in Shadow DOM, themeable via CSS custom properties, with real accessibility (focus trapping, aria-live, aria-invalid).",
    },
    image: "projects/litkit.jpg",
    link: "https://itsjulius29.github.io/litkit/",
    repo: "https://github.com/ItsJulius29/litkit",
    tags: ["Lit", "TypeScript", "Web Components", "Web Test Runner", "Playwright"],
  },
]

export type CertGroup = { category: Bilingual; items: string[] }

export const certifications: CertGroup[] = [
  {
    category: { es: "Ágil", en: "Agile" },
    items: [
      "SCRUMstudy — Scrum Fundamentals Certified (2025)",
      "Kanban Awareness (2025)",
      "Agile Fundamentals (2025)",
    ],
  },
  {
    category: { es: "CISCO", en: "CISCO" },
    items: [
      "NDG Linux Essentials Professional Development",
      "CLP — Advanced Programming in C",
      "CPA — Programming Essentials in C++",
      "PCAP — Programming Essentials in Python",
      "Get Connected",
      "CCNA: Introduction to Networks",
      "CCNA: Switching, Routing, and Wireless Essentials",
    ],
  },
  {
    category: { es: "Movistar", en: "Movistar" },
    items: [
      "Office Básico",
      "Office Intermedio",
      "HTML5 + CSS",
      "Programación Neurolingüística",
      "Big Data",
      "Design Thinking",
      "Internet de las Cosas",
      "Programación en Videojuegos",
      "Storytelling",
      "Guía de Entrevistas de Trabajo",
      "Presentación en Público y Digitales",
    ],
  },
  {
    category: { es: "Universidad Privada del Norte", en: "Universidad Privada del Norte" },
    items: [
      "Talleres de Participación UPN 2022",
      "Taller de Habilidades Blandas UPN 2023-2",
      "Taller de Habilidades Blandas 2 UPN 2024-1",
      "Big Data Analyst UPN 2024-2",
      "Desarrollador de Aplicaciones Tecnológicas UPN 2024-2",
    ],
  },
]

export const education: { institution: string; degree: Bilingual; period: string }[] = [
  {
    institution: "Universidad Privada del Norte",
    degree: { es: "Ingeniería de Sistemas Computacionales — Bachiller", en: "Computer Systems Engineering — Bachelor's Degree" },
    period: "Egresado 2025 · Bachiller 2026",
  },
]

export const languages: { name: Bilingual; level: Bilingual }[] = [
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Básico 5 — Universidad San Martín de Porres", en: "Basic 5 — Universidad San Martín de Porres" },
  },
]
