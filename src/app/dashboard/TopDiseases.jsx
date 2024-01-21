"use client"
import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function TopDiseases() {
    const [listaEnfermedades, setLista] = useState([])
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
    async function fetchTopDiseases(){
        axios.get('http://localhost:4000/visitas/ordenar')
        .then(async function(response){
            //console.log(response.data, listaEnfermedades)
            const x = response.data.map((e) => {
                for (let i = 0; i < listaEnfermedades.length; i++) {
                    if(e == listaEnfermedades[i].id){
                       return listaEnfermedades[i].nombreEnfermedad
                    }
                }
            }); 
            const repetidos = {};
            x.forEach(function (valor) {
                repetidos[valor] = (repetidos[valor] || 0) + 1;
            }); console.log(repetidos)
        })
    }

    useState( () => {
        axios.get('http://localhost:4000/enfermedades')
        .then(function(response){
            setLista(response.data)
        })
    })
  return (<Grid item xs = {12} className='my-10'>

            
<button onClick={() => fetchTopDiseases()}>FETCH!</button>
  </Grid>
    
  )
}
