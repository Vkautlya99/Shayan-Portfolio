const AboutCard = ({ imageUrl, altText }) => {
  return (
    <div className="w-full sm:h-[30vw] overflow-hidden rounded-lg">
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-[95vw] lg:h-full object-cover rounded-lg"
      />
    </div>
  );
};
export default AboutCard;