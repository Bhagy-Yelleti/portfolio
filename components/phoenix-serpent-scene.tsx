"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer, GodRays, Vignette } from "@react-three/postprocessing";
import {
  AdditiveBlending,
  CatmullRomCurve3,
  DoubleSide,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TubeGeometry,
  Vector3,
} from "three";

type FeatherProps = {
  side: 1 | -1;
  index: number;
  anchor: [number, number, number];
  length: number;
};

function EmberParticles() {
  return (
    <>
      <Sparkles count={24} scale={[2.6, 2.4, 2.1]} size={3} speed={0.2} opacity={0.24} color="#f2cf83" />
      <Sparkles count={14} scale={[2.2, 1.8, 1.8]} size={2.8} speed={0.14} opacity={0.16} color="#b84024" />
      <Sparkles count={10} scale={[2.6, 2.2, 2]} size={2.4} speed={0.12} opacity={0.1} color="#2e9f6f" />
    </>
  );
}

function WingFeather({ side, index, anchor, length }: FeatherProps) {
  const ref = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    const drift = Math.sin(t * 0.95 + index * 0.35) * 0.08;
    ref.current.rotation.x = 0.08 + drift * 0.4;
    ref.current.rotation.y = side === -1 ? -0.22 + drift * 0.2 : 0.22 - drift * 0.2;
    ref.current.rotation.z = (side === -1 ? -1 : 1) * (0.28 + index * 0.11 + drift * 0.3);
    ref.current.position.y = anchor[1] + Math.sin(t * 0.7 + index * 0.18) * 0.02;
  });

  return (
    <group position={anchor}>
      <mesh ref={ref} position={[side * (0.14 + index * 0.2), index * 0.04, -index * 0.06]}>
        <planeGeometry args={[0.34 + index * 0.1, length]} />
        <meshStandardMaterial
          color={index < 2 ? "#f5dfa0" : index < 5 ? "#f1c66f" : "#db8a3d"}
          emissive={index < 2 ? "#962619" : "#7a1d13"}
          emissiveIntensity={0.95 + index * 0.06}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.9}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

function PhoenixWing({ side = 1 }: { side?: 1 | -1 }) {
  const wingRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!wingRef.current) return;

    const flap = Math.sin(t * 0.9) * 0.18;
    wingRef.current.rotation.z = (side === -1 ? -1 : 1) * (0.72 - flap);
    wingRef.current.rotation.y = (side === -1 ? -1 : 1) * (0.18 - flap * 0.3);
    wingRef.current.rotation.x = -0.1 + Math.cos(t * 0.55) * 0.04;
  });

  return (
    <group ref={wingRef} position={[side * 0.36, 0.38, -0.06]}>
      <mesh position={[side * 0.14, 0.08, 0]} rotation={[0.12, 0, side * 0.2]}>
        <capsuleGeometry args={[0.08, 0.46, 6, 12]} />
        <meshStandardMaterial color="#f4cc76" emissive="#882218" emissiveIntensity={0.95} metalness={0.72} roughness={0.18} />
      </mesh>

      {Array.from({ length: 7 }).map((_, index) => (
        <WingFeather
          key={`${side}-${index}`}
          side={side}
          index={index}
          anchor={[side * 0.1, 0.02 + index * 0.02, -0.02 - index * 0.04]}
          length={0.54 + index * 0.08}
        />
      ))}
    </group>
  );
}

function TailRibbon({
  points,
  color,
  emissive,
  intensity,
}: {
  points: Vector3[];
  color: string;
  emissive: string;
  intensity: number;
}) {
  const meshRef = useRef<Mesh | null>(null);
  const base = useMemo(() => points.map((point) => point.clone()), [points]);
  const geometry = useMemo(() => new TubeGeometry(new CatmullRomCurve3(base), 90, 0.03, 8, false), [base]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current) return;

    meshRef.current.rotation.y = Math.sin(t * 0.36) * 0.08;
    meshRef.current.rotation.z = Math.cos(t * 0.42) * 0.05;
    meshRef.current.position.x = Math.sin(t * 0.8 + base[0].x) * 0.04;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={intensity} metalness={0.58} roughness={0.26} />
    </mesh>
  );
}

