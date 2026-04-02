"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { AdditiveBlending, CatmullRomCurve3, Group, MeshStandardMaterial, TubeGeometry, Vector3 } from "three";

function Feather({
  position,
  rotation,
  scale = [1, 1, 1],
  color = "#f2c86f",
  emissive = "#8e2416",
  intensity = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  emissive?: string;
  intensity?: number;
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <coneGeometry args={[0.12, 0.52, 5]} />
      <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={intensity} metalness={0.74} roughness={0.18} />
    </mesh>
  );
}

function PhoenixWing({ side = 1 }: { side?: 1 | -1 }) {
  const wingRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (wingRef.current) {
      const flap = Math.sin(t * 1.05) * 0.18;
      wingRef.current.rotation.z = side === -1 ? -0.92 + flap : 0.92 - flap;
      wingRef.current.rotation.y = side === -1 ? -0.16 + flap * 0.35 : 0.16 - flap * 0.35;
      wingRef.current.rotation.x = -0.1 + Math.cos(t * 0.7) * 0.04;
    }
  });

  return (
    <group ref={wingRef} position={[side * 0.46, 0.34, -0.06]}>
      <mesh position={[side * 0.22, 0.14, 0]} rotation={[0.1, 0, side * 0.16]}>
        <capsuleGeometry args={[0.09, 0.48, 6, 12]} />
        <meshStandardMaterial color="#f4cb73" emissive="#872215" emissiveIntensity={1.1} metalness={0.72} roughness={0.16} />
      </mesh>

      {Array.from({ length: 6 }).map((_, index) => (
        <Feather
          key={`${side}-${index}`}
          position={[side * (0.36 + index * 0.2), 0.08 + index * 0.03, -0.02 - index * 0.05]}
          rotation={[0.1 + index * 0.03, side === -1 ? -0.12 : 0.12, side === -1 ? -0.58 - index * 0.1 : 0.58 + index * 0.1]}
          scale={[1 + index * 0.16, 1 + index * 0.12, 1]}
          color={index < 2 ? "#f5d88f" : index < 4 ? "#f0bf5e" : "#df8a3f"}
          emissive={index < 2 ? "#962617" : "#751a11"}
          intensity={1 + index * 0.06}
        />
      ))}
    </group>
  );
}

function Phoenix() {
  const groupRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.32) * 0.18;
      groupRef.current.rotation.x = Math.cos(t * 0.28) * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.48) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0.02, 0.08, 0]}>
      <mesh position={[0, 0.2, 0]}>
        <capsuleGeometry args={[0.23, 0.7, 8, 18]} />
        <meshStandardMaterial color="#f4d487" emissive="#a22b1c" emissiveIntensity={1.2} metalness={0.78} roughness={0.16} />
      </mesh>

      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.18, 28, 28]} />
        <meshStandardMaterial color="#fff0ca" emissive="#d58d30" emissiveIntensity={0.95} metalness={0.68} roughness={0.14} />
      </mesh>

      <mesh position={[0, 0.76, 0.06]} rotation={[0.1, 0, 0]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#f7e2af" emissive="#8f2517" emissiveIntensity={1} metalness={0.7} roughness={0.14} />
      </mesh>

      <mesh position={[0.03, 0.77, 0.18]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.042, 0.2, 10]} />
        <meshStandardMaterial color="#d7a44c" emissive="#734015" emissiveIntensity={0.55} metalness={0.9} roughness={0.12} />
      </mesh>

      <mesh position={[0.03, 0.84, 0.11]} rotation={[0.1, 0, -0.1]}>
        <coneGeometry args={[0.05, 0.22, 5]} />
        <meshStandardMaterial color="#fff3d2" emissive="#9b2919" emissiveIntensity={1.2} metalness={0.62} roughness={0.16} />
      </mesh>

      <PhoenixWing side={-1} />
      <PhoenixWing side={1} />

      {Array.from({ length: 5 }).map((_, index) => (
        <Feather
          key={`tail-center-${index}`}
          position={[0, -0.18 - index * 0.22, -0.08 - index * 0.12]}
          rotation={[0.5 + index * 0.05, 0, 0]}
          scale={[1.1 + index * 0.18, 1.2 + index * 0.16, 1]}
          color={index < 2 ? "#f0bf5e" : "#d97335"}
          emissive="#75190f"
          intensity={0.92}
        />
      ))}

      <Feather position={[-0.18, -0.3, -0.04]} rotation={[0.52, 0.08, -0.34]} scale={[1.1, 1.15, 1]} color="#efb459" emissive="#7d1d11" intensity={0.9} />
      <Feather position={[0.18, -0.3, -0.04]} rotation={[0.52, -0.08, 0.34]} scale={[1.1, 1.15, 1]} color="#efb459" emissive="#7d1d11" intensity={0.9} />
    </group>
  );
}

