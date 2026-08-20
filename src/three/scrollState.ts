// Estado compartido del progreso de scroll (0 → 1), actualizado por GSAP
// ScrollTrigger y leído dentro del loop de render de R3F (useFrame).
// Evita re-renders de React en cada tick de scroll.
export const scrollState = {
  progress: 0,
  heroExit: 0,
  pointer: { x: 0, y: 0 },
}
