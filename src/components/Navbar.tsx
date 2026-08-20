import { useState } from "react"
import { useTranslation } from "react-i18next"
import { profile } from "../data/content"

const sections = ["about", "experience", "skills", "education", "contact"] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="font-display font-semibold tracking-tight text-lg">
          {profile.alias}
          <span className="text-gradient">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {sections.map((s) => (
            <li key={s}>
              <button onClick={() => scrollTo(s)} className="hover:text-accent transition-colors cursor-pointer">
                {t(`nav.${s}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-medium border border-white/15 rounded-full px-3 py-1.5 hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-xl leading-none cursor-pointer"
            aria-label="menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-muted">
          {sections.map((s) => (
            <li key={s}>
              <button onClick={() => scrollTo(s)} className="block w-full text-left py-2 hover:text-accent cursor-pointer">
                {t(`nav.${s}`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
