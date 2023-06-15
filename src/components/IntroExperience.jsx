/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from '@react-three/drei'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Office } from './canvas/Office'
import { IntroOverlay } from './IntroOverlay'
// import { SaulGoodman } from './SaulGoodman'

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