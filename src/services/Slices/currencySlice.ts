import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {}

const initialState: CurrencyState = {};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    // setSelectedCurrency(state, action: PayloadAction<any>) {
    //   state.selectedCurrency = action.payload;
    // },
    // clearSelectedCurrency(state) {
    //   state.selectedCurrency = null;
    // },
  },
});

export const {} = currencySlice.actions;
export default currencySlice.reducer;
