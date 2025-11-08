import type { Dispatch, SetStateAction } from "react";
import { FromToInput } from "../index";
import { handleOpenModal } from "../../services/Slices/modalSlice";
import { setModalType } from "../../services/Slices/currencySlice";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { selectFromCurrency, selectToCurrency } from "../../services/Slices/selectors";
import switchIcon from "../../assets/icons/switch-icon.svg";

interface IProps {
  trigger: boolean;
  searchValue: string;
  role: "openModal" | "choseCurrency";
  setSearchValue: (value: string) => void;
  setIsSwapped: Dispatch<SetStateAction<boolean>>;
  setTrigger: (val: boolean) => void;
}

const ToSection: React.FC<IProps> = (props) => {
  const {
    role,
    trigger,
    searchValue,
    setTrigger,
    setIsSwapped,
    setSearchValue,
  } = props;

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
        label={"To"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        currencyItem={chosenToCurrency}
        role={role}
        handleClickItem={() => {
          dispatch(handleOpenModal());
          dispatch(setModalType("to"));
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
        label={"From"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        currencyItem={chosenFromCurrency}
        role={role}
        handleClickItem={() => {
          dispatch(handleOpenModal());
          dispatch(setModalType("from"));
        }}
      />
    </>
  );
};

export default ToSection;
