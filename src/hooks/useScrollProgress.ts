import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { scrollState } from "../three/scrollState"

gsap.registerPlugin(ScrollTrigger)

const SECTION_IDS = ["about", "experience", "skills", "projects", "certifications", "education", "contact"]

// Mantiene sincronizados los valores que la escena 3D lee en su render
// loop (evita re-renders de React en cada tick de scroll):
// - progress: 0→1 a lo largo de TODA la página (para efectos ambiente lentos).
// - heroExit: 0→1 en el primer scroll (~1 viewport), para que la foto del
//   Hero salga de cuadro rápido y no se quede flotando sobre el contenido.
// - sections: visibilidad (0→1) de cada sección según qué tan cerca está
//   su centro del centro del viewport, para que cada una tenga su propia
//   figura 3D que aparece y desaparece al entrar/salir de foco.
export function useScrollProgress() {
  useEffect(() => {
    const updateHeroExit = () => {
      scrollState.heroExit = Math.min(1, window.scrollY / (window.innerHeight * 0.8))
    }

    const updateSectionVisibility = () => {
      const vh = window.innerHeight
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const delta = Math.abs(center - vh / 2)
        scrollState.sections[id] = Math.max(0, 1 - delta / (vh * 0.75))
      }
    }

    const onScroll = () => {
      updateHeroExit()
      updateSectionVisibility()
    }

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        scrollState.progress = self.progress
      },
    })

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      trigger.kill()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
}
