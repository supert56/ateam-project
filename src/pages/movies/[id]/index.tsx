import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IMAGE_PATH, PATHS } from "../../../constants/paths";
import { getMovie } from "../../../endpoints/getMovie";
import { getMovieIdFromUrl } from "../../../helpers/getMovieIdFromUrl";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectMovie, setMovie } from "../../../store/movieSlice";
import { StyledImage, StyledText, Released, Home } from "./movie.styles";

const Movie: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectMovie);

  useEffect(() => {
    const fetchData = async () => {
      const movieId = getMovieIdFromUrl(router.query.id as string);

      if (movieId) {
        const results = await getMovie(movieId);
        dispatch(setMovie(results));
      }
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query]);

  return (
    <div>
      <Link href={PATHS.home} passHref>
        <Home>Home</Home>
      </Link>
      <StyledImage src={`${IMAGE_PATH}${movie.poster_path}`} />
      <h1>{movie.title}</h1>
      <Released>Released: {movie.release_date}</Released>
      <StyledText>{movie.overview}</StyledText>
    </div>
  );
};

export default Movie;
