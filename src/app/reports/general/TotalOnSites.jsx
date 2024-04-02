import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function General(props) {
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper} sx={{ minWidth: 650 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="bg-slate-200" align="left">
                <Typography fontSize={14} sx={{ fontWeight: "bold" }}>
                  Localidad
                </Typography>
              </TableCell>
              <TableCell className="bg-slate-200" align="center">
                <Typography fontSize={14} sx={{ fontWeight: "bold" }}>
                  Cantidad de afectados
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.list.map((e, index) => (
              <TableRow
                key={index}
                className={index % 2 == 0 ? "" : "bg-slate-200"}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  <Typography fontSize={18}>{e.nombreLocalidad}</Typography>
                </TableCell>
                <TableCell align="center">{e.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default General;
