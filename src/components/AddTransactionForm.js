import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  formControl: {
    minWidth: "120px",
  },
});

function AddTransactionForm({ setTransactions }) {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: Date.now(), description, amount: parseFloat(amount), type },
    ]);
    setDescription("");
    setAmount("");
    setType("");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)} required>
          <MenuItem value="expense">Expense</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Transaction
      </Button>
    </form>
  );
}

export default AddTransactionForm;
