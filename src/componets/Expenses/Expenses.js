import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props["expenses"].map((e, i) => (
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
