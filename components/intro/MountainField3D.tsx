'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MountainField3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 4.2, 8.8);
    camera.lookAt(0, -0.4, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.maxWidth = "100%";
    renderer.domElement.style.maxHeight = "100%";
    renderer.domElement.style.pointerEvents = "none";

    const terrain = createTerrain();
    scene.add(terrain.points);
    scene.add(terrain.lines);

    const frontGlow = createGlowRibbon(0.1, 0.38, 0x5289ff);
    const rearGlow = createGlowRibbon(-3.2, 0.22, 0x2d5dff);
    scene.add(frontGlow, rearGlow);

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      terrain.points.rotation.y = Math.sin(elapsed * 0.08) * 0.035;
      terrain.lines.rotation.y = terrain.points.rotation.y;
      terrain.points.position.z = Math.sin(elapsed * 0.18) * 0.1;
      terrain.lines.position.z = terrain.points.position.z;

      frontGlow.material.opacity = 0.26 + Math.sin(elapsed * 1.2) * 0.06;
      rearGlow.material.opacity = 0.14 + Math.cos(elapsed * 0.9) * 0.04;

      renderer.render(scene, camera);
    };

    resize();
    animate();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener('resize', resize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      terrain.points.geometry.dispose();
      terrain.points.material.dispose();
      terrain.lines.geometry.dispose();
      terrain.lines.material.dispose();
      frontGlow.geometry.dispose();
      frontGlow.material.dispose();
      rearGlow.geometry.dispose();
      rearGlow.material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: 0,
        width:"100%",
        height:"100%",
        overflow: "hidden",
      }}
    />
  );
}

function createTerrain() {
  const widthSegments = 130;
  const depthSegments = 64;
  const width = 18;
  const depth = 8.5;
  const positions: number[] = [];
  const colors: number[] = [];
  const linePositions: number[] = [];
  const color = new THREE.Color();

  for (let zIndex = 0; zIndex <= depthSegments; zIndex++) {
    const v = zIndex / depthSegments;
    const z = (v - 0.5) * depth;

    for (let xIndex = 0; xIndex <= widthSegments; xIndex++) {
      const u = xIndex / widthSegments;
      const x = (u - 0.5) * width;
      const y = terrainHeight(x, z);
      const fade = THREE.MathUtils.smoothstep(v, 0, 0.95);
      const brightness = THREE.MathUtils.clamp(0.22 + y * 0.22 + fade * 0.38, 0.12, 0.9);

      positions.push(x, y, z);
      color.setRGB(0.18 * brightness, 0.44 * brightness, 1.15 * brightness);
      colors.push(color.r, color.g, color.b);

      if (xIndex > 0) {
        const previousX = x - width / widthSegments;
        linePositions.push(previousX, terrainHeight(previousX, z), z, x, y, z);
      }

      if (zIndex > 0 && xIndex % 2 === 0) {
        const previousZ = z - depth / depthSegments;
        linePositions.push(x, terrainHeight(x, previousZ), previousZ, x, y, z);
      }
    }
  }

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const points = new THREE.Points(
    pointGeometry,
    new THREE.PointsMaterial({
      size: 0.028,
      vertexColors: true,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

  const lines = new THREE.LineSegments(
    lineGeometry,
    new THREE.LineBasicMaterial({
      color: 0x336dff,
      transparent: true,
      opacity: 0.13,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );

  points.position.y = -1.25;
  lines.position.y = -1.25;
  points.rotation.x = -0.16;
  lines.rotation.x = points.rotation.x;

  return { points, lines };
}

function terrainHeight(x: number, z: number) {
  const ridgeA = Math.exp(-((x + 4.8) ** 2) / 4.8) * 2.1;
  const ridgeB = Math.exp(-((x - 1.5) ** 2) / 8) * 1.35;
  const ridgeC = Math.exp(-((x - 5.8) ** 2) / 5.5) * 1.55;
  const waveA = Math.sin(x * 1.4 + z * 1.15) * 0.18;
  const waveB = Math.cos(x * 0.85 - z * 1.65) * 0.14;
  const depthRise = Math.sin((z + 4.2) * 0.85) * 0.28;

  return ridgeA + ridgeB + ridgeC + waveA + waveB + depthRise;
}

function createGlowRibbon(z: number, opacity: number, color: number) {
  const curve = new THREE.CatmullRomCurve3(
    Array.from({ length: 36 }, (_, index) => {
      const t = index / 35;
      const x = (t - 0.5) * 18;
      return new THREE.Vector3(x, terrainHeight(x, z) - 1.18, z);
    })
  );

  const geometry = new THREE.TubeGeometry(curve, 72, 0.012, 8, false);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return new THREE.Mesh(geometry, material);
}
