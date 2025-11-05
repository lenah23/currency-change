import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICurrencyDataItem } from "../../interfaces";
import { currenciesData } from "../../utils/currenciesData";

interface CurrencyState {
  currencyList: ICurrencyDataItem[];
  fromCurrency: ICurrencyDataItem;
  toCurrency: ICurrencyDataItem;
  fromToModal: "from" | "to" | null;
  itemClickRole: "openModal" | "choseCurrency";
}

const initialState: CurrencyState = {
  currencyList: currenciesData,
  fromCurrency: currenciesData[0],
  toCurrency: currenciesData[1],
  fromToModal: "from",
  itemClickRole: "openModal",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setFromValue(state, action: PayloadAction<any>) {
      state.fromCurrency = action.payload;
    },
    setToValue(state, action: PayloadAction<any>) {
      state.toCurrency = action.payload;
    },
    setModalType(state, action: PayloadAction<"from" | "to" | null>) {
      state.fromToModal = action.payload;
    },
  },
});

export const { setFromValue, setToValue, setModalType } = currencySlice.actions;
export default currencySlice.reducer;
