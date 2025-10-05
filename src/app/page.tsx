'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from '../../components/Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


export default function Home() {
  return (
    <>
    <div className="nav fixed h-16 w-full flex justify-center mt-10 z-10">
      <img src="/images/logo.png" alt="Logo" className='h-16 ' />
    </div>

    <Canvas camera={{fov:35}} className='fixed '>
      <OrbitControls/>
      <ambientLight intensity={0.5}/>
      <Cyl />

      <EffectComposer>
        <Bloom
          mipmapBlur // Enables or disables mipmap blur.
          intensity={5.5} // The bloom intensity.
          luminanceThreshold={0} // The luminance threshold. Raising this value will reduce the bloom effect.
          luminanceSmoothing={0} // Smoothness of the luminance threshold. Range is [0, 1].
        />
        <ToneMapping adaptive />
      </EffectComposer>

    </Canvas>

    </>
  );
}