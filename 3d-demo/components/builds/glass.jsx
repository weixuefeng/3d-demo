import React from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const Glass = ({ scale, position, rotation, url }) => {
  const { scene } = useLoader(GLTFLoader, url, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(dracoLoader)
  })

  const newMaterial = new THREE.MeshPhysicalMaterial({
    color: 'skyblue'
  })

  scene.traverse(function (child) {
    if (child.isMesh) {
      child.material = newMaterial
      child.material.transparent = true
      child.material.opacity = 0.2
      child.material.clearcoat = 1
      child.material.roughness = 0
      child.material.metalness = 1
    }
  })

  return (
    <primitive renderOrder={1} scale={scale} position={position} rotation={rotation} object={scene} dispose={null} />
  )
}

export default Glass
