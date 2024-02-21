"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
const CountLineMemo = React.memo(function CountLine(props) {

  const totalCount = useSelector((state) => state.totalCount);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Indice variacion en la atencion ciudadana en el ambulatorio urbano 1 Bernardino Martínez",
      },
    },
  };

  const data = {
    labels: props.monthLabels,
    datasets: [
      {
        label: "Total de este mes",
        data: totalCount,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],

  };

  return <Line options={options} data={data} />;
})

export default CountLineMemo;
