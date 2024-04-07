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
import {monthLabels} from "@/app/dashboard/common"
import { Line } from "react-chartjs-2";
import { Grid, Typography } from "@mui/material";

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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: props.title,
        text: props.title,
      },
    },
  };

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "Total de este mes",
        data: props.dataArray,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],

  };

  return (<Grid item xs = {props.xs}>
    <Line options={options} data={data} />;
    </Grid>
  )
})

export default CountLineMemo;
