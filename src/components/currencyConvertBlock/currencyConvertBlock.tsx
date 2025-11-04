import { CurrencyExchangeInput, FromToSection } from "../index";
import styles from "./currencyConvertBlock.module.scss";

interface IProps {
  inputValue: number;
  setInputValue: (value: number) => void;
}

const CurrencyConvertBlock: React.FC<IProps> = (props: IProps) => {
  const { inputValue, setInputValue } = props;
  return (
    <div className={styles["currency-convert__container"]}>
      <CurrencyExchangeInput value={inputValue} setValue={setInputValue} />
      <FromToSection />
    </div>
  );
};

export default CurrencyConvertBlock;
