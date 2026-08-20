import { useEffect, useRef } from "react"

// Barra fina arriba de todo mostrando cuánto llevas de la página.
// Actualiza el ancho directo por ref (sin estado de React) para no
// re-renderizar en cada tick de scroll.
export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    update()
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[60] bg-transparent" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-accent to-accent-2 transition-[width] duration-100 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  )
}
