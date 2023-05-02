import CubeFace from "./CubeFace";

/**
 * 
 * @param {*} props 
 * pos: position(left, front and bottom most corner cordination(3 entries array))
 * 
 * @returns Box gyometry with 6 faces.
 */
export default function Cube(props) {
    const position = props.pos
    return <>
        {/* generate box face with start position and a normal direction. */}
        <CubeFace start_pos={position} dir={'front'} />
        <CubeFace start_pos={position} dir={'back'} />
        <CubeFace start_pos={position} dir={'top'} />
        <CubeFace start_pos={position} dir={'bottom'} />
        <CubeFace start_pos={position} dir={'left'} />
        <CubeFace start_pos={position} dir={'right'} />
    </>
}