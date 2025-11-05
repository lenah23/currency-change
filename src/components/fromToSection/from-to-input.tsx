import { CurrencyItem, CurrencyModal } from "../index";
import styles from "./fromToSection.module.scss";

interface IProps {
  setIsSwapped: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const FromToInput: React.FC<IProps> = (props) => {
  const { label, handleOpenModal, handleCloseModal, searchValue, setSearchValue } = props;
  return (
    <>
      <div className={styles["from-to-input"]} onClick={handleOpenModal}>
        <label className={styles["from-to-input__label"]}>{label}</label>
        <CurrencyItem />
      </div>
      <CurrencyModal
        openModal={props.openModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default FromToInput;
