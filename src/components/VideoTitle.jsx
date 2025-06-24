const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video flex flex-col items-start justify-center h-full pt-20 p-6 bg-gradient-to-r from-black rounded-lg shadow-lg absolute text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-gray-300 mb-4 w-1/4">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition duration-300">
          ▶ Play
        </button>
        <button className="bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300">
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;
