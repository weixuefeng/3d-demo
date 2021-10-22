import { Canvas } from '@react-three/fiber'
import { Sky, PointerLockControls, Stars } from '@react-three/drei'
import { Ground } from '../components/ground'
import Lights from '../components/light'
import React, { useState, useEffect, Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import { Player } from '../components/player'
import { Building } from '../components/builds/build'
import Art from '../components/builds/art'
import Furniture from '../components/builds/Furniture'
import Moon from '../components/moon'
import * as THREE from 'three'
import Cube from '../components/cube'
import Tree from '../components/Tree'
import Avatar from '../components/Avatar'
import Model from '../components/Model'
import Car from '../components/Car'

export default function MainScene() {
  const [night, setNight] = useState(true)
  const [performance, setPerformance] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyN':
          setNight(!night)
          return
        case 'KeyP':
          setPerformance(!performance)
          return
        default:
          return
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [night, performance])

  return (
    <div>
      <Canvas
        style={{ height: '992px' }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        {/* <Camera fov={60} /> */}
        {night ? (
          <>
            <Stars />
            <Suspense fallback={null}>
              <Moon />
            </Suspense>
            <fog attach="fog" args={['#272730', 30, 250]} />
          </>
        ) : (
          <>
            <Sky sunPosition={[110, 170, -250]} />
            <fog attach="fog" args={['#f0f4f5', 30, 250]} />
          </>
        )}
        <Lights night={night} performance={performance} />
        <Physics gravity={[0, -20, 0]}>
          <Ground />
          <Building />
          <Art />
          <Furniture />
          <Player />
         
          <Cube position={[0, 0, -40]}/>
          <Tree position={[0, 0, -50]} scalse="1"/>
          <Avatar position={[0, 0, -30]} scale="1" />
          <Model position={[20, 0, -50]} scale="2"/>
          <Car position={[15, 2, -40]} scale="2"/>

        </Physics>
        <PointerLockControls />
      </Canvas>
    </div>
  )
}
