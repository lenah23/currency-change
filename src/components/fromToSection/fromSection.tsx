import { FromToInput } from "../index";
import type { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { handleOpenModal } from "../../services/Slices/modalSlice";
import { setModalType } from "../../services/Slices/currencySlice";
import switchIcon from "../../assets/icons/switch-icon.svg";
import {
  selectFromCurrency,
  selectToCurrency,
} from "../../services/Slices/selectors";

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

  const chosenFromCurrency = useAppSelector(selectFromCurrency);
  const chosenToCurrency = useAppSelector(selectToCurrency);

  const dispatch = useAppDispatch();

  const swapLastRatesPair = () => {
    const pairStr = localStorage.getItem("LAST_RATES_PAIR");
    if (!pairStr) return;

    try {
      const pair = JSON.parse(pairStr);
      const swappedPair = {
        from: pair.to,
        to: pair.from,
      };
      localStorage.setItem("LAST_RATES_PAIR", JSON.stringify(swappedPair));
    } catch (e) {
      localStorage.removeItem("LAST_RATES_PAIR");
    }
  };

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
