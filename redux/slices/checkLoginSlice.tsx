import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false
};

const checkLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const { logIn, logOut } = checkLoginSlice.actions;
export default checkLoginSlice.reducer;
