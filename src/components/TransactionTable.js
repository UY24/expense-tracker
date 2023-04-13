import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TransactionTable({ transactions, setTransactions }) {
  const classes = useStyles();

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const editTransaction = (id) => {
    // Implement the edit functionality here
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell component="th" scope="row">
              {transaction.description}
            </TableCell>
            <TableCell align="right">{transaction.amount.toFixed(2)}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>
              <IconButton onClick={() => editTransaction(transaction.id)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TransactionTable;

