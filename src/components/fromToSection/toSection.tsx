import { FromToInput } from "../index";
import type { Dispatch, SetStateAction } from "react";
import type { RootState } from "../../services/store";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { handleOpenModal } from "../../services/Slices/modalSlice";
import { setModalType } from "../../services/Slices/currencySlice";
import switchIcon from "../../assets/icons/switch-icon.svg";

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  setIsSwapped: Dispatch<SetStateAction<boolean>>;
  role: "openModal" | "choseCurrency";
  setTrigger: (val: boolean) => void;
  trigger: boolean;
}

const ToSection: React.FC<IProps> = (props) => {
  const {
    setIsSwapped,
    searchValue,
    setSearchValue,
    role,
    setTrigger,
    trigger,
  } = props;

  const chosenFromCurrency = useAppSelector(
    (state: RootState) => state.currency.fromCurrency
  );
  const chosenToCurrency = useAppSelector(
    (state: RootState) => state.currency.toCurrency
  );
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
