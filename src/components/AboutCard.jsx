const AboutCard = ({ imageUrl, altText }) => {
  return (
    <div className="w-full h-full overflow-hidden aspect-square">
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
export default AboutCard;