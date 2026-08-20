import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { profile } from "../data/content"

export default function Hero() {
  const { t } = useTranslation()
  const { pick } = useLang()

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full mb-8 border-2 border-accent/60 overflow-hidden bg-surface flex items-center justify-center">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl font-display font-bold text-gradient">
            {profile.alias.charAt(0)}
          </span>
        )}
      </div>

      <p className="text-accent font-medium tracking-widest text-xs md:text-sm uppercase mb-4">
        {pick(profile.role)}
      </p>

      <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
        {profile.name}
      </h1>

      <p className="text-muted text-base md:text-lg mt-6 max-w-xl">
        {pick(profile.tagline)}
      </p>

      <button
        onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-10 rounded-full px-6 py-3 border border-accent/50 text-accent text-sm font-medium hover:bg-accent hover:text-bg transition-colors cursor-pointer"
      >
        {t("hero.cta")}
      </button>

      <span className="absolute bottom-8 text-xs text-muted animate-bounce">
        {t("hero.scroll")} ↓
      </span>
    </section>
  )
}
