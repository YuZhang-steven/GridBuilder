import { OrbitControls, Stage } from "@react-three/drei";
import GridSystem from "./GridSystem";

export default function Experience(props) {




    return <>
        <OrbitControls />
        <Stage
            environment={"sunset"}
            preset={'upfront'}
        >
            <GridSystem
                x={4}
                y={4}
                z={4}
            />

        </Stage>
    </>
}