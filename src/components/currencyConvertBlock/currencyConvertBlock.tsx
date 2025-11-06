import type { ICurrencyDataItem } from "../../interfaces";
import { CurrencyExchangeInput, FromToSection } from "../index";
import styles from "./currencyConvertBlock.module.scss";

interface IProps {
  inputValue: number;
  setInputValue: (value: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredCurrencies: ICurrencyDataItem[];
  setTrigger: (val: boolean) => void;
  trigger: boolean
}

const CurrencyConvertBlock: React.FC<IProps> = (props: IProps) => {
  const {
    inputValue,
    setInputValue,
    searchValue,
    setSearchValue,
    filteredCurrencies,
    setTrigger,
    trigger
  } = props;
  return (
    <div className={styles["currency-convert__container"]}>
      <CurrencyExchangeInput value={inputValue} setValue={setInputValue} />
      <FromToSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredCurrencies={filteredCurrencies}
        setTrigger={setTrigger}
        trigger={trigger}
      />
    </div>
  );
};

export default CurrencyConvertBlock;
