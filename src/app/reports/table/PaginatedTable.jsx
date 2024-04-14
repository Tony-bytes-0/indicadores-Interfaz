"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PaginatedTable = (props) => {
  const [tableData, setTableData] = useState([]);
  
  function calculateAge(rawDate) {
    const date = new Date(rawDate);
    var today = new Date();
    return parseInt((today - date) / (1000 * 60 * 60 * 24 * 365));
  }
  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow style={{ borderBottom: "4px solid #000" }}>
            <TableCell align="center">
              <b>Nombre</b>
            </TableCell>
            <TableCell align="center">
              <b>Identificación</b>
            </TableCell>
            <TableCell align="center">
              <b>Género</b>
            </TableCell>
            <TableCell align="center">
              <b>Edad</b>
            </TableCell>
            <TableCell align="center">
              <b>Numeros de telefono</b>
            </TableCell>
            <TableCell align="center">
              <b>Nº de visitas</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.persona_identificacion}
/*               sx={{
                "&:hover": {
                  background: "#DEDEDE", // Cambia 'red' por el color que desees para el hover
                  transition: "background 0.3s ease", // Añade una transición suave al cambio de background
                },
              }}*/
            > 
              <TableCell align="center">
                {row.persona_nombre} {row.persona_apellido}
              </TableCell>
              <TableCell align="center">{row.persona_identificacion}</TableCell>
              <TableCell align="center">{row.persona_genero}</TableCell>
              <TableCell align="center">
                {calculateAge(row.persona_fechaNacimiento)}
              </TableCell>
              <TableCell align="center">
                {row.persona_telefono} / {row.persona_telefonoEmergencia}
              </TableCell>
              <TableCell align="center">{row.visitas_count}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaginatedTable;
