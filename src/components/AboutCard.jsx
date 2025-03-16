const AboutCard = ({ imageUrl, altText }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg aspect-square">
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full object-cover rounded-lg"
      />
    </div>
  );
};
export default AboutCard;