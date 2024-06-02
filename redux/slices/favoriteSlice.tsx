import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  list: string[];
}

const initialState: FavoriteState = {
  list: []
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.list = action.payload;
    },
    addToFavorite: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((id) => id !== action.payload);
    }
  }
});

export const { setFavorites, addToFavorite, removeFromFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
