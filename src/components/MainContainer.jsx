import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id, backdrop_path, release_date } =
    mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        title={original_title}
        overview={overview}
        movieId={id}
        backdropPath={backdrop_path}
        releaseDate={release_date}
      />
      <VideoBackground
        movieId={id}
        backdropPath={backdrop_path}
        title={original_title}
      />
    </div>
  );
};

export default MainContainer;
