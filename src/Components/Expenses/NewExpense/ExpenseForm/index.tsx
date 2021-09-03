import { FormEvent, SyntheticEvent, useState } from "react";
import { IExpenses } from "../../../../data";
import "./style.css";

interface IExpensesFormProps {
  onSaveExpenseData(data: IExpenses): void;
  onCancel(): void;
}

const ExpenseForm = (props: IExpensesFormProps) => {
  //   const [userInput, setUserInpt] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    // setUserInpt((prevState) => {
    //     console.log(prevState);
    //     return {...prevState, enteredTitle: e.currentTarget.value}
    // });
    setEnteredTitle(e.currentTarget.value);
  };

  const amountChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setEnteredAmount(+e.currentTarget.value);
  };

  const dateChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setEnteredDate(e.currentTarget.value);
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const expenseData: IExpenses = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-3"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
