"use client";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import General from "./general/General";
import TotalOnMonths from "./general/TotalOnMonths";
import KeyValueTableRow from "./general/KeyValueTableRow";
import TotalOnSites from "./general/TotalOnSites"
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
  const [sitesCount, setSitescount] = useState([
    {
      nombreLocalidad: 'titulo estatico', count: 1
    }
  ])
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
  ];
  useEffect(() => {
    axios.get("http://localhost:4000/visitas/ordenar").then((response) => {
      setGeneralTotal(response.data.slice(0, 10));
    });
    axios.get("http://localhost:4000/visitas/visitCount").then((response) => {
      setFirstVisit(response.data.filter((e) => e.cantidad_visitas == 1));
      setRegularVisit(response.data.filter((e) => e.cantidad_visitas > 1));
    });
    axios.get("http://localhost:4000/persona/sitesCount").then((response) => {
      setSitescount(response.data.slice(0, 10));
    })
  }, []);

  return (
    <Grid container className="my-10">
      <Head title={"Principales 10 causas por morbilidad"} />
      <General list={generalTotal} />

      <Head title = {"Principales 10 localidades afectadas"} />
      <TotalOnSites list = {sitesCount} />

      <Head title={"Cantidad de pacientes por frecuencia"} />
      <KeyValueTableRow
        title={"Pacientes asistiendo por primera vez"}
        count={firstVisit.length}
      />
      <KeyValueTableRow
        title={"Pacientes asistiendo de manera regular"}
        count={regularVisit.length}
      />
{/*       <Head title={"Principales causas de morbilidad por mes"} />
//necesito meter varios sql aqui, sintoma mas comun, comunidad mas afectada, edades mas afectadas, y un total al final
      <TotalOnMonths colectionList={example} /> */}
    </Grid>
  );
}

export default Page;
