import CubeFace from "./CubeFace";

export default function Cube(props) {
    return <>
        <CubeFace start_pos={[0, 0, 0]} dir={'front'} />
        <CubeFace start_pos={[0, 0, 0]} dir={'back'} />
        <CubeFace start_pos={[0, 0, 0]} dir={'top'} />
        <CubeFace start_pos={[0, 0, 0]} dir={'bottom'} />
        <CubeFace start_pos={[0, 0, 0]} dir={'left'} />
        <CubeFace start_pos={[0, 0, 0]} dir={'right'} />
        {/* <boxGeometry /> */}
    </>
}