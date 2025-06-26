export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeCjG9wa4t1sPUlGlhJN7tP_N0PNVlN50HJWj4-SsAnrRKCRUMcSf3bJyLcRwDYngrRAf67e9lowwi4_4yVRkvWwBEyEPTo.png?r=7a0";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const MOVIE_TRAILER = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const GPT_SEARCH = (movie) => `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GENAI_KEY = import.meta.env.VITE_GENAI_KEY;
