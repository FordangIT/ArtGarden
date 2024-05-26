import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { selectSlice } from "./slices/selectSlice";
import favoriteReducer from "./slices/favoriteSlice";
import performanceSlice from "./slices/performanceSlice";
const rootReducer = combineReducers({
  selected: selectSlice.reducer,
  favorites: favoriteReducer,
  performance: performanceSlice
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
