import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { setFilteredCurrencies } from "../../services/Slices/currencySlice";
import { selectCurrencyList } from "../../services/Slices/selectors";
import type { ICurrencyDataItem } from "../../interfaces";

const UseCurrencyConvertPannelHooks = () => {
  const [inputValue, setInputValue] = useState<string>("1");
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(searchValue);
  const currenciesData: ICurrencyDataItem[] = useAppSelector(selectCurrencyList);
  const [trigger, setTrigger] = useState<boolean>(false);
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
    trigger,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    setTrigger,
  };
};

export default UseCurrencyConvertPannelHooks;
