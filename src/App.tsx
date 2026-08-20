import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SectionDots from "./components/SectionDots"
import { useScrollProgress } from "./hooks/useScrollProgress"
import { usePointerParallax } from "./hooks/usePointerParallax"

// Three.js (~1.1MB) va en su propio chunk: el HTML/texto puede pintar
// de inmediato sin esperar a que se descargue la escena 3D.
const Scene = lazy(() => import("./three/Scene"))

function App() {
  useScrollProgress()
  usePointerParallax()

  return (
    <>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Navbar />
      <SectionDots />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}

export default App
