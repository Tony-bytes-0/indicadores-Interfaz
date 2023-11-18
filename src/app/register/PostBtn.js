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
import { setId } from '@/redux/Register/userData/person/id'
import { setNombre } from '@/redux/Register/userData/person/nombre'
import { setApellido } from '@/redux/Register/userData/person/apellido'
import { setIdentificacion } from '@/redux/Register/userData/person/identificacion'
import { setSexo } from '@/redux/Register/userData/person/sexo'
import { setTipo_sangre } from '@/redux/Register/userData/person/tipo_sangre'
import { setFecha_de_nacimiento } from '@/redux/Register/userData/person/fecha_de_nacimiento'
import { setTelefono } from '@/redux/Register/userData/person/telefono'
import { setTelefono_emergencia } from '@/redux/Register/userData/person/telefono_emergencia'
import { setDireccion } from '@/redux/Register/userData/person/direccion'
import { setSector } from '@/redux/Register/userData/person/sector'

import { setActiveAllergies } from "@/redux/Register/allergies/activeAllergies"
import { setActiveDiseases } from "@/redux/Register/Symptoms/activeDiseases"
import { normalizeActiveSymptoms } from "@/redux/Register/Symptoms/ActiveSymptoms";
import { normalizeActiveEmatology } from "@/redux/Register/ematology/activeEmatology";
import { normalizeActiveCoprouro } from '@/redux/Register/coprouro/activeCoprouro';
import { normalizeActiveRadiography } from '@/redux/Register/radiography/activeRadiography'
import { setRecipe } from "@/redux/Register/preMedicalRecord/recipe";
import { setIndications } from "@/redux/Register/preMedicalRecord/indications";


export default function PostBtn(){
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    const style = { "margin": "2%" }

    const preSymptoms = useSelector( state => state.activeSymptoms)
    const Symptoms = preSymptoms.map((e) => e.body)


    
    function createMedicalRecord() {
        const obj = { altura: store.getState().size, peso: store.getState().weight, 
            temperatura: store.getState().temp,  observaciones: store.getState().observations, 
            fecha: store.getState().medicalRecordDate,  razon_visita:"consulta", 
            tension: store.getState().sistolic + ' / ' + store.getState().diastolic, N_historia:"0", 
            sintomas: Symptoms.toString(), problems:[] }
        
        if(isNaN(obj.altura)){obj.problems.push(' Altura')}
        if(isNaN(obj.peso)){obj.problems.push(' Peso')}
        if(isNaN(store.getState().sistolic )){obj.problems.push(' Tension Sistolica')}
        if(isNaN(store.getState().diastolic)){obj.problems.push(' Tension Diastolica')}
        if(isNaN(obj.temperatura)){obj.problems.push(' Temperatura')}
        return obj
    }
    function createDataObject (){//extends
        return {
            "nombre": store.getState().nombre,
            "apellido": store.getState().apellido,
            "identificacion": store.getState().identificacion,
            "fecha_de_nacimiento": store.getState().fecha_de_nacimiento,
            "direccion": store.getState().direccion,
            "tipo_sangre": store.getState().tipo_sangre,
            "sexo": store.getState().sexo,
            "telefono": store.getState().telefono,
            "telefono_emergencia": store.getState().telefono_emergencia,
            "sector": store.getState().sectorList.find(x => x.nombre_sector === store.getState().sector).id, //esto me trae el id del sector
        }
    }
    function postPreMedicalRecord(obj){
        axios.post('http://localhost:300/phistoria', obj)
        .then((response) =>{
            console.log('la phistoria se creo correctamente', response.data)
            postMR(getMRData(response.data.id))
        })
        .catch((response) =>{
            console.log('ha ocurrido un error en la pre historia medica', response)
        })
    }
    function postMR(obj){
        axios.post('http://localhost:300/historiam', obj)
        .then((response) => {
            alert('creacion exitosa');
            normalize();
        })
        .catch((response) =>{
            console.log('ha ocurrido un error al crear la historia medica', response)
        })
    }
    function getMRData(phistoriaId){
        const coprouro = store.getState().activeCoprouro.map((e) => e.nombre)
        const ematologys = store.getState().activeEmatology.map((e) => e.nombre)
        const radiographys = store.getState().activeRadiography.map((e) => e.body)

        console.log(radiographys)
        return {"recipe":store.getState().recipe, "indicaciones": store.getState().indications,
        "phistoria":phistoriaId, 
        "coprouro": coprouro.toString(),
        "analisis":ematologys.toString(),
        "img":radiographys.toString()
    }
    }
    function postPersondThenMedicalRecord(object){//extends
        const check = Object.values(object).map((e) => {
        if(e === undefined || e === ''){return false} else{return true} })//validacion de campos vacios
        if(check.includes(true)){//si alguno de los campos contienen datos:
            console.log(object)
            axios.post('http://localhost:300/person', object)
            .then((response) =>{
                const newUser = response.data; 
                postPreMedicalRecord({...createMedicalRecord(), person: newUser.id});
                console.log('al crear usuario e historia, estos son los datos enviados: ', {...createMedicalRecord(), person: newUser.id})
            })
            .catch((response) => {
                alert('ocurrio un error con el registro de los datos del paciente')
            })
            }
    }
    function normalize(){
        dispatch(setSize('')); dispatch(setTemp('')); dispatch(setDiastolic('')); dispatch(setSistolic(''));
        dispatch(setObservations('')); dispatch(setWeight('')); dispatch(setMedicalRecordDate('1999-01-01')); 

        dispatch(setNombre('')); dispatch(setApellido('')); dispatch(setIdentificacion('')); dispatch(setSexo('')); dispatch(setFecha_de_nacimiento('2000-01-01'));
        dispatch(setTelefono('')); dispatch(setTelefono_emergencia('')); dispatch(setDireccion('')); dispatch(setSector('')); dispatch(setTipo_sangre(''));
        dispatch(setId('newUser'));
        dispatch(setActiveAllergies());dispatch(setActiveDiseases()); dispatch(normalizeActiveSymptoms());
        dispatch(normalizeActiveRadiography()); dispatch(normalizeActiveEmatology()); dispatch(normalizeActiveCoprouro());
        dispatch(setRecipe('')); dispatch(setIndications(''))
    }


    return <div className="centrate"> 
       
        {/* <Button onClick={() => {console.log(createMedicalRecord())}}>dime que hay en el objeto de medical record</Button> */}
        <Button variant="contained" className="bg-blue-600" style={style}  onClick={() => {
            var attempt = createMedicalRecord()
            if(store.getState().id !== 'newUser'){//usuario ya existente seleccionado
                if(attempt.problems.length < 1){
                    postPreMedicalRecord({...createMedicalRecord(), person: store.getState().id })
                    console.log('este es el objeto enviado: ', {...createMedicalRecord(), person: store.getState().id })
                }
                else{
                    alert('error, en los siguientes campos no hay numeros: ' + attempt.problems)
                }
            }//usuario nuevo

            else{ postPersondThenMedicalRecord( createDataObject() )  }


        }}> Registar Historia Medica </Button>   


    </div>
}