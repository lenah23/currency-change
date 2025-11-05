import type { ICurrencyDataItem } from "../../interfaces";
import type { RootState } from "../../services/store";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { setFromValue, setToValue } from "../../services/Slices/currencySlice";
import { CurrencyItem } from "../index";
import styles from "./currency.module.scss";

interface IProps {
  currencyList: ICurrencyDataItem[];
}

const CurrencyList: React.FC<IProps> = (props) => {
  const currencyType = useAppSelector(
    (state: RootState) => state.currency.fromToModal
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles["currency-list__container"]}>
      {props.currencyList.length > 0 ? (
        props.currencyList.map((currency) => (
          <CurrencyItem
            currencyItem={currency}
            role={"choseCurrency"}
            handleClickItem={() => {
              currencyType === "from"
                ? dispatch(setFromValue(currency))
                : dispatch(setToValue(currency));
            }}
          />
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
