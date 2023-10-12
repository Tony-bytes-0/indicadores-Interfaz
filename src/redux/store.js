import { configureStore } from '@reduxjs/toolkit'
import activeGraphs from './graphState/activeGraphs'
import provisionalData from './provisionalData/provisionalData'
import atencionEspecial from './provisionalData/atencionEspecial'
import diagnostico from './provisionalData/diagnostico'
import tension from './provisionalData/tension'

import lastMonth from './indicators/lastMonth'

export default configureStore({
  reducer: {
    activeGraphs: activeGraphs, 
    provisionalData: provisionalData, atencionEspecial:atencionEspecial, diagnostico:diagnostico, tension:tension,

    //static data
    lastMonth: lastMonth,

  },
})