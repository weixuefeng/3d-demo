import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'

const Camera = props => {
  const ref = useRef()
  const set = useThree(state => state.set)
  useEffect(() => void set({ camera: ref.current }), [])
  useFrame(() => ref.current.updateMatrixWorld())
  return <perspectiveCamera ref={ref} {...props} />
}

export default Camera
