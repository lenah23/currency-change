import { useState } from "react";
import { FromToInput } from "../index";
import switchIcon from "../../assets/icons/switch-icon.svg";
import styles from "./fromToSection.module.scss";

interface IProps {
  inputValue: number;
  openModal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  setInputValue: (value: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const FromToSection: React.FC<IProps> = (props) => {
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  const {
    openModal,
    searchValue,
    setSearchValue,
    handleOpenModal,
    handleCloseModal,
  } = props;

  return (
    <div className={styles["from-to-section"]}>
      {!isSwapped ? (
        <>
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"From"}
            openModal={openModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"To"}
            openModal={props.openModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </>
      ) : (
        <>
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"To"}
            openModal={props.openModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
          <FromToInput
            setIsSwapped={setIsSwapped}
            label={"From"}
            openModal={props.openModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </>
      )}
    </div>
  );
};

export default FromToSection;
