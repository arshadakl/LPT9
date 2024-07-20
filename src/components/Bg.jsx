import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Frame from './Frame';

const Bg = () => {
    const spotlightTopRef = useRef(null);
    const spotlightBottomRef = useRef(null);
    const spotlightTopInnerRef = useRef(null);
    const spotlightBottomInnerRef = useRef(null);

    useEffect(() => {
        // Top spotlight animation
        gsap.to(spotlightTopRef.current, {
            y: '-20.7975%',
            x: '30.7975%',
            duration: 1,
            ease: 'power2.out'
        });

        gsap.to(spotlightTopInnerRef.current, {
            scale: 0.8,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'power2.out'
        });
        gsap.to(spotlightBottomRef.current, {
            y: '-10.7975%',
            x: '-10.7975%',
            duration: 1,
            ease: 'power2.out'
        });

        gsap.to(spotlightBottomInnerRef.current, {
            scale: 0.8,
            duration: 1,
            ease: 'power2.out'
        });
    }, []);

    return (
        <div className="bg-cover bg-[#0f0f0f] overflow-hidden h-screen w-screen">
            <div className=' absolute w-full h-full z-20' >
                <Frame />
            </div>

            <div className="">
                <div
                    ref={spotlightTopRef}
                    className="relative blur-3xl cursor-pointer aspect-square md:w-1/3 w-2/3 left-2/3 top-1/4 spotlight-top "
                    style={{ zIndex: 1 }}
                >
                    <div
                        ref={spotlightTopInnerRef}
                        className="w-full h-full rounded-full bg-[#91d1f8]/40 opacity-75 blur-[50px]"
                    ></div>
                </div>
                <div
                    ref={spotlightBottomRef}
                    className=" aspect-square blur-3xl md:w-3/6 w-5/6 -bottom-1/4 -left-1/4 spotlight-bottom"
                    style={{ zIndex: 10 }}
                >
                    <div
                        ref={spotlightBottomInnerRef}
                        className="w-full h-full rounded-full bg-[#91d1f8]/50 opacity-75 blur-[50px]"
                    ></div>
                </div>
                <div
                    ref={spotlightTopRef}
                    className="relative blur-3xl aspect-square md:w-1/3 w-2/3 left-2/3 top-1/4 spotlight-top "
                    style={{ zIndex: 10 }}
                >
                    <div
                        ref={spotlightTopInnerRef}
                        className="w-full h-full rounded-full bg-[#91d1f8]/40 opacity-75 blur-[50px]"
                    ></div>
                </div>
                <div
                    ref={spotlightBottomRef}
                    // className=" aspect-square blur-3xl  w-5/6 -bottom-1/4 -left-1/4 spotlight-bottom"
                    style={{ zIndex: 10 }}
                >
                    <div
                        ref={spotlightBottomInnerRef}
                        className="w-full h-full rounded-full bg-[#91d1f8]/50 opacity-75 blur-[50px]"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Bg;