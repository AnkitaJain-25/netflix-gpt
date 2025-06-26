import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import MovieModal from "./MovieModal";
import VideoBackground from "./VideoBackground";

const MovieCard = ({ movieDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, poster_path, backdrop_path, release_date, overview, id } =
    movieDetails;

  if (!poster_path) return null;
  return (
    <div className="w-36 md:w-48">
      <img
        alt={title}
        className="cursor-pointer"
        src={IMG_CDN_URL + poster_path}
        onClick={() => setIsModalOpen(true)}
      />

      <MovieModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backdropPath={backdrop_path}
        title={title}
        releaseDate={release_date}
        id={id}
        overview={overview}
      ></MovieModal>
    </div>
  );
};

export default MovieCard;
