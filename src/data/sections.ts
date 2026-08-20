import { projects } from "./content"

// Orden canónico de las secciones del sitio (sin contar el Hero). Se usa
// tanto en el Navbar como en el indicador de puntos de scroll, para que
// nunca queden desincronizados.
export const sectionIds = [
  "about",
  "experience",
  "skills",
  ...(projects.length > 0 ? (["projects"] as const) : []),
  "certifications",
  "education",
  "contact",
] as const
