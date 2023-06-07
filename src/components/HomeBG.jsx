/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { Environment, Sphere } from '@react-three/drei'
import { Gradient, LayerMaterial } from 'lamina'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export const HomeBG = ({ backgroundColors }) => {

  const start = 0.2
  const end = -0.5

  const gradientRef = useRef()
  const gradientEnvRef = useRef()

  useFrame(() => {
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    )
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    )
    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    )
    gradientEnvRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    )
  })

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#0C0C0C"} side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#050525"} side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  )
}
