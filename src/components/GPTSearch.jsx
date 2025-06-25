import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BACKGROUND_IMAGE}
          alt="bg-img"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
