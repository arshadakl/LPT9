import * as React from "react";

function Hero() {
return (
          <div className="flex overflow-hidden relative flex-col py-2.5 w-full min-h-[504px] max-md:max-w-full">
            
           
            <div className="flex relative gap-2.5 px-3 py-2.5 mt-2 w-full  bg-opacity-0 max-md:flex-wrap max-md:max-w-full">
              
              <div className="flex flex-col grow shrink-0 justify-center text-center basis-0 w-fit max-md:max-w-full">
                <div className="flex justify-center items-center px-16 py-20 bg-zinc-900 bg-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col mt-16 mb-3 max-w-full w-[556px] max-md:mt-10">
                    <div className="text-6xl text-green-100 max-md:max-w-full max-md:text-4xl">
                      Hi, I'm , a<br />
                      creative 
                    </div>
                    <div className="self-center mt-3 text-xs text-stone-500">
                      I bring value to web clevelopment projects by merging
                      <br />
                      technical expertise with creativity and aesthetics.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative self-center text-xs text-center text-white">
              by arshad
            </div>
          </div>
);
}

export default Hero;