"use client";
import { Grid } from "@mui/material";
import React from "react";
import Variacion from "./variacion/Variacion";


export default function Page() {


  return (
    <Grid container className="my-2">
      
      <Variacion />
      
      {/* <MonthInfo /> */}
      
          {/* <InfoCard title="My Title" number={123} /> */}

    </Grid>
  );
}
