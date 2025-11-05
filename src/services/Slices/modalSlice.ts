import { createSlice } from "@reduxjs/toolkit";

interface IModalStateInitState {
  openedModal: boolean;
}

const initialState: IModalStateInitState = {
  openedModal: false,
};

const currencySlice = createSlice({
  name: "currencyModal",
  initialState,
  reducers: {
    handleOpenModal(state) {
      state.openedModal = true;
    },
    handleCloseModal(state) {
      state.openedModal = false;
    },
  },
});

export const { handleOpenModal, handleCloseModal } = currencySlice.actions;
export default currencySlice.reducer;
