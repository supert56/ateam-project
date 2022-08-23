import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATES } from "../constants/loadingStates";
import { Movie } from "../types/movie";
import { RootState } from "./store";

export interface SearchResultsState {
  entity: Movie[];
  loading: LOADING_STATES;
}

const initialState: SearchResultsState = {
  entity: [],
  loading: LOADING_STATES.IDLE,
};

export const searchResultsSlice = createSlice({
  name: "searchresults",
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.entity = action.payload;
    },
  },
});

export const { setSearchResults } = searchResultsSlice.actions;

export const selectSearchResults = (state: RootState) =>
  state.searchresults.entity;

export default searchResultsSlice.reducer;
