import { Box, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { menSet, womenSet } from '../redux/provisionalData/provisionalData'

export default function Triage() {
    const dispatch = useDispatch()
    const men = useSelector(state => state.provisionalData.men)
    const women = useSelector(state => state.provisionalData.women)

    const handleMen = (event) => { dispatch(menSet(parseInt(event.target.value))) }
    const handleWomen = (event) => { dispatch(womenSet(parseInt(event.target.value))) }



/*     const men = useSelector(state => state.sector);
    const handleMen = (event) => { dispatch(setMen(event.target.value)) } */

  return (
    <Grid item xs={12}>
        <Typography className='bg-slate-300' textAlign={'center'}>Triage</Typography>
        
    <Grid item xs = {12} className='p-4 '  >
        <Box display={'flex'} className={'content-center align-middle'}>

            <TextField id="outlined-basic" label="Hombres" variant="outlined" value={men} onChange={handleMen} type='number' />

            <TextField id="outlined-basic" label="Mujeres" variant="outlined" value={women} onChange={handleWomen} type='number'/>

        </Box>


    </Grid>

    </Grid>
  )
}
