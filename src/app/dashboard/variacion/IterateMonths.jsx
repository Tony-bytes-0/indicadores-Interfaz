import React from "react";
import { useSelector } from "react-redux";
import InfoCard from "./InfoCard";
import { Grid } from "@mui/material";

function IterateMonths() {
  const monthLabels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const totalCount = useSelector((state) => state.totalCount);
  return (
    <Grid container>
      {monthLabels.map((item, index) => (
        <InfoCard key={index} title={item} number={ Object.values(totalCount)[index] } />
      ))}
    </Grid>
  );
}

export default IterateMonths;
