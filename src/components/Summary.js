import React from "react";

function Summary({ transactions }) {
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomes = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const netIncome = totalIncomes - totalExpenses;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Expenses: {totalExpenses.toFixed(2)}</p>
      <p>Total Incomes: {totalIncomes.toFixed(2)}</p>
      <p>Net Income: {netIncome.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
