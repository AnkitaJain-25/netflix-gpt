import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({ movieId, title, backdropPath }) => {
  const [showIframe, setShowIframe] = useState(false);

  const trailerVideo = useSelector(
    (state) => state.movies?.trailerVideos?.[movieId]
  );

  useMovieTrailer(movieId);

  useEffect(() => {
    if (trailerVideo) {
      const timeout = setTimeout(() => {
        setShowIframe(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [trailerVideo]);

  return (
    <div className="w-full">
      {!trailerVideo ||
        (!showIframe && (
          <img
            alt={title}
            src={IMG_CDN_URL + backdropPath}
            className="w-full"
          />
        ))}
      {trailerVideo && showIframe && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
