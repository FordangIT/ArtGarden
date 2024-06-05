import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExhinitionState {
  local: string[];
  sort: string;
}

const initialState: ExhinitionState = {
  local: [],
  sort: "latest"
};

const exhibitionSlice = createSlice({
  name: "exhibition",
  initialState,
  reducers: {
    setLocal(state, action: PayloadAction<string[]>) {
      state.local = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    }
  }
});

export const { setLocal, setSort } = exhibitionSlice.actions;

export default exhibitionSlice.reducer;
