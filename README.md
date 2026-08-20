# Portafolio — Julio Gustavo Campos Yerrén

Sitio de una sola página (scroll), bilingüe (ES/EN), con una foto flotando como cutout 3D (sin fondo, enmarcada por un icosaedro) que reacciona al scroll y al mouse.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Three.js vía `@react-three/fiber`
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

`npm run preview` sirve el build real (respetando `base`), es el que mejor simula GitHub Pages en local.

## Despliegue en GitHub Pages

```bash
npm run deploy
```

Esto construye el proyecto y publica `dist/` en la rama `gh-pages` (requiere el remoto de GitHub configurado y el paquete `gh-pages`, ya incluido). Luego, en el repo → Settings → Pages, la fuente debe ser la rama `gh-pages`.

El repo se llama `Julius29` (project page), por eso `base: '/Julius29/'` en [vite.config.ts](vite.config.ts) y el sitio vive en `https://<tuusuario>.github.io/Julius29/`. Si en algún momento usas un dominio propio o un repo `<tuusuario>.github.io`, cambia `base` a `'/'`.

Al comprar el dominio propio, solo se agrega un archivo `CNAME` en `public/` con el dominio, y se configura el DNS del proveedor.

## Seguridad

- `index.html` incluye una Content-Security-Policy vía meta tag (restringe scripts/estilos/fuentes a orígenes conocidos) y `referrer-policy`. GitHub Pages no permite headers HTTP personalizados, así que esto es lo máximo reforzable sin cambiar de host — `X-Frame-Options`, HSTS y `X-Content-Type-Options` necesitan headers reales (posibles con un dominio propio detrás de Cloudflare, gratis).
- Enlaces externos usan `rel="noopener noreferrer"`.
- Sin `dangerouslySetInnerHTML`, `eval` ni contenido dinámico no confiable — no hay superficie de XSS conocida.
- `.gitignore` excluye `.env*` preventivamente por si se agrega alguna integración con API key más adelante.

## Contenido pendiente

Los siguientes campos están marcados como `TODO` en [src/data/content.ts](src/data/content.ts) a la espera de más información:

- Contacto público (`profile.contact`: email, LinkedIn, GitHub)
- Experiencia adicional previa a Entelgy, si aplica
- Proyectos personales (si se agregan, sección nueva)

## Estructura

```
src/
├── components/   Secciones de la página (Hero, About, Experience, Skills, Certifications, Education, Contact, Navbar, Footer)
├── three/        Escena 3D (Scene.tsx: icosaedro + partículas + foto cutout) y estado de scroll/puntero compartido
├── hooks/        useScrollProgress (scroll → 3D), usePointerParallax (mouse → 3D), useRevealOnScroll (fade-in por sección), useLang
├── data/         content.ts — toda la información del CV en un solo lugar, bilingüe
└── i18n/         Textos de interfaz (nav, botones) en es.json / en.json
```
