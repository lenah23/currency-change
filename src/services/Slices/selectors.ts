import type { RootState } from "../store";

export const selectCurrencyList = (state: RootState) =>
  state.currency.currencyList;
export const selectFromCurrency = (state: RootState) =>
  state.currency.fromCurrency;
export const selectToCurrency = (state: RootState) => state.currency.toCurrency;
export const selectFromToModal = (state: RootState) =>
  state.currency.fromToModal;
export const selectItemClickRole = (state: RootState) =>
  state.currency.itemClickRole;
export const selectRates = (state: RootState) => state.currency.rates;
export const selectInverseRates = (state: RootState) =>
  state.currency.inverseRates;
export const selectFilteredCurrencies = (state: RootState) =>
  state.currency.filteredCurrencies;
export const selectCurrencyModal = (state: RootState) => state.currencyModal.openedModal
