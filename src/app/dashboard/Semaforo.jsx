"use client"
import { Card, CardHeader, Grid } from '@mui/material'
import { green, red, yellow } from '@mui/material/colors'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'

const dots = {green: green[500], yellow: yellow[500], red: red[400] }



export default function Semaforo(props) {
    
    function getColor(msj){
        if(msj === 'Bien'){return dots.green}
        else if(msj === 'Regular'){return dots.yellow}
        else if(msj === 'Alerta'){return dots.red}
    }; const dotColor = getColor(props.value.msj);

  return (<Grid item className='mx-5 my-5' >
    <Card >
    <CardHeader className='shadow-2xl	'
        avatar={ <CircleIcon sx={{color: dotColor}} /> } 
        title={props.title}
        subheader={props.value.dashboardMessage}
      /> 
    </Card>
  </Grid>)
}

