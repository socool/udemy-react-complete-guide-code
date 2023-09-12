import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;
  const expenses = props.expenses;
  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } else {
    expensesContent = (
      <h2 className="expenses-list__fallback">No expenses found.</h2>
    );
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
