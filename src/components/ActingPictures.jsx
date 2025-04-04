import React from 'react';

const ActingPictures = ({ images =[] }) => {
  return (
    <div className=''>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-2 " data-aos="fade-up">
        {images.map((image, index) => (
          <div key={index} className="aspect-square">
            <img 
              src={image} 
              alt={`Acting Image ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform  " 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActingPictures;
