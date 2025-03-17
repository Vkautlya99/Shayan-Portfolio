import React from 'react';



const VideoCard = ({ videoSrc }) => {
  return (
    <div className="video-card">
      <video controls className="w-[68%] mx-auto my-2 rounded-lg shadow-lg">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;