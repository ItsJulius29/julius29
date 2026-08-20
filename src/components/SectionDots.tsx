import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { sectionIds } from "../data/sections"

// Puntos fijos en el borde derecho (solo desktop) que marcan en qué
// sección estás mientras haces scroll, y permiten saltar directo a
// cualquiera. La sección "activa" es la que cruza una franja angosta en
// el centro del viewport (vía IntersectionObserver, sin recalcular en
// cada tick de scroll).
export default function SectionDots() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      aria-label="Secciones"
      className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-40"
    >
      {sectionIds.map((id) => {
        const isActive = id === active
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={t(`nav.${id}`)}
            aria-current={isActive}
            title={t(`nav.${id}`)}
            className="group relative flex items-center justify-end cursor-pointer p-1"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive ? "w-2.5 h-2.5 bg-accent" : "w-1.5 h-1.5 bg-white/25 group-hover:bg-white/50"
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
