import './ExpenseItem.css'
function ExpenseItem(props) {
    const m = props['date'].toLocaleString('en-US',{month: 'long'});
    const d = props['date'].toLocaleString('en-US',{day: '2-digit'})
    const y = props['date'].getFullYear()
    console.log(props)
    return (
        <div className="expense-item">
            <div>
                <div>{m}</div>
                <div>{y}</div>
                <div>{d}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props['title']}</h2>
                <div className="expense-item__price">${props['amount']}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;