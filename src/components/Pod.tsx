import React from 'react';

const Pod = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full gap-6 p-2'>
      <div className='w-full md:w-[35%] h-auto p-6 rounded-md shadow-md'>
        <h2 className='mt-11 font-semibold text-gray-500'>100-hour battery life</h2>
        <h2 className='mt-5 font-semibold text-gray-500'>Durable aluminum body</h2>
        <h2 className='mt-5 font-semibold text-gray-500'>Crystal clear audio</h2>
        <h2 className='mt-5 font-semibold text-gray-500'>Weatherproof</h2>
        <h2 className='mt-5 font-semibold text-gray-500'>Versatile magnetic clasp</h2>
        <h2 className='mt-5 font-semibold text-gray-500'>Wi-Fi and Bluetooth enabled</h2>
        <h2 className='mt-5 font-semibold text-gray-500'>USB-C charging</h2>
      </div>
      <div className='w-full md:w-[35%] h-[400px] rounded-md shadow-lg'>
        <img 
          src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727796597/ebxmrjyv8bzr1ivzif3z.webp`} 
          alt="" 
          className='w-full h-full object-contain' 
        />
      </div>
    </div>
  );
}

export default Pod;
