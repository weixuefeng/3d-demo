import { useLoader } from "@react-three/fiber"
import { usePlane } from "@react-three/cannon"

import * as THREE from "three"

export const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0]}))
  const texture = useLoader(THREE.TextureLoader, "/assets/grass.jpg")
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10000, 10000]} />
      <meshStandardMaterial map={texture} map-repeat={[10000, 10000]} color="grey" />
    </mesh>
  )
}
