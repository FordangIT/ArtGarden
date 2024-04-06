import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectState {
  best: string;
  new: string;
  review: string;
}
const initialState: SelectState = {
  best: "Best공연",
  new: "New공연",
  review: "Review공연",
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    updateBest: (state, action: PayloadAction<string>) => {
      state.best = action.payload;
    },
    updateNew: (state, action: PayloadAction<string>) => {
      state.new = action.payload;
    },
    updateReview: (state, action: PayloadAction<string>) => {
      state.review = action.payload;
    },
  },
});

export const { updateBest, updateNew, updateReview } = selectSlice.actions;
