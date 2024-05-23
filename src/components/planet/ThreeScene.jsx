// src/ThreeScene.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

function Earth() {
  const meshRef = useRef();
  const texture = useTexture('/earth_texture.png'); // Ensure this path is correct

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.010; // Rotate slowly to simulate Earth's rotation
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Earth />
    </Canvas>
  );
};

export default ThreeScene;
