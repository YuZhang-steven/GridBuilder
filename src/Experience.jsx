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
                x={2}
                y={4}
                z={6}
            />

        </Stage>
    </>
}