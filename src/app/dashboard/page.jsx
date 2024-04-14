"use client";
import { Grid, ButtonGroup, Button } from "@mui/material";
import React, { useState } from "react";
import Variacion from "./variacion/Variacion";
import Morbilidad from "./morbilidad/Morbilidad";
import Triage from "./triage/Triage";
import Panel from "./Panel";
import Satisfaccion from "./satisfaccion/Satisfaccion"
import Capacitacion from "./capacitacion/Capacitacion"

export default function Page() {
  const [actualDate, setActualDate] = useState(new Date());
  const [panel, setPanel] = useState({
    variacion: false,
    triage: false,
    morbilidad: false,
    satisfaccion: false,
    capacitacion: false,
  });
  const handlePanel = (actual) => {
    const currentValue = panel[actual];
    setPanel({ ...panel, [actual]: !currentValue });
  };

  return (
    <Grid container className="my-10">
      <Panel handlePanel={handlePanel} panel={panel} />
      {panel.variacion ? <Variacion year={actualDate.getFullYear()} /> : <></>}

      {panel.triage ? <Triage year={actualDate.getFullYear()} /> : <></>}

      {panel.morbilidad ? <Morbilidad year={actualDate.getFullYear()} /> : <></>}

      {panel.satisfaccion ? <Satisfaccion year={actualDate.getFullYear()} /> : <></>}

      {panel.capacitacion ? <Capacitacion year={actualDate.getFullYear()} /> : <></>}
    </Grid>
  );
}
