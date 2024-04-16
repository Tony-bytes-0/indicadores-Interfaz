import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export default function BasicTable(props) {
  function formatDate(fechaString) {
    const fecha = new Date(fechaString);
    const dia = fecha.getDate().toString().padStart(2, "0"); // Asegura que el día tenga dos dígitos
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const ano = fecha.getFullYear();
    //console.log(`${dia}-${mes}-${ano}`)
    return `${dia}-${mes}-${ano}`;
  }
  const toggleModal = (event) => {
    filterAndDispatch(event.currentTarget.id);
    setModal(!isModalOpen);
  };
  const titleRows = [
    "Nombre",
    "Síntoma principal",
    "Peso",
    "Altura",
    "Temperatura",
    "Presión arterial",
    "Satisfacción del paciente con la atención",
    "Médico responsable",
    "Observaciones e indicaciones",
    "Fecha de visita",
  ];
  return (
    <TableContainer
      component={Paper}
      className="animationSlideIn mt-10 p-18 mr-10"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {titleRows.map((e, index) => (
              <TableCell align="left" key={index}>
                <b>{e}</b>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userList.map((row, index) => (
            <TableRow
              key={row.index}
              className="hover:shadow-lg hover:bg-slate-200 "
            >
              <TableCell id="nombre">
                {row.persona_nombre + " " + row.persona_apellido}{" "}
              </TableCell>
              <TableCell>{row.enfermedades_nombreEnfermedad}</TableCell>
              <TableCell align="left">{row.peso}</TableCell>
              <TableCell align="left">{row.altura}</TableCell>
              <TableCell align="left">{row.temperatura}</TableCell>
              <TableCell align="left">
                {row.visitas_tensionSistolica} / {row.visitas_tensionDiastolica}
              </TableCell>
              <TableCell align="left">
                {row.visitas_satisfaccionPaciente}
              </TableCell>
              <TableCell align="left">
                {row.medico_nombreMedico} código: {row.medico_sacs}
              </TableCell>
              <TableCell align="left">{row.observaciones}</TableCell>
              <TableCell align="left">{formatDate(row.fechavisita)}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
