import { useState } from "react";
import { FromSection, ToSection } from "../index";
import type { ICurrencyDataItem } from "../../interfaces";
import styles from "./fromToSection.module.scss";

interface IProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredCurrencies: ICurrencyDataItem[];
  setTrigger: (val: boolean) => void;
  trigger: boolean
}

const FromToSection: React.FC<IProps> = (props) => {
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const { searchValue, setSearchValue, filteredCurrencies, trigger } = props;

  return (
    <div className={styles["from-to-section"]}>
      {!isSwapped ? (
        <FromSection
          setIsSwapped={setIsSwapped}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filteredCurrencies={filteredCurrencies}
          role={"openModal"}
          setTrigger={props.setTrigger}
          trigger={trigger}
        />
      ) : (
        <ToSection
          setIsSwapped={setIsSwapped}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filteredCurrencies={filteredCurrencies}
          role={"openModal"}
          setTrigger={props.setTrigger}
          trigger={trigger}
        />
      )}
    </div>
  );
};

export default FromToSection;
