/*
 * @Author: pony@diynova.com
 * @Date: 2021-11-14 13:45:23
 * @LastEditors: pony@diynova.com
 * @LastEditTime: 2021-12-14 16:31:03
 * @FilePath: /3d-demo-start/3d-demo/components/builds/wall.js
 * @Description: 
 */
import { useMemo } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useBox } from '@react-three/cannon'

const Wall = ({ scale, position, rotation, modelUrl, mapUrl, normalMapUrl }) => {
  let texture, normal
  const size = 20

  const { scene } = useGLTF(modelUrl)

  const [refFront] = useBox(() => ({
    type: 'static',
    args: [70, 50, 1],
    position: [0, 0, -17]
  }))
  const [refBack] = useBox(() => ({
    type: 'static',
    args: [70, 50, 1],
    position: [0, 0, 44]
  }))
  const [refL] = useBox(() => ({
    type: 'static',
    args: [1, 50, 80],
    position: [-39.5, 0, 0]
  }))
  const [refR] = useBox(() => ({
    type: 'static',
    args: [1, 50, 80],
    position: [39.5, 0, 0]
  }))
  const [refTop] = useBox(() => ({
    type: 'static',
    args: [150, 1, 150],
    position: [0, 30, 0]
  }))

  texture = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl])
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(size, size)

  normal = useMemo(() => new THREE.TextureLoader().load(normalMapUrl), [normalMapUrl])
  normal.wrapS = THREE.RepeatWrapping
  normal.wrapT = THREE.RepeatWrapping
  normal.repeat.set(size, size)

  scene.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = THREE.DoubleSide
      child.material.normalMap = normal
      child.material.map = texture
      child.material.metalness = 0
      child.material.roughness = 1
    }
  })

  return (
    <>
      <mesh ref={refFront} />
      <mesh ref={refL} />
      <mesh ref={refR} />
      <mesh ref={refBack} />
      <mesh ref={refTop} />
      <primitive position={position} object={scene} dispose={null} />
    </>
  )
}

export default Wall
