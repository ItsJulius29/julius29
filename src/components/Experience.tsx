import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { experience, otherExperience, timeline } from "../data/content"

function CareerTimeline() {
  const { pick } = useLang()

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 pb-8 border-b border-white/10">
      {timeline.map((milestone, i) => (
        <div key={i} className="flex items-center gap-2.5 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <div className="leading-tight">
            <span className="text-xs font-semibold text-accent">{milestone.year}</span>
            <p className="text-xs text-muted whitespace-nowrap">{pick(milestone.label)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">
        <span className="text-gradient">02.</span> {t("experience.title")}
      </h2>

      <CareerTimeline />

      <div ref={ref} className="space-y-10">
        {experience.map((group, i) => (
          <article key={i} className="glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <h3 className="font-display font-semibold text-lg md:text-xl">{group.company}</h3>
              <span className="text-xs text-accent font-medium">{group.period}</span>
            </div>

            {group.impact && (
              <p className="text-sm text-text/90 leading-relaxed mb-6 pb-6 border-b border-white/10">
                {pick(group.impact)}
              </p>
            )}

            <div className="space-y-6 border-l border-white/10 pl-5">
              {group.roles.map((role, j) => (
                <div key={j} className="relative">
                  <span className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-medium text-sm md:text-base">
                      {pick(role.title)}
                      {role.project ? ` · ${role.project}` : ""}
                    </h4>
                    <span className="text-xs text-muted">{role.period}</span>
                  </div>
                  {role.methodology && (
                    <p className="text-xs text-muted mb-2">{role.methodology}</p>
                  )}

                  <ul className="list-disc list-inside space-y-1 text-sm text-text/90 mb-3">
                    {role.achievements.map((a, k) => (
                      <li key={k}>{pick(a)}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.stack.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}

        {otherExperience.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {otherExperience.map((job, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-medium text-sm">{job.company}</h4>
                  <span className="text-xs text-muted">{job.period}</span>
                </div>
                <p className="text-muted text-xs">{pick(job.role)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
