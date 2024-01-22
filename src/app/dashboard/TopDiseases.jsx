"use client"
import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Graph from './Graph'
import { useDispatch, useSelector } from 'react-redux'
import { setEnfermedadesList } from '@/redux/register/preMedicalRecord/enfList'
import { setTopDiseases} from '@/redux/graph/topDiseases'

export default function TopDiseases() {
  const dispatch = useDispatch()
    //const [listaEnfermedades, setLista] = useState([])
    const listaEnfermedades = useSelector(state => state.enfList)
    //const [ordenadas, setOrdenadas] = useState([])
    const ordenadas = useSelector (state => state.topDiseases)
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
    const topDiseasesGraphData = {
        labels: Object.keys(ordenadas),
        datasets: [{
          label: 'Diagnosticados', data:  Object.values(ordenadas),
          backgroundColor: triageColor.backgroundColor,
          borderColor: triageColor.borderColor,
        }
        ]
      }

      function fetchTopDiseases(){
        axios.get('http://localhost:4000/visitas/ordenar')
        .then(function(response){
            dispatch(setTopDiseases(response.data))
        })
      }
    useEffect(() => {
      fetchTopDiseases();
    }, [])
  return (<Grid item xs = {12} className='my-10'>

    <Grid item xs = {3}> <Graph graph={topDiseasesGraphData} /> </Grid>
    
    
  </Grid>
    
  )
}
