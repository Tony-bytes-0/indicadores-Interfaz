import { Box, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { susecivaSet, primeraConsultaSet } from '../redux/provisionalData/diagnostico'

export default function Diagnostico() {
    const dispatch = useDispatch()
    const primeraConsulta = useSelector(state => state.diagnostico.primeraConsulta)
    const suseciva = useSelector(state => state.diagnostico.suseciva)

    

    const handlePrimeraConsulta = (event) => { dispatch(primeraConsultaSet(parseInt(event.target.value))) }

    const handleSuseciva = (event) => { dispatch(susecivaSet(parseInt(event.target.value))) }

    



    /*     const men = useSelector(state => state.sector);
        const handlePrimeraConsulta = (event) => { dispatch(setMen(event.target.value)) } */

    return (
        <Grid item xs={12}>
            <Typography className='bg-slate-300' textAlign={'center'}>Diagnostico</Typography>

            <Grid item xs={12} className='p-4 '  >
                <Box display={'flex'} className={'content-center align-middle'}>

                    <TextField id="outlined-basic" label="Primeras consultas" variant="outlined" value={primeraConsulta} onChange={handlePrimeraConsulta} type='number' />

                    <TextField id="outlined-basic" label="Consultas susecivas " variant="outlined" value={suseciva} onChange={handleSuseciva} type='number' />


                    

                </Box>


            </Grid>

        </Grid>
    )
}