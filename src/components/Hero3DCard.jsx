import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

import heroBg1 from '../assets/hero-bg.webp';
import heroBg2 from '../assets/hero-bg1.webp';
import heroBg3 from '../assets/hero-bg2.webp';

const RotatingCard = () => {
  const meshRef = useRef();
  const textures = useTexture([heroBg1, heroBg2, heroBg3]);
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textures.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [textures.length]);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setScale(0.65);
      } else if (w < 1024) {
        setScale(0.85);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <PresentationControls
      global
      rotation={[0, 0.1, 0]}
      polar={[-0.2, 0.2]}
      azimuth={[-0.5, 0.5]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={meshRef} castShadow receiveShadow scale={scale}>
          <boxGeometry args={[2.8, 3.8, 0.05]} />
          <meshStandardMaterial attach="material-0" color="#222" roughness={0.8} />
          <meshStandardMaterial attach="material-1" color="#222" roughness={0.8} />
          <meshStandardMaterial attach="material-2" color="#222" roughness={0.8} />
          <meshStandardMaterial attach="material-3" color="#222" roughness={0.8} />
          <meshStandardMaterial attach="material-4" map={textures[index]} roughness={0.2} metalness={0.5} />
          <meshStandardMaterial attach="material-5" map={textures[index]} roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>
    </PresentationControls>
  );
};

export default function Hero3DCard() {
  return (
    <div className="w-full h-full">
      <Canvas shadows={{ type: THREE.PCFShadowMap }} camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={2.0} castShadow shadow-mapSize={[1024, 1024]} color="#ffffff" />
        <directionalLight position={[-5, -5, -3]} intensity={0.8} color="#ff9d4d" />
        <spotLight position={[-5, 5, 5]} intensity={2.2} angle={0.5} penumbra={1} color="#ff6b00" />
        <pointLight position={[0, -4, 3]} intensity={1.5} color="#ff9d4d" />
        <pointLight position={[0, 4, 3]} intensity={1.2} color="#ffffff" />
        <RotatingCard />
      </Canvas>
    </div>
  );
}
