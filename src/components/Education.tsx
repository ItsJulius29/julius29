import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { education, languages } from "../data/content"

export default function Education() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">
        <span className="text-gradient">06.</span> {t("education.title")}
      </h2>

      <div ref={ref} className="space-y-4">
        {education.map((e, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display font-semibold">{e.institution}</h3>
              <span className="text-xs text-accent">{e.period}</span>
            </div>
            <p className="text-muted text-sm">{pick(e.degree)}</p>
          </div>
        ))}

        {languages.length > 0 && (
          <div className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
              {t("education.languages")}
            </h3>
            <ul className="space-y-1 text-sm text-muted">
              {languages.map((l, i) => (
                <li key={i}>
                  <span className="text-text/90">{pick(l.name)}</span> — {pick(l.level)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
