import InfoCard from "./InfoCard";
import { useSelector } from "react-redux";

import React from "react";
import { Grid } from "@mui/material";

export default function MonthInfo() {
  const months = useSelector((state) => state.totalCount);
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

  return (
    <Grid container>
      <Grid item xs={12}>

        <InfoCard tittle = 'por favor' number={2} />
        {
            monthLabels.map((e ) => {
                console.log('bucleEEEE!?!?!¿?')
            })
        }
        
      </Grid>
    </Grid>
  );
}
