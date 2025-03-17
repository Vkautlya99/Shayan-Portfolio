const AboutCard = ({ imageUrl, altText, rounded = "rounded-4xl" }) => {
  return (
    <div className={`w-full h-full overflow-hidden aspect-square ${rounded} bg-gray-100 flex items-center justify-center`}>
      <img 
        src={imageUrl} 
        alt={altText} 
        className="max-w-full max-h-full object-contain rounded-3xl"
      />
    </div>
  );
};

export default AboutCard;


