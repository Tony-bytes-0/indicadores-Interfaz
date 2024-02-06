"use client";
import { Grid } from "@mui/material";
import React from "react";
import Variacion from "./variacion/HistoryGraph";
import InfoCard from "./variacion/InfoCard";
import { useSelector } from "react-redux";

export default function Page() {
  const months = useSelector(state => state.totalCount);

  return (
    <Grid container className="my-2">
      
      <Variacion />

    </Grid>
  );
}
