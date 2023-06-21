// eslint-disable-next-line no-unused-vars
import React from 'react'
/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from '@react-three/drei'
import { Office } from './canvas/Office'
import { IntroOverlay } from './IntroOverlay'

const IntroExperience = () => {
  return (
    <>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.25}>
          <IntroOverlay />
          <Office />
        </ScrollControls>
    </>
  )
}

export default IntroExperience