import type { ICurrencyDataItem } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { setFromValue, setToValue } from "../../services/Slices/currencySlice";
import { CurrencyItem } from "../index";
import styles from "./currency.module.scss";
import {
  selectFromCurrency,
  selectFromToModal,
  selectToCurrency,
} from "../../services/Slices/selectors";

interface IProps {
  currencyList: ICurrencyDataItem[];
  itemRefs: React.RefObject<HTMLDivElement>[];
  focusedIndex: number;
  setFocusedIndex: (val: number) => void;
}

const CurrencyList: React.FC<IProps> = ({
  currencyList,
  itemRefs,
  focusedIndex,
  setFocusedIndex,
}) => {
  const currencyType = useAppSelector(selectFromToModal);
  const fromValue = useAppSelector(selectFromCurrency);
  const toValue = useAppSelector(selectToCurrency);
  const dispatch = useAppDispatch();

  return (
    <div className={styles["currency-list__container"]}>
      {currencyList.length > 0 ? (
        currencyList.map((currency, idx) => {
          const isSelected =
            (currencyType === "from" && fromValue?.code === currency.code) ||
            (currencyType === "to" && toValue?.code === currency.code);

          return (
            <CurrencyItem
              currencyItem={currency}
              role="choseCurrency"
              handleClickItem={() => {
                currencyType === "from"
                  ? dispatch(setFromValue(currency))
                  : dispatch(setToValue(currency));
              }}
              isSelected={isSelected}
              tabIndex={idx === focusedIndex ? 0 : -1}
              itemRef={itemRefs[idx]}
              onFocus={() => setFocusedIndex(idx)}
              isFocused={idx === focusedIndex}
            />
          );
        })
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          No currencies found
        </div>
      )}
    </div>
  );
};

export default CurrencyList;
