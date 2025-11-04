import styles from "./fromToSection.module.scss";
import { CurrencyItem } from "../index";

interface IProps {
  setIsSwapped: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}

const FromToInput: React.FC<IProps> = (props) => {
  const { label } = props;
  return (
    <div className={styles["from-to-input"]}>
      <label className={styles["from-to-input__label"]}>{label}</label>
      <CurrencyItem />
    </div>
  );
};

export default FromToInput;
