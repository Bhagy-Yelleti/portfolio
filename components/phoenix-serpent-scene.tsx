"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { AdditiveBlending, CatmullRomCurve3, Color, Group, MathUtils, TubeGeometry, Vector3 } from "three";

function Phoenix() {
  const groupRef = useRef<Group | null>(null);
  const leftWingRef = useRef<Group | null>(null);
  const rightWingRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.22;
      groupRef.current.rotation.x = Math.cos(t * 0.28) * 0.08;
      groupRef.current.position.y = Math.sin(t * 0.55) * 0.12;
    }

    if (leftWingRef.current && rightWingRef.current) {
      const flap = Math.sin(t * 1.15) * 0.22;
      leftWingRef.current.rotation.z = -0.55 + flap;
      leftWingRef.current.rotation.y = -0.2 + flap * 0.35;
      rightWingRef.current.rotation.z = 0.55 - flap;
      rightWingRef.current.rotation.y = 0.2 - flap * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[-0.1, 0.2, 0]}>
      <mesh position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.34, 48, 48]} />
        <meshStandardMaterial color="#f3c977" emissive="#7c1f17" emissiveIntensity={1.2} metalness={0.75} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.68, 0.04]} rotation={[0.18, 0, -0.06]}>
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshStandardMaterial color="#f4dca1" emissive="#8b2318" emissiveIntensity={1.1} metalness={0.72} roughness={0.18} />
      </mesh>

      <mesh position={[0.03, 0.72, 0.16]} rotation={[Math.PI / 2.3, 0, -0.04]}>
        <coneGeometry args={[0.05, 0.18, 18]} />
        <meshStandardMaterial color="#e1b258" emissive="#65210e" emissiveIntensity={0.8} metalness={0.8} roughness={0.16} />
      </mesh>

      <mesh position={[0, 1.02, -0.03]} rotation={[-0.1, 0, 0]}>
        <coneGeometry args={[0.08, 0.42, 24]} />
        <meshStandardMaterial color="#ffefc6" emissive="#9f2d1d" emissiveIntensity={1.4} metalness={0.65} roughness={0.2} />
      </mesh>

      <group ref={leftWingRef} position={[-0.3, 0.34, -0.08]}>
        {Array.from({ length: 7 }).map((_, index) => (
          <mesh
            key={`left-${index}`}
            position={[-0.18 - index * 0.13, 0.06 + index * 0.055, -0.03 - index * 0.03]}
            rotation={[0.1 + index * 0.04, 0.12, -0.32 - index * 0.05]}
          >
            <boxGeometry args={[0.28, 0.08, 0.42 + index * 0.05]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#f4ce79" : "#e89a47"}
              emissive={index % 2 === 0 ? "#8d2418" : "#6f170e"}
              emissiveIntensity={1 + index * 0.06}
              metalness={0.72}
              roughness={0.22}
            />
          </mesh>
        ))}
      </group>

      <group ref={rightWingRef} position={[0.3, 0.34, -0.08]}>
        {Array.from({ length: 7 }).map((_, index) => (
          <mesh
            key={`right-${index}`}
            position={[0.18 + index * 0.13, 0.06 + index * 0.055, -0.03 - index * 0.03]}
            rotation={[0.1 + index * 0.04, -0.12, 0.32 + index * 0.05]}
          >
            <boxGeometry args={[0.28, 0.08, 0.42 + index * 0.05]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#f4ce79" : "#e89a47"}
              emissive={index % 2 === 0 ? "#8d2418" : "#6f170e"}
              emissiveIntensity={1 + index * 0.06}
              metalness={0.72}
              roughness={0.22}
            />
          </mesh>
        ))}
      </group>

      {Array.from({ length: 5 }).map((_, index) => (
        <mesh
          key={`tail-${index}`}
          position={[0, -0.1 - index * 0.16, -0.08 - index * 0.1]}
          rotation={[0.4 + index * 0.12, 0, 0]}
        >
          <coneGeometry args={[0.1 - index * 0.012, 0.34, 20]} />
          <meshStandardMaterial color="#d59042" emissive="#7a1d14" emissiveIntensity={0.9} metalness={0.7} roughness={0.22} />
        </mesh>
      ))}
    </group>
  );
}

