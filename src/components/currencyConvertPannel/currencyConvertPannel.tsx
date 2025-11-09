import { ConversionResults, CurrencyConvertBlock } from "../index";
import UseCurrencyConvertPannelHooks from "./currencyConvertPannel.hooks";
import styles from "./currencyConvertPannel.module.scss";

const CurrencyConvertPannel: React.FC = () => {
  const {
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    setTrigger,
    trigger,
  } = UseCurrencyConvertPannelHooks();

  return (
    <div className={styles["currency-convert__pannel"]}>
      <CurrencyConvertBlock
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setTrigger={setTrigger}
        trigger={trigger}
      />
      <ConversionResults inputValue={inputValue} />
    </div>
  );
};

export default CurrencyConvertPannel;
