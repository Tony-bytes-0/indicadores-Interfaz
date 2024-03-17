import { Grid } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

Chartjs.register(ArcElement, Tooltip, Legend);

export default function DonutGraph(props) {
  const data = {
    labels: props.data.labels,
    datasets: [
      {
        label: 'Total de casos',
        data: props.data.dataArray,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(123, 245, 136, 0.2)",
          "rgba(129, 123, 245, 1)",

        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255,99,132,1)",
          "rgba(75, 192, 192, 1)",
          "rgba(123, 245, 136, 1)",
          "rgba(129, 123, 245, 1)",

        ],
      },
    ],
  }

  return (
    <Grid item xs={props.xs} className={"my-10 flex" + props.GridClass}>
      <Doughnut data={data} className="flex" />
    </Grid>
  );
}
