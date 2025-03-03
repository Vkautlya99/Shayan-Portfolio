const AboutCard = ({ imageUrl, altText }) => {
    return (
      <div className="w-[250px] mx-auto bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ">

        
        <img
          src={imageUrl}
          alt={altText}
          className=" lg:w-full h-70 object-cover rounded-xl"
        />
      </div>
    );
  };
  
  export default AboutCard;
