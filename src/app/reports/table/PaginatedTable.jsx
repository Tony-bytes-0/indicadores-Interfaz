"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PaginatedTable = (props) => {
  const [tableData, setTableData] = useState([])
  
  function calculateAge(rawDate) {
    const date = new Date(rawDate);
    var today = new Date();
    return parseInt((today - date) / (1000 * 60 * 60 * 24 * 365));
  }
  useEffect(() => {
    setTableData(props.data)
  },[props.data])

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow style={{ borderBottom: '4px solid #000' }}>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>Identificación</b></TableCell>
            <TableCell><b>Género</b></TableCell>
            <TableCell><b>Edad</b></TableCell>
            <TableCell><b>Numeros de telefono</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.persona_id}>
              <TableCell>
                {row.persona_nombre} {row.persona_apellido}
              </TableCell>
              <TableCell>{row.persona_identificacion}</TableCell>
              <TableCell>{row.persona_genero}</TableCell>
              <TableCell>{calculateAge(row.persona_fechaNacimiento)}</TableCell>
              <TableCell>
                {row.persona_telefono} / {row.persona_telefonoEmergencia}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaginatedTable;
