import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useBox } from '@react-three/cannon'

const Bench = ({
  url,
  scale,
  position,
  rotation,
  physicsSize,
  physicsPosition,

}) => {
    const [ref] = useBox(() => ({
        type: "static",
        args: physicsSize,
        position: physicsPosition
     }))

     const { scene } = useLoader(GLTFLoader, url, loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
      loader.setDRACOLoader(dracoLoader);
  });

    scene.traverse( function ( child ) {
      if ( child.isMesh ) {                                     
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.metalness = 0.1;
          child.material.roughness = 1;
          child.material.clearcoat= 0.9;
          child.material.clearcoatRoughness= 0.1;
      }
  });
   
    return (  
            <>
              <mesh ref={ref}/>
              <primitive
                  scale={scale}                
                  position={position}
                  rotation={rotation}
                  object={scene}
                  dispose={null}
              />
            </> 
    );
}

export default Bench;