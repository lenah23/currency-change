import type { ICurrencyDataItem } from "../../interfaces";
import { CurrencyItem, CurrencyModal } from "../index";
import styles from "./fromToSection.module.scss";

interface IProps {
  setIsSwapped: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  currencyItem: ICurrencyDataItem;
  role: "openModal" | "choseCurrency";
  handleClickItem: () => void;
}

const FromToInput: React.FC<IProps> = (props) => {
  const {
    label,
    searchValue,
    setSearchValue,
    role,
    handleClickItem,
  } = props;

  return (
    <>
      <div className={styles["from-to-input"]}>
        <label className={styles["from-to-input__label"]}>{label}</label>
        <CurrencyItem
          currencyItem={props.currencyItem}
          role={role}
          handleClickItem={handleClickItem}
        />
      </div>
      <CurrencyModal
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default FromToInput;
