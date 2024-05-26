import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PerformanceState {
  local: string[];
  sort: string;
}

const initialState: PerformanceState = {
  local: [],
  sort: "latest"
};

const performanceSlice = createSlice({
  name: "performance",
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

export const { setLocal, setSort } = performanceSlice.actions;

export default performanceSlice.reducer;
