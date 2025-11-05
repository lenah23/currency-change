import { useState } from "react";
import { FromSection, ToSection } from "../index";
import type { ICurrencyDataItem } from "../../interfaces";
import styles from "./fromToSection.module.scss";

interface IProps {
  inputValue: number;
  setInputValue: (value: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredCurrencies: ICurrencyDataItem[];
}

const FromToSection: React.FC<IProps> = (props) => {
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const { searchValue, setSearchValue, filteredCurrencies } = props;

  return (
    <div className={styles["from-to-section"]}>
      {!isSwapped ? (
        <FromSection
          setIsSwapped={setIsSwapped}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filteredCurrencies={filteredCurrencies}
          role={"openModal"}
        />
      ) : (
        <ToSection
          setIsSwapped={setIsSwapped}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filteredCurrencies={filteredCurrencies}
          role={"openModal"}
        />
      )}
    </div>
  );
};

export default FromToSection;
