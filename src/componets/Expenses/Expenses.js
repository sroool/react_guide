import { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';


function Expenses(props) {
  const [filteredYear, updateFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    updateFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props["expenses"].filter((e, i)=>{
        console.log(e["date"].getFullYear(),  filteredYear);
        return filteredYear === "All" || e["date"].getFullYear() === parseInt(filteredYear);
      }).map((e, i) => (
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
