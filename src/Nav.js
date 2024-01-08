import { Button, ButtonGroup, Grid } from '@mui/material'
import { useNavigate } from 'react-router'
import React from 'react'

export default function Nav() {
    const navigate = useNavigate()
  return (
    <Grid container>
        <Grid item xs={12}>
            <ButtonGroup>
                <Button variant='contained' onClick={()  => {navigate('/')}}>inicio</Button>
                <Button variant='contained' onClick={() => {navigate('/insert')}}>insertar datos</Button>
                <Button variant='contained' onClick={() => {navigate('/parameters')}}>indicadores de gestion</Button>
            </ButtonGroup>
        </Grid>
    </Grid>
  )
}
