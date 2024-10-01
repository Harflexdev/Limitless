import React from 'react'

const Prepp = () => {
  return (
    <div>
          <div className='w-full flex items-center justify-center p-3'>
      <div className='h-[700px] w-[80%] flex justify-center rounded-md radius'>
        <div className='h-full w-full md:w-[40%] flex flex-col items-center md:items-start p-4'>
          <h2 className='font-semibold text-purple-600 mt-16 text-center md:text-left'>Transcript

</h2>
          <h1 className='text-2xl font-semibold mt-3 text-center md:text-left'>Stay on top of every moment with <br />  accurate transcription</h1>
          <p className='mt-3 text-gray-400 font-semibold text-center md:text-left'>Your conversation is transcribed as it’s happening,<br /> making it easy to quickly catch up if you need to.
          </p>
          <img src={`https://res.cloudinary.com/dicxuebms/image/upload/v1727792972/gbclsezsmxkb7ad5wyav.jpg`} alt="" className='mt-14 max-w-full h-auto' />
        </div>
      </div>
      
      
    </div>
    </div>
  )
}

export default Prepp