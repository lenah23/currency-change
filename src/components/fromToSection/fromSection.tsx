import { FromToInput } from "../index";
import type { ICurrencyDataItem } from "../../interfaces";
import type { Dispatch, SetStateAction } from "react";
import type { RootState } from "../../services/store";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { handleOpenModal } from "../../services/Slices/modalSlice";
import { setModalType } from "../../services/Slices/currencySlice";
import switchIcon from "../../assets/icons/switch-icon.svg";

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  filteredCurrencies: ICurrencyDataItem[];
  setIsSwapped: Dispatch<SetStateAction<boolean>>;
  role: "openModal" | "choseCurrency";
}

const FromSection: React.FC<IProps> = (props) => {
  const {
    setIsSwapped,
    searchValue,
    setSearchValue,
    filteredCurrencies,
  } = props;

  const chosenFromCurrency = useAppSelector(
    (state: RootState) => state.currency.fromCurrency
  );
  const chosenToCurrency = useAppSelector(
    (state: RootState) => state.currency.toCurrency
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <FromToInput
        setIsSwapped={setIsSwapped}
        label={"From"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredCurrencies={filteredCurrencies}
        currencyItem={chosenFromCurrency}
        role={"openModal"}
        handleClickItem={() => {dispatch(handleOpenModal()); dispatch(setModalType('from'))}}
      />
      <img src={switchIcon} onClick={() => setIsSwapped((prev) => !prev)} />
      <FromToInput
        setIsSwapped={setIsSwapped}
        label={"To"}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredCurrencies={filteredCurrencies}
        currencyItem={chosenToCurrency}
        role={"openModal"}
        handleClickItem={() => {dispatch(handleOpenModal()); dispatch(setModalType('to'))}}
      />
    </>
  );
};

export default FromSection;
