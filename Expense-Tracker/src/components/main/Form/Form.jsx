import { useState, useContext } from "react";
import { useSpeechContext } from "@speechly/react-client";
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
  const { segment } = useSpeechContext();
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

  // voice recognition//
  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((s) => {
        const category = `${s.value.charAt(0)}${s.value
          .slice(1)
          .toLowerCase()}`;

        switch (s.type) {
          case "amount":
            setFormData({ ...formData, amount: s.value });
            break;
          case "category":
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: "Income", category });
            } else if (
              expenseCategories.map((iC) => iC.type).includes(category)
            ) {
              setFormData({ ...formData, type: "Expense", category });
            }
            break;
          case "date":
            setFormData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        createTransaction();
      }
    }
  }, [segment]);
  const selectedCategories =
    formData.type === "Income" ? Incomecategories : expensecategories;
  return (
    <Grid container spacing={2}>
      <Snackbar open={open} setOpen={setOpen}></Snackbar>
      <Grid item xs={6}>
        <Formcontrol fullWidth>
          <InputLabel>Type</InputLabel>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            //dropdown for type of transaction//
            <Menuitem value="Income">Income</Menuitem>
            <Menuitem value="Expense">Expense</Menuitem>
          </select>
        </Formcontrol>
      </Grid>
      <Grid item xs={6}>
        <select value={formData.category}>
          onChange=
          {(e) => setFormData({ ...formData, category: e.target.value })}
          //dropdown for category of transaction//
          {selectedCategories.map((category) => (
            <MenuItem key={category.type} value={category.type}>
              {category.type}
            </MenuItem>
          ))}
        </select>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      <GRID item xs={6}>
        <TextField>
          label="Date" type="date" value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        </TextField>
      </GRID>
      <BUtton
      className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}>
Create
      </BUtton>
    </Grid>
  );
};
export default NewtransactionForm;
