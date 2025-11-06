import type { ICurrencyDataItem } from "../../interfaces";
import styles from "./currency.module.scss";

interface IProps {
  currencyItem: ICurrencyDataItem;
  role: "openModal" | "choseCurrency";
  handleClickItem: () => void;
  isSelected?: boolean;
}

const CurrencyItem: React.FC<IProps> = (props) => {
  return (
    <div
      onClick={props.handleClickItem}
      className={styles["currency-item__container"]}
      style={
        props.role === "choseCurrency" && props.isSelected
          ? { backgroundColor: "rgba(245, 245, 245, 1)" }
          : {}
      }
    >
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
      {props.role === "choseCurrency" && props.isSelected && (
        <div style={{ color: "rgba(43, 127, 255, 1)" }}>✔</div>
      )}
    </div>
  );
};

export default CurrencyItem;
