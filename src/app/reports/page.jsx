"use client";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TotalOnMonths from "./general/TotalOnMonths";
import General from "./general/General";
import KeyValueTableRow from "./general/KeyValueTableRow";
import axios from "axios";
import Head from "./Head";

function Page() {
  const [generalTotal, setGeneralTotal] = useState([
    {
      nombreEnfermedad: "titulo estatico",
      count: "data estatica",
    },
  ]);
  const [firstVisit, setFirstVisit] = useState([
    {
      identificacion: 20,
      cantidad_visitas: 20,
    },
  ]);
  const [regularVisit, setRegularVisit] = useState([
    {
      identificacion: 20,
      cantidad_visitas: 20,
    },
  ]);
  const [report, setReport] = useState([
    {
      title: "Total atendidos del año en curso",
      data: "29",
    },
    {
      title: "Cantidad de pacientes asistiendo por primera vez",
      data: "200",
    },
    {
      title: "Pacientes con asistencias mas frecuentes",
      data: "1283",
    },
    {
      title: "Sintoma / Enfermedad mas reportada Nº1 ",
      data: "666",
    },
    {
      title: "",
      data: "",
    },
  ]);

  const example = [
    {
      month: "enero",
      symptom: "gripe",
      site: "Cantarrana",
      age: "menores de edad",
      count: 50,
    },
    {
      month: "febrero",
      symptom: "gripe",
      site: "Cantarrana",
      age: "menores de edad",
      count: 28,
    },
    {
      month: "marzo",
      symptom: "paludismo",
      site: "Cantarrana",
      age: "mayores de edad",
      count: 98,
    },
    {
      month: "abril",
      symptom: "gripe",
      site: "Cantarrana",
      age: "menores de edad",
      count: 50,
    },
    {
      month: "mayo",
      symptom: "tos seca",
      site: "Cantarrana",
      age: "tercera edad",
      count: 50,
    },
  ];
  useEffect(() => {
    axios.get("http://localhost:4000/visitas/ordenar").then((response) => {
      setGeneralTotal(response.data.slice(0, 10));
    });
    axios.get("http://localhost:4000/visitas/visitCount").then((response) => {
      setFirstVisit(response.data.filter((e) => e.cantidad_visitas == 1));
      setRegularVisit(response.data.filter((e) => e.cantidad_visitas > 1));
      console.log("data fetch! ", response.data);
    });
  }, []);

  return (
    <Grid container className="my-10">
      <Head title={"Principales 10 causas por morbilidad"} />
      <General list={generalTotal} />

      <Head title={"Cantidad de pacientes por frecuencia"} />
      <KeyValueTableRow
        list={[
          {
            title: "Pacientes asistiendo por primera vez",
            count: firstVisit.length,
          },
        ]}
      />
      <KeyValueTableRow
        list={[
          {
            title: "Pacientes asistiendo de manera regular",
            count: regularVisit.length,
          },
        ]}
      />
      <Head title ={"Principales causas de morbilidad por mes"} />
      <TotalOnMonths colectionList={example} />
    </Grid>
  );
}

export default Page;
