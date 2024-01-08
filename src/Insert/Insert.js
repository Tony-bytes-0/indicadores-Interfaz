import { Grid } from '@mui/material'
import React from 'react'
import Triage from './Triage'
import Diagnostico from './Diagnostico'
import AtencionEspecial from './atencionEspecial'
import Tension from './Tension'

function Index() {
  return (
    <Grid container>
        <Triage />
        <Diagnostico />
        <Tension />
        <AtencionEspecial />
    </Grid>
  )
}

export default Index
