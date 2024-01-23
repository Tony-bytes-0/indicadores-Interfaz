"use client"
import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTotalCount } from '@/redux/graph/totalCount';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );




export default function CountLine() {
  const dispatch = useDispatch()
  const totalCount = useSelector(state => state.totalCount)

  useEffect( () => {
    axios.get('http://localhost:4000/visitas/count')
    .then(function(response){
      dispatch(setTotalCount(response.data.result))
    })
  })
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'morbilidad por mes',
          },
        },
      };
      
      const labels = ['Diciembre', 'Enero' , 'Febrero' ];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Totales',
            data: ['8', totalCount , '7'],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
      
/*           {
            label: 'Enero',
            data: ['200'],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
      
          {
              label: 'Febrero',
              data: ['1', '2' , '3'],
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }, */
        ],
      };
      
  return <Line options={options} data={data} />;
}
