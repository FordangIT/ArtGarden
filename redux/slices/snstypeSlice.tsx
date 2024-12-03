import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snstype: "facebook" // 기본값 설정
};

const snstypeSlice = createSlice({
  name: "snstype",
  initialState,
  reducers: {
    setSnsType: (state, action) => {
      state.snstype = action.payload;
    }
  }
});

export const { setSnsType } = snstypeSlice.actions;
export default snstypeSlice.reducer;
