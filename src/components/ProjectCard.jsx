import React, { useEffect, useRef } from 'react';
import AnimatedText from './LoadingAnimation '
import { FaGithub } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn } from '../gsap/Framer';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function ProjectCard() {
  const containerRef = useRef(null);
  const techRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    // Setup smooth scrolling for the container
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        // markers: true, 
      },
      scrollTo: {
        y: () => container.scrollHeight - container.clientHeight,
        ease: 'power1.inOut',
      },
    });

    // Setup smooth scrolling for each tech item with different speeds
    techRefs.current.forEach((ref, index) => {
      gsap.fromTo(ref, { y: 0 }, {
        y: () => -window.innerHeight * (index + 1) * 0.1, // Adjust speed here
        scrollTrigger: {
          trigger: ref,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  const details = [
    {
    title: 'Freelance Marketplace',
    des: 'Developed a freelance platform matching clients with top talent. Implemented a ranking system based on client feedback. Offers real-time chat, video conferencing, and secure payments. Admins manage users and platform activity, ensuring a smooth and trustworthy experience.',
    tech: ['React.js', 'Tailwind', 'MongoDB', 'Express.js', 'Node.js', 'Socket.IO'],
  },
    {
    title: 'Freelance Marketplace',
    des: 'Developed a freelance platform matching clients with top talent. Implemented a ranking system based on client feedback. Offers real-time chat, video conferencing, and secure payments. Admins manage users and platform activity, ensuring a smooth and trustworthy experience.',
    tech: ['React.js', 'Tailwind', 'MongoDB', 'Express.js', 'Node.js', 'Socket.IO'],
  }
];

  return (
    <>
    <div className='flex flex-col w-full'>

      {details.map((detail)=>{
        return(
          <div ref={containerRef} className="flex flex-col md:w-4/5 w-11/12 mx-auto my-2">
      <div className="md:p-8 p-4 bg-zinc-900/20 hover:bg-zinc-900/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm cursor-pointer bg-opacity-90 border border-slate-100/30 hover:border-slate-100/60 transition duration-300 ease-in">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex items-center gap-3 py-3">
            <AnimatedText>
              <p className="text-white/80 hover:text-bl cursor-pointer transition duration-150 ease-out text-4xl font-medium font-mk">
                {detail.title}
              </p>
            </AnimatedText>
          </div>

          <p className="mb-2 flex gap-2">
            <span className="text-lg font-medium text-slate-100 hover:text-bl transition duration-150 ease-out cursor-pointer uppercase lg:text-xl flex gap-2">
              <MdTravelExplore />
            </span>
            <span className="text-lg font-medium text-slate-100 hover:text-bl transition duration-150 ease-out cursor-pointer uppercase lg:text-xl flex gap-2">
              <FaGithub />
            </span>
            <span className="text-base font-medium ttext-neutral-700"> </span>
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center gap-3 font-fcode">
            <p className="font-semibold">{detail.des}</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-3 flex-wrap font-fcode pt-3">
            {detail.tech.map((tech, index) => (
              <motion.span
                key={tech}
                ref={el => techRefs.current[index] = el}
                variants={fadeIn('right', (index - 1) / (detail.tech.length - 1) * 0.9 + 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="inline-flex bg-slate-50/10 hover:bg-slate-50/20 transition duration-150 ease-out cursor-pointer text-white hover:text-bl rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border border-slate-100/50 items-center px-2 py-1 text-xs font-medium font-fcode"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
        )
      })}


      {/* <button className='out'>
      all-projects
      </button> */}

      <div className='w-36 mx-auto py-16'>
      <button class=" relative hover:text-slate-950  py-2 px-8 after:absolute after:h-0.5 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-300 overflow-hidden z-20 after:z-[-20] after:bg-bl after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">all-projects</button>
      </div>
    </div>

    </>
  );
}

export default ProjectCard;
