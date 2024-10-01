import React from 'react';

const Video = () => {
  return (
    <div className='w-full '>
      <video 
        src={`https://res.cloudinary.com/dicxuebms/video/upload/v1727799810/pendant_1_x1bqhj.webm`} 
        className='w-full h-[670px]' 
        autoPlay 
        loop 
        muted 
        playsInline
      />
    </div>
  );
}

export default Video;
