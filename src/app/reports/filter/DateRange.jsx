import React from "react";
import { Grid, TextField } from "@mui/material";

function DateRange(props) {
  return (
    <Grid item xs={props.xs}>
      <TextField
        fullWidth
        type="date"
        label={props.label}
        value={props.value}
        onChange={props.handler}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
  );
}

export default DateRange;
