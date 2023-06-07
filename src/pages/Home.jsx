/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { HomeExperience, HomeOverlay } from '../components'
import { ScrollControls } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { usePlay } from '../context/Play'

const Home = () => {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.2} />
      </EffectComposer>
    ),
    []
  );

  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <HomeExperience />
        </ScrollControls>
        {effects}
      </Canvas>
      <HomeOverlay />
    </>
  )
}

export default Home