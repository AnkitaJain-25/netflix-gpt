import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 1400;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h2 className="text-lg md:text-2xl py-2 text-white px-7 font-bold">
        {title}
      </h2>
      <div className="relative">
        {movies?.length > 7 && (
          <button
            className="absolute left-0 top-0 z-10 bg-black/50 flex items-center justify-center h-full"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
          >
            <span className="text-4xl text-white">&#60;</span>
          </button>
        )}
        <div className="overflow-hidden h-full px-7" ref={scrollRef}>
          <div className="flex gap-3 h-full">
            {movies?.map((movie) => (
              <div key={movie.id} className="flex-shrink-0">
                <MovieCard movieDetails={movie} />
              </div>
            ))}
          </div>
        </div>
        {movies?.length > 7 && (
          <button
            className="absolute right-0 top-0 z-10 bg-black/50 flex items-center justify-center h-full"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
          >
            <span className="text-4xl text-white">&#62;</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
