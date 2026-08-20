import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"
import { scrollState } from "./scrollState"

const isMobile = typeof window !== "undefined" && window.innerWidth < 768

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = isMobile ? 500 : 1600

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 10
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
    const p = scrollState.progress
    pointsRef.current.rotation.y += delta * 0.03
    pointsRef.current.rotation.x = p * Math.PI * 0.5
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.045} sizeAttenuation transparent opacity={0.75} />
    </points>
  )
}

const FRAME_BASE_Y = 1.5

function CenterpieceShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const exit = scrollState.heroExit
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.22
    meshRef.current.position.y = FRAME_BASE_Y - exit * 6
    meshRef.current.scale.setScalar(1 + exit * 0.4)
    const material = meshRef.current.material as THREE.MeshBasicMaterial
    material.opacity = 0.6 * (1 - exit)
    state.camera.position.z = 8 - scrollState.progress * 2
  })

  return (
    <mesh ref={meshRef} position={[0, FRAME_BASE_Y, 0]}>
      <icosahedronGeometry args={[2.1, isMobile ? 0 : 1]} />
      <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.6} />
    </mesh>
  )
}

// Foto de perfil sin fondo, flotando como plano en la escena — reacciona
// al scroll (sale de cuadro) y al puntero (leve paralaje 3D).
function PhotoCutout() {
  const groupRef = useRef<THREE.Group>(null)
  const texture = useLoader(THREE.TextureLoader, "/foto-3d.webp")
  texture.colorSpace = THREE.SRGBColorSpace

  const aspect = texture.image ? texture.image.width / texture.image.height : 0.5
  const height = isMobile ? 3.4 : 4.3
  const width = height * aspect

  useFrame((state) => {
    if (!groupRef.current) return
    const exit = scrollState.heroExit
    const { x, y } = scrollState.pointer
    const t = state.clock.elapsedTime

    groupRef.current.position.y = FRAME_BASE_Y - height * 0.28 - exit * 5 + Math.sin(t * 0.6) * 0.06
    groupRef.current.position.x = x * 0.45
    groupRef.current.rotation.y = x * 0.35
    groupRef.current.rotation.x = -y * 0.18
    groupRef.current.rotation.z = x * -0.05

    const material = (groupRef.current.children[0] as THREE.Mesh).material as THREE.MeshBasicMaterial
    material.opacity = Math.max(0, 1 - exit * 1.4)
  })

  return (
    <group ref={groupRef} position={[0, FRAME_BASE_Y - height * 0.28, 0.6]}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.05} toneMapped={false} />
      </mesh>
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{ antialias: !isMobile, alpha: true }}
      style={{ position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <CenterpieceShape />
      <ParticleField />
      <Suspense fallback={null}>
        <PhotoCutout />
      </Suspense>
    </Canvas>
  )
}
