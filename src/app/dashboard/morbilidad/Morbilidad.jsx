import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutGraph from "./DonutGraph";
import axios from "axios";
import Separador from "@/components/Separador";
import InfoCard from "@/app/dashboard/morbilidad/InfoCard";

export default function Morbilidad() {
  const [percentages, setPercentages] = useState([10, 12]);
  const [graphData, setGraphData] = useState({
    labels: ["uno", "dos"],
    dataArray: [10, 20, 30, 40],
  });
  const fethcGraph = () => {
    axios.get("http://localhost:4000/visitas/ordenar").then((response) => {
      setGraphData({
        labels: response.data.map((e) => e.nombreEnfermedad),
        dataArray: response.data.map((e) => e.count),
      });
      //console.log(calculatePercentages(response.data.map((e) => parseInt(e.count))))
      setPercentages(
        calculatePercentages(response.data.map((e) => parseInt(e.count)))
      );
    });
  };
  function calculatePercentages(array) {
    const base = array.reduce((acc, value) => acc + value, 0);
    return array.map((number) => ((number / base) * 100).toFixed(2));
  }
  useEffect(() => {
    fethcGraph();
  }, []);
  return (
    <Grid container className="my-20">
      <Typography textAlign={"center"} fontSize={30} className="mx-10">
        Índice de enfermedades mas frecuentes en el ambulatorio urbano 1
        Bernardino Martínez
      </Typography>
      <Separador />
      <DonutGraph data={graphData} />
      <Grid item={7} className="flex my-10 mx-5">
        {graphData.labels.map((e, index) => (
          <InfoCard
            title={e}
            number={graphData.dataArray[index]}
            key={index}
            percentage={percentages[index]}
          />
        ))}
      </Grid>
    </Grid>
  );
}
