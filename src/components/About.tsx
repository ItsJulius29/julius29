import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { profile, experience, certifications } from "../data/content"
import Terminal from "./Terminal"

// Fecha del primer periodo en Entelgy — de acá se calculan los años de
// experiencia en vivo, para que el número nunca quede desactualizado.
const EXPERIENCE_START = new Date(2024, 11, 1)

function useStats() {
  const totalCerts = certifications.reduce((sum, g) => sum + g.items.length, 0)
  const entelgyRoles = experience[0]?.roles.length ?? 0
  const years = Math.max(1, Math.floor((Date.now() - EXPERIENCE_START.getTime()) / (365.25 * 24 * 3600 * 1000)))
  return { totalCerts, entelgyRoles, years }
}

export default function About() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()
  const { totalCerts, entelgyRoles, years } = useStats()

  const stats = [
    { value: `${years}+`, label: t("about.statsYears") },
    { value: `${entelgyRoles}`, label: t("about.statsRoles") },
    { value: `${totalCerts}`, label: t("about.statsCerts") },
  ]

  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <div ref={ref}>
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">
          <span className="text-gradient">01.</span> {t("about.title")}
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-10">{pick(profile.summary)}</p>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 md:p-6 text-center">
              <div className="font-display font-bold text-2xl md:text-4xl text-gradient">{stat.value}</div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
