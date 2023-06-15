// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IntroExperience } from '../components'
import { Canvas } from '@react-three/fiber'

const Intro = () => {
  return (
    <>
      <Canvas
        camera={{
        fov: 48,
        position: [2.3, 1.5, 2.3],
        /* zoom: 1.2,
        near: 1,
        far: 1000, */
      }}>
        <IntroExperience />
      </Canvas>
    </>
  )
}

export default Intro