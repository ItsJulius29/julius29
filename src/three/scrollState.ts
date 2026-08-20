// Estado compartido del progreso de scroll (0 → 1), actualizado por GSAP
// ScrollTrigger y leído dentro del loop de render de R3F (useFrame).
// Evita re-renders de React en cada tick de scroll.
export const scrollState = {
  progress: 0,
  heroExit: 0,
  // Visibilidad (0→1) de cada sección según qué tan cerca está su centro
  // del centro del viewport — así cada figura 3D aparece/desaparece según
  // la sección que estés mirando, sin importar si subes o bajas.
  sections: {} as Record<string, number>,
  pointer: { x: 0, y: 0 },
}
