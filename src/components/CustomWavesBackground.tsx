'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ICON_OPACITY = 0.95;
const ICON_SCALE = 1.2;
const ICONS_TO_SCATTER = 8; // Number of icons to scatter (can be more if you add more files)
const ICONS_PATH = '/models/';

// List of icon filenames (add your .glb files here)
const ICON_FILES = [
  'house.glb',
  'envelope.glb',
  'sign.glb',
  // Add more as needed
];

function FloatingIcon({ url, position, floatSpeed, rotSpeed, floatPhase, scale }: {
  url: string;
  position: [number, number, number];
  floatSpeed: number;
  rotSpeed: number;
  floatPhase: number;
  scale: number;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useFrame(({ clock }) => {
    if (!group.current) return;
    // Floating animation
    group.current.position.y = position[1] + Math.sin(clock.elapsedTime * floatSpeed + floatPhase) * 0.5;
    // Gentle rotation
    group.current.rotation.y = Math.sin(clock.elapsedTime * rotSpeed + floatPhase) * 0.7;
    group.current.rotation.x = Math.cos(clock.elapsedTime * rotSpeed * 0.7 + floatPhase) * 0.3;
  });

  // Optionally tint the model (if it has a material)
  scene.traverse((child: any) => {
    if (child.isMesh && child.material) {
      child.material.transparent = true;
      child.material.opacity = ICON_OPACITY;
      child.material.color = new THREE.Color('#7F00FF');
    }
  });

  return (
    <group ref={group} position={position} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
}

const useScatteredIcons = () => {
  // Randomly pick icons and scatter them
  return useMemo(() => {
    const icons: {
      url: string;
      position: [number, number, number];
      floatSpeed: number;
      rotSpeed: number;
      floatPhase: number;
      scale: number;
    }[] = [];
    for (let i = 0; i < ICONS_TO_SCATTER; i++) {
      const url = ICONS_PATH + ICON_FILES[i % ICON_FILES.length];
      // Avoid the center (keep |x| > 3, |z| > 2)
      let x = 0, z = 0;
      do {
        x = (Math.random() - 0.5) * 18;
        z = (Math.random() - 0.5) * 10;
      } while (Math.abs(x) < 3 && Math.abs(z) < 2);
      icons.push({
        url,
        position: [x, (Math.random() - 0.5) * 8 + 2, z],
        floatSpeed: 0.5 + Math.random() * 0.7,
        rotSpeed: 0.1 + Math.random() * 0.2,
        floatPhase: Math.random() * Math.PI * 2,
        scale: ICON_SCALE * (0.8 + Math.random() * 0.5),
      });
    }
    return icons;
  }, []);
};

const FloatingIcons: React.FC = () => {
  const icons = useScatteredIcons();
  return (
    <>
      {icons.map((icon, i) => (
        <FloatingIcon key={i} {...icon} />
      ))}
    </>
  );
};

interface CustomWavesBackgroundProps {
  className?: string;
}

const CustomWavesBackground: React.FC<CustomWavesBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 7, 18], fov: 60 }}
        style={{ background: 'white' }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <FloatingIcons />
      </Canvas>
    </div>
  );
};

export default CustomWavesBackground; 