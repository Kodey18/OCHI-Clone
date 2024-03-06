import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className='w-full h-screen pt-8'>

      <div className="IntroText font-roboCond mt-32 ml-14">

        <div className='heroText p-1'>
          {
            ["we create", "eye-opening", "presentations"].map((elem, index) => {

              return(
                <div key={index} className="masker">
                  
                  <div className='w-fit flex items-center'>

                    {index === 1 && (
                      <div className='mr-1 w-[8vw] ml-1'>
                        <img className='rounded-md w-full h-full object-cover' src="./content-image01.jpg" alt="ppt_img" />
                      </div>
                    )}

                    <h1 className='uppercase leading-none tracking-tighter font-medium text-[6.5vw]'>
                      {elem}
                    </h1>

                  </div>
                  
                </div>
              );

            })
          }
        </div>

      </div>

      <div className='border-t-[1px] border-zinc-700 mt-[18vh] flex px-14 pt-4 justify-between items-center'>

        <div className='flex-1'>
          For public and private companies
        </div>

        <div className='flex-1 flex justify-between'>

          <div>
            From the first pitch to IPO
          </div>

          <div className='flex gap-3 items-center'>

            <span 
              className='uppercase border border-zinc-400 px-3 py-1 rounded-[20px] hover:bg-white hover:text-black'
            >
              start the project
            </span>

            <span 
              className='p-2 rounded-[20px] border border-zinc-400 hover:bg-white hover:text-black'
            >
              <MdArrowOutward />
            </span>
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default LandingPage;