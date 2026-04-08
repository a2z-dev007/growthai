'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from '@/hooks/use-parallax';

function ParticleNetwork() {
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22C55E"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroSection() {
  const scrollY = useParallax(0.3);
  const logoY = useParallax(-0.2);
  const particlesRef = useRef<THREE.Points>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 3D Particle Layer with Parallax */}
      <div className="absolute inset-0 z-10" style={{ transform: `translateY(${scrollY}px)` }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ParticleNetwork />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Animated Logo with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 0.03, 0.26, 0.9] }}
          className="flex flex-col items-center gap-4 "
          style={{ transform: `translateY(${logoY}px)` }}
        >
          {/* <motion.img 
            src="/growth-logo-ai.png" 
            alt="GrowthAI Logo" 
            className="md:h-72 h-32  w-auto drop-shadow-[0_0_40px_rgba(34,197,94,0.4)]" 
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          /> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Strategic Design. Expert Development. Exponential Growth.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-plus-jakarta text-3xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.2]"
        >
          Engineering Performance-Driven <span className="text-gradient">Digital Products</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-inter"
        >
          Your strategic partner for custom software across <span className="text-white font-medium italic">all domains.</span> From <span className="text-white font-semibold">Healthcare to Finance & Marketing</span>, <span className="text-white px-1">we build AI Intelligent products and platforms</span> that turn visionary ideas into market-leading realities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
        >
          <button className="btn-primary w-fit">
            Build Your Product
          </button>
          <a href="tel:+917071967997" className="btn-secondary w-fit">
            Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
