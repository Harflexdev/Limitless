import React from 'react';

const Box = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full p-2 box'>
      <div className='h-[300px] md:h-[600px] w-full md:w-[40%] mb-4 md:mb-0'>
        <img 
          src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727782102/l36mpruve40fzuxnlezf.jpg`} 
          alt="" 
          className='w-full h-full rounded-lg' 
        />
      </div>
      <div className='h-auto w-full md:w-[35%] flex flex-col gap-3'>
        <div className='h-[100px] w-[70%]'>
          <h3 className='font-semibold p-2'>The world’s most wearable AI.</h3>
          <p className='font-semibold text-gray-700 p-2'>Preserve conversations and ask your personalized AI anything.</p>
        </div>
        <div className='h-[250px] md:h-[350px] w-[70%] mx-auto'>
          <img 
            src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727782539/r2129dzhl3rypjxe4tls.png`} 
            alt=""  
            className='w-full h-full rounded-md rotate' 
          />
        </div>
      </div>
    </div>
  );
}

export default Box;
