import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
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

function CenterpieceShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const p = scrollState.progress
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.22
    meshRef.current.position.y = -p * 4
    meshRef.current.scale.setScalar(1 + p * 0.6)
    state.camera.position.z = 8 - p * 2
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, isMobile ? 0 : 1]} />
      <meshBasicMaterial color="#a855f7" wireframe />
    </mesh>
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
    </Canvas>
  )
}
