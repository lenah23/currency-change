// import { useEffect } from "react";
// import styles from "./currencyExchangeInput.module.scss";
// import { useAppDispatch, useAppSelector } from "../../services/hooks";
// import type { RootState } from "../../services/store";
// import {
//   fetchInverseRates,
//   fetchRates,
//   setInverseRates,
//   setRates,
// } from "../../services/Slices/currencySlice";

// interface IProps {
//   value: number;
//   setValue: (value: number) => void;
// }

// const CurrencyExchangeInput: React.FC<IProps> = (props: IProps) => {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = event.target.value;
//     props.setValue(inputValue === "" ? 0 : Number(inputValue));
//   };

//   const fromValue = useAppSelector(
//     (state: RootState) => state.currency.fromCurrency
//   );
//   const toValue = useAppSelector(
//     (state: RootState) => state.currency.toCurrency
//   );

//   const rates = useAppSelector((state: RootState) => state.currency.rates);
//   const inverseRates = useAppSelector(
//     (state: RootState) => state.currency.inverseRates
//   );

//   const CACHE_TTL = 24 * 60 * 60 * 1000;
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const now = Date.now();
//     const cachedRates = localStorage.getItem("currencyRates");
//     const cachedInverseRates = localStorage.getItem("InverseCurrencyRates");
//     const cachedTimestamp = localStorage.getItem("currencyRatesTimestamp");

//     const fetchAndCacheRates = async () => {
//       dispatch(fetchRates(fromValue.code));
//       dispatch(fetchInverseRates(toValue.code));

//       if (rates) {
//         localStorage.setItem("currencyRates", JSON.stringify(rates));
//       }
//       if (inverseRates) {
//         localStorage.setItem("InverseCurrencyRates", JSON.stringify(rates));
//       }
//       localStorage.setItem("currencyRatesTimestamp", now.toString());
//       localStorage.setItem(
//         "LAST_RATES_PAIR",
//         JSON.stringify({
//           from: fromValue.code,
//           to: toValue.code,
//         })
//       );
//     };

//     if (
//       !cachedRates ||
//       !cachedTimestamp ||
//       !cachedInverseRates ||
//       now - Number(cachedTimestamp) > CACHE_TTL
//     ) {
//       fetchAndCacheRates();
//     } else {
//       dispatch(fetchInverseRates(toValue.code));
//       dispatch(setRates(JSON.parse(cachedRates)));
//       dispatch(setInverseRates(JSON.parse(cachedInverseRates)));
//     }
//   }, [fromValue.code, toValue.code, dispatch]);

//   useEffect(() => {
//     localStorage.setItem(
//       "LAST_RATES_PAIR",
//       JSON.stringify({
//         from: fromValue,
//         to: toValue,
//       })
//     );
//   }, [fromValue, toValue]);

//   return (
//     <div className={styles["currency-input__container"]}>
//       <label htmlFor="currency-exchange-input">Amount</label>
//       <input
//         id="currency-exchange-input"
//         type="number"
//         placeholder="Enter currency amount"
//         min={0}
//         onChange={handleChange}
//         className={styles["currency-input"]}
//         value={props.value}
//         step="any"
//       />
//       <span
//         className={styles["error-message"]}
//         style={props.value < 0 ? { opacity: 1 } : { opacity: 0 }}
//       >
//         Negative numbers are not allowed
//       </span>
//     </div>
//   );
// };

// export default CurrencyExchangeInput;

import { useEffect } from "react";
import styles from "./currencyExchangeInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from "../../services/store";
import {
  fetchInverseRates,
  fetchRates,
  setInverseRates,
  setRates,
} from "../../services/Slices/currencySlice";

interface IProps {
  value: string;
  setValue: (value: string) => void;
}

const CurrencyExchangeInput: React.FC<IProps> = (props: IProps) => {
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

  const fromValue = useAppSelector(
    (state: RootState) => state.currency.fromCurrency
  );
  const toValue = useAppSelector(
    (state: RootState) => state.currency.toCurrency
  );

  const rates = useAppSelector((state: RootState) => state.currency.rates);
  const inverseRates = useAppSelector(
    (state: RootState) => state.currency.inverseRates
  );

  const CACHE_TTL = 24 * 60 * 60 * 1000;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const now = Date.now();
    const cachedRates = localStorage.getItem("currencyRates");
    const cachedInverseRates = localStorage.getItem("InverseCurrencyRates");
    const cachedTimestamp = localStorage.getItem("currencyRatesTimestamp");

    const fetchAndCacheRates = async () => {
      dispatch(fetchRates(fromValue.code));
      dispatch(fetchInverseRates(toValue.code));

      if (rates) {
        localStorage.setItem("currencyRates", JSON.stringify(rates));
      }
      if (inverseRates) {
        localStorage.setItem("InverseCurrencyRates", JSON.stringify(rates));
      }
      localStorage.setItem("currencyRatesTimestamp", now.toString());
      localStorage.setItem(
        "LAST_RATES_PAIR",
        JSON.stringify({
          from: fromValue.code,
          to: toValue.code,
        })
      );
    };

    if (
      !cachedRates ||
      !cachedTimestamp ||
      !cachedInverseRates ||
      now - Number(cachedTimestamp) > CACHE_TTL
    ) {
      fetchAndCacheRates();
    } else {
      dispatch(fetchInverseRates(toValue.code));
      dispatch(setRates(JSON.parse(cachedRates)));
      dispatch(setInverseRates(JSON.parse(cachedInverseRates)));
    }
  }, [fromValue.code, toValue.code, dispatch]);

  useEffect(() => {
    localStorage.setItem(
      "LAST_RATES_PAIR",
      JSON.stringify({
        from: fromValue,
        to: toValue,
      })
    );
  }, [fromValue, toValue]);

  return (
    <div className={styles["currency-input__container"]}>
      <label htmlFor="currency-exchange-input">Amount</label>
      <input
        id="currency-exchange-input"
        type="text"
        placeholder="Enter currency amount"
        min={0}
        onChange={handleChange}
        className={styles["currency-input"]}
        value={props.value}
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        step="any"
      />
      <span
        className={styles["error-message"]}
        style={
          Number(props.value.replace(",", ".")) < 0
            ? { opacity: 1 }
            : { opacity: 0 }
        }
      >
        Negative numbers are not allowed
      </span>
    </div>
  );
};

export default CurrencyExchangeInput;
