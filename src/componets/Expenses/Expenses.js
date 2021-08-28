import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, updateFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    updateFilteredYear(selectedYear);
  };
  let filteredExpenses = props["expenses"].filter((e, i) => {
    console.log(e["date"].getFullYear(), filteredYear);
    return (
      filteredYear === "All" ||
      e["date"].getFullYear() === parseInt(filteredYear)
    );
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && (
        <p style={{ color: "white", textAlign: "center" }}>No Items Found!</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((e, i) => (
          <ExpenseItem
            key={i}
            title={e["title"]}
            amount={e["amount"]}
            date={e["date"]}
          />
        ))}
    </Card>
  );
}

export default Expenses;
