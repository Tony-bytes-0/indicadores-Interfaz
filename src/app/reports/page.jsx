"use client"
import React, { useState } from "react";
import { Grid } from "@mui/material";
import Filter from "./filter/Filter"

function page() {
  return <Grid container marginTop={5} paddingRight={7}>
    <Filter />
  </Grid>;
}

export default page;
