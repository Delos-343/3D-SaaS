/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/SaulGoodman.glb
Author: ko6i3models (https://sketchfab.com/ko6i3models)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saul-goodman-2873b0cd7b2c41069513d6074d4df0a5
Title: Saul Goodman
*/

// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {

  const { nodes, materials } = useGLTF('./models/SaulGoodman.glb')

  const ref = useRef()

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/SaulGoodman.glb')