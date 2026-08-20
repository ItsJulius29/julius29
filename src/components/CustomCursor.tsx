import { useEffect, useRef, useState } from "react"

// Cursor propio: un punto que sigue el mouse al instante y un anillo que
// va detrás con un poco de retraso (lerp), que crece al pasar sobre
// enlaces o botones. Solo se activa si el dispositivo tiene un puntero
// fino (mouse) — en touch no se renderiza nada y el cursor del sistema
// sigue funcionando normal.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled] = useState(() => window.matchMedia("(pointer: fine)").matches)

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add("custom-cursor-active")

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let hovering = false
    let raf = 0

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const target = e.target as HTMLElement
      hovering = !!target.closest("a, button, input")
    }

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18
      ring.y += (mouse.y - ring.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        const scale = hovering ? 1.8 : 1
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove("custom-cursor-active")
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[100]"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 w-7 h-7 rounded-full border border-accent/60 pointer-events-none z-[100] transition-transform duration-150"
      />
    </>
  )
}
