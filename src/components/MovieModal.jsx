import VideoBackground from "./VideoBackground";

const MovieModal = ({
  isOpen,
  onClose,
  backdropPath,
  id,
  title,
  releaseDate,
  overview,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        className="bg-black right-0 p-0 rounded-lg w-11/12 max-w-3xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-lg right-2 top-2 px-2 cursor-pointer text-white bg-black rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
        <VideoBackground
          movieId={id}
          title={title}
          backdropPath={backdropPath}
        />
        <div className="text-white px-4 pb-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <h2>{releaseDate}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
