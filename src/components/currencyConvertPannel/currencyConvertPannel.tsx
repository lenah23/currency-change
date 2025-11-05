import { ConversionResults, CurrencyConvertBlock } from "../index";
import UseCurrencyConvertPannelHooks from "./currencyConvertPannel.hooks";
import styles from "./currencyConvertPannel.module.scss";

const CurrencyConvertPannel: React.FC = () => {
  const {
    inputValue,
    openModal,
    setInputValue,
    handleOpenModal,
    handleCloseModal,
  } = UseCurrencyConvertPannelHooks();

  return (
    <div className={styles["currency-convert__pannel"]}>
      <CurrencyConvertBlock
        openModal={openModal}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
      <ConversionResults />
    </div>
  );
};

export default CurrencyConvertPannel;
