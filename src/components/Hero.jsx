import * as React from "react";
import AnimatedText from "./LoadingAnimation ";

function Hero() {
return (
          <div className="flex overflow-hidden relative flex-col py-2.5 w-full min-h-[504px] max-md:max-w-full">
            
           
            <div className="flex relative gap-2.5 px-3 py-2.5 mt-2 w-full  bg-opacity-0 max-md:flex-wrap max-md:max-w-full">
              
              <div className="flex flex-col grow shrink-0 justify-center text-center basis-0 w-fit max-md:max-w-full">
                <div className="flex justify-center items-center px-16 py-20  bg-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col mt-16 mb-3 max-w-full w-full max-md:mt-10">
                    <div className="text-6xl text-green-100 max-md:max-w-full   max-md:text-4xl">
                      <AnimatedText>

                      <h1 className="md:text-[6rem] text-[3rem] text-slate-50 font-mk md:font-normal font-medium tracking-tight">Hi, I'm Arshad,<br />
                      Creative <span className="text-bl font-medium font-fcode">developer</span></h1>
                      </AnimatedText>
                    </div>
                    <div className="self-center  tracking-tighter mt-3 text-xl  font-fcode text-slate-400">
                    <p className="">I bring value to web development projects by merging <br /> technical expertise with creativity and aesthetics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
);
}

export default Hero;