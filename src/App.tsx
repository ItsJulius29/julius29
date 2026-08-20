import Scene from "./three/Scene"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useScrollProgress } from "./hooks/useScrollProgress"

function App() {
  useScrollProgress()

  return (
    <>
      <Scene />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
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
