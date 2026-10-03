"use client";

import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { data } from "@/data/portfolio";
import { Button } from "./ui/Button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

// Lightweight 3D Particle Sphere
function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles on a sphere
  const [positions] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2 + (Math.random() * 0.5); // Radius with some fuzziness
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleSphere />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-6"
          >
            COMPUTER SCIENCE × AI
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Building <span className="text-gradient">Intelligent Systems</span> <br className="hidden md:block" />
            for Real-World Problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed"
          >
            Hi, I'm <span className="text-white font-medium">{data.personal.name}</span>. A {data.personal.role.toLowerCase()} passionate about Artificial Intelligence, Machine Learning and software development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('/resume.pdf', '_blank')}>
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-5"
          >
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary hover:-translate-y-1 transition-all">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`https://leetcode.com/u/${data.personal.leetcode}`} target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary hover:-translate-y-1 transition-all">
              <Code2 size={24} />
              <span className="sr-only">LeetCode</span>
            </a>
            <a href={`mailto:${data.personal.email}`} className="text-foreground/50 hover:text-primary hover:-translate-y-1 transition-all">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