function Phoenix() {
  const groupRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.position.y = Math.sin(t * 0.46) * 0.08;
    groupRef.current.rotation.y = Math.sin(t * 0.24) * 0.14;
    groupRef.current.rotation.x = Math.cos(t * 0.18) * 0.03;
  });

  const tailCurves = useMemo(
    () => [
      [
        new Vector3(-0.02, -0.34, -0.1),
        new Vector3(-0.18, -0.68, -0.22),
        new Vector3(-0.24, -1.12, -0.48),
        new Vector3(-0.12, -1.6, -0.72),
      ],
      [
        new Vector3(0, -0.34, -0.12),
        new Vector3(0.08, -0.76, -0.3),
        new Vector3(0.1, -1.18, -0.56),
        new Vector3(0, -1.72, -0.78),
      ],
      [
        new Vector3(0.04, -0.32, -0.1),
        new Vector3(0.22, -0.66, -0.22),
        new Vector3(0.3, -1.04, -0.48),
        new Vector3(0.16, -1.52, -0.74),
      ],
      [
        new Vector3(-0.12, -0.26, -0.08),
        new Vector3(-0.42, -0.56, -0.24),
        new Vector3(-0.52, -0.92, -0.42),
        new Vector3(-0.32, -1.28, -0.66),
      ],
    ],
    [],
  );

  return (
    <group ref={groupRef} position={[0, 0.12, 0]}>
      <mesh position={[0, 0.22, 0]}>
        <capsuleGeometry args={[0.2, 0.82, 8, 18]} />
        <meshStandardMaterial color="#f3cf7d" emissive="#962619" emissiveIntensity={1.1} metalness={0.76} roughness={0.16} />
      </mesh>

      <mesh position={[0, 0.18, 0.02]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color="#fff0c9" emissive="#d8872d" emissiveIntensity={0.85} metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.58, 0.02]} rotation={[0.22, 0, 0]}>
        <capsuleGeometry args={[0.08, 0.34, 6, 12]} />
        <meshStandardMaterial color="#f7dfaa" emissive="#822116" emissiveIntensity={0.82} metalness={0.7} roughness={0.18} />
      </mesh>

      <mesh position={[0, 0.84, 0.05]} rotation={[0.08, 0, 0]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#f6ddb0" emissive="#8c2418" emissiveIntensity={0.94} metalness={0.72} roughness={0.16} />
      </mesh>

      <mesh position={[0.02, 0.83, 0.18]} rotation={[0.06, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.04, 0.2, 10]} />
        <meshStandardMaterial color="#d39e43" emissive="#6e3e15" emissiveIntensity={0.48} metalness={0.9} roughness={0.12} />
      </mesh>

      <mesh position={[0, 1.02, 0.04]} rotation={[0.12, 0, -0.1]}>
        <coneGeometry args={[0.06, 0.26, 5]} />
        <meshStandardMaterial color="#ffefc7" emissive="#9a291a" emissiveIntensity={1.1} metalness={0.64} roughness={0.18} transparent opacity={0.92} />
      </mesh>

      <pointLight position={[0.04, 0.88, 0.18]} intensity={2.4} distance={1.4} color="#ffd78d" />

      <PhoenixWing side={-1} />
      <PhoenixWing side={1} />

      {tailCurves.map((curve, index) => (
        <TailRibbon
          key={index}
          points={curve}
          color={index % 2 === 0 ? "#efbf62" : "#dc7d33"}
          emissive={index % 2 === 0 ? "#a32a1b" : "#8d2317"}
          intensity={0.85 + index * 0.08}
        />
      ))}
    </group>
  );
}

