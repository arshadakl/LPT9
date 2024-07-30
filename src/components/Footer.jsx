import React from 'react'

function Footer() {
  return (
    <div className='py-5  bg-zinc-900/50 border-t-2 border-slate-50/20 flex justify-between font-fcode px-5'>



      <div className='flex flex-col w-full justify-between'>
        <div className='flex justify-between '>
          <p className="title text-gray-200 text-sm text-end font-fcode ">arshad<span className="text-bl font-semibold">@dev</span>: <b>~</b> </p>
          <p className='text-center text-white/50'>Copyright © 2024</p>

          {/* <span className='flex justify-between gap-10 mr-10'>
            <p>home</p>
            <p>Projects</p>
            <p>about</p>
          </span> */}

        </div>
        <div className='flex justify-between '>
          {/* <p className='text-center text-slate-100 text-sm'>Copyright © 2024</p> */}
        </div>
      </div>
    </div>
  )
}

export default Footer