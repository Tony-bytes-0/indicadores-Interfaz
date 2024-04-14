import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function Panel(props) {
  return (
    <ButtonGroup variant="outlined" color="primary" aria-label="">
{/*       <Button onClick={() => {props.handlePanel('variacion')}}>Mostrar variación</Button>
      <Button onClick={ () => {props.handlePanel('triage')}}>Mostrar triage</Button>
      <Button onClick={() => {props.handlePanel('morbilidad')}}>Mostrar morbilidad</Button>
      <Button onClick={() => {props.handlePanel('satisfaccion')}}>Mostrar Satisfacción</Button>
      <Button onClick={() => {props.handlePanel('capacitacion')}}>Mostrar personal</Button> */}
      <FormGroup>
        <FormControlLabel control={<Switch checked={props.panel.variacion} onChange={() => {props.handlePanel('variacion')}} />} label='Variación en las visitas' />
        <FormControlLabel control={<Switch checked={props.panel.triage} onChange={() => {props.handlePanel('triage')}} />} label='Triage' />
        <FormControlLabel control={<Switch checked={props.panel.morbilidad} onChange={() => {props.handlePanel('morbilidad')}} />} label='Morbilidad por mes' />
        <FormControlLabel control={<Switch checked={props.panel.satisfaccion} onChange={() => {props.handlePanel('satisfaccion')}} />} label='Satisfacción del paciente' />
        <FormControlLabel control={<Switch checked={props.panel.capacitacion} onChange={() => {props.handlePanel('capacitacion')}} />} label='Capacitación del personal' />
      </FormGroup>
    </ButtonGroup  >
  );
}
export default Panel;
