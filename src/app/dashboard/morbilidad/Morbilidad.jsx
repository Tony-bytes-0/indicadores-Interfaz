import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutGraph from "@/app/dashboard/morbilidad/DonutGraph";
import axios from "axios";
import Separador from "@/components/Separador";
import InfoCard from "@/app/dashboard/InfoCard";

export default function Morbilidad(props) {
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
        props.calculatePercentages(response.data.map((e) => parseInt(e.count)))
      );
    });
  };

  useEffect(() => {
    fethcGraph();
  }, []);
  return (
    <Grid container className="my-10">
      <Typography textAlign={"center"} fontSize={30} className="mx-10">
        Índice de enfermedades mas frecuentes en el ambulatorio urbano 1
        Bernardino Martínez año {props.year}
      </Typography>
      <Separador />

      <DonutGraph data={graphData} xs={2}/>

      <Grid item={7} className="flex my-10 mx-5">
        {graphData.labels.map((e, index) => (
          <InfoCard
            title={e}
            number={graphData.dataArray[index]}
            key={index}
            percentage={percentages[index]}
            message={"Casos"} message2 ={"atendidos"}
          />
        ))}
      </Grid>
    </Grid>
  );
}
