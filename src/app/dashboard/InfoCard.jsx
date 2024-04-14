import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircleIcon from '@mui/icons-material/Circle';
import { Grid } from "@mui/material";

export default function InfoCard(props) {
  return (
    <Grid item className="m-2">
      <Card sx={{ minWidth: 200 }} className="bg-slate-100">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h6" component="div" className="left">
            {props.message}<br/>
            {props.message2}{props.message2 ? <br/> : <></>}
            <b>{props.number}</b> = {props.percentage} %
          </Typography>
          <Typography variant="body2">
            <br />
            {props.dot ? <CircleIcon sx={{ color: props.dotColor }}/> : <></> }


          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
