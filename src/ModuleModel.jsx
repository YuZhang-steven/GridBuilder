import { TorusKnot } from "@react-three/drei";

export default function ModuleModel(props) {
    const position = props.pos
    console.log(position);
    return <mesh position={position}>
        <TorusKnot
            scale={0.25}
        />
        <meshBasicMaterial

            color={'blue'}

        />
    </mesh>
}