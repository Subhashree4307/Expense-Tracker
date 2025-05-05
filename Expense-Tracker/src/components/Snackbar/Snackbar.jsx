import { Snackbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from '@mui/material/Alert';
import React from "react";

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

  // Function to handle closing of the Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert severity="success" onClose={handleClose}>
        Transaction added successfully!
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomizedSnackbar;
