import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { experience } from "../data/content"

export default function Experience() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">
        <span className="text-gradient">02.</span> {t("experience.title")}
      </h2>

      <div ref={ref} className="space-y-10">
        {experience.map((job, i) => (
          <article key={i} className="glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display font-semibold text-lg md:text-xl">{job.company}</h3>
              <span className="text-xs text-accent font-medium">{job.period}</span>
            </div>
            <p className="text-muted text-sm mb-4">
              {pick(job.role)}
              {job.methodology ? ` · ${job.methodology}` : ""}
            </p>

            <ul className="list-disc list-inside space-y-1.5 text-sm text-text/90 mb-5">
              {job.achievements.map((a, j) => (
                <li key={j}>{pick(a)}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
