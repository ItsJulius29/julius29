import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// El repo es "Julius29" (project page), por eso el sitio vive en
// tuusuario.github.io/Julius29/ y `base` debe coincidir. Si más adelante
// usas un dominio propio (o un repo tuusuario.github.io), cambia esto a '/'.
export default defineConfig({
  base: '/Julius29/',
  plugins: [react(), tailwindcss()],
})
