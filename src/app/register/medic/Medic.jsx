"use client";
import React, { useCallback, useEffect, useState } from "react";
import MedicSelector from './MedicSelector'
import AddMedic from './AddMedic'
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function Medic() {
  const [select, setSelect] = useState(true)
  const handleSelect = () => {
    setSelect(!select)
  }
  return (
    <Grid container className="fadeIn p-6">
      {select ? <>      <Grid item xs={10}>
        <MedicSelector />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" className="bg-blue-600 m-1 p-4 lowercase" onClick={handleSelect}>
          añadir medico
        </Button>
      </Grid></> : <AddMedic handleSelect = {handleSelect} />}

    </Grid>
  );
}

export default Medic;
