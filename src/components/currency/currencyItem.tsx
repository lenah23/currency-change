import type { ICurrencyDataItem } from "../../interfaces";
import styles from "./currency.module.scss";

interface IProps {
  currencyItem: ICurrencyDataItem;
  role: "openModal" | "choseCurrency";
  handleClickItem: () => void;
}

const CurrencyItem: React.FC<IProps> = (props) => {
  return (
    <div onClick={props.handleClickItem}>
      <div className={styles["currency-info__container"]}>
        <div className={styles["currency-symbol"]}>
          {props?.currencyItem?.symbol}
        </div>
        <div className={styles["currency-info"]}>
          <div className={styles["currency-info__code"]}>
            {props?.currencyItem?.code}
          </div>
          <div className={styles["currency-info__name"]}>
            {props?.currencyItem?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyItem;
