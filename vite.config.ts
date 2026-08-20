import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// NOTA: si publicas como "project page" (repo distinto a tuusuario.github.io),
// cambia `base` a '/nombre-del-repo/'. Si el repo se llama julius29.github.io
// (user page) o usas dominio propio, deja base en '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
