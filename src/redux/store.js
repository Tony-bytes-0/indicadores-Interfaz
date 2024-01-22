import { configureStore } from '@reduxjs/toolkit'
//controllers
import activeGraphs from './graphState/activeGraphs'
import registerController from '@/redux/register/registerController/registerController';

//userData
import nombre from './register/userData/person/nombre';
import apellido from './register/userData/person/apellido'
import identificacion from './register/userData/person/identificacion'
import genero from './register/userData/person/genero'
import telefono from './register/userData/person/telefono'
import telefonoEmergencia from './register/userData/person/telefonoEmergencia'
import fechaNacimiento from './register/userData/person/fechaNacimiento'
import tipoSangre from './register/userData/person/tipoSangre'
import direccion from './register/userData/person/direccion'

//medico
import sacs from './register/userData/medico/sacs'
import nombreMedico from './register/userData/medico/nombreMedico'
import especialidad from './register/userData/medico/especialidad'

//Direcciones
import estadoList from './register/registerController/estadoList';
import municipioList from './register/registerController/municipioList';
import sectorList from './register/registerController/sectorList';
import parroquiaList from './register/registerController/parroquiaList';

//Historia medica
import doctor from './register/preMedicalRecord/doctor';
import altura from './register/preMedicalRecord/size';
import temperatura from './register/preMedicalRecord/temp'
import peso from './register/preMedicalRecord/weight'
import sistolica from './register/preMedicalRecord/sistolic'
import diastolica from './register/preMedicalRecord/diastolic'
import observaciones from './register/preMedicalRecord/obsevations'
import fechaVisita from './register/preMedicalRecord/MedicalRecordDate'
import enfermedades from '@/redux/register/preMedicalRecord/enfermedad'
import enfList from '@/redux/register/preMedicalRecord/enfList'

import provisionalData from './provisionalData/provisionalData'
import atencionEspecial from './provisionalData/atencionEspecial'
import diagnostico from './provisionalData/diagnostico'
import tension from './provisionalData/tension'
//indicadores
import lastMonth from './indicators/lastMonth';
import triageState from './indicators/triageState'; import diagnosticoState from './indicators/diagnosticoState';
import tensionState from './indicators/tensionState'; import atencionEspecialState from './indicators/atencionEspecialState';
//new
import topDiseases from './graph/topDiseases';



export default configureStore({
    reducer: { 
        //UserData
        nombre: nombre, apellido:apellido, identificacion:identificacion, genero:genero,
        telefono: telefono, telefonoEmergencia: telefonoEmergencia, fechaNacimiento: fechaNacimiento,
        tipoSangre: tipoSangre, direccion: direccion, fechaVisita: fechaVisita,
        sacs:sacs, nombreMedico: nombreMedico, especialidad: especialidad, //medico

        //historia medica
        doctor: doctor, altura: altura, peso: peso, temperatura: temperatura,
        sistolica: sistolica, diastolica: diastolica, observaciones,
        enfermedades: enfermedades, enfList: enfList,
        
        activeGraphs: activeGraphs, 
        provisionalData: provisionalData, atencionEspecial:atencionEspecial, diagnostico:diagnostico, tension:tension,

        //static data
        lastMonth: lastMonth, estadoList, municipioList, sectorList, parroquiaList,

        //indicators
        triageState: triageState, diagnosticoState: diagnosticoState, tensionState: tensionState, atencionEspecialState: atencionEspecialState,
        //new
        topDiseases: topDiseases
        
    
    }
        
})



