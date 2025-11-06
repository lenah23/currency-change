import styles from "./conversionResults.module.scss";

const ConversionResults: React.FC = () => {
  return (
    <div className={styles["conversation-result__block"]}>
      <h2 className={styles["title"]}>Conversion result</h2>
      <div className={styles["result-block"]}>
        <div className={styles["result"]}>€0.92</div>
        <div className={styles["from-value"]}>1 USD = </div>
      </div>
      <div className={styles["exchange-info"]}>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Exchange Rate</span>
          <span className={styles["value"]}>1 USD = 0.920000 EUR</span>
        </div>
        <div className={styles["exchange-pair"]}>
          <span className={styles["label"]}>Inverse Rate</span>
          <span className={styles["value"]}>1 EUR = 1.086957 USD</span>
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
