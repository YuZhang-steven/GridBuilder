import { OrbitControls, Stage } from "@react-three/drei";
import GridSystem from "./GridSystem";
import BasicModule from "./BasicModule";

export default function Experience(props) {




    return <>
        <OrbitControls />
        <Stage
            environment={"sunset"}
            preset={'upfront'}
        >
            {/* <GridSystem
                x={2}
                y={4}
                z={6}
            /> */}
            <BasicModule pos={[0, 0, 0]} />
            <BasicModule pos={[1, 0, 0]} />
            <BasicModule pos={[1, 2, 0]} />
        </Stage>
    </>
}