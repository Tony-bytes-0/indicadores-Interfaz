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
  function determinateDotColor(valuesAndRanges) {
    const colorList = { bien: "#63FF60", regular: "FFC300", mal: "FF5656" };
    const x = [];
    valuesAndRanges.values.map((e) => {
      if (e > valuesAndRanges.range.bien) {
        x.push(colorList.bien);
      } else if (e < valuesAndRanges.range.mal) {
        x.push(colorList.mal);
      } else x.push(colorList.regular);
    });
    return x;
  }
  return (
    <Grid container className="my-2">
      <Variacion year={actualDate.getFullYear()} />

      <Triage
        calculatePercentages={calculatePercentages}
        year={actualDate.getFullYear()}
        determinateDotColor={determinateDotColor}
      />

      <Morbilidad
        calculatePercentages={calculatePercentages}
        year={actualDate.getFullYear()}
      />
    </Grid>
  );
}
