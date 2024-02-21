import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { green, red } from "@mui/material/colors";

export default function InfoCard(props) {
  const Arrow = React.memo(function Arrow(props) {
    if (props.icon == "up") {
      return <ArrowUpwardIcon sx={{ color: green[900] }} />;
    } else if (props.icon == "down") {
      return <ArrowDownwardIcon sx={{ color: red[900] }} />;
    } else {
      <HorizontalRuleIcon sx={{ color: "gray" }} />;
    }
  });

  const cardStyle = {
    padding: "15px",
    margin: "5px",
    textAlign: "center",
    color: "#00000",
    //backgroundColor: '#007bff', // You can choose any color here
    borderRadius: "5px",
    //backgroundColor: "#2ecc71",
    backgroundColor: props.color,
    border: "3px solid #000",
  };
  //console.log(props, props.title, props.number, 'desde InfoCard')
  return (
    <Grid item xs={5} style={cardStyle}>
      <Box className="flex flex-col overflow-visible break-words flex-wrap break-all">
        <Typography fontSize={22} className="flex flex-wrap">
          <b>{props.title}</b>
        </Typography>
        <Typography fontSize={22} className="flex ">
          {props.number} %
        </Typography>
        <Arrow icon={props.icon} />
      </Box>
    </Grid>
  );
}
