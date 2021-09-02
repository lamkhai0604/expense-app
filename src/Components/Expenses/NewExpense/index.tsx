import { useState } from "react";
import { IExpenses } from "../../../data";
import ExpenseFrom from "./ExpenseForm";
import "./style.css";

interface INewExpenseProps {
  onAddExpense(ex: IExpenses): void;
}

const NewExpense = (props: INewExpenseProps) => {
  const [isEditing, setisEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData: IExpenses) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    console.log("In NewExpense.js", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Ternary condition */}
      {/* {!isEditing && <button onClick={() => setisEditting(true)}>Add New Expense</button>}
      {isEditing && <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />} */}
      {!isEditing ? (
        <button onClick={() => setisEditting(true)}>Add New Expense</button>
      ) : (
        <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel={() => setisEditting(false)} />
      )}
    </div>
  );
};

export default NewExpense;
