import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BACKGROUND_IMAGE}
          alt="bg-img"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </>
  );
};

export default GPTSearch;
