import { useState } from "react";
import { useAppSelector } from "../../services/hooks";
import { selectFromCurrency, selectToCurrency } from "../../services/Slices/selectors";

const UseFromToSectionHooks = () => {

    
  const chosenFromCurrency = useAppSelector(selectFromCurrency);
  const chosenToCurrency = useAppSelector(selectToCurrency);
   const [isSwapped, setIsSwapped] = useState<boolean>(false);

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


    return{
chosenToCurrency, chosenFromCurrency, swapLastRatesPair, isSwapped, setIsSwapped
    }
}

export default UseFromToSectionHooks