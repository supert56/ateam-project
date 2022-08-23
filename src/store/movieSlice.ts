import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATES } from "../constants/loadingStates";
import { Movie } from "../types/movie";
import { RootState } from "./store";

export interface MovieState {
  entity: Movie;
  loading: LOADING_STATES;
}

const initialState: MovieState = {
  entity: {},
  loading: LOADING_STATES.IDLE,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.entity = action.payload;
    },
  },
});

export const { setMovie } = movieSlice.actions;

export const selectMovie = (state: RootState) => {
  return state.movie.entity;
};

export default movieSlice.reducer;
