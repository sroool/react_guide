import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  // const [title, updateTitle] = useState("");
  // const [amount, updateAmount] = useState("");
  // const [date, updateDate] = useState("");

  const [userInput, updateUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // updateUserInput({ ...userInput, title: event["target"]["value"] }); bad way of updating state that depends on previous state
    updateUserInput((prevState) => {
      return { ...prevState, title: event["target"]["value"] };
    });
  };
  const amountChangeHandler = (event) => {
    updateUserInput((prevState) => {
      return { ...prevState, amount: event["target"]["value"] };
    });
  };
  const dateChangeHandler = (event) => {
    updateUserInput((prevState) => {
      return { ...prevState, date: event["target"]["value"] };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = userInput;
    console.log(expenseData);
    props['onNewExpense'](expenseData)
    updateUserInput({
      title: '',
      amount: '',
      date: ''
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={userInput['title']} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput['amount']}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput['date']}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
