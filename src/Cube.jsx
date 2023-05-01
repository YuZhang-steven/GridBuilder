import CubeFace from "./CubeFace";

export default function Cube(props) {
    return <>
        <CubeFace start_pos={[1, 1, 0]} dir={'front'} />
        {/* <boxGeometry /> */}
    </>
}