import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditTransactionForm from "./EditTransactionForm";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(2),
  },
}));

function TransactionTable({ transactions, setTransactions }) {
  const classes = useStyles();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editTransaction, setEditTransaction] = useState(null);

  const handleDelete = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const handleEdit = (transaction) => {
    setEditTransaction(transaction);
    setEditDialogOpen(true);
  };

  const handleClose = () => {
    setEditTransaction(null);
    setEditDialogOpen(false);
  };

  const handleUpdate = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
    handleClose();
  };

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(transaction)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(transaction.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditTransactionForm
        open={editDialogOpen}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
        transaction={editTransaction}
      />
    </div>
  );
}

export default TransactionTable;
