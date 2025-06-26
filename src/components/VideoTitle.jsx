const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video flex flex-col pt-[10%] px-4 md:px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-lg text-gray-300 mb-4 w-1/4">
        {overview}
      </p>
      <div className="flex space-x-4 my-2 md:my-0">
        <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md hover:bg-gray-200 transition duration-300">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
