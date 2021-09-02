import { useState } from "react";
import Card from "../UI/Card";
import ExpenselItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { IExpenses } from "../../data";
import "./style.css";

interface IExpensesProps {
  items: IExpenses[];
}

const Expenses = ({ items }: IExpensesProps) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseChart expenses={filteredExpenses} />
      
      {filteredExpenses.length === 0 ? (
        <p style={{ color: "white" }}>No expenses found.</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenselItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
