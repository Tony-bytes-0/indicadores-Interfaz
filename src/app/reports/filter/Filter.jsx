"use client";
import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Divider,
  Box,
} from "@mui/material";
import GeneralAutofillList from "@/components/generalAutofillList/GeneralAutoFillList";
import Genero from "@/app/reports/filter/Genero";
import DateRange from "@/app/reports/filter/DateRange";
import Head from "@/components/Head";
import Table from "@/app/reports/table/Table";
import axios from "axios";
function Filter() {
  const url = "http://localhost:4000/visitas/reports";
  const [enfermedad, setEnfermedad] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [fechaInicio, setInicio] = useState("");
  const [fechaFin, setFinal] = useState("");
  const [genero, setGenero] = useState("Ambos");
  const [edadMin, setMin] = useState("");
  const [edadMax, setMax] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleEnfermedad = (event) => {
    setEnfermedad(event);
  };
  const handleLocalidad = (event) => {
    setLocalidad(event);
  };
  const handleGenero = (event) => {
    setGenero(event.target.value);
  };
  const handleFechaInicio = (event) => {
    setInicio(event.target.value);
  };
  const handleFechaFinal = (event) => {
    setFinal(event.target.value);
  };
  const handleEdadMin = (event) => {
    setMin(event.target.value);
  };
  const handleEdadMax = (event) => {
    setMax(event.target.value);
  };
  const params = {
    localidad: localidad !== null ? localidad.id : "",
    enfermedad: enfermedad !== null ? enfermedad.id : "",
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    edadMin: edadMin,
    edadMax: edadMax,
    genero: genero !== "Ambos" ? genero : "",
  };

  const fetchReport = () => {
    axios.get(url, { params }).then((response) => {
      console.log(response.data);
      setTableData(response.data);
    });
  };
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
          variable={enfermedad}
          route={"enfermedades"}
          handler={handleEnfermedad}
          listLabel={"Enfermedad"}
          listNameProperty="nombreEnfermedad"
          addField={false}
        />
      </Grid>
      <Grid item xs={6}>
        <GeneralAutofillList
          selectorGridXsSize={12}
          variable={localidad}
          route={"localidad"}
          handler={handleLocalidad}
          listLabel={"Localidad"}
          listNameProperty="nombreLocalidad"
          addField={false}
        />
      </Grid>
      <Grid item xs={12} marginTop={5} />{" "}
      {/* esto es para hacer un salto de linea en el grid */}
      <Typography
        component={Box}
        marginTop={2}
        marginRight={3}
        justifyContent={"center"}
      >
        <b>Mostrar atendidos: </b>
      </Typography>
      <DateRange
        value={fechaInicio}
        handler={handleFechaInicio}
        label={"Desde"}
        xs={2}
      />
      <DateRange
        value={fechaFin}
        handler={handleFechaFinal}
        label={"Hasta"}
        xs={2}
      />
      <Typography
        component={Box}
        marginTop={2}
        marginRight={2}
        marginLeft={2}
        justifyContent={"center"}
      >
        <b>Segun su fecha de nacimiento: </b>
      </Typography>
      <DateRange value={edadMin} handler={handleEdadMin} label={"Desde"} xs={2} />
      <DateRange
        value={edadMax}
        handler={handleEdadMax}
        label={"Hasta"}
        xs={2}
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
      <Genero value={genero} handler={handleGenero} />
        <Button onClick={fetchReport} variant="contained" padding={ 2 } marginLeft={5} className="bg-blue-500" > Generar reporte </Button>
      <Table data={tableData} />
    </Grid>
  );
}

export default Filter;
