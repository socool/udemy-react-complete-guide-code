import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");
  const expenses = props.expenses;

  const filterChangeHandler = (selectedYear) => {
    console.log("in Expenses.js");
    console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
