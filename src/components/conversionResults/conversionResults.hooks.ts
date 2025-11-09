import { useMemo } from "react";
import { useAppSelector } from "../../services/hooks";
import { selectInverseRates, selectRates } from "../../services/Slices/selectors";

interface IProps {
    inputValue: string
}

const UseConversionResultsHooks = (props: IProps) => {
  const rates = useAppSelector(selectRates);
  const inverseRates = useAppSelector(selectInverseRates);

  const lastPairRaw = localStorage.getItem("LAST_RATES_PAIR");
  const lastPair = lastPairRaw ? JSON.parse(lastPairRaw) : null;

  const changedResult = useMemo(() => {
    if (rates && lastPair.to?.code) {
      const normalizedInput = props.inputValue.replace(",", ".");
      if (
        !normalizedInput ||
        normalizedInput === "." ||
        normalizedInput === ","
      ) {
        return 0;
      }
      return parseFloat(normalizedInput) * rates[lastPair.to?.code];
    }
    return undefined;
  }, [rates, lastPair.to, lastPair.from, props.inputValue]);

  return {lastPair, changedResult, rates, inverseRates};
};

export default UseConversionResultsHooks;
