import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { selectSlice } from "./slices/selectSlice";
import favoriteReducer from "./slices/favoriteSlice";
const rootReducer = combineReducers({
  selected: selectSlice.reducer,
  favorites: favoriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
