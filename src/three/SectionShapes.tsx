import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { scrollState } from "./scrollState"

const isMobile = typeof window !== "undefined" && window.innerWidth < 768

type WireframeKind = "icosahedron" | "torusKnot" | "octahedron" | "dodecahedron" | "torus" | "sphere"

// Una figura wireframe genérica que aparece/desaparece según qué tan
// visible esté su sección (scrollState.sections[sectionId]).
function WireframeShape({
  sectionId,
  kind,
  color,
  speed = 1,
}: {
  sectionId: string
  kind: WireframeKind
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const v = scrollState.sections[sectionId] ?? 0
    meshRef.current.rotation.x += delta * 0.16 * speed
    meshRef.current.rotation.y += delta * 0.24 * speed
    meshRef.current.scale.setScalar(0.7 + v * 0.5)
    const material = meshRef.current.material as THREE.MeshBasicMaterial
    material.opacity = 0.4 * v
  })

  const detail = isMobile ? 0 : 1

  return (
    <mesh ref={meshRef}>
      {kind === "icosahedron" && <icosahedronGeometry args={[2, detail]} />}
      {kind === "octahedron" && <octahedronGeometry args={[2.1, detail]} />}
      {kind === "dodecahedron" && <dodecahedronGeometry args={[1.9, detail]} />}
      {kind === "torus" && <torusGeometry args={[1.7, 0.55, 8, isMobile ? 16 : 28]} />}
      {kind === "torusKnot" && <torusKnotGeometry args={[1.4, 0.4, isMobile ? 48 : 90, 10]} />}
      {kind === "sphere" && <sphereGeometry args={[2, isMobile ? 12 : 20, isMobile ? 10 : 16]} />}
      <meshBasicMaterial color={color} wireframe transparent opacity={0} />
    </mesh>
  )
}

// Cúmulo de puntos ("estrellas") para Certificaciones — mismo lenguaje
// visual que el starfield de fondo, pero como pieza central de la sección.
function StarCluster({ sectionId, color }: { sectionId: string; color: string }) {
  const pointsRef = useRef<THREE.Points>(null)
  const count = isMobile ? 90 : 220

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 0.6 + Math.random() * 2.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = radius * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    const v = scrollState.sections[sectionId] ?? 0
    pointsRef.current.rotation.y += delta * 0.1
    pointsRef.current.scale.setScalar(0.8 + v * 0.4)
    const material = pointsRef.current.material as THREE.PointsMaterial
    material.opacity = 0.7 * v
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.06} sizeAttenuation transparent opacity={0} />
    </points>
  )
}

// Una figura 3D distinta por sección, centrada en el mismo punto: cada una
// aparece con fade al entrar en foco y se desvanece al salir (subiendo o
// bajando), como un pase de diapositivas detrás del contenido.
export default function SectionShapes() {
  return (
    <group position={[0, 0, -1]}>
      <WireframeShape sectionId="about" kind="icosahedron" color="#a855f7" />
      <WireframeShape sectionId="experience" kind="torusKnot" color="#22d3ee" speed={0.7} />
      <WireframeShape sectionId="skills" kind="octahedron" color="#a855f7" speed={1.2} />
      <WireframeShape sectionId="projects" kind="sphere" color="#22d3ee" speed={0.5} />
      <StarCluster sectionId="certifications" color="#22d3ee" />
      <WireframeShape sectionId="education" kind="dodecahedron" color="#a855f7" speed={0.9} />
      <WireframeShape sectionId="contact" kind="torus" color="#22d3ee" speed={1.1} />
    </group>
  )
}
