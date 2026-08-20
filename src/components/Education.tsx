import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { education } from "../data/content"

export default function Education() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()
  const isPending = education.every((e) => e.institution === "TODO")

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">
        <span className="text-gradient">04.</span> {t("education.title")}
      </h2>

      {isPending ? (
        <p className="text-muted text-sm italic">{t("education.pending")}</p>
      ) : (
        <div ref={ref} className="space-y-6">
          {education.map((e, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold">{e.institution}</h3>
                <span className="text-xs text-accent">{e.period}</span>
              </div>
              <p className="text-muted text-sm">{pick(e.degree)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
