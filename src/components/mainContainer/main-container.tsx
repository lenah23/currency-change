import { CurrencyConvertPannel, StatusBar } from "../index";
import styles from "./main-container.module.scss";

const ConverterMainContainer: React.FC = () => {
  return (
    <div className={styles["main-container"]}>
      <h1 className={styles["main-container__title"]}>Currency Converter</h1>
      <h3 className={styles["main-container__subtitle"]}>
        Get real-time exchange rates
      </h3>
      <StatusBar />
      <CurrencyConvertPannel />
    </div>
  );
};

export default ConverterMainContainer;
