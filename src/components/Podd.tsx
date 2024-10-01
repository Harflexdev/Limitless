import React from 'react'

const Podd = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full gap-6 p-2'>
      <div className='w-full md:w-[35%] h-auto p-6 rounded-md shadow-md'>
<img src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727797002/pendant-angle_njg0wb.webp`} alt=""   className='w-full h-full object-contain' />
      </div>
      <div className='w-full md:w-[35%] h-[400px] rounded-md shadow-lg'>
        <img 
          src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727797075/pendant-back_ot01op.webp`} 
          alt="" 
          className='w-full h-full object-contain' 
        />
      </div>
    </div>
  )
}

export default Podd