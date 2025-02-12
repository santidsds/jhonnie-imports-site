import React, { useEffect, useState } from 'react';
import video1 from '../assets/black_label.mp4';
import video2 from '../assets/gold_label.mp4';

const VideoSection = () => {
  const [visibleVideo, setVisibleVideo] = useState(1);

  const handleScroll = () => {
    console.log('Scroll event triggered'); // Add this line to verify if the function is called
    const scrollPosition = window.scrollY;
    console.log('Scroll position:', scrollPosition); // Log the scroll position

    if (scrollPosition < 300) {
      setVisibleVideo(1);
      console.log('1');
    } else if (scrollPosition >= 300 && scrollPosition < 600) {
      setVisibleVideo(2);
      console.log('2');
    } else if (scrollPosition >= 600) {
      setVisibleVideo(3);
      console.log('3');
    }
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('Cleanup');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <video className={`w-full h-full object-cover transition-opacity duration-500 ${visibleVideo === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} src={video1} autoPlay loop muted></video>
      <video className={`w-full h-full object-cover transition-opacity duration-500 ${visibleVideo === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} src={video2} autoPlay loop muted></video>
      <video className={`w-full h-full object-cover transition-opacity duration-500 ${visibleVideo === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} src={video1} autoPlay loop muted></video>
    </div>
  );
};

export default VideoSection