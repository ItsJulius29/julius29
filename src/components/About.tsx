import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { profile } from "../data/content"

export default function About() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <div ref={ref}>
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">
          <span className="text-gradient">01.</span> {t("about.title")}
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed">{pick(profile.summary)}</p>
      </div>
    </section>
  )
}
