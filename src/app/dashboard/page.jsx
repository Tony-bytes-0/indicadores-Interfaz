"use client";
import { Grid } from "@mui/material";
import React from "react";
import Variacion from "./variacion/Variacion";
import Morbilidad from "./morbilidad/Morbilidad";

export default function Page() {
  return (
    <Grid container className="my-2">
      <Morbilidad />

      <Variacion />

      {/* <MonthInfo /> */}

      {/* <InfoCard title="My Title" number={123} /> */}
    </Grid>
  );
}