function Serpent() {
  const groupRef = useRef<Group | null>(null);
  const geometry = useMemo(() => {
    const points = [
      new Vector3(-1.25, -0.2, 0.62),
      new Vector3(-0.7, 0.65, 0.52),
      new Vector3(0.12, 1.02, 0.22),
      new Vector3(0.96, 0.28, -0.24),
      new Vector3(0.68, -0.72, -0.5),
      new Vector3(-0.14, -1.05, -0.3),
      new Vector3(-0.92, -0.42, 0.16),
      new Vector3(-1.22, 0.28, 0.56),
    ];

    return new TubeGeometry(new CatmullRomCurve3(points, true), 280, 0.08, 18, true);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.42;
      groupRef.current.rotation.z = Math.sin(t * 0.38) * 0.12;
      groupRef.current.position.y = Math.cos(t * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#0d6d4a" emissive="#0f3a27" emissiveIntensity={0.95} metalness={0.78} roughness={0.24} />
      </mesh>
      <mesh position={[-1.16, 0.31, 0.58]} rotation={[0.2, -0.8, 0.3]}>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial color="#169567" emissive="#0c3324" emissiveIntensity={1} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1.04, 0.3, 0.68]} rotation={[0.4, 0.2, Math.PI / 2]}>
        <coneGeometry args={[0.03, 0.18, 12]} />
        <meshStandardMaterial color="#d9b367" emissive="#7f6527" emissiveIntensity={0.5} metalness={0.95} roughness={0.14} />
      </mesh>
      {Array.from({ length: 12 }).map((_, index) => (
        <mesh
          key={`scale-${index}`}
          position={[
            Math.cos((index / 12) * Math.PI * 2) * 0.92,
            Math.sin((index / 12) * Math.PI * 2) * 0.58,
            -0.1 + Math.sin(index * 0.6) * 0.26,
          ]}
          rotation={[0.18, index * 0.42, 0]}
        >
          <boxGeometry args={[0.06, 0.01, 0.14]} />
          <meshStandardMaterial color="#e0bb6b" emissive="#6b5823" emissiveIntensity={0.38} metalness={0.98} roughness={0.16} />
        </mesh>
      ))}
    </group>
  );
}

function MagicRings() {
  const ringRef = useRef<Group | null>(null);
  const innerRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.22;
      ringRef.current.rotation.x = Math.sin(t * 0.25) * 0.22;
    }

    if (innerRef.current) {
      innerRef.current.rotation.z = -t * 0.34;
      innerRef.current.rotation.y = Math.cos(t * 0.28) * 0.2;
    }
  });

  return (
    <>
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 3.2, 0, 0]}>
          <torusGeometry args={[1.56, 0.015, 12, 180]} />
          <meshStandardMaterial color="#d6aa57" emissive="#b07016" emissiveIntensity={1.05} metalness={0.9} roughness={0.16} />
        </mesh>
      </group>
      <group ref={innerRef}>
        <mesh rotation={[Math.PI / 2.4, Math.PI / 5, 0]}>
          <torusGeometry args={[1.1, 0.01, 10, 160]} />
          <meshStandardMaterial color="#59b284" emissive="#1f704d" emissiveIntensity={0.92} metalness={0.88} roughness={0.2} />
        </mesh>
      </group>
    </>
  );
}

