import React, { useMemo } from 'react';
import * as THREE from 'three';

export interface DirectionalLightProps {
    position: number[]
    target: number[]
    intensity: number
    color: string
    shadowCamBot: number
    shadowCamTop: number
    shadowCamL: number
    shadowCamR: number
}

export const DirectionalLight = (props: DirectionalLightProps) => {

    const light = useMemo(() => new THREE.DirectionalLight(), [])

    return (
        <>
            <primitive 
              color={props.color}
              object={light}
              castShadow
              position={props.position}
              intensity={props.intensity}
              shadow-camera-bottom={props.shadowCamBot}
              shadow-camera-top={props.shadowCamTop}
              shadow-camera-left={props.shadowCamL}
              shadow-camera-right={props.shadowCamR}
              decay={2}
              
            />
            <primitive object={light.target} position={props.target}  />
        </>
    )
}