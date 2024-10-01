import React from 'react';

const Video = () => {
  return (
    <div className='w-full'>
      <video 
        className='w-full h-[670px]' 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="https://res.cloudinary.com/dicxuebms/video/upload/v1727799810/pendant_1_x1bqhj.webm" 
          type="video/webm" 
        />
        <source 
          src="https://res.cloudinary.com/dicxuebms/video/upload/v1727799810/pendant_1_x1bqhj.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
