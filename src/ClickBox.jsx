import { useState } from "react";
import CubeFace from "./CubeFace";

/**
 * 
 * @param {*} props 
 * pos: position(left, front and bottom most corner cordination(3 entries array))
 * 
 * @returns Box gyometry with 6 faces.
 */
export default function ClickBox(props) {
    const [show, setShow] = useState(false)

    const position = props.pos
    return <>
        {/* generate box face with start position and a normal direction. */}
        <CubeFace start_pos={position} dir={'front'} show={show} setShow={setShow} />
        <CubeFace start_pos={position} dir={'back'} show={show} setShow={setShow} />
        <CubeFace start_pos={position} dir={'top'} show={show} setShow={setShow} />
        <CubeFace start_pos={position} dir={'bottom'} show={show} setShow={setShow} />
        <CubeFace start_pos={position} dir={'left'} show={show} setShow={setShow} />
        <CubeFace start_pos={position} dir={'right'} show={show} setShow={setShow} />
    </>
}