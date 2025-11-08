import { useEffect, useState } from "react";
import type { ICurrencyDataItem } from "../../interfaces";
import type { RootState } from "../../services/store";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { setFilteredCurrencies } from "../../services/Slices/currencySlice";

const UseCurrencyConvertPannelHooks = () => {
  const [inputValue, setInputValue] = useState<string>("1");
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(searchValue);
  const currenciesData: ICurrencyDataItem[] = useAppSelector(
    (state: RootState) => state.currency.currencyList
  );
  const [trigger, setTrigger] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  useEffect(() => {
    const search = debouncedValue.toLowerCase();
    const filteredData = currenciesData.filter(
      (currency) =>
        currency.name.toLowerCase().includes(search) ||
        currency.code.toLowerCase().includes(search)
    );
    dispatch(setFilteredCurrencies(filteredData));
  }, [debouncedValue, currenciesData]);

  return {
    inputValue,
    setInputValue,
    searchValue,
    setSearchValue,
    setTrigger,
    trigger,
  };
};

export default UseCurrencyConvertPannelHooks;
