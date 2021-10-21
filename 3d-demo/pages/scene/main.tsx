import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls,Stars } from "@react-three/drei"
import { VRCanvas, DefaultXRControllers, Hands, useXR } from "@react-three/xr"
import { Ground } from "../components/ground";
import { DirectionalLightProps, DirectionalLight}  from "../components/light"
import React from "react";
import { Physics } from "@react-three/cannon"
import { Player } from "../components/player"
import {Building} from "../components/builds/build"

export default function MainScene() {

	return (
		<div>
			<Canvas style={{height: "992px"}}>
				<Sky sunPosition={[50, 80, 100]} />
				<Stars />
				<ambientLight intensity={0.5} />
				<DirectionalLight
					position={[50, 80, 100]}
					target={[-5, -3, 50]}
					intensity={0.5}
					color={"white"}
					shadowCamBot={-50}
					shadowCamTop={50}
					shadowCamL={53}
					shadowCamR={-53}
				/>
				<fog attach="fog" args={["#f0f4f5", 30, 250]}/>
				<Physics gravity={[0, -20, 0]}>
					<Ground/>
					<Building/>

				</Physics>
				<PointerLockControls />
			</Canvas>
		</div>
	)

}