/** create a flot number vertice array
 * input: start position of the cube(left fron corner)
 *        dir: direction of the face
 * output: a Float32Array
 */
const createArray = (start_pos, dir) => {
    switch (dir) {
        case 'front':
            return new Float32Array([
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
                start_pos[0] + 1, start_pos[1], start_pos[2],
                start_pos[0], start_pos[1], start_pos[2],


                start_pos[0], start_pos[1], start_pos[2],
                start_pos[0], start_pos[1] + 1, start_pos[2],
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
            ])

        case 'back':
            return new Float32Array([
                start_pos[0], start_pos[1], start_pos[2] + 1,
                start_pos[0] + 1, start_pos[1], start_pos[2] + 1,
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,


                start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,
                start_pos[0], start_pos[1] + 1, start_pos[2] + 1,
                start_pos[0], start_pos[1], start_pos[2] + 1,
            ])


        case 'top':
            return new Float32Array([
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
                start_pos[0], start_pos[1] + 1, start_pos[2],
                start_pos[0], start_pos[1] + 1, start_pos[2] + 1,


                start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
                start_pos[0], start_pos[1] + 1, start_pos[2] + 1,
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,

            ])

        case 'bottom':
            return new Float32Array([
                start_pos[0], start_pos[1], start_pos[2],
                start_pos[0] + 1, start_pos[1], start_pos[2],
                start_pos[0], start_pos[1], start_pos[2] + 1,

                start_pos[0], start_pos[1], start_pos[2] + 1,
                start_pos[0] + 1, start_pos[1], start_pos[2],
                start_pos[0] + 1, start_pos[1], start_pos[2] + 1,

            ])


        case 'left':
            return new Float32Array([
                start_pos[0], start_pos[1], start_pos[2],
                start_pos[0], start_pos[1], start_pos[2] + 1,
                start_pos[0], start_pos[1] + 1, start_pos[2] + 1,

                start_pos[0], start_pos[1] + 1, start_pos[2] + 1,
                start_pos[0], start_pos[1] + 1, start_pos[2],
                start_pos[0], start_pos[1], start_pos[2],

            ])

        case 'right':
            return new Float32Array([
                start_pos[0] + 1, start_pos[1], start_pos[2] + 1,
                start_pos[0] + 1, start_pos[1], start_pos[2],
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,

                start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,
                start_pos[0] + 1, start_pos[1], start_pos[2],
                start_pos[0] + 1, start_pos[1] + 1, start_pos[2],

            ])
    }

}



/*
Create one cube surface from the location and the direction.
The surface create from the vertices, which directly transfer to two triangle surfaces


props: 
    start_pos: frot bottom left corner cordination array
    dir: direction of the surface

output: a buffergeometry surface
*/
export default function CubeFace(props) {
    const start_pos = props.start_pos
    const dir = props.dir

    let vertices = createArray(start_pos, dir)//getr

    return <mesh position={props.position}>
        <bufferGeometry>
            <bufferAttribute
                attach={'attributes-position'}
                array={vertices}
                count={vertices.length / 3}
                itemSize={3}

            />
        </bufferGeometry>
        <meshBasicMaterial wireframe />
    </mesh>

}