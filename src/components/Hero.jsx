import { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Float, PresentationControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import heroBg1 from '../assets/hero-bg.jpeg';
import heroBg2 from '../assets/hero-bg1.jpeg';
import heroBg3 from '../assets/hero-bg2.jpeg';

// 3D Model Component
const RotatingCard = () => {
  const meshRef = useRef();
  // Load textures
  const textures = useTexture([heroBg1, heroBg2, heroBg3]);
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Auto-change image every 3.5 seconds
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
  }, [textures.length]);

  useFrame((state, delta) => {
    // Smooth auto-rotation
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
          {/* Card size: width 2.8, height 3.8, depth 0.05 (portrait aspect ratio for normal images) */}
          <boxGeometry args={[2.8, 3.8, 0.05]} />
          {/* Material array for the 6 faces of the box */}
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

export default function Hero() {
  // Generate random particles
  // eslint-disable-next-line react-hooks/purity
  const particles = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  })), []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden bg-[#080808]">

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#ff6b00] blur-[2px]"
            style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
            animate={{
              y: ["0%", "-100%", "0%"],
              x: ["0%", "50%", "0%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#ff6b00]/10 blur-[150px] top-[-10%] left-[-10%] rounded-full animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#ff9d4d]/5 blur-[120px] bottom-[-10%] right-[-10%] rounded-full"></div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto z-10 pt-32 lg:pt-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 relative z-10">


          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] flex flex-col gap-1 relative z-10">
            {/* Soft orange glow behind heading */}
            <div className="absolute -inset-10 bg-[#ff6b00] opacity-20 blur-3xl rounded-full pointer-events-none -z-10 mix-blend-screen"></div>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="inline-block"
            >
              <motion.span
                animate={{ x: [-8, 8, -8], scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Move.
              </motion.span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="inline-block text-gray-100"
            >
              <motion.span
                animate={{ x: [8, -8, 8], y: [-3, 3, -3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Express.
              </motion.span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="inline-block mt-2"
            >
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0px 0px 15px rgba(255, 107, 0, 0.4)",
                    "0px 0px 30px rgba(255, 157, 77, 0.8)",
                    "0px 0px 15px rgba(255, 107, 0, 0.4)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff9d4d] to-[#ff6b00] bg-[length:200%_auto] animate-shine"
              >
                Transform.
              </motion.span>
            </motion.span>
          </h1>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.6 }}
          >
            <motion.p
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="text-[#bdbdbd] max-w-lg text-lg md:text-xl leading-relaxed font-light"
            >
              Award-winning dance training for all ages & levels. From Bollywood to All Dance Styles — find your rhythm at <strong className="text-white font-medium">STEP UP DANCE ACADEMY.</strong>
            </motion.p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-5 mt-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,107,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] px-8 py-4 rounded-full text-white font-bold transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <span className="relative z-10">Start Dancing</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
            </motion.a>
            <motion.a
              href="tel:+917982404565"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,107,0,0.1)", borderColor: "rgba(255,107,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-white font-bold border border-white/20 bg-white/5 backdrop-blur-md transition-all"
            >
              Call Now
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-between gap-6 mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full max-w-md hover:border-[#ff6b00]/30 transition-colors duration-500 group"
          >
            <div className="text-center group-hover:-translate-y-1 transition-transform">
              <p className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]">18+</p>
              <p className="text-[10px] md:text-xs text-[#ff9d4d] uppercase tracking-widest font-semibold">Google Reviews</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10 group-hover:bg-[#ff6b00]/30 transition-colors"></div>
            <div className="text-center group-hover:-translate-y-1 transition-transform delay-75">
              <p className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]">5+</p>
              <p className="text-[10px] md:text-xs text-[#ff9d4d] uppercase tracking-widest font-semibold">Dance Styles</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10 group-hover:bg-[#ff6b00]/30 transition-colors"></div>
            <div className="text-center group-hover:-translate-y-1 transition-transform delay-150">
              <p className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]">10+</p>
              <p className="text-[10px] md:text-xs text-[#ff9d4d] uppercase tracking-widest font-semibold">Years Exp.</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL - 3D CANVAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative h-[380px] md:h-[480px] lg:h-[650px] w-full flex justify-center items-center z-10"
        >
          {/* Glowing backdrops for 3D element */}
          <div className="absolute w-[240px] h-[320px] md:w-[320px] md:h-[440px] lg:w-[420px] lg:h-[570px] bg-gradient-to-tr from-[#ff6b00]/10 to-transparent border border-white/5 rounded-[3rem] backdrop-blur-sm -z-10 shadow-[0_0_50px_rgba(255,107,0,0.15)] animate-float"></div>
          <div className="absolute w-[220px] h-[300px] md:w-[300px] md:h-[400px] lg:w-[380px] lg:h-[520px] bg-white/[0.01] rounded-[2.5rem] -z-10 rotate-3 border border-white/5 animate-pulse"></div>

          <Canvas shadows={{ type: THREE.PCFShadowMap }} camera={{ position: [0, 0, 6], fov: 45 }}>
            <Suspense fallback={
              <Html center>
                <div className="text-[#ff9d4d] animate-pulse font-bold whitespace-nowrap tracking-widest">LOADING 3D...</div>
              </Html>
            }>
              {/* Cinematic Soft Lighting */}
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} color="#ffffff" />
              <spotLight position={[-5, 5, 5]} intensity={2} angle={0.4} penumbra={1} color="#ff6b00" />
              <pointLight position={[0, -5, 2]} intensity={1} color="#ff9d4d" />

              {/* Environment Reflection */}
              <Environment preset="night" />

              {/* Rotating Card */}
              <RotatingCard />
            </Suspense>
          </Canvas>

        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10"
      >
        <span className="text-[10px] text-[#bdbdbd] uppercase tracking-[0.3em] mb-3 font-medium">Scroll</span>
        <div className="w-[2px] h-16 bg-white/10 rounded-full overflow-hidden relative">
          <div className="w-full h-1/2 bg-gradient-to-b from-[#ff6b00] to-transparent animate-slide-down"></div>
        </div>
      </motion.div>
    </section>
  );
}