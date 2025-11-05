import { ConversionResults, CurrencyConvertBlock } from "../index";
import UseCurrencyConvertPannelHooks from "./currencyConvertPannel.hooks";
import styles from "./currencyConvertPannel.module.scss";

const CurrencyConvertPannel: React.FC = () => {
  const {
    openModal,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    handleOpenModal,
    handleCloseModal,
    filteredCurrencies
  } = UseCurrencyConvertPannelHooks();

  return (
    <div className={styles["currency-convert__pannel"]}>
      <CurrencyConvertBlock
        openModal={openModal}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredCurrencies={filteredCurrencies}
      />
      <ConversionResults />
    </div>
  );
};

export default CurrencyConvertPannel;
