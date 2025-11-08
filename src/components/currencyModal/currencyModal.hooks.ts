import React, { useEffect, useRef, useState } from "react";
import { handleCloseModal } from "../../services/Slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { setFromValue, setToValue } from "../../services/Slices/currencySlice";
import {
  selectFilteredCurrencies,
  selectFromToModal,
} from "../../services/Slices/selectors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const UseCurrencyModalHooks = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const itemRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  const filteredCurrencies = useAppSelector(selectFilteredCurrencies);

  itemRefs.current = filteredCurrencies.map(
    (_, i) => itemRefs.current[i] ?? React.createRef<HTMLDivElement>()
  );

  const currencyType = useAppSelector(selectFromToModal);

  const dispatch = useAppDispatch();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!filteredCurrencies.length) return;

    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prev) => (prev + 1) % filteredCurrencies.length);
        break;
      case "ArrowUp":
        setFocusedIndex(
          (prev) =>
            (prev - 1 + filteredCurrencies.length) % filteredCurrencies.length
        );
        break;
      case "Enter":
        const currency = filteredCurrencies[focusedIndex];
        if (!currency) return;
        if (currencyType === "from") {
          dispatch(setFromValue(currency));
        } else {
          dispatch(setToValue(currency));
        }
        break;
      case "Escape":
        dispatch(handleCloseModal());
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const ref = itemRefs.current[focusedIndex];
    if (
      ref &&
      ref.current &&
      typeof (ref.current as HTMLElement).focus === "function"
    ) {
      (ref.current as HTMLElement).focus();
    }
  }, [focusedIndex, filteredCurrencies]);

  return {
    itemRefs,
    fullScreen,
    focusedIndex,
    filteredCurrencies,
    setFocusedIndex,
    handleKeyDown,
  };
};

export default UseCurrencyModalHooks;
