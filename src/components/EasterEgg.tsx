import { useCallback, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useKonamiCode } from "../hooks/useKonamiCode"

// ↑↑↓↓←→←→BA — el clásico código Konami. Al activarse, la página entra
// en "party mode" (hue-rotate animado, ver .party-mode en index.css) por
// unos segundos y muestra un toast.
export default function EasterEgg() {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const timers = useRef<number[]>([])

  const activate = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []

    document.body.classList.add("party-mode")
    setShow(true)

    timers.current.push(
      window.setTimeout(() => document.body.classList.remove("party-mode"), 3000),
      window.setTimeout(() => setShow(false), 4200)
    )
  }, [])

  useKonamiCode(activate)

  if (!show) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] glass rounded-full px-5 py-3 text-sm text-center">
      {t("easterEgg.found")}
    </div>
  )
}
