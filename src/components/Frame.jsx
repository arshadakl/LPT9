import * as React from "react";
import Hero from "./Hero";

function Frame() {
    return (
        <>
            <div className="min-h-screen h-screen md:p-5 p-1 ">
                <div className="card h-full bg-zinc-900/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90   border border-slate-100/50 w-full ">
                    <div className="top flex justify-between items-center p-2 bg-[#000] rounded-t-lg">
                        <p className="title text-gray-200 text-md ml-2 mt-2 font-bold">JS</p>
                        <p className="title text-gray-200 text-sm ml-2 text-end font-fcode mt-2">arshad@dev : ~</p>
                        <span className="buttons flex space-x-1">
                            <button className="minimize w-10 h-9 -ml-1 bg-transparent transition-colors duration-200 hover:bg-white/10">
                                <svg viewBox="0 0 10.2 1" className="w-2.5 h-2.5">
                                    <rect height={1} width="10.2" y="50%" x={0} fill="white" />
                                </svg>
                            </button>
                            <button className="maximize w-10 h-9 -ml-1 bg-transparent transition-colors duration-200 hover:bg-white/10">
                                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                                    <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" fill="white" />
                                </svg>
                            </button>
                            <button className="close w-10 h-9 -ml-1 bg-transparent transition-colors duration-200 hover:bg-white/10">
                                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                                    <polygon
                                        points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="topfix bg-[#000] w-full h-6 -mt-4" />
                    <hr className="border-t border-slate-100/50 -mt-1.5" />
                    <div className="content text-gray-400 ml-1">
                       
                        <Hero/>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Frame
