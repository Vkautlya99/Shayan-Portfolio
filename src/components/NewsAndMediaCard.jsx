import React, { useState, useEffect } from 'react';

const NewsAndMediaCard = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel w-full max-w-4xl mx-auto overflow-hidden" data-aos="fade-up">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center items-center bg-black">
            <img
              src={img}
              alt={`News ${index + 1}`}
              className="w-full max-h-[500px] md:max-h-[400px] sm:max-h-[300px] object-contain rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 -mt-14 md:-mt-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-yellow-500 scale-110' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsAndMediaCard;
