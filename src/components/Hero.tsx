import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { profile } from "../data/content"

export default function Hero() {
  const { t } = useTranslation()
  const { pick } = useLang()

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      {/* Espacio reservado: la foto vive en el canvas 3D de fondo (Scene.tsx) */}
      <div className="h-64 md:h-80" aria-hidden="true" />

      {profile.availability.open && (
        <span className="inline-flex items-center gap-2 rounded-full glass border border-white/10 px-3.5 py-1.5 text-xs text-muted mb-5">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
          </span>
          {pick(profile.availability.label)}
        </span>
      )}

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
