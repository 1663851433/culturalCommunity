import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

const BaseDialog = (props) => {
  const { onClose, selectedValue, open, title } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {props.children}
    </Dialog>
  );
};

export default BaseDialog;
