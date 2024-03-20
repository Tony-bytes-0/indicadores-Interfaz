import { Grid } from "@mui/material";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function TotalOnMonths(props) {
  return (
    <Grid item xs= {5}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="border border-b-8">
              <TableCell >Mes</TableCell>
              <TableCell className="text-center" >Sintoma más común</TableCell>
              <TableCell className="text-center">
                Comunidad más afectada
              </TableCell>
              <TableCell className="text-center">
                Edades más afectadas
              </TableCell>

              <TableCell className="text-center">Total atendidos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.colectionList.map((e, index) => (
              <TableRow className={index % 2 == 0 ? "bg-slate-200" : ""}
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{e.month}</TableCell>
                <TableCell className="text-center">{e.symptom}</TableCell>
                <TableCell className="text-center">{e.site}</TableCell>
                <TableCell className="text-center">{e.age}</TableCell>
                <TableCell className="text-center">{e.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default TotalOnMonths;
