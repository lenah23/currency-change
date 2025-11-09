import UseCurrencyExchangeInputHooks from "./currencyExchangeInput.hooks";
import styles from "./currencyExchangeInput.module.scss";

interface IProps {
  value: string;
  setValue: (value: string) => void;
}

const CurrencyExchangeInput: React.FC<IProps> = (props: IProps) => {
  const { handleChange } = UseCurrencyExchangeInputHooks({
    setValue: props.setValue,
  });

  return (
    <div className={styles["currency-input__container"]}>
      <label htmlFor="currency-exchange-input">Amount</label>
      <input
        id="currency-exchange-input"
        type="text"
        placeholder="Enter currency amount"
        min={0}
        onChange={handleChange}
        className={styles["currency-input"]}
        value={props.value}
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        step="any"
      />
      <span
        className={styles["error-message"]}
        style={
          Number(props.value.replace(",", ".")) < 0
            ? { opacity: 1 }
            : { opacity: 0 }
        }
      >
        Negative numbers are not allowed
      </span>
    </div>
  );
};

export default CurrencyExchangeInput;
