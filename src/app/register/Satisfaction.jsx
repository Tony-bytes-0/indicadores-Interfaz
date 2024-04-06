import React from "react";
import { Box, Select, MenuItem, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSatisfaccion } from "@/redux/register/preMedicalRecord/satisfaccion";

export default function Satisfaction() {
  const dispatch = useDispatch();
  const options = ["Buena", "Regular", "Deficiente"];
  const satisfaccion = useSelector((state) => state.satisfaccion);
  const handleChange = (event) => {
    dispatch(setSatisfaccion(event.target.value));
  };
  return (
    <Grid container alignContent={"center"} justifyContent={"center"} flexDirection={'column'}>
      <Typography variant="body1" color="initial" >
        <b>Como calificaria la calidad de la consulta?</b>
      </Typography>

      <Select value={satisfaccion} defaultValue={""} onChange={handleChange}>
        {options.map((e) => (
          <MenuItem key={e} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
}
