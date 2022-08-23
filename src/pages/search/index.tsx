import styled from "styled-components";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MovieResults } from "../../components/MovieResults";
import { SearchInput } from "../../components/SearchInput";
import { searchMovies } from "../../endpoints/searchMovies";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectSearchResults,
  setSearchResults,
} from "../../store/searchResultsSlice";
import { PATHS } from "../../constants/paths";

const Home = styled.a`
  margin-bottom: 24px;
  display: block;
`;

const Search: NextPage = () => {
  const movies = useAppSelector(selectSearchResults);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const results = await searchMovies(router.query.query as string);
      dispatch(setSearchResults(results));
    };

    if (router.isReady && movies?.length === 0 && router.query.query) {
      fetchData();
    }
  }, [router.isReady]);

  return (
    <div>
      <Link href={PATHS.home} passHref>
        <Home>Home</Home>
      </Link>
      <h1>Results for: {router.query.query}</h1>
      <MovieResults movies={movies} />
    </div>
  );
};

export default Search;
