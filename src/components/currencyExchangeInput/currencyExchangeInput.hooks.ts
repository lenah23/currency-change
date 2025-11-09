import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { selectFromCurrency, selectRates, selectToCurrency } from "../../services/Slices/selectors";
import type { RootState } from "../../services/store";
import { fetchInverseRates, fetchRates, setInverseRates, setRates } from "../../services/Slices/currencySlice";
import { toast } from "react-toastify";

interface IProps {
  setValue: (value: string) => void;
}

const UseCurrencyExchangeInputHooks = (props: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^0-9.,]/g, "");

    const dotCount = (inputValue.match(/\./g) || []).length;
    const commaCount = (inputValue.match(/,/g) || []).length;
    if (dotCount + commaCount > 1) {
      let firstSeparatorIndex = Math.max(
        inputValue.indexOf("."),
        inputValue.indexOf(",")
      );
      inputValue =
        inputValue.slice(0, firstSeparatorIndex + 1) +
        inputValue.slice(firstSeparatorIndex + 1).replace(/[.,]/g, "");
    }

    props.setValue(inputValue);
  };

  const fromValue = useAppSelector(selectFromCurrency);
  const toValue = useAppSelector(selectToCurrency);

  const rates = useAppSelector((state: RootState) => state.currency.rates);
  const inverseRates = useAppSelector(selectRates);

  const CACHE_TTL = 24 * 60 * 60 * 1000;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const now = Date.now();
    const cachedRates = localStorage.getItem("currencyRates");
    const cachedInverseRates = localStorage.getItem("InverseCurrencyRates");
    const cachedTimestamp = localStorage.getItem("currencyRatesTimestamp");

    const fetchAndCacheRates = async () => {
      try {
        await dispatch(fetchRates(fromValue?.code));
        await dispatch(fetchInverseRates(toValue?.code));

        if (rates) {
          localStorage.setItem("currencyRates", JSON.stringify(rates));
        }
        if (inverseRates) {
          localStorage.setItem(
            "InverseCurrencyRates",
            JSON.stringify(inverseRates)
          );
        }
        localStorage.setItem("currencyRatesTimestamp", now.toString());
        localStorage.setItem(
          "LAST_RATES_PAIR",
          JSON.stringify({
            from: fromValue?.code,
            to: toValue?.code,
          })
        );
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        toast.error(`Failed to fetch or cache rates: ${message}`);
      }
    };

    if (
      !cachedRates ||
      !cachedTimestamp ||
      !cachedInverseRates ||
      now - Number(cachedTimestamp) > CACHE_TTL
    ) {
      fetchAndCacheRates();
    } else {
      dispatch(fetchInverseRates(toValue?.code));
      dispatch(setRates(JSON.parse(cachedRates)));
      dispatch(setInverseRates(JSON.parse(cachedInverseRates)));
    }
  }, [fromValue?.code, toValue?.code, dispatch]);

  useEffect(() => {
    localStorage.setItem(
      "LAST_RATES_PAIR",
      JSON.stringify({
        from: fromValue,
        to: toValue,
      })
    );
  }, [fromValue, toValue]);


  return {
    handleChange, 
  };
};

export default UseCurrencyExchangeInputHooks;
