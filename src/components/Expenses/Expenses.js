import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from "react";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
export default Expenses;
