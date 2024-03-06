import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div 
    className='w-full bg-[#004D43] pt-28 pb-12 border-b-0 rounded-tr-3xl rounded-tl-3xl'
    >
        <div 
            className='uppercase border-t-2 border-b-2 border-[#dee3e3] flex gap-[250px] font-roboCond whitespace-nowrap overflow-hidden'
        >
            <motion.span
                className='leading-none tracking-tighter  text-[23vw] font-bold -mb-8 -mt-7'
                initial = {{x:0}} 
                animate = {{x : "-100%"}} 
                transition={{ease:"linear", repeat: Infinity , duration:6, delay:0}}
            >
                We are ochi
            </motion.span>

            <motion.span
                className='leading-none tracking-tighter  text-[23vw] font-bold -mb-8 -mt-7'
                initial = {{x:0}} 
                animate = {{x : "-100%"}} 
                transition={{ease:"linear", repeat: Infinity, duration:6, delay: 0}}
            >
                We are ochi
            </motion.span>
        </div>
    </div>
  )
}

export default Marquee