import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_TRAILER } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideos?.[movieId]
  );

  const getVideo = async () => {
    const data = await fetch(MOVIE_TRAILER(movieId), API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo({ movieId, trailer }));
  };

  useEffect(() => {
    !trailerVideo && getVideo();
  }, []);
};

export default useMovieTrailer;
