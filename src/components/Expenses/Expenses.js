import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");
  const expenses = props.expenses;

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  /*
  let filterInfoText = "2019,2021 & 2022";

  if (filterYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filterYear === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (filterYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }
  */

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
        <p>Data for years filterInfoText is hidden.</p>
        {filterExpenses.map((expense) => (
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
