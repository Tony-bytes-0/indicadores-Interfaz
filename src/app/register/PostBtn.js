import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { setSize } from "@/redux/Register/preMedicalRecord/size";
import { setTemp } from "@/redux/Register/preMedicalRecord/temp";
import { setObservations } from "@/redux/Register/preMedicalRecord/obsevations";
import { setWeight } from "@/redux/Register/preMedicalRecord/weight";
import { setSistolic } from "@/redux/Register/preMedicalRecord/sistolic"
import { setDiastolic } from "@/redux/Register/preMedicalRecord/diastolic"
import { setMedicalRecordDate } from "@/redux/Register/preMedicalRecord/MedicalRecordDate";
import { setNombre } from '@/redux/Register/userData/person/nombre'
import { setApellido } from '@/redux/Register/userData/person/apellido'
import { setIdentificacion } from '@/redux/Register/userData/person/identificacion'
import { setGenero } from '@/redux/Register/userData/person/genero'
import { setTipoSangre } from '@/redux/Register/userData/person/tipoSangre'
import { setFechaNacimiento } from '@/redux/Register/userData/person/fechaNacimiento'
import { setTelefono } from '@/redux/Register/userData/person/telefono'
import { setTelefonoEmergencia } from '@/redux/Register/userData/person/telefonoEmergencia'
import { setDireccion } from '@/redux/Register/userData/person/direccion'

//import { setDiastolic } from "@/redux/Register/preMedicalRecord/diagnostico";
import { setIndications } from "@/redux/Register/preMedicalRecord/indications";
import store from "@/redux/store";


export default function PostBtn(){
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    const style = { "margin": "2%" }


    
    function sendData() {
        const dataObject = {

            user: {
                "identificacion": store.getState().identificacion,
                "nombre": store.getState().nombre,
                "apellido": store.getState().apellido,
                "genero": store.getState().genero,
                "telefono": store.getState().telefono,
                "telefonoEmergencia": store.getState().telefonoEmergencia,
                "fechaNacimiento": store.getState().fechaNacimiento,
                "tipoSangre": store.getState().tipoSangre,
                "direccion":store.getState().direccion,
                //"sector": store.getState().sectorList.find(x => x.nombre_sector === store.getState().sector).id, //esto me trae el id del sector
            },

            historiaMedica: { 
                "altura": store.getState().altura, 
                "peso": store.getState().peso, 
                "temperatura": store.getState().temperatura, 
                "tensionSistolica": store.getState().sistolica,
                "tensionDiastolica": store.getState().diastolica,
                "observaciones": store.getState().observaciones,
                "fechaVisita": store.getState().fechaVisita.replaceAll('-', '/'),
            },

            problems:[]  

        }
        if(isNaN(dataObject.historiaMedica.altura)){dataObject.problems.push(' Altura')} //validaciones
        if(isNaN(dataObject.historiaMedica.peso)){dataObject.problems.push(' Peso')}
        if(isNaN(dataObject.historiaMedica.tensionSistolica )){dataObject.problems.push(' Tension Sistolica')}
        if(isNaN(dataObject.historiaMedica.tensionDiastolica)){dataObject.problems.push(' Tension Diastolica')}
        if(isNaN(dataObject.historiaMedica.temperatura)){dataObject.problems.push(' Temperatura')}

        return dataObject

    }

    function normalize(){
        dispatch(setSize('')); dispatch(setTemp('')); dispatch(setDiastolic('')); dispatch(setSistolic(''));
        dispatch(setObservations('')); dispatch(setWeight('')); dispatch(setMedicalRecordDate('1999-01-01')); 
        dispatch(setNombre('')); dispatch(setApellido('')); dispatch(setIdentificacion('')); dispatch(setGenero('')); dispatch(setFechaNacimiento('2000-01-01'));
        dispatch(setTelefono('')); dispatch(setTelefonoEmergencia('')); dispatch(setDireccion('')); dispatch(setTipoSangre(''));
        dispatch(setRecipe('')); dispatch(setIndications(''))
    }


    return <div className="text-center"> 
       
        <Button variant="contained" className="bg-blue-600 " style={style}  onClick={() => {
            const attempt = sendData()
            if(attempt.problems.length >= 1){
                alert('error, en los siguientes campos hay caracteres que no son numeros: ' + attempt.problems)
            }
            else{
                console.log( sendData() )    
            } 
            

        }}> Registar Historia Medica </Button>   


    </div>
}