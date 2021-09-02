import React from "react";
import Chart from "../../Chart";
import { chartDataPoints, IExpenses } from "../../../data";

interface IExpenseChartProps {
  expenses: IExpenses[];
}

const ExpenseChart = (props: IExpenseChartProps) => {
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
