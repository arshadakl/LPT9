import React from 'react'
import FrameCard from './FrameCard'
import DragComponent from './DragComponent'
import { motion } from "framer-motion";
import AnimatedCharacters from '../gsap/AnimatedFText';
function About() {
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    return (
        <div className='md:mb-56 '> {/* Add min-h-screen here */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className='text-center'>
                <AnimatedCharacters>
                    <h1 className='font-fcode text-[3rem] font-medium'>about<span className='text-bl '>me</span></h1>
                </AnimatedCharacters>
            </motion.div>
            <div className='min-h-screen md:h-[50rem] h-[125rem] '>
                <DragComponent />
            </div>
        </div>
    )
}

export default About
