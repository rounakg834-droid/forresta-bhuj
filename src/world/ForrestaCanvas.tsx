import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useMemo, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

interface ParticleProps {
  count: number
  isMobile: boolean
}

/**
 * Ambient golden spore and emerald botanical particles floating in 3D space
 */
function BotanicalParticles({ count, isMobile }: ParticleProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Generate particle positions and randomized orbital phases
  const particles = useMemo(() => {
    const data = []
    const rangeX = isMobile ? 8 : 16
    const rangeY = 18
    const rangeZ = 12

    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * rangeX,
        y: (Math.random() - 0.5) * rangeY,
        z: (Math.random() - 0.5) * rangeZ - 2,
        speedX: (Math.random() - 0.5) * 0.004,
        speedY: 0.003 + Math.random() * 0.006,
        speedZ: (Math.random() - 0.5) * 0.003,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        scale: 0.04 + Math.random() * 0.08,
        colorType: Math.random() > 0.35 ? '#B99B65' : '#4E876B', // Gold or Emerald
      })
    }
    return data
  }, [count, isMobile])

  // Set colors on instance matrix
  useEffect(() => {
    if (!meshRef.current) return
    const goldColor = new THREE.Color('#B99B65')
    const emeraldColor = new THREE.Color('#3A7056')

    for (let i = 0; i < count; i++) {
      const color = particles[i].colorType === '#B99B65' ? goldColor : emeraldColor
      meshRef.current.setColorAt(i, color)
    }
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  }, [count, particles])

  // Smooth floating animation
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const p = particles[i]
      // Organic drifting
      p.y += p.speedY
      p.x += Math.sin(t * 0.5 + i) * 0.003
      p.z += Math.cos(t * 0.4 + i) * 0.002

      // Wrap around bounds
      if (p.y > 9) p.y = -9
      if (p.x > 9) p.x = -9
      if (p.x < -9) p.x = 9

      dummy.position.set(p.x, p.y, p.z)
      dummy.scale.setScalar(p.scale * (1 + 0.2 * Math.sin(t * 2 + i)))
      dummy.rotation.set(t * p.rotSpeed, t * p.rotSpeed * 0.8, t * 0.01)
      dummy.updateMatrix()

      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial transparent opacity={0.65} blending={THREE.AdditiveBlending} depthWrite={false} />
    </instancedMesh>
  )
}

/**
 * 3D Stylized Botanical Floating Leaves tumbling gently through space
 */
function FloatingBotanicalLeaves({ count = 12 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Create leaf geometry (curved ellipse)
  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -0.6)
    shape.quadraticCurveTo(0.4, 0, 0, 0.6)
    shape.quadraticCurveTo(-0.4, 0, 0, -0.6)

    const geom = new THREE.ShapeGeometry(shape, 12)
    return geom
  }, [])

  const leaves = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 14,
      z: -1 - Math.random() * 6,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedY: 0.004 + Math.random() * 0.006,
      rotSpeedX: 0.006 + Math.random() * 0.01,
      rotSpeedY: 0.004 + Math.random() * 0.008,
      scale: 0.35 + Math.random() * 0.45,
    }))
  }, [count])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const leaf = leaves[i]
      leaf.y -= leaf.speedY
      leaf.x += Math.sin(t * 0.6 + i) * 0.004
      leaf.rotX += leaf.rotSpeedX
      leaf.rotY += leaf.rotSpeedY

      if (leaf.y < -8) leaf.y = 8

      dummy.position.set(leaf.x, leaf.y, leaf.z)
      dummy.rotation.set(leaf.rotX, leaf.rotY, Math.sin(t * 0.5 + i) * 0.4)
      dummy.scale.setScalar(leaf.scale)
      dummy.updateMatrix()

      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[leafGeometry, undefined, count]} frustumCulled={false}>
      <meshStandardMaterial
        color="#1E4535"
        roughness={0.4}
        metalness={0.2}
        side={THREE.DoubleSide}
        transparent
        opacity={0.45}
      />
    </instancedMesh>
  )
}

/**
 * Camera controller reacting subtly to scroll and mouse parallax
 */
function CameraController({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const targetPos = useRef(new THREE.Vector3(0, 0, 5))

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.8
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.8
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      
      // Camera smoothly drifts downwards and alters depth as you scroll through the page
      targetPos.current.y = -scrollProgress * 4
      targetPos.current.z = 5 + Math.sin(scrollProgress * Math.PI) * 1.5
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    // Smooth camera interpolation
    camera.position.x += (mouse.current.x - camera.position.x) * 0.04
    camera.position.y += (targetPos.current.y - mouse.current.y * 0.4 - camera.position.y) * 0.04
    camera.position.z += (targetPos.current.z - camera.position.z) * 0.04
    camera.lookAt(0, targetPos.current.y * 0.8, 0)
  })

  return null
}

export function ForrestaCanvas() {
  const [canRender, setCanRender] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCanRender(false)
      return
    }

    // Check mobile
    setIsMobile(window.innerWidth < 768)

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      if (!gl) setCanRender(false)
    } catch {
      setCanRender(false)
    }
  }, [])

  if (!canRender) return null

  const dpr = isMobile ? Math.min(window.devicePixelRatio, 1.2) : Math.min(window.devicePixelRatio, 1.5)
  const particleCount = isMobile ? 45 : 110
  const leafCount = isMobile ? 6 : 14

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-opacity duration-1000"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 5], fov: isMobile ? 55 : 45 }}
        gl={{
          antialias: !isMobile,
          powerPreference: 'high-performance',
          alpha: true,
          stencil: false,
          depth: true,
        }}
        style={{ pointerEvents: 'none' }}
      >
        <color attach="background" args={['#0A1813']} />
        <fogExp2 attach="fog" args={['#0A1813', 0.075]} />

        {/* Ambient & Directional Warm Garden Lighting */}
        <ambientLight intensity={0.5} color="#EDE7D7" />
        <directionalLight position={[4, 8, 4]} intensity={1.2} color="#B99B65" />
        <pointLight position={[-4, 2, -2]} intensity={0.8} color="#4E876B" />

        <Suspense fallback={null}>
          <BotanicalParticles count={particleCount} isMobile={isMobile} />
          <FloatingBotanicalLeaves count={leafCount} />
          <CameraController isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}
