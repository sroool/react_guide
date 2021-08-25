import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveNewExpenseData = data => {
    const expenseData = {
      ...data,
      date:new Date(data['date']),
      id: Math.random.toString()
    };
    console.log(expenseData);
    props['onAddExpense'](expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={saveNewExpenseData}/>
    </div>
  );
}

export default NewExpense;
