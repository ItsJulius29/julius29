import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { scrollState } from "../three/scrollState"

gsap.registerPlugin(ScrollTrigger)

// Mantiene sincronizados dos valores para que la escena 3D reaccione sin
// re-renderizar React:
// - progress: 0→1 a lo largo de TODA la página (para efectos ambiente lentos).
// - heroExit: 0→1 en el primer scroll (~1 viewport), para que los elementos
//   del Hero (foto, icosaedro) salgan de cuadro rápido y no se queden
//   flotando sobre el resto del contenido.
export function useScrollProgress() {
  useEffect(() => {
    const updateHeroExit = () => {
      scrollState.heroExit = Math.min(1, window.scrollY / (window.innerHeight * 0.8))
    }

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        scrollState.progress = self.progress
      },
    })

    window.addEventListener("scroll", updateHeroExit, { passive: true })
    updateHeroExit()

    return () => {
      trigger.kill()
      window.removeEventListener("scroll", updateHeroExit)
    }
  }, [])
}
