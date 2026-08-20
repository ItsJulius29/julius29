import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { certifications } from "../data/content"

export default function Certifications() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="certifications" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">
        <span className="text-gradient">04.</span> {t("certifications.title")}
      </h2>

      <div ref={ref} className="grid sm:grid-cols-2 gap-6">
        {certifications.map((group, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              {pick(group.category)}
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
