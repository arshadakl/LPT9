import * as React from "react";
import Hero from "./Hero";
import { CiMenuKebab } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import SmoothScroll from "../gsap/SmoothScroll";
import { fadeIn } from "../gsap/Framer";
import { motion } from "framer-motion";
import Contact from "./Contact";

function Frame() {
    return (
        <>
            <div
                
                className="min-h-screen h-screen md:p-5 p-1">
                <motion.div 
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="card h-full bg-zinc-900/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90   border border-slate-100/50 w-full ">
                    <div className="top flex justify-between items-center p-2 bg-[#000]/50 rounded-t-lg">
                        <p className="title text-gray-200  ml-2 mt-2 cursor-pointer  font-fcode"><CiMenuKebab size={20} /></p>
                        <p className="title text-gray-200 text-sm ml-5 text-end font-fcode mt-2">arshad<span className="text-bl font-semibold">@dev</span>: <b>~</b> </p>
                        <span className=" flex space-x-1 " >
                            <button className=" w-10 h-9 -ml-10 cursor-pointer transition-colors duration-200  hover:bg-white/20">
                                <svg viewBox="0 0 10.2 1" className="w-2.5 h-2.5 mx-auto">
                                    <rect height={1} width="10.2" y="50%" x={0} fill="white" />
                                </svg>
                            </button>
                            <button className="maximize w-10 h-9 ml-10 bg-transparent transition-colors duration-200 hover:bg-yellow-500/30">
                                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 cursor-pointer mx-auto">
                                    <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" fill="white" />
                                </svg>
                            </button>
                            <button className="close w-10 h-9 ml-1 bg-transparent transition-colors duration-200 cursor-pointer  hover:bg-red-500/20">
                                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 mx-auto">
                                    <polygon
                                        points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="topfix bg-[#000]/50 w-full h-2 " />
                    <hr className="border-t border-slate-100/50 " />
                    <div className="content custom-scrollbar text-gray-400 ml-1 hide-scrollbar overflow-y-scroll h-[80vh]">
                        {/* <SmoothScroll> */}
                        {/* <div className="h-full "> */}

                        <Hero/>
                        <Projects />
                        {/* <Projects/> */}
                        <About />
                        {/* <Projects /> */}
                        <Contact/>
                        <Footer />
                        {/* </div> */}
                        {/* </SmoothScroll> */}
                    </div>
                    <hr className="border-t border-slate-100/50 " />

                    <div className="flex justify-between px-4 my-auto ">
                        <div className=" flex content-center my-3 text-slate-100/50  justify-between gap-2">
                            <p>!</p>
                        </div>
                        <div className=" flex content-center my-3 text-slate-100/50  justify-between gap-2">
                            <FaLinkedin onClick={() => window.location.href = "https://www.linkedin.com/in/arshad-akl"} className="hover:text-slate-50 cursor-pointer transition-colors duration-200" />
                            <FaGithub onClick={() => window.location.href = "https://github.com/arshadakl"} className="hover:text-slate-50 cursor-pointer transition-colors duration-200" />

                        </div>
                    </div>
                </motion.div>
            </div>

        </>
    );
}
export default Frame
