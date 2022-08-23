import axios from "axios";

export const getTopMovies = async () => {
  try {
    const results = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=74e9e5541d131dc15373decfbe880fa9&language=en-US&page=1"
    );
    return results.data.results;
  } catch (e) {
    console.log("There was an error");
  }
};
