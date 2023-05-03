import ClickBox from "./ClickBox"

/**
 * Generate a cube system with x,y,z range.
 * The whole system will be a bunch box
 * @param {*} props 
 * x: the number of box on x 
 * y: the number of box on y
 * x: the number of box on z
 * @returns 
 * a bunch box with six faces.
 */
export default function GridSystem(props) {
    /** The size of the grid */
    const range_x = props.x
    const range_y = props.y
    const range_z = props.z

    const position_arr = []// the array include all box corner vertices

    /**For loop to fill the start point array */
    for (let x = 0; x < range_x; x++) {
        for (let y = 0; y < range_y; y++) {
            for (let z = 0; z < range_z; z++) {
                position_arr.push([x, y, z])
            }
        }
    }

    /** transform the start point array to a Cube components array */
    const cube_list = position_arr.map(
        postion => <ClickBox pos={postion} key={postion.toString()} />
    )

    return <>
        {cube_list}
    </>
}
