import React from "react";
import type { ICurrencyDataItem } from "../../interfaces";
import styles from "./currency.module.scss";

interface IProps {
  tabIndex?: number;
  isFocused?: boolean;
  isSelected?: boolean;
  currencyItem: ICurrencyDataItem;
  handleClickItem: () => void;
  onFocus?: () => void;
  itemRef?: React.RefObject<HTMLDivElement>;
  role: "openModal" | "choseCurrency";
}

const CurrencyItem: React.FC<IProps> = ({
  role,
  itemRef,
  tabIndex,
  isFocused,
  isSelected,
  currencyItem,
  handleClickItem,
  onFocus,
}) => {
  return (
    <div
      ref={itemRef}
      tabIndex={tabIndex}
      onClick={handleClickItem}
      onFocus={onFocus}
      className={styles["currency-item__container"]}
      style={{
        backgroundColor:
          role === "choseCurrency" && isFocused
            ? "rgba(245, 245, 245, 1)"
            : undefined,
        cursor: "pointer",
      }}
    >
      <div className={styles["currency-info__container"]}>
        <div className={styles["currency-symbol"]}>{currencyItem?.symbol}</div>
        <div className={styles["currency-info"]}>
          <div className={styles["currency-info__code"]}>
            {currencyItem?.code}
          </div>
          <div className={styles["currency-info__name"]}>
            {currencyItem?.name}
          </div>
        </div>
      </div>
      {role === "choseCurrency" && isSelected && (
        <div style={{ color: "rgba(43, 127, 255, 1)" }}>✔</div>
      )}
    </div>
  );
};

export default CurrencyItem;
