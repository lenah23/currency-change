import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ICurrencyDataItem } from "../../interfaces";
import { currenciesData } from "../../utils/currenciesData";

interface CurrencyState {
  currencyList: ICurrencyDataItem[];
  fromCurrency: ICurrencyDataItem;
  toCurrency: ICurrencyDataItem;
  fromToModal: "from" | "to" | null;
  itemClickRole: "openModal" | "choseCurrency";
  rates: Record<string, number> | undefined;
  inverseRates: Record<string, number> | undefined;
}

const initialState: CurrencyState = {
  currencyList: currenciesData,
  fromCurrency: currenciesData[0],
  toCurrency: currenciesData[1],
  fromToModal: "from",
  itemClickRole: "openModal",
  rates: undefined,
  inverseRates: undefined,
};

export const fetchRates = createAsyncThunk(
  "currency/fetchRates",
  async (base: string) => {
    const response = await fetch(
      `https://api.fxratesapi.com/latest?base=${base}`
    );
    const data = await response.json();
    return data.rates as Record<string, number>;
  }
);

export const fetchInverseRates = createAsyncThunk(
  "currency/fetchInverseRates",
  async (base: string) => {
    const response = await fetch(
      `https://api.fxratesapi.com/latest?base=${base}`
    );
    const data = await response.json();
    return data.rates as Record<string, number>;
  }
);

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
    setRates(state, action: PayloadAction<any>) {
      state.rates = action.payload;
    },
    setInverseRates(state, action: PayloadAction<any>) {
      state.rates = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        // state.ratesLoading = true;
        // state.ratesError = null;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        // state.ratesLoading = false;
      })
      .addCase(fetchInverseRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        // state.ratesLoading = false;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        // state.ratesLoading = false;
        // state.ratesError = action.error.message || "Failed to fetch rates";
      });
  },
});

export const {
  setFromValue,
  setToValue,
  setModalType,
  setRates,
  setInverseRates,
} = currencySlice.actions;
export default currencySlice.reducer;
