import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Typography,
  makeStyles,
  IconButton,
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionTable from "./components/TransactionTable";
import Summary from "./components/Summary";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: "auto",
  },
  summary: {
    marginTop: "30px",
  },
  income: {
    color: "#4CAF50",
  },
  expense: {
    color: "#F44336",
  },
  netIncome: {
    fontWeight: "bold",
  },
  positive: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  negative: {
    color: "#F44336",
    fontWeight: "bold",
  },
}));

function App() {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Expense Tracker</Typography>
          <IconButton
            className={classes.button}
            color="inherit"
            onClick={handleThemeChange}
          >
            {darkTheme ? <WbSunnyIcon /> : <Brightness3Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          Add Transaction
        </Typography>
        <AddTransactionForm setTransactions={setTransactions} />
        <Typography variant="h4" className={classes.header}>
          Transactions
        </Typography>
        <TransactionTable
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <Typography variant="h4" className={classes.header}>
          Summary
        </Typography>
        <Summary transactions={transactions} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
