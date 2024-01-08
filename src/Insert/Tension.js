import { Box, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { normalSet, hipertensoSet, hipotensoSet } from '../redux/provisionalData/tension'

export default function Tension() {
    const dispatch = useDispatch()
    const normal = useSelector(state => state.tension.normal)
    const hipertenso = useSelector(state => state.tension.hipertenso)
    const hipotenso = useSelector(state => state.tension.hipotenso)


    const handleNormal = (event) => { dispatch(normalSet(parseInt(event.target.value))) }
    const handleHipertenso = (event) => { dispatch(hipertensoSet(parseInt(event.target.value))) }
    const handleHipotenso = (event) => { dispatch(hipotensoSet(parseInt(event.target.value))) }




/*     const men = useSelector(state => state.sector);
    const handleMen = (event) => { dispatch(setMen(event.target.value)) } */

  return (
    <Grid item xs={12}>
        <Typography className='bg-slate-300' textAlign={'center'}>Tensión</Typography>
        
    <Grid item xs = {12} className='p-4 '  >
        <Box display={'flex'} className={'content-center align-middle'}>

            <TextField id="outlined-basic" label="Normal" variant="outlined" value={normal} onChange={handleNormal} type='number' />

            <TextField id="outlined-basic" label="Hipertenso" variant="outlined" value={hipertenso} onChange={handleHipertenso} type='number'/>

            <TextField id="outlined-basic" label="Hipotenso" variant="outlined" value={hipotenso} onChange={handleHipotenso} type='number'/>


        </Box>


    </Grid>

    </Grid>
  )
}