function Serpent() {
  const groupRef = useRef<Group | null>(null);
  const path = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(-1.2, 0.18, 0.74),
        new Vector3(-0.9, 0.84, 0.58),
        new Vector3(-0.2, 1.1, 0.26),
        new Vector3(0.74, 0.62, -0.12),
        new Vector3(1.1, -0.04, -0.3),
        new Vector3(0.62, -0.82, -0.22),
        new Vector3(-0.18, -1.06, 0.06),
        new Vector3(-0.92, -0.56, 0.26),
        new Vector3(-1.18, 0.04, 0.66),
      ]),
    [],
  );
  const bodyGeometry = useMemo(() => new TubeGeometry(path, 260, 0.066, 18, false), [path]);
  const shimmerPoints = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, index) => {
        const point = path.getPoint(index / 19);
        return [point.x, point.y, point.z] as [number, number, number];
      }),
    [path],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    groupRef.current.rotation.y = t * 0.22;
    groupRef.current.rotation.z = Math.sin(t * 0.42) * 0.08;
    groupRef.current.position.y = Math.cos(t * 0.38) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={bodyGeometry}>
        <meshStandardMaterial color="#116f4d" emissive="#0f3526" emissiveIntensity={0.74} metalness={0.76} roughness={0.24} />
      </mesh>

      {shimmerPoints.map((point, index) => (
        <mesh key={index} position={point} scale={[1, 1, 1.2]}>
          <sphereGeometry args={[index > 15 ? 0.03 : 0.036, 8, 8]} />
          <meshStandardMaterial color="#dcb86c" emissive="#6b5826" emissiveIntensity={0.24} metalness={0.95} roughness={0.14} />
        </mesh>
      ))}

      <mesh position={[-1.2, 0.2, 0.75]} rotation={[0.06, -0.74, 0.16]} scale={[1.5, 0.92, 1.9]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color="#149268" emissive="#0b2f22" emissiveIntensity={0.86} metalness={0.78} roughness={0.18} />
      </mesh>
      <mesh position={[-1.08, 0.22, 0.86]} rotation={[0.04, -0.82, 0.12]} scale={[0.6, 0.34, 0.92]}>
        <coneGeometry args={[0.12, 0.32, 4]} />
        <meshStandardMaterial color="#149268" emissive="#0b2b1f" emissiveIntensity={0.82} metalness={0.82} roughness={0.16} />
      </mesh>

      <mesh position={[-1.15, 0.25, 0.88]}>
        <sphereGeometry args={[0.016, 10, 10]} />
        <meshBasicMaterial color="#80f3bd" />
      </mesh>
      <mesh position={[-1.07, 0.23, 0.91]}>
        <sphereGeometry args={[0.016, 10, 10]} />
        <meshBasicMaterial color="#80f3bd" />
      </mesh>
    </group>
  );
}

function WizardScene() {
  const groupRef = useRef<Group | null>(null);
  const godRaySource = useRef<Mesh>(null!);
  const emberTrailGeometry = useMemo(() => {
    const points = [
      new Vector3(-0.16, -1.12, -0.08),
      new Vector3(0.14, -0.9, -0.12),
      new Vector3(0.48, -0.68, -0.24),
      new Vector3(0.86, -0.42, -0.18),
    ];
    return new TubeGeometry(new CatmullRomCurve3(points), 100, 0.012, 8, false);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.08;
    groupRef.current.position.y = Math.sin(t * 0.28) * 0.03;
  });

  return (
    <>
      <color attach="background" args={["#090706"]} />
      <fog attach="fog" args={["#090706", 5.2, 9.6]} />

      <ambientLight intensity={0.62} color="#f2d29b" />
      <directionalLight position={[3.4, 3.6, 3]} intensity={2.2} color="#ffd392" />
      <pointLight position={[-2.2, 1.3, 2]} intensity={16} distance={7} color="#b53a24" />
      <pointLight position={[2.2, 0.8, 2.2]} intensity={12} distance={6} color="#159062" />
      <pointLight position={[0.2, -1.2, 1.2]} intensity={8} distance={4.5} color="#cb9c43" />

      <Float speed={0.85} rotationIntensity={0.08} floatIntensity={0.22}>
        <group ref={groupRef}>
          <Phoenix />
          <Serpent />

          <mesh position={[0, -1.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1.58, 48]} />
            <meshBasicMaterial color="#b37b29" transparent opacity={0.12} blending={AdditiveBlending} />
          </mesh>

          <mesh geometry={emberTrailGeometry}>
            <meshStandardMaterial color="#efc160" emissive="#c07b24" emissiveIntensity={0.82} metalness={0.82} roughness={0.18} />
          </mesh>

          <mesh ref={godRaySource} position={[0.02, 0.34, -0.58]}>
            <sphereGeometry args={[0.34, 20, 20]} />
            <meshBasicMaterial color="#f6d694" transparent opacity={0.22} />
          </mesh>
        </group>
      </Float>

      <EmberParticles />

      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur intensity={1.1} luminanceThreshold={0.18} luminanceSmoothing={0.45} />
        <GodRays
          sun={godRaySource}
          samples={40}
          density={0.82}
          decay={0.92}
          weight={0.6}
          exposure={0.24}
          clampMax={1}
          blur
        />
        <Vignette eskil={false} offset={0.16} darkness={0.62} />
      </EffectComposer>
    </>
  );
}

export function PhoenixSerpentScene() {
  return (
    <div className="wizard-scene-shell">
      <Canvas camera={{ position: [0, 0.24, 5.2], fov: 34 }} dpr={[1, 1.8]}>
        <WizardScene />
      </Canvas>
    </div>
  );
}
