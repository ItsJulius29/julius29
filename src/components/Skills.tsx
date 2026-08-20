import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { skills } from "../data/content"

export default function Skills() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">
        <span className="text-gradient">03.</span> {t("skills.title")}
      </h2>

      <div ref={ref} className="grid sm:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              {pick(group.category)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
