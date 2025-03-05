import React from "react";
import YouTube from "react-youtube";

const PopularVideoCards = ({ videoId, title }) => {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0, // Set to 1 for auto-play
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="w-full max-w-[90vw] md:max-w-[60vw] mx-auto bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-xl p-6 my-6">
      {/* Video Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {title}
      </h2>

      {/* YouTube Video */}
      <div className="w-full flex justify-center">
        <YouTube className="w-full rounded-lg shadow-md" videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default PopularVideoCards;
