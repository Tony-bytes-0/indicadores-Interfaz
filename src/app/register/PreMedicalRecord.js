import { Grid, TextField , Box, Button, Typography } from "@mui/material";
import {  useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
//Reducers
import { setSize } from "@/redux/Register/preMedicalRecord/size";
import { setWeight } from "@/redux/Register/preMedicalRecord/weight";
import { setTemp } from "@/redux/Register/preMedicalRecord/temp";
import { setDiastolic } from "@/redux/Register/preMedicalRecord/diastolic";
import { setSistolic } from "@/redux/Register/preMedicalRecord/sistolic";
const sm = { width: '33%', maxWidth: '33%', padding:'10px' }
const full = { width: '40%', padding:'7px'}


export default function PreMedicalRecord(){
    const validateNumber="[0-9]";
    const dispatch = useDispatch()

    const size = useSelector(state => state.size)
    const weight = useSelector( state => state.weight)
    const temp = useSelector(state => state.temp)
    const sistolic = useSelector(state => state.sistolic)
    const diastolic = useSelector(state => state.diastolic)

    const handleSize = (event) => { if(event.target.value.match(validateNumber) != null || event.target.value === ''){
        dispatch(setSize(event.target.value))} }
    const handleWeight = (event) => { if(event.target.value.match(validateNumber) != null || event.target.value === ''){ 
        dispatch(setWeight(event.target.value))} }
    const handleTemp = (event) => { if(event.target.value.match(validateNumber) != null || event.target.value === ''){ 
        dispatch(setTemp(event.target.value))} }
    const handleSistolic = (event) => { if(event.target.value.match(validateNumber) != null || event.target.value === ''){ 
        dispatch(setSistolic(event.target.value))} }
    const handleDiastolic = (event) => { if(event.target.value.match(validateNumber) != null){ dispatch(setDiastolic(event.target.value))} }


    return<>
    <Grid item xs = {9}><Box className='centrate' sx={{"marginTop":"10px"}}>
        <TextField sx={sm} label='Altura (Centimetros)' onChange={handleSize} value={size} >Altura</TextField>
        <TextField sx={sm} label='Peso (Kilogramos)' onChange={handleWeight} value={weight}>Peso</TextField> 
        <TextField sx={sm} label='Temperatura (Grados Celcius)' onChange={handleTemp} value={temp}>Temperatura</TextField>
        {/*<TextField sx={sm} label='Presion Arterial (mm Hg)' onChange={handlePressure} value={pressure}>Presion Arterial</TextField>*/}
    </Box></Grid>
    <Grid item xs = {3} >
        <Box sx={{'display': 'flex','flex-direction':'row' , 'flex-wrap': 'wrap'}} className='my-3'> 
            <TextField sx={full} label='Tension Sistolica' value={sistolic} onChange={handleSistolic} >Presion Arterial</TextField>
            <Typography sx={{fontSize:'35px'}} > / </Typography >
            <TextField sx={full} label='Tension diastolica'  value={diastolic} onChange={handleDiastolic}>Presion Arterial</TextField>
        </Box>
    </Grid>

    </>
}