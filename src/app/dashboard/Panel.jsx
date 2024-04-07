import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function Panel(props) {
  return (
    <ButtonGroup variant="outlined" color="primary" aria-label="">
      <Button onClick={() => {props.handlePanel('variacion')}}>Mostrar variación</Button>
      <Button onClick={ () => {props.handlePanel('triage')}}>Mostrar triage</Button>
      <Button onClick={() => {props.handlePanel('morbilidad')}}>Mostrar morbilidad</Button>
      <Button onClick={() => {props.handlePanel('satisfaccion')}}>Mostrar Satisfacción</Button>
      <Button onClick={() => {props.handlePanel('capacitacion')}}>Mostrar personal</Button>
    </ButtonGroup  >
  );
}
export default Panel;
