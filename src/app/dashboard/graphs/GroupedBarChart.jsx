import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Grid } from "@mui/material";
import { monthLabels } from "../common";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function GroupedBarChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  const labels = monthLabels;

  const data = {
    labels,
    datasets: [
      {
        label: props.firstLabel,
        data: props.firstArray,
        backgroundColor: props.firstBackgroundColor,
      },
      {
        label: props.secoundLabel,
        data: props.secoundArray,
        backgroundColor: props.secoundBackgroundColor,
      },
      {
        label: props.thirdLabel,
        data: props.thirdArray,
        backgroundColor: props.thirdBackgroundColor,
      },
    ],
  };

  return (
    <Grid item xs={props.xs}>
      <Bar options={options} data={data} />
    </Grid>
  );
}
