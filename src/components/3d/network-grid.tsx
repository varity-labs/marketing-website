"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random";

function NetworkGrid() {
  const ref = React.useRef<THREE.Points>(null);
  const [sphere] = React.useState(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 1000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 4 + Math.random() * 2;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8B5CF6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

function GridPlane() {
  const mesh = React.useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current && mesh.current.material) {
      const material = mesh.current.material as THREE.ShaderMaterial;
      material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  const shaderMaterial = React.useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color("#3B82F6") }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          float wave = sin(position.x * 0.5 + time * 0.5) * 0.1;
          pos.z += wave;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float grid = 0.0;
          
          // Create grid lines
          float gridSize = 0.5;
          float lineWidth = 0.01;
          
          float xGrid = mod(vPosition.x, gridSize);
          float yGrid = mod(vPosition.y, gridSize);
          
          if (xGrid < lineWidth || yGrid < lineWidth) {
            grid = 1.0;
          }
          
          // Fade based on distance
          float dist = length(vPosition.xy);
          float fade = 1.0 - smoothstep(2.0, 8.0, dist);
          
          // Animated pulse
          float pulse = sin(time * 2.0 - dist * 0.5) * 0.5 + 0.5;
          
          vec3 finalColor = color;
          float alpha = grid * fade * (0.3 + pulse * 0.2);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }, []);

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, 0]} material={shaderMaterial}>
      <planeGeometry args={[20, 20, 50, 50]} />
    </mesh>
  );
}

function FloatingParticles() {
  const points = React.useRef<THREE.Points>(null);
  const [positions] = React.useState(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.01;
      
      // Update positions for floating effect
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#14B8A6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function NetworkGrid3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        {/* Network grid visualization */}
        <NetworkGrid />
        
        {/* Grid plane with wave animation */}
        <GridPlane />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Fog for depth */}
        <fog attach="fog" args={["#030712", 5, 15]} />
      </Canvas>
    </div>
  );
}