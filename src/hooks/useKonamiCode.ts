import { useEffect } from "react"

const CODE = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"]

// Detecta el clásico código Konami (↑↑↓↓←→←→BA) y dispara un callback.
export function useKonamiCode(onActivate: () => void) {
  useEffect(() => {
    let pos = 0

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key === CODE[pos]) {
        pos++
        if (pos === CODE.length) {
          pos = 0
          onActivate()
        }
      } else {
        pos = key === CODE[0] ? 1 : 0
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onActivate])
}
