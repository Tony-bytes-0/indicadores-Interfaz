"use client";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Variacion from "./variacion/Variacion";
import Morbilidad from "./morbilidad/Morbilidad";
import Triage from "./triage/Triage";

export default function Page() {
  const [actualDate, setActualDate] = useState(new Date());
  function calculatePercentages(array) {
    const base = array.reduce((acc, value) => acc + value, 0);
    return array.map((number) => ((number / base) * 100).toFixed(2));
  }
  return (
    <Grid container className="my-2">
      <Variacion year={actualDate.getFullYear()} />

      <Triage
        calculatePercentages={calculatePercentages}
        year={actualDate.getFullYear()}
      />

      <Morbilidad
        calculatePercentages={calculatePercentages}
        year={actualDate.getFullYear()}
      />
    </Grid>
  );
}
