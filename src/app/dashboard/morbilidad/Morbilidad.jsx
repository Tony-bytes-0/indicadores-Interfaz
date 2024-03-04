import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutGraph from "./DonutGraph";
import axios from "axios";
import Separador from "@/components/Separador";

export default function Morbilidad() {
  const [GraphData, setGraphData] = useState({
    labels: ["uno", "dos"],
    dataArray: [10, 20, 30, 40],
  });
  const fethcGraph = () => {
    axios.get("http://localhost:4000/visitas/ordenar").then((response) => {
      setGraphData({
        labels: response.data.map((e) => e.nombreEnfermedad),
        dataArray: response.data.map((e) => e.count),
      });
    });
  };
  useEffect(() => {
    fethcGraph();
  }, []);
  return (
    <Grid container className="my-20">
      <Typography textAlign={"center"} fontSize={30} className="mx-10">
        Índice de enfermedades mas frecuentes en el ambulatorio urbano 1 Bernardino Martínez
      </Typography>
      <Separador />

      <DonutGraph data={GraphData} />
    </Grid>
  );
}
