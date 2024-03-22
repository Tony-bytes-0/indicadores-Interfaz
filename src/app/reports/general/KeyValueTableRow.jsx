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

function KeyValueTableRow(props) {
  return (
    <Grid item xs={6}>
      <TableContainer component={Paper} sx={{ minWidth: 650 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/*           <TableHead>
            <TableRow>
              <TableCell className="bg-slate-200">
                <Typography variant="overline" fontSize={18}>
                  {props.title}
                </Typography>
              </TableCell>
              <TableCell className="bg-slate-200"></TableCell>
            </TableRow>
          </TableHead> */}

          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ fontWeight: "bold" }}
                align="left"
              >
                <Typography fontSize={18}>{props.title}</Typography>
              </TableCell>
              <TableCell align="left">{props.count}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default KeyValueTableRow;
