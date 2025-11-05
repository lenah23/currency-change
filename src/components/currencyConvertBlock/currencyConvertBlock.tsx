import { CurrencyExchangeInput, FromToSection } from "../index";
import styles from "./currencyConvertBlock.module.scss";

interface IProps {
  inputValue: number;
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  setInputValue: (value: number) => void;
}

const CurrencyConvertBlock: React.FC<IProps> = (props: IProps) => {
  const {
    openModal,
    inputValue,
    setInputValue,
    handleOpenModal,
    handleCloseModal,
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
      />
    </div>
  );
};

export default CurrencyConvertBlock;
