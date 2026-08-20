import Scene from "./three/Scene"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useScrollProgress } from "./hooks/useScrollProgress"
import { usePointerParallax } from "./hooks/usePointerParallax"

function App() {
  useScrollProgress()
  usePointerParallax()

  return (
    <>
      <Scene />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
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
