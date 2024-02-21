import React from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@mui/material";

const IterateMonths = React.memo(function IterateMonths(props) {
  return (
    <Grid container>
      {props.monthLabels.map((item, index) => (
        <InfoCard
          key={index}
          title={item}
          number={props.formula[index]}
          color={props.color[index]}
          icon = {props.icon[index]}
        />
      ))}
    </Grid>
  );
}
)

export default IterateMonths;
