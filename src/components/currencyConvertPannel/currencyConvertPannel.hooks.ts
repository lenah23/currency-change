import { useEffect, useMemo, useState } from "react";
import { currenciesData } from "../../utils/currenciesData";
import type { ICurrencyDataItem } from "../../interfaces";

const UseCurrencyConvertPannelHooks = () => {
  const [inputValue, setInputValue] = useState<number>(0);

  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const filteredCurrencies: ICurrencyDataItem[] = useMemo(() => {
    if (!debouncedValue) return currenciesData;
    const search = debouncedValue.toLowerCase();
    return currenciesData.filter(
      (currency) =>
        currency.name.toLowerCase().includes(search) ||
        currency.code.toLowerCase().includes(search)
    );
  }, [debouncedValue, currenciesData]);

  return {
    inputValue,
    setInputValue,
    searchValue,
    setSearchValue,
    filteredCurrencies,
  };
};

export default UseCurrencyConvertPannelHooks;
