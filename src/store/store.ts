import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { topMoviesSlice } from "./topMoviesSlice";
import { searchResultsSlice } from "./searchResultsSlice";
import { movieSlice } from "./movieSlice";

const rootReducer = combineReducers({
  [topMoviesSlice.name]: topMoviesSlice.reducer,
  [searchResultsSlice.name]: searchResultsSlice.reducer,
  [movieSlice.name]: movieSlice.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
