const AboutCard = ({ imageUrl, altText }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg">
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};
export default AboutCard;