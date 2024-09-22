// Mark the component as a Client Component
"use client";

import React, { useRef } from 'react';

interface VideoTutorialProps {
  videoSrc: string;
}

const VedioTut: React.FC<VideoTutorialProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlayPause = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <div className='flex justify-center items-center py-5'>
      <video ref={videoRef} src={videoSrc} controls width="800" style={{height:"450px", objectFit:"cover"}}/>
      {/* <button onClick={handlePlayPause} >
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
};

export default VedioTut;
