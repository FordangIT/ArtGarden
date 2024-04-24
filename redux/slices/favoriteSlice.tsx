import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  list: string[];
}

const initialState: FavoriteState = {
  list: [],
};

if (typeof window !== "undefined") {
  const favorites = sessionStorage.getItem("favorites");
  if (favorites) {
    initialState.list = JSON.parse(favorites);
  }
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<string>) => {
      const updatedList = [...state.list, action.payload];
      state.list = updatedList;
      sessionStorage.setItem("favorites", JSON.stringify(updatedList));
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const updatedList = state.list.filter((id) => id !== action.payload);
      state.list = updatedList;
      sessionStorage.setItem("favorites", JSON.stringify(updatedList));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
