import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const Picture = ({ url, scale, position, rotation, metalness, roughness }) => {
  const { scene } = useLoader(GLTFLoader, url, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(dracoLoader)
  })

  scene.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.toneMapped = false
      child.material.metalness = metalness
      child.material.roughness = roughness
    }
  })

  return <primitive scale={scale} position={position} rotation={rotation} object={scene} dispose={null} />
}

export default Picture
