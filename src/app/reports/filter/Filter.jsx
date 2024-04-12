"use client";
import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import GeneralAutofillList from "@/components/generalAutofillList/GeneralAutoFillList";
import Genero from "@/app/reports/filter/Genero";
import DateRange from "@/app/reports/filter/DateRange";
import Head from "@/components/Head";
function Filter(props) {
  return (
    <Grid container>
      <Head title={"Generar reporte"} />
      <Grid item xs={12}>
        <Typography variant="caption" color="initial">
          rellene los selectores que necesite para generar un reporte
          personalizado, pueden ser uno o varios a la vez
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <GeneralAutofillList
          selectorGridXsSize={12}
          variable={props.enfermedad}
          route={"enfermedades"}
          handler={props.handleEnfermedad}
          listLabel={"Enfermedad"}
          listNameProperty="nombreEnfermedad"
          addField={false}
        />
      </Grid>
      <Grid item xs={6}>
        <GeneralAutofillList
          selectorGridXsSize={12}
          variable={props.localidad}
          route={"localidad"}
          handler={props.handleLocalidad}
          listLabel={"Localidad"}
          listNameProperty="nombreLocalidad"
          addField={false}
        />
      </Grid>
      <Grid item xs={12} marginTop={5} />{" "}
      {/* esto es para hacer un salto de linea en el grid */}
      <Grid item xs={2}>
        <Typography
          component={Box}
          marginTop={2}
          justifyContent={"left"}
          textAlign={"left"}
        >
          <b>Mostrar atendidos: </b>
        </Typography>
      </Grid>
      <DateRange
        value={props.fechaInicio}
        handler={props.handleFechaInicio}
        label={"Desde"}
        xs={5}
      />
      <DateRange
        value={props.fechaFin}
        handler={props.handleFechaFinal}
        label={"Hasta"}
        xs={5}
      />
      <Grid item xs={12} marginTop={5} />{" "}
      {/* esto es para hacer un salto de linea en el grid */}
      <Grid item xs={2}>
        <Typography
          component={Box}
          marginTop={2}
          justifyContent={"left"}
          textAlign={"left"}
        >
          <b>Segun su fecha de nacimiento: </b>
        </Typography>
      </Grid>
      <DateRange
        value={props.edadMin}
        handler={props.handleEdadMin}
        label={"Desde"}
        xs={5}
      />
      <DateRange
        value={props.edadMax}
        handler={props.handleEdadMax}
        label={"Hasta"}
        xs={5}
      />
      <Grid item xs={12} marginTop={5} />{" "}
      {/* esto es para hacer un salto de linea en el grid */}
      <Typography
        component={Box}
        marginTop={2}
        marginRight={2}
        justifyContent={"center"}
      >
        <b>Mostrar segun su genero: </b>
      </Typography>
      <Genero value={props.genero} handler={props.handleGenero} />
    </Grid>
  );
}

export default Filter;
