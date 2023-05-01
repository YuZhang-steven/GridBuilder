let start_pos = [0, 0, 0]

const front = new Float32Array([
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
    start_pos[0] + 1, start_pos[1], start_pos[2],
    start_pos[0], start_pos[1], start_pos[2],


    start_pos[0], start_pos[1], start_pos[2],
    start_pos[0], start_pos[1] + 1, start_pos[2],
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
])
const back = new Float32Array([
    start_pos[0], start_pos[1], start_pos[2] + 1,
    start_pos[0] + 1, start_pos[1], start_pos[2] + 1,
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,


    start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,
    start_pos[0], start_pos[1] + 1, start_pos[2] + 1,
    start_pos[0], start_pos[1], start_pos[2] + 1,
])

const top = new Float32Array([
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
    start_pos[0], start_pos[1] + 1, start_pos[2],
    start_pos[0], start_pos[1] + 1, start_pos[2] + 1,


    start_pos[0] + 1, start_pos[1] + 1, start_pos[2],
    start_pos[0], start_pos[1] + 1, start_pos[2] + 1,
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,

])

const bottom = new Float32Array([
    start_pos[0], start_pos[1], start_pos[2],
    start_pos[0] + 1, start_pos[1], start_pos[2],
    start_pos[0], start_pos[1], start_pos[2] + 1,

    start_pos[0], start_pos[1], start_pos[2] + 1,
    start_pos[0] + 1, start_pos[1], start_pos[2],
    start_pos[0] + 1, start_pos[1], start_pos[2] + 1,

])

const left = new Float32Array([
    start_pos[0], start_pos[1], start_pos[2],
    start_pos[0], start_pos[1], start_pos[2] + 1,
    start_pos[0], start_pos[1] + 1, start_pos[2] + 1,

    start_pos[0], start_pos[1] + 1, start_pos[2] + 1,
    start_pos[0], start_pos[1] + 1, start_pos[2],
    start_pos[0], start_pos[1], start_pos[2],

])
const right = new Float32Array([
    start_pos[0] + 1, start_pos[1], start_pos[2] + 1,
    start_pos[0] + 1, start_pos[1], start_pos[2],
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,

    start_pos[0] + 1, start_pos[1] + 1, start_pos[2] + 1,
    start_pos[0] + 1, start_pos[1], start_pos[2],
    start_pos[0] + 1, start_pos[1] + 1, start_pos[2],

])

const positions = new Float32Array([
    0, 0, 0,
    1, 0, 0,
    0, 1, 0,

    0, 1, 0,
    1, 0, 0,
    1, 1, 0,

])



export default function CubeFace(props) {
    start_pos = props.start_pos
    const dir = props.dir
    // console.log(start_pos);
    return <>
        <mesh position={props.position}>
            <bufferGeometry>
                <bufferAttribute
                    attach={'attributes-position'}
                    array={front}
                    count={front.length / 3}
                    itemSize={3}

                />
            </bufferGeometry>
            {/* <planeGeometry /> */}
            <meshBasicMaterial />
        </mesh>
        <mesh position={props.position}>
            <bufferGeometry>
                <bufferAttribute
                    attach={'attributes-position'}
                    array={back}
                    count={back.length / 3}
                    itemSize={3}

                />
            </bufferGeometry>
            {/* <planeGeometry /> */}
            <meshBasicMaterial color={"yellow"} />
        </mesh>
        <mesh position={props.position}>
            <bufferGeometry>
                <bufferAttribute
                    attach={'attributes-position'}
                    array={top}
                    count={top.length / 3}
                    itemSize={3}

                />
            </bufferGeometry>
            {/* <planeGeometry /> */}
            <meshBasicMaterial color={"red"} />
        </mesh>
        <mesh position={props.position}>
            <bufferGeometry>
                <bufferAttribute
                    attach={'attributes-position'}
                    array={bottom}
                    count={bottom.length / 3}
                    itemSize={3}

                />
            </bufferGeometry>
            {/* <planeGeometry /> */}
            <meshBasicMaterial color={"blue"} />
        </mesh>
        <mesh position={props.position}>
            <bufferGeometry>
                <bufferAttribute
                    attach={'attributes-position'}
                    array={left}
                    count={left.length / 3}
                    itemSize={3}

                />
            </bufferGeometry>
            {/* <planeGeometry /> */}
            <meshBasicMaterial color={"purple"} />
        </mesh>
        <mesh position={props.position}>
            <bufferGeometry>
                <bufferAttribute
                    attach={'attributes-position'}
                    array={right}
                    count={right.length / 3}
                    itemSize={3}

                />
            </bufferGeometry>
            {/* <planeGeometry /> */}
            <meshBasicMaterial color={"cyan"} />
        </mesh>


    </>
}