function Serpent() {
  const groupRef = useRef<Group | null>(null);
  const bodyPath = useMemo(
    () =>
      [
        new Vector3(-1.18, 0.28, 0.72),
        new Vector3(-0.82, 0.86, 0.54),
        new Vector3(-0.2, 1.04, 0.18),
        new Vector3(0.62, 0.58, -0.18),
        new Vector3(0.96, -0.06, -0.36),
        new Vector3(0.48, -0.78, -0.28),
        new Vector3(-0.24, -0.96, 0),
        new Vector3(-0.92, -0.46, 0.26),
        new Vector3(-1.16, 0.12, 0.64),
      ],
    [],
  );

  const curve = useMemo(() => new CatmullRomCurve3(bodyPath, false), [bodyPath]);
  const bodyGeometry = useMemo(() => new TubeGeometry(curve, 260, 0.065, 18, false), [curve]);
  const scaleDots = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, index) => {
        const point = curve.getPoint(index / 21);
        return {
          position: [point.x, point.y, point.z] as [number, number, number],
          scale: index < 4 ? 1.2 : index > 18 ? 0.72 : 0.94,
        };
      }),
    [curve],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.26;
      groupRef.current.rotation.z = Math.sin(t * 0.42) * 0.08;
      groupRef.current.position.y = Math.cos(t * 0.44) * 0.05;
    }
  });

  const bodyMaterial = new MeshStandardMaterial({
    color: "#0f6a49",
    emissive: "#0d3324",
    emissiveIntensity: 0.8,
    metalness: 0.74,
    roughness: 0.24,
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={bodyGeometry} material={bodyMaterial} />

      {scaleDots.map((dot, index) => (
        <mesh key={index} position={dot.position} scale={[dot.scale, dot.scale, dot.scale * 1.12]}>
          <sphereGeometry args={[0.042, 10, 10]} />
          <meshStandardMaterial color="#e0bb6b" emissive="#6b5723" emissiveIntensity={0.28} metalness={0.96} roughness={0.12} />
        </mesh>
      ))}

      <mesh position={[-1.18, 0.28, 0.72]} rotation={[0.08, -0.7, 0.18]} scale={[1.34, 0.92, 1.7]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#148d62" emissive="#0c3324" emissiveIntensity={0.9} metalness={0.78} roughness={0.2} />
      </mesh>
      <mesh position={[-1.06, 0.3, 0.82]} rotation={[0.04, -0.82, 0.12]} scale={[0.56, 0.32, 0.82]}>
        <coneGeometry args={[0.12, 0.3, 4]} />
        <meshStandardMaterial color="#148d62" emissive="#0b2c1f" emissiveIntensity={0.85} metalness={0.8} roughness={0.18} />
      </mesh>

      <mesh position={[-1.14, 0.33, 0.84]}>
        <sphereGeometry args={[0.018, 10, 10]} />
        <meshBasicMaterial color="#7ff3bc" transparent opacity={0.95} />
      </mesh>
      <mesh position={[-1.07, 0.31, 0.87]}>
        <sphereGeometry args={[0.018, 10, 10]} />
        <meshBasicMaterial color="#7ff3bc" transparent opacity={0.95} />
      </mesh>
    </group>
  );
}

function WizardScene() {
  const sceneRef = useRef<Group | null>(null);
  const trailGeometry = useMemo(() => {
    const points = [
      new Vector3(-0.2, -1.12, -0.08),
      new Vector3(0.22, -0.86, -0.1),
      new Vector3(0.68, -0.62, -0.2),
      new Vector3(1.02, -0.34, -0.12),
    ];
    return new TubeGeometry(new CatmullRomCurve3(points), 80, 0.014, 10, false);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sceneRef.current) {
      sceneRef.current.rotation.y = Math.sin(t * 0.22) * 0.08;
      sceneRef.current.position.y = Math.sin(t * 0.34) * 0.03;
    }
  });

  return (
    <>
      <color attach="background" args={["#0a0807"]} />
      <fog attach="fog" args={["#0a0807", 5.4, 9.4]} />

      <ambientLight intensity={0.68} color="#f2d59f" />
      <directionalLight position={[2.8, 3.2, 2.4]} intensity={1.9} color="#f8d28a" />
      <pointLight position={[-1.8, 0.9, 2.2]} intensity={18} distance={6} color="#b2361f" />
      <pointLight position={[1.9, 0.8, 1.9]} intensity={14} distance={5.4} color="#169162" />
      <pointLight position={[0, -1.4, 1.2]} intensity={10} distance={4.8} color="#d4a248" />

      <Float speed={0.9} rotationIntensity={0.08} floatIntensity={0.24}>
        <group ref={sceneRef}>
          <Phoenix />
          <Serpent />

          <mesh position={[0, -1.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1.54, 48]} />
            <meshBasicMaterial color="#ad7828" transparent opacity={0.12} blending={AdditiveBlending} />
          </mesh>

          <mesh geometry={trailGeometry}>
            <meshStandardMaterial color="#e7b45a" emissive="#bc7a24" emissiveIntensity={0.95} metalness={0.8} roughness={0.16} />
          </mesh>
        </group>
      </Float>

      <Sparkles count={34} scale={[4.6, 3.2, 2.8]} size={3} speed={0.22} opacity={0.28} color="#f1cf86" />
      <Sparkles count={14} scale={[4.2, 3, 2.4]} size={3} speed={0.16} opacity={0.18} color="#2fa16f" />
      <Sparkles count={10} scale={[3.8, 2.6, 2]} size={3.4} speed={0.12} opacity={0.12} color="#b34d2b" />
    </>
  );
}

export function PhoenixSerpentScene() {
  return (
    <div className="wizard-scene-shell">
      <Canvas camera={{ position: [0, 0.24, 4.9], fov: 34 }} dpr={[1, 1.8]}>
        <WizardScene />
      </Canvas>
    </div>
  );
}
