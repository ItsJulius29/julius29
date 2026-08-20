import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { scrollState } from "../three/scrollState"

gsap.registerPlugin(ScrollTrigger)

// Mantiene scrollState.progress (0→1) sincronizado con el scroll de toda
// la página, para que la escena 3D reaccione sin re-renderizar React.
export function useScrollProgress() {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        scrollState.progress = self.progress
      },
    })

    return () => trigger.kill()
  }, [])
}
