import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const Moon = () => {

    const { scene } = useLoader(GLTFLoader, "assets/3D/Moon/scene.gltf", loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);
    });
    scene.traverse( function ( child ) {
        if ( child.isMesh ) {                                     
            child.material.fog = false;
        }
    });

    return (
        
        <primitive 
            scale={[6, 6, 6]} 
            rotation={[Math.PI / 40, Math.PI / 3.5, Math.PI / 8]}
            position={[80, 150, -200]}
            object={scene}                    
            dispose={null}
        />
    );
}
export default Moon;