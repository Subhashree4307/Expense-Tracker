import { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import { TransactionContext } from "../../../context/transactioncontext";
import {
  incomecategories,
  expensecategories,
  Incomecategories,
} from "../../../constants/categories";
const initialState = {
  amount: "",
  type: "Income",
  category: "",
  date: new Date().toISOString().slice(0, 10),
};
const NewtransactionForm = () => {
  const classes = useStyles();
  const { addTransaction } = useContext(TransactionContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.amount) return;
    if (Incomecategories.map((ic) => ic.type).includes(formData.category)) {
      setFormData({ ...formData, type: "Income" });
    } else if (
      expensecategories.map((iC) => iC.type).includes(formData.category)
    ) {
      setFormData({ ...formData, type: "Expense" });
    }
    setOpen(true);
    addTransaction({
      ...formData,
      amount: Number.formData(amount),
      id: uuidv4(),
    });
    setFormData(initialState);
  };
  
};
