import { FromSection, ToSection } from "../index";
import styles from "./fromToSection.module.scss";
import UseFromToSectionHooks from "./fromToSection.hooks";

interface IProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  setTrigger: (val: boolean) => void;
  trigger: boolean;
}

const FromToSection: React.FC<IProps> = (props) => {
  const { searchValue, setSearchValue, trigger } = props;
  const { isSwapped, setIsSwapped } = UseFromToSectionHooks();

  return (
    <div className={styles["from-to-section"]}>
      {!isSwapped ? (
        <FromSection
          setIsSwapped={setIsSwapped}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          role={"openModal"}
          setTrigger={props.setTrigger}
          trigger={trigger}
        />
      ) : (
        <ToSection
          setIsSwapped={setIsSwapped}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          role={"openModal"}
          setTrigger={props.setTrigger}
          trigger={trigger}
        />
      )}
    </div>
  );
};

export default FromToSection;
