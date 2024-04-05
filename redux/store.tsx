import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { selectSlice } from "./slices/selectSlice";
const rootReducer = combineReducers({
  selected: selectSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
