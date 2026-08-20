// Contenido del portafolio. Los campos marcados como "TODO" están a la
// espera de la información que falta (resto del CV, foto, contacto).
// Reemplázalos y listo — ningún componente necesita tocarse.

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
    es: "Ingeniero de Sistemas Computacionales, perteneciente al tercio superior, en búsqueda de oportunidades para analizar y resolver problemas. Trabajo en equipo con responsabilidad y proactividad, aplicando lo aprendido durante mi carrera y con ganas constantes de seguir aprendiendo.",
    en: "Computer Systems Engineer, top-third academic standing, focused on analyzing and solving problems. I work in teams with responsibility and initiative, applying what I learned during my degree and constantly looking to keep learning.",
  } satisfies Bilingual,
  // TODO: agrega tu correo, LinkedIn, GitHub u otro contacto que quieras hacer público.
  contact: {
    email: "",
    linkedin: "",
    github: "",
  },
  // TODO: ruta a tu foto una vez la envíes (colócala en /public y referencia aquí, ej. "/foto.jpg")
  photo: "",
}

export type ExperienceItem = {
  company: string
  role: Bilingual
  period: string
  methodology?: string
  stack: string[]
  achievements: Bilingual[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Entelgy",
    role: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
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
    company: "Entelgy",
    role: { es: "Analista Programador FrontEnd", en: "Frontend Software Analyst" },
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
  // TODO: si tienes experiencia previa a Entelgy, agrégala aquí con el mismo formato.
]

export const skills: { category: Bilingual; items: string[] }[] = [
  {
    category: { es: "Frontend", en: "Frontend" },
    items: ["JavaScript", "LitElement", "Web Components", "Cells"],
  },
  {
    category: { es: "Testing", en: "Testing" },
    items: ["Mocha", "Chai", "Cucumber", "Radish", "E2E"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: ["Jira", "Bitbucket", "GitHub", "Android Studio", "Visual Studio"],
  },
  {
    category: { es: "Metodología", en: "Methodology" },
    items: ["Scrum"],
  },
  // TODO: agrega más categorías (ej. Backend, Cloud, Idiomas) según el resto del CV.
]

// TODO: reemplaza con tu formación real (institución, título, fechas).
export const education: { institution: string; degree: Bilingual; period: string }[] = [
  {
    institution: "TODO",
    degree: { es: "Ingeniería de Sistemas Computacionales (Bachiller)", en: "Computer Systems Engineering (Bachelor's degree)" },
    period: "TODO",
  },
]
