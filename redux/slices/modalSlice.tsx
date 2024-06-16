import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  message: string;
  buttonText: string;
  link: string;
}

const initialState: ModalState = {
  isOpen: false,
  message: "",
  buttonText: "",
  link: ""
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        message: string;
        buttonText: string;
        link: string;
      }>
    ) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.buttonText = action.payload.buttonText;
      state.link = action.payload.link;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.message = "";
      state.buttonText = "";
      state.link = "";
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
