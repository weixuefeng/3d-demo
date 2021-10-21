import React from 'react'
import Glass from './glass'
import WindowFrame from './window'
import { Player } from '../player'
import Wall from './wall'
import Art from './art'
import Furniture from './Furniture'

export function Building() {
  return (
    <>
      <Wall
        position={[0, 0, -13.5]}
        modelUrl={'/assets/3D/Wall/scene.gltf'}
        mapUrl={'/assets/3D/Wall/Textures/White_Wall.jpg'}
        normalMapUrl={'/assets/3D/Wall/Textures/White_Wall_NORMAL.jpg'}
      />
      <WindowFrame
        scale={[0.008, 0.008, 0.008]}
        position={[6.5, 8.5, -15]}
        rotation={[0, Math.PI, 0]}
        modelUrl={'/assets/3D/WindowNoGlassL/scene.gltf'}
        mapUrl={'/assets/3D/WindowNoGlassL/Textures/Material_49_baseColor.png'}
      />
      <WindowFrame
        scale={[0.008, 0.008, 0.008]}
        position={[-6.5, 8.5, -15]}
        rotation={[0, Math.PI, 0]}
        modelUrl={'/assets/3D/WindowNoGlassR/scene.gltf'}
        mapUrl={'/assets/3D/WindowNoGlassR/Textures/Material_49_baseColor.png'}
      />

      <Glass
        scale={[0.008, 0.008, 0.008]}
        position={[6.5, 8.5, -15]}
        rotation={[0, 0, 0]}
        url={'/assets/3D/WindowGlassL/scene.gltf'}
      />
      <Glass
        scale={[0.008, 0.008, 0.008]}
        position={[-6.5, 8.5, -15]}
        rotation={[0, 0, 0]}
        url={'/assets/3D/WindowGlassR/scene.gltf'}
      />
      <WindowFrame
        scale={[2.7, 2.7, 2.7]}
        position={[0, 27, 13.2]}
        rotation={[0, 0, 0]}
        modelUrl={'/assets/3D/RoofNoGlass/scene.gltf'}
        mapUrl={'/assets/3D/RoofNoGlass/Textures/Material_49_baseColor.png'}
      />
      <Glass
        scale={[2.7, 2.7, 2.7]}
        position={[0, 27, 13.2]}
        rotation={[0, 0, 0]}
        url={'/assets/3D/RoofGlass/scene.gltf'}
      />
      <Art />
      <Furniture />
      <Player />
    </>
  )
}
