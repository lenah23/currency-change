import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ICurrencyDataItem } from "../../interfaces";
import { currenciesData } from "../../utils/currenciesData";
import { toast } from "react-toastify";

interface CurrencyState {
  currencyList: ICurrencyDataItem[];
  fromCurrency: ICurrencyDataItem;
  toCurrency: ICurrencyDataItem;
  fromToModal: "from" | "to" | null;
  itemClickRole: "openModal" | "choseCurrency";
  rates: Record<string, number> | undefined;
  inverseRates: Record<string, number> | undefined;
  filteredCurrencies: ICurrencyDataItem[];
}

const savedLastRatesPair = localStorage.getItem("LAST_RATES_PAIR");
const parsedLastRatesPair = savedLastRatesPair
  ? (JSON.parse(savedLastRatesPair) as {
      from: ICurrencyDataItem;
      to: ICurrencyDataItem;
    })
  : null;

const initialState: CurrencyState = {
  currencyList: currenciesData,
  fromCurrency: parsedLastRatesPair
    ? parsedLastRatesPair.from
    : currenciesData[0],
  toCurrency: parsedLastRatesPair ? parsedLastRatesPair.to : currenciesData[1],
  fromToModal: "from",
  itemClickRole: "openModal",
  rates: undefined,
  inverseRates: undefined,
  filteredCurrencies: currenciesData,
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
    setFilteredCurrencies(state, action: PayloadAction<any>) {
      state.filteredCurrencies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.rates = action.payload;
      })
      .addCase(fetchRates.rejected, () => {
        toast.error("Smt went wrong! Please, try again");
      })
      .addCase(fetchInverseRates.fulfilled, (state, action) => {
        state.inverseRates = action.payload;
      })
      .addCase(fetchInverseRates.rejected, () => {
        toast.error("Smt went wrong! Please, try again");
      });
  },
});

export const {
  setFromValue,
  setToValue,
  setModalType,
  setRates,
  setInverseRates,
  setFilteredCurrencies,
} = currencySlice.actions;
export default currencySlice.reducer;
