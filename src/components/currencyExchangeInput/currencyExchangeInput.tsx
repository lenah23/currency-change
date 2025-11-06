import { useEffect } from "react";
import styles from "./currencyExchangeInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from "../../services/store";
import {
  fetchRates,
  setInverseRates,
  setRates,
} from "../../services/Slices/currencySlice";

interface IProps {
  value: number;
  setValue: (value: number) => void;
}

const CurrencyExchangeInput: React.FC<IProps> = (props: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    props.setValue(inputValue === "" ? 0 : Number(inputValue));
  };

  const fromValue = useAppSelector(
    (state: RootState) => state.currency.fromCurrency
  );
  const toValue = useAppSelector(
    (state: RootState) => state.currency.toCurrency
  );

  const rates = useAppSelector((state: RootState) => state.currency.rates);

  const RATES_CACHE_KEY = "currencyRates";
  const RATES_CACHE_TIMESTAMP_KEY = "currencyRatesTimestamp";
  const CACHE_TTL = 24 * 60 * 60 * 1000;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const now = Date.now();
    const cachedRates = localStorage.getItem(RATES_CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(RATES_CACHE_TIMESTAMP_KEY);

    const fetchAndCacheRates = async () => {
      dispatch(fetchRates(fromValue.code));

      localStorage.setItem(RATES_CACHE_KEY, JSON.stringify(rates));
      localStorage.setItem(RATES_CACHE_TIMESTAMP_KEY, now.toString());
      localStorage.setItem(
        "LAST_RATES_PAIR",
        JSON.stringify({
          from: fromValue.code,
          to: toValue.code,
        })
      );
      dispatch(setRates(rates));
    };

    if (
      !cachedRates ||
      !cachedTimestamp ||
      now - Number(cachedTimestamp) > CACHE_TTL
    ) {
      fetchAndCacheRates();
    } else {
      dispatch(setRates(JSON.parse(cachedRates)));
    }
  }, [fromValue.code, toValue.code, dispatch]);

  useEffect(() => {
    localStorage.setItem(
      "LAST_RATES_PAIR",
      JSON.stringify({
        from: fromValue.code,
        to: toValue.code,
      })
    );
  }, [fromValue, toValue]);

  return (
    <div className={styles["currency-input__container"]}>
      <label htmlFor="currency-exchange-input">Amount</label>
      <input
        id="currency-exchange-input"
        type="number"
        placeholder="Enter currency amount"
        min={0}
        onChange={handleChange}
        className={styles["currency-input"]}
        value={props.value}
      />
      <span
        className={styles["error-message"]}
        style={props.value < 0 ? { opacity: 1 } : { opacity: 0 }}
      >
        Negative numbers are not allowed
      </span>
    </div>
  );
};

export default CurrencyExchangeInput;
