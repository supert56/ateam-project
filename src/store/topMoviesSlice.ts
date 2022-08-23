import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATES } from "../constants/loadingStates";
import { Movie } from "../types/movie";
import { RootState } from "./store";

export interface TopMoviesState {
  entity: Movie[];
  loading: LOADING_STATES;
}

const initialState: TopMoviesState = {
  entity: [],
  loading: LOADING_STATES.IDLE,
};

export const topMoviesSlice = createSlice({
  name: "topmovies",
  initialState,
  reducers: {
    setTopMovies(state, action) {
      state.entity = action.payload;
    },
  },
});

export const { setTopMovies } = topMoviesSlice.actions;

export const selectTopMovies = (state: RootState) => state.topmovies.entity;

export default topMoviesSlice.reducer;
