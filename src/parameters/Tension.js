import React from "react"
import { Grid, Typography, Slider } from "@mui/material"

const regularPadding = { "margin-top": "40px" }

export default function Tension() {
    return (<React.Fragment>
        <Grid item xs={12} > <Typography variant="h6" className='rojo' textAlign={'center'}> Tensión </Typography> </Grid>

        <Grid item xs={8}>
            <Typography variant='h5'>  Mostrar advertencia <b>media</b> </Typography>
            <Slider style={regularPadding} defaultValue={5} step={5} min={5} max={100} valueLabelDisplay="on" />

            <Typography variant='h5'>  Mostrar advertencia <b>critica</b>  </Typography>
            <Slider style={regularPadding} defaultValue={20} step={20} min={20} max={500} valueLabelDisplay="on" />

        </Grid>
    </React.Fragment>)
}