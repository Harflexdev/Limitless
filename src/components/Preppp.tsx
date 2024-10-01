import React from 'react'

const Preppp = () => {
  return (
    <div>
            <div className='w-full flex items-center justify-center p-3'>
      <div className='h-[700px] w-[80%] flex justify-center rounded-md radius'>
        <div className='h-full w-full md:w-[40%] flex flex-col items-center md:items-start p-4'>
          <h2 className='font-semibold text-purple-600 mt-16 text-center md:text-left'>Notes</h2>
          <h1 className='text-2xl font-semibold mt-3 text-center md:text-left'>Say goodbye to manually writing <br /> meeting notes</h1>
          <p className='mt-3 text-gray-400 font-semibold text-center md:text-left'>Notes are automatically created as the meeting<br /> progresses so you can catch up quickly, and trust <br /> that it’s capturing everything..</p>
          <img src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727793193/wugm1wbc4lmtqft3shhp.jpg`} alt="" className='mt-14 max-w-full h-auto' />
        </div>
      </div>
      
      
    </div>
    </div>
  )
}

export default Preppp