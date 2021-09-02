import { IExpenses } from "../../../data";
import ExpenseDate from "./ExpenseDate";
import "./style.css";

const ExpenselItem = ({ id, title, date, amount }: IExpenses) => {
  return (
    <div className="expense-item" key={id}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenselItem;
