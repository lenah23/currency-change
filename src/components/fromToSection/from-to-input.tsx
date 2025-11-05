import type { ICurrencyDataItem } from "../../interfaces";
import { useAppDispatch } from "../../services/hooks";
import { handleOpenModal } from "../../services/Slices/modalSlice";
import { CurrencyItem, CurrencyModal } from "../index";
import styles from "./fromToSection.module.scss";

interface IProps {
  setIsSwapped: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredCurrencies: ICurrencyDataItem[]
}

const FromToInput: React.FC<IProps> = (props) => {
  const { label, searchValue, setSearchValue, filteredCurrencies } = props;
  const dispatch = useAppDispatch();
  
  return (
    <>
      <div className={styles["from-to-input"]} onClick={() => dispatch(handleOpenModal())}>
        <label className={styles["from-to-input__label"]}>{label}</label>
        {/* <CurrencyItem currencyItem={}/> */}
      </div>
      <CurrencyModal
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredCurrencies={filteredCurrencies}
      />
    </>
  );
};

export default FromToInput;
