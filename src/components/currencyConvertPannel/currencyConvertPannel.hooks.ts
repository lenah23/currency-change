import { useState } from "react";

const UseCurrencyConvertPannelHooks = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return {
    inputValue,
    setInputValue,
    openModal,
    handleCloseModal,
    handleOpenModal,
  };
};

export default UseCurrencyConvertPannelHooks;
