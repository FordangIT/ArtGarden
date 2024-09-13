import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { selectSlice } from "./slices/selectSlice";
import favoriteReducer from "./slices/favoriteSlice";
import performanceSlice from "./slices/performanceSlice";
import exhibitionSlice from "./slices/exhibitionSlice";
import modalSlice from "./slices/modalSlice";
import checkLoginSlice from "./slices/checkLoginSlice";

const rootReducer = combineReducers({
  login: checkLoginSlice,
  selected: selectSlice.reducer,
  favorites: favoriteReducer,
  performance: performanceSlice,
  exhibition: exhibitionSlice,
  modal: modalSlice
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type Appdispatch = typeof store.dispatch;
export default store;
