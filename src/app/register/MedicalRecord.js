//React
import { useState } from "react"
//Modules
import Separador from "@/components/Separador";

//MUI
import { Grid, TextField, InputLabel, FormControl } from "@mui/material"


//Modulos
  //import AllergiesList from "./AllergiesList"
  //import CronicDiseasesList from "./CronicDiseasesList"
  //import Allergies from "./Allergies"; import CronicDiseases from "./CronicDiseases"; import SelectedDiseases from "./SelectedDiseases";
  //import ModalTests from "./modals/ModalTests"

import Obsevations from "./Observations";
import PreMedicalRecord from "./PreMedicalRecord";
import SymptomSelect from "./SymptomSelect";
import { useSelector, useDispatch } from "react-redux";
import { setMedicalRecordDate } from "@/redux/Register/preMedicalRecord/MedicalRecordDate";
import Indications from './Indications'; import Recipe from './Recipe'



export default function MedicalRecord(){//Main
  const dispatch = useDispatch()
  useState( () => {
    dispatch(setMedicalRecordDate(new Date().toJSON().slice(0, 10).replace(/-/g, '-')));
  }, [])

  const medicalRecordDate = useSelector(state => state.medicalRecordDate)
  const handleMedicalRecordDate = (event) => { dispatch(setMedicalRecordDate(event.target.value)) }
 
    return<>
    <Grid container className='fadeIn p-6'>
        
        <Separador label={'Datos de la Historia Medica'} />{/* SEPARADOR */}
        <PreMedicalRecord />
        <Obsevations />
        <SymptomSelect />
        
        <Grid item xs = {12}> 
            <FormControl fullWidth sx={{"padding":"3%"}}>
                <InputLabel>Fecha de Consulta</InputLabel>
                <TextField id="date"  type="date" InputLabelProps={{shrink: true}} variant="filled"
                value={medicalRecordDate} onChange={handleMedicalRecordDate}></TextField>    
            </FormControl>
        </Grid>

      <Separador /> <Indications /> <Recipe />

    </Grid>



    </>
}


{/*  creo que esto no va al final        
  <Allergies /> 
  <CronicDiseases />
  <SelectedDiseases />
  <ModalTests/>  
*/}