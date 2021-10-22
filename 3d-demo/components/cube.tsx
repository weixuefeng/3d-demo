import { useBox } from "@react-three/cannon"
import { Vector3 } from "@react-three/fiber"

export interface CubeProps {
    position: Vector3
}

function Cube(props: CubeProps): JSX.Element {
    const [ref] = useBox(() => ({type: "Static"}))
    return (
        <mesh 
            ref={ref}
            
            position={props.position}>
        <boxGeometry/>
        <meshStandardMaterial attachArray="material" color="green"/>
      </mesh>
    )
}

export default Cube