import axios from "axios";

type SearchMoviesParams = {
  api_key: string;
  query: string;
  year?: string;
};

export const searchMovies = async (query: string) => {
  const findYearRegex = / y:(\b(19|20)\d{2}\b)/;
  const year = query.match(findYearRegex);

  const params: SearchMoviesParams = {
    api_key: "74e9e5541d131dc15373decfbe880fa9",
    query,
  };

  if (year) {
    params.query = query.replace(year[0], "");
    params.year = year[1];
  }

  try {
    const results = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/search/movie",
      params,
    });
    console.log("searched results", results);
    return results.data.results;
  } catch (e) {
    console.log("There was an error");
  }
};
