"use client"
import { Grid, Typography } from '@mui/material'
import React from 'react'
import TopDiseases from './TopDiseases'
import Semaforo from './Semaforo'
import { useSelector } from 'react-redux'

export default function Page() {
  const ordenadas = useSelector (state => state.topDiseases)
  const DatosDePrueba = {
    diarrea:2,
    dolorDeCabeza:7
  }
  function compareLastMonth(actual, compare){
    console.log(' tengo estos valores: ', actual, compare)
    if(actual <= compare){
        return {msj:'Bien', dashboardMessage:'menos casos que el mes anterior'}
    }
    else{
        return {msj: 'Alerta', dashboardMessage:'numero mayor de casos que el mes anterior'}
    }
  }
  return (<Grid container className='my-2'>
        <TopDiseases />

{/*         <Grid container >
          <Semaforo title={Object.keys(ordenadas)[0]} value={compareLastMonth(Object.keys(ordenadas)[0], DatosDePrueba.diarrea)} />
          <Semaforo title={Object.keys(ordenadas)[1]} value={compareLastMonth( Object.values(ordenadas)[1], DatosDePrueba.dolorDeCabeza)} />
        </Grid> */}


  </Grid>
  )
}
