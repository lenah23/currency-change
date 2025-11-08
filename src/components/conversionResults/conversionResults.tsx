import { useMemo } from "react";
import { useAppSelector } from "../../services/hooks";
import {
  selectInverseRates,
  selectRates,
} from "../../services/Slices/selectors";
import styles from "./conversionResults.module.scss";

interface IProps {
  inputValue: string;
  trigger: boolean;
}

const ConversionResults: React.FC<IProps> = (props) => {
  const rates = useAppSelector(selectRates);
  const inverseRates = useAppSelector(selectInverseRates);

  const lastPairRaw = localStorage.getItem("LAST_RATES_PAIR");
  const lastPair = lastPairRaw ? JSON.parse(lastPairRaw) : null;

  const changedResult = useMemo(() => {
    if (rates && lastPair.to?.code) {
      const normalizedInput = props.inputValue.replace(",", ".");
      if (
        !normalizedInput ||
        normalizedInput === "." ||
        normalizedInput === ","
      ) {
        return 0;
      }
      return parseFloat(normalizedInput) * rates[lastPair.to?.code];
    }
    return undefined;
  }, [rates, lastPair.to, lastPair.from, props.inputValue]);

  return (
    <div className={styles["conversation-result__block"]}>
      <h2 className={styles["title"]}>Conversion result</h2>
      <div className={styles["result-block"]}>
        <div className={styles["result"]}>
          {lastPair.to.symbol} {changedResult?.toFixed(2)}{" "}
        </div>
        <div className={styles["from-value"]}>
          {props.inputValue ? props.inputValue : 1} {lastPair.from.code} ={" "}
        </div>
      </div>
      <div className={styles["exchange-info"]}>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Exchange Rate</span>
          <span className={styles["value"]}>
            1 {lastPair.from.code} = {rates?.[lastPair.to.code].toFixed(2)}{" "}
            {lastPair.to.code}
          </span>
        </div>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Inverse Rate</span>
          <span className={styles["value"]}>
            1 {lastPair.to.code} ={" "}
            {inverseRates?.[lastPair.from.code].toFixed(5)} {lastPair.from.code}
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
