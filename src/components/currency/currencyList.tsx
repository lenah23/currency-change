import { CurrencyItem } from "../index";
import styles from "./currency.module.scss";

const CurrencyList: React.FC = () => {
  return (
    <div className={styles["currency-list__container"]}>
      <CurrencyItem />
    </div>
  );
};

export default CurrencyList;
