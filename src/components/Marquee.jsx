import React from 'react'

const Marquee = () => {
  return (
    <div 
    className='w-full bg-[#004D43] pt-28 pb-12 border-b-0 rounded-tr-3xl rounded-tl-3xl'
    >
        <div 
            className='uppercase border-t-2 border-b-2 border-[#3C776F] flex gap-28 font-roboCond whitespace-nowrap overflow-hidden tracking-tighter'
        >
            <span
            className='leading-none tracking-tighter text-[21vw] font-bold -mb-8 -mt-7'
            >
                We are ochi
            </span>

            <span
            className='leading-none tracking-tighter text-[21vw] font-bold -mb-8 -mt-7'
            >
                We are ochi
            </span>
        </div>
    </div>
  )
}

export default Marquee