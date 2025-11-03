import { useState } from "react";

const UseCurrencyConvertPannelHooks = () => {
  const [inputValue, setInputValue] = useState<number>(0);

  return {
    inputValue,
    setInputValue,
  };
};

export default UseCurrencyConvertPannelHooks;
