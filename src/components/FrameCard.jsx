import React from 'react'

function FrameCard() {
  return (
    <div className="card bg-zinc-900/50 rounded-md mx-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90   border border-slate-100/40 w-1/2 ">
            <div className=" flex justify-end items-center  bg-[#000]/50 rounded-t-lg">
                <span className=" flex  space-x-1 " >
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
            <div className="topfix bg-[#000]/50 w-full  " />
            <hr className="border-t border-slate-100/50 " />
            <div className="content custom-scrollbar font-fcode text-slate-100  ml-1 h-36">
            <p>1.Nice to meet you! I'm Arshad, a Full-Stack Developer.</p>
                {/* <Hero/> */}

            </div>

        </div>
  )
}

export default FrameCard