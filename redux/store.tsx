import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: "root",
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type Appdispatch = typeof store.dispatch;
export default store;
