import Link from "next/link";
import { PATHS } from "../../constants/paths";
import { prettifyUrl } from "../../helpers/prettifyUrl";
import { Movie } from "../../types/movie";
import { StyledRow, Wrapper, NoMovies } from "./MovieResults.styles";
import { MovieResultsProps } from "./MovieResults.types";

export const MovieResults = ({ movies }: MovieResultsProps) => {
  if (!movies.length) {
    return (
      <Wrapper>
        <NoMovies>No movies to display 😢</NoMovies>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {movies.map((m: Movie, i: number) => {
        if (!m.title) return; // Don't display movies without at least a title (title is optional on API)

        return (
          <Link
            key={i}
            href={{ pathname: `${PATHS.movies}/${prettifyUrl(m.title, m.id)}` }}
          >
            <StyledRow>{m.title}</StyledRow>
          </Link>
        );
      })}
    </Wrapper>
  );
};
