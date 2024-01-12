import { Grid, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSacs } from '@/redux/Register/userData/medico/sacs'
import { setNombreMedico } from '@/redux/Register/userData/medico/nombreMedico'
import { setEspecialidad } from '@/redux/Register/userData/medico/especialidad'
import Separador from '@/components/Separador'


export default function Medic() {
    const dispatch = useDispatch()
    const sacs = useSelector(state => state.sacs )
    const nombreMedico = useSelector(state => state.nombreMedico )
    const especialidad = useSelector(state => state.especialidad )

    const handleSacs = (event) => { dispatch(setSacs(event.target.value)) }
    const handleNombreMedico = (event) => { dispatch(setNombreMedico(event.target.value)) }
    const handleEspecialidad = (event) => { dispatch(setEspecialidad(event.target.value)) }

    const sm = { width: '25%', maxWidth: '25%', padding:'5px' }


  return (
    <Grid container className='fadeIn p-6'>
                                                        <Separador label={'Datos del Medico'} /> 

        <Grid item xs={12}>
            <div>
                <TextField sx={sm} label="SACS" variant="filled" onChange = {handleSacs} value = {sacs} />

                <TextField sx={sm} label="nombre medico" variant="filled" onChange = {handleNombreMedico} value = {nombreMedico}  />

                <TextField sx={sm} label="especialidad" variant="filled" onChange = {handleEspecialidad} value = {especialidad}  />



            </div>
        </Grid>
    </Grid>
  )
}
