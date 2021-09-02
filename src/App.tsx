import { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/Expenses/NewExpense";
import { expenses, IExpenses } from "./data";

function App() {
  const [expensesList, setExpensesList] = useState(expenses);

  const addExpenseHandler = (expense: IExpenses) => {
    setExpensesList((prevExpenses) => [...prevExpenses, expense]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
