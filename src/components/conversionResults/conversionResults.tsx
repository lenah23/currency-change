import { useMemo } from "react";
import { useAppSelector } from "../../services/hooks";
import type { RootState } from "../../services/store";
import styles from "./conversionResults.module.scss";

interface IProps {
  inputValue: number;
}

const ConversionResults: React.FC<IProps> = (props) => {
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

  const changedResult = useMemo(() => {
    if (rates) {
      return props.inputValue * rates[toValue.code];
    }
  }, [rates, fromValue, toValue, props.inputValue]);

  console.log(inverseRates, "inverseRates");

  return (
    <div className={styles["conversation-result__block"]}>
      <h2 className={styles["title"]}>Conversion result</h2>
      <div className={styles["result-block"]}>
        <div className={styles["result"]}>
          {toValue.symbol} {changedResult?.toFixed(2)}{" "}
        </div>
        <div className={styles["from-value"]}>
          {props.inputValue ? props.inputValue : 1} {fromValue.code} ={" "}
        </div>
      </div>
      <div className={styles["exchange-info"]}>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Exchange Rate</span>
          <span className={styles["value"]}>
            1 {fromValue.code} = {rates?.[toValue.code].toFixed(2)}{" "}
            {toValue.code}
          </span>
        </div>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Inverse Rate</span>
          <span className={styles["value"]}>
            1 {toValue.code} = {inverseRates?.[toValue.code].toFixed(2)}{" "}
            {fromValue.code}
          </span>
        </div>
      </div>
      <div className={styles["additional-info"]}>
        Rates are for informational purposes only and may not reflect real-time
        market rates
      </div>
    </div>
  );
};

export default ConversionResults;
