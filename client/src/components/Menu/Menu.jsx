import React, { useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three'
import { TextureLoader } from 'three'
import pyramid1 from '../../assets/images/pyramid1br.png'
import pyramid2 from '../../assets/images/pyramid2br.png'
import pyramid3 from '../../assets/images/pyramid3br.png'
import './menu.css';
import { useSpring, animated } from '@react-spring/three';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const [meshSelected, setMeshSelected] = useState(1);
    const [pyramid1Position, setPyramid1Position] = useState([0, 0, 0]);
    const [pyramid2Position, setPyramid2Position] = useState([-13, 1, 0]);
    const [pyramid3Position, setPyramid3Position] = useState([13, 1, 0]);
    const [pyramid4Position, setPyramid4Position] = useState([26, 2, 0]);
    const [pyramid1Args, setPyramid1Args] = useState([10, 8]);
    const [pyramid2Args, setPyramid2Args] = useState([8, 6]);
    const [pyramid3Args, setPyramid3Args] = useState([8, 6]);
    const [pyramid4Args, setPyramid4Args] = useState([8, 6]);

    const texture1 = useLoader(TextureLoader, pyramid1);
    const texture2 = useLoader(TextureLoader, pyramid2);
    const texture3 = useLoader(TextureLoader, pyramid3);

    const pyramid1Ref = useRef(null);
    const pyramid2Ref = useRef(null);
    const pyramid3Ref = useRef(null);
    const pyramid4Ref = useRef(null);

    const navigate = useNavigate();


    const meshSelectedTrigger = (pyramidX) => {
        console.log(pyramid1Ref);
        if (meshSelected === pyramidX) {
            // route to the given event page
            navigate(`/event/${meshSelected === 1 ? 'hacklipse' : (meshSelected === 2 ? 'flamingo' : 'engima')}`)
        }
        else {
            if (pyramidX === 1) {
                setMeshSelected(1);

                setPyramid1Position([0, 0, 0]);
                setPyramid2Position([-13, 1, 0]);
                setPyramid3Position([13, 1, 0]);
                setPyramid4Position([26, 2, 0]);
                
                setPyramid1Args([10, 8]);
                setPyramid2Args([8, 6]);
                setPyramid3Args([8, 6]);
                setPyramid4Args([8, 6]);
            }
            else if (pyramidX === 2) {
                setMeshSelected(2);

                setPyramid1Position([13, 1, 0]);
                setPyramid2Position([0, 0, 0]);
                setPyramid3Position([26, 2, 0]);     // uncomment for v1 (no revolution)
                setPyramid4Position([39, 3, 0]);
                // setPyramid3Position([-13, 1, 0]);       // comment for v1(no revolution)

                setPyramid1Args([8, 6]);
                setPyramid2Args([10, 8]);
                setPyramid1Args([8, 6]);
                setPyramid4Args([8, 6]);
            }
            else if (pyramidX === 3) {
                setMeshSelected(3);

                setPyramid1Position([-13, 1, 0]);
                // setPyramid2Position([13, 1, 0]);        // comment for v1 (no revolution)
                setPyramid2Position([-26, 2, 0]);    // uncomment for v1 (no revolution)
                setPyramid3Position([0, 0, 0]);
                setPyramid4Position([13, 1, 0]);

                setPyramid1Args([8, 6]);
                setPyramid2Args([8, 6]);
                setPyramid3Args([10, 8]);
                setPyramid4Args([8, 6]);
            }
            else {
                setMeshSelected(4);

                setPyramid1Position([-26, 2, 0]);
                // setPyramid2Position([13, 1, 0]);        // comment for v1 (no revolution)
                setPyramid2Position([-39, 3, 0]);    // uncomment for v1 (no revolution)
                setPyramid3Position([-13, 1, 0]);
                setPyramid4Position([0, 0, 0]);

                setPyramid1Args([8, 6]);
                setPyramid2Args([8, 6]);
                setPyramid3Args([8, 6]);
                setPyramid4Args([10, 8]);
            }
        }
    }


    const position1 = useSpring({ position: pyramid1Position });
    const position2 = useSpring({ position: pyramid2Position });
    const position3 = useSpring({ position: pyramid3Position });
    const position4 = useSpring({ position: pyramid4Position });

  return (
    <Canvas className='canvas-1'>
        <animated.mesh ref={pyramid1Ref} onClick={() => meshSelectedTrigger(1)} position={position1.position}>
            <planeBufferGeometry attach="geometry" args={pyramid1Args} />
            <meshBasicMaterial attach="material" map={texture1} />
        </animated.mesh>

        <animated.mesh ref={pyramid2Ref} onClick={() => meshSelectedTrigger(2)} position={position2.position}>
            <planeBufferGeometry attach="geometry" args={pyramid2Args} />
            <meshBasicMaterial attach="material" map={texture2} />
        </animated.mesh>

        <animated.mesh ref={pyramid3Ref} onClick={() => meshSelectedTrigger(3)} position={position3.position}>
            <animated.planeBufferGeometry attach="geometry" args={pyramid3Args} />
            <meshBasicMaterial attach="material" map={texture3} />
        </animated.mesh>

        <animated.mesh ref={pyramid4Ref} onClick={() => meshSelectedTrigger(4)} position={position4.position}>
            <animated.planeBufferGeometry attach="geometry" args={pyramid4Args} />
            <meshBasicMaterial attach="material" map={texture3} />
        </animated.mesh>



        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI} minAzimuthAngle={-Infinity} maxAzimuthAngle={Infinity} /> */}
    </Canvas>
  )
}

export default Menu;