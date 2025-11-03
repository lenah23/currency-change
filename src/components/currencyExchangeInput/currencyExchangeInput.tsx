import styles from "./currencyExchangeInput.module.scss";

interface IProps {
  value: number;
  setValue: (value: number) => void;
}

const CurrencyExchangeInput: React.FC<IProps> = (props: IProps) => {
    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    props.setValue(inputValue === "" ? 0 : Number(inputValue));
  };

  return (
    <div className={styles["currency-input__container"]}>
      <label htmlFor="currency-exchange-input">Amount</label>
      <input
        id="currency-exchange-input"
        type="number"
        placeholder="Enter currency amount"
        min={0}
        onChange={handleChange}
        className={styles["currency-input"]}
      />
      <span
        className={styles["error-message"]}
        style={props.value < 0 ? { opacity: 1 } : { opacity: 0 }}
      >
        Negative numbers are not allowed
      </span>
    </div>
  );
};

export default CurrencyExchangeInput;
