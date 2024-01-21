import { Grid, Typography } from '@mui/material'
import React from 'react'
import TopDiseases from './TopDiseases'

export default function page() {
  return (<Grid container className='my-10'>
        <Grid item xs= {12} > <Typography textAlign={'center'} fontSize={30}>Índice de atención en el ambulatorio urbano 1 Bernardino Martínez</Typography> </Grid>

        <TopDiseases />
  </Grid>
  )
}
