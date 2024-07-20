import React from 'react'
import AnimatedText from './LoadingAnimation '
import { FaGithub } from 'react-icons/fa'
import { MdTravelExplore } from 'react-icons/md'

function ProjectCard() {
  const details = {
    title: "Freelance Marketplace",
    des: "Developed a freelance platform matching clients with top talent. Implemented a ranking system based on client feedback. Offers real-time chat, video conferencing, and secure payments. Admins manage users and platform activity, ensuring a smooth and trustworthy experience.",
    tech: ["React.js", "Tailwind", "MongoDB", "Express.js", "Node.js", "Socket.IO"],
  }
  return (

    <div className="flex flex-col md:w-4/5 w-11/12">
      <div className="md:p-8 p-4  bg-zinc-900/20 hover:bg-zinc-900/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  cursor-pointer bg-opacity-90   border border-slate-100/30 hover:border-slate-100/60 transition duration-300 ease-in">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex items-center gap-3 py-3">
            <AnimatedText>
              <p className="text-white/80 hover:text-bl cursor-pointer transition duration-150 ease-out text-4xl font-medium font-mk">{details.title} </p>
            </AnimatedText>
          </div>

          <p className='mb-2 flex gap-2 '>
            <span className="text-lg font-medium text-slate-100 hover:text-bl transition duration-150 ease-out cursor-pointer uppercase lg:text-xl flex gap-2">
              <MdTravelExplore />
            </span>
            <span className="text-lg font-medium text-slate-100 hover:text-bl transition duration-150 ease-out cursor-pointer uppercase lg:text-xl flex gap-2">
            <FaGithub />
            </span>
            <span className="text-base font-medium ttext-neutral-700"> </span>
          </p>
        </div>
        <div className='flex '>
          <div className="flex items-center gap-3  font-fcode">
            <AnimatedText>
              <p className=" font-semibold">{details.des}</p>
            </AnimatedText>
          </div>
        </div>
        <div className='flex'>
          <div className="flex items-center gap-3 flex-wrap font-fcode pt-3">
            {details.tech.map((tect) => {
              return (<span class="inline-flex bg-slate-50/10 hover:bg-slate-50/20 transition duration-150 ease-out cursor-pointer text-white hover:text-bl rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90   border border-slate-100/50 items-center px-2 py-1 text-xs font-medium font-fcode ">{tect}</span>)
            })}
          </div>
        </div>


      </div>
    </div>

  )
}

export default ProjectCard
