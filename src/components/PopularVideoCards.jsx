import React from "react";
import YouTube from "react-youtube";

const PopularVideoCards = ({ videoId,views, title, isInstagram }) => {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
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

      {/* Video Embed */}
        <h1 className="text-center font-bold text-xl">{views} </h1>
      <div className="w-full flex justify-center">
        {isInstagram ? (
          <iframe
            className="w-full rounded-lg shadow-md"
            src={`https://www.instagram.com/reel/${videoId}/embed`}
            height="400"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <YouTube className="w-full rounded-lg shadow-md" videoId={videoId} opts={opts} />
        )}
      </div>
    </div>
  );
};

export default PopularVideoCards;