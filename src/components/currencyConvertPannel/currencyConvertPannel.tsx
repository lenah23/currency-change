import styles from "./currencyConvertPannel.module.scss";
import { ConversionResults, CurrencyConvertBlock } from "../index";
import UseCurrencyConvertPannelHooks from "./currencyConvertPannel.hooks";

const CurrencyConvertPannel: React.FC = () => {
  const { inputValue, setInputValue } = UseCurrencyConvertPannelHooks();

  return (
    <div className={styles["currency-convert__pannel"]}>
      <CurrencyConvertBlock inputValue={inputValue} setInputValue={setInputValue} />
      <ConversionResults />
    </div>
  );
};

export default CurrencyConvertPannel;
