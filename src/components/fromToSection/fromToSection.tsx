import { useState } from "react";
import { FromToInput } from "../index";
import switchIcon from "../../assets/icons/switch-icon.svg";
import styles from "./fromToSection.module.scss";
import type { ICurrencyDataItem } from "../../interfaces";

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
        <>
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"From"}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filteredCurrencies={filteredCurrencies}
          />
          <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"To"}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filteredCurrencies={filteredCurrencies}
          />
        </>
      ) : (
        <>
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"To"}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filteredCurrencies={filteredCurrencies}
          />
          <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"From"}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            filteredCurrencies={filteredCurrencies}
          />
        </>
      )}
    </div>
  );
};

export default FromToSection;
