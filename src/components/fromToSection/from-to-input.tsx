import styles from "./fromToSection.module.scss";

interface IProps {
  setIsSwapped: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}

const FromToInput: React.FC<IProps> = (props) => {
  const { label } = props;
  return (
    <div className={styles["from-to-input"]}>
      <label className={styles["from-to-input__label"]}>{label}</label>
      <div className={styles["currency-info__container"]}>
        <div className={styles["currency-symbol"]}>$</div>
        <div className={styles["currency-info"]}>
          <div className={styles["currency-info__code"]}>USD</div>
          <div className={styles["currency-info__name"]}>
            United States Dollar
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromToInput;
