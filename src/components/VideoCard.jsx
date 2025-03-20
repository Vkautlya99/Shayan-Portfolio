import React, { useState } from "react"
const VideoCard = ({ videoSrc, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-[80vw] lg:w-[70vw] mx-auto shadow-lg rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-auto"
        controls={isPlaying}
        muted
        playsInline
        preload="auto"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            onClick={handlePlay}
            className="relative z-10 w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
          >
            <svg
              className="w-8 h-8 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;