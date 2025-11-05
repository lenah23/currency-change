import type { ICurrencyDataItem } from "../../interfaces";
import { CurrencyItem } from "../index";
import styles from "./currency.module.scss";

interface IProps {
  currencyList: ICurrencyDataItem[];
}

const CurrencyList: React.FC<IProps> = (props) => {
  return (
    <div className={styles["currency-list__container"]}>
      {props.currencyList.length > 0 ? (
        props.currencyList.map((currency) => (
          <CurrencyItem currencyItem={currency} active={true}/>
        ))
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          No currencies found
        </div>
      )}
    </div>
  );
};

export default CurrencyList;
