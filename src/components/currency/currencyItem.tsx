import styles from "./currency.module.scss";

const CurrencyItem: React.FC = () => {
  return (
    <div className={styles["currency-info__container"]}>
      <div className={styles["currency-symbol"]}>$</div>
      <div className={styles["currency-info"]}>
        <div className={styles["currency-info__code"]}>USD</div>
        <div className={styles["currency-info__name"]}>
          United States Dollar
        </div>
      </div>
    </div>
  );
};

export default CurrencyItem;
