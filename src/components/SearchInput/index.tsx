import React, { useState } from "react";
import { useRouter } from "next/router";
import { searchMovies } from "../../endpoints/searchMovies";
import { setSearchResults } from "../../store/searchResultsSlice";
import { useAppDispatch } from "../../hooks";
import { PATHS } from "../../constants/paths";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  Tip,
  Wrapper,
} from "./SearchInput.styles";

export const SearchInput = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const results = await searchMovies(text);

    dispatch(setSearchResults(results));
    router.push({
      pathname: PATHS.search_results,
      query: { query: text },
    });
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          onChange={(e) => setText(e.target.value)}
          aria-label="search-input"
          placeholder="Enter a film name..."
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
      <Tip>
        Tip: You can use the 'y:' filter to narrow your results by year.
        Example: 'star wars y:1977'.
      </Tip>
    </Wrapper>
  );
};
