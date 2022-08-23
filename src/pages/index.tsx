import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import { MovieResults } from "../components/MovieResults";
import { SearchInput } from "../components/SearchInput";
import { PATHS } from "../constants/paths";
import { getTopMovies } from "../endpoints/getTopMovies";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectTopMovies, setTopMovies } from "../store/topMoviesSlice";

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Heading = styled.h1`
  margin-bottom: 8px;
`;

const Movies: NextPage = () => {
  const movies = useAppSelector(selectTopMovies);
  const noMovies = movies.length === 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const results = await getTopMovies();
      dispatch(setTopMovies(results));
    };

    if (noMovies) {
      fetchData();
    }
  }, []);

  return (
    <Wrapper>
      <SearchInput />
      <Heading>Top Rated Movies</Heading>
      <MovieResults movies={movies} />
    </Wrapper>
  );
};

export default Movies;
