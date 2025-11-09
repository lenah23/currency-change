import { FromToInput } from "../index";
import type { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../services/hooks";
import UseFromToSectionHooks from "./fromToSection.hooks";
import { handleOpenModal } from "../../services/Slices/modalSlice";
import { setModalType } from "../../services/Slices/currencySlice";
import switchIcon from "../../assets/icons/switch-icon.svg";

interface IProps {
  role: "openModal" | "choseCurrency";
  trigger: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
  setIsSwapped: Dispatch<SetStateAction<boolean>>;
  setTrigger: (val: boolean) => void;
}

const FromSection: React.FC<IProps> = (props) => {
  const { setIsSwapped, searchValue, setSearchValue, trigger, setTrigger } =
    props;
  const dispatch = useAppDispatch();
  const { chosenToCurrency, chosenFromCurrency, swapLastRatesPair } =
    UseFromToSectionHooks();

  return (
    <>
      <FromToInput
        setIsSwapped={setIsSwapped}
        label={"From"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        currencyItem={chosenFromCurrency}
        role={"openModal"}
        handleClickItem={() => {
          dispatch(handleOpenModal());
          dispatch(setModalType("from"));
        }}
      />
      <img
        src={switchIcon}
        onClick={() => {
          setIsSwapped((prev) => !prev);
          swapLastRatesPair();
          setTrigger(!trigger);
        }}
      />
      <FromToInput
        setIsSwapped={setIsSwapped}
        label={"To"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        currencyItem={chosenToCurrency}
        role={"openModal"}
        handleClickItem={() => {
          dispatch(handleOpenModal());
          dispatch(setModalType("to"));
        }}
      />
    </>
  );
};

export default FromSection;
