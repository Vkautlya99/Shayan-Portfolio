import React from "react";

const PopularVideoCards = ({ videoUrl, title }) => {
  return (
    <div className="w-full max-w-[90vw] md:max-w-[60vw] mx-auto bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-xl p-6 my-6">
      {/* Video Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {title}
      </h2>

      {/* Embedded YouTube Video */}
      <div className="w-full flex justify-center">
        <iframe
          className="w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-lg shadow-md"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PopularVideoCards;
