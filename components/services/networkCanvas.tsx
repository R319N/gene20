"use client";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

const GRID_POSITIONS = generateGridPositions();
const NODE_POSITIONS = generateNodePositions();

function generateGridPositions() {
  const positions: number[] = [];

  for (let x = -15; x <= 15; x++) {
    for (let z = -15; z <= 15; z++) {
      positions.push(
        x,
        (Math.random() - 0.5) * 0.2,
        z
      );
    }
  }

  return positions;
}

function generateNodePositions() {
  return Array.from({ length: 30 }, () => ({
    x: (Math.random() - 0.5) * 25,
    y: Math.random() * 4,
    z: (Math.random() - 0.5) * 25,
  }));
}

function NetworkGrid() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        GRID_POSITIONS,
        3
      )
    );

    return geo;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#8f7cff"
        size={0.08}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function Nodes() {
  const nodes = NODE_POSITIONS;

  return (
    <>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={[
            node.x,
            node.y,
            node.z,
          ]}
        >
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial
            color="#8f7cff"
          />
        </mesh>
      ))}
    </>
  );
}

export default function NetworkCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 8, 18],
        fov: 50,
      }}
    >
      <ambientLight intensity={1} />

      <NetworkGrid />

      <Nodes />
      
    </Canvas>
  );
}