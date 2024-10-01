import React from 'react';
import ShinyButton from './ui/shiny-button';

const Getstarted = () => {
  return (
    <div className='flex items-center justify-center w-full p-4'>
      <div className='w-full max-w-2xl h-auto py-8 px-6 bg-white rounded-lg'>
        <h2 className='font-semibold text-2xl md:text-3xl'>
          For people going <br /> beyond their limitations
        </h2>
        <p className=' mt-4 text-base md:text-lg text-gray-600'>
          <span className='text-gray-400'>We create</span> tools that augment—not replace— <br />
          human intelligence with artificial intelligence <br />
          to overcome the brain’s limitations. Improving <br />
          memory and focus are just the beginning.
        </p>
        <div className='flex  mt-6'>
          <ShinyButton>
            Get started for free
          </ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
