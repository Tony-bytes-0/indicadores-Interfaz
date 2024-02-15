"use client"
import { Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Separador from '@/components/Separador'
import { setTopDiseases} from '@/redux/graph/topDiseases'
import CountLine from './CountLine'
import IterateMonths from './IterateMonths'
/* import SelectMonth  from './SelectMonth' // TORTA
import Graph from './Graph' */ // TORTA




export default function Variacion() {

  const dispatch = useDispatch()
    // const ordenadas = useSelector (state => state.topDiseases) //TORTA

      function fetchHistoryGraph(){
        axios.get('http://localhost:4000/visitas/ordenar')
        .then(function(response){
            dispatch(setTopDiseases(response.data))
        })
      }
    useEffect(() => {
      fetchHistoryGraph();
    }, [])
  return (<Grid container className='my-10'>
    <Grid item xs= {12} > <Typography textAlign={'center'} fontSize={30}>Índice de atención en el ambulatorio urbano 1 Bernardino Martínez</Typography> </Grid>

    <Separador /> 

    <Grid className='my-10 px-5' item xs = {8}> <CountLine /> </Grid> 

    <Grid item xs = {3}> <IterateMonths /> </Grid>
      
  </Grid>
    
  )
}
