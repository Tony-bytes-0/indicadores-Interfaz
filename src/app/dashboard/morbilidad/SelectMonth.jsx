import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { monthLabels } from "../common";

function SelectMonth(props) {
  return (
    <Grid container margin={5} alignContent={'center'} justifyContent={'center'}>
        <Grid item xs = {12}>
      <FormControl fullWidth>
        <InputLabel>Seleccionar Mes</InputLabel>
        <Select value={props.month} onChange={props.handleMonth}>
          {monthLabels.map((e, index) => (
            <MenuItem key={index} value={monthLabels.indexOf(e)}>{e}</MenuItem>
          ))}
        </Select>
        <Button variant="contained" className="bg-blue-500" onClick={props.fetchData}>Filtrar</Button>
      </FormControl></Grid>
    </Grid>
  );
}

export default SelectMonth;
