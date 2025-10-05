'use client';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';




export default function Cyl() {
  const texture = useTexture("/images/vector.png");

  let cyl = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    
      cyl.current.rotation.y += delta;
    
  });

  return (

    <group rotation={[0,1.4,0.5]}>

    <mesh ref={cyl} >
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial
        side={THREE.DoubleSide}
        map={texture}
        transparent
      />
    </mesh>
    </group>
  );
}
