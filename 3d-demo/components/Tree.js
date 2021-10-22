import React from "react"
import { useGLTF } from "@react-three/drei"

export default function Tree(props) {
  const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf")
  scene.traverse(function (child) {
    child.castShadow = true
    child.receiveShadow = true
  })
  return <primitive object={scene} {...props} />
}

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf")
