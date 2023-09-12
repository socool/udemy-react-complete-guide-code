import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

function App() {
  //const para = document.createElement("h1");
  //para.textContent = "Exercise done!";
  //document.getElementById("root").appendChild(para);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };

  //need at least 1 element
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
  /*
    React.createElement(
      "div",
      {},
      React.createElement(NewExpense),
      React.createElement(Expenses, { expenses })
    );
    */
}

export default App;
