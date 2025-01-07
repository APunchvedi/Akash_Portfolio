import React, {Suspense} from "react";
import * as THREE from "three";
import {Canvas} from '@react-three/fiber';
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {PerspectiveCamera} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440 });
    const isMobile = useMediaQuery({maxWidth: 768 });
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    return (
        <section id="home">Hero
        <section className="min-h-screen w-full flex flex-col relative">Hero
            <div className="w-full flex mx-auto flex flex-col sm:mt-16 mt-10 c-space gap-1">
                <p className="sm:text-3xl text-xl font-light text-white text-center font-generalsans">Hi, I am Akash
                    <span className="waving-hand ">👋 </span></p>
                <p className="hero_tag text-gray_gradient font-light "> Full Stack Developer</p>

            </div>
            <div className="w-full h-full absolute inset-0">

                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>


                        <PerspectiveCamera makeDefault position={[0, 0, 15]}/>

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                // scale={0.1}
                                position={sizes.deskPosition}
                                scale={sizes.deskScale}
                                rotation={[0, -Math.PI, 0]}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.deskPosition} scale={sizes.deskScale}/>

                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>

                    </Suspense>

                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
                <a href="#about" className="w-fit">
                    <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>


            </div>
        </section>
        </section>
    )
}
export default Hero
