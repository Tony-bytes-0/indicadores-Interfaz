import React from "react";
import Generos from "./Generos";
import OrdenarPorEdad from "./OrdenarPorEdad";
import { Grid, Typography } from "@mui/material";
import Separador from "@/components/Separador";

function Triage(props) {
  return (
    <Grid container className="justify-center">
      <Typography textAlign={"center"} fontSize={30} className="mt-10 mx-10">
        {"Total de casos atendidos ordenados por triage en el ambulatorio urbano 1 Bernardino Martínez año " +
          props.year}
      </Typography>
      <Separador />
      <Generos
        year={props.year}
        calculatePercentages={props.calculatePercentages}
      />
      <OrdenarPorEdad
        year={props.year}
        calculatePercentages={props.calculatePercentages}
      />
    </Grid>
  );
}

export default Triage;
