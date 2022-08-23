import axios from "axios";

export const getMovie = async (movieId: string) => {
  try {
    const results = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=74e9e5541d131dc15373decfbe880fa9`,
    });

    return results.data;
  } catch (e) {
    console.log("There was an error");
  }
};
