import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import searchIcon from "../../assets/icons/search-icon.svg";
import { CurrencyList } from "../index";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from "../../services/store";
import { handleCloseModal } from "../../services/Slices/modalSlice";
import UseCurrencyModalHooks from "./currencyModal.hooks";
import styles from "./currencyModal.module.scss";

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const currencyModal: React.FC<IProps> = (props: IProps) => {
  const {
    fullScreen,
    handleKeyDown,
    filteredCurrencies,
    itemRefs,
    focusedIndex,
    setFocusedIndex,
  } = UseCurrencyModalHooks();

  const { searchValue, setSearchValue } = props;

  const openModal = useAppSelector(
    (state: RootState) => state.currencyModal.openedModal
  );

  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={() => dispatch(handleCloseModal())}
        onKeyDown={handleKeyDown}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          style: {
            maxWidth: "440px",
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          <div className={styles["title-container"]}>
            <h2 className={styles["title"]}>{"Select currency"}</h2>
            <label onClick={() => dispatch(handleCloseModal())}>&#10005;</label>
          </div>
          <h4 className={styles["subtitle"]}>
            Choose a currency from the list below or use the search bar to find
            a specific currency.
          </h4>
          <div style={{ position: "relative", width: "100%" }}>
            <span className={styles["search-icon__container"]}>
              <img src={searchIcon} alt="Search" width={18} height={18} />
            </span>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search currency..."
              className={styles["search-currency__input"]}
              onKeyDown={handleKeyDown}
            />
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={styles["currencyLst"]}>
              <CurrencyList
                currencyList={filteredCurrencies}
                itemRefs={itemRefs.current}
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
              />
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default currencyModal;
