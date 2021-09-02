import React from "react";
import ChartBar from "./ChartBar";
import { IChartDataPoints } from "../../data";
import "./style.css";

interface IChartProps {
  dataPoints: IChartDataPoints[];
}

const Chart = (props: IChartProps) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dtPoint) => (
        <ChartBar
          key={dtPoint.label}
          value={dtPoint.value}
          maxValue={totalMaximum}
          label={dtPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
