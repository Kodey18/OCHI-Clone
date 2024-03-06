import React from 'react'

const About = () => {
  return (
    <div 
        className='bg-[#CDEA68] rounded-tl-[20px] border-[2px] rounded-tr-[35px] text-black'
    >
      <div 
        className='border-b-[2px] border-[#a1b562] pt-[90px] px-[55px] pb-[58px]'
      >
        <div 
          className="w-[84%] font-['Neue_Montreal'] text-[55px] leading-[58px]"
        >
            Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='border-b-[3px] border-black'>raise funds</span>, <span className='border-b-[3px] border-black'>sell prod­ucts</span>, <span className='border-b-[3px] border-black'>ex­plain com­plex ideas</span>, and <span className='border-b-[3px] border-black'>hire great peo­ple</span>.
        </div>
      </div>

      <div className='w-[100%] flex pt-[20px] px-14  pb-[50px]'>

        <div className='flex-1 font-["Neue_Montreal"]'>
          <div className='text-[55px]'>Our approach : </div>
          <button 
            className='flex items-center justify-end gap-4 uppercase p-[13px] rounded-[40px] px-[30px] border-[2px] border-black text-[15px] font-semibold text-white bg-[#1d1e1d]'
          >
            <span>Read more</span>
            <div className='w-3 h-3 bg-white rounded-full'></div>
          </button>
        </div>
        <div className=''>
          <img src="./about-img.jpg" alt="aboutimg" className='rounded-[30px]' />
        </div>

      </div>
    </div>
  )
}

export default About