import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, updateIsEditing] = useState(false);
  const saveNewExpenseData = (data) => {
    const expenseData = {
      ...data,
      date: new Date(data["date"]),
      id: Math.random.toString(),
    };
    console.log(expenseData);
    props["onAddExpense"](expenseData);
    updateIsEditing(false);
  };
  const startEditingHandler = () => updateIsEditing(true);
  const stopEditingHandler = () => updateIsEditing(false);
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onNewExpense={saveNewExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
