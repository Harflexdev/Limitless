import React from 'react';

const Boxx = () => {
  return (
    <div className='flex w-full justify-center items-center p-4'>
      <div className='w-full max-w-3xl h-[300px]  flex flex-col justify-center'>
        <h3 className='text-[1.2rem] text-center mt-1 md:text-2xl'>
          No awkward bot <span className='text-gray-400'>joining your meetings.</span>
        </h3>
        <h3 className='text-[1.2rem] text-center mt-1 md:text-2xl'>
          Won't slow your computer <span className='text-gray-400'>and has unlimited storage.</span>
        </h3>
        <h3 className='text-[1.2rem] text-center mt-1 md:text-2xl'>
          Data encrypted <span className='text-gray-400'>and stored in the Limitless Confidential Cloud.</span>
        </h3>
        <h3 className='text-[1.2rem] text-center mt-1 md:text-2xl'>
          Instantly join and record <span className='text-gray-400'>meetings right on time with just one click.</span>
        </h3>
        <h3 className='text-[1.2rem] text-center mt-1 md:text-2xl'>
          Usable on any device <span className='text-gray-400'>including the web, your phone, a Mac, or PC.</span>
        </h3>
      </div>
    </div>
  );
}

export default Boxx;
