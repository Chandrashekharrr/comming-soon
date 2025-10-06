'use client';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from '../../components/Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { Notable } from 'next/font/google';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);


const notable = Notable({
  subsets: ['latin'],
  weight: '400'

});

export default function Home() {

  const [time, setTime] = useState('');

  const dot = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {

    if (dot.current) {

      let split = SplitText.create(dot.current, { type: "chars" });



      gsap.fromTo(split.chars, {
        opacity: 0,
       
        repeat: -1,
        stagger: 0.6,
        ease: "power4.out",
        duration: 0.6,
      },{
        opacity: 1,
        
        repeat: -1,
        stagger: 0.6,
        ease: "power4.out",
        duration: 0.6,
      })

    }

  }, [])



  return (
    <>
      <div className="nav fixed h-16 w-full flex justify-center mt-10 z-50">
        <img src="/images/logo.png" alt="Logo" className='h-16 ' />
      </div>






      <div className="canvas w-full h-screen fixed z-0">

        <Canvas camera={{ fov: 35 }} className=''>
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

      </div>


      <h1 className={`${notable.className} text-white text-[7vw] uppercase leading-none z-50 fixed bottom-10 right-10`}>Opening<br /> soon <span ref={dot}>....</span></h1>
      <h1 className='text-white fixed bottom-10 left-10 text-[4vw] md:text-[1.5vw]'> {time}</h1>
      


    </>
  );
}