import { Box, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { odontologuiaSet, oftalmologuiaSet, traumatologuiaSet, orlSet, pediatriaSet, medicinaInternaSet } from '../redux/provisionalData/atencionEspecial'

export default function AtencionEspecial() {
    const dispatch = useDispatch()
    const odontologuia = useSelector(state => state.atencionEspecial.odontologuia)
    const traumatologuia = useSelector(state => state.atencionEspecial.traumatologuia)
    const oftalmologuia = useSelector(state => state.atencionEspecial.oftalmologuia)
    const orl = useSelector(state => state.atencionEspecial.orl)
    const pediatria = useSelector(state => state.atencionEspecial.pediatria)
    const medicinaInterna = useSelector(state => state.atencionEspecial.medicinaInterna)
    

    const handleOdontologuia = (event) => { dispatch(odontologuiaSet(parseInt(event.target.value))) }
    const handleTraumatologuia = (event) => { dispatch(traumatologuiaSet(parseInt(event.target.value))) }
    const handleOrl = (event) => { dispatch(orlSet(parseInt(event.target.value))) }
    const handleOftalmologuia = (event) => { dispatch(oftalmologuiaSet(parseInt(event.target.value))) }
    const handlePediatria = (event) => { dispatch(pediatriaSet(parseInt(event.target.value))) }
    const handleMedicinaInterna = (event) => { dispatch(medicinaInternaSet(parseInt(event.target.value))) }




    return (
        <Grid item xs={12}>
            <Typography className='bg-slate-300' textAlign={'center'}>Atencion especial</Typography>

            <Grid item xs={12} className='p-4 '  >
                <Box display={'flex'} className={'content-center align-middle'}>

                    <TextField id="outlined-basic" label="Odontologuía" variant="outlined" value={odontologuia} onChange={handleOdontologuia} type='number' />

                    <TextField id="outlined-basic" label="Traumatología" variant="outlined" value={traumatologuia} onChange={handleTraumatologuia} type='number' />

                    <TextField id="outlined-basic" label="ORL" variant="outlined" value={orl} onChange={handleOrl} type='number' />

                    <TextField id="outlined-basic" label="Pediatría" variant="outlined" value={pediatria} onChange={handlePediatria} type='number' />

                    <TextField id="outlined-basic" label="Oftalmologuía" variant="outlined" value={oftalmologuia} onChange={handleOftalmologuia} type='number' />

                    <TextField id="outlined-basic" label="Medicina interna" variant="outlined" value={medicinaInterna} onChange={handleMedicinaInterna} type='number' />




                </Box>


            </Grid>

        </Grid>
    )
}