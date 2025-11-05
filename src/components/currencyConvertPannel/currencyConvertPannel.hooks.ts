import { useEffect, useState } from "react";

const UseCurrencyConvertPannelHooks = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Debounced search:", debouncedValue);
    }
  }, [debouncedValue]);

  return {
    inputValue,
    setInputValue,
    openModal,
    handleCloseModal,
    handleOpenModal,
    searchValue,
    setSearchValue,
  };
};

export default UseCurrencyConvertPannelHooks;
