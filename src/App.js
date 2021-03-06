import React, { useState } from "react";
import Expenses from "./componets/Expenses/Expenses";
import NewExpense from "./componets/NewExpense/NewExpense";
function App() {
  let [expenses, updateExpenses] = useState([
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
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (data) => {
    console.log("In App.js");
    console.log(data);
    console.log(typeof expenses);
    updateExpenses((prevState) => [...prevState, data]);
  };
  //
  // OLD WAY OF CREATING ELEMENTS USING REACT
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "LETS GET STARTED!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
