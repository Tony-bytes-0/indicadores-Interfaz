import React from "react";
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
import { Line } from "react-chartjs-2";
import { monthLabels } from "../common";
import Grid from "@mui/material/Grid";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function GroupBar(props) {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: true,
    plugins: {
      title: {
        display: true,
        text: props.title,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: props.firstLabel,
        data: props.firstArray,
        borderColor: props.firstBorderColor,
        backgroundColor: props.firstBackgroundColor,
        yAxisID: "y",
      },
      {
        label: props.secoundLabel,
        data: props.secoundArray,
        borderColor: props.secoundBorderColor,
        backgroundColor: props.secoundBackgroundColor,
        yAxisID: "y1",
      },
      {
        label: props.thirdLabel,
        data: props.thirdArray,
        borderColor: props.thirdBorderColor,
        backgroundColor: props.thirdBackgroundColor,
        yAxisID: "y2",
      },
    ],
  };

  return (
    <Grid item xs={props.xs}>
      <Line options={options} data={data} />;
    </Grid>
  );
}
/*
{
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
*/
