import React from 'react'

const SideText = () => {
    const sideText = "Site of the Day";

  return (
    <div className='SideText float-right flex flex-col-reverse'>
        {
            [...sideText].map((char, index) => {
                return(
                    <span key={index} className='rotate-[45deg]'>
                        {char}
                    </span>
                );
            })
        }
    </div>
  )
}

export default SideText