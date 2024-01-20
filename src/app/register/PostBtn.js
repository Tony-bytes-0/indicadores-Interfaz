import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { setSize } from "@/redux/register/preMedicalRecord/size";
import { setTemp } from "@/redux/register/preMedicalRecord/temp";
import { setObservations } from "@/redux/register/preMedicalRecord/obsevations";
import { setWeight } from "@/redux/register/preMedicalRecord/weight";
import { setSistolic } from "@/redux/register/preMedicalRecord/sistolic"
import { setDiastolic } from "@/redux/register/preMedicalRecord/diastolic"
import { setMedicalRecordDate } from "@/redux/register/preMedicalRecord/MedicalRecordDate";
import { setNombre } from '@/redux/register/userData/person/nombre'
import { setApellido } from '@/redux/register/userData/person/apellido'
import { setIdentificacion } from '@/redux/register/userData/person/identificacion'
import { setGenero } from '@/redux/register/userData/person/genero'
import { setTipoSangre } from '@/redux/register/userData/person/tipoSangre'
import { setFechaNacimiento } from '@/redux/register/userData/person/fechaNacimiento'
import { setTelefono } from '@/redux/register/userData/person/telefono'
import { setTelefonoEmergencia } from '@/redux/register/userData/person/telefonoEmergencia'
import { setDireccion } from '@/redux/register/userData/person/direccion'

//import { setDiastolic } from "@/redux/register/preMedicalRecord/diagnostico";
import { setIndications } from "@/redux/register/preMedicalRecord/indications";
import store from "@/redux/store";


export default function PostBtn(){
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    const style = { "margin": "2%" }


    function dataObject(){return {
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
            "alergias":'prueba',
            //"sector": store.getState().sectorList.find(x => x.nombre_sector === store.getState().sector).id, //esto me trae el id del sector
        },

        historiaMedica: { 
            "altura": store.getState().altura,
            "peso": store.getState().peso, 
            "temperatura": store.getState().temperatura, 
            "tensionSistolica": store.getState().sistolica,
            "tensionDiastolica": store.getState().diastolica,
            "observaciones": store.getState().observaciones,
            "fechaVisita": store.getState().fechaVisita,
        },

        enfermedades: store.getState().enfermedades ,

        medic: {
            "sacs": store.getState().sacs,
            "nombreMedico": store.getState().nombreMedico,
            "especialidad": store.getState().especialidad
        }
    }
}
    function sendData(personaHistoriaDto) {
        /*if(isNaN(dataObject.historiaMedica.altura)){dataObject.problems.push(' Altura')} //validaciones
        if(isNaN(dataObject.historiaMedica.peso)){dataObject.problems.push(' Peso')}
        if(isNaN(dataObject.historiaMedica.tensionSistolica )){dataObject.problems.push(' Tension Sistolica')}
        if(isNaN(dataObject.historiaMedica.tensionDiastolica)){dataObject.problems.push(' Tension Diastolica')}
        if(isNaN(dataObject.historiaMedica.temperatura)){dataObject.problems.push(' Temperatura')}
        if(dataObject.problems.length >= 1){
            alert('error, en los siguientes campos hay caracteres que no son numeros: ' + attempt.problems)
        } */
        //else{
            //console.log('el objeto a ser enviado: ', dataObject)
            console.log(personaHistoriaDto)
            axios.post('http://localhost:4000/visitas/personaHistoria', personaHistoriaDto)
            .then(function (response) {
                console.log(response.data);
            })

        //} 

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
            sendData(dataObject())
        }}> Registar Historia Medica </Button>   


    </div>
}