function FloatingMotes() {
  const motesRef = useRef<Group | null>(null);
  const positions = useMemo(
    () =>
      Array.from({ length: 34 }).map((_, index) => ({
        position: [
          Math.sin(index * 0.78) * 1.9,
          Math.cos(index * 1.27) * 1.5,
          Math.sin(index * 0.33) * 1.2,
        ] as [number, number, number],
        scale: 0.02 + (index % 5) * 0.01,
        color: index % 3 === 0 ? "#f3d48f" : index % 3 === 1 ? "#2fa26f" : "#d56a3b",
      })),
    [],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (motesRef.current) {
      motesRef.current.rotation.y = t * 0.12;
      motesRef.current.position.y = Math.sin(t * 0.45) * 0.06;
    }
  });

  return (
    <group ref={motesRef}>
      {positions.map((mote, index) => (
        <mesh key={index} position={mote.position} scale={mote.scale}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={mote.color} transparent opacity={0.9} blending={AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

function WizardScene() {
  const orbRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (orbRef.current) {
      orbRef.current.rotation.y = t * 0.18;
      orbRef.current.position.y = Math.sin(t * 0.36) * 0.05;
    }
  });

  const trailCurve = useMemo(() => {
    const points = Array.from({ length: 18 }).map((_, index) => {
      const angle = index * 0.34;
      return new Vector3(
        Math.cos(angle) * (1.34 + index * 0.02),
        -0.9 + index * 0.11,
        Math.sin(angle) * 0.5,
      );
    });

    return new TubeGeometry(new CatmullRomCurve3(points), 260, 0.012, 10, false);
  }, []);

  return (
    <>
      <color attach="background" args={["#090806"]} />
      <fog attach="fog" args={["#090806", 4.4, 8.8]} />

      <ambientLight intensity={0.85} color="#f4d699" />
      <directionalLight position={[2.8, 3.5, 2.6]} intensity={2.2} color="#f8d28a" />
      <pointLight position={[-2.1, 0.5, 2.4]} intensity={28} distance={6} color="#bb3a20" />
      <pointLight position={[2.2, 1.1, 1.8]} intensity={22} distance={6} color="#149364" />
      <pointLight position={[0, -1.8, 0.8]} intensity={18} distance={5} color="#d8a84d" />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
        <group ref={orbRef}>
          <Phoenix />
          <Serpent />
          <MagicRings />

          <mesh position={[0, -1.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1.9, 64]} />
            <meshBasicMaterial color="#b6802b" transparent opacity={0.18} blending={AdditiveBlending} />
          </mesh>

          <mesh geometry={trailCurve} position={[0.4, -0.05, -0.2]} rotation={[0.15, 0.35, -0.12]}>
            <meshStandardMaterial color="#f0c977" emissive="#cb8c26" emissiveIntensity={1.4} metalness={0.85} roughness={0.16} />
          </mesh>

          <mesh position={[0, 0.1, -0.2]}>
            <sphereGeometry args={[0.6, 36, 36]} />
            <MeshDistortMaterial
              color={new Color("#f1cd84")}
              emissive={new Color("#a83421")}
              emissiveIntensity={0.8}
              transparent
              opacity={0.08}
              speed={1.5}
              distort={0.25}
              roughness={0.3}
            />
          </mesh>

          <FloatingMotes />
        </group>
      </Float>

      <Sparkles count={110} scale={[5.8, 4.2, 3.4]} size={4} speed={0.3} opacity={0.4} color="#f4d289" />
      <Sparkles count={48} scale={[4.6, 3.6, 2.8]} size={3} speed={0.22} opacity={0.28} color="#2ca16d" />
      <Sparkles count={28} scale={[3.8, 2.6, 2.4]} size={5} speed={0.26} opacity={0.18} color="#b33a22" />
    </>
  );
}

export function PhoenixSerpentScene() {
  return (
    <div className="wizard-scene-shell">
      <div className="wizard-scene-copy">
        <span>Golden feathers. Ember light. Emerald motion.</span>
      </div>
      <Canvas camera={{ position: [0, 0.35, 4.5], fov: 38 }} dpr={[1, 1.8]}>
        <WizardScene />
      </Canvas>
    </div>
  );
}
