export type Movie = {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

export const defaultMockMovie: Movie = {
  poster_path: "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
  adult: false,
  overview:
    "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  release_date: "1994-09-10",
  genre_ids: [18, 80],
  id: 278,
  original_title: "The Shawshank Redemption",
  original_language: "en",
  title: "The Shawshank Redemption",
  backdrop_path: "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
  popularity: 6.741296,
  vote_count: 5238,
  video: false,
  vote_average: 8.32,
};
