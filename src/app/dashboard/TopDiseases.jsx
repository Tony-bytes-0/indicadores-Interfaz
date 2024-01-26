"use client"
import { Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Separador from '@/components/Separador'
import { setTopDiseases} from '@/redux/graph/topDiseases'
import CountLine from './CountLine'
/* import SelectMonth  from './SelectMonth' // TORTA
import Graph from './Graph' */ // TORTA




export default function TopDiseases() {
  const dispatch = useDispatch()
    const ordenadas = useSelector (state => state.topDiseases)
    const month = useSelector (state => state.indicatorSelectedMonth)
    const triageColor = {
        borderColor: [
          'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
        ],
    
      backgroundColor:[
          'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
      ]
    }
/*     const topDiseasesGraphData = {
        labels: Object.keys(ordenadas),
        datasets: [{
          label: 'Numero de casos: ', data:  Object.values(ordenadas),
          backgroundColor: triageColor.backgroundColor,
          borderColor: triageColor.borderColor,
        }
        ]
      } */
      function fetchTopDiseases(){
        axios.get('http://localhost:4000/visitas/ordenar')
        .then(function(response){
            dispatch(setTopDiseases(response.data))
        })
      }
    useEffect(() => {
      fetchTopDiseases();
    }, [])
  return (<Grid container className='my-10'>
    <Grid item xs= {12} > <Typography textAlign={'center'} fontSize={30}>Índice de atención en el ambulatorio urbano 1 Bernardino Martínez</Typography> </Grid>

    <Separador /> 

    <Grid item xs = {12}> <Paper className='bg-slate-300'> <Typography className='text-2xl text-center'> {month} </Typography>  </Paper> </Grid>

    {/* <Grid className='my-10 px-7' item xs = {3}><div> <Graph graph={topDiseasesGraphData} /> </div> </Grid> */}

    {/* <Grid className='my-10' item xs = {2}> <SelectMonth /> </Grid> */}
    
    <Grid className='my-10 px-5' item xs = {10}> <CountLine /> </Grid>

      
  </Grid>
    
  )
}
