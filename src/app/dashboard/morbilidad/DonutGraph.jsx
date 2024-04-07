import { Grid } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Title, Legend } from "chart.js";

Chartjs.register(ArcElement, Tooltip, Legend, Legend, Title, Legend);

export default function DonutGraph(props) {
  const graphColors = {
    backgroundColor :[
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 99, 132, 0.5)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(123, 245, 136, 0.2)",
      "rgba(129, 123, 245, 1)",
    ],
    borderColor:[
      "rgba(54, 162, 235, 1)",
      "rgba(255,99,132,1)",
      "rgba(75, 192, 192, 1)",
      "rgba(123, 245, 136, 1)",
      "rgba(129, 123, 245, 1)",
    ]
  }
  function asingBackground() {
    if(props.backgroundColor !== undefined && props.borderColor !== undefined){
      graphColors.backgroundColor = props.backgroundColor;
      graphColors.borderColor = props.borderColor;
    }
  }
  asingBackground();
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
    labels: props.data.labels,
    datasets: [
      {
        label: "Total de casos",
        data: props.data.dataArray,
        backgroundColor: graphColors.backgroundColor,
        borderColor: graphColors.borderColor,
      },
    ],
  };

  return (
    <Grid item xs={props.xs} className={"my-10 flex" + props.GridClass}>
      <Doughnut data={data} options={options} className="flex" />
    </Grid>
  );
}
