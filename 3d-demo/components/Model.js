/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

import { Canvas, useFrame } from "@react-three/fiber"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/trophy-base/model.gltf")
  useFrame(() => {
    group.current.rotation.y += 0.01
    group.current.rotation.x = -0.5
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials["Material.005"]} />
      <mesh geometry={nodes.Circle_1.geometry} material={materials["Material.004"]} />
      <mesh geometry={nodes.Circle_2.geometry} material={materials["Material.006"]} />
    </group>
  )
}

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/trophy-base/model.gltf")
