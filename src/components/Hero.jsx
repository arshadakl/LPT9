import React from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "../gsap/AnimatedFText";
import { fadeIn } from "../gsap/Framer";

function Hero() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div className="flex overflow-hidden relative flex-col py-2.5 w-full min-h-[504px] max-md:max-w-full  ">
      <div className="flex relative gap-2.5 px-3 py-2.5 mt-2 w-full bg-opacity-0 max-md:flex-wrap max-md:max-w-full justify-center">
        <div className="flex flex-col grow shrink-0 justify-center text-center basis-0 w-fit max-md:max-w-full ">
          <div className="flex justify-center items-center px-16 py-20 bg-opacity-10 max-md:px-5 max-md:max-w-full ">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="flex flex-col mt-16 mb-3 max-w-full w-full max-md:mt-10 justify-center"
            >
              <div className="text-6xl text-green-100 max-md:max-w-full max-md:text-4xl">
                <AnimatedCharacters>
                  <h1 className="md:text-[6rem] text-[3rem] text-slate-50 font-mk md:font-normal font-medium tracking-tight">
                    Hi, I'm Arshad,<br />
                    Creative <span className="text-bl font-medium font-fcode">developer</span>
                  </h1>
                </AnimatedCharacters>
              </div>
              <div className="self-center tracking-tighter mt-3 text-xl font-fcode text-slate-400">
                <motion.p  variants={fadeIn("down", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}>
                  I bring value to web development projects by merging <br />
                  technical expertise with creativity and aesthetics.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
