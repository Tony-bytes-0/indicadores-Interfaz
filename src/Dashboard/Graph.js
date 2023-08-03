import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Grid, Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const labels = ['incidencias generales', 'COVID-19'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Anual',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#2261FF',
    },
    {
      label: 'Mensual',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#FE53BD',
    },
  ],
};

export const datas = { labels, data}

export function Graph() {
  return <Grid container>
    <Grid item xs = {12}><Typography variant='h2' component={"h2"} textAlign={'center'}> Total de incidencias </Typography></Grid>
    <Grid item xs = {12}> <Bar options={options} data={data} />;</Grid>
  </Grid>
}
