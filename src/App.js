import ExpenseItem from "./componets/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 294.69, date: new Date()},
    {title: 'Cat Insurance', amount: 294.69, date: new Date()}
  ];
  return (
    <div>
      <h2>LETS GET STARTED!</h2>
      {expenses.map( (e, i) => <ExpenseItem key={i} title={e['title']} amount={e['amount']} date={e['date']}></ExpenseItem>)}
     
    </div>
  );
}

export default App;
