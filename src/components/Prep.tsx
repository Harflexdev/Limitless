import React from 'react';

const Prep = () => {
  return (
    <div className='w-full flex items-center justify-center p-3'>
      <div className='h-[700px] w-[80%] flex justify-center rounded-md radius'>
        <div className='h-full w-full md:w-[40%] flex flex-col items-center md:items-start p-4'>
          <h2 className='font-semibold text-purple-600 mt-16 text-center md:text-left'>Prep</h2>
          <h1 className='text-2xl font-semibold mt-3 text-center md:text-left'>Make the most of every conversation <br /> with pre-meeting briefs</h1>
          <p className='mt-3 text-gray-400 font-semibold text-center md:text-left'>Get context from your Gmail, Google Calendar,<br /> previous meetings, and in-person conversations <br /> before your call.</p>
          <img src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727782102/l36mpruve40fzuxnlezf.jpg`} alt="" className='mt-14 max-w-full h-auto' />
        </div>
      </div>
      
      
    </div>
    
  );
}

export default Prep;
