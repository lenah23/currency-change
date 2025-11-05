import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface IProps {
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const currencyModal: React.FC<IProps> = (props: IProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={props.openModal}
        onClose={() => props.handleCloseModal()}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center", // optional: vertically center content
            justifyContent: "space-between", // optional: space out children
          }}
        >
          <h2>{"Use Google's location service?"}</h2>
          <label onClick={props.handleCloseModal}>&#10005;</label>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default currencyModal;
