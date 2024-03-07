import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import axios from "axios";
import InfoCard from "@/app/dashboard/InfoCard";

function OrdenarPorEdad(props) {
  const [percentages, setPercentages] = useState([10, 12]);
  const [graphData, setGraphData] = useState({
    labels: ["datos", "estaticos"],
    dataArray: [10, 20],
  });
  function fetchData() {
    axios
      .get("http://localhost:4000/visitas/ordenarPorEdad")
      .then((response) => {
        setGraphData({
          labels: response.data.map((e) => e.age_group),
          dataArray: response.data.map((e) => e.count),
        });
        setPercentages(
          props.calculatePercentages(
            response.data.map((e) => parseInt(e.count))
          )
        );
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid item xs={6} className="my-2 m-auto">
      <DonutGraph data={graphData} xs={6} />
      <Grid item className="flex my-10 mx-5">
        {graphData.labels.map((e, index) => (
          <InfoCard
            title={graphData.labels[index]}
            key={index}
            number={graphData.dataArray[index]}
            percentage={percentages[index]}
            message={"Totales"}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default OrdenarPorEdad;