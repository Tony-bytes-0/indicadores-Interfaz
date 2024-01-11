import { configureStore } from '@reduxjs/toolkit'
//controllers
import activeGraphs from './graphState/activeGraphs'
import registerController from '@/redux/Register/registerController/registerController';

//Direcciones
import estadoList from './Register/registerController/estadoList';
import municipioList from './Register/registerController/municipioList';
import sectorList from './Register/registerController/sectorList';
import parroquiaList from './Register/registerController/parroquiaList';

//Historia medica
import activeSymptoms from './Register/Symptoms/ActiveSymptoms';
import doctor from './Register/preMedicalRecord/doctor'

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

        //historia medica
        activeSymptoms:activeSymptoms, 
        doctor: doctor,
        
        activeGraphs: activeGraphs, 
        provisionalData: provisionalData, atencionEspecial:atencionEspecial, diagnostico:diagnostico, tension:tension,

        //static data
        lastMonth: lastMonth, estadoList, municipioList, sectorList, parroquiaList,

        //indicators
        triageState: triageState, diagnosticoState: diagnosticoState, tensionState: tensionState, atencionEspecialState: atencionEspecialState
    
    }
        
})



