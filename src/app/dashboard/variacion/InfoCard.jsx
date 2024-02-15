import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function InfoCard(props) {
  const cardStyle = {
    padding: "15px",
    margin: "5px",
    textAlign: "center",
    color: "#fff",
    //backgroundColor: '#007bff', // You can choose any color here
    borderRadius: "5px",
    backgroundColor: "#2ecc71",
    border: "3px solid #000",
  };
  //console.log(props, props.title, props.number, 'desde InfoCard')
  return (
    <Grid item xs={5} style={cardStyle} className=" ">
      <Box className="flex flex-col overflow-visible break-words flex-wrap break-all" >
        <Typography fontSize={22} className="flex flex-wrap">
          {props.title}
        </Typography>
        <Typography fontSize={22} className="flex text-center text-start">
          {props.number}
        </Typography>
      </Box>
    </Grid>
  );
}
