/*
 * @Author: pony@diynova.com
 * @Date: 2021-11-14 13:45:23
 * @LastEditors: pony@diynova.com
 * @LastEditTime: 2021-12-14 16:23:08
 * @FilePath: /3d-demo-start/3d-demo/components/moon.js
 * @Description: 
 */
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const Moon = () => {
  const { scene } = useGLTF('assets/3D/Moon/scene.gltf')
  scene.traverse(function (child) {
    if (child.isMesh) {
      child.material.fog = false
    }
  })

  return (
    <primitive
      scale={[6, 6, 6]}
      rotation={[Math.PI / 40, Math.PI / 3.5, Math.PI / 8]}
      position={[80, 150, -200]}
      object={scene}
      dispose={null}
    />
  )
}
export default Moon
