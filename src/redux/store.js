import { configureStore } from '@reduxjs/toolkit'
//controllers
import activeGraphs from './graphState/activeGraphs'
import registerController from '@/redux/Register/registerController/registerController';

//userData
import nombre from './Register/userData/person/nombre';
import apellido from './Register/userData/person/apellido'
import identificacion from './Register/userData/person/identificacion'
import genero from './Register/userData/person/genero'
import telefono from './Register/userData/person/telefono'
import telefonoEmergencia from './Register/userData/person/telefonoEmergencia'
import fechaNacimiento from './Register/userData/person/fechaNacimiento'
import tipoSangre from './Register/userData/person/tipoSangre'
import direccion from './Register/userData/person/direccion'

//Direcciones
import estadoList from './Register/registerController/estadoList';
import municipioList from './Register/registerController/municipioList';
import sectorList from './Register/registerController/sectorList';
import parroquiaList from './Register/registerController/parroquiaList';

//Historia medica
import doctor from './Register/preMedicalRecord/doctor';
import altura from './Register/preMedicalRecord/size';
import temperatura from './Register/preMedicalRecord/temp'
import peso from './Register/preMedicalRecord/weight'
import sistolica from './Register/preMedicalRecord/sistolic'
import diastolica from './Register/preMedicalRecord/diastolic'
import observaciones from './Register/preMedicalRecord/obsevations'
import fechaVisita from './Register/preMedicalRecord/MedicalRecordDate'

import provisionalData from './provisionalData/provisionalData'
import atencionEspecial from './provisionalData/atencionEspecial'
import diagnostico from './provisionalData/diagnostico'
import tension from './provisionalData/tension'
//indicadores
import lastMonth from './indicators/lastMonth';
import triageState from './indicators/triageState'; import diagnosticoState from './indicators/diagnosticoState';
import tensionState from './indicators/tensionState'; import atencionEspecialState from './indicators/atencionEspecialState';

import menuController from './Menu/menuController'; 


export default configureStore({
    reducer: { menuController, registerController,
        //UserData
        nombre: nombre, apellido:apellido, identificacion:identificacion, genero:genero,
        telefono: telefono, telefonoEmergencia: telefonoEmergencia, fechaNacimiento: fechaNacimiento,
        tipoSangre: tipoSangre, direccion: direccion, fechaVisita: fechaVisita,

        //historia medica
        doctor: doctor, altura: altura, peso: peso, temperatura: temperatura,
        sistolica: sistolica, diastolica: diastolica, observaciones,
        
        activeGraphs: activeGraphs, 
        provisionalData: provisionalData, atencionEspecial:atencionEspecial, diagnostico:diagnostico, tension:tension,

        //static data
        lastMonth: lastMonth, estadoList, municipioList, sectorList, parroquiaList,

        //indicators
        triageState: triageState, diagnosticoState: diagnosticoState, tensionState: tensionState, atencionEspecialState: atencionEspecialState
    
    }
        
})



