import "./ExpenseDate.css";
function ExpenseDate(props) {
  const m = props["date"].toLocaleString("en-US", { month: "long" });
  const d = props["date"].toLocaleString("en-US", { day: "2-digit" });
  const y = props["date"].getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{m}</div>
      <div className="expense-date__year">{y}</div>
      <div className="expense-date__day">{d}</div>
    </div>
  );
}

export default ExpenseDate;
