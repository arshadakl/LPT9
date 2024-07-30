import React from 'react'
import { motion} from "framer-motion";
import ProjectCard from './ProjectCard'
import MaskRotation from '../gsap/MaskRotation'
import { fadeIn } from '../gsap/Framer'
import AnimatedCharacters from '../gsap/AnimatedFText';

function Projects() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  
  return (
    <>
      <motion.div 
      initial="hidden"
      animate="visible"
      variants={container}
      className='text-center '>
        <AnimatedCharacters>
        <motion.h1  
          viewport={{ once: true }} className='font-mk text-[3rem] font-medium'>Projects <span className='text-bl '>highlight</span></motion.h1>
        </AnimatedCharacters>
      </motion.div>
      <motion.div  variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"} 
          viewport={{ once: true }} className='flex justify-center my-10'>
        <ProjectCard />
      </motion.div>
    </>
  )
}

export default Projects
