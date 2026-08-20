import { useEffect } from "react"
import { scrollState } from "../three/scrollState"

// Rastrea el puntero a nivel de window (el canvas tiene pointer-events:
// none, así que no puede recibir eventos por sí mismo) y lo normaliza a
// [-1, 1] para el paralaje de la escena 3D.
export function usePointerParallax() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      scrollState.pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      scrollState.pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])
}
