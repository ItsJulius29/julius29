import { useTranslation } from "react-i18next"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { profile } from "../data/content"

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRevealOnScroll<HTMLDivElement>()
  const { email, linkedin, github } = profile.contact
  const hasContact = email || linkedin || github

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-28 md:py-40 text-center">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
        <span className="text-gradient">05.</span> {t("contact.title")}
      </h2>

      {hasContact ? (
        <div ref={ref} className="flex flex-wrap justify-center gap-4 mt-8">
          {email && (
            <a href={`mailto:${email}`} className="rounded-full px-5 py-2.5 border border-white/15 text-sm hover:border-accent hover:text-accent transition-colors">
              {t("contact.email")}
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-full px-5 py-2.5 border border-white/15 text-sm hover:border-accent hover:text-accent transition-colors">
              {t("contact.linkedin")}
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="rounded-full px-5 py-2.5 border border-white/15 text-sm hover:border-accent hover:text-accent transition-colors">
              {t("contact.github")}
            </a>
          )}
        </div>
      ) : (
        <p className="text-muted text-sm italic">{t("contact.pending")}</p>
      )}
    </section>
  )
}
