import type { ICurrencyDataItem } from "../../interfaces";
import { CurrencyExchangeInput, FromToSection } from "../index";
import styles from "./currencyConvertBlock.module.scss";

interface IProps {
  inputValue: number;
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  setInputValue: (value: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredCurrencies: ICurrencyDataItem[]
}

const CurrencyConvertBlock: React.FC<IProps> = (props: IProps) => {
  const {
    openModal,
    inputValue,
    setInputValue,
    handleOpenModal,
    handleCloseModal,
    searchValue,
    setSearchValue,
    filteredCurrencies
  } = props;
  return (
    <div className={styles["currency-convert__container"]}>
      <CurrencyExchangeInput value={inputValue} setValue={setInputValue} />
      <FromToSection
        openModal={openModal}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredCurrencies={filteredCurrencies}
      />
    </div>
  );
};

export default CurrencyConvertBlock;
