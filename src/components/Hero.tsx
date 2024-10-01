import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-auto max-w-[90%] md:max-w-[80%] lg:max-w-[60%] flex flex-col items-center mt-20'>
        <div className="flex items-center bg-gray-200 rounded-full px-2 py-2 shadow-lg w-full md:w-[60%] lg:w-[50%] h-[40px] mb-4"> 
          <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 mr-2">
            <i className="fas fa-play text-customPurple text-xl"></i> 
          </div>
          <span className="text-gray-800 text-sm">See the launched video</span>
        </div>
        <h2 className="text-purple-900 font-semibold text-3xl md:text-4xl lg:text-6xl text-center">
          Go beyond your <br />mind’s limitations
        </h2>
        <p className='text-gray-500 text-lg md:text-xl lg:text-3xl text-center'>
          Personalized AI powered by what <br /> you’ve seen, said, and heard.
        </p>
      
        <button className='mt-5 h-[40px] w-full sm:w-[190px] rounded-md bg-purple-950 text-white text-[17px] hover:bg-black'>
          Get started for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
