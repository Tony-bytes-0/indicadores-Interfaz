"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
} from "@mui/material";

const PaginatedTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const currentRows = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  function calculateAge(rawDate) {
    const date = new Date(rawDate);
    var today = new Date();
    return parseInt((today - date) / (1000 * 60 * 60 * 24 * 365));
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Identificación</TableCell>
            <TableCell>Genero</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Numeros de telefono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
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
