"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Points } from "three";
import { AdditiveBlending } from "three";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function seededNoise(index: number) {
  const value = Math.sin(index * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField() {
  const points = useRef<Points>(null);
  const positions = useMemo(() => {
    const count = 600;
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 2.4 + seededNoise(index + 1) * 2.4;
      const theta = seededNoise(index + 2) * Math.PI * 2;
      const phi = Math.acos(2 * seededNoise(index + 3) - 1);

      values[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      values[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      values[index * 3 + 2] = radius * Math.cos(phi);
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.035;
      points.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#88f7ff"
        transparent
        opacity={0.58}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

function GlassCore() {
  const group = useRef<Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;

    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = state.pointer.y * 0.14;
    group.current.position.x = state.pointer.x * 0.18;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.55}>
        <Sphere args={[1.15, 64, 64]}>
          <MeshDistortMaterial
            color="#c8fbff"
            distort={0.28}
            speed={1.6}
            roughness={0.12}
            metalness={0.2}
            transparent
            opacity={0.22}
          />
        </Sphere>
      </Float>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 16, 140]} />
        <meshStandardMaterial color="#88f7ff" emissive="#88f7ff" emissiveIntensity={1.1} />
      </mesh>
      <mesh rotation={[0.9, 0.25, 0.4]}>
        <torusKnotGeometry args={[1.15, 0.012, 160, 12]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={16} color="#88f7ff" />
      <pointLight position={[-4, -2, -2]} intensity={9} color="#f7dca6" />
      <ParticleField />
      <GlassCore />
      <EffectComposer>
        <Bloom intensity={0.55} luminanceThreshold={0.24} luminanceSmoothing={0.8} />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.4], fov: 44 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
