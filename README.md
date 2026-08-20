# Portafolio — Julio Gustavo Campos Yerrén

Sitio de una sola página (scroll), bilingüe (ES/EN), con fondo 3D animado que reacciona al scroll.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Three.js vía `@react-three/fiber` + `@react-three/drei`
- GSAP (`ScrollTrigger`) para animaciones de entrada y para sincronizar la escena 3D con el scroll
- `react-i18next` para el switch ES/EN

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

```bash
npm run deploy
```

Esto construye el proyecto y publica `dist/` en la rama `gh-pages` (requiere el remoto de GitHub configurado y el paquete `gh-pages`, ya incluido).

Si el repositorio se llama `<tuusuario>.github.io` (user page), deja `base: '/'` en `vite.config.ts`. Si es un repo con otro nombre (project page), cambia `base` a `'/nombre-del-repo/'`.

Al comprar el dominio propio, solo se agrega un archivo `CNAME` en `public/` con el dominio, y se configura el DNS del proveedor.

## Contenido pendiente

Los siguientes campos están marcados como `TODO` en [src/data/content.ts](src/data/content.ts) a la espera de más información:

- Foto de perfil (`profile.photo`, colocar el archivo en `public/`)
- Contacto público (`profile.contact`: email, LinkedIn, GitHub)
- Educación (`education`)
- Experiencia adicional previa a Entelgy, si aplica
- Proyectos personales (si se agregan, sección nueva)

## Estructura

```
src/
├── components/   Secciones de la página (Hero, About, Experience, Skills, Education, Contact, Navbar, Footer)
├── three/        Escena 3D (Scene.tsx) y estado de scroll compartido
├── hooks/        useScrollProgress (sync scroll → 3D), useRevealOnScroll (fade-in por sección), useLang
├── data/         content.ts — toda la información del CV en un solo lugar, bilingüe
└── i18n/         Textos de interfaz (nav, botones) en es.json / en.json
```
