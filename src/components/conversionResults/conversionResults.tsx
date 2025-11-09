import UseConversionResultsHooks from "./conversionResults.hooks";
import styles from "./conversionResults.module.scss";

interface IProps {
  inputValue: string;
}

const ConversionResults: React.FC<IProps> = (props) => {
  const { lastPair, changedResult, rates, inverseRates } =
    UseConversionResultsHooks({ inputValue: props.inputValue });

  return (
    <div className={styles["conversation-result__block"]}>
      <h2 className={styles["title"]}>Conversion result</h2>
      <div className={styles["result-block"]}>
        <div className={styles["result"]}>
          {lastPair?.to?.symbol} {changedResult?.toFixed(2)}{" "}
        </div>
        <div className={styles["from-value"]}>
          {props.inputValue ? props.inputValue : 1} {lastPair?.from?.code} ={" "}
        </div>
      </div>
      <div className={styles["exchange-info"]}>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Exchange Rate</span>
          <span className={styles["value"]}>
            1 {lastPair?.from?.code} = {rates?.[lastPair?.to?.code]?.toFixed(2)}{" "}
            {lastPair?.to?.code}
          </span>
        </div>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Inverse Rate</span>
          <span className={styles["value"]}>
            1 {lastPair?.to?.code} ={" "}
            {inverseRates?.[lastPair?.from?.code]?.toFixed(5)}{" "}
            {lastPair?.from?.code}
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
