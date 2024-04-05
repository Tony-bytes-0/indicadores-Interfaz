import { configureStore } from '@reduxjs/toolkit'
//controllers
import activeGraphs from './graphState/activeGraphs'

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

//Historia medica
import altura from './register/preMedicalRecord/size';
import temperatura from './register/preMedicalRecord/temp'
import peso from './register/preMedicalRecord/weight'
import sistolica from './register/preMedicalRecord/sistolic'
import diastolica from './register/preMedicalRecord/diastolic'
import observaciones from './register/preMedicalRecord/obsevations'
import fechaVisita from './register/preMedicalRecord/MedicalRecordDate'
import enfermedades from '@/redux/register/preMedicalRecord/enfermedad'

//new
import indicatorSelectedMonth from './graph/indicatiorSelectedMonth'
import totalCount from './graph/totalCount'
import updatePerson from './register/userData/person/updatePerson'
import localidad from './register/userData/person/localidad'
import satisfafccion from './register/preMedicalRecord/satisfaction'
import nivelAcademico from './register/userData/medico/nivelAcademico'
import medico from './register/userData/medico/medico'



export default configureStore({
    reducer: { 
        //UserData
        nombre: nombre, apellido:apellido, identificacion:identificacion, genero:genero,
        telefono: telefono, telefonoEmergencia: telefonoEmergencia, fechaNacimiento: fechaNacimiento,
        tipoSangre: tipoSangre, direccion: direccion, fechaVisita: fechaVisita,
        sacs:sacs, nombreMedico: nombreMedico, especialidad: especialidad, 
        updatePerson: updatePerson,

        altura: altura, peso: peso, temperatura: temperatura,
        sistolica: sistolica, diastolica: diastolica, observaciones,
        enfermedades: enfermedades, 
        
        activeGraphs: activeGraphs, 

        //new
        indicatorSelectedMonth: indicatorSelectedMonth, totalCount: totalCount, localidad: localidad,
        satisfafccion: satisfafccion, nivelAcademico: nivelAcademico,
        medico: medico
        
    
    }
        
})



