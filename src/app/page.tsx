'use client';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from '../../components/Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { Notable } from 'next/font/google';



const notable = Notable({
  subsets: ['latin'],
  weight: '400'

});

export default function Home() {

  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div className="nav fixed h-16 w-full flex justify-center mt-10 z-10">
        <img src="/images/logo.png" alt="Logo" className='h-16 ' />
      </div>


     
        <h1 className={`${notable.className} text-orange-500 text-[7vw] uppercase leading-none absolute mt-80`}>Opening<br/> soon <br/> <span className='leading-none'>...</span></h1>
        <h1 className='text-white absolute'>Countdown ::  {time}</h1>
      
      



      <Canvas camera={{ fov: 35 }} className='fixed z-0'>
        <OrbitControls />
        <ambientLight intensity={0.5} />
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