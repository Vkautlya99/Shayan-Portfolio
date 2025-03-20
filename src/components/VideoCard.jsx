const VideoCard = ({ videoSrc }) => {
  return (
    <div className="relative w-[70vw] max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <video
        src={videoSrc}
        className="w-full h-auto"
        controls
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default VideoCard;
