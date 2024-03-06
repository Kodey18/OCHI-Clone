import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;  // Get the horizontal coordinate of the cursor
            let mouseY = e.clientY;   // Get the vertical coordinate of the cursor

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle-180);
        }); 
    },[]);

  return (
    <div className='relative min-h-screen w-full bg-cover bg-top bg-[url("./eye-bg.jpg")] '>
        <div className="eyes flex items-center justify-center gap-[40px] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">

            <div className='h-[27vh] flex items-center justify-center w-[14vw] bg-white rounded-full'>
                <div className='h-[16vh] w-[8vw] relative bg-zinc-900 rounded-full'>
                <div 
                        style={{transform:`translate(-50%, -50%)  rotate(${rotate}deg)`}} 
                        className='top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute w-full '
                    >
                        <div className='h-[3vh] w-[1.5vw] bg-white rounded-full'></div>
                    </div>
                </div>
            </div>

            <div className='h-[27vh] flex items-center justify-center w-[14vw] bg-white rounded-full'>
                <div className='h-[16vh] w-[8vw] relative bg-zinc-900 rounded-full'>
                    <div 
                        style={{transform:`translate(-50%, -50%)  rotate(${rotate}deg)`}} 
                        className='top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute w-full '
                    >
                        <div className='h-[3vh] w-[1.5vw] bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Eyes