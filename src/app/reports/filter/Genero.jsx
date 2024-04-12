import React from "react";
import { FormControl, Select, Grid, MenuItem , InputLabel, } from "@mui/material";
function Genero(props) {
  return (
    <Grid item xs={3}>
      <FormControl fullWidth>
      <InputLabel>Genero</InputLabel>
        <Select
          label="Género"
          select
          value={props.value}
          onChange={props.handler}
          fullWidth
        >
          <MenuItem value={"masculino"}>Masculino</MenuItem>
          <MenuItem value={"femenino"}>Femenino</MenuItem>
          <MenuItem value={"Ambos"}>Ambos</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default Genero;
