import ClickBox from "./ClickBox"
import ModuleModel from "./ModuleModel"

export default function BasicModule(props) {
    const position = props.pos
    const position_center = [0.5, 0.5, 0.5]

    // console.log(position);
    return <mesh position={position}>
        <ClickBox pos={position} key={position.toString()} />
        <ModuleModel pos={position_center} />
    </mesh>
}