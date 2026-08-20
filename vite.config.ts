import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// El repo es "julius29" (minúsculas, project page), por eso el sitio vive
// en itsjulius29.github.io/julius29/ y `base` debe coincidir EXACTO —
// las rutas de GitHub Pages distinguen mayúsculas de minúsculas. Si más
// adelante usas un dominio propio (o un repo itsjulius29.github.io),
// cambia esto a '/'.
export default defineConfig({
  base: '/julius29/',
  plugins: [react(), tailwindcss()],
})
