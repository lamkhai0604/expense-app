export interface IExpenses {
    id: string;
    title: string;
    amount: number;
    date: Date
}

export const expenses: IExpenses[] = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

export interface IChartDataPoints {
  label: string;
  value: number;
};

export const chartDataPoints: IChartDataPoints[] = [
  {label: 'Jan', value: 0},
  {label: 'Feb', value: 0},
  {label: 'Mar', value: 0},
  {label: 'Apr', value: 0},
  {label: 'May', value: 0},
  {label: 'Jun', value: 0},
  {label: 'Jul', value: 0},
  {label: 'Aug', value: 0},
  {label: 'Oct', value: 0},
  {label: 'Nov', value: 0},
  {label: 'Dec', value: 0},
];